export const DEFAULT_INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";
export const MAX_INDEXNOW_URLS_PER_REQUEST = 10000;

export interface IndexNowPayload {
  host: string;
  key: string;
  keyLocation: string;
  urlList: string[];
}

export function validateIndexNowKey(key: string) {
  if (!/^[A-Za-z0-9-]{8,128}$/.test(key)) {
    throw new Error("IndexNow key must be 8-128 characters and contain only letters, numbers, or dashes.");
  }
}

export function buildIndexNowPayload({
  siteUrl,
  key,
  keyLocation,
  urls,
}: {
  siteUrl: string;
  key: string;
  keyLocation?: string;
  urls: readonly string[];
}): IndexNowPayload {
  validateIndexNowKey(key);

  const site = new URL(siteUrl);
  const normalizedUrls = Array.from(
    new Set(
      urls.map((url) => {
        const normalizedUrl = new URL(url, site);

        if (normalizedUrl.hostname !== site.hostname) {
          throw new Error(`IndexNow URL must belong to ${site.hostname}: ${normalizedUrl.toString()}`);
        }

        normalizedUrl.hash = "";
        return normalizedUrl.toString();
      }),
    ),
  );

  if (normalizedUrls.length === 0) {
    throw new Error("Provide at least one URL or path to submit to IndexNow.");
  }

  if (normalizedUrls.length > MAX_INDEXNOW_URLS_PER_REQUEST) {
    throw new Error(`IndexNow accepts at most ${MAX_INDEXNOW_URLS_PER_REQUEST} URLs per request.`);
  }

  return {
    host: site.hostname,
    key,
    keyLocation: keyLocation ?? new URL("/indexnow-key.txt", site).toString(),
    urlList: normalizedUrls,
  };
}

export function isAcceptedIndexNowStatus(status: number) {
  return status === 200 || status === 202;
}
