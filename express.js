const express = require('express');
const request = require('request');
const app = express();

app.use(express.json());

app.use('/', express.static('.'), (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/quote', (req, res, next) => {
    request(
        {url: 'https://zenquotes.io/api/quotes'},
        (error, response, body) => {
            if (error) {
                console.log('Error');
            }
            res.json(JSON.parse(body));
        }
    );
});

app.post('/ascii', (req, res, next) => {
    console.log(req.body.text);
    request(
        {url: `https://artii.herokuapp.com/make?text=${req.body.text}`},
        (error, response, body) => {
            if (error) {
                console.log(error);
            }
            res.send(body);
        }
    );
});

const PORT = process.env.PORT || 3002;

app.listen(PORT);


