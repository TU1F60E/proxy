import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';

const UserCreator = () => (
  <div>
    <Formik
      initialValues={
        { 
          name: '',
          SRN: '',
        }
      }
      onSubmit={(values, { setSubmitting }) => {
        axios.post('http://localhost:8000/users/', values)
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

          <Field type="text" name="name" placeholder="Name of the New Student"/>
          <ErrorMessage name="name" component="div" />
          <Field type="text" name="SRN" placeholder="SRN of the New Student"/>
          <ErrorMessage name="SRN" component="div" />

          <button className="std_btn" type="submit" disabled={isSubmitting}>
            Create A New Class!
          </button>

        </Form>

      )}
    </Formik>
  </div>
);

export default UserCreator;


