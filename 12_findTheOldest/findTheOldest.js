function findTheOldest(arr) {
    let newArr = arr.map(person => {
        if (person.yearOfDeath === undefined) {
            const currentYear = new Date().getFullYear()
            return {name: person.name, age: currentYear - person.yearOfBirth};
        };
        return {name: person.name, age: person.yearOfDeath - person.yearOfBirth};
    });
    newArr.sort((personA, personB) => personA.age - personB.age)

    return newArr[newArr.length - 1];
};

// Do not edit below this line
module.exports = findTheOldest;
