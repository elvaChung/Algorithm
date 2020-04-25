// 1. Learn about Functional Programming
const prepareTea1 = () => '1. greenTea';

const getTea1 = (numOfCups) => {
    const teaCups = [];

    for(let cups = 0; cups < numOfCups; cups += 1){
        const teaCup = prepareTea1();
        teaCups.push(teaCup);
    }
    return teaCups;
}

const tea4TeamFCC1 = getTea1(40);
console.log(tea4TeamFCC1);

// 2. Understand Functional Programming Terminology
const preparGreenTea2 = () => '2. greenTea';

const prepareBlackTea2 = () => '2. blackTea';

const getTea2 = (prepareTea, numOfCups) => {
    const teaCups = [];

    for(let cups = 0; cups < numOfCups; cups += 1) {
        const teaCup = prepareTea();
        teaCups.push(teaCup);
    }
    return teaCups;
};

const tea4GreenTeamFCC2 = getTea2(preparGreenTea2, 27);
const tea4BlackTeamFCC2 = getTea2(prepareBlackTea2, 13);

console.log(
    tea4GreenTeamFCC2,
    tea4BlackTeamFCC2
);

// 3. Understand the Hazards of Using Imperative Code
// 4. Avoid Mutations and Side Effects Using Functional Programming
// 5. Pass Arguments to Avoid External Dependence in a Function
// 6. Refactor Global Variables out of Functions
// 7. Use the map Method to Extract Data from an Array 
// 8. Implement map on a Prototype
// 9. Use the filter Method to Extract Data from an Array
// 10. Implement the filter Method on a Prototype
// 11. Return Part of an Array Using the slice Method
// 12. Remove Elements form an Array Using slice Instead of splice
