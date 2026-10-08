import Link from "next/link";
import { Breadcrumb } from "@/components/breadcrumb";
import { JsonLd } from "@/components/json-ld";
import { products, site } from "@/lib/content";
import { breadcrumbGraph, graph, pageMeta } from "@/lib/seo";

const crumbs = [
  { name: "Início", path: "/" },
  { name: "Produtos", path: "/produtos" },
];

export const metadata = pageMeta({
  path: "/produtos",
  title: "Produtos digitais",
  description:
    "Produtos próprios da B1 Tecnologias: Refritech para refrigeração, PDV para vendas e estoque, e Move para uma rotina mais ativa.",
});

export default function ProdutosPage() {
  return (
    <article className="mx-auto w-full max-w-5xl px-5 pt-32 pb-28 md:px-8">
      <JsonLd
        data={graph(
          breadcrumbGraph(crumbs),
          {
            "@type": "ItemList",
            name: "Produtos da B1 Tecnologias",
            itemListElement: products.map((product, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: product.name,
              url: `${site.url}/produtos/${product.slug}`,
            })),
          },
        )}
      />
      <Breadcrumb items={crumbs} />
      <p className="eyebrow">Produtos</p>
      <h1 className="mt-4 max-w-2xl font-display text-[clamp(2.6rem,6vw,4.6rem)] leading-[1.02] font-medium tracking-tight text-balance">
        Ideias que já viraram produto.
      </h1>
      <div className="mt-12 grid gap-4">
        {products.map((product) => (
          <Link
            key={product.slug}
            href={`/produtos/${product.slug}`}
            className={`tone-${product.slug} group rounded-3xl border border-white/10 bg-panel p-6 transition hover:border-[color:var(--tone)] md:p-8`}
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="font-display text-2xl tracking-tight">
                <span className="tone-dot" />
                {product.name}
              </h2>
              <span className="text-xs tracking-[0.18em] text-mist uppercase">
                {product.status === "building" ? "Em desenvolvimento" : "Produto B1"}
              </span>
            </div>
            <p className="mt-2 text-sm text-[color:var(--tone)]">{product.field}</p>
            <p className="mt-4 max-w-2xl text-mist">{product.summary}</p>
            <p className="link-arrow mt-6">
              {product.action}
              <span className="arrow">→</span>
            </p>
          </Link>
        ))}
      </div>
    </article>
  );
}
