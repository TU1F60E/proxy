const BugModel = require('../bugs/models.js');

const bodyparser = require('body-parser');

function getAllBugs(req, res)
{
    BugModel.getAll()
        .then(response => {
            res.status(200).type('json').send(response);
        })
        .catch(error => {
            res.status(400).type('json').send(error);
        })
}

function getOneBug(req, res)
{
    var bug_id = req.params.bug_id;
    BugModel.getByUID(bug_id)
        .then(response => {
            res.status(200).type('json').send(response);
        })
        .catch(error => {
            res.status(400).type('json').send(error);
        })
}

function createBug(req, res)
{
        
    BugModel
        .CreateOne(req.body)
        .then(response => {
            res.status(200).type('json').send(response)
        })
        .catch(error => {
            res.status(400).type('json').send(error)
        })
}

module.exports =  {
    getAllBugs,
    getOneBug,
    createBug,
}