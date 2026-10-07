import type { Metadata } from "next";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacidade",
  description: "Como a B1 Tecnologias trata informações neste site.",
};

export default function PrivacidadePage() {
  return (
    <article className="mx-auto w-full max-w-3xl px-5 pt-32 pb-28 md:px-8">
      <p className="eyebrow">Empresa</p>
      <h1 className="mt-4 font-display text-5xl font-medium tracking-tight">Privacidade</h1>
      <div className="prose-b1 mt-8">
        <p>Atualizado em 7 de outubro de 2026.</p>
        <p>
          Este site é institucional da B1 Tecnologias. O contato é{" "}
          <a className="text-paper hover:text-cyan" href={`mailto:${site.emails.contact}`}>
            {site.emails.contact}
          </a>
          .
        </p>
        <h2>O que este site coleta</h2>
        <p>
          Não há cadastro, área logada nem formulário que grave dados em um servidor nosso. Se você
          escrever para os e-mails publicados, a mensagem chega na caixa correspondente e serve para
          responder a conversa.
        </p>
        <h2>Cookies e armazenamento local</h2>
        <p>
          O site não usa cookies de publicidade, analytics nem armazenamento local para identificar
          quem visita.
        </p>
        <h2>Compartilhamento</h2>
        <p>Não vendemos dados pessoais. Não há lista de contatos alimentada por este site.</p>
        <h2>Seus pedidos</h2>
        <p>
          Para perguntar, corrigir ou pedir a exclusão de uma mensagem que você tenha enviado,
          escreva para {site.emails.contact}.
        </p>
      </div>
    </article>
  );
}
