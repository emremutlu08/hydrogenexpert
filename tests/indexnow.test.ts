import { describe, expect, it } from "vitest";

import {
  buildIndexNowPayload,
  isAcceptedIndexNowStatus,
  validateIndexNowKey,
} from "../lib/indexnow";

describe("IndexNow payloads", () => {
  it("builds a bulk submission payload from site-relative paths", () => {
    const payload = buildIndexNowPayload({
      siteUrl: "https://hydrogenexpert.co",
      key: "9c7a2f4d8b6140a6a9f2f4c71b8d5e3a",
      urls: ["/", "/shopify-hydrogen-packages", "https://hydrogenexpert.co/articles"],
    });

    expect(payload.host).toBe("hydrogenexpert.co");
    expect(payload.keyLocation).toBe("https://hydrogenexpert.co/indexnow-key.txt");
    expect(payload.urlList).toEqual([
      "https://hydrogenexpert.co/",
      "https://hydrogenexpert.co/shopify-hydrogen-packages",
      "https://hydrogenexpert.co/articles",
    ]);
  });

  it("rejects URLs outside the verified host", () => {
    expect(() =>
      buildIndexNowPayload({
        siteUrl: "https://hydrogenexpert.co",
        key: "9c7a2f4d8b6140a6a9f2f4c71b8d5e3a",
        urls: ["https://example.com/"],
      }),
    ).toThrow("must belong to hydrogenexpert.co");
  });

  it("validates key shape and accepted response codes", () => {
    expect(() => validateIndexNowKey("short")).toThrow("8-128 characters");
    expect(isAcceptedIndexNowStatus(200)).toBe(true);
    expect(isAcceptedIndexNowStatus(202)).toBe(true);
    expect(isAcceptedIndexNowStatus(403)).toBe(false);
  });
});
