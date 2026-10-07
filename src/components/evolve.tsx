"use client";

import { motion, useReducedMotion } from "framer-motion";
import { products } from "@/lib/content";
import { Flow } from "@/components/flow";
import { Reveal } from "@/components/reveal";

const pluses = [
  "translate-y-3",
  "-translate-y-2",
  "translate-y-4",
  "-translate-y-1",
  "translate-y-2",
];

export function Evolve() {
  const reduce = useReducedMotion();

  return (
    <section className="px-5 py-28 md:px-8 md:py-36">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="eyebrow">Feito para evoluir</p>
        <h2 className="mt-4 font-display text-[clamp(2.1rem,4.6vw,3.8rem)] leading-[1.05] font-medium tracking-tight text-balance">
          Hoje são alguns produtos. Amanhã, um ecossistema.
        </h2>
      </Reveal>
      <div className="mt-16">
        <Flow
          root={<div className="node-core">B1</div>}
          branches={products.map((product) => ({
            id: product.slug,
            title: product.mark,
            href: `/produtos/${product.slug}`,
          }))}
          foot={<span className="text-xs tracking-[0.28em] text-mist uppercase">em crescimento</span>}
          trailing={
            <div className="mt-8 flex flex-col items-center">
              <div className="flex items-center gap-3">
                {pluses.map((offset, index) => (
                  <motion.span
                    key={offset}
                    className={`grid h-11 w-11 place-items-center rounded-full border border-cyan/30 text-lg text-cyan ${offset}`}
                    initial={reduce ? false : { opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.35 + index * 0.1, duration: 0.45 }}
                  >
                    +
                  </motion.span>
                ))}
              </div>
              <p className="mt-6 text-xs tracking-[0.32em] text-mist uppercase">Novos produtos</p>
            </div>
          }
        />
      </div>
      <Reveal className="mx-auto mt-14 max-w-2xl text-center">
        <p className="text-lg leading-relaxed text-pretty text-mist">
          Estamos construindo uma plataforma de produtos digitais que cresce junto com novas ideias,
          necessidades e oportunidades.
        </p>
      </Reveal>
    </section>
  );
}
