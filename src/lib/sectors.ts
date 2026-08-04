export type Sector = {
  kicker: string;
  name: string;
  desc: string;
  image: string;
  alt: string;
};

export const SECTORS: Sector[] = [
  {
    kicker: "Imóveis",
    name: "Imobiliárias",
    desc: "Vitrine de imóveis com captação de lead e CRM para os corretores.",
    image: "/screenshots/imobiliaria.png",
    alt: "Site de imobiliária com listagem de imóveis e filtros de busca",
  },
  {
    kicker: "Alimentação",
    name: "Restaurantes",
    desc: "Menu digital que manda o pedido direto para a fila da cozinha.",
    image: "/screenshots/pizzaria.png",
    alt: "Menu digital de restaurante com pedido online e combos",
  },
  {
    kicker: "Turismo",
    name: "Turismo e hospedagem",
    desc: "Reserva e tarifário com a ocupação atualizada em tempo real.",
    image: "/screenshots/turismo.png",
    alt: "Site de hospedagem com reservas e disponibilidade de quartos",
  },
  {
    kicker: "Comércio",
    name: "Varejo e ecommerce",
    desc: "Catálogo e checkout rodando sobre um estoque unificado.",
    image: "/screenshots/varejo.png",
    alt: "Loja virtual com vitrine de produtos e carrinho de compras",
  },
  {
    kicker: "Agenda e clínica",
    name: "Saúde e estética",
    desc: "Agenda e prontuário, com lembrete de retorno automático.",
    image: "/screenshots/saude.png",
    alt: "Sistema de clínica com agenda de atendimentos e prontuário",
  },
  {
    kicker: "Marca e coleção",
    name: "Moda, praia e pet",
    desc: "Coleção com grade de tamanhos e venda pelo WhatsApp.",
    image: "/screenshots/moda-beleza-pet.png",
    alt: "Vitrine digital de moda com coleção e grade de tamanhos",
  },
  {
    kicker: "Ingressos",
    name: "Eventos e lazer",
    desc: "Venda de ingresso, lista de convidados e controle de portaria.",
    image: "/screenshots/eventos.png",
    alt: "Página de evento com venda de ingressos e controle de lista",
  },
  {
    kicker: "Veículos",
    name: "Automotivo",
    desc: "Estoque de veículos com proposta e simulação de financiamento.",
    image: "/screenshots/automotivo.png",
    alt: "Site automotivo com estoque de veículos e simulação de proposta",
  },
];

export const TABLE_ROWS: [string, string][] = [
  ["Imobiliárias", "Turismo e hospedagem"],
  ["Restaurantes", "Varejo e ecommerce"],
  ["Farmácias, clínicas e estética", "Moda, praia e pet"],
  ["Eventos, lazer e entretenimento", "Automotivo, mobilidade e náutico"],
];
