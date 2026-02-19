export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  price?: string;
  oldPrice?: string;
  isOffer?: boolean;
  badge?: string;
  description: string;
}

export const products: Product[] = [
  // Pisos e Revestimentos
  {
    id: "p1",
    name: "Porcelanato Retificado 60x60 Cinza Acetinado",
    category: "pisos",
    image: "https://images.unsplash.com/photo-1708919268837-2b4857323447?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmV5JTIwcG9yY2VsYWluJTIwZmxvb3IlMjB0aWxlJTIwY2xvc2V1cHxlbnwxfHx8fDE3NzE0NjA0MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "R$ 49,90/m²",
    oldPrice: "R$ 69,90/m²",
    isOffer: true,
    badge: "Oferta",
    description: "Porcelanato retificado acetinado, ideal para salas e quartos. Disponível na loja.",
  },
  {
    id: "p2",
    name: "Revestimento Cerâmico 30x60 Branco Brilhante",
    category: "pisos",
    image: "https://images.unsplash.com/photo-1765556556784-7656ee0a1bd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGdsb3NzeSUyMGNlcmFtaWMlMjB3YWxsJTIwdGlsZSUyMGJhdGhyb29tfGVufDF8fHx8MTc3MTQ2MDQzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "R$ 29,90/m²",
    description: "Revestimento cerâmico para paredes de banheiros e cozinhas.",
  },
  {
    id: "p3",
    name: "Piso Vinílico Régua 18x122cm Carvalho",
    category: "pisos",
    image: "https://images.unsplash.com/photo-1617262869595-a0e5683b8fc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW55bCUyMHBsYW5rJTIwZmxvb3JpbmclMjBvYWslMjB3b29kJTIwdGV4dHVyZXxlbnwxfHx8fDE3NzE0NjA0MzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "R$ 59,90/m²",
    description: "Piso vinílico com aspecto de madeira natural, fácil instalação.",
  },

  // Cubas e Louças
  {
    id: "p4",
    name: "Cuba de Apoio Redonda Branca",
    category: "cubas",
    image: "https://images.unsplash.com/photo-1580906034651-ecf9769d4445?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3VuZCUyMHdoaXRlJTIwY2VyYW1pYyUyMHZlc3NlbCUyMHNpbmslMjBiYXNpbnxlbnwxfHx8fDE3NzE0NjA0MzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "R$ 189,90",
    oldPrice: "R$ 249,90",
    isOffer: true,
    badge: "Oferta",
    description: "Cuba de apoio em cerâmica branca, acabamento de alta qualidade.",
  },
  {
    id: "p5",
    name: "Cuba de Semi-Encaixe Retangular",
    category: "cubas",
    image: "https://images.unsplash.com/photo-1768724058866-4c33efbd50a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWN0YW5ndWxhciUyMHNlbWklMjByZWNlc3NlZCUyMGJhdGhyb29tJTIwc2lua3xlbnwxfHx8fDE3NzE0NjA0MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "R$ 259,90",
    description: "Cuba de semi-encaixe retangular para bancadas modernas.",
  },

  // Metais
  {
    id: "p6",
    name: "Torneira para Cozinha Bica Alta Cromada",
    category: "metais",
    image: "https://images.unsplash.com/photo-1761353855019-05f2f3ed9c43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHJvbWUlMjBzaG93ZXIlMjBoYW5kaGVsZCUyMGJhdGhyb29tJTIwZml4dHVyZXxlbnwxfHx8fDE3NzE0NjA0NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "R$ 139,90",
    oldPrice: "R$ 189,90",
    isOffer: true,
    badge: "Oferta",
    description: "Torneira cromada com bica alta, ideal para cozinhas.",
  },
  {
    id: "p7",
    name: "Ducha Higiênica com Registro Cromada",
    category: "metais",
    image: "https://images.unsplash.com/photo-1761353854314-4bda99811659?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaW5nbGUlMjBsZXZlciUyMGJhc2luJTIwbWl4ZXIlMjB0YXAlMjBjaHJvbWV8ZW58MXx8fHwxNzcxNDYwNDMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "R$ 89,90",
    description: "Kit ducha higiênica completo com registro e flexível.",
  },
  {
    id: "p8",
    name: "Misturador Monocomando para Lavatório",
    category: "metais",
    image: "https://images.unsplash.com/photo-1769763828411-eb09bb05d97f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHJvbWUlMjBraXRjaGVuJTIwZmF1Y2V0JTIwbWV0YWwlMjBtb2Rlcm58ZW58MXx8fHwxNzcxNDUyNTIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "R$ 219,90",
    description: "Misturador monocomando em metal cromado para lavatórios.",
  },

  // Ferramentas
  {
    id: "p9",
    name: "Furadeira de Impacto 750W",
    category: "ferramentas",
    image: "https://images.unsplash.com/photo-1689935421853-cb23a0bc92e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMGltcGFjdCUyMGRyaWxsJTIwcG93ZXIlMjB0b29sfGVufDF8fHx8MTc3MTQ2MDQzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "R$ 249,90",
    oldPrice: "R$ 329,90",
    isOffer: true,
    badge: "Oferta",
    description: "Furadeira de impacto profissional 750W com maleta e brocas.",
  },
  {
    id: "p10",
    name: "Jogo de Chaves Combinadas 12 Peças",
    category: "ferramentas",
    image: "https://images.unsplash.com/photo-1713527555117-85e0129fd90c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21iaW5hdGlvbiUyMHdyZW5jaCUyMHNldCUyMGNocm9tZSUyMHZhbmFkaXVtfGVufDF8fHx8MTc3MTQ2MDQzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "R$ 79,90",
    description: "Jogo de chaves combinadas em aço cromo-vanádio.",
  },

  // Tintas e acessórios
  {
    id: "p11",
    name: "Tinta Acrílica Premium 18L Branco Gelo",
    category: "tintas",
    image: "https://images.unsplash.com/photo-1673297821205-e0575bbc2ab7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGFjcnlsaWMlMjBwYWludCUyMGJ1Y2tldCUyMGNhbiUyMDE4JTIwbGl0ZXJzfGVufDF8fHx8MTc3MTQ2MDQzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "R$ 289,90",
    oldPrice: "R$ 349,90",
    isOffer: true,
    badge: "Oferta",
    description: "Tinta acrílica premium para paredes internas e externas, rendimento 350m²/demão.",
  },
  {
    id: "p12",
    name: "Kit Rolo e Bandeja para Pintura",
    category: "tintas",
    image: "https://images.unsplash.com/photo-1661697522358-ca78f11d1d62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludCUyMHJvbGxlciUyMHRyYXklMjBwYWludGluZyUyMHN1cHBsaWVzJTIwa2l0fGVufDF8fHx8MTc3MTQ2MDQzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "R$ 34,90",
    description: "Kit completo com rolo de lã, suporte e bandeja plástica.",
  },

  // Portas e Janelas
  {
    id: "p13",
    name: "Porta de Madeira Frisada 210x80cm",
    category: "portas",
    image: "https://images.unsplash.com/photo-1691234284616-64df61584b2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBpbnRlcmlvciUyMGRvb3IlMjBwYW5lbCUyMGZsdXNofGVufDF8fHx8MTc3MTQ2MDQzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "R$ 389,90",
    description: "Porta de madeira frisada com acabamento laminado.",
  },
  {
    id: "p14",
    name: "Janela de Alumínio 4 Folhas 120x120cm",
    category: "portas",
    image: "https://images.unsplash.com/photo-1591727586619-614eb37d349b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbHVtaW51bSUyMHNsaWRpbmclMjB3aW5kb3clMjBmb3VyJTIwcGFuZWxzJTIwZ2xhc3N8ZW58MXx8fHwxNzcxNDYwNDM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "R$ 549,90",
    oldPrice: "R$ 699,90",
    isOffer: true,
    badge: "Oferta",
    description: "Janela de alumínio 4 folhas com vidro temperado.",
  },

  // Lustres e Pendentes
  {
    id: "p15",
    name: "Pendente Cúpula Preto Fosco 30cm",
    category: "lustres",
    image: "https://images.unsplash.com/photo-1716155356885-5ebdad56e3ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGRvbWUlMjBwZW5kYW50JTIwbGlnaHQlMjBmaXh0dXJlJTIwbW9kZXJufGVufDF8fHx8MTc3MTQ2MDQzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "R$ 129,90",
    description: "Pendente cúpula em metal preto fosco, soquete E27.",
  },
  {
    id: "p16",
    name: "Lustre de Cristal 5 Braços",
    category: "lustres",
    image: "https://images.unsplash.com/photo-1753604147615-b26c00d0874e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnlzdGFsJTIwY2hhbmRlbGllciUyMGZpdmUlMjBhcm1zJTIwZWxlZ2FudCUyMGdvbGR8ZW58MXx8fHwxNzcxNDYwNDM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "R$ 459,90",
    description: "Lustre de cristal legítimo com 5 braços, acabamento dourado.",
  },

  // Arandelas
  {
    id: "p17",
    name: "Arandela LED Retangular Preta 12W",
    category: "arandelas",
    image: "https://images.unsplash.com/photo-1560044363-bdfe2e534cb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHJlY3Rhbmd1bGFyJTIwTEVEJTIwd2FsbCUyMHNjb25jZSUyMG1vZGVybnxlbnwxfHx8fDE3NzE0NjA0NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "R$ 89,90",
    description: "Arandela LED retangular em alumínio preto, luz branco quente.",
  },
  {
    id: "p18",
    name: "Arandela Externa Tartaruga Branca",
    category: "arandelas",
    image: "https://images.unsplash.com/photo-1704747885480-561e8ee330db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwYnVsa2hlYWQlMjB3YWxsJTIwbGlnaHQlMjB3aGl0ZSUyMHJvdW5kfGVufDF8fHx8MTc3MTQ2MDQ0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "R$ 39,90",
    description: "Arandela tipo tartaruga para áreas externas, resistente.",
  },

  // Bacias
  {
    id: "p19",
    name: "Bacia Sanitária com Caixa Acoplada Branca",
    category: "bacias",
    image: "https://images.unsplash.com/photo-1664227430687-9299c593e3da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHRvaWxldCUyMGNsb3NlJTIwY291cGxlZCUyMGNpc3Rlcm4lMjBtb2Rlcm4lMjBiYXRocm9vbXxlbnwxfHx8fDE3NzE0NjA0NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "R$ 399,90",
    oldPrice: "R$ 499,90",
    isOffer: true,
    badge: "Oferta",
    description: "Bacia sanitária com caixa acoplada, duplo acionamento, economia de água.",
  },
  {
    id: "p20",
    name: "Bacia Convencional Branca",
    category: "bacias",
    image: "https://images.unsplash.com/photo-1558745921-b0820953e8c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb252ZW50aW9uYWwlMjB0b2lsZXQlMjB3aGl0ZSUyMHBvcmNlbGFpbiUyMHNpbXBsZXxlbnwxfHx8fDE3NzE0NjA0NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "R$ 179,90",
    description: "Bacia sanitária convencional em louça branca.",
  },

  // Eletrodomésticos
  {
    id: "p21",
    name: "Fogão 5 Bocas Inox com Forno",
    category: "eletrodomesticos",
    image: "https://images.unsplash.com/photo-1764677367365-d56787922d83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXMlMjBzdG92ZSUyMGZpdmUlMjBidXJuZXJzJTIwc3RhaW5sZXNzJTIwc3RlZWwlMjBvdmVufGVufDF8fHx8MTc3MTQ2MDQ1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "R$ 1.299,90",
    oldPrice: "R$ 1.599,90",
    isOffer: true,
    badge: "Oferta",
    description: "Fogão 5 bocas em inox com acendimento automático e forno.",
  },
  {
    id: "p22",
    name: "Micro-ondas 30L Branco",
    category: "eletrodomesticos",
    image: "https://images.unsplash.com/photo-1769770648224-114810619496?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMG1pY3Jvd2F2ZSUyMG92ZW4lMjBraXRjaGVuJTIwYXBwbGlhbmNlfGVufDF8fHx8MTc3MTQ2MDQ0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "R$ 549,90",
    description: "Micro-ondas 30 litros com menu de receitas pré-programadas.",
  },
];

export const offerProducts = products.filter((p) => p.isOffer);
