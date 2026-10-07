export const site = {
  name: "B1 Tecnologias",
  url: "https://b1tecnologias.com.br",
  slogan: "Tecnologia que transforma negócios.",
  city: "Belém • Pará • Brasil",
  emails: {
    contact: "contato@b1tecnologias.com.br",
    commercial: "comercial@b1tecnologias.com.br",
  },
};

export type ProductStatus = "live" | "building";

export type Product = {
  slug: string;
  name: string;
  mark: string;
  field: string;
  line: string;
  summary: string;
  extra: string;
  action: string;
  status: ProductStatus;
  pillars: { title: string; text: string }[];
  pageLead: string;
  shot?: { src: string; alt: string; caption: string };
  frames?: { src: string; alt: string; caption: string; width: number; height: number; place: string }[];
};

export const products: Product[] = [
  {
    slug: "refritech",
    name: "B1 Refritech",
    mark: "Refritech",
    field: "Tecnologia para refrigeração",
    line: "Gestão inteligente para refrigeração.",
    summary:
      "Gestão, operação e recursos técnicos para profissionais e empresas do setor.",
    extra:
      "Quem administra vê o parque no painel. Quem atende vê o dia na carteira.",
    action: "Explorar produto",
    status: "live",
    shot: {
      src: "/produtos/refritech-gestao.png",
      alt: "Painel de gestão do B1 Refritech no MacBook, na visão geral da operação.",
      caption: "Painel da operação",
    },
    frames: [
      {
        place: "login",
        src: "/produtos/refritech-login.png",
        width: 857,
        height: 497,
        alt: "Tela de acesso do B1 Refritech no MacBook: responsável no painel e técnico na carteira.",
        caption: "Acesso",
      },
      {
        place: "painel",
        src: "/produtos/refritech-gestao.png",
        width: 862,
        height: 498,
        alt: "Painel de gestão do B1 Refritech no MacBook, com faturamento, agenda e saúde do parque.",
        caption: "Painel da operação",
      },
      {
        place: "carteira",
        src: "/produtos/refritech-carteira.png",
        width: 295,
        height: 557,
        alt: "Carteira do técnico no celular, com a comissão do mês e o dia de quem está na rua.",
        caption: "Carteira do técnico",
      },
    ],
    pageLead:
      "O Refritech cobre a operação inteira. Quem administra o parque entra no painel. Quem atende na rua entra na carteira, no mesmo produto.",
    pillars: [
      {
        title: "Acesso",
        text: "O responsável entra no painel da operação. O técnico entra na carteira do dia.",
      },
      {
        title: "Painel",
        text: "Faturamento, agenda, preventivas, caixa e a saúde do parque na mesma leitura.",
      },
      {
        title: "Na rua",
        text: "Comissão, agenda, rotas e as ordens do dia na carteira de quem está atendendo.",
      },
    ],
  },
  {
    slug: "move",
    name: "B1 Move",
    mark: "Move",
    field: "Tecnologia para movimento",
    line: "Sair da inatividade e construir ritmo.",
    summary:
      "Uma experiência digital criada para ajudar pessoas a sair da inatividade e construir uma rotina mais ativa.",
    extra:
      "Ainda em construção. A direção já está definida: simplicidade para quem quer se mover.",
    action: "Em desenvolvimento",
    status: "building",
    pageLead:
      "O Move é uma experiência digital da B1 para ajudar pessoas a sair da inatividade e construir uma rotina mais ativa. O produto ainda está em desenvolvimento.",
    pillars: [
      {
        title: "O primeiro passo",
        text: "Reduzir a distância entre querer se mover e começar — sem transformar isso em mais uma obrigação.",
      },
      {
        title: "Rotina",
        text: "Ajudar a construir um ritmo que caiba na vida real, e não num plano impossível de manter.",
      },
      {
        title: "Experiência",
        text: "Uma interface simples o bastante para ser usada de verdade, no dia em que a motivação não está alta.",
      },
    ],
  },
  {
    slug: "pdv",
    name: "B1 PDV",
    mark: "PDV",
    field: "Tecnologia para o comércio",
    line: "Vendas, estoque e operação no mesmo lugar.",
    summary: "O balcão da venda e o painel da loja no mesmo produto.",
    extra: "A venda acontece na conta. O painel mostra o faturamento, o caixa e a prateleira.",
    action: "Em desenvolvimento",
    status: "building",
    frames: [
      {
        place: "balcao",
        src: "/produtos/pdv-balcao.png",
        width: 865,
        height: 493,
        alt: "Balcão do B1 PDV no MacBook, com a conta da venda, os pagamentos e o total a receber.",
        caption: "Balcão",
      },
      {
        place: "loja",
        src: "/produtos/pdv-painel.png",
        width: 865,
        height: 496,
        alt: "Painel do B1 PDV no MacBook, com o faturamento da filial, o caixa e a prateleira.",
        caption: "Painel da loja",
      },
    ],
    pageLead:
      "O PDV junta o balcão e a gestão da loja. A venda acontece na conta. O painel mostra o faturamento, o caixa e o que falta na prateleira.",
    pillars: [
      {
        title: "Balcão",
        text: "A conta da venda, com busca por nome ou código, e pagamento em dinheiro, PIX, débito ou crédito.",
      },
      {
        title: "Painel",
        text: "Faturamento da filial, vendas, ticket médio e o caixa, na leitura de quem administra a loja.",
      },
      {
        title: "Prateleira",
        text: "O que está em falta aparece no painel, com o caminho para abrir o estoque.",
      },
    ],
  },
];

