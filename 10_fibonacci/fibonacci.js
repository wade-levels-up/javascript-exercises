function generateFibonacci(positions) {
    let seq = [1, 1];
    for (let i = 1; i < positions; i++) {
        seq.push(seq[i - 1] + seq[i]);
    }
    return seq;
}


const fibonacci = function(seqPos) {
    if (+seqPos === 0) {
        return 0;
    } else if (+seqPos < 0) {
        return 'OOPS';
    } else {
    let fibonacci = generateFibonacci(+seqPos - 1);
    return fibonacci[+seqPos - 1];
    }
}

//  In this exercise, the Fibonacci sequence used is 1, 1, 2, 3, 5, 8, etc.

// Do not edit below this line
module.exports = fibonacci;
