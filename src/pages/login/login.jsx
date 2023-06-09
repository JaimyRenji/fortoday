import React,{useState} from "react";
import "./login.css";
import logo from "../../images/logo.png";
import {LoginSocialGoogle} from "reactjs-social-login";
import{useNavigate} from "react-router-dom";
export default function Login() {
    const navigate=useNavigate();
    const [name, setName] = useState("");
    const [photo, setPhoto] = useState("");
    const handleLoginResolve = ({ provider, data }) => {
        console.log(provider, data);
        const profile = data.profile || data;
    const givenName = profile.given_name || profile.name || "";
    const picture = profile.picture || "";

    setName(givenName);
    setPhoto(picture);
    localStorage.setItem("name", givenName);
    localStorage.setItem("photo", picture);
    navigate("/dashboard");
      };
    
      const handleLoginReject = (err) => {
        console.log(err);
      };

    return (
        <div className="login">
            <div className="image-overlay">
                <img className="logo" src={logo}></img>
                <p className="login-text">Get started with ForToday now!</p>
                <div className="login-main-btn">
                <LoginSocialGoogle
            client_id={
                "75856646229-i01p3cc3okhpfgubou36ab0ip0b9teu2.apps.googleusercontent.com"
            }
            scope="openid profile email"
            discoveryDocs="claims_supported"
            access_type="offline"
            onResolve={handleLoginResolve}
            onReject={handleLoginReject}
            >
                <button className="login-btn"><div className="login-div"><img className="login-img"src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png"></img>
                <p className="log-text"><b>Sign up with google</b></p></div></button>
            </LoginSocialGoogle>
                </div>
                </div>
                </div>
    );
}
