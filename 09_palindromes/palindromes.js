const palindromes = function (str) {
    let processedStr = str
        .toLowerCase()
        .split('')
        .filter(char => /[a-zA-Z0-9]/.test(char))
        .join('');
    return processedStr === processedStr.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
