import { existsSync } from "node:fs";
import path from "node:path";

function resolvePublicAsset(assetPath: string) {
  return path.join(process.cwd(), "public", assetPath.replace(/^\/+/, ""));
}

export function hasPublicAsset(assetPath: string) {
  return existsSync(resolvePublicAsset(assetPath));
}

export const FOUNDER_PHOTO_PATH = "/emre-city-16x9.png";
export const UPWORK_BADGE_PATH = "/badges/upwork-top-rated-plus.svg";

export const HAS_FOUNDER_PHOTO = hasPublicAsset(FOUNDER_PHOTO_PATH);
export const HAS_UPWORK_BADGE = hasPublicAsset(UPWORK_BADGE_PATH);
