import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  output: "export", // Enable static export for GitHub Pages
  distDir: "out", // Export files to 'out' folder
  images: { unoptimized: true }, // Disable image optimization for GitHub Pages
  trailingSlash: true, // Ensures proper routing on GitHub Pages
  basePath: "", // No extra repo name in the URL
  assetPrefix: "/", // Fix asset loading issues
};

export default withMDX(nextConfig);
