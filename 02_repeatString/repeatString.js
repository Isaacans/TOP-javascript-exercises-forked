const repeatString = function(text, times) {
    let strRepeated = '';
    if (times < 0) return "ERROR";
    for (let i = 0; i < times; i++) {
        strRepeated += text;
    }
    return strRepeated;
};

// Do not edit below this line
module.exports = repeatString;
