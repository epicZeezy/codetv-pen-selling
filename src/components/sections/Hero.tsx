"use client";

import { PenIcon } from "@/components/icons/PenIcon";
import { BackgroundVideo } from "@/components/ui/BackgroundVideo";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { copy } from "@/content/copy";
import { motion, useReducedMotion } from "framer-motion";

type HeroProps = {
  backgroundVideoSrc: string;
};

export function Hero({ backgroundVideoSrc }: HeroProps) {
  const prefersReducedMotion = useReducedMotion();
  const { hero } = copy;

  return (
    <section className="relative min-h-screen overflow-hidden">
      <BackgroundVideo
        src={backgroundVideoSrc}
        overlayClassName="bg-inverse-bg/50"
      />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-5 py-28 md:px-8 md:py-36">
        <div className="grid items-center gap-12 md:grid-cols-[1.2fr_0.8fr] md:gap-16">
          <div>
            <Reveal delay={0}>
              <SectionLabel className="text-inverse-text/80">
                {hero.label}
              </SectionLabel>
            </Reveal>
            <Reveal delay={0.15}>
              <h1 className="mt-4 max-w-xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-inverse-text md:text-6xl">
                Your laptop isn&apos;t{" "}
                <span className="ink-underline text-highlight">studying</span>.
                You are.
              </h1>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="mt-6 max-w-lg text-lg text-inverse-text/85 md:text-xl">
                {hero.subheadline}
              </p>
            </Reveal>
            <Reveal delay={0.45}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button variant="primary" href="#pricing">
                  {hero.primaryCta}
                </Button>
                <Button
                  variant="secondary"
                  href="#problem"
                  className="border-inverse-text/30 text-inverse-text hover:border-inverse-text hover:bg-inverse-text/10"
                >
                  {hero.secondaryCta}
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.6}>
              <p className="mt-6 font-mono text-xs text-inverse-text/70">
                {hero.proof}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.3} direction="up">
            <motion.div
              initial={prefersReducedMotion ? false : { rotate: 2, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mx-auto max-w-xs rounded-sm border border-inverse-text/20 bg-inverse-bg/40 p-8 backdrop-blur-sm ruled-lines md:max-w-sm"
            >
              <div className="absolute inset-y-6 left-6 w-0.5 bg-highlight/60" />
              <div className="relative pl-6">
                <PenIcon className="mx-auto max-h-64 text-inverse-text" />
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
