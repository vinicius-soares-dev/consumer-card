const express = require('express');
const app = express();
const PORT = 3333 || process.env.PORT;
const routes = require('./routes/routes');


app.use(express.json());

app.use(routes);

app.listen(PORT, () => {
    console.log('server initialized: http://localhost:3333');
});