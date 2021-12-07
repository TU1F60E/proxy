const express = require('express');
const views = require('./views.js');

// declare a new express Router
var ClassRouter = express.Router();

// map a route to a URL using this router
// we can also have parametric URLs
ClassRouter
    .get("/", views.getAllClasses)
    .post("/", views.createClass)
    .get("/:class_id", views.getOneClass)
    .patch("/:class_id", views.UpdateClass)
    .delete("/:class_id", views.DeleteClass)
    .post("/:class_id/add/:student_id", views.AddUserToClass) //

// make this router available to the outer world
module.exports = ClassRouter;