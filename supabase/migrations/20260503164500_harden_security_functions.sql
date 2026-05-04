create or replace function public.update_updated_at_column()
returns trigger
language plpgsql
set search_path = public
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

revoke execute on function public.bump_rate_limit(text, text, timestamp with time zone) from public;
revoke execute on function public.bump_rate_limit(text, text, timestamp with time zone) from anon;
revoke execute on function public.bump_rate_limit(text, text, timestamp with time zone) from authenticated;
grant execute on function public.bump_rate_limit(text, text, timestamp with time zone) to service_role;

alter table public.posts enable row level security;
alter table public.lead_submissions enable row level security;
alter table public.request_rate_limits enable row level security;
