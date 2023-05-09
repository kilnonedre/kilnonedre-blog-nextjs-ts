import query from './db'

const sql =
  'CREATE TABLE IF NOT EXISTS admin_login (username VARCHAR(255), password VARCHAR(255))'

query(sql, [])
