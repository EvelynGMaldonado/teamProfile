module.exports = {
    typeofEmployee: [
        {
            type: 'list',
            message: 'What type of employee?',
            name: 'employee',
            choices: ["Manager", "Engineer", "Intern"],
            validate: (value) => { if (value) { return true; } else { return "Enter response to continue"; } },

        }
    ],
    generalQuestions : [
            {
                type: 'input',
                message: "What is the employee's name?",
                name: 'name',
                validate: (value) => { if (value) { return true; } else { return "Enter response to continue"; } },
            },
            {
                type: 'input',
                message: 'What is your ID number?',
                name: 'id',
                validate: (value) => { if (value) { return true; } else { return "Enter response to continue"; } },
            },
            {
                type: 'input',
                message: 'Enter your email:',
                name: 'email',
                validate: (value) => { if (value) { return true; } else { return "Enter email to continue"; } },
            },  
    ],     
    gitHubUserName : [ 
        {
            type: 'input',
            message: 'Enter you GitHub username:',
            name: 'github',
            validate: (value) => { if (value) { return true; } else { return "Enter your github username to continue"; } },
        },
    ],
    officeNumber: [
        {
            type: 'input',
            message: 'Enter your office number:',
            name: 'office',
            validate: (value) => { if (value) { return true; } else { return "Enter your office number to continue"; } },
        },
    ],
    schoolName: [ 
        {
            type: 'input',
            message: 'Enter your school name:',
            name: 'school',
            validate: (value) => { if (value) { return true; } else { return "Enter your school name to continue"; } },
        },
    ],
}
