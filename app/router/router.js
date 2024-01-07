import { Router } from "express";
import controllerWrapper from "../helper/controller.wrapper.js";
import userController from "../controllers/userController.js";
import validator from "../validate/index.validator.js";
import usersSchema from "../validate/schemas/users.schema.js";
import checkIdSchema from "../validate/schemas/check_id.schema.js";

const router = Router();

router.route("/bfb/users")
  .get(
    controllerWrapper(userController.findAllUsers),
  )
  .post(
    validator("body", usersSchema),
    controllerWrapper(userController.createOne),
  );
router.route("/bfb/users/:id")
  .get(
    validator("params", checkIdSchema),
    controllerWrapper(userController.findOne),
  )
  .patch(
    [
      validator("params", checkIdSchema),
      validator("body", usersSchema),
    ],
    controllerWrapper(userController.updateOne),
  )
  .delete(
    [
      validator("params", checkIdSchema),
      validator("body", usersSchema),
    ],
    controllerWrapper(userController.deleteOne),
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
