/*
    * The Views File is where we define the route handlers for each 
    * URL, as functions. We then register the functions we defined here
    * with a route and HTTP Verb, as found in the Routes file.
*/
const { User } = require('./models.js');
const bodyparser = require('body-parser');

var UserModel = User;

function getAllUsers(req, res)
{
    UserModel.getAll()
        .then(response => {
            res.type('json').send(response);
        })
}

function getOneUser(req, res)
{
    var user_id = req.params.user_id;
    UserModel.getByUID(user_id)
        .then(response => {
            res.status(200).type('json').send(response);
        })
        .catch(error => {
            res.status(400).type('json').send(error);
        })
}

function deleteOneUser(req, res)
{
    var user_id = req.params.user_id;
    UserModel.DeleteByUID(user_id)
        .then(response => {
            res.status(200).type('json').send(response);
        })
        .catch(error => {
            res.status(400).type('json').send(error);
        })
}

function updateOneUser(req, res) {
  // function to update one user
  // var user_id = req.params.user_id;
  // var update_info = req.body;
  console.log("In the update method now..");
  console.log(req.params.user_id, req.body);
  UserModel.updateOne(
    req.params.user_id, 
    req.body,
    options = {returnDocument: 'after'},
  )
    .then(response => {
      res.status(200).type('json').send(response)
    })
    .catch(error => {
      res.status(400).type('json').send(error)
    })
}

function createUser(req, res)
{
    // parse the request body to get the user information
    // console.log(req.body);

    UserModel
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
    updateOneUser,
    deleteOneUser,
}
