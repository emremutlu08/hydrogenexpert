const DEFAULT_OG_IMAGE = "/og-default.svg";

export const ROUTE_OG_IMAGES = {
  "/shopify-hydrogen-examples": "/og/traffic-foundation/examples.svg",
  "/shopify-hydrogen-templates": "/og/traffic-foundation/templates.svg",
  "/shopify-hydrogen-issues": "/og/traffic-foundation/issues.svg",
  "/shopify-hydrogen-vs-liquid": "/og/traffic-foundation/vs-liquid.svg",
  "/liquid-to-hydrogen-migration": "/og/traffic-foundation/migration.svg",
  "/resources": "/og/traffic-foundation/examples.svg",
} as const;

export function getOgImageForRoute(path: string) {
  return ROUTE_OG_IMAGES[path as keyof typeof ROUTE_OG_IMAGES] ?? DEFAULT_OG_IMAGE;
}
