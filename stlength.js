const stringLength = (string) => {
    if (string.length > 1 && string.length <= 10) {
        return string.length;
    }else {
        throw new Error('string length must be between 1-10(included)');
    }
    
}

module.exports = stringLength;