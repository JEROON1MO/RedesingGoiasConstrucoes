import image_47feaf5241f17bddc2288493681d413d32edefab from 'figma:asset/47feaf5241f17bddc2288493681d413d32edefab.png'
import { Link } from "react-router";
import {
  MessageCircle,
  ArrowRight,
  Handshake,
  PackageCheck,
  Award,
  MapPin,
  Truck,
  Users,
  Target,
  Eye,
  Heart,
  ShieldCheck,
  Clock,
} from "lucide-react";
import { getWhatsAppLink } from "./WhatsAppFloat";
import { ImageWithFallback } from "./figma/ImageWithFallback";

/* ───── Hero ───── */
function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#0f751d]">
      {/* ── Background layers (same as main Hero) ── */}

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
        <div className="max-w-2xl">
          <p
            className="text-white/70 text-[13px] mb-2"
            style={{ fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}
          >
            Sobre nós
          </p>
          <h1
            className="text-white mb-4"
            style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)", lineHeight: 1.2 }}
          >
            Sobre a Goiás Construção
          </h1>
          <p
            className="text-white/75"
            style={{ fontSize: "clamp(1rem, 2vw, 1.125rem)", lineHeight: 1.7 }}
          >
            Apoio completo para quem constrói, reforma e precisa de confiança na
            hora de comprar materiais.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ───── História ───── */
