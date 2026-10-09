import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cms.kemsal.co.ke",
      },
      {
        protocol: "https",
        hostname: "www.kemsal.co.ke",
      },
    ],
  },
};

export default nextConfig;
