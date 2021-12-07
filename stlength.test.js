const stringLength = require ('./stlength');
test('returns length of the string', ()=>{
 const str = 'abcde';   
 expect(stringLength(str)).toBe(5);
});

test('string length between 1-10(included)', () => {
  const str = '';
    expect(()=> stringLength(str)).toThrow();  
});