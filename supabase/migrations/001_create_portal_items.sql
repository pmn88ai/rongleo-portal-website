-- Migration: 001_create_portal_items
-- Description: Create portal_items table with RLS policies
-- Run this in Supabase SQL Editor

create table if not exists portal_items (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  url text,
  summary text,
  description text,
  category text not null default 'Khác',
  status text not null default 'Đang phát triển',
  thumbnail_url text,
  tags text[] default '{}',
  featured boolean not null default false,
  public boolean not null default true,
  sort_order int not null default 100,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Auto-update updated_at
create or replace function update_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger portal_items_updated_at
  before update on portal_items
  for each row execute function update_updated_at();

-- RLS: public read
alter table portal_items enable row level security;

create policy "Public read" on portal_items
  for select using (public = true);

create policy "Service role full access" on portal_items
  using (auth.role() = 'service_role');
