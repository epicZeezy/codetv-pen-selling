/**
 * Canonical site URL for metadata, OG tags, and sitemaps.
 * Vercel sets VERCEL_URL / VERCEL_PROJECT_PRODUCTION_URL at build time.
 */
export function getSiteUrl(): string {
  if (process.env.GITHUB_PAGES === "true") {
    return "https://epiczeezy.github.io/codetv-pen-selling";
  }

  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }

  return "http://localhost:3000";
}
