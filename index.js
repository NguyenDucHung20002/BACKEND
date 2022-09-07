require('dotenv').config();
require('./connectMongo');

const express = require('express');
const cors = require('cors');

// routes
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());

// app.use(function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// });

app.use(cors());
app.use('/api/v1', userRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});
