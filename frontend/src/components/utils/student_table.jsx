import DataGrid from 'react-data-grid';

function StudentTableView(props) {

  // grid setup
  const columns = [
    {key: '_id', name: 'ID'},
    {key: 'SRN', name: 'SRN'},
    {key: 'name', name: 'Name'},
  ]

  var users = props.students;

  return <>
    {users && 
      <DataGrid columns={columns} rows={users} className="w-full m-3"/>
    }
    {!users && 
      <h3> Could not find students :( </h3>
    }
  </>

}

export default StudentTableView;
