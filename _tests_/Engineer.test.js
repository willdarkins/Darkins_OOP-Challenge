const Engineer = require('../lib/Engineer');

test('creates a engineer object', () => {
    const engineer = new Engineer();
    expect(typeof(engineer)).toBe('object');
});