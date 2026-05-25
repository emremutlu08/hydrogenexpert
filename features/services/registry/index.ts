import { SERVICE_PACKAGE_BASES } from "./base";
import { SERVICE_PAGE_ENRICHMENTS } from "./enrichments";
import { SERVICE_OFFER_SNAPSHOTS } from "./offer-snapshots";
import { SERVICE_SOURCE_METADATA } from "./source-metadata";
import type { ServicePackage } from "./base";

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

export const SERVICE_PACKAGES: readonly ServicePackage[] = SERVICE_PACKAGE_BASES.map(
  (servicePackage) => ({
    ...servicePackage,
    offerSnapshot: SERVICE_OFFER_SNAPSHOTS[servicePackage.slug],
    ...SERVICE_PAGE_ENRICHMENTS[servicePackage.slug],
    ...SERVICE_SOURCE_METADATA[servicePackage.slug],
  }),
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
