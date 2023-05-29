import React from "react";
import "./dashboard.css";
import logo from "../../images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSun,faPlusSquare} from '@fortawesome/free-solid-svg-icons';
import CustomForm from "../../components/custom";
export default function Dashboard() {
  const addTask=(task)=>{
    console.log(task)
  }
    return (
        <div className="main">
        <div className="sidebar">
            <a href="/"><img className="logo1" src={logo}></img></a>
            <img className="profile-pic" src={localStorage.getItem("photo")}></img>
            <p className="welcome">Welcome <b>{localStorage.getItem("name")}!</b></p>
            <div className="icon-sun">
            <FontAwesomeIcon className="toggle" icon={faSun} /></div>
        </div>
        <div className="app">
          <CustomForm addTask={addTask}/>
          <header>
           <h1 className="head-task">TASK LIST</h1>
          </header>
    </div>
    
  </div>
    );
}