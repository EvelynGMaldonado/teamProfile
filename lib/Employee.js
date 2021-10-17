// TODO: Write code to define and export the Employee class
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');


// TODO: Create an array of questions for user input
class Employee {
    constructor(name, id, email){
        this.name = name
        this.id = id
        this.email = email
    }

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
    }
}


module.exports = Employee;