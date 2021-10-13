//Imports Engineer module
const Engineer = require('../lib/Engineer');

test('creates a Engineer object', () => {
    const engineer = new Engineer();
    expect(typeof(engineer)).toBe('object');
});

test('returns name of Engineer', () => {
    const name = 'Chet';
    const engineer = new Engineer(name);
    expect(engineer.getName()).toEqual(expect.any(String));
});

test('returns id number of Engineer', () => {
    const id = 666;
    const engineer = new Engineer('Chet', id);
    expect(engineer.getId()).toEqual(expect.any(Number));
});

test('returns email address of Engineer', () => {
    const email = 'chetdingus@gmail.com';
    const engineer = new Engineer('Chet', 666, email);
    expect(engineer.getEmail()).toEqual(expect.any(String));
});

test('returns Engineer Github user name', () => {
    const github = 'chetdingus';
    const engineer = new Engineer('Chet', 666,'chetdingus@gmail.com', github);
    expect(engineer.getGithub()).toEqual(expect.any(String));
});

test('returns Engineer as a string', () => {
    const employeeOutput = 'Engineer';
    const engineer = new Engineer('Chet', 666,'chetdingus@gmail.com', 'chetdingus');
    expect(engineer.getRole()).toBe('Engineer');
});