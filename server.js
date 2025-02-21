console.log('Web serverni boshlash');

const express = require('express');
const app = express();
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
app.use(express.urlencoded({ extended: true }));

// EJS ko'rinishini sozlash
app.set("views", "views");
app.set('view engine', 'ejs');

app.post('/create-item', (req, res)=>{
});
app.get("/author", (req, res) => {
    res.render('author', {user: user});
});

app.get('/', (req, res) => {
    res.render('harid'); // index.ejs ni render qilish
});


const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
    console.log('Server is running on PORT: ' + PORT);
});
