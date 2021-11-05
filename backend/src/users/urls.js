const express = require('express');
const views = require('./views.js');

// declare a new express Router
var UserRouter = express.Router();

// map a route to a URL using this router
// we can also have parametric URLs
UserRouter
    .get("/", views.getAllUsers)
    .get("/:id", views.getOneUser)
    .post("/", views.createUser)

// make this router available to the outer world
module.exports = UserRouter;


