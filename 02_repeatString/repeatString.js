const repeatString = function(string, repeat) {
    let newString = "";

    if (repeat < 0) {
        return "ERROR";
    }

    for (let i = 0; i < repeat; i++) {
        newString += string;
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
