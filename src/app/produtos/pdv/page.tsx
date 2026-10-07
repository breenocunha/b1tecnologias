import type { Metadata } from "next";
import { ProductView } from "@/components/product-view";
import { productBySlug, products } from "@/lib/content";

const product = productBySlug("pdv")!;

export const metadata: Metadata = {
  title: product.name,
  description: product.summary,
};

export default function PdvPage() {
  return <ProductView product={product} siblings={products} />;
}
