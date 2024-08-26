// we have 2 solutions here, an easier one and a more advanced one.
// The easiest way to get an array of the rest of the arguments that are passed to a function
// is using the rest operator. If this is unfamiliar to you look it up!

const removeFromArray = function (array, ...args) {

  const newArray = [];

  array.forEach((item) => {
    if (!args.includes(item)) {
      newArray.push(item);
    }
  });
  
  return newArray;
};

// A simpler, but more advanced way to do it is to use the 'filter' function,
// which basically does what we did with the forEach above.

// const removeFromArray = function(array, ...args) {
//   return array.filter(val => !args.includes(val))
// }
//

module.exports = removeFromArray;
