import Image from "next/image";
import Link from "next/link";

export function Diamond({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
      <path d="M8 1.1 10.3 5.1 8 9.1 5.7 5.1Z" fill="currentColor" />
    </svg>
  );
}

export function Logo() {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-2.5 text-paper"
      aria-label="B1 Tecnologias, início"
    >
      <Image
        src="/marca/b1.png"
        alt=""
        width={517}
        height={490}
        priority
        unoptimized
        className="h-10 w-auto"
      />
      <span className="hidden font-sans text-[10px] font-medium tracking-[0.32em] text-mist sm:inline">
        TECNOLOGIAS
      </span>
    </Link>
  );
}
