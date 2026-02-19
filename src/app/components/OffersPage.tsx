import { MessageCircle, Percent } from "lucide-react";
import { offerProducts } from "../data/products";
import { ProductCard } from "./ProductCard";
import { getWhatsAppLink } from "./WhatsAppFloat";

export function OffersPage() {
  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      {/* Header */}
      <div className="bg-[#d4183d]">
        <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-white/20 rounded-lg p-2">
              <Percent className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-white" style={{ fontSize: "clamp(1.25rem, 3vw, 1.75rem)" }}>
              Ofertas da Semana
            </h1>
          </div>
          <p className="text-white/80 max-w-lg">
            Confira os produtos com condições especiais. Preços válidos para compra na loja de Anápolis enquanto durarem os estoques.
          </p>
        </div>
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {offerProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA */}
        
      </div>
    </div>
  );
}
