const express = require('express');
const views = require('./views.js');

// declare a new express Router
var AttendanceRouter = express.Router();

// map a route to a URL using this router
// we can also have parametric URLs

AttendanceRouter
  .get("/", views.getAllSessions)      // get all attendance session data
  .post("/", views.createSession)      // create a new attendance session
  .post("/mark", views.MarkAttendance)  // save the attendance data for a 
  .patch("/:session_id/update", views.UpdateAttendance)  // save the attendance data for a 

// make this router available to the outer world
module.exports = AttendanceRouter;


