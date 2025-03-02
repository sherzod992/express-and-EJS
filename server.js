// http va db modullarini chaqiramiz http core mongodb express

const http = require('http') // http core modulini yuklaymiz
const mongodb = require('mongodb') // mongo db -

let db // dbni global qilib ochamiz
const connectionString =
    'mongodb+srv://sherzod:OWg9XKSI7d8BBNVW@cluster0.pwocx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
// string ichiga mongo db urlni joylemiz
// mongodb connect faqa mongo dbni ulash uchun ishlatiladi
mongodb.connect(
    connectionString, // tepadagi url
    {
        useNewUrlParser: true, // eski versiyalarda ishlatilgan 
        useUnifiedTopology: true,
    },
    (err, client) => { // error yoki client 
        if (err) console.log('MongoDB ulanishida xatolik yuz berdi')
        // err = error (xatolik)
        else {
            console.log('MongoDB muvaffaqiyatli ulandi')
            // Ulanish muvaffaqiyatli bo'lsa, konsolga xabar chiqaramiz
            module.exports = client
            // MongoDB ulanishini boshqa fayllarda ishlatish uchun eksport qilamiz

            const app = require('./app');

            const server = http.createServer(app);
            // http yaratish

            let PORT = process.env.PORT || 3000 // Server ishlaydigan port
            server.listen(PORT, function () { // port ikkitadan bittasi ochiladi 
                console.log(
                    `Server muvaffaqiyatli ishga tushdi! Port: ${PORT}, http://localhost:${PORT}`
                );
            })
        }
    }
);
