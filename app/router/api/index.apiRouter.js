import express from "express";
import userRouter from "./users.router.js";

const indexRouter = express.Router();

indexRouter.use("/users", userRouter);

export default indexRouter;
