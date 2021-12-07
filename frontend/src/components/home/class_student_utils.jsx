import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';

const ClassStudentUtils = (props) => (
  <div>
    <Formik
      initialValues={
        { 
          class_id: props.classes[0]._id,
          student_id: props.students[0]._id,
        }
      }
      onSubmit={(values, { setSubmitting }) => {
        var complete_url = `http://localhost:8000/classes/${values.class_id}/add/${values.student_id}`
        console.log(complete_url);
        axios.post(complete_url, values)
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

          <Field as="select" name="class_id">
            {props.classes.map(class_i => {
              return <option 
              key={class_i._id} 
              value={class_i._id}
                > 
                 {class_i.name} 
              </option>
            })}
          </Field>
          <ErrorMessage name="class_id" component="div" />

          <Field as="select" name="student_id">
            {props.students.map(class_i => {
              return <option 
              key={class_i._id} 
              value={class_i._id}
                > 
                 [{class_i.SRN}] {class_i.name} 
              </option>
            })}
          </Field>
          <ErrorMessage name="student_id" component="div" />

          <button className="std_btn" type="submit" disabled={isSubmitting}>
            Add A Student to this class!
          </button>

        </Form>
      )}
    </Formik>
  </div>
);

export default ClassStudentUtils;
