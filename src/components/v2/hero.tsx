"use client";

import { useEffect, useRef } from "react";

const marks = [
  { label: "B1 Refritech", tone: "refritech", x: 58, y: 16, d: 18 },
  { label: "B1 PDV", tone: "pdv", x: 76, y: 36, d: 14 },
  { label: "B1 Move", tone: "move", x: 64, y: 58, d: 16 },
  { label: "B1 …", tone: "next", x: 82, y: 74, d: 10 },
];

export function HeroV2() {
  const scene = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = scene.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onMove = (event: PointerEvent) => {
      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;
      node.style.setProperty("--px", x.toFixed(3));
      node.style.setProperty("--py", y.toFixed(3));
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <section ref={scene} className="hero-v2 relative flex min-h-svh items-end overflow-hidden px-5 pt-28 pb-20 md:px-8 md:pb-28">
      <div className="hero-light" aria-hidden="true" />
      <div className="hero-solid" aria-hidden="true">
        <span className="solid solid-a" />
        <span className="solid solid-b" />
        <span className="solid solid-c" />
      </div>
      {marks.map((mark) => (
        <span
          key={mark.label}
          className={`hero-mark tone-${mark.tone}`}
          style={{
            left: `${mark.x}%`,
            top: `${mark.y}%`,
            transform: `translate3d(calc(var(--px, 0) * ${mark.d}px), calc(var(--py, 0) * ${mark.d * 0.7}px), 0)`,
          }}
        >
          <span className="tone-dot" />
          {mark.label}
        </span>
      ))}
      <div className="relative z-10 max-w-5xl">
        <p className="eyebrow">B1 Tecnologias</p>
        <h1 className="mt-6 max-w-[11ch] font-display text-[clamp(3.1rem,8.4vw,7.4rem)] leading-[0.88] font-medium tracking-[-0.045em] text-balance">
          Tecnologia para o próximo nível.
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-pretty text-mist md:text-xl">
          Criamos softwares inteligentes para transformar operações complexas em experiências simples,
          eficientes e escaláveis.
        </p>
        <a href="#refritech" className="btn mt-10">
          Conheça nossas soluções
        </a>
      </div>
    </section>
  );
}
