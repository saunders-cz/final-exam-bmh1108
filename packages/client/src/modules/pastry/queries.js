import { gql } from "@apollo/client";

export const GET_PASTRIES = gql`
  query GET_PASTRIES {
    pastries {
      id
      name
      origin
      imgsrc
      description
      price
      categoryID
      category {
        id
        name
      }
    }
  }
`;

export const GET_PASTRY = gql`
  query GET_PASTRY($id: ID!) {
    pastry(id: $id) {
      name
      origin
      imgsrc
      description
      price
      categoryID
    }
  }
`;
