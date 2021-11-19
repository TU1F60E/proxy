const express = require('express');
const views = require('./views.js');

// declare a new express Router
var ClassRouter = express.Router();

// map a route to a URL using this router
// we can also have parametric URLs
ClassRouter
    .get("/", views.getAllClasses)
    .get("/:class_id", views.getOneClass)
    .post("/:class_id/addstudent", views.AddUserToClass)
    .post("/", views.createClass)

// make this router available to the outer world
module.exports = ClassRouter;


