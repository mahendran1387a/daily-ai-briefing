# Backend setup (Vercel + Neon Postgres) — one-time

You only do this once. ~15 minutes.

## 1. Create the database (Neon — free)
1. Go to https://neon.tech → sign up (you can use GitHub login).
2. Create a project (any name). Copy the **connection string** (looks like
   `postgresql://user:pass@ep-xxx.neon.tech/dbname?sslmode=require`).
3. Open Neon's **SQL Editor**, paste the contents of `schema.sql` from this folder, and run it.

## 2. Deploy to Vercel (free)
1. Go to https://vercel.com → sign in **with GitHub**.
2. **Add New → Project → Import** the `daily-ai-briefing` repo.
3. Framework preset: **Other**. Leave build/output settings empty. Click **Deploy**.
4. After it deploys you'll get a URL like `https://daily-ai-briefing.vercel.app`.

## 3. Add the secrets in Vercel
In the Vercel project → **Settings → Environment Variables**, add two:
- `DATABASE_URL` = the Neon connection string from step 1.
- `APP_TOKEN` = any long random string you invent (this is your private key; keep it secret).
Then **redeploy** (Deployments → ⋯ → Redeploy) so the variables take effect.

## 4. Tell your Mac how to reach the API
Create a file `~/.briefing_env` (in your home folder) with:
```
API_BASE="https://daily-ai-briefing.vercel.app"
APP_TOKEN="the-same-token-you-put-in-vercel"
```
Then run the publisher once to seed the DB:
```
bash "/Users/mahendranarumugam/Claude Projects /Daily AI Briefing/publish-briefing.sh"
```

## 5. Verify
Open in your browser (replace TOKEN):
```
https://daily-ai-briefing.vercel.app/api/feed?token=TOKEN
```
You should see today's items as JSON. If you do — the backend works, tell me and I'll wire the pages to it (with a fallback so they never break).

Notes: Vercel Hobby + Neon free tiers are fine for personal use. Keep APP_TOKEN private (it's the key to read/write your data).
