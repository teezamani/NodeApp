require('dotenv').config(); 

module.exports = {
  // development: {
  //   username: process.env.DB_USERNAME,
  //   password: process.env.DB_PASSWORD,
  //   database: process.env.DB_NAME,
  //   host: '127.0.0.1',
  //   dialect: 'postgres',
  //   dialectOptions: {
  //     bigNumberStrings: true,
  //   },
  // },
  development: {
    url: process.env.DEV_DATABASE_URL,
    dialect: 'postgres',
  },
  test: {
    url: process.env.TEST_DATABASE_URL,
    dialect: 'postgres',
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
  },
  // development: {
  //   username: "postgres",
  //   password: "ad3poju",
  //   database: "beerappdev",
  //   host: '127.0.0.1',
  //   dialect: 'postgres',
  //   dialectOptions: {
  //     bigNumberStrings: true,
  //   },
  // },
  // test: {
  //   username: process.env.DB_USERNAME,
  //   password: process.env.DB_PASSWORD,
  //   database: process.env.DB_NAME,
  //   host: '127.0.0.1',
  //   dialect: 'postgres',
  //   dialectOptions: {
  //     bigNumberStrings: true,
  //   },
  // },
  // production: {
  //   username: process.env.DB_USERNAME,
  //   password: process.env.DB_PASSWORD,
  //   database: process.env.DB_NAME,
  //   host: process.env.DB_HOSTNAME,
  //   port: process.env.DB_PORT,
  //   dialect: 'postgres',
  //   dialectOptions: {
  //     bigNumberStrings: true,
  //   },
  // },
};