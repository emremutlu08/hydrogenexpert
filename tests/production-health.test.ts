import { describe, expect, it, vi } from "vitest";

import {
  checkPublicProductionHealth,
  checkSupabasePostReadHealth,
} from "../lib/production-health";

describe("production health checks", () => {
  it("checks each public route and reports non-200 responses", async () => {
    const fetcher = vi.fn<typeof fetch>().mockImplementation(async (request) => {
      const url = new URL(request.toString());

      return new Response(null, { status: url.pathname === "/blog" ? 503 : 200 });
    });

    const results = await checkPublicProductionHealth({
      baseUrl: "https://hydrogenexpert.co/some-path",
      paths: ["/", "/blog"],
      fetcher,
    });

    expect(results).toEqual([
      { name: "/", ok: true, status: 200, detail: "HTTP 200" },
      {
        name: "/blog",
        ok: false,
        status: 503,
        detail: "expected HTTP 200, received HTTP 503",
      },
    ]);
    expect(fetcher).toHaveBeenCalledTimes(2);
  });

  it("reports request failures without exposing request credentials", async () => {
    const fetcher = vi.fn<typeof fetch>().mockRejectedValue(new Error("DNS lookup failed"));

    const result = await checkSupabasePostReadHealth({
      supabaseUrl: "https://project.supabase.co",
      anonKey: "private-test-key",
      fetcher,
    });

    expect(result).toEqual({
      name: "Supabase published-post read",
      ok: false,
      status: null,
      detail: "DNS lookup failed",
    });
    expect(JSON.stringify(result)).not.toContain("private-test-key");
  });

  it("uses the published-post REST read as the Supabase dependency check", async () => {
    const fetcher = vi.fn<typeof fetch>().mockResolvedValue(new Response("[]", { status: 200 }));

    const result = await checkSupabasePostReadHealth({
      supabaseUrl: "https://project.supabase.co",
      anonKey: "anon-test-key",
      fetcher,
    });

    expect(result.ok).toBe(true);
    const [request, init] = fetcher.mock.calls[0];
    expect(request.toString()).toBe(
      "https://project.supabase.co/rest/v1/posts?select=id&limit=1",
    );
    expect(init?.headers).toMatchObject({
      Authorization: "Bearer anon-test-key",
      apikey: "anon-test-key",
    });
  });
});
