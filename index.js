const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const { default: Choices } = require("inquirer/lib/objects/choices");

const licenses = {
  "Creative Commons License": "CC0",
  "MIT License": "MIT",
  "GNU GPL v3 License": "GNU_GPLv3",
  "Apache License 2.0" :"Apache_2.0"
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
    message: "Usage Info"
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

// function to write README file
function writeToFile(data) {
  fs.writeFile('output/README.md', data, (err) =>
  err ? console.error(err) : console.log('Commit logged!')
);
}

// function to initialize program
function init() {
  console.log(welcomeMessage());
  askQuestions(questions);
}

function askQuestions(questions) {
    inquirer
      .prompt(questions)
      .then((answers) => {
        const licenseBadge = {
          "projectLicenseBadge": licenses[answers.projectLicense]
        }
        Object.assign(answers, licenseBadge);
        console.log(licenseBadge);
        answersFunction(answers);
      });
}

function answersFunction (answers){
  console.log(answers);
  console.log(generateMarkdown(answers));
  writeToFile(generateMarkdown(answers));
}

function welcomeMessage(){
  return (`Welcome to c4rli's README generator!
To use this tool you should enter the information prompted followed by the [enter] key.
The output from the generator will be in the folder "output"
To exit at any time press [ctrl] + [c]
`)
}

// function call to initialize program
init();

