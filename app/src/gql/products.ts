import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query ProductsByCategory($category: String!, $pagination: Pagination) {
    productsByCategory(category: $category, pagination: $pagination) {
      products {
        id
        productName
        description
        category
        price
        stockAvailable
      }
      hasMore
    }
  }
`;
