import express from "express";
import controllerWrapper from "../../helper/controller.wrapper.js";
import UserController from "../../controllers/userController.js";
import usersSchema from "../../validate/schemas/users.schema.js";
import validationMiddleware from "../../middlewares/validation.middleware.js";

const usersRouter = express.Router();

usersRouter.route("/:id(\\d+)")
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

usersRouter.route("/")
  .get(
    controllerWrapper(UserController.getAll.bind(UserController)),
  )
  .post(
    validationMiddleware("body", usersSchema),
    controllerWrapper(UserController.create.bind(UserController)),
  );

export default usersRouter;
