import { gql } from "@apollo/client";

export const GET_PASTRY_CATEGORIES = gql`
  query GET_PASTRY_CATEGORIES {
    categories {
      id
      name
      pastries {
        id
        name
        origin
        imgsrc
        description
        price
      }
    }
  }
`;