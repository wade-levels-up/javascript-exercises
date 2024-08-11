const reverseString = function(string) {

    let splitString = string.split("");
    let reversedString = "";

    while (splitString.length > 0) {
        reversedString += splitString[splitString.length - 1];
        splitString.pop();
    }

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
