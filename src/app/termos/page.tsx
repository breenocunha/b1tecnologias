import { Breadcrumb } from "@/components/breadcrumb";
import { JsonLd } from "@/components/json-ld";
import { site } from "@/lib/content";
import { breadcrumbGraph, graph, pageMeta } from "@/lib/seo";

const crumbs = [
  { name: "Início", path: "/" },
  { name: "Termos", path: "/termos" },
];

export const metadata = pageMeta({
  path: "/termos",
  title: "Termos de uso",
  description: "Condições de uso do site institucional da B1 Tecnologias.",
});

export default function TermosPage() {
  return (
    <article className="mx-auto w-full max-w-3xl px-5 pt-32 pb-28 md:px-8">
      <JsonLd data={graph(breadcrumbGraph(crumbs))} />
      <Breadcrumb items={crumbs} />
      <p className="eyebrow">Empresa</p>
      <h1 className="mt-4 font-display text-5xl font-medium tracking-tight">Termos</h1>
      <div className="prose-b1 mt-8">
        <p>Atualizado em 26 de setembro de 2026.</p>
        <p>
          Este site apresenta a B1 Tecnologias e os produtos que a empresa idealiza, desenvolve e
          opera. O uso do site é livre para consulta.
        </p>
        <h2>Conteúdo e marca</h2>
        <p>
          Textos, identidade visual, nome B1 Tecnologias e os nomes dos produtos pertencem à B1.
          Não use a marca para sugerir parceria, endosso ou produto que não exista.
        </p>
        <h2>Produtos</h2>
        <p>
          Parte do ecossistema está em desenvolvimento. O que está marcado assim descreve uma
          direção, não uma oferta disponível para uso. Nada neste site, sozinho, forma contrato.
        </p>
        <h2>Contato</h2>
        <p>
          Conversas comerciais e institucionais começam pelos e-mails{" "}
          <a className="text-paper hover:text-blue" href={`mailto:${site.emails.contact}`}>
            {site.emails.contact}
          </a>{" "}
          e{" "}
          <a className="text-paper hover:text-blue" href={`mailto:${site.emails.commercial}`}>
            {site.emails.commercial}
          </a>
          .
        </p>
      </div>
    </article>
  );
}
