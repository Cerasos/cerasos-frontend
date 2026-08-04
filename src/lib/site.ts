/**
 * Absolute origin used for metadataBase, canonical URLs, OG images and the
 * sitemap. Set NEXT_PUBLIC_SITE_URL in the deployment environment.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://cerasos.com.br"
).replace(/\/$/, "");
