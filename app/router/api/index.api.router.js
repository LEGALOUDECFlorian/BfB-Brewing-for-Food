import express from "express";
import userRouter from "./users.api.router.js";
import recipeRouter from "./recipe.api.router.js";

const indexRouter = express.Router();

indexRouter.use("/recipe", recipeRouter);
indexRouter.use("/users", userRouter);

export default indexRouter;
