import Link from "next/link";

export function Breadcrumb({ items }: { items: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Você está em" className="mb-6 text-sm text-mist">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-2">
              {index > 0 ? <span aria-hidden="true">/</span> : null}
              {last ? (
                <span className="text-paper" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className="hover:text-paper">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
