INSERT INTO department (dept_name)
VALUES 
('Sales'),
('Finance'),
('Legal'),

INSERT INTO roles (title, salary, dept_id)
VALUES 
('Sales Lead', 100000, 1),
('Salesperson', 60000, 1),
('Account Manager', 80000, 2),
('Accountant', 60000, 2),
('Legal Team Lead', 90000, 3),
('Lawyer', 80000, 3);

INSERT INTO employee (first_name, surname, role_id, manager_id)
VALUES 
('Martin', 'Smith', 1, NULL),
('Kelly', 'Allen', 2, 1),
('Scott', 'Parker', 3, 2),
('Chris', 'Wilson', 4, NULL),
('Ben', 'Murphy', 5, 4),
('Harris', 'Miller', 6, NULL),
('Davis', 'Martinez', 7, NULL);
