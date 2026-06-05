"use client";

import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-300",
        scrolled
          ? "bg-inverse-bg text-inverse-text shadow-sm"
          : "bg-transparent text-text",
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a
          href="#"
          className="font-display text-xl font-bold tracking-tight"
          onClick={() => setMobileOpen(false)}
        >
          {site.brandName}
        </a>

        <ul className="hidden items-center gap-6 lg:flex">
          {site.navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  "font-mono text-xs uppercase tracking-wider transition-colors hover:text-highlight",
                  scrolled ? "text-inverse-text/80" : "text-muted",
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button variant="ghost" href="#pricing">
            Get the pen
          </Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span
            className={cn(
              "block h-0.5 w-6 bg-current transition-transform",
              mobileOpen && "translate-y-2 rotate-45",
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-6 bg-current transition-opacity",
              mobileOpen && "opacity-0",
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-6 bg-current transition-transform",
              mobileOpen && "-translate-y-2 -rotate-45",
            )}
          />
        </button>
      </nav>

      <div
        className={cn(
          "fixed inset-0 top-[72px] z-30 bg-inverse-bg px-5 py-8 transition-transform duration-300 lg:hidden",
          mobileOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <ul className="flex flex-col gap-6">
          {site.navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-display text-2xl text-inverse-text"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-4">
            <a
              href="#pricing"
              className="inline-flex w-full items-center justify-center bg-highlight px-6 py-3 font-mono text-sm tracking-wide text-inverse-text transition-colors hover:bg-highlight/90"
              onClick={() => setMobileOpen(false)}
            >
              Get the pen
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
