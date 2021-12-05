/*
    * The Views File is where we define the route handlers for each 
    * URL, as functions. We then register the functions we defined here
    * with a route and HTTP Verb, as found in the Routes file.
*/
const UserModel = require('../users/models.js');
const ClassModel = require('./models.js');

const bodyparser = require('body-parser');

function getAllClasses(req, res)
{
    ClassModel.getAll()
        .then(response => {
            res.status(200).type('json').send(response);
        })
        .catch(error => {
            res.status(400).type('json').send(error);
        })
}

function getOneClass(req, res)
{
    var class_id = req.params.class_id;
    ClassModel.getByUID(class_id)
        .then(response => {
            res.status(200).type('json').send(response);
        })
        .catch(error => {
            res.status(400).type('json').send(error);
        })
}

function createClass(req, res)
{
    // parse the request body to get the user information
    // console.log(req.body);

    ClassModel
        .CreateOne(req.body)
        .then(response => {
            res.status(400).type('json').send(response)
        })
        .catch(error => {
            res.status(400).type('json').send(error)
        })
}

// function to add a user to a class
function AddUserToClass(req, res)
{
    // find the user id and the class ID
    var class_id = req.params.class_id;
    var student_id = req.body.student_id;
    console.log(class_id, student_id)

    ClassModel
        .AddStudentToClass(student_id, class_id)
        .then(response => {
            res.status(200).type('json').send(response)
        })
        .catch(error => {
            res.status(400).type('json').send(error)
        })
}

module.exports =  {
    getAllClasses,
    getOneClass,
    createClass,
    AddUserToClass,
}
