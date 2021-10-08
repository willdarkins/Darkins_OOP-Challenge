const Engineer = require('../lib/Engineer');

test('creates a engineer object', () => {
    const engineer = new Engineer();
    expect(typeof(engineer)).toBe('object');
});

test('returns name of engineer', () => {
    const name = 'Chet';
    const engineer = new Engineer(name);
    expect(engineer.getName()).toEqual(expect.any(String));
});