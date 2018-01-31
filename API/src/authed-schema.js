import { makeExecutableSchema } from 'graphql-tools'
import resolvers from './resolvers/authed'

const typeDefs = [

  `
    type Product {
      _id: ID!
      name: String
      price: Float
    }
    input ProductInput {
      name: String
     price: Float
    }
  `,
  `
    type Query {
      products: [Product]
    }
    type Mutation {
      addProduct(input: ProductInput!): Product
      deleteProduct(_id: ID!): Product
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