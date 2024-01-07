import { MongoClient } from 'mongodb'

if (!process.env.NEXT_PUBLIC_MONGO_URI) {
  throw new Error('MONGO_URI is not defined')
}

const uri = process.env.NEXT_PUBLIC_MONGO_URI

const options = {}

let client
let clientPromise: Promise<MongoClient>

if (process.env.NEXT_PUBLIC_NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

export default clientPromise
