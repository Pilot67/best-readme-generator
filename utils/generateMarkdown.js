
const renderLicenseBadge =  (licence) => {
  switch (licence) {
    case "Apache-2.0":
      return `[![License](https://img.shields.io/badge/Licence-Apache--2.0-brightgreen?style=plastic)](#licence)  `;
    case "none":
      return ``
    default: 
      return `[![License](https://img.shields.io/badge/Licence-${licence}-brightgreen?style=plastic)](#licence)  `;
  }
}

function generateMarkdown(data) {
  return `<div id="top"></div>  

${renderLicenseBadge(data.licence)}
  
<br>

# ${data.title}  
<br>

## Table of Contents
  
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Licence](#licence)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Links](#links)
  * [Questions](#questions)
  
<br>

## Description  
${data.description}<br>
<p align="right">(<a href="#top">back to top</a>)</p>
  
  
## Installation  
${data.installation}<br>
<p align="right">(<a href="#top">back to top</a>)</p>
  
## Usage
${data.usage}<br>
<p align="right">(<a href="#top">back to top</a>)</p>
  
## Licence
${renderLicenseSection(data.licence, data.name)}
<p align="right">(<a href="#top">back to top</a>)</p>
  
## Contributing
${data.contributing}<br>
<p align="right">(<a href="#top">back to top</a>)</p>
  
## Tests
${data.tests}<br>
<p align="right">(<a href="#top">back to top</a>)</p>
  
## Links
Published Link: ${data.link}<br>
<p align="right">(<a href="#top">back to top</a>)</p>
  
## Questions
Please direct any questions my Github profile or diret email.  
My github profile, ${data.github}, can be found [here](https://github.com/${data.github})  
If you would like to contact me directly please email me at ${data.email}  
<p align="right">(<a href="#top">back to top</a>)</p>  
`
};

const renderLicenseSection = (licence,name) => {
  if (licence === "Apache-2.0") {
    return `Copyright 2021 ${name}  
  Licensed under the Apache License, Version 2.0 (the "License");  
  you may not use this file except in compliance with the License.  
  You may obtain a copy of the License at  
  [http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)  
  Unless required by applicable law or agreed to in writing, software  
  distributed under the License is distributed on an "AS IS" BASIS,  
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  
  See the License for the specific language governing permissions and  
  limitations under the License.`;
  }else if (licence === "MIT") {
    return `Copyright 2021 ${name}  
  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files  
  (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:  
    
  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.  
    
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,  
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;
  }else {
    return `No licence Selected`;
  }
}

module.exports = generateMarkdown;
