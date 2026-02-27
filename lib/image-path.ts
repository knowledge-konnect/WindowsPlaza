/**
 * Returns the correct image path for the current environment.
 * In production (static export for GitHub Pages) the basePath must be
 * prepended manually because next/image with `unoptimized: true` does not
 * add it automatically in a static export.
 */
export function getImagePath(src: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ""
  return `${base}${src}`
}
