const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
    {
        type: "input",
        name: "projectName",
        message: "What's the title of the project?"
    },
    {
        type: 'input',
        message: "Write a description of your project.",
        name: 'description',
    },
    {
        type: 'input',
        message: "Include steps required to install your project.",
        name: 'installation'
    },
    {
        type: 'input',
        message: "Provide instructions and examples for using your project.",
        name: 'usage'
    },
    {
        type: "list",
        message: "What License did you use for this repository?",
        choices: ["MIT", "GNU General Public License 2.0", "Apache License 2.0", "GNU General Public License 3.0"],
        name: "license",
    },
    {
        type: "input",
        message: "Provide contributing guidelines for your project.",
        name: "contributing",
    },
    {
        type: 'input',
        message: "Provide any tests written for your application and examples on how to run them.",
        name: 'tests'
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github",
        validate: (answer) => answer.length < 1 ? "A valid GitHub username is required." : true
    },    
    {
        type: "input",
        message: "Enter your email address where users and contributors can send questions?",
        name: "email",
        validate: (answer) => answer.length < 1 ? "A valid email is required." : true
    },
];

// function to write README file
async function writeToFile(fileName, data) {
    try {
        await writeFileAsync(fileName, data);
        console.log("Successfully wrote to README.md");
    } catch (err) {
        throw err;
    }
}

// function to initialize program
async function init() {
    try {
        const answers = await inquirer.prompt(questions);
        const markdown = generateMarkdown(answers);
        const message = await writeToFile("Generated-README.md", markdown);
        console.log(message);
    } catch (error) {
        console.error("An error occurred:", error.message);
    }
}

// function call to initialize program
init();
