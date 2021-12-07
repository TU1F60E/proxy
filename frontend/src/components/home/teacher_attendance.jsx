import { useState, useEffect } from 'react';
import axios from 'axios';

import Modal from '../utils/modal.js'
import Hero from '../utils/hero.jsx';
import AttendanceCreator from './attendancecreator.jsx'


export default function TeacherAttendanceControl(props) {

  var [att_sessions, setAttSessions] = useState();
  var [classes, setClasses] = useState();
  var [error, setError] = useState([]);

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

  function fetchAttendance() {
      // fetch data on component render
      axios.get("http://localhost:8000/attendance/")
        .then(response => {
          // console.log(response);
          console.log("fetching data...");
          setAttSessions(response.data);
        })
        .catch(error => {
          setClasses([]);
          setError(error);
        })
  }

  function refresh() {
    // fetchAttendance();
    fetchClasses();
  }

  useEffect(() => {
    refresh();
  }, [])

  return <>
    <Hero title="Attendance Control Panel" className="border border-green-500">

        <div className="button-row flex flex-wrap justify-items-stretch w-full">

            <Modal 
              classname="p-3 m-3 flex-grow w-full " 
              buttonName="Initiate Attenance Session" 
              title="New Session for Attendance" 
              header_icon="home" 
              button_icon="shield"
            >
            {
              // create user
            }
              <AttendanceCreator classes={classes}/>
          </Modal>

        <button className="std_btn" onClick={refresh}> Refresh  </button>

        </div>

        <br/>

          <div className="AttendanceSessionViewer">

          </div>

    </Hero>
  </>
}

