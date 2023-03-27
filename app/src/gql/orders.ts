import { gql } from "@apollo/client";

export const CREATE_ORDER = gql`
  mutation Mutation($command: CreateOrder) {
    createOrder(command: $command) {
      id
      user
      createdAt
    }
  }
`;
