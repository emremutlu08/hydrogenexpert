import type { NextConfig } from "next";

function buildContentSecurityPolicy() {
  return [
    "default-src 'self'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "object-src 'none'",
    "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://challenges.cloudflare.com",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob: https:",
    "font-src 'self' data:",
    "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://*.supabase.co https://challenges.cloudflare.com",
    "frame-src https://www.googletagmanager.com https://challenges.cloudflare.com",
    "upgrade-insecure-requests",
  ].join("; ");
}

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: buildContentSecurityPolicy(),
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  {
    key: "Cross-Origin-Opener-Policy",
    value: "same-origin",
  },
  {
    key: "Cross-Origin-Resource-Policy",
    value: "same-site",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains",
  },
];

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/case-studies/bayam-jewelry",
        destination: "/case-studies/bayam-jewelry-shopify-hydrogen",
        permanent: true,
      },
      {
        source: "/case-studies/rebel-bunny",
        destination: "/case-studies/rebel-bunny-shopify-hydrogen",
        permanent: true,
      },
      {
        source: "/blog/shopify-hydrogen-seo",
        destination: "/shopify-hydrogen-seo",
        permanent: true,
      },
      {
        source: "/shopify-headless-commerce",
        destination: "/headless-shopify-agency",
        permanent: true,
      },
      {
        source: "/shopify-storefront-api-developer",
        destination: "/shopify-hydrogen-developer",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
