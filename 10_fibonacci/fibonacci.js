const fibonacci = function(count) {
    
    if (typeof(count) !== 'number') {
        count = parseInt(count);
    };

    if (count < 0) return "OOPS";
    if (count === 1) return 1;
    if (count === 2) return 1;
    
    let fib = 0;
    let n1 = 1;
    let n2 = 1; 
    
    for (let i = 2; i < count; i++) {
        fib = n1 + n2;
        n1 = n2;
        n2 = fib;
    };
    
    return fib;

    // Another way to do it is by using an iterative approach with an array containing two values, 0 and 1.
    // const fib = [0, 1];
    // for (let i = 2; i <= n; i++) {
    //    fib[i] = fib[i - 1] + fib[i - 2];
    // }
    // return fib[n];
};

// Do not edit below this line
module.exports = fibonacci;
