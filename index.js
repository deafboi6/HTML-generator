const inquirer = require("inquirer");
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const team = [];

//confirm function
const confirm = () => {
    inquirer   
        .prompt([
            {
                type: "confirm",
                name: "addEmployee",
                message: "Do you want to add another employee?"
            }])
            .then(ans => {
                if (!ans.addEmployee) {
                    //Add file write here
                    console.log("add a File here");
                } else {
                    employeeCreate();
                }
            })
        };
const employeeCreate = () => {
    inquirer
        .prompt([
            {
                type: "list",
                name: "createRole",
                message: "Select team member role:",
                choices: [
                    "Engineer",
                    "Intern"
                ]
            }])
            .then(ans => {
                if (ans.createRole === "Engineer") {
                    createEngineer();
                } else {
                    createIntern();
                }
            });
        };
            //See if you can change "employee" to whatever createRole choice is for better user experience
const createEngineer = () => {
    inquirer   
        .prompt([
            {
                type: "input",
                name: "name",
                message: `What is the name of your employee`
            },
            {
                type: "input",
                name: "id",
                message: "What is your employee's ID?"
            },
            {
                type: "input",
                name: "email",
                message: "What is your employee's email?"
            },
            {
                type: "input",
                name: "github",
                message: "What is your Engineer's github username?"
            }
        ])
            .then(ans => {
                    const anEngineer = new Engineer(ans.name, ans.id, ans.email, github);
                    team.push(anEngineer);
            })
        };

const createIntern = () => {
    inquirer   
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the name of your intern?"
            },
            {
                type: "input",
                name: "id",
                message: "What is your intern's ID?"
            },
            {
                type: "input",
                name: "email",
                message: "What is your intern's email?"
            },
            {
                type: "input",
                name: "school",
                message: "What school does your intern attend?"
            }
        ])
            .then(ans => {
                    const anIntern = new Intern(ans.name, ans.id, ans.email, school);
                    team.push(anIntern);
            })
        };

inquirer
    .prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is your manager's name?"
        },
        {
            type: "input",
            name: "managerId",
            message: "What is your manager's ID?"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is your manager's email?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is your Manager's office number?"
        }
    ])
        .then(answers => {
            const theManager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumber);
            team.push(theManager);
        });

confirm();


