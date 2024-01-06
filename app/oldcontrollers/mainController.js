const { Sequelize } = require('sequelize');
const { Recipe, Opinion } = require('../models');

const mainController = {

  async homePage(request, response) {
    try {
      // Recuperation d'une recette de façon aléatoire
      const randomRecipe = await Recipe.findOne({
        order: [Sequelize.literal('RANDOM()')],
      });
      // Recuperation des 5 recettes les plus recentes
      const lastCreatedRecipes = await Recipe.findAll({
        order: [['created_at', 'DESC']],
        limit: 5,
      });
      // Recuperation des 5 recettes les mieux notés
      // const topRecipes = await Recipe.findAll({

      // });

      response.render('homepage', { randomRecipe, lastCreatedRecipes });
    } catch (err) {
      console.log(err);
      // Si une erreur est survenue, on renvoie une erreur 500
      return response.status(500).json({ error: 'Internal server error' });
    }
  },

};

module.exports = mainController;
