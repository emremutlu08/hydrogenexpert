import {
  checkPublicProductionHealth,
  checkSupabasePostReadHealth,
  type ProductionHealthResult,
} from "../lib/production-health";

const DEFAULT_SITE_URL = "https://hydrogenexpert.co";

function printResult(result: ProductionHealthResult) {
  const marker = result.ok ? "PASS" : "FAIL";
  const status = result.status === null ? "request error" : `HTTP ${result.status}`;

  console.log(`${marker} ${result.name}: ${status}`);

  if (!result.ok) {
    console.error(`  ${result.detail}`);
  }
}

async function main() {
  const baseUrl = process.env.PRODUCTION_HEALTH_BASE_URL || DEFAULT_SITE_URL;
  const requireSupabase = process.argv.includes("--require-supabase");
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();
  const results = await checkPublicProductionHealth({ baseUrl });

  if (supabaseUrl && supabaseAnonKey) {
    results.push(
      await checkSupabasePostReadHealth({
        supabaseUrl,
        anonKey: supabaseAnonKey,
      }),
    );
  } else if (requireSupabase) {
    results.push({
      name: "Supabase published-post read",
      ok: false,
      status: null,
      detail:
        "NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are required in Supabase strict mode.",
    });
  }

  for (const result of results) {
    printResult(result);
  }

  const failures = results.filter((result) => !result.ok);

  if (failures.length > 0) {
    throw new Error(`Production health verification failed with ${failures.length} unhealthy target(s).`);
  }

  console.log(`Production health verification passed for ${results.length} target(s).`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
