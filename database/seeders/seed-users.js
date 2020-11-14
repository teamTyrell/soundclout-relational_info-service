'use strict';
const faker = require('faker');

const users = [...Array(100)].map((user) => (
  {
    user: faker.internet.userName(),
    // user_image_url: faker.internet.avatar() ???
    like: faker.random.boolean(),
    repost: faker.random.boolean()
  }
));

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    return queryInterface.bulkInsert('Users', users, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
