/**
 * Resolve a file in `public/` against Vite's `base`, so the same code works at
 * the domain root (dev, Vercel) and under a subpath (GitHub Pages build with
 * `PAGES_BASE=/Microbiome-Kitchen/`).
 */
const BASE: string = import.meta.env?.BASE_URL ?? "/";

export function publicAsset(path: string): string {
  return BASE.replace(/\/$/, "") + "/" + path.replace(/^\//, "");
}
