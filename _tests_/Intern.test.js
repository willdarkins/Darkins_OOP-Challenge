const Intern = require('../lib/Intern');

test('creates a Intern object', () => {
    const intern = new Intern();
    expect(typeof(intern)).toBe('object');
});