const express = require('express');
const app = express();
const https = require('https');
const fs = require('fs');
var privateKey = fs.readFileSync('./localhost-key.pem');
var certificate = fs.readFileSync('./localhost.pem');

app.use('/', express.static('.'));

const PORT = 3002;

https.createServer({key: privateKey, cert: certificate}, app).listen(PORT);


