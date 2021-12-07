/*
    * The Views File is where we define the route handlers for each 
    * URL, as functions. We then register the functions we defined here
    * with a route and HTTP Verb, as found in the Routes file.
*/

const UserModel = require('../users/models.js');
const ClassModel = require('../classes/models.js');
const { Attendance } = require('./models.js')

function createSession(req, res) {
  Attendance.CreateOne(req.body)
    .then(response => {
      res.status(200).type('json').send(response);
    })
    .catch(error => {
      res.status(400).type('json').send(error);
    })
}

function getAllSessions(req, res) {
  // get all sessions
  Attendance.getAll()
    .then(response => {
      res.status(200).type('json').send(response);
    })
    .catch(error => {
      res.status(400).type('json').send(error);
    })
}

function MarkAttendance(req, res) {
  // mark the attendance of one student for one session
  var session_id = req.body.session_id;
  var student_id = req.body.student_id;

  Attendance.MarkAttendance(session_id, student_id)
    .then(response => {
      res.status(200).type('json').send(response);
    })
    .catch(error => {
      res.status(400).type('json').send(error);
    })
}

function UpdateAttendance(req, res) {

}

module.exports =  {
  createSession,
  getAllSessions,
  MarkAttendance,
  UpdateAttendance
}
