import db from '../../db'
import { collections, externalize, internalize } from '../../db'

export default async (props, args, ctx) => {
  
  const { userinfo } = ctx

  console.log('updateProduct, userinfo', userinfo)

  if (userinfo.email === 'chris@uber5.com') {
    return ctx.throw(401, 'chris is not allowed...')
  }

  const { Products } = await collections
  const result = await Products.findOneAndUpdate(
    {
      _id: internalize(args)._id
    },
    { $set: args.input },
    { returnOriginal: false }
  )
  return result.value

}