import { quotes } from "@/content/quotes";

function QuoteItems() {
  return (
    <>
      {quotes.map((item, index) => (
        <span
          key={`${item.attribution}-${index}`}
          className="mx-8 inline-flex shrink-0 items-baseline gap-2 whitespace-nowrap"
        >
          <span className="italic">
            &ldquo;{item.quote}&rdquo;
          </span>
          <span className="font-mono text-sm opacity-60 md:text-base">
            — {item.attribution}
          </span>
        </span>
      ))}
    </>
  );
}

export function QuotesStrip() {
  return (
    <section
      aria-label="Research and student quotes"
      className="marquee overflow-hidden border-t border-inverse-bg bg-inverse-bg py-4 text-inverse-text"
    >
      <div className="marquee-track flex items-center">
        <QuoteItems />
        <QuoteItems />
      </div>
    </section>
  );
}
