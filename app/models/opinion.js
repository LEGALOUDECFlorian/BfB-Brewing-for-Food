const { DataTypes, Model } = require('sequelize');
const sequelize = require('./sequelize');

class Opinion extends Model {}

Opinion.init({

  recipe_id: DataTypes.INTEGER,
  user_id: DataTypes.INTEGER,
  note: DataTypes.INTEGER,
  comment: DataTypes.TEXT,
}, {
  sequelize,
  tableName: 'opinion',
});

module.exports = Opinion;
