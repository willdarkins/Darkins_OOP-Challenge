const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const generateHTML = require('./src/generateHTML.js')
const writeFileAsync = util.promisify(fs.writeFile);

const teamMembers = [];


const managerprompt = () => {
    console.log(`
    ============================
    Welcome to CLI Team Builder!
    ============================
    `);
    inquirer.prompt([
        {
            type: 'input',
            name: 'managername',
            message: 'Let\'s begin! What\'s your Manager\'s name?',
            validate: managerAnswer => {
                if (managerAnswer) {
                    return true;
                } else {
                    console.log('\nA manager name is required:')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerid',
            message: 'Enter Manager ID number:',
            validate: managerAnswer => {
                if (managerAnswer) {
                    return true;
                } else {
                    console.log('\nManager\'s employee ID number required:')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'manageremail',
            message: 'Enter Manager email address:',
            validate: managerAnswer => {
                if (managerAnswer) {
                    return true;
                } else {
                    console.log('\nManager\'s email address required:')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'manageroffice',
            message: 'Enter Manager office number:',
            validate: managerAnswer => {
                if (managerAnswer) {
                    return true;
                } else {
                    console.log('\nManager\'s office number required:')
                    return false;
                }
            }
        }
    ])
    .then((managerInput) => {
        const {name, id, email, office} = managerInput
        const employee = new Manager(name, id, email, office);
        teamMembers.push(employee);
        teamPick();
    })
}

const teamPick = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'teamselect',
            message: 'Select which team memebers to add:',
            choices: ['Engineer', 'Intern', 'I\'m done building my team']
        }
    ])
    .then(({teamselect}) => {
        if(teamselect === 'Engineer') {
            engineerPrompt()
        } else if(teamselect === 'Intern') {
            internPrompt()
        }
    })
}

const continuePrompt = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'continueselect',
            message: 'Would you like to add more team members?',
            choices: ['Yes','No']
        }
    ])
    .then(({continueselect}) => {
        if(continueselect === 'Yes') {
            teamPick();
        } 
    })
}

const engineerPrompt = () => {
    console.log(`
    ====================
    Engineer Information
    ====================
    `);
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineername',
            message: 'What\'s your engineer\'s name?',
            validate: engineerAnswer => {
                if (engineerAnswer) {
                    return true;
                } else {
                    console.log('\nAn engineer name is required:')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerid',
            message: 'Enter Engineer ID number:',
            validate: engineerAnswer => {
                if (engineerAnswer) {
                    return true;
                } else {
                    console.log('\nEngineer\'s employee ID number required:')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineeremail',
            message: 'Enter Engineer email address:',
            validate: engineerAnswer => {
                if (engineerAnswer) {
                    return true;
                } else {
                    console.log('\nEngineer\'s email address required:')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineergithub',
            message: 'Enter Engineer Github user name:',
            validate: engineerAnswer => {
                if (engineerAnswer) {
                    return true;
                } else {
                    console.log('\nEngineer\'s Github user name required:')
                    return false;
                }
            }
        },
    ])
    .then((engineerInput) => {
        const {name, id, email, github} = engineerInput
        const employee = new Engineer(name, id, email, github);
        teamMembers.push(employee);
        continuePrompt();
    })
}

const internPrompt = () => {
    console.log(`
    ==================
    Intern Information
    ==================
    `);
    inquirer.prompt([
        {
            type: 'input',
            name: 'internname',
            message: 'What\'s your intern\'s name?',
            validate: internAnswer => {
                if (internAnswer) {
                    return true;
                } else {
                    console.log('\nAn intern name is required:')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internid',
            message: 'Enter Intern ID number:',
            validate: internAnswer => {
                if (internAnswer) {
                    return true;
                } else {
                    console.log('\nIntern\'s employee ID number required:')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internemail',
            message: 'Enter Intern email address:',
            validate: internAnswer => {
                if (internAnswer) {
                    return true;
                } else {
                    console.log('\nIntern\'s email address required:')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internschool',
            message: 'Enter Intern\'s current school:',
            validate: internAnswer => {
                if (internAnswer) {
                    return true;
                } else {
                    console.log('\nIntern\'s current school is required:')
                    return false;
                }
            }
        },
    ])
    .then((internInput) => {
        const {name, id, email, school} = internInput
        const employee = new Intern(name, id, email, school);
        teamMembers.push(employee);
        continuePrompt();
    })
}

async function init() {
    try {
        const data = await managerprompt()
        const fileSpecs = `./dist/TeamPage.html`
        const generateContent = generateHTML(data)
        await writeFileAsync(fileSpecs, generateContent)
        console.log('Your team page has been created in the dist sub-directory!')
    } catch (err) {
        console.log(err)
    }
}

init();