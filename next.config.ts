import type { NextConfig } from "next";

// GitHub Pages serves this as a *project* page (username.github.io/repo-name), so every
// internal link and asset path needs to be prefixed with "/repo-name". When building inside
// GitHub Actions we derive that automatically from GITHUB_REPOSITORY; for local `npm run dev`
// or Firebase Hosting (which serves from the domain root) basePath stays empty.
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const basePath = isGithubActions && repoName ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  // Static export: GitHub Pages only serves static files, it can't run the Next.js server
  // that normal `next start` / Firebase Hosting use. `output: "export"` produces a plain
  // `out/` folder with an index.html (and one per route) instead of a Node server.
  output: "export",
  basePath,
  assetPrefix: basePath,
  trailingSlash: true,
  images: {
    // The built-in Image Optimization API needs a server, which GitHub Pages doesn't have.
    // Unoptimized images are still lazy-loaded and responsive via srcset — just not
    // resized/re-encoded on the fly.
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "firebasestorage.googleapis.com" },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;
