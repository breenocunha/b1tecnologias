import Link from "next/link";
import { DeviceScene } from "@/components/refritech-devices";
import { productBySlug } from "@/lib/content";

export function PdvSection() {
  const frames = productBySlug("pdv")?.frames;

  return (
    <section id="pdv" className="border-y border-white/10 bg-[#101010] px-5 py-28 md:px-8 md:py-36">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="font-display text-[clamp(2.4rem,5vw,4.4rem)] leading-[0.92] font-medium tracking-[-0.04em]">
            Venda mais.
            <span className="mt-2 block">Gerencie melhor.</span>
          </p>
          <h2 className="mt-8 font-display text-2xl tracking-[0.14em]">B1 PDV</h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-mist">
            O balcão registra a venda. O painel mostra o faturamento, o caixa e o que está faltando
            na prateleira.
          </p>
          <Link href="/produtos/pdv" className="link-arrow mt-8">
            Ver o PDV
            <span className="arrow">→</span>
          </Link>
        </div>
        <div className="glass rounded-[1.75rem] p-8 md:p-10">
          <p className="text-xs tracking-[0.22em] text-mist uppercase">Infraestrutura</p>
          <div className="domain-swap mt-8">
            <p className="font-display text-[clamp(1.05rem,1.7vw,1.55rem)] tracking-tight text-mist">
              b1tecnologias.com.br
            </p>
            <span className="domain-arrow text-cyan" aria-hidden="true">
              ↓
            </span>
            <p className="font-display text-[clamp(1.05rem,1.7vw,1.55rem)] tracking-tight">
              cliente.b1tecnologias.com.br
            </p>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-mist">
            De b1tecnologias.com.br para o endereço de cada cliente. A operação fica na interface. A
            base fica por baixo.
          </p>
        </div>
      </div>
      {frames ? (
        <div className="mx-auto mt-16 max-w-6xl">
          <DeviceScene frames={frames} scene="pdv" priority />
        </div>
      ) : null}
    </section>
  );
}
