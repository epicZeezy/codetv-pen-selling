"use client";

import { PenIcon } from "@/components/icons/PenIcon";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { copy } from "@/content/copy";
import { motion, useReducedMotion } from "framer-motion";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const { hero } = copy;

  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[1.2fr_0.8fr] md:gap-16 md:px-8">
        <div>
          <Reveal delay={0}>
            <SectionLabel>{hero.label}</SectionLabel>
          </Reveal>
          <Reveal delay={0.15}>
            <h1 className="mt-4 max-w-xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-text md:text-6xl">
              Your laptop isn&apos;t{" "}
              <span className="ink-underline">studying</span>. You are.
            </h1>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-6 max-w-lg text-lg text-muted md:text-xl">
              {hero.subheadline}
            </p>
          </Reveal>
          <Reveal delay={0.45}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button variant="primary" href="#problem">
                {hero.primaryCta}
              </Button>
              <Button variant="secondary" href="#pricing">
                {hero.secondaryCta}
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.6}>
            <p className="mt-6 font-mono text-xs text-muted">{hero.proof}</p>
          </Reveal>
        </div>

        <Reveal delay={0.3} direction="up">
          <motion.div
            initial={prefersReducedMotion ? false : { rotate: 2, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto max-w-xs rounded-sm border border-border bg-surface p-8 ruled-lines md:max-w-sm"
          >
            <div className="absolute inset-y-6 left-6 w-0.5 bg-highlight/60" />
            <div className="relative pl-6">
              <PenIcon className="mx-auto max-h-64 text-text" />
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
