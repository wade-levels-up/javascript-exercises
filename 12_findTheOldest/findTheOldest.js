// We provide year of birth and year of death to a function to
// work out the person's age.
// If the death value returns undefined it will equal false
// in which case we assign death the value of the current date
function getAge(death, birth) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

// We reduce the array down to a singular object and return
// the specific person who is the oldest.
// In order to do this we set 'oldest' as the accumulator, though it's
// not necessarily the oldest - at least initially, but it will be.

// On each pass of the reduce method we create two variables, oldestAge
// and personAge, we return the comparison between the two, which, if
// the person being compared against the previous is older, they then
// get returned becoming the new accumulator value.

const findTheOldest = function(people) {
 return people.reduce((init, next) => {
    let initAge = getAge(init.yearOfDeath, init.yearOfBirth);
    let nextAge = getAge(next.yearOfDeath, next.yearOfBirth);
    return initAge < nextAge ? next : init;
 })
};

// Do not edit below this line
module.exports = findTheOldest;
