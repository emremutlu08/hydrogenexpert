import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Geist } from "next/font/google";

import "./globals.css";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { getValidGaMeasurementId } from "@/lib/analytics-config";
import { getSiteNavigation } from "@/lib/navigation";
import {
  FOUNDER_IMAGE_PATH,
  OWNER,
  SITE_LOGO_PATH,
  SITE_NAME,
  VERIFIED_PROFILE_URLS,
  getSiteUrl,
} from "@/lib/site";
import {
  asSchemaArray,
  buildPersonSchema,
  buildProfessionalServiceSchema,
} from "@/lib/structured-data";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const verification = process.env.GOOGLE_SITE_VERIFICATION;
const gaId = getValidGaMeasurementId();

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "HydrogenExpert | Shopify Hydrogen Storefront Strategy",
    template: "%s",
  },
  description:
    "Shopify Hydrogen strategy, case studies, cost guidance, and custom storefront planning for Shopify Plus brands that need faster delivery and better conversion.",
  applicationName: "HydrogenExpert",
  authors: [{ name: OWNER.name, url: OWNER.linkedIn }],
  creator: OWNER.name,
  publisher: OWNER.name,
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "2048x2048" },
      { url: "/brand/hydrogenexpert-logo-icon.png", type: "image/png", sizes: "2048x2048" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navItems = await getSiteNavigation();
  const siteUrl = getSiteUrl();
  const proofLinks = VERIFIED_PROFILE_URLS.filter(Boolean);
  const logoUrl = `${siteUrl}${SITE_LOGO_PATH}`;
  const rootSchema = asSchemaArray(
    buildPersonSchema({
      name: OWNER.name,
      title: OWNER.title,
      url: OWNER.linkedIn,
      image: `${siteUrl}${FOUNDER_IMAGE_PATH}`,
      sameAs: proofLinks,
      id: `${siteUrl}/about#emre-mutlu`,
    }),
    buildProfessionalServiceSchema({
      name: SITE_NAME,
      url: siteUrl,
      description:
        "Senior Shopify Hydrogen development and advisory for growth-stage Shopify brands.",
      founderName: OWNER.name,
      sameAs: proofLinks,
      logo: logoUrl,
      image: logoUrl,
      founderUrl: OWNER.linkedIn,
    }),
  );

  return (
    <html lang="en" className={`${geist.variable}`}>
      <head>
        {verification ? (
          <meta name="google-site-verification" content={verification} />
        ) : null}
      </head>
      <body className="bg-white text-slate-900 antialiased">
        <JsonLd data={rootSchema} />
        <div className="min-h-screen overflow-x-hidden">
          <Header navItems={navItems} />
          <main>{children}</main>
          <Footer navItems={navItems} />
        </div>
        {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
