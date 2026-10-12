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
  audience?: string;
  problems?: { title: string; text: string }[];
  faqs?: { question: string; answer: string }[];
  ctaLabel?: string;
  appUrl?: string;
  shot?: { src: string; alt: string; caption: string };
  frames?: { src: string; alt: string; caption: string; width: number; height: number; place: string }[];
};

export const products: Product[] = [
  {
    slug: "refritech",
    name: "B1 Refritech",
    mark: "Refritech",
    field: "Tecnologia para refrigeração",
    line: "Gerencie sua empresa de refrigeração em um só lugar.",
    summary:
      "Gestão, operação e recursos técnicos para profissionais e empresas do setor.",
    extra:
      "Quem administra vê o parque no painel. Quem atende vê o dia na carteira.",
    action: "Conhecer o Refritech",
    status: "live",
    appUrl: "https://refritech.b1tecnologias.com.br",
    shot: {
      src: "/produtos/refritech/painel.jpg",
      alt: "Painel da B1 Refritech no computador, com faturamento, agenda, preventivas e caixa.",
      caption: "Painel da operação",
    },
    frames: [
      {
        place: "painel",
        src: "/produtos/refritech/painel.jpg",
        width: 1920,
        height: 1200,
        alt: "Painel da B1 Refritech no computador, com faturamento, agenda, preventivas e caixa.",
        caption: "Painel da operação",
      },
    ],
    pageLead:
      "Sistema para empresa de refrigeração. O painel mostra a operação, a carteira leva a ordem de serviço para quem está na rua e a etiqueta com QR fica no equipamento.",
    audience:
      "Feito para técnicos autônomos e empresas de refrigeração que precisam ver a operação inteira, do escritório à rua.",
    problems: [
      {
        title: "Ordens de serviço",
        text: "A OS do dia fica na carteira, com horário, endereço, rota e checklist.",
      },
      {
        title: "Agenda, preventivas e PMOC",
        text: "O painel reúne a agenda, as preventivas, o PMOC e a saúde do parque.",
      },
      {
        title: "Etiqueta no equipamento",
        text: "O QR fica no aparelho. Quem aponta a câmera vê o equipamento, sem a ficha interna da empresa.",
      },
    ],
    faqs: [
      {
        question: "Para quem é o B1 Refritech?",
        answer:
          "Para técnicos autônomos e empresas de refrigeração. O responsável entra no painel da operação. O técnico entra na carteira do dia.",
      },
      {
        question: "O que o sistema organiza?",
        answer:
          "Clientes, equipamentos, ordens de serviço, orçamentos, agenda, técnicos, PMOC, estoque e financeiro. A carteira leva a OS, a rota e o checklist para quem está atendendo.",
      },
      {
        question: "Como entrar no sistema?",
        answer:
          "O B1 Refritech está em refritech.b1tecnologias.com.br. O mesmo login abre o painel para o responsável e a carteira para o técnico. Funciona no celular e no computador, sem instalação.",
      },
    ],
    ctaLabel: "Conhecer o Refritech",
    pillars: [
      {
        title: "Painel",
        text: "Faturamento, agenda, preventivas, PMOC, caixa e a saúde do parque na mesma leitura.",
      },
      {
        title: "Carteira",
        text: "A OS do dia, a rota, o checklist e a comissão na mão de quem está atendendo.",
      },
      {
        title: "Etiqueta",
        text: "O QR no equipamento abre a identidade pública: modelo, local, revisão e garantia.",
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
    line: "A loja inteira cabe num turno.",
    summary: "O balcão da venda e o painel da loja no mesmo produto.",
    extra: "A venda acontece na conta. O painel mostra o faturamento, o caixa e a prateleira.",
    action: "Conhecer o PDV",
    status: "live",
    appUrl: "https://pdv.b1tecnologias.com.br",
    frames: [
      {
        place: "loja",
        src: "/produtos/pdv/pdv.png",
        width: 1440,
        height: 900,
        alt: "Balcão do B1 PDV, com a busca, o carrinho e o pagamento na mesma tela.",
        caption: "O balcão",
      },
    ],
    pageLead:
      "Sistema de PDV com controle de estoque para mercado, padaria e loja de bairro. Venda, caixa e prateleira ficam na mesma filial.",
    audience:
      "Feito para quem vende no balcão e para quem administra a loja. Cada pessoa entra só no que o perfil libera.",
    problems: [
      {
        title: "Abre a gaveta",
        text: "O turno começa com o dinheiro que já está no caixa. O nome do caixa fica no visor.",
      },
      {
        title: "Vende no balcão",
        text: "Busca, código de barras, cliente, desconto e pagamento dividido. O troco aparece na hora.",
      },
      {
        title: "Fecha contando",
        text: "A diferença entre o esperado e o contado aparece antes de encerrar. Sangria e retirada ficam no movimento.",
      },
    ],
    faqs: [
      {
        question: "O B1 PDV já pode ser usado na loja?",
        answer:
          "A demonstração está no ar em pdv.b1tecnologias.com.br. Autorização da SEFAZ, PIX cobrado e TEF entram com a loja real.",
      },
      {
        question: "Para que tipo de loja ele foi feito?",
        answer:
          "Para mercado, padaria e loja de bairro que precisam registrar a venda e acompanhar caixa, estoque e faturamento da mesma filial.",
      },
      {
        question: "Como entrar no sistema?",
        answer:
          "O B1 PDV está em pdv.b1tecnologias.com.br. A proprietária vê a loja inteira, a gerência opera o estoque e o caixa, e quem está no caixa vende no balcão.",
      },
    ],
    ctaLabel: "Conhecer o PDV",
    pillars: [
      {
        title: "Balcão",
        text: "A busca, o carrinho e o pagamento na mesma tela em que a venda sai.",
      },
      {
        title: "Caixa",
        text: "O dinheiro esperado e a diferença aparecem antes de fechar o turno.",
      },
      {
        title: "Prateleira",
        text: "O dia mostra o faturamento, o ticket e o que precisa voltar para a prateleira.",
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
  scope: string[];
  shots: DeliveryShot[];
};

export const deliveries: Delivery[] = [
  {
    slug: "narino",
    name: "Narino Terraplenagem",
    place: "Ananindeua e Belém",
    text: "Site da empresa e sistema de gestão: máquinas, clientes, contratos e faturas.",
    scope: [
      "Site com pedido de orçamento, no computador e no celular.",
      "Painel de gestão com máquinas, clientes, contratos e faturas.",
    ],
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
    scope: [
      "Site de locação e terraplenagem, com pedido de orçamento.",
      "Painel operacional de motoristas, veículos e documentos.",
    ],
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
    scope: [
      "Site da loja de peças e equipamentos de refrigeração.",
      "Painel com faturamento, vendas e acesso ao balcão.",
      "Terminal de balcão para a venda no caixa.",
    ],
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

export function deliveryBySlug(slug: string) {
  return deliveries.find((delivery) => delivery.slug === slug);
}
