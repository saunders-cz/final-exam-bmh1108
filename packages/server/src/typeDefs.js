import { gql } from "apollo-server";

export const typeDefs = gql`
  type Pastry {
    id: ID!
    name: String!
    origin: String!
    imgsrc: String
    description: String!
    price: Float!
    categoryID: ID
    category: Category
  }

  type Category {
    id: ID!
    name: String!
    pastries: [Pastry]
  }

  type Query {
    pastries: [Pastry]
    pastry(id: ID!): Pastry
    categories: [Category]
  }

  input PastryInput {
    name: String!
    origin: String!
    imsrc: String
    description: String!
    price: Float!
    categoryID: ID!
  }

  type Result {
    ok: Boolean!
    error: [Error]
  }

  type Error {
    message: String!
  }

  type Mutation {
    addPastry(input: PastryInput!): Result
    updatePastry(id: ID!, input: PastryInput!): Result
    deletePastry(id: ID!): Result
  }
`;
