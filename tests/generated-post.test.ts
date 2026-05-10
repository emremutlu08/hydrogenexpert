import { describe, expect, it } from "vitest";

import {
  CONTENT_WRITER_SYSTEM_PROMPT,
  GENERATED_POST_STATUS,
  GENERATED_POST_TAGS,
} from "../lib/generated-post-governance";

describe("generated post governance", () => {
  it("keeps cron-generated posts in draft review instead of public publishing", () => {
    expect(GENERATED_POST_STATUS).toBe("draft");
    expect(GENERATED_POST_TAGS).toContain("Needs Review");
  });

  it("keeps the generation prompt aligned with solo operator positioning", () => {
    expect(CONTENT_WRITER_SYSTEM_PROMPT).toContain("senior Shopify Hydrogen operator");
    expect(CONTENT_WRITER_SYSTEM_PROMPT).toContain("review-only draft");
    expect(CONTENT_WRITER_SYSTEM_PROMPT).not.toMatch(/agency/i);
  });
});
