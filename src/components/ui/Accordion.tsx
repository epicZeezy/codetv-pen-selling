"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "@/lib/cn";

type FAQItem = {
  question: string;
  answer: string;
};

type AccordionProps = {
  items: readonly FAQItem[];
  className?: string;
};

export function Accordion({ items, className }: AccordionProps) {
  return (
    <AccordionPrimitive.Root
      type="single"
      collapsible
      className={cn("space-y-3", className)}
    >
      {items.map((item, index) => (
        <AccordionPrimitive.Item
          key={item.question}
          value={`item-${index}`}
          className="overflow-hidden border border-border bg-surface"
        >
          <AccordionPrimitive.Header>
            <AccordionPrimitive.Trigger className="group flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-display text-base font-semibold text-text transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background md:text-lg">
              {item.question}
              <span
                aria-hidden
                className="font-mono text-muted transition-transform duration-200 group-data-[state=open]:rotate-45"
              >
                +
              </span>
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            <div className="border-t border-border px-5 py-4 text-muted">
              {item.answer}
            </div>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
}
