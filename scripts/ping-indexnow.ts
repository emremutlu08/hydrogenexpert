import { readFileSync } from "node:fs";
import { join } from "node:path";

import {
  DEFAULT_INDEXNOW_ENDPOINT,
  buildIndexNowPayload,
  isAcceptedIndexNowStatus,
} from "../lib/indexnow";

interface ParsedArgs {
  dryRun: boolean;
  endpoint: string;
  key?: string;
  keyLocation?: string;
  siteUrl: string;
  urls: string[];
}

function readKeyFromPublicFile() {
  return readFileSync(join(process.cwd(), "public/indexnow-key.txt"), "utf8").trim();
}

function parseArgs(argv: readonly string[]): ParsedArgs {
  const parsed: ParsedArgs = {
    dryRun: false,
    endpoint: process.env.INDEXNOW_ENDPOINT || DEFAULT_INDEXNOW_ENDPOINT,
    key: process.env.INDEXNOW_KEY,
    keyLocation: process.env.INDEXNOW_KEY_LOCATION,
    siteUrl:
      process.env.INDEXNOW_SITE_URL ||
      process.env.SITE_URL ||
      process.env.NEXT_PUBLIC_SITE_URL ||
      "https://hydrogenexpert.co",
    urls: [],
  };

  for (const arg of argv) {
    if (arg === "--dry-run") {
      parsed.dryRun = true;
    } else if (arg.startsWith("--endpoint=")) {
      parsed.endpoint = arg.slice("--endpoint=".length);
    } else if (arg.startsWith("--key=")) {
      parsed.key = arg.slice("--key=".length);
    } else if (arg.startsWith("--key-location=")) {
      parsed.keyLocation = arg.slice("--key-location=".length);
    } else if (arg.startsWith("--site-url=")) {
      parsed.siteUrl = arg.slice("--site-url=".length);
    } else {
      parsed.urls.push(arg);
    }
  }

  return parsed;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const payload = buildIndexNowPayload({
    siteUrl: args.siteUrl,
    key: args.key || readKeyFromPublicFile(),
    keyLocation: args.keyLocation,
    urls: args.urls,
  });

  if (args.dryRun) {
    console.log(JSON.stringify(payload, null, 2));
    return;
  }

  const response = await fetch(args.endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "User-Agent": "HydrogenExpert IndexNow submitter",
    },
    body: JSON.stringify(payload),
  });

  if (!isAcceptedIndexNowStatus(response.status)) {
    const body = await response.text();
    throw new Error(`IndexNow submission failed with HTTP ${response.status}: ${body}`);
  }

  console.log(`IndexNow accepted ${payload.urlList.length} URL(s) with HTTP ${response.status}.`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
