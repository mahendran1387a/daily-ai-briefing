-- Run once in your Neon SQL editor.
create table if not exists feed_items(
  id text primary key,
  date date not null,
  cat text, title text, summary text, src text, url text,
  created_at timestamptz default now()
);
create table if not exists item_state(
  item_id text primary key,
  read boolean default false,
  deleted boolean default false,
  note text,
  updated_at timestamptz default now()
);
