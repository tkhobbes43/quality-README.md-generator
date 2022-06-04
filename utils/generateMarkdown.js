// function that returns the license section of README
// returns license badge based on which license is passed in
// as well as returns the license link
// If there is no license, return an empty string
// 
function renderLicenseSection(license) {
  if(license === 'MIT License') {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (license === 'GNU AGPLv3') {
    return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)"
  } else if (license === 'GNU GPLv3') {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  } else if (license === 'GNU LGPLv3') {
    return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)"
  } else if (license === 'Mozilla Public License 2.0') {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  } else if (license === 'Apache License 2.0') {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else if (license === 'Boost Software License 1.0') {
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
  } else (license === 'The Unlicense') {
    return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
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
