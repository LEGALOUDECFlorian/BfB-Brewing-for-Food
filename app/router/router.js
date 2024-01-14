import { Router } from "express";
import ApiError from "../errors/apiError.js";
import controllerWrapper from "../helper/controller.wrapper.js";
import UserController from "../controllers/userController.js";
// import validator from "../validate/index.validator.js";
import usersSchema from "../validate/schemas/users.schema.js";
// import checkIdSchema from "../validate/schemas/check_id.schema.js";
import validationMiddleware from "../middlewares/validation.middleware.js";

const router = Router();

router.route("/bfb/users/:id(\\d+)")
  .get(
    controllerWrapper(UserController.getByPk.bind(UserController)),
  )
  .patch(
    validationMiddleware("body", usersSchema),
    controllerWrapper(UserController.update.bind(UserController)),
  )
  .delete(
    controllerWrapper(UserController.delete.bind(UserController)),
  );

router.route("/bfb/users")
  .get(
    controllerWrapper(UserController.getAll.bind(UserController)),
  )
  .post(
    // UserController.create.bind(UserController),
    // validator("body", usersSchema),
    validationMiddleware("body", usersSchema),
    controllerWrapper(UserController.create.bind(UserController)),
  );

router.use((_, __, next) => {
  next(new ApiError("Resource not found", { httpStatus: 404 }));
});
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
