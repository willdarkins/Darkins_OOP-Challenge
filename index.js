// const Manager = require('../lib/Manager');
// const Engineer = require('../lib/Engineer');
// const Intern = require('../lib/Intern');

const fs = require('fs');
const util = require("util");
const inquirer = require('inquirer');
// const generateHTML = require('./src/generateHTML.js')
// const writeFileAsync = util.promisify(fs.writeFile);

const questions = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'welcomeChoice',
            message: 'Welcome to CLI Team Builder\n Let\'s start building your team!\n Please select one of the following members to join your team:(Required)',
            choices: ['Manager', 'Engineer', 'Intern'],

        }
    ])
}

questions();