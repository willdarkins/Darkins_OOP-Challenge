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