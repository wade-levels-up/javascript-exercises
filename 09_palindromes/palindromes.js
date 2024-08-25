const palindromes = function (string) {

    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
         'j', 'k', 'l', 'm', 'n', 'o', 'p',
        'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let array = string
        .toLowerCase().split('')
        .filter(item => alphabet.includes(item))
        .join('');

    let arrayRv = array.split('').reverse().join('');

    return array === arrayRv;
}

// Do not edit below this line
module.exports = palindromes;
