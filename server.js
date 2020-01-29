//Dependencies
const mysql = require("mysql");
const express = require("express");
const inquirer = require("inquirer");

//create express app instance.
let app = express();

//set up port of our applications
//process.env.PORT lets the port to set by Heroku
let PORT = process.env.PORT || 8080;

//MySQL DB connection Information 
const connection = mysql.createCoonection({

    host: "localhost",
    
    //your port
    port: 3306,

    //your username
    user: "root",

    //your password
    password: "",
    database: ""
});

//Initiate MySQL Connection
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });

  //Routes
  app.get("/", function(req, res) {

  });

  //command line allows user to
  
  //add departments, roles, employees
  function choosePosition() {};
  
  //view departments
  function viewDepartments() {};

  //view roles
  function viewRoles () {};

  // view employees
  function viewEmployees() {};

  //update employee roles
  function updateEmployeeRoles() {};






//=============BONUS==============
// update employee managers
// delete departments, roles, employees,


  