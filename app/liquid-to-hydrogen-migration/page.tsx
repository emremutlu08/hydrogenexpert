import { ServiceLandingPage } from "@/components/ServiceLandingPage";
import { getOgImageForRoute } from "@/lib/og-images";
import { buildMetadata } from "@/lib/seo";
import { requireServicePackageByPagePath } from "@/lib/services";
import { absoluteUrl } from "@/lib/site";

const service = requireServicePackageByPagePath("/liquid-to-hydrogen-migration");

export const metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: service.pagePath,
  ogImage: absoluteUrl(getOgImageForRoute(service.pagePath)),
});

export default function LiquidToHydrogenMigrationPage() {
  return <ServiceLandingPage service={service} />;
}
