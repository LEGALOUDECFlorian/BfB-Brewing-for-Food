import express from "express";
import userRouter from "./api/user.router.js";

const indexRouter = express.Router();

indexRouter.use("/users", userRouter);
