import Modal from '../utils/modal.js'
import Hero from '../utils/hero.jsx';
import BugCreator from './bugcreator'
import { useState, useEffect } from 'react';
import DataGrid from 'react-data-grid';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function BugManager(props) {

  var [bugs, setBugs] = useState();
  var [error, setError] = useState([]);
  
  // grid setup
  const columns = [
    {key: '_id', name: 'ID'},
    {key: 'created', name: 'Created At'},
    {key: 'bugs', name: 'Issue Faced'},
  ]

  useEffect(() => {
    // fetch data on component render
    axios.get("http://localhost:8000/bug-report/")
      .then(response => {
        // console.log(response);
        console.log("fetching data...");
        setBugs(response.data);
      })
      .catch(error => {
        setBugs([]);
        setError(error);
      })
  }, [])

  return <>
    <Hero title="Bug Report" className="border border-green-500">

        <div className="button-row flex flex-wrap justify-items-stretch w-full">

            <Modal 
              classname="p-3 m-3 flex-grow w-full " 
              buttonName="Report Bug" 
              title="Report the issue faced" 
              header_icon="home" 
              button_icon="shield"
            >
              {
                  // Bug creation logic goes here
              }
              <BugCreator/>
          </Modal>
        </div>

        <br/>

        {bugs && 
          <DataGrid columns={columns} rows={bugs} className="w-full m-3"/>
        }
        {!bugs && 
          <h3> Could not find bugs :( </h3>
        }

    </Hero>
  </>
}