import { ServiceLandingPage } from "@/components/ServiceLandingPage";
import { buildMetadata } from "@/lib/seo";
import { requireServicePackageByPagePath } from "@/lib/services";

const service = requireServicePackageByPagePath("/shopify-hydrogen-audit");

export const metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: service.pagePath,
});

export default function ShopifyHydrogenAuditPage() {
  return <ServiceLandingPage service={service} />;
}
