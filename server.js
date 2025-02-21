<<<<<<< HEAD
const express = require("express");
const http = require("http");
const fs = require("fs");
=======
console.log('Web serverni boshlash');
>>>>>>> 78e83005ef1f66ad730ec8c696946a09e9d2ff93

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
<<<<<<< HEAD
// 1 express kirish code
app.use(express.static("public"));
=======
const http = require('http');
const res = require('express/lib/response');
const fs = require('fs');


let user;
fs.readFile("databese/user.json", "utf8", (err, data) => {
    if(err){
        console.log("ERROR",err);
    }else{
        user = JSON.parse(data);
    }
})

// Static fayllar uchun public papkani ko'rsatish
app.use(express.static('public'));
app.use(express.json());
>>>>>>> 78e83005ef1f66ad730ec8c696946a09e9d2ff93
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//2 sessions code
//3 views code
app.set("views", "./views");
app.set("view engine", "ejs");

<<<<<<< HEAD
//4 routing code
//form in harid has action sending it to /create-item
app.post("/create-item", (req, res) => {
  res.json({ test: "success" });
});

///main page rendering harid.ejs in views
app.get("/", (req, res) => {
  res.render("harid");
});


app.get("/author", (req, res) => {
  res.render("author", { user: user });
});

//creating server with https
=======
app.post('/create-item', (req, res)=>{
});
app.get("/author", (req, res) => {
    res.render('author', {user: user});
});

app.get('/', (req, res) => {
    res.render('harid'); // index.ejs ni render qilish
});


const server = http.createServer(app);
>>>>>>> 78e83005ef1f66ad730ec8c696946a09e9d2ff93
let PORT = 3000;
const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`this app is running in port: ${PORT}`);
});
<<<<<<< HEAD
console.log("server is running");
=======
>>>>>>> 78e83005ef1f66ad730ec8c696946a09e9d2ff93
