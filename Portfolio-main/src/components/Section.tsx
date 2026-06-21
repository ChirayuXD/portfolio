"use client";

import { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";

type SectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 py-20 md:py-28">
      <Reveal>
        <div className="mb-12 flex items-end justify-between gap-6 md:mb-16">
          <div>
            <p className="spec-label mb-3 text-red">
              {subtitle ?? "00"} <span aria-hidden="true" className="mx-2 inline-block h-px w-4 translate-y-[-0.2em] bg-current" /> {id}
            </p>
            <h2 className="section-title text-3xl text-foreground md:text-4xl">
              {title}
            </h2>
          </div>
          <div className="hidden h-px flex-1 bg-border md:block" />
        </div>
      </Reveal>
      {children}
    </section>
  );
}

