import { ServiceLandingPage } from "@/components/ServiceLandingPage";
import { buildMetadata } from "@/lib/seo";
import { requireServicePackageByPagePath } from "@/features/services/registry";

const service = requireServicePackageByPagePath("/shopify-hydrogen-developer");

export const metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: service.pagePath,
});

export default function ShopifyHydrogenDeveloperPage() {
  return <ServiceLandingPage service={service} />;
}
