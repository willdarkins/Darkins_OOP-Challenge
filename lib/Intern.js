//Employee module import
const Employee = require('../lib/Employee');

//Build for Intern class - Which extends from Employee class
class Intern extends Employee {
    constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
}
getSchool() {
    return this.school;
}
getRole() {
    return 'Intern';
}
}
//Exports Intern and Employee modules
module.exports = Intern, Employee;