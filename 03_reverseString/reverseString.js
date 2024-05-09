const reverseString = function(str) {
    // For each index of a string pop the last element 
    // and push it to an empty string variable
    /* 
    */
   let strReversed = '';

    for (let i = str.length - 1; i >= 0; i--) {
        charCopy = str.charAt(i)
        strReversed += charCopy;
    }
    return strReversed;
};

// Do not edit below this line
module.exports = reverseString;
