"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { copy } from "@/content/copy";

export function Science() {
  const { science } = copy;

  return (
    <section id="science" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <SectionLabel>{science.label}</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold text-text md:text-5xl">
            {science.headline}
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            {science.subheadline}
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <blockquote className="mx-auto mt-12 max-w-3xl border-l-4 border-accent pl-6 md:pl-8">
            <p className="font-display text-2xl font-semibold leading-snug text-text md:text-3xl">
              &ldquo;{science.pullQuote}&rdquo;
            </p>
            <footer className="mt-4 font-mono text-xs text-muted">
              — {science.primaryStudy.authors} ({science.primaryStudy.year})
            </footer>
          </blockquote>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <Reveal delay={0.1}>
            <article className="border border-border bg-surface p-6 md:col-span-1">
              <p className="font-mono text-xs uppercase tracking-wider text-accent">
                Primary study
              </p>
              <h3 className="mt-3 font-display text-lg font-semibold text-text">
                {science.primaryStudy.title}
              </h3>
              <p className="mt-2 text-sm text-muted">
                {science.primaryStudy.authors} ({science.primaryStudy.year}) —{" "}
                <em>{science.primaryStudy.journal}</em>
              </p>
              <p className="mt-4 text-sm text-muted">
                {science.primaryStudy.summary}
              </p>
              <a
                href={science.primaryStudy.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block font-mono text-xs text-accent underline underline-offset-4 hover:text-highlight"
              >
                Read the paper →
              </a>
            </article>
          </Reveal>

          {science.supportingStudies.map((study, index) => (
            <Reveal key={study.authors} delay={0.2 + index * 0.1}>
              <article className="border border-border bg-surface p-6">
                <p className="font-mono text-xs uppercase tracking-wider text-muted">
                  Supporting research
                </p>
                <h3 className="mt-3 font-display text-base font-semibold text-text">
                  {study.authors} ({study.year})
                </h3>
                <p className="mt-4 text-sm text-muted">{study.summary}</p>
                <a
                  href={study.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block font-mono text-xs text-accent underline underline-offset-4 hover:text-highlight"
                >
                  Read the paper →
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-10 text-center font-mono text-xs text-muted">
            {science.disclaimer}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
