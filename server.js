const express = require("express");
const http = require("http");
const fs = require("fs");

// Reading user data
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
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// views setup
app.set("views", "./views");
app.set("view engine", "ejs");

// routing
app.post("/create-item", (req, res) => {
  res.json({ test: "success" });
});

app.get("/", (req, res) => {
  res.render("harid");  // Render harid.ejs
});

app.get("/author", (req, res) => {
  res.render("author", { user: user });  // Pass user data to author.ejs
});

// create and run server
let PORT = 3000;
const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`This app is running on port: ${PORT}`);
});

console.log("server is running");
