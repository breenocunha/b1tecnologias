import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/content";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "A B1 Tecnologias idealiza, desenvolve e opera produtos digitais próprios. Não criamos tecnologia por criar.",
};

export default function SobrePage() {
  return (
    <article className="mx-auto w-full max-w-3xl px-5 pt-32 pb-28 md:px-8">
      <p className="eyebrow">A B1</p>
      <h1 className="mt-4 font-display text-[clamp(2.6rem,6vw,4.6rem)] leading-[1.02] font-medium tracking-tight text-balance">
        Não criamos tecnologia por criar.
      </h1>
      <div className="prose-b1 mt-8">
        <p>
          A B1 Tecnologias idealiza, desenvolve e opera produtos digitais próprios. A empresa não
          existe para esperar o próximo projeto de terceiros: escolhe um problema, desenha a
          experiência e constrói o produto.
        </p>
        <p>
          Criamos produtos para tornar tarefas complexas mais simples, transformar processos e criar
          novas possibilidades através da tecnologia.
        </p>
        <h2>O que isso significa na prática</h2>
        <ul>
          <li>Produtos próprios, com nome, direção e continuidade.</li>
          <li>Cada um nasce de um mercado e de pessoas com uma rotina concreta.</li>
          <li>A base é compartilhada. O ecossistema pode crescer sem recomeçar do zero.</li>
        </ul>
        <h2>O que já está em construção</h2>
        <ul>
          {products.map((product) => (
            <li key={product.slug}>
              <Link href={`/produtos/${product.slug}`} className="text-paper hover:text-blue">
                {product.name}
              </Link>
              {" — "}
              {product.field.toLowerCase()}
              {product.status === "building" ? " (em desenvolvimento)" : ""}.
            </li>
          ))}
        </ul>
        <p>Do código à experiência.</p>
      </div>
      <Link href="/#contato" className="btn mt-12">
        Falar com a B1
      </Link>
    </article>
  );
}
