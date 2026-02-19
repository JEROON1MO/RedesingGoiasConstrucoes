import { MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { getWhatsAppLink } from "./WhatsAppFloat";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-[#0f751d]">
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
      <div className="absolute top-[30%] left-[5%] w-64 h-64 bg-[#25D366]/10 rounded-full blur-[80px]" />
      <div className="absolute bottom-[20%] right-[10%] w-72 h-72 bg-black/8 rounded-full blur-[100px]" />

      {/* ── Content ── */}
      <div className="relative max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-white mb-2" style={{ fontSize: "clamp(1.25rem, 3vw, 1.5rem)" }}>
              Precisa de um orçamento para sua obra?
            </h2>
            <p className="text-white/75">
              Envie sua lista de materiais e receba um orçamento completo pelo WhatsApp.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={getWhatsAppLink("Olá! Preciso de um orçamento para minha obra. Posso enviar a lista de materiais?")}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 bg-white text-[#0f751d] px-6 py-3.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-white/20 hover:-translate-y-0.5 whitespace-nowrap"
              style={{ fontWeight: 600 }}
            >
              <MessageCircle className="w-5 h-5" />
              Solicitar orçamento
            </a>
            <Link
              to="/catalogo"
              className="group inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 hover:border-white/35 px-6 py-3.5 rounded-lg transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap"
            >
              Ver catálogo
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}