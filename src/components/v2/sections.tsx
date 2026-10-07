import Link from "next/link";

const pillars = [
  {
    n: "01",
    title: "Simplicidade",
    text: "Tecnologia complexa por trás. Experiência simples na frente.",
  },
  {
    n: "02",
    title: "Performance",
    text: "Produtos pensados para funcionar no mundo real.",
  },
  {
    n: "03",
    title: "Inteligência",
    text: "Dados e automação trabalhando a favor de quem usa.",
  },
  {
    n: "04",
    title: "Evolução",
    text: "Produtos que continuam evoluindo junto com seus clientes.",
  },
];

const chain = ["Refrigeração", "Gestão", "Vendas", "Estoque", "Clientes", "Dados"];

const labs = ["AI", "3D", "Automação", "Cloud", "Mobile", "Web"];

const nodes = [
  { name: "B1 Refritech", hint: "Refrigeração", href: "/produtos/refritech" },
  { name: "B1 PDV", hint: "Varejo", href: "/produtos/pdv" },
  { name: "B1 Move", hint: "Movimento", href: "/produtos/move" },
];

export function Statement() {
  return (
    <section className="px-5 py-28 md:px-8 md:py-36">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-display text-[clamp(2.8rem,6vw,5.4rem)] leading-[0.92] font-medium tracking-[-0.04em]">
          Um ecossistema.
          <span className="mt-2 block">Diferentes possibilidades.</span>
        </h2>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-mist">
          Da gestão técnica à operação comercial, desenvolvemos produtos pensados para resolver
          problemas reais.
        </p>
      </div>
    </section>
  );
}

export function Growing() {
  return (
    <section id="ecossistema" className="px-5 py-28 md:px-8 md:py-36">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow">E estamos apenas começando</p>
        <h2 className="mt-4 max-w-[14ch] font-display text-[clamp(2.6rem,5.5vw,4.8rem)] leading-[0.92] font-medium tracking-[-0.04em]">
          O ecossistema B1 está crescendo.
        </h2>
        <div className="mt-16">
          <p className="mx-auto w-fit rounded-full border border-white/15 px-5 py-2 text-xs tracking-[0.28em]">
            B1 TECNOLOGIAS
          </p>
          <svg className="mx-auto hidden h-24 w-full max-w-5xl md:block" viewBox="0 0 900 96" fill="none" aria-hidden="true">
            <path d="M450 0 V28" stroke="rgba(255,255,255,0.28)" />
            <path d="M150 96 C150 40 450 40 450 28" stroke="rgba(255,255,255,0.22)" />
            <path d="M450 28 V96" stroke="rgba(255,255,255,0.22)" />
            <path d="M750 96 C750 40 450 40 450 28" stroke="rgba(255,255,255,0.22)" />
            <circle cx="450" cy="6" r="3.5" fill="#ff4d2a" />
            <circle cx="150" cy="92" r="3" fill="#f4f4f1" />
            <circle cx="450" cy="92" r="3" fill="#f4f4f1" />
            <circle cx="750" cy="92" r="3" fill="#f4f4f1" />
          </svg>
          <div className="mt-6 grid gap-4 md:mt-0 md:grid-cols-3">
            {nodes.map((node) => (
              <Link key={node.name} href={node.href} className="glass block p-6">
                <p className="font-display text-xl tracking-tight">{node.name}</p>
                <p className="mt-2 text-sm text-mist">{node.hint}</p>
              </Link>
            ))}
          </div>
          <div className="mx-auto mt-2 hidden h-12 w-px bg-white/20 md:block" />
          <p className="mx-auto mt-4 w-fit rounded-full border border-dashed border-white/25 px-5 py-3 text-sm tracking-[0.18em] text-mist md:mt-0">
            + Próxima solução
          </p>
        </div>
      </div>
    </section>
  );
}

export function Why() {
  return (
    <section id="por-que" className="px-5 py-28 md:px-8 md:py-36">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-[clamp(2.8rem,6vw,5rem)] leading-none font-medium tracking-[-0.04em]">
          Por que B1?
        </h2>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {pillars.map((pillar) => (
            <article key={pillar.n} className="glass group p-8 md:p-10">
              <p className="text-sm tracking-[0.22em] text-cyan">{pillar.n}</p>
              <h3 className="mt-6 font-display text-4xl tracking-tight">{pillar.title}</h3>
              <p className="mt-4 max-w-sm text-lg leading-relaxed text-mist transition group-hover:text-paper">
                {pillar.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function RealWorld() {
  return (
    <section className="px-5 py-28 md:px-8 md:py-36">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-[clamp(2.4rem,5vw,4.2rem)] leading-[0.95] font-medium tracking-[-0.04em]">
          Feito para o mundo real.
        </h2>
        <ol className="mt-12 flex flex-col gap-3 md:flex-row md:flex-wrap md:items-center">
          {chain.map((step, index) => (
            <li key={step} className="flex items-center gap-3">
              <span className="rounded-full border border-white/15 px-4 py-2 text-sm tracking-[0.14em]">
                {step}
              </span>
              {index < chain.length - 1 ? (
                <span className="text-mist md:-rotate-90" aria-hidden="true">
                  ↓
                </span>
              ) : null}
            </li>
          ))}
        </ol>
        <p className="mt-12 max-w-xl font-display text-2xl leading-snug tracking-tight md:text-3xl">
          Não criamos tecnologia para impressionar. Criamos tecnologia para funcionar.
        </p>
      </div>
    </section>
  );
}

export function Labs() {
  return (
    <section id="labs" className="px-5 py-28 md:px-8 md:py-36">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow">B1 Labs</p>
        <h2 className="mt-4 max-w-[12ch] font-display text-[clamp(2.6rem,5.5vw,4.6rem)] leading-[0.92] font-medium tracking-[-0.04em]">
          Onde novas ideias ganham forma.
        </h2>
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3">
          {labs.map((item) => (
            <div key={item} className="glass flex min-h-32 items-end p-6">
              <p className="font-display text-2xl tracking-[0.12em]">{item}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm tracking-[0.2em] text-mist uppercase">Em desenvolvimento</p>
      </div>
    </section>
  );
}
