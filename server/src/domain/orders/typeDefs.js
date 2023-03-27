export const OrderDomain = `
  type Order {
    id: ID!
    products: [OrderProduct!]!
    user: String!
    createdAt: DateTime!
  }

  type OrderProduct {
    product: Product!
    quantity: Int!
  }
  
  scalar DateTime
`;

export const OrderQueries = `
  getOrders: [Order!]!
`;

export const OrderInputs = `
  input CreateOrder {
    products: [OrderProductInput!]!
    user: String!
  }

  input OrderProductInput {
    product: ID!
    quantity: Int!
  }
`;

export const OrderMutations = `
  createOrder(command: CreateOrder): Order
`;
