console.log('Server-side code running');
// npm install express 
const express = require('express');
const http = require('http');

const app = express(); // express objekti app o'zgaruvchisiga joylanadi
// expressga oid kodlar yoziladi
app.use(express.static('public')); // public papkasidagi fayllarni serverga joylash uchun
app.use(express.json()); // json fayllarini serverga joylash uchun
app.use(express.urlencoded({ extended: true })); // urlencoded fayllarini serverga joylash uchun

app.set("views", "views"); // views papkasini serverga joylash uchun
app.set('view engine', 'ejs'); // ejs fayllarini serverga joylash uchun


app.get('/', (req, res) => {
    res.end('<h1 style="background:red">Hello World</h1>'); // HTML ichidagi qo'shtirnoqlarni to'g'ri yozish
});


const server = http.createServer(app); // serverni yaratamiz
let PORT = 3000;

server.listen(PORT, function () {
    console.log('Server is running on PORT: ' + PORT);
});
