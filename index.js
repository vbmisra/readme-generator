const inquirer = require("inquirer");
const fs = require("fs");

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is your project titled?",
    },
    {
      type: "input",
      name: "description",
      message: "Describe your project",
    },
    {
      type: "input",
      name: "installation",
      message: "How is your project installed?",
    },
    {
      type: "input",
      name: "usage",
      message: "How is your project used?",
    },
    {
      type: "input",
      name: "contributing",
      message: "Name contributors to your project",
    },
    {
      type: "input",
      name: "test",
      message: "What are the test guidelines for your project?",
    },
    {
      type: "checkbox",
      name: "license",
      message: "Which license applies to your project?",
      choices: ["MIT [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)", "Boost [![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)", "Eclipse [![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"],
    },
    {
      type: "input",
      name: "github",
      message: "Enter your github username:",
    },
    {
      type: "input",
      name: "email",
      message: "Enter your email address:",
    },
  ]);
};

const generateREADME = ({ title, description, installation, usage, contributing, test, license, github, email }) =>
`# ${title}

## Table of Contents
* Description
* Installation
* Usage
* License
* Contributing
* Tests
* Questions

## Description
${description}

## Installation
${installation}

## Usage
${usage}

## License
${license}

## Contributing
${contributing}

## Tests
${test}

## Questions
Visit the github repository at https://www.github.com/${github}

For additional questions, send an email to ${email}`;

const init = () => {
  promptUser()
    .then((answers) => fs.writeFileSync('New_README.md', generateREADME(answers)))
    .then(() => console.log('Successfully wrote README.md.'))
    .catch((err) => console.error(err))
};

init();

