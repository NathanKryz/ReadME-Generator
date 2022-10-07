// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const genMark = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message:  'What is the description of your project?',
        name: 'projectDesc',
    },
    {
        type: 'input',
        message: 'What license do you want to use?',
        name: 'license',
    }
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
