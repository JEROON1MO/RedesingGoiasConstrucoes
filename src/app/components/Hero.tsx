import { Link } from "react-router";
import { ArrowRight, MessageCircle, ShieldCheck, Package, Users } from "lucide-react";
import { getWhatsAppLink } from "./WhatsAppFloat";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import heroConstructionImg from "figma:asset/f936108773809cbb8be23c5f9a02512012cdb81a.png";

const heroImages = {
  construction: heroConstructionImg,
  interior: "https://images.unsplash.com/photo-1624732945502-245fa9944996?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwaW50ZXJpb3IlMjByZW5vdmF0aW9uJTIwZmluaXNoZWQlMjB0aWxlc3xlbnwxfHx8fDE3NzE0NTk0MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  worker: "https://images.unsplash.com/photo-1743222270396-703376b47d58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXIlMjBpbnN0YWxsaW5nJTIwY2VyYW1pYyUyMHRpbGVzJTIwZmxvb3J8ZW58MXx8fHwxNzcxNDU5NDEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
};

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0f751d]">
      {/* ── Background layers ── */}

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
      <div className="relative max-w-7xl mx-auto px-4 pt-28 md:pt-36 lg:pt-40 pb-16 md:pb-20 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-8 items-center">
          {/* ── Left: Copy & CTA ── */}
          <div className="relative z-10">
            {/* Location badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 text-white px-4 py-1.5 rounded-full mb-6">
              <div className="w-2 h-2 bg-[#25D366] rounded-full animate-pulse" />
              <span className="text-[13px] text-white/80">
                Loja física em{" "}
                <strong className="text-white">Anápolis - GO</strong>
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-white mb-5"
              style={{ fontSize: "clamp(1.85rem, 4.5vw, 3rem)", lineHeight: 1.12 }}
            >
              Tudo para sua construção{" "}
              <br className="hidden sm:block" />
              e reforma em{" "}
              <span
                className="relative inline-block"
                style={{
                  background: "linear-gradient(135deg, #7bdf8a 0%, #b8f0c0 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                um só lugar
              </span>
            </h1>

            {/* Subheadline */}
            <p
              className="text-white/70 mb-9 max-w-lg"
              style={{ fontSize: "clamp(1rem, 2vw, 1.125rem)", lineHeight: 1.65 }}
            >
              Materiais de construção, acabamentos, ferramentas e
              eletrodomésticos com atendimento especializado em Anápolis.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/catalogo"
                className="group inline-flex items-center justify-center gap-2 bg-white text-[#0f751d] px-7 py-3.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-white/20 hover:-translate-y-0.5"
                style={{ fontWeight: 600 }}
              >
                Ver catálogo completo
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href={getWhatsAppLink("Olá! Gostaria de solicitar um orçamento.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 hover:border-white/35 px-7 py-3.5 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
                Solicitar orçamento
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-3 sm:gap-4 mt-10 pt-8 border-t border-white/10">
              <TrustBadge
                icon={<ShieldCheck className="w-4 h-4 text-[#7bdf8a]" />}
                number="+10"
                label="anos no mercado"
              />
              <TrustBadge
                icon={<Package className="w-4 h-4 text-[#7bdf8a]" />}
                number="+1.000"
                label="produtos disponíveis"
              />
              <TrustBadge
                icon={<Users className="w-4 h-4 text-[#7bdf8a]" />}
                number="Anápolis"
                label="atendimento local"
              />
            </div>
          </div>

          {/* ── Right: Image cluster ── */}
          <div className="relative hidden lg:block">
            <div className="relative w-full" style={{ minHeight: "480px" }}>
              {/* Main large image - construction */}
              <div
                className="absolute top-0 right-0 w-[75%] rounded-2xl overflow-hidden shadow-2xl shadow-black/30 border-2 border-white/10"
                style={{ height: "340px" }}
              >
                <ImageWithFallback
                  src={heroImages.construction}
                  alt="Casa em construção"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Second image - finished interior (overlapping) */}
              <div
                className="absolute bottom-0 left-0 w-[60%] rounded-2xl overflow-hidden shadow-2xl shadow-black/25 border-2 border-white/10"
                style={{ height: "280px" }}
              >
                <ImageWithFallback
                  src={heroImages.interior}
                  alt="Interior reformado moderno"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
              </div>

              {/* Third small image - worker (accent, rotated) */}
              <div
                className="absolute bottom-[180px] right-[-10px] w-[180px] rounded-xl overflow-hidden shadow-xl shadow-black/20 border-2 border-white/15 rotate-3"
                style={{ height: "140px" }}
              >
                <ImageWithFallback
                  src={heroImages.worker}
                  alt="Profissional trabalhando em obra"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute top-[-20px] left-[25%] w-16 h-16 border-2 border-white/10 rounded-xl rotate-12" />
              <div className="absolute bottom-[60px] right-[-30px] w-12 h-12 border border-white/8 rounded-lg -rotate-6" />
            </div>
          </div>

          {/* Mobile image (single, simpler) */}
          <div className="relative lg:hidden -mx-4">
            <div className="grid grid-cols-5 gap-2 px-4">
              <div className="col-span-3 rounded-xl overflow-hidden shadow-lg" style={{ height: "180px" }}>
                <ImageWithFallback
                  src={heroImages.construction}
                  alt="Casa em construção"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-2 flex flex-col gap-2">
                <div className="flex-1 rounded-xl overflow-hidden shadow-lg">
                  <ImageWithFallback
                    src={heroImages.interior}
                    alt="Interior reformado"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 rounded-xl overflow-hidden shadow-lg">
                  <ImageWithFallback
                    src={heroImages.worker}
                    alt="Profissional na obra"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom curve transition */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden" style={{ height: "40px" }}>
        <svg
          viewBox="0 0 1440 40"
          fill="none"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full"
          style={{ height: "40px" }}
        >
          <path d="M0 40h1440V10C1200 35 960 0 720 10S240 40 0 20z" fill="white" />
        </svg>
      </div>
    </section>
  );
}

function TrustBadge({
  icon,
  number,
  label,
}: {
  icon: React.ReactNode;
  number: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2.5 bg-white/8 backdrop-blur-sm border border-white/10 rounded-lg px-3.5 py-2.5">
      <div className="flex items-center justify-center w-8 h-8 bg-white/10 rounded-lg shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-white text-[14px]" style={{ fontWeight: 700, lineHeight: 1.2 }}>
          {number}
        </p>
        <p className="text-white/50 text-[12px]">{label}</p>
      </div>
    </div>
  );
}