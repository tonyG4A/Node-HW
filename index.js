// TODO: Include packages needed for this application
const inquirer = require("inquirer"); 
const fs = require('fs');
const {generateMarkDown} = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = 
inquirer
.prompt([
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub Username?',
        
    },
    {
        type: 'input',
        name: 'title',
        message: 'Please enter your project title'
    },
    {
        type: 'input',
        name: 'description',
        message: 'please enter a brief description of your project'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please type the use of your project',

    },
    {
        type: 'list',
        name: 'license',
        message: 'what license should your project have?',
        choices: ['MIT', 'APACHE2.0', 'GPL', 'BSD', 'None'],
    },
    {
        type: 'input',
        name: 'install',
        messgae:'what command should be run to install dependencies?',
    },
    {
        type:'input',
        name:'test',
        message:'what command should done to run a test?',
    },
    {
        type:'input',
        name:'contributing',
        message:'what should your user know about contributing to the repo?'
    },
    {
        type:'input',
        name:'username',
        meaasge:'what is your Github username?',
    },
    {
        type:'input',
        name:'Email',
        message:'what is your email address?'
    },

]).then(response => {
    console.log(responses)
    writeToFile('newREAD.md', responses)
})

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(data)
    fs.writeFile(fileName, generateMarkDown(data), (err) => {
        err ? console.error(err) : console.log('Successfully created README.md')
    })
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
