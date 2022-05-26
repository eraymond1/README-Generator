// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const generateMarkdown = require('./utils/generateMarkdown');

const fs = require('fs');

const util = require('util');

const writeFileAsync = util.promisify('fs.writeFile');
// TODO: Create an array of questions for user input
const questions = () => 
    inquirer.prompt([

        {
            type: "input",
            name: "author",
            message: "What is the name of the author?"
        },

        {
            type: "input",
            name: "username",
            message: "What is the github username?"
        },

        {
            type: "input",
            name: "email",
            message: "What is the eamail address?"
        },

        {
            type: "input",
            name: "title",
            message: "What is the name of the project?"
        },

        {
            type: "input",
            name: "description",
            message: "Please provide a brief description of the project."
        },

        {
            type: "list",
            name: "license",
            message: "What license does your project have?",
            choices: ["APACHE 2.0", "GPL 3.0", "BSD 3", "MIT", "None" ]
        },

        {
            type: "input",
            name: "installation",
            message: "What commands should be used to install dependencies?"
        },

        {
            type: "input",
            name: "tests",
            message: "What commands should be used to test?"
        },

        {
            type: "input",
            name: "usage",
            message: "What should the user know about using the repo?"
        },

        {
            type: "input",
            name: "contribute",
            message: "What does the user need to know about contributing to this repo?"
        },
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = () => {
    questions()
    .then((answers) => writeFileAsync('README.md', generateMarkdown(answers)))
    .then(() => console.log('Created README.md'))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();
