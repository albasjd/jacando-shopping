import {
  ProductDomain,
  ProductInputs,
  ProductMutations,
  ProductQueries,
} from '../domain/products/typeDefs.js';
import { pagination } from '../domain/common/Pagination.js';
import {
  OrderDomain,
  OrderInputs,
  OrderMutations,
  OrderQueries,
} from '../domain/orders/typeDefs.js';

const typeDefs = `#graphql

${ProductDomain}
${OrderDomain}

type Query {
    ${ProductQueries}
    ${OrderQueries}
}

${pagination}
${ProductInputs}
${OrderInputs}

type Mutation {
    ${ProductMutations}
    ${OrderMutations}
}

`;

export default typeDefs;
