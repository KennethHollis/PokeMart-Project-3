const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: '$' },
    { name: '$$' },
    { name: '$$$' },
    { name: '$$$$' },
    { name: '$$$$$' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Charmander',
      description:
        'Fire type.',
      image: 'Fire1.png',
      category: categories[0]._id,
      price: 2.99,
      quantity: 5283
    },
    {
      name: 'Torchic',
      description:
        'Fire Type.',
      image: 'Fire2.webp',
      category: categories[0]._id,
      price: 1.99,
      quantity: 6085
    },
    {
      name: 'Cyndaquil',
      category: categories[1]._id,
      description:
        'Fire Type.',
      image: 'Fire3.webp',
      price: 12.99,
      quantity: 4567
    },
    {
      name: 'Chimchar',
      category: categories[1]._id,
      description:
        'Fire Type.',
      image: 'Fire4.webp',
      price: 13.99,
      quantity: 4208
    },
    {
      name: 'Bulbasaur',
      category: categories[1]._id,
      description:
        'Grass Type',
      image: 'Grass1.png',
      price: 15.99,
      quantity: 4100
    },
    {
      name: 'Treecko',
      category: categories[2]._id,
      description:
        'Grass Type.',
      image: 'Grass2.webp',
      price: 59.99,
      quantity: 3876
    },
    {
      name: 'Turtwig',
      category: categories[2]._id,
      description:
        'Grass Type.',
      image: 'Grass3.png',
      price: 67.99,
      quantity: 3657
    },
    {
      name: 'Chikorita',
      category: categories[3]._id,
      description:
        'Grass Type.',
      image: 'Grass4.png',
      price: 199.99,
      quantity: 1875
    },
    {
      name: 'Squirtle',
      category: categories[3]._id,
      description: 'Water Type.',
      image: 'water1.png',
      price: 164.99,
      quantity: 1289
    },
    {
      name: 'Mudkip',
      category: categories[4]._id,
      description:
        'Water Type.',
      image: 'water2.png',
      price: 767.99,
      quantity: 387
    },
    {
      name: 'Piplup',
      category: categories[4]._id,
      description:
        'Water Type.',
      image: 'water3.webp',
      price: 834.99,
      quantity: 235
    },
    {
      name: 'Totodile',
      category: categories[4]._id,
      description:
        'Water Type.',
      image: 'water4.png',
      price: 999.99,
      quantity: 69
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
