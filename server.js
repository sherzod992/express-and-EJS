const http = require("http");
const mongodb = require("mongodb");

//mongo db connection
let db;
const MONGO_URL =
    "mongodb+srv://sherzodbek:79Zm266pdcwnsdSR@cluster0.lfh2h.mongodb.net/Reja?retryWrites=true&w=majority";

//using connect function of mongo db

mongodb.connect(
    MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (error, client) => {
        if (error) {
            console.log(error);
        } else {
            const PORT = 3000;
            console.log("db:connected succesfully");
            module.exports = client;
            const app = require("./app");
            const server = http.createServer(app);
            server.listen(PORT, () => {
                console.log(`server: this app is running in port: ${PORT} `);
            });
        }
    }
);