import Link from "next/link";
import { ProductIcon } from "@/components/icons";
import { ProductMock, ProductShot } from "@/components/product-mock";
import { DeviceScene } from "@/components/refritech-devices";
import { site, type Product } from "@/lib/content";

export function ProductView({ product, siblings }: { product: Product; siblings: Product[] }) {
  const mail = `mailto:${site.emails.contact}?subject=${encodeURIComponent(product.name)}`;

  return (
    <article className={`tone-${product.slug} px-5 pt-32 pb-24 md:px-8`}>
      <div className="mx-auto max-w-6xl">
        <div className={product.shot || product.frames ? "max-w-3xl" : "grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]"}>
          <div>
            <p className="eyebrow">{product.status === "live" ? "Produto B1" : "Em desenvolvimento"}</p>
            <h1 className="mt-4 font-display text-[clamp(2.8rem,6vw,5rem)] leading-[0.95] font-medium tracking-tight">
              {product.name}
            </h1>
            <p className="mt-4 text-[color:var(--tone)]">{product.field}</p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-mist">{product.pageLead}</p>
            {product.status === "building" ? (
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-paper/75">
                Esta página mostra a direção do produto. Ele ainda não está disponível para uso.
              </p>
            ) : null}
          </div>
          {product.shot || product.frames ? null : <ProductMock slug={product.slug} />}
        </div>
        {product.frames ? (
          <div className="mt-14">
            <DeviceScene frames={product.frames} scene={product.slug} priority />
          </div>
        ) : null}
        {product.shot && !product.frames ? (
          <figure className="mt-12">
            <ProductShot src={product.shot.src} alt={product.shot.alt} variant="page" priority />
            <figcaption className="mt-4 text-sm tracking-wide text-mist">{product.shot.caption}</figcaption>
          </figure>
        ) : null}
      </div>

      <div className="mx-auto mt-20 grid max-w-6xl gap-4 md:grid-cols-3">
        {product.pillars.map((pillar) => (
          <section key={pillar.title} className="rounded-3xl border border-white/10 bg-panel p-6">
            <ProductIcon slug={product.slug} className="h-5 w-5 text-[color:var(--tone)]" />
            <h2 className="mt-5 font-display text-2xl tracking-tight">{pillar.title}</h2>
            <p className="mt-3 leading-relaxed text-mist">{pillar.text}</p>
          </section>
        ))}
      </div>

      <div className="mx-auto mt-16 flex max-w-6xl flex-col gap-8 border-t border-white/10 pt-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm text-mist">Parte do ecossistema B1</p>
          <ul className="mt-3 flex flex-wrap gap-4 text-sm">
            {siblings.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/produtos/${item.slug}`}
                  className={
                    item.slug === product.slug
                      ? `tone-${item.slug} text-[color:var(--tone)]`
                      : `tone-${item.slug} text-paper hover:text-[color:var(--tone)]`
                  }
                  aria-current={item.slug === product.slug ? "page" : undefined}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <a href={mail} className="btn">
          Falar sobre {product.mark}
        </a>
      </div>
    </article>
  );
}
