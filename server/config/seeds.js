const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Food' },
    { name: 'Household Supplies' },
    { name: 'Electronics' },
    { name: 'Books' },
    { name: 'Toys' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Chimchar',
      description:
        'Fire type.',
      image: 'fire1.png',
      category: categories[0]._id,
      price: 2.99,
      quantity: 500
    },
    {
      name: 'Torchic',
      description:
        'Fire Type.',
      image: 'fire2.webp',
      category: categories[0]._id,
      price: 1.99,
      quantity: 500
    },
    {
      name: 'Cyndaquil',
      category: categories[1]._id,
      description:
        'Fire Type.',
      image: 'fire3.webp',
      price: 7.99,
      quantity: 20
    },
    {
      name: 'Chimchar',
      category: categories[1]._id,
      description:
        'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
      image: 'fire4.webp',
      price: 3.99,
      quantity: 50
    },
    {
      name: 'Bulbasor',
      category: categories[1]._id,
      description:
        'Grass type',
      image: 'Grass1.png',
      price: 14.99,
      quantity: 100
    },
    {
      name: 'Treko',
      category: categories[2]._id,
      description:
        'Grass Type.',
      image: 'Grass2.webp',
      price: 399.99,
      quantity: 30
    },
    {
      name: 'Turtwig',
      category: categories[2]._id,
      description:
        'Grass Type.',
      image: 'Grass3',
      price: 199.99,
      quantity: 30
    },
    {
      name: 'Chikorita',
      category: categories[3]._id,
      description:
        'Grass Type.',
      image: 'Grass4',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Squirtle',
      category: categories[4]._id,
      description: 'Water type.',
      image: 'water1.png',
      price: 1.99,
      quantity: 1000
    },
    {
      name: 'Mudkip',
      category: categories[4]._id,
      description:
        'Water type.',
      image: 'water2',
      price: 2.99,
      quantity: 1000
    },
    {
      name: 'Piplup',
      category: categories[4]._id,
      description:
        'Water Type.',
      image: 'water3.webp',
      price: 7.99,
      quantity: 100
    },
    {
      name: 'Totodile',
      category: categories[4]._id,
      description:
        'Water Type.',
      image: 'water4.png',
      price: 9.99,
      quantity: 600
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
