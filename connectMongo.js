const mongoose = require('mongoose');

const DB_URL = process.env.DB_URL;

console.log(DB_URL);

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log('connect succ');
  })
  .catch(() => {
    console.log('connect err');
  });
