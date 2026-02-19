import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { Menu, X, MessageCircle, Search } from "lucide-react";
import { getWhatsAppLink } from "./WhatsAppFloat";
import imgLogo from "figma:asset/c8b5e134e89ff38d5e64c38de16034fce6e1008f.png";

const navLinks = [
  { label: "Início", href: "/" },
  { label: "Catálogo", href: "/catalogo" },
  { label: "Ofertas", href: "/ofertas" },
  { label: "Sobre", href: "/sobre" },
  { label: "Localização", href: "/localizacao" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Pages with green hero that get the green header at top
  const greenHeroPages = ["/", "/catalogo", "/sobre", "/localizacao"];
  const hasGreenHero = greenHeroPages.some(
    (p) => p === "/" ? location.pathname === "/" : location.pathname.startsWith(p)
  );
  const isGreen = hasGreenHero && !scrolled && !mobileOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/catalogo?busca=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setMobileOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-hidden ${
        isGreen
          ? "border-b border-white/10"
          : "bg-white border-b border-gray-100 shadow-sm"
      }`}
    >
      {/* ── Green background layers (hero-style) ── */}
      {isGreen && (
        <>
          {/* Solid green base */}
          <div className="absolute inset-0 bg-[#0f751d]" />

          {/* Radial gradient for depth */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 20% 50%, rgba(20,140,45,0.4) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 80% 30%, rgba(0,0,0,0.2) 0%, transparent 60%)",
            }}
          />

          {/* Architectural grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />

          {/* Dot grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          {/* Diagonal accent lines */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 80px, rgba(255,255,255,0.5) 80px, rgba(255,255,255,0.5) 81px)",
            }}
          />

          {/* Subtle blur glow spots */}
          <div className="absolute top-0 left-[10%] w-80 h-40 bg-[#25D366]/10 rounded-full blur-[80px]" />
          <div className="absolute top-0 right-[20%] w-60 h-32 bg-black/8 rounded-full blur-[60px]" />
        </>
      )}

      {/* Main header */}
      <div className="relative max-w-7xl mx-auto px-4 flex items-center justify-between h-18 md:h-24 gap-6">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0 flex items-center self-center">
          <img
            src={imgLogo}
            alt="Goiás Materiais para Construção"
            className={`h-12 md:h-16 w-auto object-contain transition-all duration-300 ${
              isGreen ? "brightness-0 invert" : ""
            }`}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1 flex-shrink-0 self-center">
          {navLinks.map((link) => {
            const isActive =
              location.pathname === link.href ||
              (link.href !== "/" && location.pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`px-4 py-2 rounded-lg text-[15px] transition-all duration-300 ${
                  isGreen
                    ? isActive
                      ? "bg-white/15 text-white"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                    : isActive
                      ? "bg-[#e8f5e9] text-[#0f751d]"
                      : "text-[#444] hover:bg-gray-50 hover:text-[#222]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Search (desktop) */}
        <form
          onSubmit={handleSearch}
          className="hidden md:flex items-center flex-1 max-w-sm self-center"
        >
          <div className="relative w-full">
            <Search
              className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors duration-300 ${
                isGreen ? "text-white/50" : "text-gray-400"
              }`}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar produtos, marcas ou categorias"
              className={`w-full pl-10 pr-4 py-2 rounded-lg text-[14px] transition-all duration-300 focus:outline-none ${
                isGreen
                  ? "bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:border-white/40 focus:ring-1 focus:ring-white/20"
                  : "bg-gray-50 border border-gray-200 text-[#333] placeholder:text-gray-400 focus:border-[#0f751d]/40 focus:ring-1 focus:ring-[#0f751d]/20"
              }`}
            />
          </div>
        </form>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 lg:hidden self-center">
          <button
            className={`p-2 rounded-lg transition-colors duration-300 ${
              isGreen
                ? "text-white hover:bg-white/10"
                : "text-[#444] hover:bg-gray-50"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="p-4 space-y-3">
            <form onSubmit={handleSearch}>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar produtos, marcas ou categorias"
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-[14px] text-[#333] placeholder:text-gray-400 focus:outline-none focus:border-[#0f751d]/40 transition-colors"
                />
              </div>
            </form>

            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive =
                  location.pathname === link.href ||
                  (link.href !== "/" && location.pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`px-4 py-3 rounded-lg transition-colors ${
                      isActive
                        ? "bg-[#e8f5e9] text-[#0f751d]"
                        : "text-[#444] hover:bg-gray-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-lg transition-colors hover:bg-[#1da851]"
            >
              <MessageCircle className="w-5 h-5" />
              Fale no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}