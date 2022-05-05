import { gql } from "@apollo/client";

export const ADD_PASTRY = gql`
  mutation ADD_PASTRY($input: PastryInput!) {
    addPastry(input: $input) {
      ok
      error {
        message
      }
    }
  }
`;

export const UPDATE_PASTRY = gql`
  mutation UPDATE_PASTRY($id: ID!, $input: PastryInput!) {
    updatePastry(id: $id, input: $input) {
      ok
      error {
        message
      }
    }
  }
`;

export const DELETE_PASTRY = gql`
  mutation DELETE_PASTRY($id: ID!) {
    deletePastry(id: $id) {
      ok
      error {
        message
      }
    }
  }
`;
