
const removeFromArray = function(array, valueToRemove) {

    // Load in current array as newArray so we can update it in the function
    let newArray = array;

    // Cycling through each argument provided other than the first (the array argument itself) 
    // we check if the arg's value exists in the newArray, if it does we remove it
    // then if it's removed we move the counter variable back one to make up for the
    // length of the array now being shortened.
    for (arg of arguments) { 
        if (arg !== array) { 
            for (let i = 0; i < array.length; i++) { 
                if (arg === array[i]) { 
                   newArray.splice(i, 1); 
                   i--;
                }
            }
        }
    }

    return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
