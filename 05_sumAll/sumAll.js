const sumAll = function(a, b) {

 let sum = 0;
 let largest;
 let smallest;

 // If either number is negative stop here and return error
if (a < 0 || b < 0) {
    return 'ERROR';
}
// if either number is not a whole number return error
if (!Number.isInteger(a) || !Number.isInteger(b)) {
    return 'ERROR';
} 

// Works out the largest number of the two arguments
 if (a > b) {
    largest = a;
    smallest = b;
 } else if (a < b) {
    largest = b;
    smallest = a;
 }
 
 for (let i = smallest; i <= largest; i++) {
    sum += i;
 }

 return sum;

};

// Do not edit below this line
module.exports = sumAll;
