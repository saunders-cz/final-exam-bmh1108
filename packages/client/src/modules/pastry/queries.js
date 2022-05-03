import { gql } from "@apollo/client";

export const GET_PASTRIES = gql`
Query GET_PASTRIES {
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
query GET_PASTRY($pastryId: ID!) {
  pastry(id: $pastryId) {
    id
    name
    origin
    imgsrc
    description
    price
    categoryID
    category {
    }
  }
}
`;
