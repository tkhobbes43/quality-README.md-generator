// function that returns the license section of README
// returns license badge based on which license is passed in
// as well as returns the license link
// If there is no license, return an empty string
// 
function renderLicenseSection(license) {
  if(license === 'MIT License') {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(userResponse) {
  const licenseUsed = renderLicenseSection(userResponse.license)

  let draftMarkdown = 
  `# ${userResponse.title}

## Description

${userResponse.description}

${licenseUsed}`;

  return draftMarkdown
}

module.exports = generateMarkdown;
