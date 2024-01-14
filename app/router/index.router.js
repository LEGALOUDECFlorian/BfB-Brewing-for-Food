import express from "express";
import ApiError from "../errors/apiError.js";
import apiRouter from "./api/index.apiRouter.js";

const router = express.Router();

router.use("/bfb", apiRouter);

router.use((_, __, next) => {
  next(new ApiError("Resource not found", { httpStatus: 404 }));
});

export default router;
