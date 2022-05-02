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
`;
