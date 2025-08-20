export const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ?? (process.env.NODE_ENV === 'production' ? '/OAO-Portfolio' : '');

export const withBase = (p: string) => `${basePath}${p.startsWith('/') ? p : `/${p}`}`;
