import mysql from 'mysql'

const mysqlAdminData = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'nmdzz000',
  database: 'kil_blog_next'
})

const query = function (sql: string, values: Array<Array<Array<string>>>) {
  return new Promise((resolve, reject) => {
    mysqlAdminData.getConnection((err, connection) => {
      if (err) {
        reject(err)
      } else {
        connection.query(sql, values, (err, result) => {
          if (err) {
            reject(err)
          } else {
            resolve(result)
          }
          connection.release()
        })
      }
    })
  })
}

export default query
