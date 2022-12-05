const inquirer = require("inquirer");
const Engineer = require("./engineer");
const Intern = require("./intern");
const Manager = require("./manager");

class Employee {

    newManager() {
        Manager.New();
    };

    newEngineer() {
        Engineer.New();
    };

    newIntern() {
        Intern.New();
    };

    addEmployee() {
        inquirer 
            .prompt([
                {
                    type: "confirm",
                    name: "addEmployee",
                    message: "Do you want to add an(other) employee?"
                    //Needs to trigger employee choices if yes, end document creation if no. Needs loopback after each employee added, needs to confirm atleast one employee added before allowing "no" selection. Perhaps this question could be prompted after initial employee questions?
                },
                {
                    type: "list",
                    name: "createRole",
                    message: "Select team member role:",
                    //Need to trigger choice-questions for each choice
                    choices: [
                        "Manager",
                        "Engineer",
                        "Intern"
                    ]
                }
            ]) .then(answers => {
                if (!answers.addEmployee) {
                    //Check if an employee had been added, if so, end script, if not, prompt "Please add atleast one employee!"
                } else if (answers.createRole.Manager) {
                    this.newManager();
                } else if (answers.createRole.Engineer) {
                    this.newEngineer();
                } else if (answers.createRole.Intern) {
                    this.newIntern();
                }
            })
        };

        getName() {
            //console.log this.employeeName in some format, make sure targetting is correct
        };
        
        getId() {
            //console.log this.employeeId in some format, make sure targetting is correct
        };
        
        getEmail() {
            //console.log this.email in some format, make sure targetting is correct
        };
        
        getRole() {
            console.log("Employee");
        };
};  

module.exports = Employee;