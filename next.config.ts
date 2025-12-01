import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Explicitly set the workspace root to avoid warnings
  experimental: {
    turbopack: {
      root: process.cwd(),
    },
  },
};

export default nextConfig;
