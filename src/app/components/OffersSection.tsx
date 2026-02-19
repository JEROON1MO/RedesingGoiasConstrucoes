import { Link } from "react-router";
import { ArrowRight, Percent } from "lucide-react";
import { offerProducts } from "../data/products";
import { ProductCard } from "./ProductCard";

export function OffersSection() {
  return (
    <section className="py-14 md:py-20 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between mb-8 md:mb-10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Percent className="w-4 h-4 text-[#d4183d]" />
              <p className="text-[#d4183d] text-[13px]" style={{ fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                Ofertas da semana
              </p>
            </div>
            <h2 style={{ fontSize: "clamp(1.25rem, 3vw, 1.75rem)" }}>
              Aproveite os melhores preços
            </h2>
            <p className="text-[#6b6b6b] mt-1">
              Condições especiais para quem compra na loja. Consulte via WhatsApp.
            </p>
          </div>
          <Link
            to="/ofertas"
            className="hidden md:flex items-center gap-1.5 text-[#0f751d] hover:underline text-[15px]"
            style={{ fontWeight: 500 }}
          >
            Ver todas as ofertas
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {offerProducts.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="md:hidden mt-6 text-center">
          <Link
            to="/ofertas"
            className="inline-flex items-center gap-1.5 text-[#0f751d] text-[15px]"
            style={{ fontWeight: 500 }}
          >
            Ver todas as ofertas
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
