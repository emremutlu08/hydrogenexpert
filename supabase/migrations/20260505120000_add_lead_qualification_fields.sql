alter table public.lead_submissions
  add column if not exists current_stack text,
  add column if not exists monthly_revenue_band text,
  add column if not exists main_problem text,
  add column if not exists budget_range text,
  add column if not exists timeline text,
  add column if not exists shopify_plus_status text,
  add column if not exists engagement_type text;
