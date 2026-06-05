"use client";

import Link from "next/link";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { useEffect, useState } from "react";

export function CheckoutHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-colors duration-300",
        scrolled
          ? "border-border bg-inverse-bg text-inverse-text shadow-sm"
          : "border-transparent bg-background text-text",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <Link
          href="/"
          className="font-display text-xl font-bold tracking-tight"
        >
          {site.brandName}
        </Link>
        <Link
          href="/"
          className="font-mono text-xs uppercase tracking-wider transition-colors hover:text-highlight"
        >
          ← Back
        </Link>
      </div>
    </header>
  );
}
