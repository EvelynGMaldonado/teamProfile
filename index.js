const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const questions = require("./utils/questions");
const generateHtml = require("./utils/generateHtml");
const employList = [];

const init = async () => {
    const typeEmp = await inquirer.prompt(questions.typeofEmployee);
    collectEmplData(typeEmp)
    
}
const collectEmplData = async (typeEmp) => {
    console.log(typeEmp)
    const genEmpInfo = await inquirer.prompt(questions.generalQuestions);
    if (typeEmp.employee === "Manager") {
        const officeNumb = await inquirer.prompt(questions.officeNumber);
        const ManagerEmp = new Manager(genEmpInfo.name, genEmpInfo.id, genEmpInfo.email, officeNumb.office);
        employList.push(ManagerEmp);
    } else if (typeEmp.employee === "Engineer") {
        const git = await inquirer.prompt(questions.gitHubUserName);
        const EngineerEmp = new Engineer(genEmpInfo.name, genEmpInfo.id, genEmpInfo.email, git.github);
        employList.push(EngineerEmp);
    } else {
        const school = await inquirer.prompt(questions.schoolName);
        const InternEmp = new Intern(genEmpInfo.name, genEmpInfo.id, genEmpInfo.email, school.school);
        employList.push(InternEmp);
    }
    createMoreEmpl()
}

const createMoreEmpl = async() => {
    const answer = await inquirer.prompt(questions.wantContinue);
    if (answer.answer) {
        init()
    } else {
    fs.writeFileSync("index.html", generateHtml(employList), "utf-8")
    }
}
init ();   



