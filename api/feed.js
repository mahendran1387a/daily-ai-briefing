const { sql, authed } = require('./_db');
module.exports = async (req, res) => {
  if (!authed(req)) return res.status(401).json({ error: 'unauthorized' });
  try {
    const rows = await sql`
      select f.id, to_char(f.date,'YYYY-MM-DD') as date, f.cat, f.title, f.summary, f.src, f.url
      from feed_items f
      left join item_state s on s.item_id = f.id
      where coalesce(s.deleted,false) = false
        and f.date >= current_date - interval '30 days'
      order by f.date desc, f.created_at desc`;
    res.status(200).json({ items: rows });
  } catch (e) { res.status(500).json({ error: String(e) }); }
};
