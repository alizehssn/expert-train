//Inquier to collect user input
let inquier = require("inquirer")
let fs = require("fs")
let util = require("util");
const inquirer = require("inquirer");
let markDown = require("./utils/generateMarkdown");
const { error } = require("console");





// array of questions for user
const questions = [{

        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Describe your project?"
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project step-by-step?"
    },
    {
        type: "input",
        name: "usage",
        message: "What are the instructions and examples for how to use your project?"
    },
    {
        type: "input",
        name: "contributing",
        message: "Did you have any collaborators, if so what are their Github profiles?"

    },
    {
        type: "input",
        name: "license",
        message: "Which license do you wish to include?"
    },
    {
        type: "input",
        name: "tests",
        message: "What tests should be run for your application?"
    },
    {
        type: "input",
        name: "badges",
        message: "Do you wish to include any badges?"
    },
    {
        type: "input",
        name: "githubUsername",
        message: "What is your Github username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    }

];

// function to write README file
//uses fs to write to the generate markdown
function writeToFile(fileName, data) {
    fs.writeFile(fileName, markDown(data), function(err) {
        if (err) {
            console.log("Error :(")
        } else {
            console.log("succes! :D")
        }
    })

}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(function(data) {
        writeToFile("README.md", data);

    })

}

// function call to initialize program
init();