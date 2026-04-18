import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Fraunces, Manrope } from "next/font/google";

import "./globals.css";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { OWNER, getSiteUrl } from "@/lib/site";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
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
    "Shopify Hydrogen strategy, cost guidance, and migration planning for growth-minded store owners who need speed and better conversion.",
  applicationName: "HydrogenExpert",
  authors: [{ name: OWNER.name, url: OWNER.linkedIn }],
  creator: OWNER.name,
  publisher: OWNER.name,
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${fraunces.variable}`}>
      <head>
        {verification ? (
          <meta name="google-site-verification" content={verification} />
        ) : null}
      </head>
      <body className="bg-white text-slate-900 antialiased">
        <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.10),_transparent_34%),linear-gradient(180deg,_#ffffff_0%,_#f8fafc_100%)]">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
        {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
