// require('dotenv').config();
import "./app/helper/env.load.js";

const express = require("express");

const app = express();
const session = require("express-session");
// const path = require('path');
const port = process.env.PORT || 3000;
const router = require("./app/router/router.js");

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
  console.log(`Le bonheur ? c'est par ici => http://localhost:${port}/bfb`);
});
