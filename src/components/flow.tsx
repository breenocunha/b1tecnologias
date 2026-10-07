"use client";

import Link from "next/link";
import { useRef } from "react";
import { useInView, useReducedMotion } from "framer-motion";

export type FlowBranch = {
  id: string;
  title: string;
  hint?: string;
  href?: string;
};

export function Flow({
  root,
  branches,
  foot,
  trailing,
}: {
  root: React.ReactNode;
  branches: FlowBranch[];
  foot: React.ReactNode;
  trailing?: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { once: true, amount: 0.35 });
  const visible = reduce || inView;

  return (
    <div ref={ref} className={visible ? "flow is-visible" : "flow"}>
      <div className="flow-root">{root}</div>
      <div className="flow-v" />
      <div className="flow-row">
        {branches.map((branch) => {
          const inner = (
            <>
              <p className="font-display text-sm tracking-[0.16em] uppercase">{branch.title}</p>
              {branch.hint ? <p className="mt-1 text-xs text-mist">{branch.hint}</p> : null}
            </>
          );
          return (
            <div key={branch.id} className="flow-branch">
              <span className="flow-drop" />
              {branch.href ? (
                <Link href={branch.href} className="flow-node">
                  {inner}
                </Link>
              ) : (
                <div className="flow-node">{inner}</div>
              )}
              <span className="flow-drop flow-rise" />
            </div>
          );
        })}
      </div>
      <div className="flow-v" />
      <div className="flow-foot">{foot}</div>
      {trailing}
    </div>
  );
}
