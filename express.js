const express = require('express');
const app = express();

app.use('/', express.static('.'));

const PORT = 3002;

app.listen(PORT);


