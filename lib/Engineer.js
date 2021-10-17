// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const Employee = require("./Employee");



class Engineeer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github
    }




    getGithub() {

        return this.github;
    };


    getRole() {

        return "Engineer";
    };

}

module.exports = Engineeer;
