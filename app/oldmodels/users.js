const { DataTypes, Model } = require('sequelize');
const sequelize = require('./sequelize');

class Users extends Model {}

Users.init({
  firstname: DataTypes.TEXT,
  lastname: DataTypes.TEXT,
  email: DataTypes.TEXT,
  password: DataTypes.TEXT,
  username: DataTypes.TEXT,
  compagnie: DataTypes.TEXT,
  web_site_compagnie: DataTypes.TEXT,
  role_id: DataTypes.INTEGER,
}, {
  sequelize,
  tableName: 'users',
});

module.exports = Users;
