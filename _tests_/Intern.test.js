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