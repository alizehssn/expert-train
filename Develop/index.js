//Inquier to collect user input
let inquier = require("inquirer")
let fs = require("fs")
let util = require("util");
const inquirer = require("inquirer");





// array of questions for user
const questions = [{

        type: "input",
        content: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        content: "description",
        message: "Describe your project?"
    },
    {
        type: "input",
        content: "installation",
        message: "What are the steps required to install your project step-by-step?"
    },
    {
        type: "input",
        content: "usage",
        message: "What are the instructions and examples for how to use your project?"
    },
    {
        type: "input",
        content: "contributing",
        message: "Did you have any collaborators, if so what are their Github profiles?"

    },
    {
        type: "input",
        content: "license",
        message: "Which license do you wish to include?"
    },
    {
        type: "input",
        content: "tests",
        message: "What tests should be run for your application?"
    },
    {
        type: "input",
        content: "badges",
        message: "Do you wish to include any badges?"
    },
    {
        type: "input",
        content: "githubUsername",
        message: "What is your Github username?"
    },
    {
        type: "input",
        content: "email",
        message: "What is your email address?"
    }

];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(function(response) {


    })

}

// function call to initialize program
init();