//Imports Intern module
const Intern = require('../lib/Intern');

test('creates a Intern object', () => {
    const intern = new Intern();
    expect(typeof(intern)).toBe('object');
});

test('returns name of Intern', () => {
    const name = 'Billy';
    const intern = new Intern(name);
    expect(intern.getName()).toEqual(expect.any(String));
});

test('returns id number of Intern', () => {
    const id = 456;
    const intern = new Intern('Billy', id);
    expect(intern.getId()).toEqual(expect.any(Number));
});

test('returns email address of Intern', () => {
    const email = 'billybutts@gmail.com';
    const intern = new Intern('Billy', 456, email);
    expect(intern.getEmail()).toEqual(expect.any(String));
});

test('returns Intern school name', () => {
    const school = 'Oregon State';
    const intern = new Intern('Billy', 456,'billybutts@gmail.com', school);
    expect(intern.getSchool()).toEqual(expect.any(String));
});

test('returns Intern as a string', () => {
    const employeeOutput = 'Intern';
    const intern = new Intern('Billy', 456,'billybutts@gmail.com', 'Oregon State');
    expect(intern.getRole()).toBe('Intern');
});