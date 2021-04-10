import { MongoClient } from 'mongodb'

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */

let cached = global.mongo

cached = global.mongo = { conn: null, promise: null }

export async function connectToDatabase(MONGODB_URI, MONGODB_DB) {

  const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }

  cached.promise = MongoClient.connect(MONGODB_URI, opts).then((client) => {
    return {
      client,
      db: client.db(MONGODB_DB)
    }
  })
  
  cached.conn = await cached.promise
  return cached.conn
}