const capitalize = (str) => {
    const firstChartoUpper = str.replace(/\b\w/g, letter=> letter.toUpperCase());
    return firstChartoUpper;
    
}
 module.exports = capitalize;