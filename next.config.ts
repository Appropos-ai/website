import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for Cloudflare Pages deployment
  output: 'export',
  
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  
  // Image optimization settings - unoptimized for static export
  images: {
    unoptimized: true,
  },
  
  // Trailing slash for better static hosting compatibility
  trailingSlash: true,
};

export default nextConfig;
