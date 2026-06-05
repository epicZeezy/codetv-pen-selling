"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { copy } from "@/content/copy";
import { cn } from "@/lib/cn";

export function Problem() {
  const { problem } = copy;

  return (
    <section id="problem" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-2xl md:margin-line">
          <Reveal>
            <SectionLabel>{problem.label}</SectionLabel>
            <h2 className="mt-4 font-display text-3xl font-bold text-text md:text-5xl">
              {problem.headline}
            </h2>
            <p className="mt-4 text-lg text-muted">{problem.subheadline}</p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {problem.stats.map((stat, index) => (
            <Reveal key={stat.value} delay={index * 0.1}>
              <article
                className={cn(
                  "group border border-border bg-surface p-6 transition-shadow hover:shadow-md",
                  index === 2 && "md:border-highlight/40",
                )}
              >
                <p className="font-mono text-3xl font-medium text-text md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 font-display text-lg font-semibold text-text">
                  {stat.label}
                </p>
                <p className="mt-3 font-mono text-xs text-muted">
                  {stat.source}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-12 max-w-2xl text-center text-muted md:text-lg">
            {problem.body}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
