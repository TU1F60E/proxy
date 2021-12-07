import DataGrid from 'react-data-grid';

function ClassTableView(props) {

  // grid setup
  const columns = [ 
    {key: '_id', name: 'ID'},
    {key: 'created', name: 'Created At'},
    {key: 'name', name: 'Name'},
  ]

  var users = props.students;

  return <>
    {users && 
      <DataGrid columns={columns} rows={users} className="w-full m-3"/>
    }
    {!users && 
      <h3> Could not find Classes :( </h3>
    }
  </>

}

export default ClassTableView;
