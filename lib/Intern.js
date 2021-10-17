// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const Employee = require("./Develop/lib/Employee");


class Intern extends Employee {






    getEmail(school) {

        return school;
    };

    getRole(role) {

        return role;
    };
}

module.exports = Intern;
