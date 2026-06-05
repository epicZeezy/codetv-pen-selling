"use client";

import { BackgroundVideo } from "@/components/ui/BackgroundVideo";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { copy } from "@/content/copy";

type HeroProps = {
  backgroundVideoSrc: string;
};

export function Hero({ backgroundVideoSrc }: HeroProps) {
  const { hero } = copy;

  return (
    <section className="relative min-h-screen overflow-hidden">
      <BackgroundVideo
        src={backgroundVideoSrc}
        overlayClassName="bg-inverse-bg/50"
      />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-5 py-28 md:px-8 md:py-36">
        <div>
          <Reveal delay={0}>
            <SectionLabel className="text-inverse-text/80">
              {hero.label}
            </SectionLabel>
          </Reveal>
          <Reveal delay={0.15}>
            <h1 className="mt-4 max-w-xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-inverse-text md:text-6xl">
              {hero.headline}
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
      </div>
    </section>
  );
}
