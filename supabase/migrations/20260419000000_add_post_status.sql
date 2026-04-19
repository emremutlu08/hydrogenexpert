alter table public.posts
  add column if not exists status text;

update public.posts
set status = 'published'
where status is null;

alter table public.posts
  alter column status set default 'published';

alter table public.posts
  alter column status set not null;

alter table public.posts
  drop constraint if exists posts_status_check;

alter table public.posts
  add constraint posts_status_check check (status in ('published', 'draft'));

create index if not exists posts_status_published_at_idx
  on public.posts (status, published_at desc);
