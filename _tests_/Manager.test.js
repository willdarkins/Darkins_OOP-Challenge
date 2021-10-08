const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager();
    expect(typeof(manager)).toBe('object');
});

test('returns name of manager', () => {
    const name = 'Dave';
    const manager = new Manager(name);
    expect(manager.getName()).toEqual(expect.any(String));
});

test('returns id number of Manager', () => {
    const id = 245;
    const manager = new Manager('Dave', id);
    expect(manager.getId()).toEqual(expect.any(Number));
});

test('returns email address of manager', () => {
    const email = 'davedidlio@gmail.com';
    const manager = new Manager('Dave', 245, email);
    expect(manager.getEmail()).toEqual(expect.any(String));
});