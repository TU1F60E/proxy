import { useState, useEffect } from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import Modal from '../utils/modal.js'
import Hero from '../utils/hero.jsx';
import AttendanceCreator from './attendancecreator.jsx'
import AttendanceMarker from './attendancemarker.jsx'

export default function StudentAttendanceControl(props) {

  var [attendance, setAttSessions] = useState([]);
  var [classes, setClasses] = useState([]);
  var [students, setStudents] = useState([]);
  var [error, setError] = useState([]);

  function fetchClasses() {
      // fetch data on component render
      axios.get("http://localhost:8000/classes/")
        .then(response => {
          // console.log(response);
          console.log("fetching data...", response);
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
  function fetchStudents() {

      // fetch data on component render
      axios.get("http://localhost:8000/users/")
        .then(response => {
          // console.log(response);
          console.log("fetching data...", response);
          setStudents(response.data);
        })
        .catch(error => {
          setStudents([]);
          setError(error);
        })
  }

  function refresh() {
    fetchAttendance();
    fetchStudents();
    fetchClasses();
  }

  useEffect(() => {
    refresh();
  }, [])

  return <>
    <Hero title="Mark your Attendance" className="border border-green-500">

    <AttendanceMarker students={students} attendance={attendance} />
    </Hero>
  </>
}

