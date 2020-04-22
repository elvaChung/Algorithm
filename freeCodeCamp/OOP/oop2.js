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

console.log("1. "+ownProps1);

// 2. Use Prptotype Properties to Reduce Duplicate Code
function Dog1(name){
    this.name = name;
}

Dog1.prototype.numLegs = 4;

let beagle1 = new Dog1("Snoopy");
let bulldog1 = new Dog1("Happy");

console.log("2-1. " + beagle1.numLegs);
console.log("2-2. " + bulldog1);

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
console.log("3-1. " + ownProps2);
console.log("3-2. " + prototypeProps2);

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
console.log("4. " + (dog.constructor === Dog3));

// 5. Change the Prototype to a New Object
function Dog4(name) {
    this.name = name;
}

Dog4.prototype = {
    numLegs: 4,
    eat: function() {
        console.log("5. nom nom nom");
    },
    describe: function() {
        console.log("5. My name is " + this.name);
    }
};
let dog4 = new Dog4("Puppy");
dog4.eat();
dog4.describe();

// 6. Remember to Set the Constructor Property when Changing the Prototype
function Dog5(name) {
    this.name = name;
}

Dog5.prototype = {
    constructor: Dog5,
    numLegs: 4,
    eat: function() {
        console.log("6. nom nom nom")
    },
    describe: function() {
        console.log("6. My name is " + this.name)
    }
};
let dog5 = new Dog5("Happy");
dog5.eat();
dog5.describe();

// 7. Understand Where an Object's Prototype Comes From 
function Dog6(name) {
    this.name = name;
}
let beagle6 = new Dog6("Snoopy");
console.log("7. " + Dog6.prototype.isPrototypeOf(beagle6));

// 8. Understand the Prototype Chain
function Dog7(name) {
    this.name = name;
}

let beagle7 = new Dog7("Snoopy2");

console.log("8-1. " + Dog7.prototype.isPrototypeOf(beagle7));
console.log("8-2. " + Object.prototype.isPrototypeOf(Dog7.prototype));

// 9. Use Inheritance so You don't Repeat Yourself
function Cat(name) {
    this.name = name;
}

Cat.prototype = {
    constructor: Cat
};

function Bear(name) {
    this.name = name;
}

Bear.prototype = {
    constructor: Bear
};

function Animal() {}

Animal.prototype = {
    constructor: Animal,
    eat: function(){
        console.log("9. nom nom nom");
    }
};
let bear = new Animal();
let cat = new Animal();

bear.eat();
cat.eat();

// 10. Inherit Behaviors from a Supertype
function Animal() {}

Animal.prototype = {
    constructor: Animal,
    eat: function() {
        console.log("10-1. nom nom nom");
    }
};

let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype);

duck.eat();
console.log("10-2. " + (beagle instanceof Animal));


