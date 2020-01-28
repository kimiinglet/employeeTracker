DROP DATABASE IF EXISTS employee;
CREATE DATABASE employee;

USE employee;

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
    department_id INT NOT FOREIGN KEY REFRRENCES (id),

);

-- Employee
CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT NOT FOREIGN KEY REFRRENCES employee(id),
    manager_id INT NOT FOREIGN KEY REFRRENCES role(id),

);


