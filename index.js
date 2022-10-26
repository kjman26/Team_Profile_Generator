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
    inquirer.prompt([
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
    console.log(ans)
})

const addManager = () => {
    
}

const writeFile = (data) => {
    fs.writeFile('./theTeam.html', data, (err) =>
        err ? console.error(err) : console.log('File successfully written!'))
};

writeFile();

