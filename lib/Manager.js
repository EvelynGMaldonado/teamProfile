// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const Employee = require("./Develop/lib/Employee");


class Manager extends Employee {






    getRole(role) {

        return role;
    }
  
}

module.exports = Manager;
