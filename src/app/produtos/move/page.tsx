import { ProductView } from "@/components/product-view";
import { productBySlug, products } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

const product = productBySlug("move")!;

export const metadata = pageMeta({
  path: "/produtos/move",
  title: "Move, rotina mais ativa",
  description:
    "Experiência digital para sair da inatividade e construir uma rotina mais ativa. O B1 Move ainda está em desenvolvimento na B1 Tecnologias.",
});

export default function MovePage() {
  return <ProductView product={product} siblings={products} />;
}
