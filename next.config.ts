import type { NextConfig } from 'next';
const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  ...(isProd && {
    basePath: '/OAO-Portfolio',
    assetPrefix: '/OAO-Portfolio/',
  })
};

export default nextConfig;
