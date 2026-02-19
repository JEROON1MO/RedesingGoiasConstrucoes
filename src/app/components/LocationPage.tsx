import { MapPin, Clock, Phone, MessageCircle, Navigation, ShieldCheck, Truck, Users } from "lucide-react";
import { getWhatsAppLink } from "./WhatsAppFloat";

export function LocationPage() {
  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      {/* Header */}
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
        <div className="relative max-w-7xl mx-auto px-4 pt-[48px] pb-10 md:pb-12">
          <h1 className="text-white" style={{ fontSize: "clamp(1.25rem, 3vw, 1.75rem)" }}>
            Nossa Loja em Anápolis
          </h1>
          <p className="text-white/70 mt-2 max-w-lg">
            Visite nossa loja física e conheça de perto nosso estoque completo de materiais de construção.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 md:py-10">
        <div className="grid md:grid-cols-5 gap-6 md:gap-8">
          {/* Map */}
          <div className="md:col-span-3 rounded-xl overflow-hidden border border-border bg-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3836.4!2d-48.9536!3d-16.3281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAn%C3%A1polis%2C%20GO!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Goiás Construção"
            />
          </div>

          {/* Info */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="bg-white rounded-xl border border-border p-5">
              <div className="flex items-start gap-3 mb-4">
                <div className="bg-[#e8f5e9] rounded-lg p-2.5 shrink-0">
                  <MapPin className="w-5 h-5 text-[#0f751d]" />
                </div>
                <div>
                  <h3 style={{ fontSize: "0.95rem" }}>Endereço</h3>
                  <p className="text-[#6b6b6b] text-[14px] mt-1">
                    Anápolis - GO
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 mb-4">
                <div className="bg-[#e8f5e9] rounded-lg p-2.5 shrink-0">
                  <Clock className="w-5 h-5 text-[#0f751d]" />
                </div>
                <div>
                  <h3 style={{ fontSize: "0.95rem" }}>Horário de Funcionamento</h3>
                  <div className="text-[#6b6b6b] text-[14px] mt-1 space-y-0.5">
                    <p>Segunda a Sexta: 7h às 18h</p>
                    <p>Sábado: 7h às 13h</p>
                    <p>Domingo: Fechado</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-[#e8f5e9] rounded-lg p-2.5 shrink-0">
                  <Phone className="w-5 h-5 text-[#0f751d]" />
                </div>
                <div>
                  <h3 style={{ fontSize: "0.95rem" }}>Telefone</h3>
                  <p className="text-[#6b6b6b] text-[14px] mt-1">(62) 3300-0000</p>
                </div>
              </div>
            </div>

            

            <a
              href="https://www.google.com/maps/dir//Anápolis,+GO"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#0f751d] hover:bg-[#0a5a15] text-white py-3.5 rounded-xl transition-colors"
            >
              <Navigation className="w-5 h-5" />
              Como chegar
            </a>
          </div>
        </div>

        {/* Trust section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 md:mt-12">
          <div className="bg-white rounded-xl border border-border p-5 md:p-6 text-center">
            <div className="inline-flex bg-[#e8f5e9] rounded-xl p-3 mb-3">
              <ShieldCheck className="w-6 h-6 text-[#0f751d]" />
            </div>
            <h4 className="text-[#1a1a1a] mb-1" style={{ fontSize: "0.95rem" }}>Garantia em todos os produtos</h4>
            <p className="text-[#6b6b6b] text-[13px]">
              Trabalhamos com marcas reconhecidas e oferecemos garantia de fábrica.
            </p>
          </div>
          <div className="bg-white rounded-xl border border-border p-5 md:p-6 text-center">
            <div className="inline-flex bg-[#e8f5e9] rounded-xl p-3 mb-3">
              <Truck className="w-6 h-6 text-[#0f751d]" />
            </div>
            <h4 className="text-[#1a1a1a] mb-1" style={{ fontSize: "0.95rem" }}>Entrega na região</h4>
            <p className="text-[#6b6b6b] text-[13px]">
              Consulte condições de entrega para Anápolis e região.
            </p>
          </div>
          <div className="bg-white rounded-xl border border-border p-5 md:p-6 text-center">
            <div className="inline-flex bg-[#e8f5e9] rounded-xl p-3 mb-3">
              <Users className="w-6 h-6 text-[#0f751d]" />
            </div>
            <h4 className="text-[#1a1a1a] mb-1" style={{ fontSize: "0.95rem" }}>Atendimento especializado</h4>
            <p className="text-[#6b6b6b] text-[13px]">
              Nossa equipe ajuda você a encontrar os produtos certos para sua obra.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}