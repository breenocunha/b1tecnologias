import Link from "next/link";

export function MoveSection() {
  return (
    <section id="move" className="tone-move move-section relative overflow-hidden px-5 py-28 md:px-8 md:py-40">
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1fr_0.8fr]">
        <div>
          <p className="font-display text-[clamp(2.5rem,5.4vw,4.8rem)] leading-[0.92] font-medium tracking-[-0.04em] text-balance">
            Movimento também é tecnologia.
          </p>
          <h2 className="product-kicker mt-8 font-display text-2xl tracking-[0.14em]">B1 Move</h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-mist">
            Uma experiência inteligente para quem decidiu voltar a se movimentar. Ainda em
            desenvolvimento.
          </p>
          <Link href="/produtos/move" className="link-arrow mt-8">
            Ver a direção
            <span className="arrow">→</span>
          </Link>
        </div>
        <div className="move-figure" aria-hidden="true">
          <svg viewBox="0 0 320 460" className="h-auto w-full max-w-sm">
            <ellipse cx="168" cy="430" rx="78" ry="10" fill="none" stroke="currentColor" strokeOpacity="0.28" />
            <circle cx="168" cy="62" r="20" fill="none" stroke="currentColor" strokeWidth="2" />
            <path
              d="M158 86 C150 130 138 168 128 210"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
            <path
              className="limb limb-a"
              d="M152 112 C118 128 78 118 52 96"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              className="limb limb-b"
              d="M150 118 C196 146 228 186 246 224"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              className="limb limb-c"
              d="M128 210 C96 268 62 292 40 276"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              className="limb limb-d"
              d="M128 210 C168 268 214 318 248 372"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="246" cy="224" r="5" fill="#8b6cff" />
          </svg>
        </div>
      </div>
    </section>
  );
}
