//Employee module import
const Employee = require('../lib/Employee');

//Build for Intern class - Which extends from Employee class
class Manager extends Employee {
    constructor(name, id, email, officeNumber){
    super(name,id,email);
    this.officeNumber = officeNumber
}
getofficeNumber(){
    return this.officeNumber;
}
getRole(){
    return 'Manager'
}
}

//Exports Manager and Employee modules
module.exports = Manager, Employee;