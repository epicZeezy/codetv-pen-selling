import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGitHubPages ? "/codetv-pen-selling" : "",
  assetPrefix: isGitHubPages ? "/codetv-pen-selling/" : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
