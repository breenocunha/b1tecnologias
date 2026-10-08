import { ProductView } from "@/components/product-view";
import { productBySlug, products } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

const product = productBySlug("pdv")!;

export const metadata = pageMeta({
  path: "/produtos/pdv",
  title: "PDV para vendas e estoque",
  description:
    "Balcão e painel da loja no mesmo produto: venda, pagamentos, caixa, faturamento e prateleira. O B1 PDV está em desenvolvimento.",
});

export default function PdvPage() {
  return <ProductView product={product} siblings={products} />;
}
