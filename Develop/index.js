// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const generateMarkdown = require('./utils/generateMarkdown');

const fs = require('fs');




// TODO: Create an array of questions for user input
const questions = [

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
            choices: ["agpl", "apache", "mit", "no license" ]
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
];

// TODO: Create a function to write README file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/generated-README.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

// TODO: Create a function to initialize app
const init = () => {
    return inquirer.prompt(questions)
    .then(readmeData => {
        return readmeData;
    })
};

// Function call to initialize app
init()
.then(readmeData => {
    console.log(readmeData);
    return generateMarkdown(readmeData);
})
.then(pageMD => {
    return writeFile(pageMD);
})
.then(writeFileResponse => {
    console.log(writeFileResponse.message);
})
.catch(err => {
    console.log(err);
})
