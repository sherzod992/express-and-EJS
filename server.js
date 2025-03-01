const http = require('http') // http core modulini yuklaymiz
const mongodb = require('mongodb') // mongo db 

let db
const connectionString =
    'mongodb+srv://sherzod:OWg9XKSI7d8BBNVW@cluster0.pwocx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
// connection string
// mongodb connect faqa mongo dbni ulash uchun ishlatiladi
mongodb.connect(
    connectionString,
    {
        useNewUrlParser: true, // eski versiyalarda ishlatilgan 
        useUnifiedTopology: true,
    },
    (err, client) => {
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

            let PORT = 3000 // Server ishlaydigan port
            server.listen(PORT, function () {
                console.log(
                    `Server muvaffaqiyatli ishga tushdi! Port: ${PORT}, http://localhost:${PORT}`
                );
            })
        }
    }
);
