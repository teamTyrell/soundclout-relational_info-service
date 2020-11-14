'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Songs extends Model {
    static associate(models) {
      // define association here in future, if needed
    }
  };
  Songs.init({
    title: DataTypes.STRING,
    artist: DataTypes.STRING,
    artist_image_url: DataTypes.STRING,
    genre: DataTypes.STRING,
    plays:DataTypes.INTEGER,
    likes: DataTypes.INTEGER,
    reposts: DataTypes.INTEGER,
    comments: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Songs',
  });
  return Songs;
};