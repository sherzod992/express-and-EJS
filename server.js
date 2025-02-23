const express = require("express");
const http = require("http");
const fs = require("fs");

// User ma'lumotlarini yuklash
let user = {}; // Default qiymat

fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("Faylni o‘qishda xatolik:", err);
  } else {
    try {
      user = JSON.parse(data);
    } catch (parseErr) {
      console.log("JSON faylni parse qilishda xatolik:", parseErr);
    }
  }
});

// Express app yaratish
const app = express();

// Middleware-lar
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// View sozlamalari
app.set("views", "./views");
app.set("view engine", "ejs");

// Routing
app.post("/create-item", (req, res) => {
  res.json({ test: "success" });
});

app.get("/", (req, res) => {
  res.render("harid"); // harid.ejs render qiladi
});

app.get("/author", (req, res) => {
  if (Object.keys(user).length === 0) {
    return res.status(500).json({ error: "User ma'lumotlari hali yuklanmadi" });
  }
  res.render("author", { user: user });
});

// Serverni yaratish va ishga tushirish
const PORT = 3000;
const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`This app is running on port: ${PORT}`);
});

console.log("Server is running...");
