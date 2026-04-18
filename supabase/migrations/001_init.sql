create table posts (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  slug text unique not null,
  content text not null,
  meta_description text check (char_length(meta_description) <= 155),
  published_at timestamptz default now(),
  status text default 'published' check (status in ('published', 'draft'))
);

create index on posts(slug);
create index on posts(status, published_at desc);
