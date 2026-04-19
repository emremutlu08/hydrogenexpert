import { createClient, type SupabaseClient } from "@supabase/supabase-js";

import type { Database } from "@/lib/database.types";

let client: SupabaseClient<Database> | null = null;
let adminClient: SupabaseClient<Database> | null = null;

function getSupabaseEnv() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    return null;
  }

  return { url, anonKey };
}

export function getSupabaseClient(): SupabaseClient<Database> | null {
  const env = getSupabaseEnv();

  if (!env) {
    return null;
  }

  if (!client) {
    client = createClient<Database>(env.url, env.anonKey, {
      auth: { persistSession: false },
    });
  }

  return client;
}

export function getSupabaseAdminClient(): SupabaseClient<Database> | null {
  const env = getSupabaseEnv();
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!env || !serviceRoleKey) {
    return null;
  }

  if (!adminClient) {
    adminClient = createClient<Database>(env.url, serviceRoleKey, {
      auth: { persistSession: false },
    });
  }

  return adminClient;
}
