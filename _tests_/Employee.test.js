const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe('object');
})

test('returns name of employee', () => {
    const name = 'Will';
    const employee = new Employee(name);
    expect(employee.getName()).toBe(name);
})

test('returns id number of employee', () => {
    const id = 98;
    const employee = new Employee('Will', id)
    expect(employee.getId()).toEqual(expect.any(Number))
})