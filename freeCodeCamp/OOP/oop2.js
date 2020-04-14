// 1. Understand Own Properties
function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps1 = [];

for(let property in canary){
    if(canary.hasOwnProperty(property)){
        ownProps1.push(property);
    }
}

console.log(ownProps1);

// 2. Use Prptotype Properties to Reduce Duplicate Code
function Dog1(name){
    this.name = name;
}

Dog1.prototype.numLegs = 4;

let beagle1 = new Dog1("Snoopy");
let bulldog1 = new Dog1("Happy");

console.log(beagle1.numLegs);
console.log(bulldog1);

// 3. Iterate Over All Properties
function Dog2(name){
    this.name = name;
}

Dog2.prototype.numLegs = 4;

let beagle2 = new Dog2("Snoopy");

let ownProps2 = [];
let prototypeProps2 = [];

for(let property in beagle2){
    if(beagle2.hasOwnProperty(property)){
        ownProps2.push(property);
    } else {
        prototypeProps2.push(property);
    }
}
console.log(ownProps2);
console.log(prototypeProps2);

// 4. Understand the Constructor Property
function Dog3(name) {
    this.name = name;
}

function joinDogFraternity(candidate) {
    if(candidate.constructor === Dog3) {
        return true;
    } else {
        return false;
    }
}

let dog = new Dog3("Snoopy");
console.log(dog.constructor === Dog3);

// 5. Change the Prototype to a New Object

// 6. Remember to Set the Constructor Property when Changing the Prototype

// 7. Understand Where an Object's Prototype Comes From 

// 8. Understand the Prototype Chain

// 9. Use Inheritance so You don't Repeat Yourself

// 10. Inherit Behaviors frm a Supertype
