import db from '../../db'
import { externalize, collections } from '../../db'

export default async (props, args, context) => {

  const { Products } = await collections
  const query = args.includeArchived ? {} : {
    isArchived: { $ne: true }
  }
  const result = await Products.find(query).toArray()
  return await result.map(async p => externalize(await p))
  
}