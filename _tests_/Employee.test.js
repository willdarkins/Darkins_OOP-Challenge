const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe('object');
});

test('returns name of employee', () => {
    const name = 'Will';
    const employee = new Employee(name);
    expect(employee.getName()).toEqual(expect.any(String));
});

test('returns id number of employee', () => {
    const id = 98;
    const employee = new Employee('Will', id);
    expect(employee.getId()).toEqual(expect.any(Number));
});

test('returns email address of employee', () => {
    const email = 'willdarkins@gmail.com';
    const employee = new Employee('Will', 33, email);
    expect(employee.getEmail()).toEqual(expect.any(String));
});

test('returns Employee as a string', () => {
    const employeeOutput = 'Employee';
    const employee = new Employee('Will', 33, 'willdarkins@gmail.com');
    expect(employee.getRole()).toBe('Employee');
});