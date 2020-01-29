DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

--Department
CREATE TABLE  department(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NULL,

);

-- Role
CREATE TABLE role(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL(7, 2),
    department_id INT NOT FOREIGN KEY REFERENCES (id),

);

-- Employee
CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT NOT FOREIGN KEY REFERENCES employee(id),
    manager_id INT FOREIGN KEY REFERENCES role(id),

);