function StorySection() {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <ImageWithFallback
              src={image_47feaf5241f17bddc2288493681d413d32edefab}
              alt="Equipe Goiás Construção atendendo clientes"
              className="w-full h-72 md:h-80 lg:h-[420px] object-cover m-[0px]"
            />
          </div>

          {/* Text */}
          <div>
            <p
              className="text-[#0f751d] text-[13px] mb-1"
              style={{ fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}
            >
              Nossa história
            </p>
            <h2
              className="text-[#111] mb-5"
              style={{ fontSize: "clamp(1.25rem, 3vw, 1.75rem)" }}
            >
              Uma loja que cresceu junto com Anápolis
            </h2>
            <div className="space-y-4 text-[#555]" style={{ lineHeight: 1.75 }}>
              <p>
                A Goiás Construção começou com uma missão simples: oferecer
                materiais de qualidade com atendimento de verdade. Desde o
                início, a proposta foi diferente — não ser apenas um ponto de
                venda, mas um parceiro real de quem está construindo, reformando
                ou apenas fazendo um reparo em casa.
              </p>
              <p>
                Com mais de uma década de atuação em Anápolis, acompanhamos o
                crescimento da cidade e das famílias que confiam no nosso
                trabalho. O que começou como uma loja de materiais básicos se
                transformou em um centro completo: de cimento e tijolos a
                revestimentos, louças, tintas, ferramentas e eletrodomésticos.
              </p>
              <p>
                Hoje, somos referência na região para quem busca variedade,
                preço justo e uma equipe que realmente entende do que está
                vendendo. Cada atendimento é pensado para facilitar a sua obra —
                do orçamento à entrega.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───── Diferenciais ───── */
const differentials = [
  {
    icon: <Handshake className="w-6 h-6 text-[#0f751d]" />,
    title: "Atendimento especializado",
    description:
      "Nossa equipe conhece cada produto e ajuda você a encontrar a solução certa para sua obra, do básico ao acabamento.",
  },
  {
    icon: <PackageCheck className="w-6 h-6 text-[#0f751d]" />,
    title: "Mix amplo de materiais",
    description:
      "Materiais de construção, acabamentos, tintas, ferramentas, elétrica, hidráulica e eletrodomésticos — tudo num só lugar.",
  },
  {
    icon: <Award className="w-6 h-6 text-[#0f751d]" />,
    title: "Marcas e fornecedores de confiança",
    description:
      "Trabalhamos com marcas reconhecidas no mercado, garantindo procedência e qualidade em cada produto.",
  },
  {
    icon: <MapPin className="w-6 h-6 text-[#0f751d]" />,
    title: "Experiência no mercado local",
    description:
      "Mais de 10 anos atendendo Anápolis e região. Conhecemos as necessidades de quem constrói aqui.",
  },
  {
    icon: <Truck className="w-6 h-6 text-[#0f751d]" />,
    title: "Entrega e logística",
    description:
      "Entrega na região de Anápolis para facilitar sua obra. Consulte condições pelo WhatsApp.",
  },
  {
    icon: <Users className="w-6 h-6 text-[#0f751d]" />,
    title: "Proximidade com o cliente",
    description:
      "Aqui você não é um número. Cada cliente é atendido com atenção, do orçamento até o pós-venda.",
  },
];

function DifferentialsSection() {
  return (
    <section className="py-14 md:py-20 bg-[#f7f8fa]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10 md:mb-14">
          <p
            className="text-[#0f751d] text-[13px] mb-1"
            style={{ fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}
          >
            Nossos diferenciais
          </p>
          <h2 style={{ fontSize: "clamp(1.25rem, 3vw, 1.75rem)" }}>
            O que nos diferencia
          </h2>
          <p className="text-[#6b6b6b] mt-2 max-w-xl mx-auto">
            Cada detalhe do nosso trabalho é pensado para facilitar sua
            construção ou reforma.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {differentials.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl p-5 md:p-6 border border-gray-100 hover:border-[#0f751d]/15 hover:shadow-sm transition-all"
            >
              <div className="inline-flex bg-[#e8f5e9] rounded-xl p-3 mb-4">
                {item.icon}
              </div>
              <h4
                className="text-[#1a1a1a] mb-2"
                style={{ fontSize: "0.95rem" }}
              >
                {item.title}
              </h4>
              <p className="text-[#6b6b6b] text-[14px]" style={{ lineHeight: 1.6 }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───── Missão, Visão e Valores ───── */
const missionItems = [
  {
    icon: <Target className="w-6 h-6 text-[#0f751d]" />,
    label: "O que entregamos",
    title: "Missão",
    description:
      "Oferecer materiais de construção com qualidade, variedade e atendimento que facilita a vida de quem está construindo ou reformando em Anápolis e região.",
  },
  {
    icon: <Eye className="w-6 h-6 text-[#0f751d]" />,
    label: "Onde queremos chegar",
    title: "Visão",
    description:
      "Ser a primeira escolha de quem precisa de materiais de construção na região — reconhecida pela confiança, pelo mix completo e pelo atendimento que faz diferença.",
  },
  {
    icon: <Heart className="w-6 h-6 text-[#0f751d]" />,
    label: "Como nos relacionamos",
    title: "Valores",
    description:
      "Transparência em cada negociação, respeito pelo cliente, compromisso com a qualidade dos produtos e valorização da comunidade onde atuamos.",
  },
];

function MissionSection() {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10 md:mb-14">
          <p
            className="text-[#0f751d] text-[13px] mb-1"
            style={{ fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}
          >
            Nossos princípios
          </p>
          <h2 style={{ fontSize: "clamp(1.25rem, 3vw, 1.75rem)" }}>
            O que guia nosso trabalho
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {missionItems.map((item) => (
            <div
              key={item.title}
              className="bg-[#f8f8f8] rounded-xl p-6 md:p-7"
            >
              <div className="inline-flex bg-[#e8f5e9] rounded-xl p-3 mb-4">
                {item.icon}
              </div>
              <p className="text-[#0f751d] text-[12px] mb-1" style={{ fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase" }}>
                {item.label}
              </p>
              <h3 className="text-[#1a1a1a] mb-3" style={{ fontSize: "1.1rem" }}>
                {item.title}
              </h3>
              <p className="text-[#555] text-[14px]" style={{ lineHeight: 1.7 }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───── Prova de Confiança ───── */
const trustStats = [
  {
    icon: <Clock className="w-6 h-6 text-[#0f751d]" />,
    number: "+10",
    label: "anos de atuação",
    description: "no mercado de Anápolis",
  },
  {
    icon: <PackageCheck className="w-6 h-6 text-[#0f751d]" />,
    number: "+1.000",
    label: "produtos disponíveis",
    description: "para construção e reforma",
  },
  {
    icon: <MapPin className="w-6 h-6 text-[#0f751d]" />,
    number: "Anápolis",
    label: "e região",
    description: "presença local ativa",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-[#0f751d]" />,
    number: "10",
    label: "categorias",
    description: "cobrindo todas as etapas da obra",
  },
];

function TrustSection() {
  return (
    <section className="py-14 md:py-20 bg-[#f7f8fa]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <p
            className="text-[#0f751d] text-[13px] mb-1"
            style={{ fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}
          >
            Por que confiar
          </p>
          <h2 style={{ fontSize: "clamp(1.25rem, 3vw, 1.75rem)" }}>
            Números que falam por nós
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {trustStats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-xl p-5 md:p-6 text-center border border-gray-100"
            >
              <div className="inline-flex bg-[#e8f5e9] rounded-xl p-3 mb-3">
                {stat.icon}
              </div>
              <p className="text-[#111]" style={{ fontSize: "1.5rem", fontWeight: 700 }}>
                {stat.number}
              </p>
              <p className="text-[#1a1a1a] text-[14px]" style={{ fontWeight: 600 }}>
                {stat.label}
              </p>
              <p className="text-[#888] text-[13px] mt-0.5">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───── CTA Final ───── */
function AboutCta() {
  return (
    null
  );
}

/* ───── Page Export ───── */
export function AboutPage() {
  return (
    <>
      <AboutHero />
      <StorySection />
      <DifferentialsSection />
      <MissionSection />
      <TrustSection />
      <AboutCta />
    </>
  );
}