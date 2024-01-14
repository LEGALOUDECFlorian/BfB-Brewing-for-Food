import express from "express";
import controllerWrapper from "../../helper/controller.wrapper";
import UserController from "../../controllers/userController";
import usersSchema from "../../validate/schemas/users.schema";
import validationMiddleware from "../../middlewares/validation.middleware";

const usersRouter = express.Router();

usersRouter.route("/bfb/users/:id(\\d+)")
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

usersRouter.route("/bfb/users")
  .get(
    controllerWrapper(UserController.getAll.bind(UserController)),
  )
  .post(
    // UserController.create.bind(UserController),
    // validator("body", usersSchema),
    validationMiddleware("body", usersSchema),
    controllerWrapper(UserController.create.bind(UserController)),
  );