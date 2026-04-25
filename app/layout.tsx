import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Geist } from "next/font/google";

import "./globals.css";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getSiteNavigation } from "@/lib/navigation";
import { OWNER, SITE_KEYWORDS, getSiteUrl } from "@/lib/site";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const verification = process.env.GOOGLE_SITE_VERIFICATION;
const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "HydrogenExpert | Shopify Hydrogen Storefront Strategy",
    template: "%s",
  },
  description:
    "Shopify Hydrogen strategy, case studies, cost guidance, and custom storefront planning for Shopify Plus brands that need faster delivery and better conversion.",
  keywords: [...SITE_KEYWORDS],
  applicationName: "HydrogenExpert",
  authors: [{ name: OWNER.name, url: OWNER.linkedIn }],
  creator: OWNER.name,
  publisher: OWNER.name,
  icons: {
    icon: "/brand/hydrogenexpert-logo-icon.png",
    shortcut: "/brand/hydrogenexpert-logo-icon.png",
    apple: "/brand/hydrogenexpert-logo-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navItems = await getSiteNavigation();

  return (
    <html lang="en" className={`${geist.variable}`}>
      <head>
        {verification ? (
          <meta name="google-site-verification" content={verification} />
        ) : null}
      </head>
      <body className="bg-white text-slate-900 antialiased">
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
