export const ANALYTICS_CONSENT_STORAGE_KEY = "hydrogenexpert.analyticsConsent.v1";
export const ANALYTICS_CONSENT_CHANGE_EVENT = "hydrogenexpert:analytics-consent-change";
export const ANALYTICS_READY_EVENT = "hydrogenexpert:analytics-ready";

export type AnalyticsConsentPreference = "granted" | "denied";

interface ConsentStorage {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
}

function isConsentPreference(value: string | null): value is AnalyticsConsentPreference {
  return value === "granted" || value === "denied";
}

export function readAnalyticsConsent(storage?: ConsentStorage | null) {
  try {
    const target = storage ?? (typeof window !== "undefined" ? window.localStorage : null);
    const value = target?.getItem(ANALYTICS_CONSENT_STORAGE_KEY) ?? null;

    return isConsentPreference(value) ? value : null;
  } catch {
    return null;
  }
}

export function writeAnalyticsConsent(
  preference: AnalyticsConsentPreference,
  storage?: ConsentStorage | null,
) {
  try {
    const target = storage ?? (typeof window !== "undefined" ? window.localStorage : null);

    target?.setItem(ANALYTICS_CONSENT_STORAGE_KEY, preference);
    return Boolean(target);
  } catch {
    return false;
  }
}

export function hasAnalyticsConsent() {
  return readAnalyticsConsent() === "granted";
}

export function shouldReloadAfterConsentChange(
  previous: AnalyticsConsentPreference | null,
  next: AnalyticsConsentPreference | null,
) {
  return previous === "granted" && next === "denied";
}
