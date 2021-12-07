const Calculator = require('./calculator');

//  Add Tests
describe('Add method tests', ()=>{
    test('should throw error if not a number ', () => {
        const a = 1;
        const b = '1';
        expect(()=>Calculator.add(a,b)).toThrow();
    })
    test('should add given numbers', ()=>{
        const a = 1;
        const b = 1;
        expect(Calculator.add(a,b)).toBe(2);
    }) 
    test('should add given numbers', ()=>{
        const a = 45;
        const b = 18;
        expect(Calculator.add(a,b)).toBe(a+b);
    }) 
    
})

// Subtract Tests
describe('Subtract method tests', () => {
    test('should throw error if not a number', () => {
    const a = 123;
    const b = 'abcde';
        expect(()=>Calculator.subtract(a,b)).toThrow();
    })

    test('should subtract two numbers', ()=>{
        const a = 10;
        const b = 6;
        expect(Calculator.subtract(a,b)).toBe(a-b);
    })

    
    test('should subtract two numbers', ()=>{
        const a = 15;
        const b = 5;
        expect(Calculator.subtract(a,b)).toBe(10);
    })
})

// Multiply Tests
describe('Multiply method tests',()=>{
    test('should throw an error if not number', () => {
        const a = 546;
        const b = undefined;
        expect(()=>Calculator.multiply(a,b)).toThrow();
    })
    test ('should multiply two numbers', () =>{
        const a = 2;
        const b = 6;
        expect(Calculator.multiply(a,b)).toBe(a*b);
    })
    test ('should multiply two numbers', () => {
        const a = 6;
        const b = 6;
        expect(Calculator.multiply(a,b)).toBe(36);
    })

})

// Divide Tests
describe('Divide method tests',()=>{
    test('should throw an error if not number', () => {
        const a = 1;
        const b = null;
        expect(()=>Calculator.divide(a,b)).toThrow();
    })
    test('should throw an error if parameters contains 0', () => {
        const a = 0;
        const b = 15;
        expect(()=>Calculator.divide(a,b)).toThrow();
    })
    test ('should divide two numbers', () =>{
        const a = 10;
        const b = 2;
        expect(Calculator.divide(a,b)).toBe(a/b);
    })
    test ('should divide two numbers', () =>{
        const a = 12;
        const b = 6;
        expect(Calculator.divide(a,b)).toBe(2);
    })

})

