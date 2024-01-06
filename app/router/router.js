import { Router } from "express";
import controllerwrapper from "../helper/controller.wrapper.js";
import userController from "../controllers/userController.js";
// const recipeController = require('../controllers/recipeController');
// const categoryController = require('../controllers/categoryController');
// const opinionController = require('../controllers/opinionController');

const router = Router();

router.route("/bfb/users")
  .get(
    controllerwrapper(userController.findAllUsers),
  )
  .post(
    controllerwrapper(userController.createOne),
  );
router.route("/bfb/users/:id")
  .get(
    controllerwrapper(userController.findOne),
  )
  .patch(
    controllerwrapper(userController.updateOne),
  )
  .delete(
    controllerwrapper(userController.deleteOne),
  );
// page d'accueil - il faut pouvoir avoir accés a une recette au hasard pour le
// centre de la page ainsi qu'au 5 recettes les mieux notés / et les 5 recettes
// les plus recentes
// router.get("/bfb", mainController.homePage);

// Routes pour les recettes

// router.get("/bfb/recipes/:id", recipeController.getOneRecipeByiD);
// router.delete("/bfb/recipes/:id", recipeController.deleteRecipeById);
// router.get("/bfb/recipes", recipeController.getAllRecipes);
// router.post("/bfb/recipes", recipeController.createRecipe);

// // Routes pour les categories
// router.get('/bfb/category/:id', categoryController.getCategoryByiD);
// router.get('/bfb/category', categoryController.getAllCategory);

// // Routes pour les avis
// router.get('/bfb/recipes/:id/opinion/:opinion_id', opinionController.getOpinionByrecipeId);
// router.post('/bfb/recipes/:id/opinion', opinionController.createNewOpinionByRecipeId);
// router.get('/bfb/recipes/:id/opinion', opinionController.getAllOpinionForOneRecipe);
// router.delete('/bfb/recipes/:id/opinion/:opinion_id', opinionController.deleteOpinionById);

export default router;
