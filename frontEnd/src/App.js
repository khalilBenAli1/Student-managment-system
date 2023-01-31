import React, { useState, useEffect }  from "react";
import "./App.css";
import "./Components/Sidebar/Sidebar.jsx"
import Sidebar from "./Components/Sidebar/Sidebar.jsx";
import Main from "./Components/Main/Main";
import Students from "./Components/Students/Students";
import axios from "axios";
import Instructors from "./Components/instructors/Instructor";

const App = () => {
  const [view, setView] = useState("homePage");
  const [cohorts, setCohorts] = useState([]);
  const [students, setStudents] = useState([]);
  const [instructors, setInstructors] = useState([]);
  const [update, setUpdate] = useState(false);
  
useEffect(() => {
    axios
      .get("http://localhost:3001/api/cohorts/getAll")
      .then((response) => {
        console.log(response);
        setCohorts(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  
    axios
      .get("http://localhost:3001/api/students/getAll")
      .then((response) => {
        console.log(response);
        setStudents(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })

    axios
    .get("http://localhost:3001/api/instuctors/getAll")
    .then((response) => {
      console.log(response);
      setInstructors(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
    

  },[update]);
  
  function refreshPage(){
    setUpdate(!update)
} 


  const changeView = (view) => {
    setView(view);
  };

  const renderView = () => {
    if (view === "homePage") {
      return <Main cohorts={cohorts}/>;
    } else if (view === "students") {
      return <Students refresh={refreshPage} students={students} view={changeView} cohorts={cohorts}/>;
    } else if (view === "instructors") {
      return <Instructors refresh={refreshPage} instructor={instructors}/>;
    }
  };

  return <div><Sidebar click={changeView}/>{renderView()}</div>;
};

export default App;
