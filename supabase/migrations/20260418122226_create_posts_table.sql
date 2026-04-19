create table if not exists posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  content text not null,
  excerpt text not null,
  meta_description text not null,
  tags text[] default '{}',
  reading_time integer default 5,
  cover_image text,
  published_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists posts_slug_idx on posts (slug);
create index if not exists posts_published_at_idx on posts (published_at desc);

create or replace function update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create or replace trigger update_posts_updated_at
  before update on posts
  for each row
  execute function update_updated_at_column();

alter table posts enable row level security;

create policy "Public read access" on posts
  for select
  using (published_at <= now());

create policy "Service role full access" on posts
  for all
  using (auth.role() = 'service_role');
