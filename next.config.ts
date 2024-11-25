import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    reactStrictMode: true,
    images: {
      domains: ['via.placeholder.com'], // Add the external image domain here
    },
  
};

export default nextConfig;
