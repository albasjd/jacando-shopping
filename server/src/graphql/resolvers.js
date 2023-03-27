import productsByCategory from '../domain/products/queries/getProductsByCategory.js';
import createProduct from '../domain/products/mutations/createProduct.js';
import getOrders from '../domain/orders/queries/getOrders.js';
import createOrder from '../domain/orders/mutations/createOrder.js';

const resolvers = {
  Query: {
    productsByCategory,
    getOrders,
  },

  Mutation: {
    createProduct,
    createOrder,
  },
};

export default resolvers;
