'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const path = require('path');
const mongoose = require('mongoose');

const app = express();

//connecting to mongodb
mongoose.connect("mongodb://localhost/mern");
const index = require('./routes/index');


app.set('view engine', 'jade');
app.set(express.static(path.join(__dirname, '/client')));

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.get('/', index.home);

app.listen( port, () => {
  console.log(`Server is servering on port ${port}`);
});
