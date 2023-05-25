import React from "react";
import "./dashboard.css";
import logo from "../../images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faToggleOn,faMoon} from '@fortawesome/free-solid-svg-icons';
export default function Dashboard() {
    return (
        <div className="main">
        <div className="sidebar">
            <a href="/"><img className="logo1" src={logo}></img></a>
            <img className="profile-pic" src={localStorage.getItem("photo")}></img>
            <p className="welcome">Welcome <b>{localStorage.getItem("name")}!</b></p>
            <FontAwesomeIcon className="toggle" icon={faToggleOn} />
        </div>
        <div className="content">
        </div>
        </div>
    );
}