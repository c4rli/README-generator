const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const { default: Choices } = require("inquirer/lib/objects/choices");

const licenses = [
  "CC0",
  "MIT",
  "GPL",
  "Non Commercial License"
]

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
    name: "projectInstructions",
    type: "input",
    message: "Test Instructions:"
  },
  {
    name: "projectLicense",
    type: "list",
    message: "Select License Type:",
    choices: licenses
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
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
  console.log(welcomeMessage());
  askQuestions(questions);
}

function askQuestions(questions) {
    inquirer
      .prompt(questions)
      .then((answer) => {
        console.log(answer);
      });
}

function welcomeMessage(){
  return (`Welcome to c4rli's README generator
  To use this tool you should enter the information prompted followed by the [enter] key
  `)
}

// function call to initialize program
init();

