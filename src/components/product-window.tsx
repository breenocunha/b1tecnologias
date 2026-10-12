import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/breadcrumb";
import { JsonLd } from "@/components/json-ld";
import { site, type Product } from "@/lib/content";
import { breadcrumbGraph, graph, organizationId } from "@/lib/seo";

export function ProductWindow({ product, siblings }: { product: Product; siblings: Product[] }) {
  const path = `/produtos/${product.slug}`;
  const cover = product.frames?.[0];
  const destination = product.appUrl;
  const mail = `mailto:${site.emails.contact}?subject=${encodeURIComponent(product.name)}`;
  const crumbs = [
    { name: "Início", path: "/" },
    { name: "Produtos", path: "/produtos" },
    { name: product.mark, path },
  ];

  return (
    <article className={`tone-${product.slug} px-5 pt-32 pb-24 md:px-8`}>
      <JsonLd
        data={graph(breadcrumbGraph(crumbs), {
          "@type": "SoftwareApplication",
          name: product.name,
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          description: product.pageLead,
          url: destination ?? `${site.url}${path}`,
          inLanguage: "pt-BR",
          provider: { "@id": organizationId() },
        })}
      />
      <div className="mx-auto max-w-6xl">
        <Breadcrumb items={crumbs} />
        <p className="eyebrow">{product.status === "live" ? "Na vitrine B1" : "Em desenvolvimento"}</p>
        <h1 className="mt-4 max-w-4xl font-display text-[clamp(2.8rem,6vw,5rem)] leading-[0.95] font-medium tracking-tight text-balance">
          {product.name}
        </h1>
        <p className="mt-6 max-w-2xl font-display text-3xl tracking-tight text-balance md:text-4xl">
          {product.line}
        </p>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-mist">{product.pageLead}</p>
        {destination ? (
          <p className="mt-4 max-w-2xl leading-relaxed text-paper">
            A apresentação do produto está em {destination.replace("https://", "")}.
          </p>
        ) : null}
        <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          {destination ? (
            <a className="btn" href={destination}>
              {product.ctaLabel ?? `Conhecer ${product.mark}`}
            </a>
          ) : (
            <a className="btn" href={mail}>
              {product.ctaLabel ?? `Falar sobre ${product.mark}`}
            </a>
          )}
          {destination ? (
            <a className="link-arrow" href={mail}>
              Falar com a B1
              <span className="arrow">→</span>
            </a>
          ) : null}
        </div>
        {cover ? (
          <figure className="mt-14">
            {destination ? (
              <a href={destination}>
                <Image
                  src={cover.src}
                  alt={cover.alt}
                  width={cover.width}
                  height={cover.height}
                  priority
                  className="h-auto w-full rounded-3xl border border-white/10"
                  sizes="(min-width: 1152px) 1152px, 100vw"
                />
              </a>
            ) : (
              <Image
                src={cover.src}
                alt={cover.alt}
                width={cover.width}
                height={cover.height}
                priority
                className="h-auto w-full rounded-3xl border border-white/10"
                sizes="(min-width: 1152px) 1152px, 100vw"
              />
            )}
            <figcaption className="mt-3 text-xs tracking-[0.18em] text-mist uppercase">{cover.caption}</figcaption>
          </figure>
        ) : null}
        <div className="mt-16 flex flex-col gap-8 border-t border-white/10 pt-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm text-mist">Outros produtos da B1</p>
            <ul className="mt-3 flex flex-wrap gap-4 text-sm">
              {siblings
                .filter((item) => item.slug !== product.slug)
                .map((item) => (
                <li key={item.slug}>
                  {item.appUrl ? (
                    <a href={item.appUrl} className={`tone-${item.slug} text-paper hover:text-[color:var(--tone)]`}>
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      href={`/produtos/${item.slug}`}
                      className={`tone-${item.slug} text-paper hover:text-[color:var(--tone)]`}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <Link href="/produtos" className="link-arrow">
            Voltar à vitrine
            <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
