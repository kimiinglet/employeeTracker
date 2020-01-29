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
  password: "P@ssword!",
  database: "employee_db"
});

//Initiate MySQL Connection
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
  action()
});


//Routes
app.get("/", function (req, res) {
});

//command line allows user to




