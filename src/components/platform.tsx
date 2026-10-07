import { architecture, stack } from "@/lib/content";
import { Flow } from "@/components/flow";
import { Reveal } from "@/components/reveal";
import { Diamond } from "@/components/logo";

export function Platform() {
  return (
    <section id="plataforma" className="relative overflow-hidden px-5 py-28 md:px-8 md:py-36">
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(60,120,220,0.12),transparent_68%)]" />
      <Reveal className="relative mx-auto max-w-3xl text-center">
        <p className="eyebrow">Por trás dos produtos</p>
        <h2 className="mt-4 font-display text-[clamp(2.1rem,4.6vw,3.8rem)] leading-[1.05] font-medium tracking-tight text-balance">
          Uma base. Vários produtos.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-mist">
          Os produtos da B1 nascem da mesma fundação. Arquitetura, dados e segurança sustentam cada
          experiência — e deixam o ecossistema pronto para crescer.
        </p>
      </Reveal>
      <div className="relative mt-16">
        <Flow
          root={
            <div className="rounded-full border border-cyan/30 bg-[#070b14]/80 px-5 py-3 font-display text-sm tracking-[0.28em]">
              B1 TECNOLOGIAS
            </div>
          }
          branches={architecture.map((item) => ({
            id: item.id,
            title: item.title,
            hint: item.hint,
          }))}
          foot={
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs tracking-[0.24em] text-paper">
              <Diamond className="h-3 w-3 text-cyan" />
              PRODUTOS B1
            </div>
          }
        />
      </div>
      <Reveal className="relative mx-auto mt-16 max-w-3xl text-center">
        <p className="text-xs tracking-[0.28em] text-mist uppercase">Arquitetura moderna</p>
        <ul className="mt-5 flex flex-wrap justify-center gap-2">
          {stack.map((item) => (
            <li
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-sm text-paper/90"
            >
              {item}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
