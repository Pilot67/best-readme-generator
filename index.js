const fs = require('fs');
const inquirer = require('inquirer');

const promptResponse =() => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the project title?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Type in a good description for this project',
        },
        {
            type: 'list',
            name: 'licence',
            message: 'What licence is being used',
            choices: ['MIT','junk','other'],
        },
    ]);
};

const init =() => {
    promptResponse()
    .then((answers) => console.log(answers))
};

init();