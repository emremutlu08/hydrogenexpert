import { DecisionLandingPage } from "@/components/DecisionLandingPage";
import { requireDecisionPage } from "@/lib/decision-pages";
import { getOgImageForRoute } from "@/lib/og-images";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

const page = requireDecisionPage("/shopify-hydrogen-vs-liquid");

export const metadata = buildMetadata({
  title: page.metaTitle,
  description: page.metaDescription,
  path: page.path,
  ogImage: absoluteUrl(getOgImageForRoute(page.path)),
});

export default function ShopifyHydrogenVsLiquidPage() {
  return <DecisionLandingPage page={page} />;
}
