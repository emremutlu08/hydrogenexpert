import { ServiceLandingPage } from "@/components/ServiceLandingPage";
import { buildMetadata } from "@/lib/seo";
import { requireServicePackageByPagePath } from "@/lib/services";

const service = requireServicePackageByPagePath("/liquid-to-hydrogen-migration");

export const metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: service.pagePath,
});

export default function LiquidToHydrogenMigrationPage() {
  return <ServiceLandingPage service={service} />;
}
