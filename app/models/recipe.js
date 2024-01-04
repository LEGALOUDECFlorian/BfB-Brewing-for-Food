const { DataTypes, Model } = require('sequelize');
const sequelize = require('./sequelize');

class Recipe extends Model {}

Recipe.init({
  title: DataTypes.TEXT,
  number_of_parts: DataTypes.INTEGER,
  description: DataTypes.TEXT,
  ingredients: DataTypes.TEXT,
  instruction: DataTypes.TEXT,
  preparation_time: DataTypes.INTEGER,
  cooking_time: DataTypes.INTEGER,
  picture: DataTypes.TEXT,
  user_id: DataTypes.INTEGER,
}, {
  sequelize,
  tableName: 'recipe',
});

module.exports = Recipe;
