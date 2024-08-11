
function removeFromArray(array, ...args) {

    const newArray = [];

    array.forEach((el) => {
        if (!args.includes(el)){
            newArray.push(el);
        }
    })

    return newArray;
}
// Do not edit below this line
module.exports = removeFromArray;
