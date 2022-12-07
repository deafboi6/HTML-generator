const inquirer = require("inquirer");
const Employee = require("./employee");

class Manager extends Employee {
    constructor(id, name, email, officeNumber) {
        super(id, name, email)
        this.officeNumber = officeNumber;
    }

getExtra() {
    return `Office Number: ${this.officeNumber}`;
}

getRole() {
    return "Manager";
};
};

module.exports = Manager;