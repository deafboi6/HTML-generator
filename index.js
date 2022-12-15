const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const team = [];

const ENGINEER_TITLE = "Engineer";
const INTERN_TITLE = "Intern";

//confirm function
const confirm = () => {

    inquirer
        .prompt([
            {
                type: "confirm",
                name: "addEmployee",
                message: "Do you want to add another employee?"
            }])
        .then((ans) => {
            if (!ans.addEmployee) {
                buildTeam();
            } else {
                promptEmployeeCreate();
            }
        })
};
const promptEmployeeCreate = () => {
    inquirer
        .prompt([
            {
                type: "list",
                name: "createRole",
                message: "Select team member role:",
                choices: [
                    ENGINEER_TITLE,
                    INTERN_TITLE,
                ]
            }])
        .then(ans => {
            createEmployee(ans.createRole);
        });
};
const createEmployee = (roleTitle) => {
    const roleTitleLower = roleTitle.toLowerCase();
    prompts = [];

    prompts.push(
        {
            type: "input",
            name: "name",
            message: `What is the name of your ${roleTitleLower}?`
        },
        {
            type: "input",
            name: "id",
            message: `What is your ${roleTitleLower}'s employee ID?`
        },
        {
            type: "input",
            name: "email",
            message: `What is your ${roleTitleLower}'s email?`
        })

    if (roleTitle === ENGINEER_TITLE) {
        prompts.push(
            {
                type: "input",
                name: "github",
                message: `What is your ${roleTitleLower}'s github username?`
            });
    } else {
        prompts.push(
            {
                type: "input",
                name: "school",
                message: `What school does your ${roleTitleLower} attend?`
            });
    }

    inquirer
        .prompt(prompts)
        .then(ans => {
            if (roleTitle === ENGINEER_TITLE) {
                anEmployee = new Engineer(ans.name, ans.id, ans.email, ans.github);
            } else {
                anEmployee = new Intern(ans.name, ans.id, ans.email, ans.school);
            }
            team.push(anEmployee);
            confirm();
        })
};

function buildTeam() {

    let employeeHTML = team
        .map((member) => {
            return `<div class="card" style="width: 18rem; margin-right: 15px">
                    <img src="./images/stock-${member.getRole()}-photo.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${member.name}</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item"><strong>Role:</strong> ${member.getRole()}</li>
                    <li class="list-group-item"><strong>Employee ID:</strong> ${member.id}</li>
                    <li class="list-group-item"><strong>Email:</strong> ${member.email}</li>
                    <li class="list-group-item">${member.getExtra()}</li>
                    </ul>
            </div>`;
        })
        .join("\n");

    let HTML =
        `<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
        <title>Hello, world!</title>
    </head>
    <body class="d-flex p-2 bd-highlight">
    ${employeeHTML}
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossorigin="anonymous"></script>
    </body>
</html>`;
    fs.writeFile("./dist/index.html", HTML, (err) => {
        console.log("Team Generated");
    });
    console.log(team);
}

//Code starts here!
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
        confirm();
    });