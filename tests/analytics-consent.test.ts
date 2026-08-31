import { describe, expect, it, vi } from "vitest";

import {
  ANALYTICS_CONSENT_STORAGE_KEY,
  readAnalyticsConsent,
  writeAnalyticsConsent,
} from "../lib/analytics-consent";

describe("analytics consent storage", () => {
  it("accepts only the versioned granted and denied values", () => {
    const storage = { getItem: vi.fn(() => "granted"), setItem: vi.fn() };

    expect(readAnalyticsConsent(storage)).toBe("granted");
    storage.getItem.mockReturnValue("denied");
    expect(readAnalyticsConsent(storage)).toBe("denied");
    storage.getItem.mockReturnValue("legacy-consent");
    expect(readAnalyticsConsent(storage)).toBeNull();
    expect(storage.getItem).toHaveBeenCalledWith(ANALYTICS_CONSENT_STORAGE_KEY);
  });

  it("stores the explicit preference under the versioned key", () => {
    const storage = { getItem: vi.fn(), setItem: vi.fn() };

    expect(writeAnalyticsConsent("granted", storage)).toBe(true);
    expect(storage.setItem).toHaveBeenCalledWith(
      ANALYTICS_CONSENT_STORAGE_KEY,
      "granted",
    );
  });

  it("fails closed when browser storage is unavailable", () => {
    const storage = {
      getItem: vi.fn(() => {
        throw new Error("blocked");
      }),
      setItem: vi.fn(() => {
        throw new Error("blocked");
      }),
    };

    expect(readAnalyticsConsent(storage)).toBeNull();
    expect(writeAnalyticsConsent("denied", storage)).toBe(false);
  });
});
