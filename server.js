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

// Express ilovasini yaratish
const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// View engine sozlash
app.set("views", "./views");
app.set("view engine", "ejs");

// Routing
app.post("/create-item", (req, res) => {
  res.json({ test: "success" });
});

app.get("/", (req, res) => {
  res.render("harid");
});

app.get("/author", (req, res) => {
  res.render("author", { user: user });
});

// Server yaratish
let PORT = 3000;
const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
