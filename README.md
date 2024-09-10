
# SVG LOGO GENERATOR

![Static Badge](https://img.shields.io/badge/%20JAVASCRIPT%20%20-%20yellow%20?style=social&logo=javascript&logoColor=yellow&color=yellow)


## TABLE OF CONTENTS

- [Description](#description)
- [Tasks](#tasks)
- [Installation](#installation)
- [Screenshots](#screenshots)
- [Test Instructions](#test-instructions)
- [Links](#links)



## Description
The task was to build a Node.js command-line application that takes in user input to generate a logo and save it as an SVG file. The application prompts the user to select a colour and shape, provide text and text colour for the logo, and save the generated SVG to a .svg file.

In addition, the application included Triangle, Circle, and Square classes, as well as tests for each of these classes using Jest. 

## Tasks

- Create a command-line application that accepts user input.
- When user is prompted for text they can enter up to three characters.
- When user is prompted for the text color they can enter a color keyword (OR a hexadecimal number).
- When user is prompted for a shape they are presented with a list of shapes to choose from: circle, triangle, and square.
- When user is prompted for the shape's color they can enter a color keyword (OR a hexadecimal number).
- When input is enetered for all the prompts, an SVG file is created named `logo.svg`.
- The output text "Generated logo.svg" is printed in the command line.
- When user opens the `logo.svg` file in a browser, they are shown a 300x200 pixel image that matches the criteria entered.



## Installation

Clone the repo: git clone SSH git@github.com:lvdean/OOP-SVG-Logo-Generator.git

Open in VS Code. If you do not have VS code you must install it.

Next, use the terminal to run the command npm i to install the dependencies associated with this application (developers may need to install inquirer and jest directly from the command line, to do so the command for inquirer will be npm i inquirer@8.2.4 to install v8.2.4 of the inquirer, and npm i jest to install the latest version of jest).

To run the application, within the terminal, type the command node index.js.


    
## Screenshots

<img width="800" alt="image" src="https://github.com/user-attachments/assets/124f5e1d-1df6-4c3c-87b9-c485239474f4">


<img width="800" alt="image" src="https://github.com/user-attachments/assets/124f5e1d-1df6-4c3c-87b9-c485239474f4">


<img width="600" alt="image" src="https://github.com/user-attachments/assets/d2528be8-ca0d-41f5-8b39-0fdd70bde4e0">


<img width="290" alt="image" src="https://github.com/user-attachments/assets/447f8037-7462-4bc4-80c7-478448933359">


<video src="./DEMOS/LOGO GENERATOR.mp4" width="620" height="440" controls></video>




## Test Instructions

To run tests, run the following command
 npm run test.

As of now there is one test suite with three tests. The test suite is checking for a render() method to return a string for the corresponding SVG file with the given shape colour.

<img width="600" alt="image" src="https://github.com/user-attachments/assets/8124a300-e055-41f8-bdfd-6edfa8e3f0d0">


<img width="600" alt="image" src="https://github.com/user-attachments/assets/dbae9edd-3a66-4ef9-98ba-a2ab957f149b">

<img width="391" alt="image" src="https://github.com/user-attachments/assets/4bcade14-ed21-4f84-81df-682a02c8eb52">


<video src="./DEMOS/Shapes Test.mp4" width="620" height="440" controls></video>


## Links
[![Github](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/lvdean/OOP-SVG-Logo-Generator)

[Here](https://drive.google.com/drive/folders/18YMxfDZqYuIx1pJMDuOfZMhZm6mpcgKp?usp=drive_link) is the demonstration of the app and test
