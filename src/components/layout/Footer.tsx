import { BrandLogo } from "@/components/layout/BrandLogo";
import { site } from "@/content/site";
import { copy } from "@/content/copy";

export function Footer() {
  return (
    <footer className="bg-inverse-bg text-inverse-text">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-3 md:px-8">
        <div>
          <BrandLogo onDark imageClassName="h-9 md:h-10" />
          <p className="mt-3 max-w-xs text-sm text-inverse-text/70">
            {site.mission}
          </p>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-inverse-text/50">
            Navigate
          </p>
          <ul className="mt-4 space-y-2">
            {site.navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-inverse-text/80 transition-colors hover:text-highlight hover:underline hover:decoration-highlight hover:underline-offset-4"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:text-right">
          <p className="font-mono text-xs text-inverse-text/50">
            © {new Date().getFullYear()} {site.brandName}
          </p>
          <p className="mt-2 text-sm text-inverse-text/70">
            {copy.footer.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}
