"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { processSteps } from "@/lib/content";
import { Reveal } from "@/components/reveal";

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 70, damping: 24, restDelta: 0.001 });

  return (
    <section id="processo" className="px-5 py-28 md:px-8 md:py-36">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow">Como a B1 constrói</p>
          <h2 className="mt-4 font-display text-[clamp(2.1rem,4.6vw,3.8rem)] leading-[1.05] font-medium tracking-tight text-balance">
            Construído para problemas reais.
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-mist">
            Quatro passos. O mesmo critério em cada produto.
          </p>
        </Reveal>
        <div ref={ref} className="relative">
          <div className="absolute top-0 bottom-0 left-0 w-px bg-white/10 md:left-3" />
          <motion.div
            className="absolute top-0 bottom-0 left-0 w-px origin-top bg-gradient-to-b from-cyan via-electric to-cyan/10 md:left-3"
            style={{ scaleY: reduce ? 1 : scaleY }}
          />
          <ol className="space-y-14 pl-8 md:pl-16">
            {processSteps.map((step) => (
              <li key={step.n}>
                <p className="font-display text-sm tracking-[0.28em] text-cyan">{step.n}</p>
                <h3 className="mt-3 font-display text-3xl tracking-[0.08em] uppercase md:text-4xl">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-md text-lg text-mist">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
