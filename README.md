# Employee Tracker

In this application I needed to architect and build a solution for managing a company's employees using node, inquirer, and MySQL.

I Designed the following database schema containing three tables:

* **department**:

  * **id** - INT PRIMARY KEY
  * **name** - VARCHAR(30) to hold department name

* **role**:

  * **id** - INT PRIMARY KEY
  * **title** -  VARCHAR(30) to hold role title
  * **salary** -  DECIMAL to hold role salary
  * **department_id** -  INT to hold reference to department role belongs to

* **employee**:

  * **id** - INT PRIMARY KEY
  * **first_name** - VARCHAR(30) to hold employee first name
  * **last_name** - VARCHAR(30) to hold employee last name
  * **role_id** - INT to hold reference to role employee has
  * **manager_id** - INT to hold reference to another employee that manager of the current employee. This field may be null if the employee has no manager


## User Story

As a business owner
I want to be able to view and manage the departments, roles, and employees in my company
So that I can organize and plan my business

## Functionality

Command-line application that allows the user to:

* Add departments, roles, employees

* View departments, roles, employees

* Update employee roles

## GIF


[Employee Tracker](https://media.giphy.com/media/hXOXhaOFtJSvCd9Pgw/giphy.gif)



