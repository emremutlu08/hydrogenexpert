import { COMMERCIAL_VERIFICATION_ROUTES } from "../features/public-discovery/manifest";

export interface CommercialCopyViolation {
  route: string;
  phrase: string;
  reason: string;
}

export interface CommercialCopyRule {
  route: string;
  required: readonly string[];
}

const COMMERCIAL_REQUIRED_COPY_BY_ROUTE: Record<
  (typeof COMMERCIAL_VERIFICATION_ROUTES)[number],
  readonly string[]
> = {
  "/": [
      "$2K-$5K",
      "fixed-scope",
      "priced by project requirements",
      "not traffic",
      "not pageviews",
      "Hydrogen Starter Storefront",
      "Hydrogen Standard Storefront",
      "Hydrogen Growth Storefront",
      "Custom Hydrogen Scope",
      "Request Scope Review",
    ],
  "/shopify-hydrogen-packages": [
      "$2K-$5K",
      "fixed-scope",
      "priced by project requirements",
      "not traffic",
      "not pageviews",
      "Hydrogen Starter Storefront",
      "Hydrogen Standard Storefront",
      "Hydrogen Growth Storefront",
      "Custom Hydrogen Scope",
      "not an enterprise replatform",
      "visual builder",
      "Request Scope Review",
    ],
  "/shopify-hydrogen-cost": [
      "$2K-$5K",
      "fixed-scope",
      "priced by requirements",
      "not traffic",
      "not pageviews",
      "Hydrogen Starter Storefront",
      "Hydrogen Standard Storefront",
      "Hydrogen Growth Storefront",
      "Custom Hydrogen Scope",
      "not an enterprise replatform",
      "visual builder",
      "Request Scope Review",
    ],
  "/custom-shopify-hydrogen-storefront": [
      "$2K-$5K",
      "fixed-scope",
      "Hydrogen Starter Storefront",
      "Hydrogen Standard Storefront",
      "Hydrogen Growth Storefront",
      "Custom Hydrogen Scope",
      "not an enterprise replatform",
      "visual builder",
      "Request Scope Review",
    ],
  "/shopify-hydrogen-audit": [
      "fixed-scope",
      "Starter",
      "Standard",
      "Growth",
      "Custom",
      "Request Scope Review",
    ],
  "/shopify-hydrogen-agency-usa": [
      "$2K-$5K",
      "fixed-scope",
      "priced by project requirements",
      "Request Scope Review",
    ],
  "/hire-me": [
      "$2K-$5K",
      "fixed-scope",
      "growth-stage Shopify brands",
      "Request Scope Review",
      "Liquid",
      "no rebuild",
    ],
  "/contact": [
      "$2K-$5K",
      "fixed-scope",
      "Hydrogen Starter Storefront",
      "Hydrogen Standard Storefront",
      "Hydrogen Growth Storefront",
      "Custom Hydrogen Scope",
      "Request Scope Review",
    ],
  "/when-not-to-use-hydrogen": [
      "fixed-scope",
      "Liquid cleanup",
      "Request Scope Review",
      "View Build Packages",
    ],
};

export const COMMERCIAL_COPY_RULES: readonly CommercialCopyRule[] =
  COMMERCIAL_VERIFICATION_ROUTES.map((route) => ({
    route,
    required: COMMERCIAL_REQUIRED_COPY_BY_ROUTE[route],
  }));

export const FORBIDDEN_COMMERCIAL_PHRASES = [
  "$15K-$30K lean build",
  "$30K-$60K custom storefront",
  "$60K-$100K+ migration",
  "Start with a Fit & Risk Audit",
  "visitor limit",
  "pageview limit",
  "traffic limit",
  "US-based only",
] as const;

const HIGHER_PRICING_PATTERN = /\$(?:15K|30K|60K)(?:[-–]\$?(?:30K|60K|100K)\+?)?/gi;
const COMPLEX_CONTEXT_PATTERN = /\b(complex|custom|enterprise|larger|migration-heavy)\b/i;

export function normalizeHtmlForCommercialChecks(html: string) {
  return html
    .replace(/&amp;/g, "&")
    .replace(/&#x27;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function phraseExists(html: string, phrase: string) {
  return html.toLowerCase().includes(phrase.toLowerCase());
}

function getWindowAroundMatch(html: string, index: number, matchLength: number) {
  const start = Math.max(0, index - 160);
  const end = Math.min(html.length, index + matchLength + 160);

  return html.slice(start, end);
}

export function checkCommercialCopy(route: string, html: string) {
  const normalizedHtml = normalizeHtmlForCommercialChecks(html);
  const rule = COMMERCIAL_COPY_RULES.find((candidate) => candidate.route === route);
  const violations: CommercialCopyViolation[] = [];

  if (rule) {
    for (const phrase of rule.required) {
      if (!phraseExists(normalizedHtml, phrase)) {
        violations.push({
          route,
          phrase,
          reason: "required commercial copy is missing",
        });
      }
    }
  }

  for (const phrase of FORBIDDEN_COMMERCIAL_PHRASES) {
    if (phraseExists(normalizedHtml, phrase)) {
      violations.push({
        route,
        phrase,
        reason: "forbidden legacy pricing or positioning copy returned",
      });
    }
  }

  for (const match of normalizedHtml.matchAll(HIGHER_PRICING_PATTERN)) {
    const phrase = match[0];
    const matchIndex = match.index ?? 0;
    const nearbyText = getWindowAroundMatch(normalizedHtml, matchIndex, phrase.length);

    if (!COMPLEX_CONTEXT_PATTERN.test(nearbyText)) {
      violations.push({
        route,
        phrase,
        reason: "higher pricing appears outside a complex/custom/enterprise context",
      });
    }
  }

  return violations;
}
