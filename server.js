const express = require("express");
const http = require("http");
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    user = JSON.parse(data);
  }
});

//app
const app = express();
// 1 express kirish code
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//2 sessions code
//3 views code
app.set("views", "./views");
app.set("view engine", "ejs");

//4 routing code
//form in harid has action sending it to /create-item
app.post("/create-item", (req, res) => {
  res.json({ test: "success" });
});

///main page rendering harid.ejs in views
app.get("/", (req, res) => {
  res.render("harid");
});

// author page route
app.get("/author", (req, res) => {
  res.render("author", { user: user });
});

//creating server with https
let PORT = 3000;
const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`this app is running in port: ${PORT}`);
});