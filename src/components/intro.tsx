"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

type Particle = {
  x: number;
  y: number;
  tx: number;
  ty: number;
};

function finishIntro() {
  try {
    sessionStorage.setItem("b1-intro", "1");
  } catch {
    /* sessão indisponível */
  }
  document.documentElement.classList.remove("b1-intro-on");
}

export function IntroWatch() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") {
      document.documentElement.classList.remove("b1-intro-on");
    }
  }, [pathname]);

  return null;
}

export function Intro() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const closeRef = useRef<() => void>(() => {});
  const [gone, setGone] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useLayoutEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let seen = false;
    try {
      seen = sessionStorage.getItem("b1-intro") === "1";
    } catch {
      seen = true;
    }
    if (reduce || seen || window.location.pathname !== "/") return;

    document.documentElement.classList.add("b1-intro-on");
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let cancelled = false;
    let raf = 0;
    let fadeTimer = 0;
    let finished = false;

    const close = () => {
      if (cancelled || finished) return;
      finished = true;
      cancelAnimationFrame(raf);
      setLeaving(true);
      fadeTimer = window.setTimeout(() => {
        finishIntro();
        setGone(true);
      }, 780);
    };
    closeRef.current = close;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    window.addEventListener("keydown", onKey);

    const run = async () => {
      const family =
        getComputedStyle(document.documentElement)
          .getPropertyValue("--font-syne")
          .trim() || "sans-serif";

      await Promise.race([
        document.fonts.load(`700 150px ${family}`),
        new Promise((resolve) => window.setTimeout(resolve, 700)),
      ]);
      if (cancelled) return;

      const cssW = Math.min(520, window.innerWidth * 0.86);
      const cssH = 250;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(cssW * dpr);
      canvas.height = Math.floor(cssH * dpr);
      canvas.style.width = `${cssW}px`;
      canvas.style.height = `${cssH}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const sample = document.createElement("canvas");
      sample.width = Math.floor(cssW);
      sample.height = Math.floor(cssH);
      const sctx = sample.getContext("2d", { willReadFrequently: true });
      if (!sctx) {
        close();
        return;
      }

      sctx.clearRect(0, 0, sample.width, sample.height);
      sctx.fillStyle = "#fff";
      sctx.font = `700 ${Math.round(cssW * 0.34)}px ${family}`;
      sctx.textAlign = "center";
      sctx.textBaseline = "middle";
      sctx.fillText("B1", sample.width / 2, sample.height / 2 + 6);

      const pixels = sctx.getImageData(0, 0, sample.width, sample.height).data;
      const step = cssW < 420 ? 7 : 6;
      const targets: { x: number; y: number }[] = [];
      for (let y = 0; y < sample.height; y += step) {
        for (let x = 0; x < sample.width; x += step) {
          if (pixels[(y * sample.width + x) * 4 + 3] > 140) {
            targets.push({
              x: x + (Math.random() - 0.5) * 0.8,
              y: y + (Math.random() - 0.5) * 0.8,
            });
          }
        }
      }

      if (targets.length < 24) {
        close();
        return;
      }

      const cap = cssW < 420 ? 140 : 210;
      const chosen =
        targets.length > cap
          ? targets.filter((_, index) => index % Math.ceil(targets.length / cap) === 0)
          : targets;

      const particles: Particle[] = chosen.map((target) => ({
        x: Math.random() * cssW,
        y: Math.random() * cssH,
        tx: target.x,
        ty: target.y,
      }));

      const started = performance.now();

      const frame = (now: number) => {
        if (cancelled) return;
        const elapsed = now - started;
        const progress = Math.min(1, elapsed / 1600);
        const ease = 1 - (1 - progress) ** 3;
        ctx.clearRect(0, 0, cssW, cssH);

        for (const particle of particles) {
          const pull = 0.025 + ease * 0.07;
          particle.x += (particle.tx - particle.x) * pull;
          particle.y += (particle.ty - particle.y) * pull;
        }

        if (progress > 0.62) {
          ctx.lineWidth = 1;
          let links = 0;
          for (let i = 0; i < particles.length && links < 360; i++) {
            const a = particles[i];
            if (Math.hypot(a.tx - a.x, a.ty - a.y) > 10) continue;
            for (let j = i + 1; j < particles.length && links < 360; j++) {
              const b = particles[j];
              const dx = a.x - b.x;
              const dy = a.y - b.y;
              if (Math.abs(dx) > 18 || Math.abs(dy) > 18) continue;
              const dist = Math.hypot(dx, dy);
              if (dist > 16) continue;
              ctx.strokeStyle = `rgba(140, 214, 255, ${(1 - dist / 16) * 0.45})`;
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.stroke();
              links += 1;
            }
          }
        }

        for (const particle of particles) {
          ctx.fillStyle = "rgba(214, 246, 255, 0.92)";
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, 1.25, 0, Math.PI * 2);
          ctx.fill();
        }

        if (elapsed > 2300) {
          close();
          return;
        }
        raf = requestAnimationFrame(frame);
      };

      raf = requestAnimationFrame(frame);
    };

    void run();

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      window.clearTimeout(fadeTimer);
      window.removeEventListener("keydown", onKey);
      if (!finished) document.documentElement.classList.remove("b1-intro-on");
    };
  }, []);

  if (gone) return null;

  return (
    <div
      className={leaving ? "b1-intro is-out" : "b1-intro"}
      onClick={() => closeRef.current()}
    >
      <div className="flex flex-col items-center">
        <canvas ref={canvasRef} />
        <button
          type="button"
          className="mt-8 text-xs tracking-[0.28em] text-mist uppercase"
          onClick={(event) => {
            event.stopPropagation();
            closeRef.current();
          }}
        >
          Pular
        </button>
      </div>
    </div>
  );
}
