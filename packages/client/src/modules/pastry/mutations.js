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
  mutation UPDATE_PASTRY($updatePastryId: ID!, $input: PastryInput!) {
    updatePastry(id: $updatePastryId, input: $input) {
      ok
      error {
        message
      }
    }
  }
`;

export const DELETE_PASTRY = gql`
  mutation DELETE_PASTRY($deletePastryId: ID!) {
    deletePastry(id: $deletePastryId) {
      ok
      error {
        message
      }
    }
  }
`;
