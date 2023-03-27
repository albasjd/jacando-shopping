import Product from '../Product.js';

export default async (_, { command }) => {
  const {
    productName,
    description,
    category,
    price,
    stockAvailable = 0,
  } = command;

  let product = await Product.findOne({ productName });

  if (product) {
    throw new Error('Product already exists');
  }

  product = new Product({
    productName,
    description,
    category,
    price,
    stockAvailable,
  });

  return await product.save();
};
