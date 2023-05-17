import query from '@/config/mysql/db'

const sql =
  'CREATE TABLE IF NOT EXISTS user_subscription (id INT PRIMARY KEY AUTO_INCREMENT,email CHAR(255))'

query(sql, [])
