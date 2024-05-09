const leapYears = function(year) {
    // Original attempt below, commented out
    /*
    if (year % 4 === 0) {
        if (year % 100 !== 0) {
            return true;
        }
        else if (year % 100 === 0 && year % 400 === 0) {
            return true;
        }
        else {
            return false;
        }
    }
    return false;
    */
   // 2nd attempt after viewing solution, below
   return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
};

// Do not edit below this line
module.exports = leapYears;
