const express = require('express');
var bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json());

const port = 3004;

app.get('/', (req, res) => {
    //req es la peticion
    //res es la respuesta
    console.log(res)
    res.status(200).send('Hello World!');
});

app.listen(port, () => {
    console.log('Server started at port 3004');
});
