const Role = require('./role');
const Category = require('./category');
const Users = require('./users');
const Recipe = require('./recipe');
const Opinion = require('./opinion');

// Un rôle peut avoir plusieurs utilisateurs
Role.hasMany(Users, {
  foreignKey: 'role_id',
  as: 'users',
});
// Un utilisateur appartient à un seul rôle
Users.belongsTo(Role, {
  foreignKey: 'role_id',
  as: 'role',
});

// Un utilisateur peut avoir plusieurs recettes
Users.hasMany(Recipe, {
  foreignKey: 'user_id',
  as: 'recipes',
});

// Une recette appartient à un seul utilisateur
Recipe.belongsTo(Users, {
  foreignKey: 'user_id',
  as: 'user',
});

// Un utilisateur peut avoir plusieurs opinions
Users.hasMany(Opinion, {
  foreignKey: 'user_id',
  as: 'opinions',
});

// Une opinion appartient à un seul utilisateur
Opinion.belongsTo(Users, {
  foreignKey: 'user_id',
  as: 'user',
});

// Une recette peut appartenir à plusieurs catégories
Recipe.belongsToMany(Category, {
  as: 'categories',
  through: 'recipe_has_category',
  foreignKey: 'recipe_id',
  otherKey: 'category_id',
  timestamps: false,
});

// Une catégorie peut avoir plusieurs recettes
Category.belongsToMany(Recipe, {
  as: 'recipe',
  through: 'recipe_has_category',
  foreignKey: 'category_id',
  otherKey: 'recipe_id',
  timestamps: false,
});

Recipe.hasMany(Opinion, {
  foreignKey: 'recipe_id',
  as: 'opinions',
});

Opinion.belongsTo(Recipe, {
  foreignKey: 'recipe_id',
  as: 'recipe',
});

module.exports = {
  Role, Category, Users, Recipe, Opinion,
};
