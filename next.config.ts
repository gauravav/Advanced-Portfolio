import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Optional: Configure image optimization for static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
