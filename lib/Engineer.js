//Employee module import
const Employee = require('../lib/Employee');

//Build for Engineer class - Which extends from Employee class
class Engineer extends Employee {
    constructor(name, id, email, github) {
    super(name, id, email,);
    this.github = github;
}
getGithub(){
    return this.github
}
getRole(){
    return 'Engineer';
}
}
//Exports Engineer and Employee modules
module.exports = Engineer, Employee;