// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import '@/config/mysql/list/subscriptions'
import query from '@/config/mysql/db'

type Data = {
  code: number
  data: Object
  msg: string
}

// const get = ()=>{

// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { email } = JSON.parse(req.body)
  console.log(req.method)
  console.log(req)
  const sql = 'INSERT INTO user_subscription (email) VALUES ?'
  query(sql, [[[email as string]]])
  res.status(200).json({ code: 200, data: {}, msg: 'success' })
}
