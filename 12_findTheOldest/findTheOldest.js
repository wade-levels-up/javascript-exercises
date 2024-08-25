// We provide year of birth and year of death to a function to
// work out the person's age.
// If the death value returns undefined it will equal false
// in which case we assign death the value of the current date
const getAge = function(birth, death) {
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
    return people.reduce((oldest, person) => {
        let oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        let personAge = getAge(person.yearOfBirth, person.yearOfDeath);
        return oldestAge < personAge ? person : oldest;     
    })
};

// Do not edit below this line
module.exports = findTheOldest;
