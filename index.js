const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    "Project Title:" +
    "Description:" +
    "Installation Instructions:" +
    "Usage Info" +
    "Contribution Guidelines:" +
    "Test Instructions:"
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();

console.log("Test");