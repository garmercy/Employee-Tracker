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
            choices: ['Update Employee Role','View All roles', 'Add Role', 'View All Departments', 'Add Deparment','View All Employees','Quit'],
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
                //1 update employee
                break;
            case 'View All roles':
                viewAllRoles();
                //2 viewRoles
                break;
            case 'Add Role':
                addRole();
                //3 add role
                break;
            case 'View All Departments':
                viewAllDepartments();
                //4view departments
                break;
            case 'Add Deparment':
                addDepartment();
                //5 add department
                break;
            case 'View All Employees':
                viewEmployees();
                //6view employees
                break;
        }
    })
}
updateEmployee();
viewAllRoles();
addRole();
viewAllDepartments();
addDepartment();
viewEmployees();
