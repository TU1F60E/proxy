
/*
  * The `models.js` File for each app is where we define the
  * structure of the Data and some associated Convenience Methods
  * for the same.
  */

  const mongoose = require('mongoose');
const { Schema } = mongoose;
const ClassModel  = require('../classes/models.js')


/*
  * Schema Definition: Defining the Data Model for everything.
  * This is how each Document in our MongoDB Collection will be stored.
  *
  */

  const AttendanceSchema = new Schema({
    class: String,
    class_id: Schema.Types.ObjectId,
    attendance: {
      type: Map,
      of: {type: Boolean, default: false}
    },
    created: {type: Date, default: Date.now},
    elapsed: {type: Boolean, default: false}
  })


/*
  * Custom Methods and Middleware - 
  * These are convenience methods we can define ourselves, similar to Setters, Getters
  * and other such nice-to-have methods.
  *
  */

  // method to get a student by their UID
AttendanceSchema.statics.getByUID = (UID) => {
  return new Promise((resolve, reject) => {

    mongoose.model('Attendance').findById(UID)
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

// method to delete a user by the UID
AttendanceSchema.statics.DeleteByUID = (UID) => {
  return new Promise((resolve, reject) => {
    mongoose.model('Attendance').findByIdAndDelete(UID)
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
AttendanceSchema.statics.updateOne = (UID, data) => {
  return new Promise((resolve, reject) => {
    mongoose.model('Attendance').findByIdAndUpdate(UID, data)
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
AttendanceSchema.statics.getAll = () => {
  return new Promise((resolve, reject) => {

    // blanket fetch all objects
    mongoose.model('Attendance').find({})
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

AttendanceSchema.statics.CreateOne = (proposed_session) => {
  // Create a new Object from the `proposed_user` JSON.
    return new Promise(async (resolve, reject) => {

      // generate the attendance map for the class
      // fetch the class name first
      console.log(proposed_session.class_id)
      var myclass = await ClassModel.getByUID(proposed_session.class_id);

      proposed_session.class = myclass.name;
      proposed_session.attendance = {};

      // iterate through all students to generate attendance records
      for (const sid of myclass.students) {
        console.log("Assigning ", sid);
        proposed_session.attendance[sid] = false;
      }

      console.log("proposed session >> ", proposed_session);

      mongoose.model('Attendance').create(proposed_session)
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

AttendanceSchema.statics.MarkAttendance = async (session_id, student_id) => {
  console.log(session_id, student_id);
  return new Promise(async (resolve, reject) => {

    mongoose.model('Attendance').findById(session_id)
      .then(attendance_session => {
        console.log("fetched")
        // mark the particular student as present
        console.log('fetched session', attendance_session);
        attendance_session.attendance.set(student_id, true);
        attendance_session.elapsed = false;
        attendance_session.save();
        resolve(attendance_session);
      })
      .catch(error => {
        reject(error);
      })

  })
}


var Attendance = mongoose.model('Attendance', AttendanceSchema);

module.exports = {
  Attendance: Attendance,
  AttendanceSchema: AttendanceSchema
}

