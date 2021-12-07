import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';

const BugCreator = () => (
  <div>
    <Formik
      initialValues={
        { 
          bugs: '',
        }
      }
      onSubmit={(values, { setSubmitting }) => {
        console.log(values)
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

          <Field type="text" name="bugs" placeholder="Issue faced"/>
          <ErrorMessage name="bugs" component="div" />

          <button className="std_btn" type="submit" enabled={isSubmitting}>
            Submit
          </button>

        </Form>

      )}
    </Formik>
  </div>
);

export default BugCreator;