import * as React from "react";
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import MenuItem from '@mui/material/MenuItem';

export default function FormDialog(props) {
    const [open, setOpen] = React.useState(true);

    const [student,setStudent]= React.useState({studentFirstName:"" ,studentLastName: "",studentAge:"" ,cohortID:"" });
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    const name = event.target.id
    setStudent({...student,[name]:event.target.value})
  };
  const handleChangeSelect = (event) => {

    setStudent({...student,cohortID:event.target.value})
  };
 
 
  console.log(student)
  return (
    <div>
      <Dialog open={open} onClose={handleClickOpen}>
        <DialogTitle>{props.title}</DialogTitle>
        <DialogContent>
          <div>
            <TextField
              autoFocus
              placeholder={props.title==="Modify Student"? props.row.studentFirstName :""}
              margin="dense"
              id="studentFirstName"
              label="First Name"
              variant="outlined"
              value={student.studentFirstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <TextField
              placeholder={props.title==="Modify Student"?props.row.studentLastName :""}
              margin="dense"
              id="studentLastName"
              label="last Name"
              type="text"
              size="Normal"
              variant="outlined"
              value={student.studentLastName}
              onChange={handleChange}
            />
          </div>
          <div>
            <TextField
              placeholder={props.title==="Modify Student"?props.row.studentAge :""}
              margin="dense"
              id="studentAge"
              label="Age"
              type="text"
              align="center"
              variant="outlined"
              value={student.studentAge}
              onChange={handleChange}
            />
          </div>
          <div>
            <TextField
                margin="dense"
                id="date"
                label="Birthday"
                type="date"
                defaultValue="2017-05-24"
                sx={{ width: 220 }}
                InputLabelProps={{
                shrink: true,
                }}
            />
          </div>
          <div>
            <TextField
                margin="dense"
                id="cohortID"
                select
                label="Cohort"
                onChange={handleChangeSelect}
                helperText="select Cohort"
                
            >
                {props.cohorts.map((option) => (
                    <MenuItem key={option.idcohort} value={option.idcohort} id='cohortID' children='test'>
                        {option.cohortName}
                    </MenuItem>
                 ))}
            </TextField>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>{props.view();props.title==="Add Student"?console.log("no"):props.mod()}}>Cancel</Button>
          <Button onClick={()=>{props.title==="Add Student" ? props.add(student) :props.modify(...student);props.refresh()}}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
