import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

interface OgImageSpec {
  filename: string;
  kicker: string;
  title: string;
  subtitle: string;
  theme: "light" | "dark";
}

const OUTPUT_DIR = join(process.cwd(), "public/og/traffic-foundation");

const IMAGES: readonly OgImageSpec[] = [
  {
    filename: "examples.svg",
    kicker: "HYDROGENEXPERT",
    title: "Shopify Hydrogen Examples",
    subtitle: "Sources, takeaways, and production links.",
    theme: "dark",
  },
  {
    filename: "templates.svg",
    kicker: "FREE CHECKLISTS",
    title: "Shopify Hydrogen Templates",
    subtitle: "Scope, SEO migration, launch QA, PDP, analytics.",
    theme: "light",
  },
  {
    filename: "issues.svg",
    kicker: "ISSUE LIBRARY",
    title: "Symptom to fix",
    subtitle: "SEO, performance, PDP, collections, cart, metaobjects.",
    theme: "dark",
  },
  {
    filename: "vs-liquid.svg",
    kicker: "COMPARE",
    title: "Hydrogen vs Liquid",
    subtitle: "Theme-first simplicity or app-first control.",
    theme: "light",
  },
  {
    filename: "migration.svg",
    kicker: "MIGRATION PLAN",
    title: "Liquid to Hydrogen",
    subtitle: "Routes, redirects, SEO, analytics, and launch QA.",
    theme: "dark",
  },
];

function svgFor(spec: OgImageSpec) {
  const dark = spec.theme === "dark";
  const pageFill = dark ? "#171717" : "#f6f7f7";
  const panelFill = dark ? "#ffffff" : "#ffffff";
  const titleFill = "#171717";
  const subtitleFill = "#5f6368";

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" role="img" aria-labelledby="title desc">
  <title id="title">${spec.title} by HydrogenExpert</title>
  <desc id="desc">${spec.subtitle}</desc>
  <rect width="1200" height="630" fill="${pageFill}"/>
  <rect x="76" y="78" width="1048" height="474" rx="34" fill="${panelFill}" stroke="#dfe3e3"/>
  <text x="118" y="160" fill="#10b981" font-family="Arial, sans-serif" font-size="30" font-weight="700" letter-spacing="6">${spec.kicker}</text>
  <text x="118" y="270" fill="${titleFill}" font-family="Arial, sans-serif" font-size="76" font-weight="800">${spec.title}</text>
  <text x="120" y="354" fill="${subtitleFill}" font-family="Arial, sans-serif" font-size="30">${spec.subtitle}</text>
  <rect x="118" y="430" width="250" height="58" rx="29" fill="#171717"/>
  <text x="162" y="469" fill="#ffffff" font-family="Arial, sans-serif" font-size="24" font-weight="700">HydrogenExpert</text>
  <rect x="842" y="142" width="200" height="200" rx="34" fill="#10b981" opacity="0.9"/>
  <path d="M895 240h94M942 193v94" stroke="#ffffff" stroke-width="18" stroke-linecap="round"/>
</svg>
`;
}

mkdirSync(OUTPUT_DIR, { recursive: true });

for (const image of IMAGES) {
  writeFileSync(join(OUTPUT_DIR, image.filename), svgFor(image));
}

console.log(`Generated ${IMAGES.length} OG images in ${OUTPUT_DIR}`);
