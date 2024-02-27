const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.


function promptManager() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the manager\'s name:'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter the manager\'s ID:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the manager\'s email:'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter the manager\'s office number:'
        }
    ]);
}

// Function to prompt for engineer's information
function promptEngineer() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the engineer\'s name:'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter the engineer\'s ID:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the engineer\'s email:'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter the engineer\'s GitHub username:'
        }
    ]);
}

// Function to prompt for intern's information
function promptIntern() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the intern\'s name:'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter the intern\'s ID:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the intern\'s email:'
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter the intern\'s school:'
        }
    ]);
}

// Function to prompt for additional team members
function promptAdditionalMember() {
    return inquirer.prompt({
        type: 'list',
        name: 'choice',
        message: 'Would you like to add another team member?',
        choices: ['Engineer', 'Intern', 'No, finish building team']
    });
}

// Function to initialize the application
async function init() {
    let team = [];
    let managerInfo = await promptManager();
    let manager = new Manager(managerInfo.name, managerInfo.id, managerInfo.email, managerInfo.officeNumber);
    team.push(manager);

    let addMore = true;
    while (addMore) {
        let { choice } = await promptAdditionalMember();
        if (choice === 'Engineer') {
            let engineerInfo = await promptEngineer();
            let engineer = new Engineer(engineerInfo.name, engineerInfo.id, engineerInfo.email, engineerInfo.github);
            team.push(engineer);
        } else if (choice === 'Intern') {
            let internInfo = await promptIntern();
            let intern = new Intern(internInfo.name, internInfo.id, internInfo.email, internInfo.school);
            team.push(intern);
        } else {
            addMore = false;
        }
    }

    // After all team members are added, you can use the 'team' array to generate HTML or perform other operations
    console.log('Team:', team);
}

// Call the init function to start the application
init();