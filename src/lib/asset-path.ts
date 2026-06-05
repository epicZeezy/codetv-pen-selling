/**
 * Prefix static asset paths when the site is built for GitHub Pages (basePath).
 */
export function assetPath(path: string): string {
  const base =
    process.env.GITHUB_PAGES === "true" ? "/codetv-pen-selling" : "";
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}
