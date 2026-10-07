import type { Metadata } from "next";
import { ProductView } from "@/components/product-view";
import { productBySlug, products } from "@/lib/content";

const product = productBySlug("refritech")!;

export const metadata: Metadata = {
  title: product.name,
  description: product.summary,
};

export default function RefritechPage() {
  return <ProductView product={product} siblings={products} />;
}
