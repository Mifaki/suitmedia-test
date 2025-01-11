import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.suitdev.com",
      }
    ],
  },
};

export default nextConfig;
