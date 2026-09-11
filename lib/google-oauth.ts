import { existsSync, readFileSync } from "node:fs";

interface GoogleOAuthTokenFile {
  client_id?: string;
  client_secret?: string;
  refresh_token?: string;
  token_uri?: string;
  scopes?: string[] | string;
  scope?: string[] | string;
}

export function parseGoogleScopes(data: Pick<GoogleOAuthTokenFile, "scope" | "scopes">) {
  const raw = data.scopes ?? data.scope ?? [];
  return Array.isArray(raw) ? raw : raw.split(/\s+/).filter(Boolean);
}

export function createGoogleAccessTokenProvider(
  tokenPath: string,
  requiredScopes: readonly string[],
) {
  let accessTokenPromise: Promise<string> | null = null;

  return async () => {
    if (accessTokenPromise) return accessTokenPromise;

    accessTokenPromise = (async () => {
      if (!existsSync(tokenPath)) {
        throw new Error(`Google OAuth token file is missing at ${tokenPath}.`);
      }

      const data = JSON.parse(readFileSync(tokenPath, "utf8")) as GoogleOAuthTokenFile;
      const missingScopes = requiredScopes.filter(
        (scope) => !parseGoogleScopes(data).includes(scope),
      );

      if (missingScopes.length > 0) {
        throw new Error(`Google OAuth is missing scope: ${missingScopes.join(", ")}.`);
      }

      const requiredFields = ["client_id", "client_secret", "refresh_token", "token_uri"] as const;
      const missingFields = requiredFields.filter((field) => !data[field]);
      if (missingFields.length > 0) {
        throw new Error(`Google OAuth token file is missing field(s): ${missingFields.join(", ")}.`);
      }

      const response = await fetch(data.token_uri!, {
        method: "POST",
        body: new URLSearchParams({
          client_id: data.client_id!,
          client_secret: data.client_secret!,
          refresh_token: data.refresh_token!,
          grant_type: "refresh_token",
        }),
      });

      if (!response.ok) {
        throw new Error(`Google token refresh returned HTTP ${response.status}.`);
      }

      const body = (await response.json()) as { access_token?: string };
      if (!body.access_token) {
        throw new Error("Google token refresh returned no access token.");
      }

      return body.access_token;
    })();

    try {
      return await accessTokenPromise;
    } catch (error) {
      accessTokenPromise = null;
      throw error;
    }
  };
}

export async function googleJson<T>(
  url: string,
  token: string,
  init: RequestInit = {},
) {
  const response = await fetch(url, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      ...(init.body ? { "Content-Type": "application/json" } : {}),
      ...init.headers,
    },
  });

  if (!response.ok) {
    const body = (await response.json().catch(() => null)) as
      | { error?: { message?: string } }
      | null;
    throw new Error(body?.error?.message ?? `Google API returned HTTP ${response.status}.`);
  }

  return (await response.json()) as T;
}
