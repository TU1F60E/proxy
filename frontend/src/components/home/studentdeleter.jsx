import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';

const UserDeleter = (props) => (
  <div>
    <Formik
      initialValues={
        {
          _id: props.students[0]._id,
        }
      }
      onSubmit={(values, { setSubmitting }) => {
        var complete_url_update = 'http://localhost:8000/users/' + values._id;
        console.log(complete_url_update);
        axios.delete(complete_url_update)
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
          <Field as="select" name="_id">
            {props.students.map(student => {
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
            Delete Student
          </button>

        </Form>

      )}
    </Formik>
  </div>
);

export default UserDeleter;


