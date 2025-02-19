console.log('Server-side code running');

const express = require('express');
const app = express();
const http = require('http');
const path = require('path');

// Static fayllar uchun public papkani ko'rsatish
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// EJS ko'rinishini sozlash
app.set("views", "views");
app.set('view engine', 'ejs');

// Asosiy sahifa
app.get('/', (req, res) => {
    res.render('harid'); // index.ejs ni render qilish
});


app.post('/create-item', (req, res)=>{
    console.log(req.body);
    res.json({test: 'success'});
});

const server = http.createServer(app);
let PORT = 4000;
server.listen(PORT, function () {
    console.log('Server is running on PORT: ' + PORT);
});


// consolda korish
console.log(__dirname,"bu dirname yonalishi boladi");
console.log(path.join(__dirname, 'person' , "bu dirname person yonalishi boladi"));
app.use((req, res, next) => {
    console.log(`Requested route: ${req.originalUrl}`); // Qaysi route so'rov qilinganligini ko'rsatish
    next(); // Keyingi middleware'ga o'tish
});


