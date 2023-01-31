import React from "react";

// import "./main.css";
import axios from "axios";
import { DataGrid} from '@mui/x-data-grid';
import { Button , Stack} from "@mui/material";

const Instructors = (props) => {

const deleteInstructor=(id)=>{
    axios.delete(`http://localhost:3001/api/instructors/${id}`)
    .then(() => console.log ('Delete successful'));
}

  const columns = [
    { field: 'idinstructor', headerName: 'ID', width: 70 },
    { field: 'instructorFirstName', headerName: 'First name', width: 130 },
    { field: 'instructorLastName', headerName: 'Last name', width: 130 },
    {field: 'instructorAge',headerName: 'Age',type: 'number',width: 90},
    {field: 'cohortId',headerName: 'Cohort',type: 'number',width: 90},
    {field: 'modify',headerName: 'Modify',type: 'number',width: 130 , renderCell: (params) => {
        const onClick = (e) => {
          const currentRow = params.row;
          return alert(JSON.stringify(currentRow, null, 4));
        };
        
        return (
          <Stack direction="row" spacing={2}>
            <Button variant="outlined" color="warning" size="small" onClick={onClick}>Modify</Button>
            
          </Stack>
        );}},
    {field: 'Delete',headerName: 'Delete',type: 'number',width: 130 , renderCell: (params) => {
            const onClick = (e) => {
            deleteInstructor(params.row.idstudent);
           props.refresh();
            };
            
            return (
              <Stack direction="row" spacing={2}>
                 <Button variant="outlined" color="error" size="small" onClick={onClick}>Delete</Button>
              </Stack>
            );}},
  ];
  return (
   
    <div className="body">
      <div className="page-heading">
        <h3>Instructors</h3>
      </div>
      <div style={{height:"380px"}}>
        <DataGrid
            className="data"
            getRowId={(row) => row.idinstructor}
            rows={props.instructor}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]} 
        />
        <div className="buttonContainer">
         <Stack direction="row" spacing={4}>
            <Button variant="outlined" color="info" size="Large">Add instructor</Button> 
          </Stack>
        </div>
    </div>
    </div>
  );
};
export default Instructors;
