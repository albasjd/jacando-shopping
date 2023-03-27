export const ProductDomain = `

type Product {
    id: ID!
    productName: String!
    description: String!
    category: String!
    price: Float!
    stockAvailable: Int!
}

type PaginatedProducts {
    products: [Product!]!
    hasMore: Boolean!
}

`;

export const ProductQueries = `

  productsByCategory(category: String!, pagination: Pagination): PaginatedProducts

`;

export const ProductInputs = `

input CreateProduct {
    productName: String!
    description: String!
    category: String!
    price: Float!
    stockAvailable: Int
}

`;

export const ProductMutations = `

  createProduct(command: CreateProduct): Product

`;
