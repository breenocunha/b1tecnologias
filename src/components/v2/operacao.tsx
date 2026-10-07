import Image from "next/image";
import { deliveries } from "@/lib/content";

export function Operation() {
  return (
    <section id="operacao" className="border-t border-white/10 px-5 py-28 md:px-8 md:py-36">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow">Em operação</p>
        <h2 className="mt-4 max-w-[16ch] font-display text-[clamp(2.6rem,5.5vw,4.8rem)] leading-[0.92] font-medium tracking-[-0.04em]">
          Três negócios. Três sistemas entregues.
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-mist">
          Cada um é um site e a operação por trás. Já rodam comercialmente.
        </p>

        <div className="mt-24 grid gap-28">
          {deliveries.map((item) => (
            <article key={item.slug}>
              <p className="text-sm tracking-[0.16em] text-cyan">{item.place}</p>
              <h3 className="mt-3 font-display text-[clamp(2rem,4vw,3.4rem)] tracking-tight">
                {item.name}
              </h3>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-mist">{item.text}</p>
              <div className="mt-10 grid items-end gap-8 lg:grid-cols-[0.34fr_1fr_1fr] lg:gap-6">
                {item.shots.map((shot) => (
                  <figure
                    key={shot.src}
                    className={
                      shot.kind === "phone"
                        ? "order-3 mx-auto w-[10.5rem] lg:order-none lg:w-full"
                        : "lg:order-none"
                    }
                  >
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      width={shot.width}
                      height={shot.height}
                      unoptimized
                      sizes={shot.kind === "phone" ? "180px" : "520px"}
                      className="h-auto w-full"
                    />
                    <figcaption className="mt-3 text-xs tracking-[0.18em] text-mist uppercase">
                      {shot.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
