"use client";

import Link from "next/link";
import { useRef } from "react";
import { ProductIcon } from "@/components/icons";
import { ProductMock } from "@/components/product-mock";
import type { Product } from "@/lib/content";

export function ProductCard({ product }: { product: Product }) {
  const ref = useRef<HTMLElement>(null);

  const onMove = (event: React.MouseEvent<HTMLElement>) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    node.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    node.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };

  return (
    <article ref={ref} className="product-card" onMouseMove={onMove}>
      <div className="glow" />
      <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl border border-cyan/25 text-cyan">
              <ProductIcon slug={product.slug} className="h-5 w-5" />
            </span>
            <h3 className="font-display text-lg tracking-[0.14em] uppercase">{product.name}</h3>
            {product.status === "building" ? (
              <span className="rounded-full border border-white/15 px-2.5 py-1 text-[10px] tracking-[0.16em] text-mist uppercase">
                Em desenvolvimento
              </span>
            ) : null}
          </div>
          <p className="mt-3 text-sm text-cyan/80">{product.field}</p>
          <p className="mt-6 max-w-xl font-display text-[clamp(1.8rem,3vw,2.7rem)] leading-[1.12] font-medium tracking-tight text-balance">
            {product.line}
          </p>
          <p className="mt-4 max-w-xl leading-relaxed text-mist">{product.summary}</p>
          <p className="extra mt-4 max-w-xl leading-relaxed text-paper/80">{product.extra}</p>
          <Link href={`/produtos/${product.slug}`} className="link-arrow mt-8">
            {product.action}
            <span className="arrow" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
        <div className={product.shot ? "mock is-real" : "mock"}>
          <ProductMock slug={product.slug} />
        </div>
      </div>
    </article>
  );
}
