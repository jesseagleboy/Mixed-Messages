const express = require('express');
const request = require('request');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(express.text());
app.use(cors());

app.use('/', express.static('.'), (req, res, next) => {
    next();
});

app.post('/asciiart', (req, res, next) => {
    console.log(req.body);
    res.send(`https://artii.herokuapp.com/make?text=${req.body}`);


});

const PORT = process.env.PORT || 3002;

app.listen(PORT);


