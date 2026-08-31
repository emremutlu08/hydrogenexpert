"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import { useEffect, useState, useSyncExternalStore } from "react";

import {
  readAnalyticsConsent,
  writeAnalyticsConsent,
  type AnalyticsConsentPreference,
} from "@/lib/analytics-consent";

interface AnalyticsConsentProps {
  gaId: string | null;
}

const CONSENT_CHANGE_EVENT = "hydrogenexpert:analytics-consent-change";

function subscribeToConsent(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(CONSENT_CHANGE_EVENT, callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(CONSENT_CHANGE_EVENT, callback);
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
  const preference = useSyncExternalStore(
    subscribeToConsent,
    readAnalyticsConsent,
    getConsentServerSnapshot,
  );
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const isOpen = preference === null || isSettingsOpen;

  useEffect(() => {
    if (preference === "denied") {
      updateGoogleConsent("denied");
    }
  }, [preference]);

  function choosePreference(nextPreference: AnalyticsConsentPreference) {
    const shouldReloadWithoutGoogleAnalytics =
      preference === "granted" && nextPreference === "denied";

    writeAnalyticsConsent(nextPreference);
    window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT));
    setIsSettingsOpen(false);
    updateGoogleConsent(nextPreference);

    if (shouldReloadWithoutGoogleAnalytics) {
      window.location.reload();
    }
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
