// This is where I put all the packages needed for this application
// fs needed to write and append files
const fs = require('fs');
// inquirer needed to prompt user using command line for inputs to create the README.md
const inquirer = require('inquirer');
// require modulse for generateMarkdown.js
const generateMarkdown = require("./utils/generateMarkdown")

// inquirer prompt of questions for user to input to generate README.md
inquirer
    .prompt([
            {
                type: 'input',
                message: "What is the title of your project?",
                name: 'title'
            },
            {
                type: 'input',
                message: "Write a description of your project.",
                name: 'description'
            },
            {
                type: 'input',
                message: "Describe the steps required to install your project for the Installation section.",
                name: 'installation'
            },
            {
                type: 'input',
                message: "Provide instructions and examples of your project in use for the Usage section.",
                name: 'usage'
            },
            {
                type: 'input',
                message: "If applicable, provide guidelines on how other developers can contribute to your project.",
                name: 'contributing'
            },
            {
                type: 'input',
                message: "If applicable, provide any tests written for your application and provide examples on how to run them.",
                name: 'tests'
            },
            {
                type: 'list',
                message: "Choose a license for your project.",
                choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense', 'N/A'],
                name: 'license'
            },
            {
                type: 'input',
                message: "Please enter your Github username so that developers can reach you through your Github and can find it under the Questions section of your README.md.",
                name: 'username'
            },
            {
                type: 'input',
                message: "Please enter your email so that developers can reach you if they have more questions regarding your work.  They can then find it under the Questions section of your README.md.",
                name: 'email'
            },
    ])
    // FS function to write README file or go provide error
    .then((answers) => {
        fs.writeFile('README.md', generateMarkdown(answers), err => {
            if(err) throw err;
        })
    })
    .then(() => console.log('Succesfully wrote to README.md'))
    .catch((error) => {
        if (error.isTtyError) {
            console.log("Prompt couldn't be rendered in the current environment.")
        } else {
            console.log("Something Else went wrong.", error)
        }
    });
