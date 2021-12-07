class Calculator {
    static add(a,b) {
        if (typeof a === 'number' && typeof b === 'number'){
            return a + b;
        } else {
            throw new Error ('parameters should number only');
        }
        
    }

    static subtract(a,b){
        if (typeof a === 'number' && typeof b === 'number'){
            return a - b;
        } else {
            throw new Error ('parameters should number only');
        }
    }

    static multiply(a,b){
        if (typeof a === 'number' && typeof b === 'number'){
            return a * b;
        } else {
            throw new Error ('parameters should number only');
        }
    }

    static divide (a,b){
        if (typeof a === 'number' && typeof b === 'number'){
            if ( a === 0 || b === 0){
                throw new Error('no zero is allowed');
            } else {
                return a / b;
            }
        } else {
            throw new Error ('parameters should number only');
        }
    }
}

module.exports = Calculator;