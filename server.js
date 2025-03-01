const http = require('http') // HTTP server yaratish uchun kerakli modulni chaqiramiz
const mongodb = require('mongodb') // MongoDB bilan ishlash uchun modulni yuklaymiz

let db // MongoDB ulanishini saqlash uchun o'zgaruvchi

const connectionString =
    'mongodb+srv://sherzod:OWg9XKSI7d8BBNVW@cluster0.pwocx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
// MongoDB Atlas serveriga ulanish uchun connection string

mongodb.connect(
    connectionString,
    {
        useNewUrlParser: true, // Yangi parserni ishlatish (eski versiyalar uchun)
        useUnifiedTopology: true, // Yangi topology dvijogini ishlatish (yangi versiyalar uchun)
    },
    (err, client) => {
        if (err) console.log('MongoDB ulanishida xatolik yuz berdi')
        // Agar MongoDB ulanishida muammo bo'lsa, xatolikni konsolga chiqaramiz
        else {
            console.log('MongoDB muvaffaqiyatli ulandi')
            // Ulanish muvaffaqiyatli bo'lsa, konsolga xabar chiqaramiz
            module.exports = client
            // MongoDB ulanishini boshqa fayllarda ishlatish uchun eksport qilamiz

            const app = require('./app')
            // Express.js yoki boshqa backend logikasi joylashgan 'app.js' faylini yuklaymiz

            const server = http.createServer(app)
            // HTTP server yaratamiz va unga 'app' (Express yoki boshqa framework) ni ulaymiz

            let PORT = 3000 // Server ishlaydigan port
            server.listen(PORT, function () {
                console.log(
                    `Server muvaffaqiyatli ishga tushdi! Port: ${PORT}, http://localhost:${PORT}`
                )
                // Server ishga tushganini va qaysi portda ekanligini konsolga chiqaramiz
            })
        }
    }
)

// RDBMS - Ma'lumotlarni jadval (tablisa) shaklida saqlovchi tizim

// NoSQL - Relatsion bo'lmagan, katta hajmdagi ma'lumotlarni yuqori tezlikda saqlashga mo'ljallangan ma'lumotlar bazasi

// RDBMS (Relational Database Management System) - Relatsion ma'lumotlar bazasi boshqaruv tizimi
