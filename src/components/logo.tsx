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
      <Diamond className="h-3.5 w-3.5 text-cyan" />
      <span className="font-display text-[15px] font-semibold tracking-[0.16em]">
        B1
        <span className="ml-2 hidden font-sans text-[10px] font-medium tracking-[0.32em] text-mist sm:inline">
          TECNOLOGIAS
        </span>
      </span>
    </Link>
  );
}
