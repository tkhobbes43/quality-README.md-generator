// TODO: Include packages needed for this application
const fs = require('fs');


const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    questions()
        .then((answers) => fs.writeFile('README.md', generateREADME(answers)))
        .then(() =>console.log('Successfully wrote to README.md'))
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();
