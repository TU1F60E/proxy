import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';

const ClassUpdater = (props) => (
  <div>
    <Formik
      initialValues={
        {
          _id: props.classes[0]._id,
          name: '',
        }
      }
      onSubmit={(values, { setSubmitting }) => {
        var values2 = {name: values.name};
        var complete_url_update = 'http://localhost:8000/classes/' + values._id;
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

          <Field type="text" name="name" placeholder="Name of the Class"/>
          <ErrorMessage name="name" component="div" />

          <button className="std_btn" type="submit" disabled={isSubmitting}>
            Modify Class
          </button>

        </Form>

      )}
    </Formik>
  </div>
);

export default ClassUpdater;


