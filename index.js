const inquirer = require("inquirer");

//============== Main Question ===============
// What would you like to do?
function action() {
    inquirer
    .prompt([
        {
            type: "list",
            name: "menu",
            message: "Which action would you like to do?",
            choices: [
                "Add", 
                "View", 
                "Update",
                "Exit"
            ]
        }]
            // add
        ).then(function (response) {
            if(response.menu === "Add") {
                console.log(response.menu + " selected!");
                addTo()
            }
            // view
            else if (response.menu === "View") {
                console.log(response.menu + " selected!");
                viewInfo()
            }
            //update
            else if (response.menu === "Update") {
                console.log(response.menu + " selected!");
                updateInfo()
            }
            //exit
            else if (response.menu === "Exit") {
                console.log(response.menu + " selected!");
                connection.end() 
            }
        })
    }
action();
//action prompt working at this point

//================== Add =====================
// Please chose which you want to add too
function addTo(){}
    // Employee
    // Role
    // Department
    // Back

//====Employee====
function addemployee(){}
    //input id
    //input first_name
    //input last_name
    //input manager_id
    //input role_id

    //save into table

//====Role====
function addRole(){}
    //input id
    //input title
    //input salary
    //input department_id

    //save into table

//====Department===
function addDepartment(){}
    //input id
    //input name
        //ex sales, accounting
    //save into table

//=================== View ===================
// Please chose which you want to add too
function viewInfo(){}
    // Employee
    // Role
    // Department

//====== Employee =====
function viewEmployee(){}
    // pull data from table

//======= Role =======
function viewRole(){}
    // pull data from table

//====== Department =====
function viewDepartment(){}
    // pull data from table


//=================== update =================
function updateInfo(){}
// Please chose which you want to add too
    // Employee
    // Role
    // Department

//====Employee====
function updateEmployee(){}
    // give list of employees
         // choose name
            // choose what to update
                // update
                    // save to table

//====Role====
function updateRole(){}
    // get list of role
        // choose role
            // update
                // save to table

//====Department====
function updateDepartment(){}
    // get list of department
        // choose name
            // choose what to update
                // update
                    // save to table




//=============BONUS==============
// update employee managers
// delete departments, roles, employees,