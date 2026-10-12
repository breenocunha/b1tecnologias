import Link from "next/link";
import { Breadcrumb } from "@/components/breadcrumb";
import { JsonLd } from "@/components/json-ld";
import { deliveries, site } from "@/lib/content";
import { breadcrumbGraph, graph, pageMeta } from "@/lib/seo";

const crumbs = [
  { name: "Início", path: "/" },
  { name: "Projetos", path: "/projetos" },
];

export const metadata = pageMeta({
  path: "/projetos",
  title: "Desenvolvimento de sistemas de gestão",
  description:
    "Sistemas desenvolvidos pela B1 Tecnologias para negócios em Belém e região: Narino, KBarros e FrioTech. Não fazem parte do catálogo de produtos da marca.",
});

export default function ProjetosPage() {
  return (
    <article className="mx-auto w-full max-w-3xl px-5 pt-32 pb-28 md:px-8">
      <JsonLd
        data={graph(breadcrumbGraph(crumbs), {
          "@type": "ItemList",
          name: "Projetos desenvolvidos pela B1 Tecnologias",
          itemListElement: deliveries.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            url: `${site.url}/projetos/${item.slug}`,
          })),
        })}
      />
      <Breadcrumb items={crumbs} />
      <p className="eyebrow">Projetos</p>
      <h1 className="mt-4 font-display text-[clamp(2.6rem,6vw,4.6rem)] leading-[1.02] font-medium tracking-tight text-balance">
        Sistemas desenvolvidos pela B1.
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-mist">
        Narino, KBarros e FrioTech têm site e sistema em uso. São projetos feitos pela B1 para esses
        negócios, em Belém e região. Não são o Refritech, o PDV nem o Move.
      </p>
      <div className="mt-12 grid gap-4">
        {deliveries.map((item) => (
          <Link
            key={item.slug}
            href={`/projetos/${item.slug}`}
            className="rounded-3xl border border-white/10 bg-panel p-6 transition hover:border-white/30 md:p-8"
          >
            <p className="text-sm tracking-[0.16em] text-cyan">{item.place}</p>
            <h2 className="mt-3 font-display text-3xl tracking-tight">{item.name}</h2>
            <p className="mt-3 text-mist">{item.text}</p>
            <p className="link-arrow mt-6">
              Ver o projeto
              <span className="arrow">→</span>
            </p>
          </Link>
        ))}
      </div>
    </article>
  );
}
