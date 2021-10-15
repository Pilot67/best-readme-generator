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
            message: 'Type in a good description for this project -',
        },
        {
            type: 'list',
            name: 'licence',
            message: 'What licence is being used',
            choices: ['MIT','junk','other'],
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your Github user name?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your Email address?',
        },
        {
            type: 'input',
            name: 'deployed',
            message: 'Waht is the deployed website link?',
        },

    ]);
};

const readmeVar = ({github,email,deployed}) => {
    const temp = `my Github address is https://github.com/${github}`
    console.log(temp);
    console.log(answers);
};



(() => {
    promptResponse()
    .then ((answers) => readmeVar(answers))
})();
