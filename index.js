const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./src/router/router');
const app = express();

const port = 3001;

require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.header('Access-Control-Allow-Methods','POST, GET, PUT, PATCH, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers','Content-Type, Option, Authorization')
  return next()
});

app.use('/', router);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});