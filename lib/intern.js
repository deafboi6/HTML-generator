const inquirer = require("inquirer");

class Intern extends Employee {
New() {
    inquirer
        prompt([
        {
            type: "input",
            name: "employeeName",
            message: "What is the name of your employee?"
        },
        {
            type: "input",
            name: "employeeId",
            message: "What is your employee's ID?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your employee's email?"
        },
        {
            type: "input",
            name: "intern-school",
            message: "What school is your intern attending?"
            },
])};

getRole() {
    //Make sure this overrides Employee getRole()
    console.log("Intern")
};
};

module.exports = Intern;