create table if not exists public.request_rate_limits (
  id uuid primary key default gen_random_uuid(),
  scope text not null,
  key_hash text not null,
  window_start timestamptz not null,
  hits integer not null default 1,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (scope, key_hash, window_start)
);

create index if not exists request_rate_limits_scope_window_idx
  on public.request_rate_limits (scope, window_start desc);

create or replace function public.bump_rate_limit(
  p_scope text,
  p_key_hash text,
  p_window_start timestamptz
)
returns integer
language plpgsql
security definer
set search_path = public
as $$
declare
  next_hits integer;
begin
  insert into public.request_rate_limits (scope, key_hash, window_start, hits)
  values (p_scope, p_key_hash, p_window_start, 1)
  on conflict (scope, key_hash, window_start)
  do update set
    hits = public.request_rate_limits.hits + 1,
    updated_at = now()
  returning hits into next_hits;

  return next_hits;
end;
$$;

alter table public.request_rate_limits enable row level security;

drop policy if exists "Service role full access to request rate limits" on public.request_rate_limits;

create policy "Service role full access to request rate limits" on public.request_rate_limits
  for all
  using (auth.role() = 'service_role')
  with check (auth.role() = 'service_role');
