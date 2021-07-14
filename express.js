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
    

    request(`https://artii.herokuapp.com/make?text=${req.body}`, (err, response, body) => {
        res.send(body);
    });

});

const PORT = process.env.PORT || 3002;

app.listen(PORT);


