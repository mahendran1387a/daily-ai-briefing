const { sql, authed } = require('./_db');
module.exports = async (req, res) => {
  if (!authed(req)) return res.status(401).json({ error: 'unauthorized' });
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' });
  const b = req.body || {};
  const id = b.itemId;
  if (!id) return res.status(400).json({ error: 'itemId required' });
  const read = (typeof b.read === 'boolean') ? b.read : null;
  const deleted = (typeof b.deleted === 'boolean') ? b.deleted : null;
  const note = (typeof b.note === 'string') ? b.note : null;
  try {
    await sql`
      insert into item_state (item_id, read, deleted, note, updated_at)
      values (${id}, ${read ?? false}, ${deleted ?? false}, ${note}, now())
      on conflict (item_id) do update set
        read = coalesce(${read}, item_state.read),
        deleted = coalesce(${deleted}, item_state.deleted),
        note = coalesce(${note}, item_state.note),
        updated_at = now()`;
    res.status(200).json({ ok: true });
  } catch (e) { res.status(500).json({ error: String(e) }); }
};
