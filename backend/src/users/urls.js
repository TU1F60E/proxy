const express = require('express');
const views = require('./views.js');

// declare a new express Router
var UserRouter = express.Router();

// map a route to a URL using this router
// we can also have parametric URLs
UserRouter
    .get("/", views.getAllUsers)
    .post("/", views.createUser)
    .get("/:user_id", views.getOneUser)
    .patch("/:user_id", views.updateOneUser)
    .delete("/:user_id", views.deleteOneUser)

// make this router available to the outer world
module.exports = UserRouter;


