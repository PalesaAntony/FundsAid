import db from '../../db'
import { collections, externalize } from '../../db'

export default async (props, args, context) => {
  const { Products } = await collections
  const result = await Products.insert(Object.assign(args.input))
  return externalize(await Products.findOne({ _id: result.insertedIds[0] }))

}