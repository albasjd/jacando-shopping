import Product from '../domain/products/Product.js';

export const fruits = [
  {
    productName: 'Apples',
    description: 'Crisp and sweet',
    category: 'fruits',
    price: 1.99,
    stockAvailable: 50,
  },
  {
    productName: 'Bananas',
    description: 'Naturally sweet and healthy',
    category: 'fruits',
    price: 0.99,
    stockAvailable: 70,
  },
  {
    productName: 'Oranges',
    description: 'Juicy and refreshing',
    category: 'fruits',
    price: 2.49,
    stockAvailable: 40,
  },
  {
    productName: 'Strawberries',
    description: 'Sweet and fragrant',
    category: 'fruits',
    price: 3.99,
    stockAvailable: 20,
  },
  {
    productName: 'Grapes',
    description: 'Sweet and juicy',
    category: 'fruits',
    price: 2.99,
    stockAvailable: 30,
  },
  {
    productName: 'Pineapples',
    description: 'Tropical and delicious',
    category: 'fruits',
    price: 4.99,
    stockAvailable: 15,
  },
  {
    productName: 'Mangoes',
    description: 'Sweet and exotic',
    category: 'fruits',
    price: 3.49,
    stockAvailable: 25,
  },
  {
    productName: 'Kiwi',
    description: 'Tart and tangy',
    category: 'fruits',
    price: 1.99,
    stockAvailable: 35,
  },
  {
    productName: 'Pears',
    description: 'Soft and juicy',
    category: 'fruits',
    price: 2.29,
    stockAvailable: 45,
  },
  {
    productName: 'Blueberries',
    description: 'Antioxidant-rich and delicious',
    category: 'fruits',
    price: 4.49,
    stockAvailable: 20,
  },
  {
    productName: 'Raspberries',
    description: 'Fragrant and delicate',
    category: 'fruits',
    price: 5.99,
    stockAvailable: 10,
  },
  {
    productName: 'Watermelon',
    description: 'Juicy and refreshing',
    category: 'fruits',
    price: 3.99,
    stockAvailable: 20,
  },
  {
    productName: 'Cherries',
    description: 'Sweet and indulgent',
    category: 'fruits',
    price: 6.99,
    stockAvailable: 5,
  },
  {
    productName: 'Cantaloupe',
    description: 'Sweet and juicy',
    category: 'fruits',
    price: 3.49,
    stockAvailable: 15,
  },
  {
    productName: 'Blackberries',
    description: 'Rich and flavorful',
    category: 'fruits',
    price: 4.99,
    stockAvailable: 10,
  },
  {
    productName: 'Guava',
    description: 'Fragrant and tropical',
    category: 'fruits',
    price: 2.99,
    stockAvailable: 20,
  },
  {
    productName: 'Passionfruit',
    description: 'Tart and tangy',
    category: 'fruits',
    price: 1.79,
    stockAvailable: 25,
  },
  {
    productName: 'Dragonfruit',
    description: 'Exotic and refreshing',
    category: 'fruits',
    price: 5.99,
    stockAvailable: 15,
  },
  {
    productName: 'Plums',
    description: 'Sweet and juicy',
    category: 'fruits',
    price: 2.49,
    stockAvailable: 30,
  },
];

fruits.forEach(async (product) => {
  await new Product(product).save();
});
