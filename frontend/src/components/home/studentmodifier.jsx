import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';

const UserModifier = (props) => (
  <div>
    <Formik
      initialValues={
        {
          _id: props.students[0]._id,
          name: '',
          SRN: '',
        }
      }
      onSubmit={(values, { setSubmitting }) => {
        var values2 = {name: values.name, SRN: values.SRN};
        var complete_url_update = 'http://localhost:8000/users/' + values._id;
        console.log(complete_url_update);
        axios.patch(complete_url_update, values2)
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

          <Field type="text" name="name" placeholder="Name of the New Student"/>
          <ErrorMessage name="name" component="div" />
          <Field type="text" name="SRN" placeholder="SRN of the New Student"/>
          <ErrorMessage name="SRN" component="div" />

          <button className="std_btn" type="submit" disabled={isSubmitting}>
            Modify Student
          </button>

        </Form>

      )}
    </Formik>
  </div>
);

export default UserModifier;


