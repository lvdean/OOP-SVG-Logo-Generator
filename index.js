const inquirer = require('inquirer');
const fs = require('fs')
const { Triangle, Square, Circle } = require("./lib/shapes");

function questions() {

inquirer
  .prompt([
    /* QUESTIONS FOR CREATING LOGO SHAPE */

    {
      type: "list",
      name: "Shape",
      message: "What would you like the shape of your logo to be?",
      choices: ['Square', 'Circle', 'Triangle']
    },
    {
      type: "input",
      name: "shapeColour",
      message: "What colour would you like to fill your shape? - Use either colour keyword or hexadecimal number"
    },

    {
      type: "input",
      name: "Text",
      message: "Enter the text for your logo (up to 3 characters only!)"
    },

    {
      type: "input",
      name: "textColour",
      message: "What colour would you like your text to be? (Either colour keyword or hexadecimal number)"
    },

  ])


  .then((answers) => {
    console.log(answers)

    if (answers.Shape === "Triangle") {
      shapeChoice = `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeColour}"/>`;
    } else if (answers.Shape === "Square") {
      shapeChoice = `<rect width="150" height="150" x="70" y="30" fill="${answers.shapeColour}"/>`;
    } else {
      shapeChoice = `<circle cx="150" cy="100" r="80" fill="${answers.shapeColour}"/>`;
    }

    // file layout
    let svgLogo = `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shapeChoice}
     <text x="150" y="120" font-size="60" text-anchor="middle" fill="${answers.textColour}">${answers.Text}</text>
     </svg>
    `


    // checking text length is no more than 3 characters
    if (answers.Text.length > 3 || 0) {
      console.log("Must enter a value of no more than 3 characters");
      questions();
    } else {
      fs.writeFile("logo.svg", svgLogo, function (err) {
        if (err) {
          console.log(err)
        } else {
          console.log("Successfully created file!")
        }
      });
    }
  });
};

questions()

