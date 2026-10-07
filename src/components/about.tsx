import Link from "next/link";
import { Reveal } from "@/components/reveal";

export function About() {
  return (
    <section className="px-5 py-24 md:px-8 md:py-32">
      <Reveal className="mx-auto max-w-3xl">
        <p className="eyebrow">Sobre a B1</p>
        <h2 className="mt-4 font-display text-[clamp(2.1rem,4.6vw,3.8rem)] leading-[1.08] font-medium tracking-tight text-balance">
          Não criamos tecnologia por criar.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-pretty text-mist">
          Criamos produtos para tornar tarefas complexas mais simples, transformar processos e criar
          novas possibilidades através da tecnologia.
        </p>
        <p className="mt-8 font-display text-sm tracking-[0.28em] text-paper">B1 TECNOLOGIAS</p>
        <Link href="/sobre" className="link-arrow mt-8">
          Conheça a B1
          <span className="arrow" aria-hidden="true">
            →
          </span>
        </Link>
      </Reveal>
    </section>
  );
}
