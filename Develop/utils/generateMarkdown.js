// function to generate markdown for README
function generateMarkdown(data) {
  return `# <h1 align="center">${data.title}</h1>
  
  ![badge](https://img.shields.io/badge/license-${data.license}-blue)

  ## Description
  ${data.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ![badge](https://img.shields.io/badge/license-${data.license}-blue)

  This application allows licensing by the ${data.license} license.

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  ${data.questions}<br>
  Check me out on Github: [${data.username}](https://github.com/${data.username})
  <br>Feel free to email me with any questions: ${data.email}

  _This README was carefully crafted by [readme-generator](https://github.com/benyunus1/readme-generator)_
`;
}

module.exports = generateMarkdown;
