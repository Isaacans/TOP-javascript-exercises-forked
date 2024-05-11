const add = function(numA, numB) {
  return numA + numB;
};

const subtract = function(numA, numB) {
	return numA - numB;
};

const sum = function(arr) {
	return arr.reduce((total, currentValue) => total + currentValue, 0);
};

const multiply = function(arr) {
  return arr.reduce((product, currentValue) => product * currentValue, 1);
};

const power = function(numA, numB) {
	return numA ** numB;
};

const factorial = function(num) {
  let factorial = 1;
	for (let i = 1; i <= num; i++) {
    factorial *= i;    
  };
  return factorial;
};

// This is another implementation of Factorial that uses recursion
// THANKS to @ThirtyThreeB!
const recursiveFactorial = function (n) {
  if (n === 0) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
