import Product from '../Product.js';

export default async (_, { category, pagination }) => {
  const { pageIndex = 0, limit = 5 } = pagination || {};

  const skip = pageIndex * limit;

  const products = await Product.find({ category })
    .skip(skip)
    .limit(limit)
    .exec();

  const total = await Product.countDocuments({ category });
  const hasMore = skip + limit < total;

  return { products, hasMore };
};
