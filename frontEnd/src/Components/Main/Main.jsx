import React from "react";
import BasicCard from "./Components/BasicCard";
import "./main.css";


const Main = (props) => {

  return (
   
    <div className="body">
      <div className="page-heading">
        <h3>Cohorts</h3>
      </div>
    <div className="grid-container">
        {props.cohorts.map((e,i)=><div className="grid-item" key={i}><BasicCard key={i} title={e}/></div>)}
    </div>
    
    </div>
  );
};
export default Main;
