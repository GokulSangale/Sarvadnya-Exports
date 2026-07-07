import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configure for static export and GitHub Pages hosting
  // - output: 'export' makes `next export` generate a fully static site
  // - trailingSlash true causes each page to be emitted as /page/index.html
  // - basePath/assetPrefix point to the repository name so assets resolve when
  //   the site is hosted at https://<user>.github.io/<repo>
  output: "export",
  trailingSlash: true,
  // basePath/assetPrefix only used when deploying to GitHub Pages at
  // https://<user>.github.io/<repo>. For custom domains (or repo-root Pages)
  // leave these unset. Control via NEXT_PUBLIC_BASE_PATH env var if needed.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || undefined,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || undefined,
  images: {
    // Disable Next.js image optimization for static export
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "firebasestorage.googleapis.com" },
    ],
    formats: ["image/avif", "image/webp"],
  },
  reactStrictMode: true,
};

export default nextConfig;
