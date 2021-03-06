import { useState, useEffect } from 'react';
import axios from 'axios';

import Modal from '../utils/modal.js'
import Hero from '../utils/hero.jsx';
import AttendanceCreator from './attendancecreator.jsx'

function AttRow(props) {

  var [showChild, setShowChild] = useState(false);

  function toggleShowChild() {
    setShowChild(!showChild);
  }

  return <>
        <div> 
        <p className="text-2xl p-3 m-5 text-blue-500 rounded shadow-sm underline" onClick={toggleShowChild}> {`${props.att_session.class} (${props.att_session.created})`}</p>
          {props.att_session.attendance && <>
            <table>
            {Object.keys(props.att_session.attendance).map(item => {
              return <>
              <tr>
                <td> {item} </td>
                <td> {props.att_session.attendance[item] == true ? "Present" : "absent"} </td>
              </tr>
              </>
            })}
            </table>
          </>}
        </div>
  </>
}

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
          console.log("fetching data...", response);
          setAttSessions(response.data);
        })
        .catch(error => {
          setAttSessions([]);
          setError(error);
        })
  }

  function refresh() {
    fetchAttendance();
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
          {att_sessions && att_sessions.map(a => {
            return <AttRow att_session={a}/>
          })}
        </div>

    </Hero>
  </>
}

