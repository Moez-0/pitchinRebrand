import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
    domains: [
      'cdn.prod.website-files.com',
      'images.unsplash.com',
      // Add any other domains you're loading images from
    ],
  },
};

export default nextConfig;
