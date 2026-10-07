import { products } from "@/lib/content";
import { Flow } from "@/components/flow";
import { Reveal } from "@/components/reveal";

export function Ecosystem() {
  return (
    <section id="ecossistema" className="px-5 py-28 md:px-8 md:py-36">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="eyebrow">Ecossistema</p>
        <h2 className="mt-4 font-display text-[clamp(2.1rem,4.6vw,3.8rem)] leading-[1.05] font-medium tracking-tight text-balance">
          Uma empresa. Vários produtos. Um ecossistema.
        </h2>
      </Reveal>
      <div className="mt-16">
        <Flow
          root={<div className="node-core">B1</div>}
          branches={products.map((product) => ({
            id: product.slug,
            title: product.mark,
            hint:
              product.slug === "refritech"
                ? "Refrigeração"
                : product.slug === "move"
                  ? "Movimento"
                  : "Comércio",
            href: `/produtos/${product.slug}`,
          }))}
          foot={
            <div className="rounded-full border border-cyan/25 px-5 py-2 text-xs tracking-[0.32em] text-cyan">
              B1 TECNOLOGIAS
            </div>
          }
        />
      </div>
    </section>
  );
}
