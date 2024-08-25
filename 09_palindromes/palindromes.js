const palindromes = function (string) {

    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
         'j', 'k', 'l', 'm', 'n', 'o', 'p',
        'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let array = string
        .split('')
        .map(item => item.toLowerCase())
        .filter(item => alphabet.includes(item));

    let arrayRv = string
        .split('')
        .reverse()
        .map(item => item.toLowerCase())
        .filter(item => alphabet.includes(item));

    console.log({array}, {arrayRv});

    for (let i = 0; i < array.length; i++) {
        if (array[i] !== arrayRv[i]) {
            return false;
        }
    }
    return true;
}

// Do not edit below this line
module.exports = palindromes;
