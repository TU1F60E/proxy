/*
    * The `models.js` File for each app is where we define the
    * structure of the Data and some associated Convenience Methods
    * for the same.
*/


const mongoose = require('mongoose');
const { Schema } = mongoose;

/*
 * Schema Definition: Defining the Data Model for everything.
 * This is how each Document in our MongoDB Collection will be stored.
 *
 */

const UserSchema = new Schema({
    name: String,
    SRN: String,
    created: {type: Date, default: Date.now},
    active: {type: Boolean, default: false}
})


/*
 * Custom Methods and Middleware - 
 * These are convenience methods we can define ourselves, similar to Setters, Getters
 * and other such nice-to-have methods.
 *
 */

// method to get a student by their UID
UserSchema.statics.getByUID = (UID) => {
    return new Promise((resolve, reject) => {

        mongoose.model('User').findById(UID)
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
UserSchema.statics.getAll = () => {
    return new Promise((resolve, reject) => {

        // blanket fetch all objects
        mongoose.model('User').find({})
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

// method to create a single student from JSON, can be easily modified
// to create 
UserSchema.statics.CreateOne = (proposed_user) => {
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


var User = mongoose.model('User', UserSchema);
module.exports = User;

