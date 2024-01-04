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
      // const topRecipesQuery = await Recipe.findAll({
      //   attributes: [
      //     'id',
      //     'title',
      //     'number_of_parts',
      //     'description',
      //     'ingredients',
      //     'instruction',
      //     'preparation_time',
      //     'cooking_time',
      //     'picture',
      //     'user_id',
      //     'created_at',
      //     'updated_at',
      //     [Sequelize.fn('AVG', Sequelize.col('opinions.note')), 'average_rating'],
      //   ],
      //   include: [
      //     {
      //       model: Opinion,
      //       as: 'opinions',
      //       attributes: [],
      //       where: { recipe_id: Sequelize.col('Recipe.id') },
      //       required: false,
      //     },
      //   ],
      //   group: [
      //     'Recipe.id',
      //     'Recipe.title',
      //     'Recipe.number_of_parts',
      //     'Recipe.description',
      //     'Recipe.ingredients',
      //     'Recipe.instruction',
      //     'Recipe.preparation_time',
      //     'Recipe.cooking_time',
      //     'Recipe.picture',
      //     'Recipe.user_id',
      //     'Recipe.created_at',
      //     'Recipe.updated_at',
      //   ],
      //   order: [[Sequelize.fn('AVG', Sequelize.col('opinions.note')), 'DESC']],
      //   limit: 5,
      // });

      console.log("topRecipesQuery");
      response.render('homepage', { randomRecipe, lastCreatedRecipes });
    } catch (err) {
      console.log(err);
      // Si une erreur est survenue, on renvoie une erreur 500
      return response.status(500).json({ error: 'Internal server error' });
    }
  },

};

module.exports = mainController;
// SELECT
// 	  AVG (note)
// FROM
//       opinion
// GROUP BY
//       recipe_id;
