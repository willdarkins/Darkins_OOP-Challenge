const Manager = require('../lib/Manager');

test('creates an employee object', () => {
    const manager = new Manager();
    expect(typeof(manager)).toBe('object');
});