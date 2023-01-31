import React ,{useState} from "react";

// import "./main.css";
import axios from "axios";
import { DataGrid} from '@mui/x-data-grid';
import { Button , Stack} from "@mui/material";
import Dialog from "./comps/Dialog.jsx"

const Students = (props) => {
const [add,setAdd]=useState(false);
const [mod,setMod]=useState(false);
const [row,setRow]=useState({})

const changeAdd=()=>{
  setAdd(!add)
}
const changeMod=()=>{
  setMod(!mod)
}

const addStudent=(student)=>{
  axios.post("http://localhost:3001/api/students/add",
  student)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}
const modifyStudent=(id)=>{
  axios.put(`http://localhost:3001/api/students/${id}`)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

const deleteStudent=(id)=>{
    axios.delete(`http://localhost:3001/api/students/${id}`)
    .then(() => console.log ('Delete successful'));
}

  const columns = [
    { field: 'idstudent', headerName: 'ID', width: 70 },
    { field: 'studentFirstName', headerName: 'First name', width: 130 },
    { field: 'studentLastName', headerName: 'Last name', width: 130 },
    {field: 'studentAge',headerName: 'Age',type: 'number',width: 90},
    {field: 'cohortID',headerName: 'Cohort',type: 'number',width: 90},
    {field: 'modify',headerName: 'Modify',type: 'number',width: 130 , renderCell: (params) => {
        const onClick = (e) => {
          
          setRow(params.row)
          console.log(row)
          changeMod();
          changeAdd();
          
        };
        
        return (
          <Stack direction="row" spacing={2}>
            <Button variant="outlined" color="warning" size="small" onClick={onClick}>Modify</Button>
          </Stack>
        );}},
    {field: 'Delete',headerName: 'Delete',type: 'number',width: 130 , renderCell: (params) => {
            const onClick = (e) => {
            deleteStudent(params.row.idstudent);
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
     {add ? <Dialog modify={modifyStudent} title={mod ? "Modify Student" : "Add Student"} view={changeAdd} mod={mod?changeMod:console.log("no")} row={row} cohorts={props.cohorts} add={addStudent} refresh={props.refresh}></Dialog>: 
     <div>
     <div className="page-heading">
      <h3>Students</h3>
      </div>
      <div style={{height:"380px"}}>
        <DataGrid
            className="data"
            getRowId={(row) => row.idstudent}
            rows={props.students}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]} 
        />
        <div className="buttonContainer">
         <Stack direction="row" spacing={4}>
            <Button variant="outlined" color="info" size="Large" onClick={()=>{changeAdd()}}>Add Student</Button> 
          </Stack>
        </div></div>
        </div>}
    </div>
  );
};
export default Students;
