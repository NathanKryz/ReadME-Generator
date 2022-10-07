// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// Slap this at the top, use the web link guide mhm
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
      default:
        return '';
    }
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// Link to the license page, put this under the license words?
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
      return `[IBM Public License Version 1.0]((https://opensource.org/licenses/IPL-1.0))`
      default:
        return '';
    }
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// Put just a little bit 'This project is licensed by blah blah blah'
function renderLicenseSection(license) {
  let strlicense = license.toString();
  if (!license){
  return '';
  }
  else {
    switch(strlicense){
      case 'MIT':
        return `## License

MIT License stuff goes here
        `
      case 'ISC':
        return `## License

ISC License stuff goes here`
      case 'IBM':
      return `## License

IBM License stuff goes here`
      default:
        return '';
    }
  }
}

// TODO: Create a function to generate markdown for README
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

## Usage

${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}
## Contributing

## Tests

## Questions

`;
}

module.exports = generateMarkdown;
