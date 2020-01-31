USE employee_db;

INSERT INTO department(name) 
VALUES ("sales");

INSERT INTO department(name) 
VALUES ("Engineer");

INSERT INTO department(name) 
VALUES ("Engineer");

INSERT INTO department(name) 
VALUES ("CEO");

INSERT INTO department(name) 
VALUES ("Legal");

INSERT INTO role(title, salary)
VALUES ("manager", 210000);

INSERT INTO employees(first_name, last_name)
VALUES ("Kimi", "Inglet");

INSERT INTO employees(first_name, last_name)
VALUES ("Dan", "Fenichel");

INSERT INTO employees(first_name, last_name)
VALUES ("Tera", "Kelly");

SELECT * FROM employees;

