import { ProductView } from "@/components/product-view";
import { productBySlug, products } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

const product = productBySlug("refritech")!;

export const metadata = pageMeta({
  path: "/produtos/refritech",
  title: "Refritech, gestão para refrigeração",
  description:
    "Sistema de gestão para refrigeração. Quem administra usa o painel; quem atende usa a carteira do técnico. B1 Refritech, da B1 Tecnologias em Belém.",
});

export default function RefritechPage() {
  return <ProductView product={product} siblings={products} />;
}
