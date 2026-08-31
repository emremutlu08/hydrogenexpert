export const CRITICAL_PUBLIC_PATHS = [
  "/",
  "/blog",
  "/sitemap.xml",
  "/robots.txt",
  "/llms.txt",
  "/feed.xml",
] as const;

export interface ProductionHealthResult {
  name: string;
  ok: boolean;
  status: number | null;
  detail: string;
}

interface PublicHealthOptions {
  baseUrl: string;
  fetcher?: typeof fetch;
  paths?: readonly string[];
}

interface SupabaseHealthOptions {
  supabaseUrl: string;
  anonKey: string;
  fetcher?: typeof fetch;
}

const HEALTH_USER_AGENT = "HydrogenExpert production health verifier";

function normalizeOrigin(value: string) {
  const url = new URL(value);

  return url.origin;
}

async function fetchHealthStatus(
  name: string,
  request: RequestInfo | URL,
  init: RequestInit,
  fetcher: typeof fetch,
): Promise<ProductionHealthResult> {
  try {
    const response = await fetcher(request, init);
    const ok = response.status === 200;

    return {
      name,
      ok,
      status: response.status,
      detail: ok ? "HTTP 200" : `expected HTTP 200, received HTTP ${response.status}`,
    };
  } catch (error) {
    return {
      name,
      ok: false,
      status: null,
      detail: error instanceof Error ? error.message : "request failed",
    };
  }
}

export async function checkPublicProductionHealth({
  baseUrl,
  fetcher = fetch,
  paths = CRITICAL_PUBLIC_PATHS,
}: PublicHealthOptions): Promise<ProductionHealthResult[]> {
  const origin = normalizeOrigin(baseUrl);

  return Promise.all(
    paths.map((path) =>
      fetchHealthStatus(
        path,
        new URL(path, origin),
        {
          cache: "no-store",
          redirect: "follow",
          headers: { "User-Agent": HEALTH_USER_AGENT },
          signal: AbortSignal.timeout(15_000),
        },
        fetcher,
      ),
    ),
  );
}

export async function checkSupabasePostReadHealth({
  supabaseUrl,
  anonKey,
  fetcher = fetch,
}: SupabaseHealthOptions): Promise<ProductionHealthResult> {
  const origin = normalizeOrigin(supabaseUrl);
  const endpoint = new URL("/rest/v1/posts?select=id&limit=1", origin);

  return fetchHealthStatus(
    "Supabase published-post read",
    endpoint,
    {
      cache: "no-store",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${anonKey}`,
        apikey: anonKey,
        "User-Agent": HEALTH_USER_AGENT,
      },
      signal: AbortSignal.timeout(15_000),
    },
    fetcher,
  );
}
