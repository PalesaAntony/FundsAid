import { makeExecutableSchema } from 'graphql-tools'
import resolvers from './resolvers/index'

const typeDefs = [
  `
   scalar JSON
    type Product {
      _id: ID!
      name: String
      price: Float
    }
    input ProductInput {
      name: String
     price: Float
    }
    input TotalInput {
      data: JSON
    }
  `,
  `
    type Query {
      products: [Product]
    }
    type Mutation {
      addProduct(input: ProductInput!): Product
      deleteProduct(_id: ID!): Product
      totalAmount(input:[ProductInput]): [Product]
    }
    schema {
      query: Query
      mutation: Mutation
    }
  `
]
export default makeExecutableSchema({
  typeDefs,
  resolvers
})