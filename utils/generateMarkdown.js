// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
[badge]

## Description

${data.projectDescription}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contributing](#contribute)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.projectInstallation}

## Usage

${data.projectUsage}

## Credits

${data.projectCredits}

## License

${data.projectLicense}

## Contribute

${data.projectContribution}

## Tests

${data.projectTesting}

## Questions

For any questions regarding this project you can find me here on github or send me an email!<br>
Github: [${data.githubUsername}](https://github.com/${data.githubUsername})<br>
Email: [${data.email}](mailto:${data.email})`;
}

module.exports = generateMarkdown;
