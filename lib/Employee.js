// TODO: Write code to define and export the Employee class
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');


// TODO: Create an array of questions for user input
class Employee {




    getName(name) {

        return name;
    };

    getId(id) {

        return id;
    };

    getEmail(email) {

        return email;
    };

    getRole(role) {

        return role;
    }
}

// function init() {
//         inquirer.prompt(questions).then((responses) => {
//             console.log("List of responses: ", responses);

//             fs.writeFile('SampleREADME.md', generateMarkdown(responses), (err) => {
//                 if(err) throw err

//             });
//         })
//     }
// init ();


    module.exports = Employee;