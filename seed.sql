DROP DATABASE IF EXISTS employee;

CREATE DATABASE employee;

USE employee;

-- creating new columns

--Department
CREATE TABLE  department(
-- NOT NULL - cannot be NULL
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NULL,
  --Builds an index/ making it easier to find things
  PRIMARY KEY (id)
);

--role
CREATE TABLE role(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL(7, 2),
    department_id INT,
    PRIMARY KEY (id)
);

CREATE TABLE employeE (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT
)


