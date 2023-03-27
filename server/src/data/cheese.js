import Product from '../domain/products/Product.js';

export const cheese = [
  {
    productName: 'Feta',
    description: 'Salty and tangy',
    category: 'cheese',
    price: 5.99,
    stockAvailable: 25,
  },
  {
    productName: 'Gouda',
    description: 'Semi-hard and nutty',
    category: 'cheese',
    price: 7.99,
    stockAvailable: 20,
  },
  {
    productName: 'Mozzarella',
    description: 'Soft and stretchy',
    category: 'cheese',
    price: 6.49,
    stockAvailable: 30,
  },
  {
    productName: 'Parmesan',
    description: 'Hard and nutty',
    category: 'cheese',
    price: 8.99,
    stockAvailable: 15,
  },
  {
    productName: 'Provolone',
    description: 'Sharp and smoky',
    category: 'cheese',
    price: 7.49,
    stockAvailable: 20,
  },
  {
    productName: 'Roquefort',
    description: 'Soft and crumbly with blue veins',
    category: 'cheese',
    price: 9.99,
    stockAvailable: 10,
  },
  {
    productName: 'Gorgonzola',
    description: 'Creamy and tangy with blue veins',
    category: 'cheese',
    price: 7.99,
    stockAvailable: 15,
  },
  {
    productName: 'Havarti',
    description: 'Semi-soft and buttery',
    category: 'cheese',
    price: 6.99,
    stockAvailable: 25,
  },
  {
    productName: 'Manchego',
    description: 'Firm and nutty with a slightly sweet taste',
    category: 'cheese',
    price: 9.49,
    stockAvailable: 10,
  },
  {
    productName: 'Camembert',
    description: 'Soft and creamy with a bloomy rind',
    category: 'cheese',
    price: 8.99,
    stockAvailable: 15,
  },
];

cheese.forEach(async (product) => {
  await new Product(product).save();
});
