import { useState, useEffect } from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import Modal from '../utils/modal.js'
import Hero from '../utils/hero.jsx';
import ClassCreator from './classcreator'
import ClassUpdater from './class_updator.js'
import ClassDeleter from './class_deleter.jsx'
import ClassStudentUtils from './class_student_utils'

import StudentTableView from '../utils/student_table.jsx';
import ClassTableView from '../utils/class_table.jsx';

function ClassRow(props) {

  var [showChild, setShowChild] = useState(false);

  function toggleShowChild() {
    setShowChild(!showChild);
  }

  return <>
        <div> 
        <p className="text-2xl p-3 m-5 text-blue-500 rounded shadow-sm underline" onClick={toggleShowChild}> {props.class_in.name}</p>
    {(props.class_in.students.length > 0 && showChild) && <StudentTableView students={props.class_in.students}/>}
        </div>
  </>
}

function ClassTableViewLocal(props) {
  // render the list of User IDs in a Modal for this class

  return <>
  <div className="class_list flex flex-col">
    {props.classes.map((i, pclass) => {
      return <ClassRow class_in={i} key={i._id} />
    }) }
  </div>
  </>
}

export default function ClassManager(props) {

  var [classes, setClasses] = useState();
  var [students, setStudents] = useState();
  var [error, setError] = useState([]);
  
  useEffect(() => {
    fetchClasses();
    fetchStudents();
  }, [])

  function fetchClasses() {
      // fetch data on component render
      axios.get("http://localhost:8000/classes/")
        .then(response => {
          // console.log(response);
          console.log("fetching data...");
          setClasses(response.data);
        })
        .catch(error => {
          setClasses([]);
          setError(error);
        })
  }

  function fetchStudents() {
      // fetch data on component render
      axios.get("http://localhost:8000/users/")
        .then(response => {
          // console.log(response);
          console.log("fetching data...");
          setStudents(response.data);
        })
        .catch(error => {
          setStudents([]);
          setError(error);
        })
  }

  function refresh() {
    fetchStudents();
    fetchClasses();
  }

  return <>
    <Hero title="Classes" className="border border-green-500">

        <div className="button-row flex flex-wrap justify-items-stretch w-full">

            <Modal 
              classname="p-3 m-3 flex-grow w-full " 
              buttonName="Create Class" 
              title="create a new class" 
              header_icon="home" 
              button_icon="shield"
            >
              {
                  // class creation logic goes here
              }
              <ClassCreator/>
          </Modal>

            <Modal 
              classname="p-3 m-3 flex-grow w-full" 
              buttonName="Modify a Class" 
              title="Modify an Existing Class" 
              header_icon="home" 
              button_icon="pluscircle"
            >
              {
                  // class update/deletion logic goes here
              }
              <ClassUpdater classes={classes}/>
          </Modal>


            <Modal 
              classname="p-3 m-3 flex-grow w-full" 
              buttonName="Add A Student to a class" 
              title="Add a Student to a Class" 
              header_icon="home" 
              button_icon="pluscircle"
            >
              {
                  // class update/deletion logic goes here
              }
            <ClassStudentUtils classes={classes} students={students} />
          </Modal>

          <Modal 
            classname="p-3 m-3 flex-grow w-full" 
            buttonName="Delete a Class" 
            title="Delete a Class" 
            header_icon="home" 
            button_icon="pluscircle"
          >
            {
                // class update/deletion logic goes here
            }
          <ClassDeleter classes={classes}/>
        </Modal>

          <button className="std_btn" onClick={refresh}> Refresh </button>

        </div>
        <br/>
          {
            classes && 
            <ClassTableViewLocal classes={classes} />
          }
    </Hero>
  </>
}
