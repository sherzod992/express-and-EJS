const http = require('http');
const mongodb = require('mongodb');

let db;
const connectionString =
    'mongodb+srv://sherzod:OWg9XKSI7d8BBNVW@cluster0.pwocx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongodb.connect(
    connectionString,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err, client) => {
        if (err) console.log('ERROR on connection MongoDB');
        else {
            console.log('databasega mufavvaqiyatli ulandi');
            module.exports = client;
            const app = require('./app');
            const server = http.createServer(app);
            let PORT = 3000;
            server.listen(PORT, function () {
                console.log(
                    `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
                );
            });
        }
    }
);
