const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');

const UserRouter = require('./users/urls.js');
const ClassRouter = require('./classes/urls.js');

const {
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_HOSTNAME,
  MONGO_PORT,
  MONGO_DB,
  MONGO_CONNECTION_URL
} = process.env;

const options = {
  useNewUrlParser: true,
  connectTimeoutMS: 10000,
};

const url = MONGO_CONNECTION_URL;

mongoose.connect(url, options)
    .then(function() {
        console.log('MongoDB is connected');
    })
    .catch(function(err) {
        console.log(err);
    });

const port = 8000
const app = express();

app.use(cors());
// BODY PARSERS - basic input sanitization as HTTP request middleware.
// parse application/x-www-form-urlencoded
app.use(bodyparser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyparser.json())


// ROUTE REGISTRATION
app.use('/users', UserRouter);
app.use('/classes', ClassRouter);

app.listen(port, () => {
  console.log(`Example app is now listening on http://localhost:${port}`)
})

