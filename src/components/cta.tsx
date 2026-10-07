import { site } from "@/lib/content";
import { Reveal } from "@/components/reveal";

export function Cta() {
  const mail = `mailto:${site.emails.contact}?subject=${encodeURIComponent("Conversa com a B1")}`;

  return (
    <section id="contato" className="relative overflow-hidden px-5 py-28 md:px-8 md:py-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(50,110,200,0.16),transparent_62%)]" />
      <Reveal className="relative mx-auto max-w-3xl text-center">
        <h2 className="font-display text-[clamp(2.2rem,5vw,4.2rem)] leading-[1.05] font-medium tracking-tight text-balance">
          Tem uma ideia que pode virar produto?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-mist">
          A próxima solução pode começar com uma conversa.
        </p>
        <a href={mail} className="btn mt-10">
          Falar com a B1
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
        </a>
        <ul className="mt-10 grid justify-center gap-2 text-sm text-mist">
          <li>
            <a className="hover:text-paper" href={`mailto:${site.emails.contact}`}>
              {site.emails.contact}
            </a>
          </li>
          <li>
            <a className="hover:text-paper" href={`mailto:${site.emails.commercial}`}>
              {site.emails.commercial}
            </a>
          </li>
        </ul>
      </Reveal>
    </section>
  );
}
