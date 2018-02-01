import products from './queries/products'
import addProduct from './mutations/add-product'
import deleteProduct from './mutations/delete-product'

export default {
  Query: {
    products
  },
  Mutation: {
    addProduct,
  }
}