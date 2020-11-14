'use strict';
const faker = require('faker');

const songs = [...Array(100)].map((song) => (
  {
    title: faker.hacker.phrase(),
    artist: faker.hacker.adjective() + ' ' + faker.hacker.noun(),
    // artist_image_url: ????
    genre: faker.address.direction(), // there are only 8. Makes sense since there is no genre
    plays: faker.random.number(),
    likes: faker.random.number(),
    reposts: faker.random.number(),
    comments: faker.random.number()
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

    return queryInterface.bulkInsert('Songs', songs, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Songs', null, {});
  }
};
