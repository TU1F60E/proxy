import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';

function AttendanceMarker(props) {
    var students = props.students;
    var attendance = props.attendance;
    return <>
    {students  && attendance && 

        <Formik
          initialValues={
            { 
              student_id: '',
              session_id: '',
            }
          }
          onSubmit={(values, { setSubmitting }) => {
            axios.post('http://localhost:8000/attendance/mark', values)
              .then(response => {
                console.log(response);
              })
              .catch(error => {
                console.log(error);
              })
          }}
        >
          {({ isSubmitting }) => (
            <Form>

              <Field as="select" name="session_id">
                {attendance.map(student => {
                  return <option 
                  key={student._id} 
                  value={student._id}
                    > 
                    {student.class} ({student.created})
                  </option>
                })}
              </Field>
              <ErrorMessage name="_id" component="div" />

              <Field as="select" name="student_id">
                {students.map(student => {
                  return <option 
                  key={student._id} 
                  value={student._id}
                    > 
                    [{student.SRN}] {student.name} 
                  </option>
                })}
              </Field>
              <ErrorMessage name="_id" component="div" />

              <button className="std_btn" type="submit" disabled={isSubmitting}>
                Mark Attendance!
              </button>

            </Form>

          )}
        </Formik>
      }
    </>
}

export default AttendanceMarker;
