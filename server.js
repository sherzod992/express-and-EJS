const { MongoClient } = require("mongodb");

// MongoDB connection string
const connectingString = "mongodb+srv://sherzodbek:79Zm266pdcwnsdSR@cluster0.lfh2h.mongodb.net/Reja?retryWrites=true&w=majority";

// MongoDB connection
MongoClient.connect(connectingString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(client => {
        console.log("db: connected successfully");
        const db = client.db();
        const PORT = 3000;
        const app = require("./app");
        const server = require("http").createServer(app);
        server.listen(PORT, () => {
            console.log(`server: this app is running on port: ${PORT} http://localhost:${PORT}`);
        });
    })
    .catch(error => {
        console.log("Error connecting to MongoDB:", error);
    });
