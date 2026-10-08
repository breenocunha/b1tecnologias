import { Close } from "@/components/v2/close";
import { HeroV2 } from "@/components/v2/hero";
import { MoveSection } from "@/components/v2/move";
import { PdvSection } from "@/components/v2/pdv";
import { RefritechFeature } from "@/components/v2/refritech";
import { Growing, Labs, RealWorld, Statement, Why } from "@/components/v2/sections";
import { Operation } from "@/components/v2/operacao";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  path: "/",
  title: "B1 Tecnologias — Software e produtos digitais em Belém",
  description:
    "A B1 Tecnologias, em Belém, cria produtos digitais próprios: Refritech para refrigeração, PDV para o comércio e Move. Sistemas em operação no Pará.",
});

export default function Home() {
  return (
    <>
      <HeroV2 />
      <Statement />
      <RefritechFeature />
      <Growing />
      <PdvSection />
      <MoveSection />
      <Why />
      <RealWorld />
      <Operation />
      <Labs />
      <Close />
    </>
  );
}
