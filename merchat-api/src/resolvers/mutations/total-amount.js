import db from '../../db'
import { collections, externalize, internalize } from '../../db'
import { log } from 'util';

export default async (props, args, context) => {
  console.log("args",args);
  const query = args.input
  console.log("query",query);
  const { Products } = await collections
  const result = await Products.aggregate({query},{
    totalAmount:{$sum: query.price}})
  console.log("total input", result.ops);
  return result.ops[0]

}