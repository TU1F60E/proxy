const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

const UserRouter = require('./users/urls.js');

const {
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_HOSTNAME,
  MONGO_PORT,
  MONGO_DB
} = process.env;

const options = {
  useNewUrlParser: true,
  connectTimeoutMS: 10000,
};

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

mongoose.connect(url, options)
    .then(function() {
        console.log('MongoDB is connected');
    })
    .catch(function(err) {
        console.log(err);
    });

const port = 8000
const app = express();

// BODY PARSERS - basic input sanitization
// parse application/x-www-form-urlencoded
app.use(bodyparser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyparser.json())


// ROUTE REGISTRATION
app.use('/users', UserRouter);

app.listen(port, () => {
  console.log(`Example app is now listening on http://localhost:${port}`)
})

