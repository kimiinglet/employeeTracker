const inquirer = require("inquirer");
const mysql = require("mysql");

//=================================================================
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
        ).then(function (response) {
            // add
            if (response.menu === "Add") {
                console.log(response.menu + " selected!");
                create()
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
            else {
                console.log(response.menu + " selected!");
                connection.end()
            }
        })
}
action();
//CHECK
//=================================================================
//================== Add =====================

// Please chose which you want to add too
async function create() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "add",
                message: "Where would you like to add?",
                choices: [
                    "Employee",
                    "Role",
                    "Department",
                    "Back"
                ]
            }]
        ).then(function (response) {
            // If you choose Employee the addEmployee function will begin
            if (response.add === "Employee") {
                createEmployee()
            }
            // If you choose Role the addRole function will begin
            else if (response.add === "Role") {
                createRole()
            }
            // If you choose Department addDepartment will begin
            else if (response.add === "Department") {
                createDepartment()
            }
            // If you choose Back the action() will take you back to the main menu
            else {
                console.log("Back to menu");
                action()
            }
        })
}

//====Employee====
function createEmployee() {
    inquirer
        .prompt([
            //input first_name
            {
                type: "input",
                name: "employeeFirst",
                message: "What is this employee's first name?"
            },
            //input last_name
            {
                type: "input",
                name: "employeeLast",
                message: "What is this employee's last name?"
            },
            //input manager_id
            {
                type: "input",
                name: "employeeManager_id",
                message: "What is the manager ID number of this employee's manager?"
            },
            //input role_id
            {
                type: "input",
                name: "employeeRole_id",
                message: "What is this employees Role?"
            }
        ]).then(function (response){
            createEmployeeData(response)
        })
}

//CHECK
//save into table

//====Role====
function createRole() {
    inquirer
        .prompt([
            //input id
            {
                type: "input",
                name: "roleId",
                message: "What is this employees ID?"
            },
            //input title
            {
                type: "input",
                name: "roleTitle",
                message: "What is this employee's title?"
            },
            //input salary
            {
                type: "input",
                name: "roleSalary",
                message: "What is this employee's Salary?"
            },
            //input department_id
            {
                type: "input",
                name: "roleDepartment",
                message: "What is this employee's department Id?"
            }
        ]).then(function (response) {
            //save into table
        })
}
//CHECK
//====Department===
function createDepartment() {
    inquirer
        .prompt([
            //input id
            {
                type: "input",
                name: "departmentTitle",
                message: "What is the department title?"
            },
            //input title
            {
                type: "input",
                name: "departmentId",
                message: "What is the department Id number?"
            }
        ]).then(function (response) {
            //save into table
        })
}

function createEmployeeData(response) {
    // //console.log if working
    // console.log("Inserting a new product...\n");
  
    // var query = connection.query(
    //   "INSERT INTO employee_tbl SET ?",
    //   {
    //     first_name: response.first_name,
    //     last_name: response.last_name
    //   },
    //   function(err, res) {
    //     if (err) throw err;
    //     console.log(res.affectedRows + " employee created!\n");
    //     // Call updateProduct AFTER the INSERT completes to update row
    //   }
    // );
}

//=================================================================
//=================== View ===================
// Please chose which you want to view

function viewInfo() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "view",
                message: "Which would you lke to view?",
                choices: [
                    "Employee",
                    "Role",
                    "Department",
                    "Back"
                ]
            }]
        ).then(function (response) {
            // If you choose Employee the addEmployee function will begin
            if (response.viewInfo === "Employee") {
                viewEmployees()
            }
            // If you choose Role the addRole function will begin
            else if (response.viewInfo === "Role") {
                viewRole()
            }
            // If you choose Department addDepartment will begin
            else if (response.viewInfo === "Department") {
                viewDepartment()
            }
            // If you choose Back the action() will take you back to the main menu
            else {
                console.log("Back to menu");
                action()
            }
        })
}



//====== Employee =====
function viewEmployees() {
    //SELECT * FROM characters.employee
    connection.query("SELECT * FROM employee_tbl", function (err, res) {
        if (err) throw err;
        console.table(res);
    })
    viewEmployees()
// pull data from table
}
//======= Role =======
function viewRole() {
    connection.query("SELECT * FROM role", function (err, res) {
        if (err) throw err;
        console.table(res);
    })
    viewRole()
}
// pull data from table

//====== Department =====
function viewDepartment() {
    connection.query("SELECT * FROM department", function (err, res) {
        if (err) throw err;
        console.table(res);
    })
    viewDepartment();
 }


// pull data from table

//=================================================================
//=================== update =================

// Please chose which you want to add too

function updateInfo() { 
    inquirer.prompt([
        {
            type: "list",
            name: "update",
            message: "Please choose one of the following to update:",
            choices: ["Employee", "Role", "Department"]
        }
    ])
}

//====Employee====
function updateEmployee() { 
// give list of employees (list)
// choose what to update on selected employee
// update
// save to table
}

//====Role====
function updateRole() { 
// get list of role
// choose role
// update
// save to table
}

//====Department====
function updateDepartment() {
    // get list of department
        // choose name
            // choose what to update
                // update
                    // save to table
}


