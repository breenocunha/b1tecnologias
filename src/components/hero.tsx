import Link from "next/link";
import { Diamond } from "@/components/logo";
import { NetworkCanvas } from "@/components/network-canvas";
import { HeroField } from "@/components/hero-field";

export function Hero() {
  return (
    <section className="relative flex min-h-svh items-center justify-center overflow-hidden px-6 pt-24 pb-16">
      <NetworkCanvas />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_42%,rgba(48,96,180,0.22),transparent_58%)]" />
      <HeroField />
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
        <div className="mb-2 text-cyan" aria-hidden="true">
          <Diamond className="mx-auto h-3.5 w-3.5" />
          <svg viewBox="0 0 160 36" className="mx-auto mt-3 h-7 w-28 text-cyan/70">
            <circle cx="22" cy="20" r="1.7" fill="currentColor" />
            <circle cx="138" cy="20" r="1.7" fill="currentColor" />
            <path d="M74 6 L90 30" stroke="currentColor" strokeWidth="1.2" />
          </svg>
        </div>
        <p className="font-display text-[clamp(5.2rem,16vw,9.2rem)] leading-[0.82] font-semibold tracking-[-0.06em]">
          B1
        </p>
        <p className="mt-4 pl-[0.58em] text-[0.72rem] tracking-[0.58em] text-cyan/90 sm:text-sm">
          TECNOLOGIAS
        </p>
        <h1 className="mt-10 font-display text-[clamp(1.45rem,4.7vw,3.35rem)] leading-[1.12] font-medium tracking-tight">
          <span className="block">Tecnologia que transforma</span>
          <span className="block">ideias em soluções.</span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-pretty text-mist md:text-lg">
          Criamos produtos digitais para transformar problemas reais em experiências simples,
          inteligentes e escaláveis.
        </p>
        <Link href="#produtos" className="btn mt-10">
          Conheça nossos produtos
          <svg viewBox="0 0 16 16" className="h-4 w-4" aria-hidden="true">
            <path
              d="M3 8h10M9 4l4 4-4 4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
        <a href="#ecossistema" className="scroll-cue" aria-label="Continuar para o ecossistema">
          <span />
        </a>
      </div>
    </section>
  );
}
