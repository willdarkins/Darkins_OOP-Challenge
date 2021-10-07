function Employee(name = '') {
    this.name = name;

    this.id = Math.floor((Math.random() * 100) + 1);
    this.email = 'willdarkins@gmail.com';
}

module.exports = Employee;