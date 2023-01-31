import React from "react";
import './Sidebar.css';


const Sidebar = (props)=>{


    return(
        <div className="sidebar">
            <div className="logo">
                <img alt="Logo" src="https://static.wixstatic.com/media/1e24fd_201ae71ea8da496880a13f9bd3f0bab5~mv2.png/v1/fill/w_114,h_38,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/_edited.png"/>
            </div>
            <div className="sidebar-menu">
                <ul className="menu">
                    <li className="sidebar-title">menu</li>
                    <li className="sidebar-item" onClick={()=>props.click("homePage")}>cohorts</li>
                    <li className="sidebar-item" onClick={()=>props.click("students")}>Students</li>
                    <li className="sidebar-item" onClick={()=>props.click("instructors")}>instructors</li>
                </ul>
            </div>
        </div>
)
}

export default Sidebar;