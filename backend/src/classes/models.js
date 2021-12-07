const mongoose = require('mongoose');
const { Schema } = mongoose;
const { User, UserSchema } = require('../users/models.js');

/*
    * embedded schema transactions are atomic - no save() called on
    * an embedded document will reflect unless you call a save() on the 
    * parent document.
*/

const ClassSchema = new Schema({
    // name of the class
    name: String,
    // list of all the teachers in the class - all have a type of TEACHER
    // teachers: [UserSchema],
    // list of all the students in the class - all have a type of STUDENT
    // instead of storing the Entire student, just store the ID
    students: [Schema.Types.ObjectId],
    // latest session - perhaps an ID?
    latest_session: String,
    // average attenance in this class
    average_attendance: Number,
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
        mongoose.model('Class').find({}).lean()
            .then(response => {
                console.log("Successful! Repsonse => ", response);
                // hydrate the response student fields with their objects
                var i = 0;
                for (i = 0; i < response.students.length; i++){
                  // fetch the user object
                  // response.students[i] = 
                }
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
        mongoose.model('Class').create(proposed_class)
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
ClassSchema.statics.AddStudentToClass = (student_id, class_id) => {

    return new Promise((resolve, reject) => {
        mongoose.model('Class').findById(class_id)
            .then(class_instance => {
                // now find the student
                mongoose.model('User').getByUID(student_id)
                    .then(student_response => {
                        class_instance.students.push(student_response._id);
                        class_instance.save()
                        resolve(class_instance)
                    })
                    .catch(error => {
                        console.error(error);
                        reject({"Error": "User Not Found!"});
                    })
            })
            .catch(error => {
                reject({"Error": "Class Not Found!"});
            })
    })
}

// method to delete a user by the UID
ClassSchema.statics.DeleteClass = (UID) => {
    return new Promise((resolve, reject) => {
        mongoose.model('Class').findByIdAndDelete(UID)
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

// method to update by the UID
ClassSchema.statics.UpdateClass = (UID, data) => {
    return new Promise((resolve, reject) => {
        mongoose.model('Class').findByIdAndUpdate(UID, data)
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


var Class = mongoose.model('Class', ClassSchema);
module.exports = Class;

