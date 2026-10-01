import { describe, expect, it } from "vitest";

import { getAllContentRelations, getRelatedLinksForPath } from "../features/content-relations";
import { HIRING_INTENT_OWNER_PATH, RETIRED_COMMERCIAL_INTENT_PATHS } from "../features/search-intent";

describe("content relations", () => {
  it("places the developer-versus-agency guide in the decision cluster", () => {
    const path = "/articles/shopify-hydrogen-developer-vs-agency";
    const relation = getAllContentRelations().find((item) => item.path === path);

    expect(relation).toMatchObject({
      path,
      cluster: "decision",
      persona: "merchant",
      intent: "evaluate",
    });
    expect(getRelatedLinksForPath(path).map((link) => link.href)).toEqual(
      expect.arrayContaining([
        HIRING_INTENT_OWNER_PATH,
        "/articles/how-to-hire-shopify-hydrogen-developer",
        "/articles/shopify-hydrogen-experts-production-experience",
        "/shopify-hydrogen-audit",
        "/contact#fit-review-form",
      ]),
    );
    const relatedHrefs = getRelatedLinksForPath(path).map((link) => link.href);
    for (const retiredPath of RETIRED_COMMERCIAL_INTENT_PATHS) {
      expect(relatedHrefs).not.toContain(retiredPath);
    }
  });
});
