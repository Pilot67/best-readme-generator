const fs = require('fs');
const inquirer = require('inquirer');


const template = ({title, description, installation, usage, contributing, tests, link, github, email, licence}) => 
`<div id="top"></div>  

![MIT License][license-shield]

<br>
<br>

# ${title}
<br>

# Description  
${description}<br>
<p align="right">(<a href="#top">back to top</a>)</p>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#description">Description</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#licence">Licence</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#tests">Tests</a></li>
    <li><a href="#links">Links</a></li>
    <li><a href="#questions">Questions</a></li>
  </ol>
</details>
<hr/>
<br>

## Installation  
${installation}<br>
<p align="right">(<a href="#top">back to top</a>)</p>

## Usage
${usage}<br>
<p align="right">(<a href="#top">back to top</a>)</p><br>

## Licence

<p align="right">(<a href="#top">back to top</a>)</p><br>

## Contributing
${contributing}<br>
<p align="right">(<a href="#top">back to top</a>)</p><br>

## Tests
${tests}<br>
<p align="right">(<a href="#top">back to top</a>)</p><br>

## Links
Published Link: ${link}<br>
<p align="right">(<a href="#top">back to top</a>)</p><br>

## Questions
My github profile, ${github}, can be found [here](https://github.com/${github})<br>
If you would like to contact me directly please email me at ${email}<br>
<p align="right">(<a href="#top">back to top</a>)</p><br>


[license-shield]: https://img.shields.io/badge/Licence-${licence}-brightgreen?style=plastic`;


const promptResponse =() => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the project title?',
        },
        {
            type: 'editor',
            name: 'description',
            message: 'Type in a good description for this project -',
        },
        {
            type: 'editor',
            name: 'installation',
            message: 'What are the installation requirements for this project -',
        },
        {
            type: 'editor',
            name: 'usage',
            message: 'Descrive the usage of this project -',
        },
        {
            type: 'list',
            name: 'licence',
            message: 'What licence is being used',
            choices: ['MIT','junk','other'],
        },
        {
            type: 'editor',
            name: 'tests',
            message: 'List and test applications and how to use them here -',
        },
        {
            type: 'editor',
            name: 'contributing',
            message: 'Confirm how to contribute to this repository -',
            default: 'When contributing to this repository, please first discuss the change you wish to make via email\nwith the owners of this repository before making a pull request'
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
            name: 'link',
            message: 'What is the deployed website link?',
        },

    ]);
};

(() => {
    promptResponse()
    .then ((answers) => {
        const readmeContent = template(answers)
        fs.writeFile('test.md', readmeContent, (err) =>
        err ? console.log(err) : console.log('Successfully created index.html!'))
     })

})();
