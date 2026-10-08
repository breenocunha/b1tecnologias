import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

const updated = new Date("2026-10-08");

const entries: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/produtos", priority: 0.9, changeFrequency: "weekly" },
  { path: "/produtos/refritech", priority: 0.9, changeFrequency: "weekly" },
  { path: "/produtos/pdv", priority: 0.8, changeFrequency: "weekly" },
  { path: "/produtos/move", priority: 0.8, changeFrequency: "weekly" },
  { path: "/sobre", priority: 0.6, changeFrequency: "monthly" },
  { path: "/privacidade", priority: 0.2, changeFrequency: "yearly" },
  { path: "/termos", priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return entries.map((entry) => ({
    url: `${site.url}${entry.path}`,
    lastModified: updated,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}
