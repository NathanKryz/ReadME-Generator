// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const genMark = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your repository?',
        name: 'title',
    },
    {
        type: 'input',
        message:  'What is the description of your repository?',
        name: 'projectDesc',
    },
    {
        type: 'input',
        message: 'Please provide installation instructions for the repo:',
        name: 'projectInstall',
    },
    {
        type: 'input',
        message: 'Please provide usage instructions for the repo:',
        name: 'projectUsage',
    },
    {
        type: 'input',
        message: 'Set some user contribution guidelines for your repo:',
        name: 'projectContr',
    },
    {
        type: 'input',
        message: 'Provide some testing instructions for future users:',
        name: 'projectTest',
    },
    {
        type: 'list',
        message: 'What license do you want to use?',
        choices: ["MIT", "ISC","IBM","Mozilla", "None"],
        name: 'license',
        
    },
    {
        type: 'input',
        message: 'Enter your github Username',
        name: 'gitURL',
    },
    {
        type: 'input',
        message: 'Enter your e-mail link',
        name: 'emailLink',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, genMark(data), (err) =>
    err ? console.log(err) : console.log('Successfully created your readme'));
}

// TODO: Create a function to initialize app
function init() {

    inquirer
        .prompt(questions)
        .then((answers) => {
            writeToFile('README.md', answers);          
        });

}

// Function call to initialize app
init();
