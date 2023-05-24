import React from "react";
import "./login.css";
import logo from "../../images/logo.png";
export default function Login() {
    return (
        <div className="login">
            <div className="image-overlay">
                <img className="logo" src={logo}></img>
                <p className="login-text">Get started with ForToday now!</p>
                <div className="login-main-btn">
                <button className="login-btn"><div className="login-div"><img className="login-img"src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png"></img>
                <p><b>Sign up with google</b></p></div></button>
                </div>
                </div>
                </div>
    );
}