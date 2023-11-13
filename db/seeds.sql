INSERT INTO department (dept_name)
VALUES 
(001,'Sales'),
(002,'Finance'),
(003,'Legal'),

INSERT INTO roles (title, salary, dept_id)
VALUES 
(001,'Sales Lead', 100000, 1),
(002,'Salesperson', 60000, 1),
(003,'Account Manager', 80000, 2),
(004,'Accountant', 60000, 2),
(005,'Legal Team Lead', 90000, 3),
(006,'Lawyer', 80000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
(001,'Martin', 'Smith', 1, NULL),
(002,'Kelly', 'Allen', 2, 1),
(003,'Scott', 'Parker', 3, 2),
(004,'Chris', 'Wilson', 4, NULL),
(005,'Ben', 'Murphy', 5, 4),
(006,'Harris', 'Miller', 6, NULL),
(007,'Davis', 'Martinez', 7, NULL);
