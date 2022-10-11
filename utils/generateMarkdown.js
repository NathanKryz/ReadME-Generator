//  A function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let strlicense = license.toString();
  if (!license){
  return '';
  }
  else {
    switch(strlicense){
      case 'MIT':
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
      case 'ISC': 
        return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
      case 'IBM':
      return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
      case 'Mozilla':
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
      default:
        return '';
    }
  }
}

//  Created a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let strlicense = license.toString();
  if (!license){
  return '';
  }
  else {
    switch(strlicense){
      case 'MIT':
        return `[The MIT License](https://opensource.org/licenses/MIT)`
      case 'ISC':
        return  `[ISC License](https://opensource.org/licenses/ISC)`
      case 'IBM':
      return `[IBM Public License Version 1.0](https://opensource.org/licenses/IPL-1.0)`
      case 'Mozilla':
      return `[Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)`
      default:
        return '';
    }
  }
}

// Created a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let strlicense = license.toString();
  if (!license){
  return '';
  }
  else {
    switch(strlicense){
      case 'MIT':
        return `\n## License

This repo is licensed by the MIT License\n`
      case 'ISC':
        return `\n## License

This repo is licensed by the ISC License\n`
      case 'IBM':
      return `\n## License

This repo is licensed by the IBM Public License Version 1.0\n`
      case 'Mozilla':
      return `\n## License

This repo is licensed by the Mozilla Public License 2.0\n`
      default:
        return '';
    }
  }
}

// A function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}   ${renderLicenseBadge(data.license)}

## Description

  ${data.projectDesc}

## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.projectInstall}

## Usage

${data.projectUsage}
${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}
## Contributing

${data.projectContr}

## Tests

${data.projectTest}

## Questions

[${data.gitURL}](github.com/${data.gitURL})

<${data.emailLink}>
Feel free to contact me through e-mail or github if you have additional questions!
`;
}

module.exports = generateMarkdown;
