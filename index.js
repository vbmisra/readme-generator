const inquirer = require("inquirer");
const fs = require("fs");
inquirer
  .prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "name",
    },
    {
      type: "input",
      message: "Where do you live?",
      name: "location",
    },
    {
      type: "input",
      message: "Tell us about yourself:",
      name: "bio",
    },
    {
        type: "input",
        message: "What is your linkedin URL?",
        name: "linkedInURL",
    },
    {
        type: "input",
        message: "What is your github URL?",
        name: "githubURL",
    },
  ])
  .then((response) => {
    // let choicesStr = response.name.join(",")
    // let msg = `My Names is ${response.name} I write ${response.location}, and my prefered method of communications are: ${response.bio}, ${response.linkedInURL}, and ${response.githubURL} \n`
    // let msg = `<!DOCTYPE html>\n<html lang="en">\n<head>\n\t<meta charset="UTF-8">\n<meta http-equiv="X-UA-Compatible" content="IE=edge">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">\n<title>Portfolio</title>\n
    // </head>\n<body>\n<div class="card">\n<div class="card-body">\n ${response.name}\n</div>\n<div class="card-body">\n ${response.location} \n            </div> \n            <div class="card-body">\n                ${response.bio}\n            </div>\n            <div class="card-body">\n                ${response.linkedInURL}\n            </div>\n
    //             <div class="card-body">\n                ${response.githubURL}\n            </div>\n        </div>\n    </body>\n    </html>`
    let msg = 
    `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>Portfolio</title>
</head>
<body>
    <div class="card">
        <div class="card-body">
          ${response.name}
        </div>
        <div class="card-body">
          ${response.location}
        </div>
        <div class="card-body">
          ${response.bio}
        </div>
        <div class="card-body">
          ${response.linkedInURL}
        </div>
        <div class="card-body">
          ${response.githubURL}
        </div>
    </div>
</body>
</html>`
    fs.writeFile(
      "portfolio.html",
      msg,
      (err) => {
        if (err) throw err;
        console.log("Success! Saved!");
      }
    );
  });