"use client";

import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { copy } from "@/content/copy";

export function FAQ() {
  const { faq } = copy;

  return (
    <section id="faq" className="border-t border-border bg-surface/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <SectionLabel>{faq.label}</SectionLabel>
          <h2 className="mt-4 font-display text-3xl font-bold text-text md:text-5xl">
            {faq.headline}
          </h2>
          <p className="mt-4 text-lg text-muted">{faq.subheadline}</p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mx-auto mt-12 max-w-2xl">
            <Accordion items={faq.items} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
