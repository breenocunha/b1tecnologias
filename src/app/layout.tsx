import type { Metadata, Viewport } from "next";
import { Geist, Syne } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { JsonLd } from "@/components/json-ld";
import { site } from "@/lib/content";
import { organizationGraph } from "@/lib/seo";
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

const description =
  "A B1 Tecnologias, em Belém, cria produtos digitais próprios: Refritech para refrigeração, PDV para o comércio e Move. Sistemas em operação no Pará.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "B1 Tecnologias — Software e produtos digitais em Belém",
    template: "%s · B1 Tecnologias",
  },
  description,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
  applicationName: "B1 Tecnologias",
  authors: [{ name: "B1 Tecnologias", url: site.url }],
  creator: "B1 Tecnologias",
  publisher: "B1 Tecnologias",
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    siteName: "B1 Tecnologias",
    title: "B1 Tecnologias — Software e produtos digitais em Belém",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "B1 Tecnologias — Software e produtos digitais em Belém",
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#07111F",
  colorScheme: "dark",
};


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${geist.variable} ${syne.variable} h-full antialiased`}>
      <body className="flex min-h-svh flex-col bg-ink font-sans text-paper">
        <JsonLd data={organizationGraph()} />
        <a href="#conteudo" className="skip-link">
          Ir para o conteúdo
        </a>
        <Header />
        <main id="conteudo" className="flex flex-1 flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
