import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/breadcrumb";
import { JsonLd } from "@/components/json-ld";
import { deliveries, deliveryBySlug, site } from "@/lib/content";
import { breadcrumbGraph, graph, pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return deliveries.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projetos/[slug]">) {
  const { slug } = await params;
  const project = deliveryBySlug(slug);
  if (!project) return {};
  return pageMeta({
    path: `/projetos/${project.slug}`,
    title: `${project.name}, sistema desenvolvido pela B1`,
    description: `${project.text} Projeto da B1 Tecnologias em ${project.place}.`,
  });
}

export default async function ProjetoPage({ params }: PageProps<"/projetos/[slug]">) {
  const { slug } = await params;
  const project = deliveryBySlug(slug);
  if (!project) notFound();

  const crumbs = [
    { name: "Início", path: "/" },
    { name: "Projetos", path: "/projetos" },
    { name: project.name, path: `/projetos/${project.slug}` },
  ];

  return (
    <article className="mx-auto w-full max-w-5xl px-5 pt-32 pb-28 md:px-8">
      <JsonLd data={graph(breadcrumbGraph(crumbs))} />
      <Breadcrumb items={crumbs} />
      <p className="eyebrow">Projeto desenvolvido pela B1</p>
      <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.6rem,6vw,4.6rem)] leading-[1.02] font-medium tracking-tight text-balance">
        {project.name}
      </h1>
      <p className="mt-4 text-cyan">{project.place}</p>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist">{project.text}</p>
      <p className="mt-4 max-w-2xl leading-relaxed text-paper">
        Este sistema foi desenvolvido pela B1 Tecnologias. Ele não faz parte do catálogo de produtos
        da marca.
      </p>

      <section className="mt-12">
        <h2 className="font-display text-3xl tracking-tight">O que foi desenvolvido</h2>
        <ul className="prose-b1 mt-6">
          {project.scope.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <div className="mt-12 grid items-end gap-8 lg:grid-cols-3 lg:gap-6">
        {project.shots.map((shot) => (
          <figure key={shot.src} className={shot.kind === "phone" ? "mx-auto w-44 lg:w-full" : ""}>
            <Image
              src={shot.src}
              alt={shot.alt}
              width={shot.width}
              height={shot.height}
              unoptimized
              className="h-auto w-full"
            />
            <figcaption className="mt-3 text-xs tracking-[0.18em] text-mist uppercase">
              {shot.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      <p className="mt-16 text-sm text-mist">
        Quer um sistema para a operação do seu negócio? Escreva para{" "}
        <a className="text-paper hover:text-blue" href={`mailto:${site.emails.contact}?subject=${encodeURIComponent(project.name)}`}>
          {site.emails.contact}
        </a>
        . Veja também os{" "}
        <Link href="/produtos" className="text-paper hover:text-blue">
          produtos da B1
        </Link>
        .
      </p>
    </article>
  );
}
