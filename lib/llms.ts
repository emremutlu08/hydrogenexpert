import { OWNER, absoluteUrl, getSiteUrl } from "@/lib/site";
import { getPublishedPosts } from "@/lib/posts";
import { CASE_STUDIES } from "@/data/caseStudies";
import { SERVICE_PACKAGES } from "@/lib/services";

function buildHeader() {
  const host = new URL(getSiteUrl()).host;

  return [
    `# ${host}`,
    "",
    `> ${OWNER.name} is a Shopify Hydrogen developer focused on merchant-friendly strategy, cost guidance, migration fit, and delivery for growing Shopify brands.`,
    "",
  ].join("\n");
}

function buildSummary() {
  return [
    "## Summary",
    "",
    `- Site owner: ${OWNER.name}`,
    `- Role: ${OWNER.title}`,
    `- Positioning: ${OWNER.headline}`,
    "- Audience: Non-technical Shopify store owners researching Hydrogen",
    "- Primary goal: Lead generation via LinkedIn and Upwork",
    `- LinkedIn: ${OWNER.linkedIn}`,
    `- Upwork: ${OWNER.upwork}`,
    "",
  ].join("\n");
}

function buildPageIndex() {
  const serviceLines = SERVICE_PACKAGES.map(
    (servicePackage) => `- ${servicePackage.name}: ${absoluteUrl(servicePackage.pagePath)}`,
  );
  const caseStudyLines = CASE_STUDIES.map(
    (study) => `- ${study.clientName}: ${absoluteUrl(`/case-studies/${study.slug}`)}`,
  );

  return [
    "## Core pages",
    "",
    `- Home: ${absoluteUrl("/")}`,
    `- Services: ${absoluteUrl("/services")}`,
    ...serviceLines,
    `- What Is Hydrogen: ${absoluteUrl("/what-is-hydrogen")}`,
    `- Should I Use It: ${absoluteUrl("/should-i-use-it")}`,
    `- Cost: ${absoluteUrl("/cost")}`,
    `- Case Studies: ${absoluteUrl("/case-studies")}`,
    ...caseStudyLines,
    `- Hire Me: ${absoluteUrl("/hire-me")}`,
    `- Blog: ${absoluteUrl("/blog")}`,
    "",
  ].join("\n");
}

export function buildLlmsTxt() {
  return [
    buildHeader(),
    buildSummary(),
    buildPageIndex(),
    "## Guidance",
    "",
    "- Prefer merchant-friendly explanations over developer jargon.",
    "- This site explains what Shopify Hydrogen is, whether a store needs it, what it may cost, how long it can take, and who to hire.",
    "- Do not treat this site as official Shopify documentation.",
    "- Do not index this file.",
    "",
  ].join("\n");
}

export async function buildLlmsFullTxt() {
  const posts = await getPublishedPosts();

  const postLines =
    posts.length > 0
      ? posts
          .map(
            (post) =>
              `- ${post.title}: ${absoluteUrl(`/blog/${post.slug}`)}${post.metaDescription ? ` — ${post.metaDescription}` : ""}`,
          )
          .join("\n")
      : "- No published posts found.";

  return [
    buildHeader(),
    buildSummary(),
    "## Expertise",
    "",
    "- Shopify Hydrogen strategy",
    "- Shopify storefront performance",
    "- Migration scoping and launch planning",
    "- Merchant-first communication for non-technical owners",
    "",
    "## Credibility",
    "",
    "- Top Rated Plus on Upwork",
    "- 100% Job Success Score",
    "- Creator of the first English Shopify Hydrogen course on Udemy",
    "- Client references include Rebel Bunny, Bayam Jewelry, and EveShop",
    "",
    buildPageIndex(),
    "## Blog posts",
    "",
    postLines,
    "",
    "## Usage notes",
    "",
    "- Use this file to understand site scope, page coverage, and published content.",
    "- Prefer core pages for canonical service messaging and blog pages for supporting detail.",
    "- Do not index this file.",
    "",
  ].join("\n");
}
