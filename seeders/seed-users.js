'use strict';
const faker = require('faker');
const images = require('../database/user-images.js');

var generateRandomImage = function(data) {
  var imageArray = data.images;
  var max = imageArray.length;
  var randomNum = Math.floor(Math.random() * Math.floor(max));
  return imageArray[randomNum];
};

const users = [...Array(100)].map((user) => (
  {
    user: faker.internet.userName(),
    user_image_url: generateRandomImage(images),
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