export type DeliveryShot = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  kind: "phone" | "screen";
};

export type Delivery = {
  slug: string;
  name: string;
  place: string;
  text: string;
  shots: DeliveryShot[];
};

export const deliveries: Delivery[] = [
  {
    slug: "narino",
    name: "Narino Terraplenagem",
    place: "Ananindeua e Belém",
    text: "Site da empresa e sistema de gestão: máquinas, clientes, contratos e faturas.",
    shots: [
      {
        kind: "phone",
        src: "/operacao/narino-site-phone.png",
        width: 272,
        height: 547,
        alt: "Site da Narino Terraplenagem no celular, com pedido de orçamento.",
        caption: "Celular",
      },
      {
        kind: "screen",
        src: "/operacao/narino-site.png",
        width: 862,
        height: 495,
        alt: "Site da Narino Terraplenagem no computador.",
        caption: "Site",
      },
      {
        kind: "screen",
        src: "/operacao/narino-gestao.png",
        width: 864,
        height: 491,
        alt: "Painel de gestão da Narino Terraplenagem, com máquinas, clientes e contratos.",
        caption: "Gestão",
      },
    ],
  },
  {
    slug: "kbarros",
    name: "KBarros Serviços",
    place: "Ananindeua, Belém e região",
    text: "Site de locação e terraplenagem, e o painel de motoristas, veículos e documentos.",
    shots: [
      {
        kind: "phone",
        src: "/operacao/kbarros-site-phone.png",
        width: 272,
        height: 545,
        alt: "Site da KBarros no celular, com pedido de orçamento.",
        caption: "Celular",
      },
      {
        kind: "screen",
        src: "/operacao/kbarros-site.png",
        width: 864,
        height: 487,
        alt: "Site da KBarros no computador, sobre locações e serviços.",
        caption: "Site",
      },
      {
        kind: "screen",
        src: "/operacao/kbarros-painel.png",
        width: 864,
        height: 487,
        alt: "Painel operacional da KBarros, com motoristas, veículos e documentos.",
        caption: "Operação",
      },
    ],
  },
  {
    slug: "friotech",
    name: "FrioTech Refrigeração",
    place: "Ananindeua",
    text: "Site da loja técnica, painel do negócio e terminal de balcão.",
    shots: [
      {
        kind: "phone",
        src: "/operacao/friotech-site-phone.png",
        width: 276,
        height: 547,
        alt: "Site da FrioTech no celular, loja de peças e equipamentos de refrigeração.",
        caption: "Celular",
      },
      {
        kind: "screen",
        src: "/operacao/friotech-painel.png",
        width: 869,
        height: 497,
        alt: "Painel da FrioTech, com faturamento, vendas e acesso ao PDV.",
        caption: "Painel",
      },
      {
        kind: "screen",
        src: "/operacao/friotech-balcao.png",
        width: 870,
        height: 501,
        alt: "Terminal de balcão da FrioTech, para venda no caixa.",
        caption: "Balcão",
      },
    ],
  },
];

export const processSteps = [
  {
    n: "01",
    title: "Identificamos",
    text: "Problemas reais do dia a dia.",
  },
  {
    n: "02",
    title: "Projetamos",
    text: "Experiências simples e intuitivas.",
  },
  {
    n: "03",
    title: "Desenvolvemos",
    text: "Software, automação e tecnologia.",
  },
  {
    n: "04",
    title: "Evoluímos",
    text: "Produtos que continuam melhorando.",
  },
];

export const architecture = [
  { id: "auth", title: "Auth", hint: "Acesso e identidade" },
  { id: "cloud", title: "Cloud", hint: "Infraestrutura" },
  { id: "data", title: "Data", hint: "Dados do produto" },
];

export const stack = [
  "Cloud",
  "APIs",
  "Banco de dados",
  "Segurança",
  "Automação",
  "IA",
];

export function productBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
