import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   output: 'export', // This enables static HTML export
    images: {
      unoptimized: true, // Required for export if using <Image />
    },
    basePath: '/OAO-Portfolio', // Important!
    assetPrefix: '/OAO-Portfolio/',
};

export default nextConfig;
