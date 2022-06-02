// TODO: Include packages needed for this application
// fs needed to write and append files
const fs = require('fs');
// inquirer needed to prompt user using command line for inputs to create the README.md
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is your Github username?",
        name: 'username',
    },
    {
        type: 'input',
        message: "What is the title of your project?",
        name: 'title'
    },
    {
        type: 'input',
        message: "Write a description of  your project.",
        name: 'description',
    },
    {
        type: 'input',
        message: "Describe the steps required to install your project for the Installation section.",
        name: 'installation',
    },
    {
        type: 'input',
        mesage: "Provide instructions and examples of your project in use for the Usage section.",
        name: 'usage',
    },
    {
        type: 'input',
        message: "If applicable, provide guidelines on how other developers can contribute to your project.",
        name: 'contributing',
    },
    {
        type: 'input',
        message: "If applicable, provide any tests written for your application and provide examples on how to run them.",
        name: 'tests',
    },
    {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boot Software License 1.0', 'The Unlicense'],
        name: 'license',
    }
];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, err => {
//         if (err) {
//             return console.log(err);
//         }
//         console.log('Your markdown file has been created.')
//     });
// }

// TODO: Create a function to initialize app
function init() {
    
        .then((answers) => fs.writeFile('README.md', generateREADME(answers)))
        .then(() =>console.log('Successfully wrote to README.md'))
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();
