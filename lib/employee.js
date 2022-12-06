const inquirer = require("inquirer");
const Engineer = require("./engineer");
const Intern = require("./intern");
const Manager = require("./manager");

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };

        getName() {
            return this.name;
        };
        
        getId() {
            return this.id;
        };
        
        getEmail() {
            return this.email;
        };
        
        getRole() {
            return "Employee";
        };
    };

module.exports = Employee;