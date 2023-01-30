const express = require('express');
const app = express();

// node não estava lendo as variáveis de ambiente, então essa linha de código solucionou esse problema
require('dotenv').config({ debug: true });


const PORT = 3333 || process.env.PORT;
const routes = require('./routes');

const mongoose = require('mongoose');
mongoose.set("strictQuery", true);
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.hwtwwj5.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        console.log('connected database');
    })
    .catch((e) => {
        console.log('error when trying to connect to the database' + e);
    });



app.use(express.json());

app.use(routes);

app.listen(PORT, () => {
    console.log('server initialized: http://localhost:3333');
});