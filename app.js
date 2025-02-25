console.log("Web Serverni boshlash");

const express = require("express");

const res = require("express/lib/response");

const app = express();

app.use(express.static("public"));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.set("views", "views");

app.set("view engine", "ejs");

app.post("/create-item", (req, res) => {
  // to do 
});

app.get("/", function (req, res) {
  res.render("reja");
});

module.exports = app;
