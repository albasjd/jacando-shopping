import Product from '../domain/products/Product.js';

export const vegetables = [
  {
    productName: 'Tomatoes',
    description: 'Juicy and flavorful',
    category: 'vegetables',
    price: 1.49,
    stockAvailable: 30,
  },
  {
    productName: 'Bell Peppers',
    description: 'Crunchy and colorful',
    category: 'vegetables',
    price: 2.99,
    stockAvailable: 20,
  },
  {
    productName: 'Broccoli',
    description: 'Nutritious and delicious',
    category: 'vegetables',
    price: 2.49,
    stockAvailable: 25,
  },
  {
    productName: 'Onions',
    description: 'Pungent and versatile',
    category: 'vegetables',
    price: 0.99,
    stockAvailable: 50,
  },
  {
    productName: 'Potatoes',
    description: 'Starchy and satisfying',
    category: 'vegetables',
    price: 1.29,
    stockAvailable: 40,
  },
  {
    productName: 'Zucchini',
    description: 'Mild and tender',
    category: 'vegetables',
    price: 3.49,
    stockAvailable: 15,
  },
  {
    productName: 'Cucumbers',
    description: 'Cool and refreshing',
    category: 'vegetables',
    price: 1.99,
    stockAvailable: 35,
  },
  {
    productName: 'Green Beans',
    description: 'Crisp and flavorful',
    category: 'vegetables',
    price: 2.99,
    stockAvailable: 20,
  },
  {
    productName: 'Cauliflower',
    description: 'Versatile and nutritious',
    category: 'vegetables',
    price: 2.79,
    stockAvailable: 30,
  },
  {
    productName: 'Spinach',
    description: 'Nutritious and versatile',
    category: 'vegetables',
    price: 2.49,
    stockAvailable: 40,
  },
  {
    productName: 'Kale',
    description: 'Superfood packed with nutrients',
    category: 'vegetables',
    price: 3.49,
    stockAvailable: 20,
  },
  {
    productName: 'Carrots',
    description: 'Fresh, crunchy and delicious',
    category: 'vegetables',
    price: 1.99,
    stockAvailable: 50,
  },
  {
    productName: 'Beets',
    description: 'Sweet and earthy',
    category: 'vegetables',
    price: 2.99,
    stockAvailable: 15,
  },
  {
    productName: 'Eggplant',
    description: 'Meaty and versatile',
    category: 'vegetables',
    price: 3.99,
    stockAvailable: 10,
  },
  {
    productName: 'Artichokes',
    description: 'Delicate and flavorful',
    category: 'vegetables',
    price: 4.49,
    stockAvailable: 5,
  },
];

vegetables.forEach(async (product) => {
  await new Product(product).save();
});
