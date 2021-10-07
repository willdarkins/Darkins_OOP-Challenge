const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee ('Will');

    expect(employee.name).toBe('Will');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})