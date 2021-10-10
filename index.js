const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

const fs = require('fs');
const util = require("util");
const inquirer = require('inquirer');
// const generateHTML = require('./src/generateHTML.js')
// const writeFileAsync = util.promisify(fs.writeFile);

const teamMembers = [];


const managerQuestions = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'managername',
            message: 'Welcome to CLI Team Builder! Let\'s begin! What\'s your Manager\'s name?',
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
    .then((data) => {
        const name = data.managername
        const id = data.managerid
        const email = data.manageremail
        const office = data.office
        const employee = new Manager(name, id, email, office);
        teamMembers.push(employee);
    })
}

const teamPick = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'teamselect',
            message: 'Select which team memebers to add:',
            choices: ['Engineer', 'Intern', 'I\'m done building my team']
        }
    ])
    .then(({teamselect}) => {
        if(teamselect === 'Engineer') {
            engineerQuestions()
        } else if(teamselect === 'Intern') {
            internQuestions()
        }
    })
}

const engineerQuestions = () => {
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
    .then((data) => {
        const name = data.engineername
        const id = data.engineerid
        const email = data.engineeremail
        const github = data.engineergithub
        const employee = new Engineer(name, id, email, github);
        teamMembers.push(employee);
    })
}

const internQuestions = () => {
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
    .then((data) => {
        const name = data.internname
        const id = data.internid
        const email = data.internemail
        const school = data.internschool
        const employee = new Intern(name, id, email, school);
        teamMembers.push(employee);
    })
}
