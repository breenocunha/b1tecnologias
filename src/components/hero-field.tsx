"use client";

import { useEffect, useRef } from "react";

export function HeroField() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onMove = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 18;
      const y = (event.clientY / window.innerHeight - 0.5) * 12;
      node.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 grid place-items-center" aria-hidden="true">
      <svg viewBox="0 0 200 200" className="diamond-spin h-[min(72vw,640px)] w-[min(72vw,640px)] text-cyan/15">
        <path d="M100 8 L192 100 L100 192 L8 100 Z" fill="none" stroke="currentColor" strokeWidth="0.6" />
        <path d="M100 38 L162 100 L100 162 L38 100 Z" fill="none" stroke="currentColor" strokeWidth="0.35" />
      </svg>
    </div>
  );
}
