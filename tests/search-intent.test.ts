import { readFileSync } from "node:fs";
import { join } from "node:path";

import { describe, expect, it } from "vitest";

import { getServiceCta } from "../components/service-landing/ServiceLandingUtils";
import {
  COMMERCIAL_INTENT_OWNERS,
  COMMERCIAL_INTENT_PATHS,
  getCommercialIntentOwner,
  isCommercialIntentPath,
} from "../features/search-intent";
import { SERVICE_PACKAGES } from "../features/services/registry";

const SERVICE_INTENT_PATHS = COMMERCIAL_INTENT_PATHS.filter(
  (path) => path !== "/shopify-hydrogen-examples",
);

describe("commercial intent ownership", () => {
  it("assigns exactly one owner to each approved commercial intent", () => {
    expect(COMMERCIAL_INTENT_PATHS).toEqual([
      "/shopify-hydrogen-developer",
      "/shopify-hydrogen-expert",
      "/shopify-hydrogen-experts",
      "/shopify-hydrogen-agency",
      "/headless-shopify-agency",
      "/shopify-hydrogen-cost",
      "/shopify-hydrogen-examples",
    ]);
    expect(new Set(COMMERCIAL_INTENT_PATHS).size).toBe(COMMERCIAL_INTENT_PATHS.length);
    expect(isCommercialIntentPath("/resources")).toBe(false);
    expect(isCommercialIntentPath("/articles")).toBe(false);
  });

  it("keeps titles, descriptions, headings, anchors, and CTA flows distinct", () => {
    const owners = COMMERCIAL_INTENT_PATHS.map((path) => getCommercialIntentOwner(path));

    for (const owner of owners) {
      expect(owner.metaTitle.length).toBeLessThanOrEqual(60);
      expect(owner.metaDescription.length).toBeLessThanOrEqual(160);
      expect(owner.metaTitle.toLowerCase()).toContain(owner.primaryQuery);
      expect(owner.heroTitle.toLowerCase()).toContain(owner.primaryQuery);
      expect(owner.linkLabel).toBeTruthy();
      expect(owner.decisionFocus).toBeTruthy();
      expect(owner.deliverableFocus).toBeTruthy();
      expect(owner.proofFocus).toBeTruthy();
      expect(owner.cta.primaryLabel).toBeTruthy();
    }

    for (const values of [
      owners.map((owner) => owner.metaTitle),
      owners.map((owner) => owner.metaDescription),
      owners.map((owner) => owner.heroTitle),
      owners.map((owner) => owner.linkLabel),
      owners.map((owner) => owner.cta.headline),
      owners.map((owner) => owner.cta.primaryLabel),
    ]) {
      expect(new Set(values).size).toBe(values.length);
    }
  });

  it("binds service metadata, H1 copy, CTA copy, and cross-intent anchors to the manifest", () => {
    for (const path of SERVICE_INTENT_PATHS) {
      const owner = COMMERCIAL_INTENT_OWNERS[path];
      const service = SERVICE_PACKAGES.find((item) => item.pagePath === path);

      expect(service).toBeDefined();
      expect(service?.title).toBe(owner.offerTitle);
      expect(service?.metaTitle).toBe(owner.metaTitle);
      expect(service?.metaDescription).toBe(owner.metaDescription);
      expect(service?.heroTitle).toBe(owner.heroTitle);
      expect(service?.summary).toContain(owner.heroDescription);
      expect(service?.commercialIntent).toContain(owner.heroBody);
      expect(service ? getServiceCta(service) : null).toMatchObject(owner.cta);
    }

    for (const service of SERVICE_PACKAGES) {
      for (const link of [...service.relatedLinks, ...service.contextualLinks]) {
        if (!isCommercialIntentPath(link.href)) continue;
        expect(link.label).toBe(COMMERCIAL_INTENT_OWNERS[link.href].linkLabel);
      }
    }
  });

  it("binds the examples metadata, H1, intent block, and CTA to the same manifest", () => {
    const source = readFileSync(
      join(process.cwd(), "app/shopify-hydrogen-examples/page.tsx"),
      "utf8",
    );

    expect(source).toContain(
      'const examplesIntent = COMMERCIAL_INTENT_OWNERS["/shopify-hydrogen-examples"]',
    );
    expect(source).toContain("title: examplesIntent.metaTitle");
    expect(source).toContain("title={examplesIntent.heroTitle}");
    expect(source).toContain("<IntentOwnershipSection intentOwner={examplesIntent} />");
    expect(source).toContain("headline={examplesIntent.cta.headline}");
  });
});
