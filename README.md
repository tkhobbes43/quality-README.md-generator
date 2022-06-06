<h1 align="center"> Quality README.md Generator </h1>

## Description

I want to create a command-line application that will dynamically generate a professional README.md file.  Having a high-quality README for any app is an essential for any web developer.  You want it to include pertinent information like what the app is for, how to use it, how to install it, how to report issues, and how to make contributions to it.  Generating one using the command-line also allows for any project creator to devote more time to working on the actual project, making it a great time saver as well.

## Table of Contents
- [Description](#description)
- [Acceptance Criteria](#acceptance_criteria)
- [Usage](#usage)
- [Installation](#installation)
- [Questions](#questions)

## Acceptance Criteria
```
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

## Installation
In the command line you need to run "npm init" and "npm install inquirer"

## Usage
You need to run "node index.js" at the root of your project and then answer the prompted questions for it to generate the markdown for your README.md file.

## Questions
For any questions or concerns, contact me at either my [GitHub](https://github.com/tkhobbes43)
or my email: t.k.hobbes43@gmail.com

[Walkthrough Video](https://drive.google.com/file/d/1YI-AFCYz7U4aRsSRHJAqDS0Q982B1Aj5/view?usp=sharing)
