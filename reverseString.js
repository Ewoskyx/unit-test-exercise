const reverseString = (str) => {
    const reversed = str.split('')
    .reverse()
    .join('');
    return reversed;
};
module.exports = reverseString;