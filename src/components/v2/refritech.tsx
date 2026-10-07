"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { RefritechDevices } from "@/components/refritech-devices";

const leftNotes = ["Clientes", "Rotas", "Agenda", "Orçamentos"];
const rightNotes = ["Ordens de serviço", "PMOC", "Estoque"];

function Note({
  label,
  index,
  reduce,
}: {
  label: string;
  index: number;
  reduce: boolean | null;
}) {
  return (
    <motion.li
      className="glass-chip"
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ delay: 0.08 * index, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {label}
    </motion.li>
  );
}

export function RefritechFeature() {
  const reduce = useReducedMotion();

  return (
    <section id="refritech" className="px-5 py-28 md:px-8 md:py-36">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow">Carro-chefe</p>
        <h2 className="mt-4 max-w-[12ch] font-display text-[clamp(3rem,7vw,6.2rem)] leading-[0.9] font-medium tracking-[-0.04em]">
          B1 Refritech
        </h2>
        <p className="mt-6 max-w-xl font-display text-3xl tracking-tight text-balance md:text-4xl">
          Gestão inteligente para refrigeração.
        </p>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-mist">
          Um sistema completo. Quem administra entra no painel da operação. Quem atende na rua entra
          na carteira do técnico.
        </p>
        <Link href="/produtos/refritech" className="link-arrow mt-8">
          Ver o Refritech
          <span className="arrow">→</span>
        </Link>
      </div>

      <ul className="mx-auto mt-10 flex max-w-6xl flex-wrap gap-2">
        {[...leftNotes, ...rightNotes].map((note, index) => (
          <Note key={note} label={note} index={index} reduce={reduce} />
        ))}
      </ul>
      <div className="mx-auto mt-12 max-w-6xl">
        <RefritechDevices priority />
      </div>
    </section>
  );
}
