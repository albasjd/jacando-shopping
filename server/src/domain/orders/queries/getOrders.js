import Order from '../Order.js';

export default async () =>
  await Order.find().populate('products.product').exec();
