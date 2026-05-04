import { ServiceLandingPage } from "@/components/ServiceLandingPage";
import { buildMetadata } from "@/lib/seo";
import { requireServicePackageByPagePath } from "@/lib/services";

const service = requireServicePackageByPagePath("/custom-shopify-hydrogen-storefront");

export const metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: service.pagePath,
});

export default function CustomShopifyHydrogenStorefrontPage() {
  return <ServiceLandingPage service={service} />;
}
