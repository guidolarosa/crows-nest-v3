import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{
      hostname: 'images.prismic.io'
    }]
  }
};

export default nextConfig;
