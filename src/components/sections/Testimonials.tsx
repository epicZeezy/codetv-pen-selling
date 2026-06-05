"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { copy } from "@/content/copy";
import { testimonials } from "@/content/testimonials";

export function Testimonials() {
  const { testimonials: sectionCopy } = copy;

  return (
    <section
      id="testimonials"
      className="border-t border-border bg-surface/50 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <SectionLabel>{sectionCopy.label}</SectionLabel>
          <h2 className="mt-4 font-display text-3xl font-bold text-text md:text-5xl">
            {sectionCopy.headline}
          </h2>
          <p className="mt-4 text-lg text-muted">{sectionCopy.subheadline}</p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-12 flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible">
            {testimonials.map((item, index) => (
              <article
                key={`${item.attribution}-${index}`}
                className="min-w-[280px] flex-1 border border-border bg-background p-6 transition-shadow hover:-translate-y-1 hover:shadow-lg md:min-w-0"
              >
                <p className="font-display text-lg leading-relaxed text-text">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-border pt-4">
                  <p className="font-display font-semibold text-text">
                    {item.attribution}
                  </p>
                  <a
                    href={item.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block font-mono text-xs text-muted underline-offset-4 hover:underline"
                  >
                    {item.source}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
