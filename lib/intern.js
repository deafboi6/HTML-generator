const inquirer = require("inquirer");
const Employee = require("./employee");

class Intern extends Employee {
constructor(id, name, email, school) {
    super(id, name, email)
    this.school = school;
}

getExtra() {
    return `School: ${this.school}`;
}

getRole() {
    return "Intern";
};
};

module.exports = Intern;