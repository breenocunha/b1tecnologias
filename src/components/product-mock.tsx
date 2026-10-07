import Image from "next/image";
import { productBySlug } from "@/lib/content";

export function ProductShot({
  src,
  alt,
  variant = "card",
  priority = false,
}: {
  src: string;
  alt: string;
  variant?: "card" | "page";
  priority?: boolean;
}) {
  const image = (
    <Image
      src={src}
      alt={alt}
      width={1024}
      height={535}
      priority={priority}
      className="shot-image"
      sizes={
        variant === "page"
          ? "(min-width: 1152px) 1080px, 100vw"
          : "(min-width: 1024px) 460px, 100vw"
      }
    />
  );

  if (variant === "page") {
    return (
      <div className="stage">
        <div className="stage-glow" aria-hidden="true" />
        <div className="stage-bezel">{image}</div>
        <div className="stage-floor" aria-hidden="true" />
      </div>
    );
  }

  return <div className="shot-frame is-card">{image}</div>;
}

export function ProductMock({ slug }: { slug: string }) {
  if (slug === "move") {
    return (
      <div className="mock-screen" aria-hidden="true">
        <div className="mock-top">
          <span>Move</span>
          <span className="mock-dots">
            <i />
            <i />
            <i />
          </span>
        </div>
        <div className="mt-5 flex items-center gap-5">
          <svg viewBox="0 0 92 92" className="ring">
            <circle className="track" cx="46" cy="46" r="34" />
            <circle className="value" cx="46" cy="46" r="34" strokeDasharray="150 214" />
          </svg>
          <div>
            <p className="text-xs tracking-[0.18em] text-mist uppercase">Rotina</p>
            <p className="mt-1 font-display text-2xl">Em movimento</p>
          </div>
        </div>
        <div className="mock-list">
          {["Começar", "Manter", "Voltar"].map((item) => (
            <div key={item} className="mock-row">
              <b className="font-medium">{item}</b>
              <span />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (slug === "pdv") {
    return (
      <div className="mock-screen" aria-hidden="true">
        <div className="mock-top">
          <span>PDV</span>
          <span className="mock-dots">
            <i />
            <i />
            <i />
          </span>
        </div>
        <div className="mock-list">
          {[
            ["Vendas", "68%"],
            ["Estoque", "42%"],
            ["Operação", "80%"],
          ].map(([label, width]) => (
            <div key={label} className="mock-row">
              <b className="font-medium">{label}</b>
              <i className="mock-track" style={{ width }} />
            </div>
          ))}
        </div>
        <div className="mt-5 rounded-xl border border-white/10 px-3 py-3 text-sm text-mist">
          Um balcão. Uma leitura só.
        </div>
      </div>
    );
  }

  const shot = productBySlug("refritech")?.shot;
  if (!shot) return null;

  return <ProductShot src={shot.src} alt={shot.alt} />;
}
