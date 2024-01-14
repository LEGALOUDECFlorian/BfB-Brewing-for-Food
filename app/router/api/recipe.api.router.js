import express from "express";
import controllerWrapper from "../../helper/controller.wrapper.js";
import RecipeController from "../../controllers/recipeController.js";
import createSchema from "../../validate/schemas/recipe.create.schema.js";
import updateSchema from "../../validate/schemas/recipe.update.schema.js";
import validationMiddleware from "../../middlewares/validation.middleware.js";

const recipeRouter = express.Router();

recipeRouter.route("/:id(\\d+)")
/**
 * GET /BfB/recipe/{id}
 * @summary Get a Recipe from its id
 * @tags Recipe
 * @param {number} id.path.required - Recipe id
 * @return {Recipe} 200 - success response - application/json
 * @return {ApiJsonError} 400 - Bad request response - application/json
 * @return {ApiJsonError} 404 - Not found response - application/json
 * @return {ApiJsonError} 500 - Internal Server Error - application/json
 */
  .get(
    controllerWrapper(RecipeController.getByPk.bind(RecipeController)),
  )
/**
 * PATCH /BfB/recipe/{id}
 * @summary PATCH a Recipe
 * @tags Recipe
 * @param {number} id.path.required - Recipe id
 * @return {Recipe} 200 - success response - application/json
 * @return {ApiJsonError} 400 - Bad request response - application/json
 * @return {ApiJsonError} 404 - Not found response - application/json
 * @return {ApiJsonError} 500 - Internal Server Error - application/json
 */
  .patch(
    validationMiddleware("body", updateSchema),
    controllerWrapper(RecipeController.update.bind(RecipeController)),
  )
/**
 * DELETE /BfB/recipe/{id}
 * @summary Delete a Recipe
 * @tags Recipe
 * @param {number} id.path.required - Recipe id
 * @param {Recipeinput} request.body.required - Recipe info
 * @return {Recipe} 200 - success response - application/json
 * @return {ApiJsonError} 400 - Bad request response - application/json
 * @return {ApiJsonError} 404 - Not found response - application/json
 * @return {ApiJsonError} 500 - Internal Server Error - application/json
 */
  .delete(
    controllerWrapper(RecipeController.delete.bind(RecipeController)),
  );

recipeRouter.route("/")
  .get(
    /**
 * GET /BfB/recipe
 * @summary Get all Recipe
 * @tags Recipe
 * @param {number} id.path.required - Recipe id
 * @return {Category} 200 - success response - application/json
 * @return {ApiJsonError} 400 - Bad request response - application/json
 * @return {ApiJsonError} 500 - Internal Server Error - application/json
 */
    controllerWrapper(RecipeController.getAll.bind(RecipeController)),
  )
  .post(
    /**
 * POST /BfB/recipe
 * @summary Add a recipe
 * @tags Recipe
 * @param {number} request.body.required - Recipe id
 * @return {Category} 200 - success response - application/json
 * @return {ApiJsonError} 400 - Bad request response - application/json
 * @return {ApiJsonError} 500 - Internal Server Error - application/json
 */
    validationMiddleware("body", createSchema),
    controllerWrapper(RecipeController.create.bind(RecipeController)),
  );

export default recipeRouter;
