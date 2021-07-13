const express = require('express');
const request = require('request');
const app = express();

app.use(express.json());

app.use('/', express.static('.'), (req, res, next) => {
    next();
});

const PORT = process.env.PORT || 3002;

app.listen(PORT);


