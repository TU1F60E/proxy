import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';

const BugCreator = () => (
  <div>
    <Formik
      initialValues={
        { 
          bug: '',
        }
      }
      onSubmit={(values, { setSubmitting }) => {
        axios.post('http://localhost:8000/bug-report/', values)
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

          <Field type="text" name="bug" placeholder="Issue faced"/>
          <ErrorMessage name="bug" component="div" />

          <button className="std_btn" type="submit" disabled={isSubmitting}>
            Bug report noted!
          </button>

        </Form>

      )}
    </Formik>
  </div>
);

export default BugCreator;