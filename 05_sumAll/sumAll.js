const sumAll = function(numAdd1, numAdd2) {
    let sum = 0;
    if (numAdd1 > numAdd2) {
        numAddTemp = numAdd1; 
        numAdd1 = numAdd2;
        numAdd2 = numAddTemp;
    }
        
    if (numAdd1 < 0 || numAdd2 < 0) {
        return 'ERROR';
    }

    if (typeof numAdd1 !== 'number' || typeof numAdd2 !== 'number') {
        return 'ERROR';
    } 
    for (let i = numAdd1; i <= numAdd2; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
