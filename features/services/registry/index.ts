import { SERVICE_PACKAGE_BASES } from "./base";
import { SERVICE_PAGE_ENRICHMENTS } from "./enrichments";
import { SERVICE_OFFER_SNAPSHOTS } from "./offer-snapshots";
import { SERVICE_SOURCE_METADATA } from "./source-metadata";
import type { ServicePackage } from "./base";
import {
  isRetiredCommercialIntentPath,
  normalizeCommercialLinks,
} from "../../search-intent";

export type {
  ServiceOfferSnapshot,
  ServicePackage,
  ServicePackageBase,
  ServicePageEnrichment,
} from "./base";
export { SECONDARY_SERVICE, SERVICE_PACKAGE_BASES } from "./base";
export { SERVICE_PAGE_ENRICHMENTS } from "./enrichments";
export { SERVICE_OFFER_SNAPSHOTS } from "./offer-snapshots";
export { SERVICE_SOURCE_METADATA } from "./source-metadata";

function normalizeServiceLinks(
  links: ServicePackage["relatedLinks"],
  servicePath: string,
) {
  return normalizeCommercialLinks(links).filter((link) => link.href !== servicePath);
}

export const SERVICE_PACKAGES: readonly ServicePackage[] = SERVICE_PACKAGE_BASES.filter(
  (servicePackage) => !isRetiredCommercialIntentPath(servicePackage.pagePath),
).map(
  (servicePackage) => {
    const merged = {
      ...servicePackage,
      offerSnapshot: SERVICE_OFFER_SNAPSHOTS[servicePackage.slug],
      ...SERVICE_PAGE_ENRICHMENTS[servicePackage.slug],
      ...SERVICE_SOURCE_METADATA[servicePackage.slug],
    } satisfies ServicePackage;

    return {
      ...merged,
      relatedLinks: normalizeServiceLinks(merged.relatedLinks, merged.pagePath),
      contextualLinks: normalizeServiceLinks(merged.contextualLinks, merged.pagePath),
    };
  },
);

export function getServicePackageByPagePath(path: string) {
  return SERVICE_PACKAGES.find((servicePackage) => servicePackage.pagePath === path) ?? null;
}

export function requireServicePackageByPagePath(path: string) {
  const servicePackage = getServicePackageByPagePath(path);

  if (!servicePackage) {
    throw new Error(`Missing service package for ${path}.`);
  }

  return servicePackage;
}

export function getServicePackageBySlug(slug: ServicePackage["slug"]) {
  return SERVICE_PACKAGES.find((servicePackage) => servicePackage.slug === slug) ?? null;
}
