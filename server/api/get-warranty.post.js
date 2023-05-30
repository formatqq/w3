
import { MongoClient } from 'mongodb'
const CONNECTION_STRING = "mongodb+srv://hammer_database:i6eRUMpeowk28-UivEhre3*7@cluster0.ysx8fio.mongodb.net/?retryWrites=true&w=majority"

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  if(!body.SN_code) return
  const client = await MongoClient.connect(CONNECTION_STRING)
  const db = await client.db('hammer')
  const result = await db.collection("Warranty").find(body).toArray()
  client.close()
  return result
})