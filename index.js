const inquirer = require('inquirer');
const mysql = require('mysql');
const cTable = require('console.table');
const commaNumber = require('comma-number');
const Department = require(__dirname + '/classes/Department.js');
const Role = require(__dirname + '/classes/Role.js');
const Employee = require(__dirname + '/classes/Employee.js');

//Creating conection with sql
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rootroot',
    database: 'company_db'
});

//First appears a Welcome text and a function init that starts the app.
console.log('\n\nWelcome to the Employee Tracker\n\n===============================');
connection.connect();
init();

function init() {
    console.log('\n\n')
    inquirer.prompt([
        {
            type: 'list',
            name: 'init',
            message: 'What would you like to do?',
            choices: ['Update Employee Role','View All roles', 'Add Role', 'View All Departments', 'Add Deparment','View All Employees','Add new Employee','Quit'],
            pageSize: 12
        }
    ]).then((answers) => {
        switch(answers.init) {
            case 'Quit':
                connection.end();
                console.log('Goodbye');
                break;
            case 'Update Employee Role':
                updateEmployee();
                break;
            case 'View All roles':
                viewAllRoles();
                break;
            case 'Add Role':
                addRole();
                break;
            case 'View All Departments':
                viewAllDepartments();
                break;
            case 'Add Deparment':
                addDepartment();
                break;
            case 'View All Employees':
                viewEmployees();
                break;
            case 'Add new Employee':
                addEmployee();
                break;
        }
    })
}
//Function updateEmployee updates employee details
const updateEmployee = () => {
    inquirer
      .prompt([
        {
          name: 'id',
          type: 'input',
          message: 'Enter employee id',
        },
        {
          name: 'jobId',
          type: 'input',
          message: 'Enter new job id',
        },
      ])
      .then(answer => {
        connection.query(
          'UPDATE employee SET job_id=? WHERE id=?',
          [answer.jobId, answer.id],
          function (err, res) {
            if (err) throw err;
            console.log('Employee updated!');
            startMenu();
          }
        );
      });
  };
  //Function viewAllRoles generates a list of total roles
const viewAllRoles = () => {
    connection.query('SELECT * FROM job', function (err, res) {
      if (err) throw err;
      console.table(res);
      startMenu();
    });
  };
  
//Function addRole adds a new role
const addRole = () => {
    inquirer.prompt([
        {
          name: 'jobTitle',
          type: 'input',
          message: 'What is the job title?',
        },
        {
          name: 'salary',
          type: 'input',
          message: 'What is the salary for this job?',
        },
        {
          name: 'deptId',
          type: 'input',
          message: 'What is the department ID number?',
        },
      ])
      .then(answer => {
        connection.query(
          'INSERT INTO job (title, salary, department_id) VALUES (?, ?, ?)',
          [answer.jobTitle, answer.salary, answer.deptId],
          function (err, res) {
            if (err) throw err;
            console.log('Job added!');
            startMenu();
          }
        );
      });
  };
  
//Function viewAllDeparments contains a list of the deparments
const viewAllDepartments = () => {
    connection.query('SELECT * FROM department', function (err, res) {
      if (err) throw err;
      console.table(res);
      startMenu();
    });
  };
  
//Function addDeparment adds a new Deparment
const addDepartment = () => {
    inquirer.prompt([
        {
          name: 'department',
          type: 'input',
          message: 'What is the department name?',
        },
      ])
      .then(answer => {
        connection.query(
          'INSERT INTO department (dept_name) VALUES (?)',
          [answer.department],
          function (err, res) {
            if (err) throw err;
            console.log('Department added!');
            startMenu();
          }
        );
      });
  };

//Function viewEmplyees contains a list of all the employees
const viewEmployees = () => {
    connection.query(
      'SELECT employee.id, first_name, last_name, title, salary, dept_name, manager_id FROM ((department JOIN job ON department.id = job.department_id) JOIN employee ON job.id = employee.job_id);',
      function (err, res) {
        if (err) throw err;
        console.table(res);
        startMenu();
      }
    );
  };

//Function addEmployee adds a new employee
const addEmployee = () => {
    inquirer.prompt([
        {
          name: 'nameFirst',
          type: 'input',
          message: "What is the employee's first name?",
        },
        {
          name: 'nameLast',
          type: 'input',
          message: "What is the employee's last name?",
        },
        {
          name: 'jobId',
          type: 'input',
          message: "What is the employee's job id?",
        },
        {
          name: 'managerId',
          type: 'input',
          message: 'What is the manager Id?',
        },
      ])
      .then(answer => {
        connection.query(
          'INSERT INTO employee (first_name, last_name, job_id, manager_id) VALUES (?, ?, ?, ?)',
          [answer.nameFirst, answer.nameLast, answer.jobId, answer.managerId],
          function (err, res) {
            if (err) throw err;
            console.log('Employee added!');
            startMenu();
          }
        );
      });
  };
  