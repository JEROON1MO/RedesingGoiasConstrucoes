import { Link } from "react-router";
import { MapPin, Phone, Clock } from "lucide-react";
import { getWhatsAppLink } from "./WhatsAppFloat";
import { categories } from "../data/categories";
import imgLogo from "figma:asset/c8b5e134e89ff38d5e64c38de16034fce6e1008f.png";
import devLogo from "figma:asset/9eaaf959a451acb34d779d46f800d439e17b1215.png";

export function Footer() {
  return (
    <footer className="bg-[#111] text-white/80">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {/* Brand */}
          <div>
            <img
              src={imgLogo}
              alt="Goiás Materiais para Construção"
              className="h-12 w-auto object-contain mb-4 brightness-0 invert"
            />
            <p className="text-white/50 text-[14px] mb-4">
              Materiais de construção, acabamentos, ferramentas e eletrodomésticos em Anápolis - GO.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white mb-4" style={{ fontSize: "0.95rem" }}>Categorias</h4>
            <ul className="space-y-2">
              {categories.slice(0, 6).map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/catalogo?categoria=${cat.slug}`}
                    className="text-white/50 hover:text-white text-[14px] transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More categories */}
          <div>
            <h4 className="text-white mb-4" style={{ fontSize: "0.95rem" }}>Mais categorias</h4>
            <ul className="space-y-2">
              {categories.slice(6).map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/catalogo?categoria=${cat.slug}`}
                    className="text-white/50 hover:text-white text-[14px] transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/ofertas"
                  className="text-white/50 hover:text-white text-[14px] transition-colors"
                >
                  Ofertas da semana
                </Link>
              </li>
              <li>
                <Link
                  to="/sobre"
                  className="text-white/50 hover:text-white text-[14px] transition-colors"
                >
                  Sobre nós
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-4" style={{ fontSize: "0.95rem" }}>Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#0f751d] mt-0.5 shrink-0" />
                <span className="text-white/50 text-[14px]">Anápolis - GO</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#0f751d] mt-0.5 shrink-0" />
                <span className="text-white/50 text-[14px]">(62) 3300-0000</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#0f751d] mt-0.5 shrink-0" />
                <div className="text-white/50 text-[14px]">
                  <p>Seg a Sex: 7h às 18h</p>
                  <p>Sáb: 7h às 13h</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-[13px]">
            Goiás Construção. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-1.5 text-white/30 text-[13px]">
            <span>Desenvolvido por:</span>
            <img src={devLogo} alt="Desenvolvedor" className="h-4 w-auto" />
          </div>
        </div>
      </div>
    </footer>
  );
}