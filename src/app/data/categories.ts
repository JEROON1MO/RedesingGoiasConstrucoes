export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
  productCount: number;
}

export const categories: Category[] = [
  {
    id: "pisos",
    name: "Pisos e Revestimentos",
    slug: "pisos-e-revestimentos",
    image: "https://images.unsplash.com/photo-1572596116404-98f227c01ac1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwZmxvb3IlMjB0aWxlcyUyMHBvcmNlbGFpbiUyMGRpc3BsYXl8ZW58MXx8fHwxNzcxNDUyNTIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Porcelanatos, cerâmicas, pisos vinílicos e revestimentos para todos os ambientes",
    productCount: 180,
  },
  {
    id: "cubas",
    name: "Cubas e Louças",
    slug: "cubas-e-loucas",
    image: "https://images.unsplash.com/photo-1595514535316-b8c85bf9bbf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRocm9vbSUyMHNpbmslMjBiYXNpbiUyMGNlcmFtaWMlMjB3aGl0ZXxlbnwxfHx8fDE3NzE0NTI1MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Cubas de apoio, embutir, semi-encaixe e louças sanitárias",
    productCount: 95,
  },
  {
    id: "metais",
    name: "Metais",
    slug: "metais",
    image: "https://images.unsplash.com/photo-1769763828411-eb09bb05d97f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHJvbWUlMjBraXRjaGVuJTIwZmF1Y2V0JTIwbWV0YWwlMjBtb2Rlcm58ZW58MXx8fHwxNzcxNDUyNTIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Torneiras, misturadores, duchas e acessórios em metal",
    productCount: 120,
  },
  {
    id: "ferramentas",
    name: "Ferramentas",
    slug: "ferramentas",
    image: "https://images.unsplash.com/photo-1770763233593-74dfd0da7bf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlciUyMHRvb2xzJTIwaGFyZHdhcmUlMjBjb25zdHJ1Y3Rpb24lMjBkcmlsbHxlbnwxfHx8fDE3NzE0NTI1MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Ferramentas manuais e elétricas para obra e manutenção",
    productCount: 200,
  },
  {
    id: "tintas",
    name: "Tintas e Acessórios",
    slug: "tintas-e-acessorios",
    image: "https://images.unsplash.com/photo-1597857306105-b23e08328d30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludCUyMGNhbnMlMjBjb2xvcmZ1bCUyMHdhbGwlMjBwYWludCUyMGJ1Y2tldHN8ZW58MXx8fHwxNzcxNDUyNTIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Tintas, vernizes, massa corrida, rolos e pincéis",
    productCount: 150,
  },
  {
    id: "portas",
    name: "Portas e Janelas",
    slug: "portas-e-janelas",
    image: "https://images.unsplash.com/photo-1643903032976-8c0d0556a8ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBkb29ycyUyMHdpbmRvd3MlMjBkaXNwbGF5JTIwc2hvd3Jvb218ZW58MXx8fHwxNzcxNDYwMTA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Portas de madeira, alumínio, janelas e esquadrias",
    productCount: 75,
  },
  {
    id: "lustres",
    name: "Lustres e Pendentes",
    slug: "lustres-e-pendentes",
    image: "https://images.unsplash.com/photo-1766802033683-77fc32c2b6a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW5kYW50JTIwbGlnaHQlMjBjaGFuZGVsaWVyJTIwbW9kZXJuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcxNDUyNTI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Lustres, pendentes e plafons para todos os ambientes",
    productCount: 85,
  },
  {
    id: "arandelas",
    name: "Arandelas",
    slug: "arandelas",
    image: "https://images.unsplash.com/photo-1760977817633-86910d0dfe3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YWxsJTIwc2NvbmNlJTIwbGlnaHQlMjBtb2Rlcm4lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzEzNjY1MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Arandelas internas e externas com design moderno",
    productCount: 60,
  },
  {
    id: "bacias",
    name: "Bacias",
    slug: "bacias",
    image: "https://images.unsplash.com/photo-1558745916-0fe82c0a216c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b2lsZXQlMjBiYXRocm9vbSUyMHdoaXRlJTIwcG9yY2VsYWluJTIwbW9kZXJufGVufDF8fHx8MTc3MTQ1MjUyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Bacias sanitárias com caixa acoplada e convencional",
    productCount: 45,
  },
  {
    id: "eletrodomesticos",
    name: "Eletrodomésticos",
    slug: "eletrodomesticos",
    image: "https://images.unsplash.com/photo-1756471818388-af6aadafbf07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwYXBwbGlhbmNlJTIwa2l0Y2hlbiUyMHJlZnJpZ2VyYXRvciUyMHN0b3ZlfGVufDF8fHx8MTc3MTQ1MjUyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Fogões, geladeiras, micro-ondas e mais",
    productCount: 40,
  },
];