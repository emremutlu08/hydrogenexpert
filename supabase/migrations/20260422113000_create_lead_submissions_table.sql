create table if not exists public.lead_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  store_url text,
  message text not null,
  source_path text not null,
  source_kind text not null,
  created_at timestamptz not null default now()
);

create index if not exists lead_submissions_created_at_idx
  on public.lead_submissions (created_at desc);

create index if not exists lead_submissions_source_kind_idx
  on public.lead_submissions (source_kind);

alter table public.lead_submissions enable row level security;

drop policy if exists "Service role full access to lead submissions" on public.lead_submissions;

create policy "Service role full access to lead submissions" on public.lead_submissions
  for all
  using (auth.role() = 'service_role')
  with check (auth.role() = 'service_role');
