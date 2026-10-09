import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/breadcrumb";
import { JsonLd } from "@/components/json-ld";
import { products, site, type Product } from "@/lib/content";
import { breadcrumbGraph, graph, pageMeta } from "@/lib/seo";

const crumbs = [
  { name: "Início", path: "/" },
  { name: "Produtos", path: "/produtos" },
];

const order = ["refritech", "pdv", "move"];

const listed = order.map((slug) => products.find((product) => product.slug === slug)!);

const faqs = [
  {
    question: "O que é o B1 Refritech?",
    answer:
      "É o sistema de gestão da B1 para empresas de refrigeração. Quem administra o parque entra no painel, com faturamento, agenda, preventivas e caixa. Quem atende na rua entra na carteira do técnico.",
  },
  {
    question: "O B1 PDV já está disponível?",
    answer:
      "Ainda está em desenvolvimento. A direção já está definida: o balcão registra a venda, em dinheiro, PIX, débito ou crédito, e o painel mostra faturamento, caixa e o que falta na prateleira.",
  },
  {
    question: "Para que serve o B1 Move?",
    answer:
      "É a experiência da B1 para quem quer sair da inatividade e construir uma rotina mais ativa. O produto ainda está em desenvolvimento.",
  },
  {
    question: "Onde fica a B1 Tecnologias?",
    answer:
      "Em Belém, no Pará. O contato para falar dos produtos é contato@b1tecnologias.com.br.",
  },
];

export const metadata = pageMeta({
  path: "/produtos",
  title: "Software para refrigeração, PDV e rotina",
  description:
    "Sistemas da B1 Tecnologias em Belém: Refritech para gestão de refrigeração, PDV para venda e estoque, e Move para uma rotina mais ativa.",
});

function coverOf(product: Product) {
  return product.frames?.find((frame) => frame.place === "painel" || frame.place === "loja");
}

export default function ProdutosPage() {
  return (
    <article className="mx-auto w-full max-w-5xl px-5 pt-32 pb-28 md:px-8">
      <JsonLd
        data={graph(
          breadcrumbGraph(crumbs),
          {
            "@type": "ItemList",
            name: "Produtos da B1 Tecnologias",
            itemListElement: listed.map((product, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: product.name,
              url: `${site.url}/produtos/${product.slug}`,
              description: product.pageLead,
            })),
          },
          {
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          },
        )}
      />
      <Breadcrumb items={crumbs} />
      <p className="eyebrow">Produtos B1</p>
      <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.6rem,6vw,4.6rem)] leading-[1.02] font-medium tracking-tight text-balance">
        Software para refrigeração, comércio e rotina.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist">
        A B1 Tecnologias, em Belém, cria produtos próprios. O Refritech é o sistema de gestão para
        empresas de refrigeração. O PDV junta a venda no balcão com o caixa e o estoque. O Move ajuda
        quem quer sair da inatividade e construir ritmo.
      </p>

      <div className="mt-14 grid gap-5">
        {listed.map((product, index) => {
          const cover = coverOf(product);
          return (
            <Link
              key={product.slug}
              href={`/produtos/${product.slug}`}
              className={`tone-${product.slug} group grid items-center gap-8 rounded-3xl border border-white/10 bg-panel p-6 transition hover:border-[color:var(--tone)] md:p-8 ${
                cover ? "lg:grid-cols-[1.05fr_0.95fr]" : ""
              }`}
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h2 className="font-display text-3xl tracking-tight">
                    <span className="tone-dot" />
                    {product.name}
                  </h2>
                  <span className="text-xs tracking-[0.18em] text-mist uppercase">
                    {product.status === "building" ? "Em desenvolvimento" : "Produto B1"}
                  </span>
                </div>
                <p className="mt-3 text-sm text-[color:var(--tone)]">{product.field}</p>
                <p className="mt-4 max-w-xl text-lg leading-relaxed text-paper">{product.line}</p>
                <p className="mt-3 max-w-xl leading-relaxed text-mist">{product.pageLead}</p>
                <ul className="mt-5 grid gap-2 text-sm text-mist">
                  {product.pillars.map((pillar) => (
                    <li key={pillar.title}>
                      <span className="text-paper">{pillar.title}. </span>
                      {pillar.text}
                    </li>
                  ))}
                </ul>
                <p className="link-arrow mt-6">
                  {product.action}
                  <span className="arrow">→</span>
                </p>
              </div>
              {cover ? (
                <Image
                  src={cover.src}
                  alt={cover.alt}
                  width={cover.width}
                  height={cover.height}
                  priority={index === 0}
                  unoptimized
                  className="h-auto w-full rounded-2xl border border-white/10"
                />
              ) : null}
            </Link>
          );
        })}
      </div>

      <section className="mt-20 border-t border-white/10 pt-12">
        <h2 className="font-display text-3xl tracking-tight">Perguntas frequentes</h2>
        <div className="mt-8 grid gap-6">
          {faqs.map((faq) => (
            <div key={faq.question}>
              <h3 className="font-display text-xl tracking-tight">{faq.question}</h3>
              <p className="mt-2 max-w-2xl leading-relaxed text-mist">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="font-display text-3xl tracking-tight">Falar sobre um produto</h2>
          <p className="mt-3 max-w-md text-mist">
            {site.city}. Escreva para {site.emails.contact}.
          </p>
          <p className="mt-4 text-sm">
            <Link href="/#operacao" className="text-paper hover:text-blue">
              Ver sistemas em operação
            </Link>
          </p>
        </div>
        <a className="btn" href={`mailto:${site.emails.contact}?subject=${encodeURIComponent("Produtos B1")}`}>
          Falar com a B1
        </a>
      </section>
    </article>
  );
}
