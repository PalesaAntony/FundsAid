import products from './queries/products'
import addProduct from './mutations/add-product'
import deleteProduct from './mutations/delete-product'
import totalAmount from './mutations/total-amount'
import GraphQLJSON from 'graphql-type-json'

export default {
  Query: {
    products
  },
  Mutation: {
    addProduct,
    deleteProduct,
    totalAmount
  },
  JSON: GraphQLJSON
}