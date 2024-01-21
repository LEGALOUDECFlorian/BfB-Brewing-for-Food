import express from "express";
import controllerWrapper from "../../helper/controller.wrapper.js";
import UserController from "../../controllers/userController.js";
import usersSchema from "../../validate/schemas/users.schema.js";
import validationMiddleware from "../../middlewares/validation.middleware.js";

const usersRouter = express.Router();

usersRouter.route("/:id(\\d+)")
/**
 * GET /BfB/users/{id}
 * @summary Get a Users from its id
 * @tags Users
 * @param {number} id.path.required - Users id
 * @return {Users} 200 - success response - application/json
 * @return {ApiJsonError} 400 - Bad request response - application/json
 * @return {ApiJsonError} 404 - Not found response - application/json
 * @return {ApiJsonError} 500 - Internal Server Error - application/json
 */
  .get(
    controllerWrapper(UserController.getByPk.bind(UserController)),
  )
/**
 * PATCH /BfB/users/{id}
 * @summary PATCH a Users
 * @tags Users
 * @param {number} id.path.required - Users id
 * @return {Users} 200 - success response - application/json
 * @return {ApiJsonError} 400 - Bad request response - application/json
 * @return {ApiJsonError} 404 - Not found response - application/json
 * @return {ApiJsonError} 500 - Internal Server Error - application/json
 */
  .patch(
    validationMiddleware("body", usersSchema),
    controllerWrapper(UserController.update.bind(UserController)),
  )
/**
 * DELETE /BfB/users/{id}
 * @summary Delete a Users
 * @tags Users
 * @param {number} id.path.required - Users id
 * @return {Users} 200 - success response - application/json
 * @return {ApiJsonError} 400 - Bad request response - application/json
 * @return {ApiJsonError} 404 - Not found response - application/jsonp
 * @return {ApiJsonError} 500 - Internal Server Error - application/json
 */
  .delete(
    controllerWrapper(UserController.delete.bind(UserController)),
  );

usersRouter.route("/")
  .get(
    /**
 * GET /BfB/users
 * @summary Get all Users
 * @tags Users
 * @param {number} id.path.required - Users id
 * @return {Category} 200 - success response - application/json
 * @return {ApiJsonError} 400 - Bad request response - application/json
 * @return {ApiJsonError} 500 - Internal Server Error - application/json
 */
    controllerWrapper(UserController.getAll.bind(UserController)),
  )
  .post(
    /**
 * POST /BfB/users
 * @summary Add a user
 * @tags Users
 * @param {number} request.body.required - Users id
 * @return {Category} 200 - success response - application/json
 * @return {ApiJsonError} 400 - Bad request response - application/json
 * @return {ApiJsonError} 500 - Internal Server Error - application/json
 */
    validationMiddleware("body", usersSchema),
    controllerWrapper(UserController.create.bind(UserController)),
  );

export default usersRouter;
