const mongoose = require('mongoose');
const { Schema } = mongoose;
const { User, ClassSchema } = require('../users/models.js');

/*
    * embedded schema transactions are atomic - no save() called on
    * an embedded document will reflect unless you call a save() on the 
    * parent document.
*/

const ClassSchema = new Schema({
    // name of the class
    name: String,
    // list of all the teachers in the class - all have a type of TEACHER
    teachers: [User],
    // list of all the students in the class - all have a type of STUDENT
    students: [User],
    // latest session - perhaps an ID?
    latest_session: String,
    // average attenance in this class
    average_attendance: Float,
    // report - don't re-fetch and recalc for status views
    latest_report: String,
    created: {type: Date, default: Date.now},
    active: {type: Boolean, default: false}
})


// method to get a class by its UID
ClassSchema.statics.getByUID = (UID) => {
    return new Promise((resolve, reject) => {

        mongoose.model('Class').findById(UID)
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

// method to get all the students
ClassSchema.statics.getAll = () => {
    return new Promise((resolve, reject) => {

        // blanket fetch all objects
        mongoose.model('Class').find({})
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

ClassSchema.statics.CreateOne = (proposed_class) => {

    return new Promise((resolve, reject) => {
        // Create a new Object from the `proposed_user` JSON.
        mongoose.model('User').create(proposed_user)
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

// function to add a student to a class
ClassSchema.statics.AddStudentToClass = async (student_id, class_id) => {

    const student_ref = await mongoose.model('User').findById(student_id);

}

var Class = mongoose.model('Class', ClassSchema);
module.exports = Class;

