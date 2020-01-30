DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;


CREATE TABLE  department(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NULL
);
INSERT INTO department(name)
VALUES ("sales");

CREATE TABLE role(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL(7, 2),
    FOREIGN KEY (id) REFERENCES department(id)

);
INSERT INTO role(title, salary)
VALUES ("manager", 210000);

CREATE TABLE employee_tbl (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
	FOREIGN KEY (id) REFERENCES role(id)
);
INSERT INTO employee_tbl(first_name, last_name)
VALUES ("Kimi", "Inglet");


SELECT * FROM role;


