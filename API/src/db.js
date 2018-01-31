import { MongoClient, ObjectId } from 'mongodb'

export const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/api-boilerplate'

const db = MongoClient.connect(mongoUrl)

export const externalize = o => {
  o._id = o._id.toString()
  return o
}

export const internalize = o => Object.assign(
  o,
  {
    _id: ObjectId(o._id)
  }
)

// mapping "type names" to mongodb collection names
const _collections = {
  Products: 'products'
}

export const collections = (async () => Object.entries(_collections)
  .reduce(async (accumP, [ prop, coll ]) => {
    const accum = await accumP
    accum[prop] = (await db).collection(coll)
    return accum
  }, Promise.resolve({})))()
