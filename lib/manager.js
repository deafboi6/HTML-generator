const inquirer = require("inquirer");
const Employee = require("./employee");

class Manager extends Employee {
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
            name: "Manager-office",
            message: "What is your manager's office number?"
            }
])};

getRole() {
    //Make sure this overrides Employee getRole()
    console.log("Manager")
};

};
module.exports = Manager;