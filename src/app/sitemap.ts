import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/sobre", "/produtos", "/produtos/refritech", "/produtos/move", "/produtos/pdv", "/privacidade", "/termos"];

  return paths.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date("2026-10-07"),
  }));
}
