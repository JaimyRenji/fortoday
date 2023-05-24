
import React from "react";
import "./Landing.css";
import logo from "../../images/logo.png";
import "@fontsource/poppins"; // Defaults to weight 400
export default function Landing() {
    return (
        <div className="landing">
            <div className="image-overlay">
                <img className="logo"src={logo}></img>
                <p className="landing-text">Track your goals for the day with ForToday App</p>
                <div className="buttons">
                <a href="/login"><button className="button1"><b>Join Now</b></button></a>
                <a href="/login"><button className="button1"><b>Sign In</b></button></a>
                </div>
            </div>
        </div>
    );
}