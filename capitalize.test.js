const capitalize = require('./capitalize');

test('first character should capitalized', ()=>{
    const str = 'capitalize';
    expect(capitalize(str)).toBe('Capitalize');
})