import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "./WhatsAppFloat";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import type { Product } from "../data/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const whatsappMsg = `Olá! Tenho interesse no produto: ${product.name}. Gostaria de saber disponibilidade e condições.`;

  return (
    <div className="bg-white rounded-xl border border-border overflow-hidden group hover:shadow-md transition-shadow">
      <div className="relative aspect-square bg-gray-50 overflow-hidden">
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-[#d4183d] text-white text-[12px] px-2.5 py-1 rounded-md" style={{ fontWeight: 600 }}>
            {product.badge}
          </span>
        )}
      </div>

      <div className="p-4 flex flex-col">
        <h3 className="text-[#1a1a1a] line-clamp-2 mb-2 min-h-[2.52em]" style={{ fontSize: "0.9rem", lineHeight: 1.4 }}>
          {product.name}
        </h3>

        <p className="text-[#6b6b6b] text-[13px] line-clamp-2 mb-3 min-h-[2.6em]" style={{ lineHeight: 1.3 }}>
          {product.description}
        </p>

        <div className="mt-auto">
          {product.price && (
            <div className="mb-3">
              {product.oldPrice && (
                <span className="text-[#999] line-through text-[13px] mr-2">
                  {product.oldPrice}
                </span>
              )}
              <span className="text-[#0f751d]" style={{ fontSize: "1.125rem", fontWeight: 700 }}>
                {product.price}
              </span>
            </div>
          )}

          <a
            href={getWhatsAppLink(whatsappMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 w-full border border-[#0f751d] text-[#0f751d] hover:bg-[#0f751d] hover:text-white py-2 rounded-lg transition-colors text-[14px]"
          >
            <MessageCircle className="w-4 h-4" />
            Consultar disponibilidade
          </a>
        </div>
      </div>
    </div>
  );
}