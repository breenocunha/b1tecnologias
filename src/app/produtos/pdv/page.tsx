import { ProductWindow } from "@/components/product-window";
import { productBySlug, products } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

const product = productBySlug("pdv")!;

export const metadata = pageMeta({
  path: "/produtos/pdv",
  title: "Sistema PDV com controle de estoque",
  description:
    "O B1 PDV é o sistema de vendas da B1 para pequenas lojas. A apresentação do produto está em pdv.b1tecnologias.com.br.",
});

export default function PdvPage() {
  return <ProductWindow product={product} siblings={products} />;
}
