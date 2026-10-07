import { products } from "@/lib/content";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";

export function Products() {
  return (
    <section id="produtos" className="px-5 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">O que estamos construindo</p>
          <h2 className="mt-4 font-display text-[clamp(2.1rem,4.6vw,3.8rem)] leading-[1.05] font-medium tracking-tight text-balance">
            Ideias se tornam produtos.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-mist">
            A B1 Tecnologias desenvolve produtos digitais próprios para resolver problemas reais de
            diferentes mercados e pessoas.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-5">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
