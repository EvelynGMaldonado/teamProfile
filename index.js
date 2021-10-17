const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// const Employee = require("./lib/Employee");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const questions = require("./utils/questions");
const { generalQuestions } = require('./utils/questions');

const init = async () => {
    const typeEmp = await inquirer.prompt(questions.typeofEmployee);
    collectEmplData(typeEmp)
    
}
const collectEmplData = async (typeEmp) => {
    console.log(typeEmp)
    const genEmpInfo = await inquirer.prompt(questions.generalQuestions);
    if (typeEmp.employee === "Manager") {
        const officeNumb = await inquirer.prompt(questions.officeNumber);
        console.log("the office number is ", officeNumb);
    } 
}

init ();   



// fs.writeFile('SampleREADME.md', generateMarkdown(responses), (err) => {
//     if(err) throw err

// });