import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

interface TrafficRow {
  label: string;
  value: number;
  change?: number;
}

interface TrafficInput {
  generatedAt?: string;
  last7Days?: {
    sessions?: number;
    users?: number;
    topPages?: TrafficRow[];
    internalClicks?: TrafficRow[];
    outboundClicks?: TrafficRow[];
  };
  last30Days?: {
    sessions?: number;
    users?: number;
    topPages?: TrafficRow[];
    internalClicks?: TrafficRow[];
    outboundClicks?: TrafficRow[];
  };
  gscNotes?: string[];
}

const REPORT_DIR = join(process.cwd(), "content/internal/reports");
const INPUT_PATH = join(process.cwd(), "content/internal/traffic-snapshot.json");

function isoDate(date: Date) {
  return date.toISOString().slice(0, 10);
}

function formatRange(days: number, now: Date) {
  const start = new Date(now);
  start.setUTCDate(start.getUTCDate() - days + 1);

  return `${isoDate(start)} to ${isoDate(now)}`;
}

function readInput(): TrafficInput {
  if (!existsSync(INPUT_PATH)) {
    return {};
  }

  return JSON.parse(readFileSync(INPUT_PATH, "utf8")) as TrafficInput;
}

function formatNumber(value?: number) {
  return typeof value === "number" ? value.toLocaleString("en-US") : "manual";
}

function rowLine(row: TrafficRow) {
  const change = typeof row.change === "number" ? ` (${row.change >= 0 ? "+" : ""}${row.change}%)` : "";

  return `- ${row.label}: ${row.value.toLocaleString("en-US")}${change}`;
}

function sectionRows(rows?: TrafficRow[]) {
  if (!rows?.length) {
    return "- Manual slot: paste GA4, Vercel Analytics, or Search Console export values here.";
  }

  return rows.map(rowLine).join("\n");
}

function renderReport(input: TrafficInput, now: Date) {
  return `# Weekly Traffic Report

Generated: ${input.generatedAt ?? now.toISOString()}

## Date Windows

- Last 7 days: ${formatRange(7, now)}
- Last 30 days: ${formatRange(30, now)}

## Last 7 Days

- Sessions: ${formatNumber(input.last7Days?.sessions)}
- Users: ${formatNumber(input.last7Days?.users)}

### Top Pages

${sectionRows(input.last7Days?.topPages)}

### Internal Clicks

${sectionRows(input.last7Days?.internalClicks)}

### Outbound Clicks

${sectionRows(input.last7Days?.outboundClicks)}

## Last 30 Days

- Sessions: ${formatNumber(input.last30Days?.sessions)}
- Users: ${formatNumber(input.last30Days?.users)}

### Top Pages

${sectionRows(input.last30Days?.topPages)}

### Internal Clicks

${sectionRows(input.last30Days?.internalClicks)}

### Outbound Clicks

${sectionRows(input.last30Days?.outboundClicks)}

## Manual Search Console Slot

${input.gscNotes?.length ? input.gscNotes.map((note) => `- ${note}`).join("\n") : "- Query, click, impression, CTR, and average-position notes go here after the weekly GSC export."}

## Traffic Foundation Routes To Watch

- /resources
- /shopify-hydrogen-examples
- /shopify-hydrogen-issues
- /shopify-hydrogen-templates
- /udemy-shopify-hydrogen-course-resources
`;
}

const now = new Date();
const input = readInput();
const report = renderReport(input, now);
const outputPath = join(REPORT_DIR, `traffic-${isoDate(now)}.md`);

mkdirSync(REPORT_DIR, { recursive: true });
writeFileSync(outputPath, report);

console.log(outputPath);
