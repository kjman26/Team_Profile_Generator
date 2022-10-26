const generateHtml = require('../Team_Profile_Generator/Develop/util/generateHtml')
const fs = require('fs');
const inquirer = require('inquirer');
const teamMembers = [];
const Employee = require('./Develop/lib/Employee')


//create a prompt that asks for user input and then takes that input and exports to generateHtml, run through the functions with user created parameters (aka user input) and then import from generatehtml

inquirer.prompt() ([
    {
         message: "What is your name?",
         type: "input",
         name: "NAME",
    },
    {
        message: "What is your email?",
        type: "input",
        name: "EMAIL",
    },

])
 .then(ans=>{
    console.log(ans)
})




const writeFile = (data) => {
    fs.writeFile('./yourTeam.html', data, (err) =>
        err ? console.error(err) : console.log('file written successfully'))
};

writeFile();