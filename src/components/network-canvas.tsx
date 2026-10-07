"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  tone: number;
};

export function NetworkCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let nodes: Node[] = [];
    let width = 0;
    let height = 0;
    let raf = 0;
    let running = true;
    const pointer = { x: -9999, y: -9999, active: false };

    const build = () => {
      const rect = parent.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = width < 760 ? 30 : 58;
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        r: Math.random() < 0.14 ? 2 : 1.15,
        tone: Math.random(),
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const link = Math.min(150, width * 0.2);

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          if (Math.abs(dx) > link || Math.abs(dy) > link) continue;
          const dist = Math.hypot(dx, dy);
          if (dist > link) continue;
          const alpha = (1 - dist / link) * 0.28;
          ctx.strokeStyle = `rgba(130, 196, 255, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      for (const node of nodes) {
        const glow = node.r > 1.5;
        if (glow) {
          ctx.fillStyle = "rgba(126, 231, 255, 0.14)";
          ctx.beginPath();
          ctx.arc(node.x, node.y, 7, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.fillStyle =
          node.tone > 0.55
            ? "rgba(214, 246, 255, 0.9)"
            : "rgba(120, 176, 255, 0.8)";
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const step = () => {
      if (!running) return;
      const reach = 170;
      for (const node of nodes) {
        if (pointer.active) {
          const dx = node.x - pointer.x;
          const dy = node.y - pointer.y;
          const dist = Math.hypot(dx, dy);
          if (dist < reach && dist > 0.01) {
            const force = ((reach - dist) / reach) * 0.018;
            node.vx += (dx / dist) * force;
            node.vy += (dy / dist) * force;
          }
        }
        node.vx *= 0.992;
        node.vy *= 0.992;
        const speed = Math.hypot(node.vx, node.vy);
        if (speed > 0.55) {
          node.vx = (node.vx / speed) * 0.55;
          node.vy = (node.vy / speed) * 0.55;
        }
        if (speed < 0.05) {
          node.vx += (Math.random() - 0.5) * 0.01;
          node.vy += (Math.random() - 0.5) * 0.01;
        }
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < -20) node.x = width + 20;
        if (node.x > width + 20) node.x = -20;
        if (node.y < -20) node.y = height + 20;
        if (node.y > height + 20) node.y = -20;
      }
      draw();
      raf = requestAnimationFrame(step);
    };

    const onMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
      pointer.active = true;
    };

    const onLeave = () => {
      pointer.active = false;
    };

    const onResize = () => {
      build();
      if (reduce) draw();
    };

    build();
    const observer = new IntersectionObserver(
      ([entry]) => {
        running = entry.isIntersecting && !document.hidden;
        if (running && !reduce) {
          cancelAnimationFrame(raf);
          raf = requestAnimationFrame(step);
        }
      },
      { threshold: 0.05 },
    );
    observer.observe(parent);

    if (reduce) {
      draw();
    } else {
      raf = requestAnimationFrame(step);
      window.addEventListener("pointermove", onMove, { passive: true });
      window.addEventListener("pointerleave", onLeave);
    }
    window.addEventListener("resize", onResize);

    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else if (!reduce) {
        running = true;
        raf = requestAnimationFrame(step);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 h-full w-full [mask-image:radial-gradient(ellipse_at_50%_42%,transparent_0%,rgba(0,0,0,0.45)_24%,#000_58%)]"
      aria-hidden="true"
    />
  );
}
