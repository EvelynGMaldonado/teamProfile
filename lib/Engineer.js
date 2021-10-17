// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const Employee = require("./Employee");



class Engineeer extends Employee {










    getGitHub(github) {

        return github;
    };


    getRole(role) {

        return role;
    };

}

module.exports = Engineeer;
