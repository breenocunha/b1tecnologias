import { Close } from "@/components/v2/close";
import { HeroV2 } from "@/components/v2/hero";
import { MoveSection } from "@/components/v2/move";
import { PdvSection } from "@/components/v2/pdv";
import { RefritechFeature } from "@/components/v2/refritech";
import { Growing, Labs, RealWorld, Statement, Why } from "@/components/v2/sections";
import { Operation } from "@/components/v2/operacao";

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
