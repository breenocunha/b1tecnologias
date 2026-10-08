"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Logo } from "@/components/logo";

const links = [
  { href: "/#refritech", label: "Refritech", match: "/produtos/refritech" },
  { href: "/#pdv", label: "PDV", match: "/produtos/pdv" },
  { href: "/#move", label: "Move", match: "/produtos/move" },
  { href: "/#operacao", label: "Operação" },
  { href: "/#labs", label: "Labs" },
  { href: "/sobre", label: "Sobre", match: "/sobre" },
];

export function Header() {
  const pathname = usePathname();
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const open = menuPath === pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    const frame = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("menu-open", open);
    return () => document.documentElement.classList.remove("menu-open");
  }, [open]);

  return (
    <header
      className={`site-header fixed inset-x-0 top-0 z-40 ${
        scrolled || open
          ? "border-b border-white/10 bg-[#07111F]/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between px-5 md:px-8">
        <Logo />
        <nav className="hidden items-center gap-5 lg:flex" aria-label="Principal">
          {links.map((link) => {
            const active = link.match ? pathname.startsWith(link.match) : false;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors ${
                  active ? "text-paper" : "text-mist hover:text-paper"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/#contato" className="btn hidden !min-h-10 !px-4 !text-sm lg:inline-flex">
            Fale com a B1
          </Link>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMenuPath(open ? null : pathname)}
          >
            <span className="flex w-5 flex-col gap-1.5">
              <span className={`h-px bg-paper transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
              <span className={`h-px bg-paper transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>
      {open
        ? createPortal(
            <div id="menu-mobile" className="menu-panel fixed inset-0 z-30 px-6 pt-28 lg:hidden">
              <nav className="flex flex-col gap-5" aria-label="Mobile">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="font-display text-4xl tracking-tight"
                    onClick={() => setMenuPath(null)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link href="/#contato" className="btn mt-4 w-fit" onClick={() => setMenuPath(null)}>
                  Fale com a B1
                </Link>
              </nav>
            </div>,
            document.body,
          )
        : null}
    </header>
  );
}
