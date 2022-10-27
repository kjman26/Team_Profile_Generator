const generateHtml = require('../Team_Profile_Generator/Develop/util/generateHtml')
const fs = require('fs');
const inquirer = require('inquirer');
const teamMembers = [];
const Employee = require('./Develop/lib/Employee');
const Manager = require('./Develop/lib/Manager');
const Intern = require('./Develop/lib/Intern');
const Engineer = require('./Develop/lib/Engineer')
const generateTeam = require('./Develop/util/generateHtml');
module.exports = teamMembers;

//create a prompt that asks for user input and then takes that input and exports to generateHtml, run through the functions with user created parameters (aka user input) and then import from generatehtml

const firstPrompt = () => {
    inquirer
        .prompt([
    {
        message: "How would you like to proceed?",
        type: "list",
        choices: ['add Manager', 'add Engineer', 'add Intern', 'I am done'],
        name: "CHOOSE",
    },
 ])

 //first prompted to select a course of action and now creating the switch case depending on what the user selects. Will add in the functions called here, below
 .then(chooseOption => {
    switch (chooseOption.CHOOSE) {
        case 'add Manager':
            addManager();
            break;
        case 'add Engineer':
            addEngineer();
            break;
        case 'add Intern':
            addIntern();
        default:
            writeFile(generateTeam(teamMembers));
            console.log('team built!')

    }
    console.log(teamMembers)
})
//add manager functions with prompts
const addManager = () => {
     return inquirer
     .prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Add MANAGER name',
            validate: managerName => {
                if (managerName) {
                    return true;
                } else{
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Add MANAGER ID',
            validate: managerId => {
                if (managerId) {
                    return true;
                } else{
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Add MANAGER EMAIL',
            validate: managerEmail => {
                if (managerEmail) {
                    return true;
                } else{
                    return false
                };
            },
        },
        {
            type: 'input',
            name: 'officeNum',
            message: 'Add MANAGER OFFICE NUMBER',
            validate: managerOfficeNum => {
                if (managerOfficeNum) {
                    return true;
                } else{
                    return false
                }
            }
        }

    ])
    .then(answers => {
        const manager = new Manager (answers.name, answers.id, answers.email, answers.managerOfficeNum);
        teamMembers.push(manager);
        firstPrompt();
    })
};
//engineer builder with prompts
const addEngineer = () => {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Add Engineer NAME',
            // validate: engineerName => {
            //     if (engineerName) {
            //         return true;
            //     } else{
            //         return false
            //     };
            // }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Add Engineer ID',
            validate: engineerID => {
                if (engineerID) {
                    return true;
                } else{
                    return false
                };
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Add Engineer EMAIL',
            validate: engineerEmail => {
                if (engineerEmail) {
                    return true;
                } else{
                    return false
                };
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Add Engineer GITHUB',
            validate: engineerGithub => {
                if (engineerGithub) {
                    return true;
                } else{
                    return false
                };
            }
        },
    ])
        .then(answers => {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            teamMembers.push(engineer);
            firstPrompt();
        })
};
//add intern function

const addIntern = () => {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your interns name?',
            validate: internName => {
                if (internName){
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your Interns ID?',
            validate: internId => {
                if (internId) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your Interns EMAIL?',
            validate: internEmail => {
                if (internEmail){
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'What SCHOOL did your Intern attend?',
            validate: internSchool => {
                if (internSchool){
                    return true;
                } else {
                    return false;
                }
            }
        }
    ])
        .then(answers => {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            teamMembers.push(intern);
            firstPrompt();
        })
};
};

const writeFile = (data) => {
    fs.writeFile('./theTeam.html', data, (err) =>
        err ? console.error(err) : console.log('File successfully written!'))
};

function initialize(){
    firstPrompt();
}

initialize();

//need to initialize and figure out if writefile goes in index or generatehtml
