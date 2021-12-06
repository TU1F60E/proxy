import Modal from '../utils/modal.js'
import Hero from '../utils/hero.jsx';
import UserCreator from './usercreator.jsx'
import UserModifier from './studentmodifier.jsx'
import UserDeleter from './studentdeleter.jsx'
import { useState, useEffect } from 'react';
import DataGrid from 'react-data-grid';
import axios from 'axios';

export default function StudentManager(props) {

  var [users, setUsers] = useState();
  var [error, setError] = useState([]);

  // grid setup
  const columns = [
    {key: '_id', name: 'ID'},
    {key: 'SRN', name: 'SRN'},
    {key: 'name', name: 'Name'},
  ]

  useEffect(() => {
    // fetch data on component render
    axios.get("http://localhost:8000/users/")
      .then(response => {
        // console.log(response);
        console.log("fetching data...");
        setUsers(response.data);
      })
      .catch(error => {
        setUsers([]);
        setError(error);
      })
  }, [])

  return <>
    <Hero title="Students" className="border border-green-500">

        <div className="button-row flex flex-wrap justify-items-stretch w-full">

            <Modal 
              classname="p-3 m-3 flex-grow w-full " 
              buttonName="new student" 
              title="create a new student" 
              header_icon="home" 
              button_icon="shield"
            >
            {
              // create user
            }
              <UserCreator/>
          </Modal>

            <Modal 
              classname="p-3 m-3 flex-grow w-full" 
              buttonName="Modify Student" 
              title="Modify and Existing Student!" 
              header_icon="home" 
              button_icon="pluscircle"
            >
            {
              // delete and or update a user
            }
              <UserModifier students={users}/>
          </Modal>

          <Modal 
              classname="p-3 m-3 flex-grow w-full" 
              buttonName="Delete Student" 
              title="Modify and Existing Student!" 
              header_icon="home" 
              button_icon="pluscircle"
            >
            {
              // delete and or update a user
            }
              <UserDeleter students={users}/>
          </Modal>

        </div>

        <br/>

        {
          // this sucks man
          // least convenient way of adding comments
        }

        {users && 
          <DataGrid columns={columns} rows={users} className="w-full m-3"/>
        }
        {!users && 
          <h3> Could not find users :( </h3>
        }

    </Hero>
  </>
}
