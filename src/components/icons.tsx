export function IconCold({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M12 3v18M5.2 6.5l13.6 11M18.8 6.5 5.2 17.5M4 12h16"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M12 3 9.8 5.4M12 3l2.2 2.4M12 21l-2.2-2.4M12 21l2.2-2.4M4 12l2.5-1.2M4 12l2.5 1.2M20 12l-2.5-1.2M20 12l-2.5 1.2"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconMove({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <circle cx="14" cy="5" r="1.6" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M8 21.5 10.2 14l-2.6-2.2 3.2-3.1 2.4 2.2 2.8-.4L18.5 14M10.2 14l1.4 3.2"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconPdv({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M5 8.5h14l-.8 9.2a1.5 1.5 0 0 1-1.5 1.3H7.3a1.5 1.5 0 0 1-1.5-1.3L5 8.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M9 8.4V6.8A3 3 0 0 1 12 3.8a3 3 0 0 1 3 3v1.6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

const icons = {
  refritech: IconCold,
  move: IconMove,
  pdv: IconPdv,
};

export function ProductIcon({
  slug,
  className,
}: {
  slug: string;
  className?: string;
}) {
  const Icon = icons[slug as keyof typeof icons] ?? IconCold;
  return <Icon className={className} />;
}
