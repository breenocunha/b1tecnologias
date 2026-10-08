import Image from "next/image";
import Link from "next/link";
import { site, products } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.3fr_1fr_1fr] md:px-8">
        <div>
          <Image src="/marca/b1.png" alt="Marca da B1 Tecnologias" width={517} height={490} unoptimized className="h-16 w-auto" />
          <p className="mt-3 text-xs tracking-[0.42em] text-mist">TECNOLOGIAS</p>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-mist">{site.slogan}</p>
          <p className="mt-6 text-sm text-paper">{site.city}</p>
        </div>
        <div>
          <p className="text-xs tracking-[0.22em] text-mist uppercase">Produtos</p>
          <ul className="mt-4 grid gap-2 text-sm">
            {products.map((product) => (
              <li key={product.slug}>
                <Link href={`/produtos/${product.slug}`} className={`tone-${product.slug} hover:text-blue`}>
                  <span className="tone-dot" />
                  {product.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/produtos" className="hover:text-blue">
                Todos os produtos
              </Link>
            </li>
            <li>
              <Link href="/#labs" className="hover:text-blue">
                B1 Labs
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs tracking-[0.22em] text-mist uppercase">Empresa</p>
          <ul className="mt-4 grid gap-2 text-sm text-mist">
            <li>Produtos digitais</li>
            <li>Software</li>
            <li>Automação</li>
            <li>Tecnologia</li>
            <li className="pt-3">
              <Link href="/#operacao" className="text-paper hover:text-blue">
                Em operação
              </Link>
            </li>
            <li>
              <Link href="/sobre" className="text-paper hover:text-blue">
                Sobre
              </Link>
            </li>
            <li>
              <a className="text-paper hover:text-blue" href={`mailto:${site.emails.contact}`}>
                {site.emails.contact}
              </a>
            </li>
            <li>
              <Link href="/privacidade" className="hover:text-paper">
                Privacidade
              </Link>
            </li>
            <li>
              <Link href="/termos" className="hover:text-paper">
                Termos
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-6xl border-t border-white/10 px-5 py-6 text-xs text-mist md:px-8">
        <p>© 2026 B1 Tecnologias. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
