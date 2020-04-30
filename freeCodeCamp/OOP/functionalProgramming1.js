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
let Window = function(tabs) {
    this.tabs = tabs;
}

Window.prototype.join = function(otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
}

Window.prototype.tabOpen = function(tab) {
    this.tabs.push('new tab');
    return this;
}

Window.prototype.tabClose = function(index) {
    let tabsBeforeIndex = this.tabs.splice(0, index);
    let tabsAfterIndex = this.tabs.splice(1);
    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex);
    return this;
}

let workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']);
let socialWindow = new Window(['FB', 'Glitter','Reddit', 'Twitter', 'Medium']);
let videoWindow = new Window(['Netflix', "YouTube", 'Vimeo', 'Vine']);

let finalTabs = socialWindow
    .tabOpen()
    .join(videoWindow.tabClose(2))
    .join(workWindow.tabClose(1)).tabOpen();

console.log(finalTabs.tabs);

// 4. Avoid Mutations and Side Effects Using Functional Programming
let fixedValue = 4;

function incrementer() {
    return fixedValue + 1;    
}

console.log(fixedValue);
console.log(incrementer());

// 5. Pass Arguments to Avoid External Dependence in a Function
let fixedValue5 = 4;
function incrementer5(value) {
    return value + 1;    
}

console.log(fixedValue5);
console.log(incrementer5(fixedValue5));

// 6. Refactor Global Variables out of Functions

// 7. Use the map Method to Extract Data from an Array 
// 8. Implement map on a Prototype
// 9. Use the filter Method to Extract Data from an Array
// 10. Implement the filter Method on a Prototype
// 11. Return Part of an Array Using the slice Method
// 12. Remove Elements form an Array Using slice Instead of splice
