const inquirer = require("inquirer");

class Engineer extends Employee {
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
            name: "Engineer-github",
            message: "What is your Engineer's github username?"
            }
])};

getRole() {
    //Make sure this overrides Employee getRole()
    console.log("Engineer")
};
}; 

module.exports = Engineer;