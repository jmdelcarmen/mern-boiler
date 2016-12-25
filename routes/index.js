'use strict';
const mongoose = require('mongoose');

exports.home = (req, res) => {
  res.render('index');
}
