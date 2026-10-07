"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

const stats = [
  { value: 3, label: "Produtos", pad: true },
  { value: null, label: "Possibilidades", symbol: "∞" },
  { value: 1, label: "Ecossistema", pad: true },
];

function useCount(target: number, active: boolean) {
  const reduce = useReducedMotion();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!active || reduce) return;
    const started = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const progress = Math.min(1, (now - started) / 900);
      const eased = 1 - (1 - progress) ** 3;
      setCurrent(Math.round(target * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, reduce, target]);

  if (reduce || !active) return reduce ? target : 0;
  return current;
}

function Stat({
  value,
  label,
  symbol,
  pad,
  active,
}: {
  value: number | null;
  label: string;
  symbol?: string;
  pad?: boolean;
  active: boolean;
}) {
  const count = useCount(value ?? 0, active && value !== null);
  const shown = symbol ?? (pad ? String(count).padStart(2, "0") : String(count));

  return (
    <div className="px-3 py-10 text-center md:py-14">
      <p className="font-display text-[clamp(2.6rem,6vw,4.6rem)] leading-none tracking-tight">{shown}</p>
      <p className="mt-3 text-[0.68rem] tracking-[0.2em] text-mist uppercase sm:text-xs">{label}</p>
    </div>
  );
}

export function Counters() {
  const ref = useRef<HTMLElement>(null);
  const active = useInView(ref, { once: true, amount: 0.6 });

  return (
    <section ref={ref} className="mx-auto mt-20 max-w-6xl border-y border-white/10" aria-label="Em números reais">
      <div className="grid grid-cols-3 divide-x divide-white/10">
        {stats.map((stat) => (
          <Stat key={stat.label} {...stat} active={active} />
        ))}
      </div>
    </section>
  );
}
