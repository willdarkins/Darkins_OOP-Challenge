class Employee{
constructor (name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
}
getName() {
    return this.name;
}

getId() {
    return this.id = Math.floor(Math.random() * 100 + 1);
}

getEmail() {
    return this.email
}

getRole() {
    return 'Employee'
}

}
module.exports = Employee;