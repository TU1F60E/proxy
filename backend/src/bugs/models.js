const mongoose = require('mongoose');
const { Schema } = mongoose;

const BugSchema = new Schema({
    name: String,
    bugs: String,
    created: {type: Date, default: Date.now},
    active: {type: Boolean, default: false}
}) 

BugSchema.statics.getByUID = (UID) => {
    return new Promise((resolve, reject) => {

        mongoose.model('Bug').findById(UID)
            .then(response => {
                console.log("Successful! Repsonse => ", response);
                resolve(response);
            })
            .catch(error => {
                console.error("Error! => ", error);
                reject(error);
            })

    })
}

// method to get all the bugs
BugSchema.statics.getAll = () => {
    return new Promise((resolve, reject) => {

        mongoose.model('Bug').find({}).lean()
            .then(response => {
                console.log("Successful! Repsonse => ", response);
                resolve(response);
            })
            .catch(error => {
                console.error("Error! => ", error);
                reject(error);
            })

    })
}

BugSchema.statics.CreateOne = (proposed_bug) => {

    return new Promise((resolve, reject) => {
        mongoose.model('Bug').create(proposed_bug)
            .then(response => {
                console.log("Successful! Repsonse => ", response);
                resolve(response);
            })
            .catch(error => {
                console.error("Error! => ", error);
                reject(error);
            })
    })
}

var Bug = mongoose.model('Bug', BugSchema);
module.exports = Bug;