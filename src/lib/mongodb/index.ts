import { MongoClient } from 'mongodb'

export const clientPromise = MongoClient.connect(
    'mongodb://localhost:27017/YOURDATABASE',
  {
    maxPoolSize: 10,
  }
)
