import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  // This enables a standalone build optimized for Docker deployment
};

export default nextConfig;
