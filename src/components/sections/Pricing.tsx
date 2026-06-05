"use client";

import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { copy } from "@/content/copy";
import { site } from "@/content/site";
import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, active: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;

    const duration = 800;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Number((target * eased).toFixed(2)));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [active, target]);

  return value;
}

export function Pricing() {
  const { pricing } = copy;
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const price = useCountUp(site.price, active);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const waitlistHref = `mailto:${site.waitlistEmail}?subject=${encodeURIComponent("Waitlist")}`;

  return (
    <section id="pricing" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <SectionLabel>{pricing.label}</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold text-text md:text-5xl">
            {pricing.headline}
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            {pricing.subheadline}
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div
            ref={ref}
            className="mx-auto mt-12 max-w-3xl border border-border bg-surface p-8 md:p-10"
          >
            <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-muted">
                  {pricing.tag}
                </p>
                <ul className="ink-dot mt-6 space-y-3 text-muted">
                  {pricing.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="text-center md:text-right">
                <p className="font-mono text-5xl font-medium text-text md:text-6xl">
                  ${price.toFixed(2)}
                </p>
                <Button
                  variant="primary"
                  href="/checkout"
                  className="btn-pulse-glow mt-6 w-full md:w-auto"
                >
                  {pricing.cta}
                </Button>
                <p className="mt-3 font-mono text-xs text-muted">
                  {pricing.waitlistNote} —{" "}
                  <a
                    href={waitlistHref}
                    className="text-accent underline underline-offset-4 hover:text-highlight"
                  >
                    {site.waitlistEmail}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
