import Image from "next/image";
import { productBySlug } from "@/lib/content";

export function PdvSection() {
  const product = productBySlug("pdv");
  const cover = product?.frames?.find((frame) => frame.place === "loja");

  return (
    <section id="pdv" className="tone-pdv band-pdv border-y border-white/10 px-5 py-28 md:px-8 md:py-36">
      <div className="mx-auto grid max-w-6xl items-end gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="eyebrow">Vitrine</p>
          <h2 className="mt-4 font-display text-[clamp(3rem,7vw,5.4rem)] leading-[0.9] font-medium tracking-[-0.04em]">
            B1 PDV
          </h2>
          <p className="mt-6 max-w-md font-display text-3xl tracking-tight text-balance">{product?.line}</p>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-mist">{product?.summary}</p>
          {product?.appUrl ? (
            <a className="btn mt-8" href={product.appUrl}>
              {product.ctaLabel}
            </a>
          ) : null}
        </div>
        {cover && product?.appUrl ? (
          <a href={product.appUrl} className="block">
            <Image
              src={cover.src}
              alt={cover.alt}
              width={cover.width}
              height={cover.height}
              className="h-auto w-full rounded-3xl border border-white/10"
              sizes="(min-width: 1024px) 640px, 100vw"
            />
          </a>
        ) : null}
      </div>
    </section>
  );
}
