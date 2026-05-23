export interface CommercialCopyViolation {
  route: string;
  phrase: string;
  reason: string;
}

export interface CommercialCopyRule {
  route: string;
  required: readonly string[];
}

export const COMMERCIAL_COPY_RULES: readonly CommercialCopyRule[] = [
  {
    route: "/",
    required: [
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
  },
  {
    route: "/shopify-hydrogen-packages",
    required: [
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
  },
  {
    route: "/shopify-hydrogen-cost",
    required: [
      "$2K-$5K",
      "fixed-scope",
      "priced by requirements",
      "not traffic",
      "not pageviews",
      "Hydrogen Starter Storefront",
      "Hydrogen Standard Storefront",
      "Hydrogen Growth Storefront",
      "Custom Hydrogen Scope",
      "Request Scope Review",
    ],
  },
  {
    route: "/custom-shopify-hydrogen-storefront",
    required: [
      "$2K-$5K",
      "fixed-scope",
      "Hydrogen Starter Storefront",
      "Hydrogen Standard Storefront",
      "Hydrogen Growth Storefront",
      "Custom Hydrogen Scope",
      "Request Scope Review",
    ],
  },
  {
    route: "/shopify-hydrogen-audit",
    required: [
      "fixed-scope",
      "Starter",
      "Standard",
      "Growth",
      "Custom",
      "Request Scope Review",
    ],
  },
  {
    route: "/shopify-hydrogen-agency-usa",
    required: [
      "$2K-$5K",
      "fixed-scope",
      "priced by project requirements",
      "Request Scope Review",
    ],
  },
  {
    route: "/contact",
    required: [
      "$2K-$5K",
      "fixed-scope",
      "Hydrogen Starter Storefront",
      "Hydrogen Standard Storefront",
      "Hydrogen Growth Storefront",
      "Custom Hydrogen Scope",
      "Request Scope Review",
    ],
  },
  {
    route: "/when-not-to-use-hydrogen",
    required: [
      "fixed-scope",
      "Liquid cleanup",
      "Request Scope Review",
      "View Build Packages",
    ],
  },
] as const;

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
