// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge =  (licence) => {
  if (licence === "Apache-2.0") {
    return "Apache--2.0"
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `<div id="top"></div>  

  [![MIT License][license-shield]](#licence)
  
  <br>
  <br>
  
  # ${data.title}
  <br>
  
  # Description  
  ${data.description}<br>
  <p align="right">(<a href="#top">back to top</a>)</p>
  
  <details>
  <summary>Table of Contents</summary>

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Licence](#licence)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Links](#links)
  * [Questions](#questions)
        
  </details>
  
  <hr/>
  <br>
  
  ## Installation  
  ${data.installation}<br>
  <p align="right">(<a href="#top">back to top</a>)</p>
  
  ## Usage
  ${data.usage}<br>
  <p align="right">(<a href="#top">back to top</a>)</p><br>
  
  ## Licence
  This program is utilising the ${data.licence} licence<br>
  click here to view the licence information
  <p align="right">(<a href="#top">back to top</a>)</p><br>
  
  ## Contributing
  ${data.contributing}<br>
  <p align="right">(<a href="#top">back to top</a>)</p><br>
  
  ## Tests
  ${data.tests}<br>
  <p align="right">(<a href="#top">back to top</a>)</p><br>
  
  ## Links
  Published Link: ${data.link}<br>
  <p align="right">(<a href="#top">back to top</a>)</p><br>
  
  ## Questions
  Please direct any questions my Github profile or diret email.<br>
  My github profile, ${data.github}, can be found [here](https://github.com/${data.github})<br>
  If you would like to contact me directly please email me at ${data.email}<br>
  <p align="right">(<a href="#top">back to top</a>)</p><br>
  
  
  [license-shield]: https://img.shields.io/badge/Licence-${renderLicenseBadge(data.licence)}-brightgreen?style=plastic`;
}

module.exports = generateMarkdown;
