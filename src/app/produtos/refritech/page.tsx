import { ProductWindow } from "@/components/product-window";
import { productBySlug, products } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

const product = productBySlug("refritech")!;

export const metadata = pageMeta({
  path: "/produtos/refritech",
  title: "Sistema para empresa de refrigeração",
  description:
    "O B1 Refritech é o sistema da B1 para empresas de refrigeração. A apresentação do produto está em refritech.b1tecnologias.com.br.",
});

export default function RefritechPage() {
  return <ProductWindow product={product} siblings={products} />;
}
