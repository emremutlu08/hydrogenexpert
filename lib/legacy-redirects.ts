export const LEGACY_PERMANENT_REDIRECTS = new Map([
  ["/blog/shopify-hydrogen-v2-setup-guide", "/what-is-hydrogen"],
  ["/blog/hydrogen-worth-2-million-shopify-store", "/should-i-use-it"],
  ["/blog/hydrogen-json-ld-product-state", "/shopify-hydrogen-seo"],
  ["/blog/hydrogen-product-content-ssr", "/shopify-hydrogen-seo"],
  ["/blog/hydrogen-sitemap-robots-oxygen", "/shopify-hydrogen-seo"],
  ["/blog/hydrogen-checkout-handoff-risks", "/shopify-hydrogen-templates"],
  ["/blog/hydrogen-variant-urls-seo", "/shopify-hydrogen-seo"],
  ["/blog/shopify-hydrogen-performance-checklist", "/shopify-hydrogen-performance-optimization"],
  ["/blog/shopify-hydrogen-route-mapping", "/liquid-to-hydrogen-migration"],
  ["/blog/what-breaks-when-moving-from-liquid-to-hydrogen", "/liquid-to-hydrogen-migration"],
  ["/blog/shopify-apps-in-hydrogen-what-to-check", "/shopify-hydrogen-audit"],
  ["/blog/shopify-hydrogen-vs-liquid", "/shopify-hydrogen-vs-liquid"],
  ["/blog/shopify-storefront-mcp-explained", "/resources"],
  ["/blog/storefront-mcp-vs-shopify-dev-mcp", "/resources"],
  ["/blog/what-ucp-means-for-shopify-merchants", "/resources"],
  ["/blog/is-hydrogen-ready-for-ai-shopping-agents", "/shopify-hydrogen-seo"],
]);

export function normalizeRedirectPathname(pathname: string) {
  if (pathname !== "/" && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }

  return pathname;
}

export function getLegacyPermanentRedirect(pathname: string) {
  return LEGACY_PERMANENT_REDIRECTS.get(normalizeRedirectPathname(pathname)) ?? null;
}
