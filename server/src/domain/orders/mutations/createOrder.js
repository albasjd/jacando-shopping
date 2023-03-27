import Order from '../Order.js';

export default async (_, { command }) => {
  const { products, user } = command;

  const order = await new Order({
    products,
    user,
  }).save();

  return order.populate('products.product');
};
