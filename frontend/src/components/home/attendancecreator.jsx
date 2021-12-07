import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';

const AttendanceCreator = (props) => (
  <div>
    <Formik
      initialValues={
        { 
          _id: props.classes[0]._id,
        }
      }
      onSubmit={(values, { setSubmitting }) => {
        axios.post('http://localhost:8000/classes/', values)
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
            {props.classes.map(class_i => {
              return <option 
              key={class_i._id} 
              value={class_i._id}
                > 
                 {class_i.name} 
              </option>
            })}
          </Field>
          <ErrorMessage name="_id" component="div" />

          <button className="std_btn" type="submit" disabled={isSubmitting}>
            Start A New Attendance Session
          </button>

        </Form>

      )}
    </Formik>
  </div>
);

export default AttendanceCreator;
