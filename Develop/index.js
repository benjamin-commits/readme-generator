const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const writeReadme = util.promisify(fs.writeFile);

// array of questions for user
function prompt(){
    return inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is the name of your project: ",
    },
    {
        type: "input",
        name: "description",
        message: "Write a brief description of your project: "
    },
    {
        type: "input",
        name: "installation",
        message: "Describe the installation process, if any: ",
    },
    {
        type: "input",
        name: "usage",
        message: "What will the project be used for: "
    },
    {
        type: "list",
        name: "license",
        message: "Choose the appropriate license for this project: ",
        choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open"
        ]
    },
    {
        type: "input",
        name: "contributing",
        message: "Name the contributors of this projects: "
    },
    {
        type: "input",
        name: "tests",
        message: "Is there a test included? "
    },
    {
        type: "input",
        name: "questions",
        message: "What do I do if I have an issue? "
    },
    {
        type: "input",
        name: "username",
        message: "Please enter your GitHub username: "
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email: "
    }
])};

// function to write README file
  async function init() {
    try {
        const data = await prompt();
        const generateContent = generateMarkdown(data);
        await writeReadme('./Develop/mdfile/README.md', generateContent);
    }   catch(err) {
        console.log(err);
    }
  }
  
//  function call to initialize program
  init();  
 