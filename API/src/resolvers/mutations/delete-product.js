import db from '../../db'
import { collections, externalize, internalize } from '../../db'

export default async (props, args, context) => {

  const { Products } = await collections
  const result = await Products.findOneAndDelete({ _id: internalize(args)._id })
  return result.value

}