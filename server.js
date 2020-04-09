'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello Roland Barcia, you rock !!!!!!  v 1.0.6 ');
});

app.listen(PORT, HOST);
console.log('Running on http://${HOST}:${PORT}');