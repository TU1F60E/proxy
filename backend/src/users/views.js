/*
    * The Views File is where we define the route handlers for each 
    * URL, as functions. We then register the functions we defined here
    * with a route and HTTP Verb, as found in the Routes file.
*/
const { User } = require('./models.js');
const bodyparser = require('body-parser');

function getAllUsers(req, res)
{
    User.getAll()
        .then(response => {
            res.type('json').send(response);
        })
}

function getOneUser(req, res)
{
    res.send("Single User!");
}

function createUser(req, res)
{
    // parse the request body to get the user information
    // console.log(req.body);

    User
        .CreateOne(req.body)
        .then(response => {
            res.type('json').send(response)
        })
        .catch(error => {
            res.type('json').send(error)
        })
}

module.exports =  {
    getAllUsers,
    getOneUser,
    createUser,
}
