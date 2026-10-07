import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/content";

export const metadata: Metadata = {
  title: "Produtos",
  description: "Produtos próprios da B1 Tecnologias: Refritech, Move e PDV.",
};

export default function ProdutosPage() {
  return (
    <article className="mx-auto w-full max-w-5xl px-5 pt-32 pb-28 md:px-8">
      <p className="eyebrow">Produtos</p>
      <h1 className="mt-4 max-w-2xl font-display text-[clamp(2.6rem,6vw,4.6rem)] leading-[1.02] font-medium tracking-tight text-balance">
        Ideias que já viraram produto.
      </h1>
      <div className="mt-12 grid gap-4">
        {products.map((product) => (
          <Link
            key={product.slug}
            href={`/produtos/${product.slug}`}
            className="group rounded-3xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-cyan/30 md:p-8"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="font-display text-2xl tracking-tight">{product.name}</h2>
              <span className="text-xs tracking-[0.18em] text-mist uppercase">
                {product.status === "building" ? "Em desenvolvimento" : "Produto B1"}
              </span>
            </div>
            <p className="mt-2 text-sm text-cyan/80">{product.field}</p>
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
