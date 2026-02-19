import { MapPin, Clock, Phone, MessageCircle, Truck, ShieldCheck, Users } from "lucide-react";
import { getWhatsAppLink } from "./WhatsAppFloat";

export function LocalExperience() {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-[#0f751d] text-[13px] mb-1" style={{ fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
            Nossa loja
          </p>
          <h2 style={{ fontSize: "clamp(1.25rem, 3vw, 1.75rem)" }}>
            Goiás Construção em Anápolis
          </h2>
          <p className="text-[#6b6b6b] mt-2 max-w-xl mx-auto">
            Venha nos visitar e conheça pessoalmente nosso estoque completo de materiais de construção e acabamentos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Map / Location */}
          <div className="rounded-xl overflow-hidden border border-border bg-gray-50">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3836.4!2d-48.9536!3d-16.3281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAn%C3%A1polis%2C%20GO!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "320px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Goiás Construção"
            />
          </div>

          {/* Info cards */}
          <div className="flex flex-col gap-4">
            <InfoCard
              icon={<MapPin className="w-5 h-5 text-[#0f751d]" />}
              title="Endereço"
              content="Anápolis - GO"
              sub="Visite nossa loja física e confira nosso estoque"
            />
            <InfoCard
              icon={<Clock className="w-5 h-5 text-[#0f751d]" />}
              title="Horário de funcionamento"
              content="Segunda a Sexta: 7h às 18h"
              sub="Sábado: 7h às 13h"
            />
            <InfoCard
              icon={<Phone className="w-5 h-5 text-[#0f751d]" />}
              title="Telefone"
              content="(62) 3300-0000"
              sub="Atendimento direto com nossos consultores"
            />

            <a
              href={getWhatsAppLink("Olá! Gostaria de saber como chegar até a loja.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white py-3.5 rounded-xl transition-colors mt-auto"
            >
              <MessageCircle className="w-5 h-5" />
              Falar com a loja no WhatsApp
            </a>
          </div>
        </div>

        {/* Trust section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 md:mt-14">
          <TrustCard
            icon={<ShieldCheck className="w-6 h-6 text-[#0f751d]" />}
            title="Garantia em todos os produtos"
            description="Trabalhamos com marcas reconhecidas e oferecemos garantia de fábrica."
          />
          <TrustCard
            icon={<Truck className="w-6 h-6 text-[#0f751d]" />}
            title="Entrega na região de Anápolis"
            description="Consulte condições de entrega para Anápolis e região."
          />
          <TrustCard
            icon={<Users className="w-6 h-6 text-[#0f751d]" />}
            title="Atendimento especializado"
            description="Nossa equipe ajuda você a encontrar os produtos certos para sua obra."
          />
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon,
  title,
  content,
  sub,
}: {
  icon: React.ReactNode;
  title: string;
  content: string;
  sub: string;
}) {
  return (
    <div className="flex items-start gap-4 bg-[#f8f8f8] rounded-xl p-4">
      <div className="bg-[#e8f5e9] rounded-lg p-2.5 shrink-0">{icon}</div>
      <div>
        <p className="text-[#6b6b6b] text-[13px]">{title}</p>
        <p className="text-[#1a1a1a]" style={{ fontWeight: 600 }}>{content}</p>
        <p className="text-[#6b6b6b] text-[13px] mt-0.5">{sub}</p>
      </div>
    </div>
  );
}

function TrustCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-[#f8f8f8] rounded-xl p-5 md:p-6 text-center">
      <div className="inline-flex bg-[#e8f5e9] rounded-xl p-3 mb-3">{icon}</div>
      <h4 className="text-[#1a1a1a] mb-1" style={{ fontSize: "0.95rem" }}>{title}</h4>
      <p className="text-[#6b6b6b] text-[13px]">{description}</p>
    </div>
  );
}
