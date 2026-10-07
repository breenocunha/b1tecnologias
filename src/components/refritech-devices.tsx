import Image from "next/image";
import { productBySlug, type Product } from "@/lib/content";

export function DeviceScene({
  frames,
  scene,
  priority = false,
}: {
  frames: NonNullable<Product["frames"]>;
  scene: string;
  priority?: boolean;
}) {
  return (
    <div className={`device-scene device-scene-${scene}`}>
      {frames.map((frame) => (
        <figure key={frame.place} className={`device device-${frame.place}`}>
          <Image
            src={frame.src}
            alt={frame.alt}
            width={frame.width}
            height={frame.height}
            priority={priority && (frame.place === "painel" || frame.place === "balcao")}
            sizes={
              frame.place === "carteira"
                ? "(min-width: 1024px) 260px, 220px"
                : "(min-width: 1024px) 720px, 100vw"
            }
          />
          <figcaption>{frame.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}

export function RefritechDevices({ priority = false }: { priority?: boolean }) {
  const frames = productBySlug("refritech")?.frames;
  if (!frames?.length) return null;
  return <DeviceScene frames={frames} scene="refritech" priority={priority} />;
}
