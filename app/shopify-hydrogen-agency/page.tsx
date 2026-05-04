import { ServiceLandingPage } from "@/components/ServiceLandingPage";
import { buildMetadata } from "@/lib/seo";
import { requireServicePackageByPagePath } from "@/lib/services";

const service = requireServicePackageByPagePath("/shopify-hydrogen-agency");

export const metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: service.pagePath,
});

export default function ShopifyHydrogenAgencyPage() {
  return <ServiceLandingPage service={service} />;
}
