const express = require('express');
const http = require('http');
const fs = require('fs');
const app = express();

// MongoDB call qilamiz
const db = require('./server').db(); // server modulidan db ni chaqiramiz
const mongodb = require('mongodb'); //ma'lumotlarni boshqarish imkonini beradi.-

// 1. Kirish kodlari
app.use(express.static('public')); // static fayllarni yuklash (chaqirish) midl ware disign petton
app.use(express.json()); // tashqariga ochiqlab beradi
app.use(express.urlencoded({ extended: true })); // bunisi tradisional formni yuklash uchun ishlatiladi arxitextor petton disign petton

// 3. Views code
app.set('views', 'views'); // Shablon fayllar joylashgan papkani ko'rsatish (masalan, 'views' papkasi)
app.set('view engine', 'ejs'); // EJS shablon motorini ishlatishni belgilash
let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data)
  }
});

// 4. Routing code
app.post('/create-item', (req, res) => {
  console.log('user entered /create-item');
  const new_reja = req.body.reja;
  db.collection('plans').insertOne({ reja: new_reja }, (err, data) => {
    console.log(data.ops);
    res.json(data.ops[0]);
  });
});

app.post('/delete-item', (req, res) => {
  const id = req.body.id;
  db.collection('plans').deleteOne({ _id: new mongodb.ObjectId(id) }, (err, data) => {
    res.json({ state: 'success' });
  });
});

app.post('/edit-item', (req, res) => {
  const data = req.body;
  console.log(data);

  db.collection('plans').findOneAndUpdate(
    { _id: new mongodb.ObjectId(data.id) },
    { $set: { reja: data.new_input } },
    function (err, data) {
      res.json({ state: 'success' });
    }
  );
  res.end("done");
});

app.post('/delete-all', (req, res) => {
  if (req.body.delete_all) {
    db.collection('plans').deleteMany(() => {
      res.json({ state: 'Hamma rejalar ochiridi' });
    });
  }
});

app.get('/author', (req, res) => {
  res.render('author', { user: user })
});

app.get('/', function (req, res) {
  console.log('user entered /');
  console.log('backenga kirish 2- qadam');
  console.log('databasega borish 3-qadam')

  db.collection('plans').find().toArray((err, data) => {
    if (err) {
      console.log(err);
      res.end('something went wrong');
    } else {
      console.log('database backendga qaytishi 4-qadam');
      console.log(data);
      console.log('backendan htmlni jonatish 5-qadam');
      res.render('reja', { items: data });
    }
  });
});

module.exports = app;


// Cluster => Db => Collection => Document => datasat 

// reqni ichidagi malumotlar nimalarni ozida ushlab turibdi?
// _id bu nima id bilan nima farqi bor?
// edit itemda biz valueni ozgartyapmiz id nixam ozgartradimi?
// $ set nimaga ishledi?
