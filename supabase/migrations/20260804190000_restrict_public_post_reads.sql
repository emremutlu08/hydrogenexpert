drop policy if exists "Public read access" on public.posts;

create policy "Public read access" on public.posts
  for select
  using (
    status = 'published'
    and published_at <= now()
  );
