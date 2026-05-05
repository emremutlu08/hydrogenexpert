import { DecisionLandingPage } from "@/components/DecisionLandingPage";
import { requireDecisionPage } from "@/lib/decision-pages";
import { buildMetadata } from "@/lib/seo";

const page = requireDecisionPage("/shopify-hydrogen-for-luxury-jewelry");

export const metadata = buildMetadata({
  title: page.metaTitle,
  description: page.metaDescription,
  path: page.path,
});

export default function ShopifyHydrogenForLuxuryJewelryPage() {
  return <DecisionLandingPage page={page} />;
}
