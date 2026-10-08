import { site } from "@/lib/content";

export function Close() {
  const mail = `mailto:${site.emails.contact}?subject=${encodeURIComponent("Um problema para a B1")}`;

  return (
    <section id="contato" className="band-close px-5 py-32 md:px-8 md:py-44">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.88] font-medium tracking-[-0.045em]">
          Tem um problema.
          <span className="mt-3 block">Vamos transformá-lo em tecnologia.</span>
        </h2>
        <a href={mail} className="btn mt-12">
          Fale com a B1
        </a>
        <p className="mt-16 font-display text-3xl tracking-tight">B1 Tecnologias</p>
        <p className="mt-3 text-sm tracking-[0.18em] text-mist uppercase">
          Produtos digitais · Software · Automação · Tecnologia
        </p>
        <p className="mt-4 text-sm text-paper">{site.city}</p>
      </div>
    </section>
  );
}
