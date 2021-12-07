const reverseString = require('./reverseString');

test('should return reversed', () => {
    const str = 'abc';
    expect(reverseString(str)).toBe('cba');
})
