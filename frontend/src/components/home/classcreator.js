import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';

const ClassCreator = () => (
  <div>
    <Formik
      initialValues={
        { 
          name: '',
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

          <Field type="text" name="name" placeholder="Name of the New Class"/>
          <ErrorMessage name="name" component="div" />

          <button className="std_btn" type="submit" disabled={isSubmitting}>
            Create A New Class!
          </button>

        </Form>

      )}
    </Formik>
  </div>
);

export default ClassCreator;


