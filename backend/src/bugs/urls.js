const express = require('express');
const views = require('./views.js');

var BugRouter = express.Router();

BugRouter
    .get("/", views.getAllBugs)
    .get("/:id", views.getOneBug)
    .post("/", views.createBug)

module.exports = BugRouter;
