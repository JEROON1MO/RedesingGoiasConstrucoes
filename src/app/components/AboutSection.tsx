import image_8086e7bd0c7a3bb2eb2af0ad84572b0fd5c835b1 from 'figma:asset/8086e7bd0c7a3bb2eb2af0ad84572b0fd5c835b1.png'
import { Link } from "react-router";
import { Handshake, PackageCheck, Award, MapPin, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const pillars = [
  {
    icon: <Handshake className="w-5 h-5 text-[#0f751d]" />,
    title: "Atendimento próximo",
    description: "Equipe que entende de obra e ajuda você a escolher o material certo.",
  },
  {
    icon: <PackageCheck className="w-5 h-5 text-[#0f751d]" />,
    title: "Variedade completa",
    description: "Materiais básicos, acabamentos, ferramentas e eletrodomésticos num só lugar.",
  },
  {
    icon: <Award className="w-5 h-5 text-[#0f751d]" />,
    title: "Qualidade garantida",
    description: "Produtos de marcas reconhecidas com garantia e procedência.",
  },
  {
    icon: <MapPin className="w-5 h-5 text-[#0f751d]" />,
    title: "Presença local",
    description: "Mais de uma década atendendo quem constrói e reforma em Anápolis e região.",
  },
];

export function AboutSection() {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src={image_8086e7bd0c7a3bb2eb2af0ad84572b0fd5c835b1}
                alt="Engenheiro em obra de construção"
                className="w-full h-full min-h-[280px] object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-2 md:right-4 bg-white border border-gray-100 shadow-lg rounded-xl px-5 py-3 flex items-center gap-3">
              <div className="bg-[#e8f5e9] rounded-lg p-2">
                <Award className="w-5 h-5 text-[#0f751d]" />
              </div>
              <div>
                <p className="text-[#111]" style={{ fontWeight: 700, fontSize: "1.1rem" }}>+10 anos</p>
                <p className="text-[#888] text-[13px]">no mercado de Anápolis</p>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="order-1 lg:order-2">
            <p
              className="text-[#0f751d] text-[13px] mb-1"
              style={{ fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}
            >
              Sobre a loja
            </p>
            <h2 className="text-[#111] mb-4" style={{ fontSize: "clamp(1.25rem, 3vw, 1.75rem)" }}>
              Quem somos e por que confiar na Goiás
            </h2>
            <p className="text-[#555] mb-6" style={{ fontSize: "clamp(0.95rem, 2vw, 1.05rem)", lineHeight: 1.7 }}>
              A Goiás Construção nasceu com um propósito claro: ser o ponto de apoio de quem constrói e reforma em Anápolis. Com mais de uma década de atuação, reunimos um mix completo de materiais de construção, acabamentos, ferramentas e eletrodomésticos — tudo com atendimento de quem conhece obra de verdade.
            </p>

            {/* Pillar cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="flex items-start gap-3 bg-[#f8f8f8] rounded-xl p-3.5"
                >
                  <div className="bg-[#e8f5e9] rounded-lg p-2 shrink-0">
                    {pillar.icon}
                  </div>
                  <div>
                    <p className="text-[#1a1a1a] text-[14px]" style={{ fontWeight: 600 }}>
                      {pillar.title}
                    </p>
                    <p className="text-[#6b6b6b] text-[13px] mt-0.5">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/sobre"
              className="inline-flex items-center gap-2 text-[#0f751d] hover:text-[#0a5a15] text-[15px] transition-colors"
              style={{ fontWeight: 600 }}
            >
              Conheça nossa história completa
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}