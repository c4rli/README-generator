// initializing required files and modules
const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const { default: Choices } = require("inquirer/lib/objects/choices");

// object containing license names and strings for badges
const licenses = {
  "Creative Commons License": "CC0",
  "MIT License": "MIT",
  "GNU GPL v3 License": "GNU_GPLv3",
  "Apache License 2.0": "Apache_2.0"
}

// array of questions for user
const questions = [
  {
    name: "projectTitle",
    type: "input",
    message: "Project Title:"
  },
  {
    name: "projectDescription",
    type: "input",
    message: "Description:"
  },
  {
    name: "projectInstallation",
    type: "input",
    message: "Installation Instructions:"
  },
  {
    name: "projectUsage",
    type: "input",
    message: "Usage Info:"
  },
  {
    name: "projectContribution",
    type: "input",
    message: "Contribution Guidelines:"
  },
  {
    name: "projectTesting",
    type: "input",
    message: "Test Instructions:"
  },
  {
    name: "projectLicense",
    type: "list",
    message: "Select License Type:",
    choices: Object.keys(licenses)
  },
  {
    name: "githubUsername",
    type: "input",
    message: "Github Username:"
  },
  {
    name: "email",
    type: "input",
    message: "Email:"
  }
];

// string with welcome message and instructions
const welcomeMessage = (`
~~~ Welcome to c4rli's README generator! ~~~

- To use this tool you should enter the information prompted followed by the [enter] key.
- The README generated will be in the folder "output"
- To exit at any time press [ctrl] + [c]
`);

// function to write README file
function writeToFile(data) {
  fs.writeFile('output/README.md', data, (err) =>
    err ? console.error(err) : console.log('README.md saved to /output!')
  );
}

// function to initialize program
function init() {
  console.log(welcomeMessage);
  askQuestions(questions);
}

// ask questions function that uses inquirer to ask the questions from the array of objects "questions"
function askQuestions(questions) {
  inquirer
    .prompt(questions)
    .then((answers) => {
      answersFunction(answers);
    });
}

// generates a new key value pair for license badge and appends to answers object
// calls writeToFile with the result of generateMarkdown using the inquirer object
function answersFunction(answers) {
  const licenseBadge = {
    "projectLicenseBadge": licenses[answers.projectLicense]
  }

  Object.assign(answers, licenseBadge);
  writeToFile(generateMarkdown(answers));
}

// function call to initialize program
init();

