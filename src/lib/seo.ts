import type { Metadata } from "next";
import { site } from "@/lib/content";

const brand = "B1 Tecnologias";

export function pageMeta({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const home = path === "/";
  const fullTitle = home ? title : `${title} · ${brand}`;

  return {
    title: home ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      locale: "pt_BR",
      type: "website",
      siteName: brand,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

export function organizationId() {
  return `${site.url}/#organization`;
}

export function websiteId() {
  return `${site.url}/#website`;
}

export function organizationGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId(),
        name: site.name,
        url: site.url,
        logo: `${site.url}/bimi/logo.svg`,
        image: `${site.url}/bimi/logo.svg`,
        email: site.emails.contact,
        slogan: "Tecnologia para o próximo nível.",
        description:
          "A B1 Tecnologias, em Belém, idealiza, desenvolve e opera produtos digitais próprios.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Belém",
          addressRegion: "PA",
          addressCountry: "BR",
        },
        areaServed: [
          { "@type": "City", name: "Belém" },
          { "@type": "AdministrativeArea", name: "Pará" },
          { "@type": "Country", name: "Brasil" },
        ],
        contactPoint: {
          "@type": "ContactPoint",
          email: site.emails.contact,
          contactType: "customer support",
          availableLanguage: ["Portuguese"],
        },
      },
      {
        "@type": "WebSite",
        "@id": websiteId(),
        url: site.url,
        name: site.name,
        inLanguage: "pt-BR",
        publisher: { "@id": organizationId() },
      },
    ],
  };
}

export function breadcrumbGraph(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export function graph(...nodes: Record<string, unknown>[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
