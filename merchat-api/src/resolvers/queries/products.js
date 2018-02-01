import db from '../../db'
import { externalize, collections } from '../../db'

export default async (props, args, context) => {
  const { Products } = await collections
  const result = await Products.find().toArray()
  return await result.map(async p => externalize(await p))

}