const { neon } = require('@neondatabase/serverless');
const sql = neon(process.env.DATABASE_URL);
function authed(req){
  const t = req.headers['x-app-token'] || (req.query && req.query.token);
  return !!t && !!process.env.APP_TOKEN && t === process.env.APP_TOKEN;
}
module.exports = { sql, authed };
