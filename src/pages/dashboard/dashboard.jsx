import React from "react";
import "./dashboard.css";
import logo from "../../images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faToggleOn,faPlusSquare} from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
const textInput = document.getElementById("textInput");
const dateInput = document.getElementById("dateInput");
const textarea = document.getElementById("textarea");
const msg = document.getElementById("msg");
const tasks = document.getElementById("tasks");
const add = document.getElementById("add");
// Assuming 'form' is the correct selector for your form element
const form = document.querySelector('form');

// Ensure 'form' is not null before adding the event listener
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    formValidation();
  });
}

const formValidation = () => {
  // Assuming 'textInput' and 'msg' are correctly defined
  const textInput = document.querySelector('#textInput');
  const msg = document.querySelector('#msg');

  if (textInput.value === "") {
    console.log("failure");
    msg.innerHTML = "Task cannot be blank";
  } else {
    console.log("success");
    msg.innerHTML = "";
  }
};


export default function Dashboard() {
    return (
        <div className="main">
        <div className="sidebar">
            <a href="/"><img className="logo1" src={logo}></img></a>
            <img className="profile-pic" src={localStorage.getItem("photo")}></img>
            <p className="welcome">Welcome <b>{localStorage.getItem("name")}!</b></p>
            <FontAwesomeIcon className="toggle" icon={faToggleOn} />
        </div>
        <div className="app">
        <div id="addNew" data-bs-toggle="modal" data-bs-target="#form">
    <span>Add New Task..</span>
    <FontAwesomeIcon className="plus" icon={faPlusSquare} />
    </div>
    <h5 className="head-task"><b>TASK LIST</b></h5>
    <div id="tasks"></div>
    </div>
    <form
  class="modal fade"
  id="form"
  tabindex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add New Task</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body">
        <p>Task Title</p>
        <input type="text" class="form-control" name="" id="textInput" />
        <div id="msg"></div>
        <br />
        <p>Due Date</p>
        <input type="date" class="form-control" name="" id="dateInput" />
        <br />
        <p>Description</p>
        <textarea
          name=""
          class="form-control"
          id="textarea"
          cols="30"
          rows="5"
        ></textarea>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
          Close
        </button>
        <button type="submit" id="add" class="btn btn-primary">Add</button>
      </div>
    </div>
  </div>
</form>
  </div>
    );
}