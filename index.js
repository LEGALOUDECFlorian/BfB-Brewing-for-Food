// require('dotenv').config();
import "./app/helper/env.load.js";

import express from "express";
import session from "express-session";
import router from "./app/router/router.js";

const app = express();
// const path = require('path');
const port = process.env.PORT || 3000;

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Dossier static
app.use(express.static("public"));
// Charger les données de la sessions sur `req.session` et `res.locals`
app.use(
  session({
    saveUninitialized: true,
    resave: true,
    secret: "bfbsecret",
  }),
);
// app.use(loadUserToLocals);

// Setup view engine
app.set("view engine", "ejs");
app.set("views", "./app/views");

app.use(router);

app.listen(port, () => {
  console.log(`Le bonheur ? c'est par ici => http://localhost:${port}`);
});
