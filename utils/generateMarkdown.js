// Function to return a license badge based on the license type
function renderLicenseBadge(license) {
  return `![Github License](https://img.shields.io/badge/license-${license}-blue.svg)`
}

// Function to return the license link
function renderLicenseLink(license) {
return `https://opensource.org/licenses/${license}`
}

// Function to return the license section of README
function renderLicenseSection(license) {
return `This project is licensed under the ${license} license. ${renderLicenseBadge(license)}.
The license link for this project is [here](${renderLicenseLink(license)}).`
}

// Function to generate markdown for README
function generateMarkdown(data) {
return `
# ${data.title}

## Description

${data.description}

## Table Of Contents

* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)

## Installation

To install necessary dependencies, run the following command:

\`\`\`
${data.install}
\`\`\`

## Usage

${data.usage}

## License

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

To run tests, use the following command:

\`\`\`
${data.test}
\`\`\`

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work on [GitHub](https://github.com/${data.username}).
`;
}

module.exports = { generateMarkdown };
