const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")

const promptResponse = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
      default: "Stuart Simmons",
    },
    {
      type: "input",
      name: "title",
      message: "What is the project title?",
      default: "AWESOME TITLE",
    },
    {
      type: "editor",
      name: "description",
      message: "Type in a good description for this project -",
      default: "This is a great project.....",
    },
    {
      type: "editor",
      name: "installation",
      message: "What are the installation requirements for this project -",
      default: "The installation of this software is as follows:",
    },
    {
      type: "editor",
      name: "usage",
      message: "Descriptive the usage of this project -",
      default: "This section describes how to use the project",
    },
    {
      type: "list",
      name: "licence",
      message: "What licence is being used",
      choices: ["MIT", "Apache-2.0", "none"],
    },
    {
      type: "editor",
      name: "tests",
      message: "List and test applications and how to use them here -",
      default: "No test files yet, check again soon",
    },
    {
      type: "editor",
      name: "contributing",
      message: "Confirm how to contribute to this repository -",
      default:
  `When contributing to this repository, please first discuss the change you wish to make via email  
  with the owners of this repository before making a pull request`,
    },
    {
      type: "input",
      name: "github",
      message: "What is your Github user name?",
      default: "Pilot67",
    },
    {
      type: "input",
      name: "email",
      message: "What is your Email address?",
      default: "developer@simmons1.net",
      validate: (email) => {
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
        if (valid) {
          return true;
        } else {
          console.log(".  Please enter a valid email");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "link",
      message: "What is the deployed website link?",
      default: "https://pilot67.github.io/",
    },
  ]);
};

(() => {
  promptResponse().then((answers) => {
    const newReadmeContent = generateMarkdown(answers)
    fs.writeFile("./output/README.md", newReadmeContent, (err) =>
      err ? console.log(err) : console.log("Successfully created index.html!")
    );
  });
})();
