console.log("Web Serverni boshlash");

const express = require("express");
console.log("app: started");
const mongodb = require("mongodb");
//app
const app = express();

// mongoga aloqaga chiqish
const db = require("./server").db();

// 1 express kirish code
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());




app.set("views", "./views");
app.set("view engine", "ejs");

app.post("/create-item", (req, res) => {
  const new_data = req.body.item;
  db.collection("plansCollection").insertOne(
    { item: new_data },
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log("added to db");
      }
    }
  );
});

app.get("/", (req, res) => {
  db.collection("plansCollection")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end("something went wrong with db");
      } else {
        res.render("plan", { items: data });
      }
    });
});

module.exports = app;