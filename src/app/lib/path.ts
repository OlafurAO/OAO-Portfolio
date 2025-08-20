import type { ImageLoader } from 'next/image';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const assetPrefix = process.env.NEXT_PUBLIC_ASSET_PREFIX ?? '';

const join = (...parts: string[]) =>
  parts
    .map((p) => p.replace(/(^\/+|\/+$)/g, ''))
    .filter(Boolean)
    .join('/');

export const ghPagesLoader: ImageLoader = ({ src }) => {
  const cleanSrc = src.startsWith('/') ? src.slice(1) : src;
  const url = '/' + join(basePath, assetPrefix, cleanSrc);
  return url;
};
