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
        ).then(function (response) {
            // add
            if (response.menu === "Add") {
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
            else {
                console.log(response.menu + " selected!");
                connection.end()
            }
        })
}
action();
//action prompt working at this point

//================== Add =====================
// Please chose which you want to add too
async function addTo() {
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
                addEmployee()
            }
            // If you choose Role the addRole function will begin
            else if (response.add === "Role") {
                addRole()
            }
            // If you choose Department addDepartment will begin
            else if (response.add === "Department") {
                addDepartment()
            }
            // If you choose Back the action() will take you back to the main menu
            else {
                console.log("Back to menu");
                action()
            }
        })
}

//====Employee====
function addEmployee() {
    inquirer
        .prompt([
            //input first_name
            {
                type: "input",
                name: "empFirst",
                message: "What is this employee's first name?"
            },
            //input last_name
            {
                type: "input",
                name: "empLast",
                message: "What is this employee's last name?"
            },
            //input manager_id
            {
                type: "input",
                name: "empManager_id",
                message: "What is the manager ID number of this employee's manager?"
            },
            //input role_id
            {
                type: "input",
                name: "empRole_id",
                message: "What is this employees Role?"
            }
        ]).then(function (response) {
            //save into table
        })
}

//CHECK
//save into table

//====Role====
function addRole() {
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

//====Department===
function addDepartment() {
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
                viewEmployee()
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
function viewEmployee() {
    console.log("Not there yet!");
}
// pull data from table

//======= Role =======
function viewRole() { }
// pull data from table

//====== Department =====
function viewDepartment() { }
// pull data from table


//=================== update =================
function updateInfo() { }
// Please chose which you want to add too
// Employee
// Role
// Department

//====Employee====
function updateEmployee() { }
// give list of employees (list)
// choose what to update on selected employee
// update
// save to table

//====Role====
function updateRole() { }
// get list of role
// choose role
// update
// save to table

//====Department====
function updateDepartment() { }
    // get list of department
        // choose name
            // choose what to update
                // update
                    // save to table




//=============BONUS==============
// update employee managers
// delete departments, roles, employees,