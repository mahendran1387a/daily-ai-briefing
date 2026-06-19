const { sql, authed } = require('./_db');
module.exports = async (req, res) => {
  if (!authed(req)) return res.status(401).json({ error: 'unauthorized' });
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' });
  const items = (req.body && req.body.items) || [];
  if (!Array.isArray(items)) return res.status(400).json({ error: 'items array required' });
  try {
    for (const it of items) {
      if (!it.id || !it.date) continue;
      await sql`
        insert into feed_items (id,date,cat,title,summary,src,url)
        values (${it.id},${it.date},${it.cat||null},${it.title||null},${it.summary||null},${it.src||null},${it.url||null})
        on conflict (id) do update set
          cat=excluded.cat, title=excluded.title, summary=excluded.summary, src=excluded.src, url=excluded.url`;
    }
    await sql`delete from feed_items where date < current_date - interval '30 days'`;
    const c = await sql`select count(*)::int as n from feed_items`;
    res.status(200).json({ ok: true, total: c[0].n, ingested: items.length });
  } catch (e) { res.status(500).json({ error: String(e) }); }
};
