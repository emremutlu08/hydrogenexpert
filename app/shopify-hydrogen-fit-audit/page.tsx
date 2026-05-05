import { DecisionLandingPage } from "@/components/DecisionLandingPage";
import { requireDecisionPage } from "@/lib/decision-pages";
import { buildMetadata } from "@/lib/seo";

const page = requireDecisionPage("/shopify-hydrogen-fit-audit");

export const metadata = buildMetadata({
  title: page.metaTitle,
  description: page.metaDescription,
  path: page.path,
});

export default function ShopifyHydrogenFitAuditPage() {
  return <DecisionLandingPage page={page} />;
}
