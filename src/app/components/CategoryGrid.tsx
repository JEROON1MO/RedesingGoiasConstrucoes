import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { categories } from "../data/categories";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function CategoryGrid() {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between mb-8 md:mb-10">
          <div>
            <p className="text-[#0f751d] text-[13px] mb-1" style={{ fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
              Catálogo
            </p>
            <h2 style={{ fontSize: "clamp(1.25rem, 3vw, 1.75rem)" }}>
              Navegue por categoria
            </h2>
            <p className="text-[#6b6b6b] mt-1">Encontre rapidamente o que você precisa para sua obra ou reforma.</p>
          </div>
          <Link
            to="/catalogo"
            className="hidden md:flex items-center gap-1.5 text-[#0f751d] hover:underline text-[15px]"
            style={{ fontWeight: 500 }}
          >
            Ver todos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/catalogo?categoria=${cat.slug}`}
              className="group relative rounded-xl overflow-hidden aspect-[4/3] bg-gray-100"
            >
              <ImageWithFallback
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                <h3 className="text-white" style={{ fontSize: "0.875rem", lineHeight: 1.3 }}>
                  {cat.name}
                </h3>
                <p className="text-white/60 text-[12px] mt-0.5">
                  {cat.productCount}+ produtos
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="md:hidden mt-6 text-center">
          <Link
            to="/catalogo"
            className="inline-flex items-center gap-1.5 text-[#0f751d] text-[15px]"
            style={{ fontWeight: 500 }}
          >
            Ver catálogo completo
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}