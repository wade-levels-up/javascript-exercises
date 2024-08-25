const findTheOldest = function(arr) {

    let baseArr = arr;

    // get the current year to be able to assign it where no yearOfDeath exists
    const currentYear = (new Date()).getFullYear();

    // break the objects into sub lists so we can use .includes on the array
    for (let i = 0; i < arr.length; i++) {
        baseArr[i] = [baseArr[i].name, baseArr[i].yearOfBirth, baseArr[i].yearOfDeath];
    };

    // where each sub-list contains undefined change the second index to currentYear
    baseArr.forEach(element => {
        if (element.includes(undefined)) {
            element[2] = currentYear;
        }
    });

    console.log(baseArr[0][0]);

    let peopleAndAges = arr.reduce((obj, person, i) => {
        obj[i] = {name: person[0], age: person[2] - person[1]};
        return obj;
        }, []).sort((a, b) => b.age - a.age);
    

    return peopleAndAges[0];

}

//     let peopleAndAges = arr.reduce((obj, person, i) => {
//         obj[i] = {name: person.name, age: person.yearOfDeath - person.yearOfBirth}
//         return obj;
//     }, []).sort((a, b) => b.age - a.age);

//     return peopleAndAges[0];
// };

// Do not edit below this line
module.exports = findTheOldest;
