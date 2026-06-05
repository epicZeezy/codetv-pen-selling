"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { copy } from "@/content/copy";
import { cn } from "@/lib/cn";

export function Solution() {
  const { solution } = copy;

  return (
    <section id="solution" className="border-t border-border bg-surface/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <SectionLabel>{solution.label}</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold text-text md:text-5xl">
            {solution.headline}
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            {solution.subheadline}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-8">
            {solution.steps.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.1}>
                <div className="flex gap-5 border-l-2 border-border pl-5 transition-colors hover:border-accent">
                  <span className="font-mono text-sm text-muted">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-text">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-muted">{step.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal direction="right" delay={0.15}>
            <div className="sticky top-28 border border-border bg-background p-6 md:p-8">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-highlight">
                    Digital
                  </p>
                  <ul className="mt-4 space-y-3">
                    {solution.comparison.digital.map((item) => (
                      <li
                        key={item}
                        className="group flex gap-2 text-sm text-muted transition-colors hover:text-text"
                      >
                        <span className="font-mono text-highlight">×</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-accent">
                    Analog
                  </p>
                  <ul className="mt-4 space-y-3">
                    {solution.comparison.analog.map((item) => (
                      <li
                        key={item}
                        className={cn(
                          "group flex gap-2 text-sm text-muted transition-colors hover:text-text",
                        )}
                      >
                        <span className="font-mono text-accent">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
