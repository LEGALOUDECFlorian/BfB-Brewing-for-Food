import express from "express";
import router from "./router/index.router.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import createDoc from "./helper/api.doc.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("../public"));

createDoc(app);

app.use(router);

app.use(errorMiddleware);

export default app;
