import { useState, useMemo } from "react";
import { useSearchParams } from "react-router";
import { Search, SlidersHorizontal, X, MessageCircle } from "lucide-react";
import { categories } from "../data/categories";
import { products } from "../data/products";
import { ProductCard } from "./ProductCard";
import { getWhatsAppLink } from "./WhatsAppFloat";

export function CatalogPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categorySlug = searchParams.get("categoria") || "";
  const [searchTerm, setSearchTerm] = useState("");
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const activeCategory = categories.find((c) => c.slug === categorySlug);
  const activeCategoryId = activeCategory?.id || "";

  const filteredProducts = useMemo(() => {
    let result = products;

    if (activeCategoryId) {
      result = result.filter((p) => p.category === activeCategoryId);
    }

    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(term) ||
          p.description.toLowerCase().includes(term)
      );
    }

    return result;
  }, [activeCategoryId, searchTerm]);

  function handleCategoryClick(slug: string) {
    if (slug === categorySlug) {
      setSearchParams({});
    } else {
      setSearchParams({ categoria: slug });
    }
    setShowMobileFilters(false);
  }

  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      {/* Page header */}
      <div className="relative overflow-hidden bg-[#0f751d]">
        {/* ── Background layers (same as Hero) ── */}

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
        <div className="absolute top-[20%] left-[10%] w-80 h-80 bg-[#25D366]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] right-[30%] w-96 h-96 bg-black/8 rounded-full blur-[120px]" />

        {/* ── Content ── */}
        <div className="relative max-w-7xl mx-auto px-[16px] py-[48px]">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-white" style={{ fontSize: "clamp(1.25rem, 3vw, 1.75rem)" }}>
                {activeCategory ? activeCategory.name : "Catálogo de Produtos"}
              </h1>
              <p className="text-white/70 text-[14px] mt-1">
                {activeCategory
                  ? activeCategory.description
                  : "Navegue por todo nosso estoque disponível na loja de Anápolis."}
              </p>
            </div>
            
          </div>

          {/* Search */}
          <div className="relative mt-4">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
            <input
              type="text"
              placeholder="Buscar produtos... Ex: porcelanato, torneira, tinta"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/15 outline-none text-[15px] text-white placeholder:text-white/50 focus:bg-white/15 focus:border-white/30 transition-colors"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/50 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 md:py-8">
        <div className="flex gap-6">
          {/* Sidebar filters - desktop */}
          <aside className="hidden md:block w-64 shrink-0">
            <div className="bg-white rounded-xl border border-border p-4 sticky top-28">
              <h3 className="mb-3" style={{ fontSize: "0.95rem" }}>Categorias</h3>
              <nav className="flex flex-col gap-1">
                <button
                  onClick={() => setSearchParams({})}
                  className={`text-left px-3 py-2 rounded-lg text-[14px] transition-colors ${
                    !categorySlug
                      ? "bg-[#e8f5e9] text-[#0f751d]"
                      : "text-[#333] hover:bg-gray-50"
                  }`}
                  style={{ fontWeight: !categorySlug ? 600 : 400 }}
                >
                  Todos os produtos
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryClick(cat.slug)}
                    className={`text-left px-3 py-2 rounded-lg text-[14px] transition-colors ${
                      categorySlug === cat.slug
                        ? "bg-[#e8f5e9] text-[#0f751d]"
                        : "text-[#333] hover:bg-gray-50"
                    }`}
                    style={{ fontWeight: categorySlug === cat.slug ? 600 : 400 }}
                  >
                    {cat.name}
                    <span className="text-[#999] ml-1 text-[12px]">
                      ({products.filter((p) => p.category === cat.id).length})
                    </span>
                  </button>
                ))}
              </nav>

              {/* WhatsApp CTA in sidebar */}
              <div className="mt-5 pt-5 border-t border-border">
                <p className="text-[13px] text-[#6b6b6b] mb-3">
                  Não encontrou o que procura?
                </p>
                <a
                  href={getWhatsAppLink("Olá! Procuro um produto que não encontrei no catálogo. Podem me ajudar?")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#0f751d] hover:bg-[#0a5a15] text-white py-2.5 rounded-lg transition-colors text-[14px] w-full"
                >
                  <MessageCircle className="w-4 h-4" />
                  Pergunte no WhatsApp
                </a>
              </div>
            </div>
          </aside>

          {/* Mobile filter button */}
          <button
            onClick={() => setShowMobileFilters(true)}
            className="md:hidden fixed bottom-20 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 bg-[#1a1a1a] text-white px-5 py-3 rounded-full shadow-lg"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filtrar{categorySlug ? `: ${activeCategory?.name}` : ""}
          </button>

          {/* Mobile filter sheet */}
          {showMobileFilters && (
            <div className="fixed inset-0 z-50 md:hidden">
              <div
                className="absolute inset-0 bg-black/50"
                onClick={() => setShowMobileFilters(false)}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl max-h-[70vh] overflow-y-auto">
                <div className="flex items-center justify-between p-4 border-b border-border">
                  <h3 style={{ fontSize: "1rem" }}>Filtrar por categoria</h3>
                  <button onClick={() => setShowMobileFilters(false)}>
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <nav className="flex flex-col p-4 gap-1">
                  <button
                    onClick={() => {
                      setSearchParams({});
                      setShowMobileFilters(false);
                    }}
                    className={`text-left px-4 py-3 rounded-lg text-[15px] transition-colors ${
                      !categorySlug
                        ? "bg-[#e8f5e9] text-[#0f751d]"
                        : "text-[#333] hover:bg-gray-50"
                    }`}
                  >
                    Todos os produtos
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryClick(cat.slug)}
                      className={`text-left px-4 py-3 rounded-lg text-[15px] transition-colors ${
                        categorySlug === cat.slug
                          ? "bg-[#e8f5e9] text-[#0f751d]"
                          : "text-[#333] hover:bg-gray-50"
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          )}

          {/* Products grid */}
          <div className="flex-1 min-w-0">
            {/* Active filter tag */}
            {categorySlug && (
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[13px] text-[#6b6b6b]">Filtrando por:</span>
                <button
                  onClick={() => setSearchParams({})}
                  className="inline-flex items-center gap-1.5 bg-[#e8f5e9] text-[#0f751d] px-3 py-1 rounded-full text-[13px]"
                >
                  {activeCategory?.name}
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            {filteredProducts.length > 0 ? (
              <>
                <p className="text-[13px] text-[#6b6b6b] mb-4">
                  {filteredProducts.length} produto{filteredProducts.length !== 1 ? "s" : ""} encontrado{filteredProducts.length !== 1 ? "s" : ""}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-16">
                <div className="bg-[#f0f0f0] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Search className="w-7 h-7 text-[#999]" />
                </div>
                <h3 className="text-[#1a1a1a] mb-2">Nenhum produto encontrado</h3>
                <p className="text-[#6b6b6b] text-[14px] mb-4">
                  Tente ajustar a busca ou categoria selecionada.
                </p>
                <a
                  href={getWhatsAppLink("Olá! Não encontrei o produto que procuro no catálogo. Podem me ajudar?")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white px-5 py-2.5 rounded-lg transition-colors text-[14px]"
                >
                  <MessageCircle className="w-4 h-4" />
                  Pergunte no WhatsApp
                </a>
              </div>
            )}

            {/* Bottom CTA */}
            {filteredProducts.length > 0 && (
              null
            )}
          </div>
        </div>
      </div>
    </div>
  );
}