// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
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
