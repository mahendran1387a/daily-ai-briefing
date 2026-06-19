const { sql, authed } = require('./_db');
module.exports = async (req, res) => {
  if (!authed(req)) return res.status(401).json({ error: 'unauthorized' });
  try {
    const rows = await sql`select item_id, read, deleted from item_state`;
    res.status(200).json({
      read: rows.filter(r => r.read).map(r => r.item_id),
      deleted: rows.filter(r => r.deleted).map(r => r.item_id)
    });
  } catch (e) { res.status(500).json({ error: String(e) }); }
};
