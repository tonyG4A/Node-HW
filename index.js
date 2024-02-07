// Include required packages
const inquirer = require("inquirer");
const fs = require('fs');
const { generateMarkdown } = require('./utils/generateMarkdown');

// Create an array of questions for user input
const questions = [
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
        message: 'Please enter a brief description of your project'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please type the use of your project',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license should your project have?',
        choices: ['MIT', 'APACHE2.0', 'GPL', 'BSD', 'None'],
    },
    {
        type: 'input',
        name: 'install',
        message: 'What command should be run to install dependencies?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run a test?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What should your user know about contributing to the repo?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }
];

// Function to prompt user with questions and write to README file
inquirer
    .prompt(questions)
    .then(response => {
        console.log(response);
        writeToFile('newREAD.md', response);
    })
    .catch(error => {
        console.error(error);
    });

// Function to write README file
function writeToFile(fileName, data) {
    console.log(data);
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        err ? console.error(err) : console.log('Successfully created README.md');
    });
}
