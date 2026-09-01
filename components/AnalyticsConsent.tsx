"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";

import {
  ANALYTICS_CONSENT_CHANGE_EVENT,
  ANALYTICS_READY_EVENT,
  readAnalyticsConsent,
  resolveAnalyticsConsentPreference,
  shouldReloadAfterConsentChange,
  writeAnalyticsConsent,
  type AnalyticsConsentPreference,
} from "@/lib/analytics-consent";

interface AnalyticsConsentProps {
  gaId: string | null;
}

function subscribeToConsent(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(ANALYTICS_CONSENT_CHANGE_EVENT, callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(ANALYTICS_CONSENT_CHANGE_EVENT, callback);
  };
}

function getConsentServerSnapshot() {
  return null;
}

function expireGoogleAnalyticsCookies() {
  const cookieNames = document.cookie
    .split(";")
    .map((cookie) => cookie.split("=")[0]?.trim())
    .filter((name): name is string => Boolean(name?.startsWith("_ga")));

  for (const name of cookieNames) {
    document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax`;
    document.cookie = `${name}=; Max-Age=0; Path=/; Domain=.${window.location.hostname}; SameSite=Lax`;
  }
}

function updateGoogleConsent(preference: AnalyticsConsentPreference) {
  window.gtag?.("consent", "update", {
    analytics_storage: preference === "granted" ? "granted" : "denied",
  });

  if (preference === "denied") {
    expireGoogleAnalyticsCookies();
  }
}

export function AnalyticsConsent({ gaId }: AnalyticsConsentProps) {
  const persistedPreference = useSyncExternalStore(
    subscribeToConsent,
    readAnalyticsConsent,
    getConsentServerSnapshot,
  );
  const [inMemoryPreference, setInMemoryPreference] =
    useState<AnalyticsConsentPreference | null>(null);
  const preference = resolveAnalyticsConsentPreference(
    persistedPreference,
    inMemoryPreference,
  );
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const previousPreferenceRef = useRef<AnalyticsConsentPreference | null>(null);
  const isOpen = preference === null || isSettingsOpen;

  useEffect(() => {
    const previousPreference = previousPreferenceRef.current;
    previousPreferenceRef.current = preference;

    if (preference !== "granted") {
      updateGoogleConsent("denied");

      if (shouldReloadAfterConsentChange(previousPreference, preference)) {
        window.location.reload();
      }
    }
  }, [preference]);

  useEffect(() => {
    if (preference !== "granted" || !gaId) {
      return;
    }

    const interval = window.setInterval(() => {
      if (window.gtag) {
        window.clearInterval(interval);
        window.dispatchEvent(new Event(ANALYTICS_READY_EVENT));
      }
    }, 250);

    return () => window.clearInterval(interval);
  }, [gaId, preference]);

  function choosePreference(nextPreference: AnalyticsConsentPreference) {
    const persisted = writeAnalyticsConsent(nextPreference);

    setInMemoryPreference(persisted ? null : nextPreference);
    window.dispatchEvent(
      new CustomEvent(ANALYTICS_CONSENT_CHANGE_EVENT, { detail: nextPreference }),
    );
    setIsSettingsOpen(false);
    updateGoogleConsent(nextPreference);
  }

  return (
    <>
      {gaId && preference === "granted" ? <GoogleAnalytics gaId={gaId} /> : null}

      {isOpen ? (
        <section
          className="analytics-consent"
          aria-label="Analytics privacy choices"
          aria-live="polite"
        >
          <div>
            <p className="analytics-consent__eyebrow">Privacy choice</p>
            <h2 className="analytics-consent__title">Help improve HydrogenExpert?</h2>
            <p className="analytics-consent__body">
              Vercel provides cookie-free traffic and performance measurement. Google Analytics is
              optional and loads only if you allow it. You can change this choice at any time.
            </p>
          </div>
          <div className="analytics-consent__actions">
            <button
              type="button"
              onClick={() => choosePreference("granted")}
              className="analytics-consent__allow"
            >
              Allow analytics
            </button>
            <button
              type="button"
              onClick={() => choosePreference("denied")}
              className="analytics-consent__deny"
            >
              Necessary only
            </button>
          </div>
        </section>
      ) : (
        <button
          type="button"
          onClick={() => setIsSettingsOpen(true)}
          className="analytics-consent__settings"
          aria-label="Open analytics privacy settings"
        >
          Privacy settings
        </button>
      )}
    </>
  );
}
