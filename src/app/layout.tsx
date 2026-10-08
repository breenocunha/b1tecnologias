import type { Metadata, Viewport } from "next";
import { Geist, Syne } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { site } from "@/lib/content";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "B1 Tecnologias — Tecnologia que transforma negócios",
    template: "%s · B1 Tecnologias",
  },
  description:
    "A B1 Tecnologias cria um ecossistema de produtos digitais. Refritech, PDV e Move — tecnologia para o próximo nível.",
  applicationName: "B1 Tecnologias",
  authors: [{ name: "B1 Tecnologias", url: site.url }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    siteName: "B1 Tecnologias",
    title: "B1 Tecnologias — Tecnologia que transforma negócios",
    description:
      "Um ecossistema de produtos digitais. Refritech, PDV e Move, feitos para o mundo real.",
  },
  twitter: {
    card: "summary_large_image",
    title: "B1 Tecnologias",
    description: site.slogan,
  },
  alternates: {
    canonical: site.url,
  },
};

export const viewport: Viewport = {
  themeColor: "#07111F",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  email: site.emails.contact,
  slogan: site.slogan,
  description:
    "A B1 Tecnologias idealiza, desenvolve e opera produtos digitais próprios.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${geist.variable} ${syne.variable} h-full antialiased`}>
      <body className="flex min-h-svh flex-col bg-ink font-sans text-paper">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <a href="#conteudo" className="skip-link">
          Ir para o conteúdo
        </a>
        <Header />
        <div id="conteudo" className="flex flex-1 flex-col">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
