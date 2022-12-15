const inquirer = require("inquirer");
const Employee = require("./employee");

class Manager extends Employee {
    constructor(id, name, email, officeNumber) {
        super(id, name, email)
        this.officeNumber = officeNumber;
    }

getExtra() {
    return `<strong>Office Number:</strong> ${this.officeNumber}`;
}

getRole() {
    return "Manager";
};
};

module.exports = Manager;