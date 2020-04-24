// 1. Set the Child's Prototype to an Instance of the Parent
function Animal1() {}

Animal1.prototype = {
    constructor: Animal1,
    eat: function() {
        console.log("1. nom nom nom");
    }
};

function Dog1() {}

Dog1.prototype = Object.create(Animal1.prototype);
let beagle1 = new Dog1();
beagle1.eat();

// 2. Reset an Inherited Constructor Property
function Animal2() { }
function Bird2() { }
function Dog2() { }

Bird2.prototype = Object.create(Animal2.prototype);
Dog2.prototype = Object.create(Animal2.prototype);

Bird2.prototype.constructor = Bird2;
Dog2.prototype.constructor = Dog2;

let bird62 = new Bird2();
let beagle2 = new Dog2();

console.log(bird62);
console.log(beagle2);

// 3. Add Methods After Inheritance
function Animal3() { }
Animal3.prototype.eat = function() {
    console.log("3. nom nom nom");
};

function Dog3() { }
Dog3.prototype = Object.create(Animal3.prototype);
Dog3.prototype.constructor = Dog3;

Dog3.prototype.bark = function() {
    console.log("3. Woof!");
};

let dog3 = new Dog3();
dog3.eat();
dog3.bark();

// 4. Override Inherited Methods
function Bird4() { }

Bird4.prototype.fly = function() {
    return "I am flying! ";
};

function Penguin4() { }
Penguin4.prototype = Object.create(Bird4.prototype);
Penguin4.prototype.constructor = Penguin4;

Penguin4.prototype.fly = function() {
    return "4. Atlas, this is a flightless bird.";
};

let penguin4 = new Penguin4();
console.log(penguin4.fly());

// 5. Use a Mixin to Add Common Behavior Between Unrelated Objects
let glideMixin = function(obj) {
    obj.glide = function() {
        console.log("5. Gliding!");
    }
};

let bird5 = {
    name: "Donald",
    numLegs: 2
};

let boat5 = {
    name: "Warrior",
    type: "race-boat"
};

glideMixin(bird5);
glideMixin(boat5);

bird5.glide();
boat5.glide();

// 6. Use Closure to Protect Properties Within an Object from Being Modified Externally
function Bird6() {
    let weight = 15;

    this.getWeight = function() {
        return weight;
    };
}
let bird6 = new Bird6();
console.log(bird6.getWeight());

// 7. Understand the Immediately Invoked Function Expression(IIFE)
(function() {console.log("7. A cozy is ready");})();

// 8. Use an IIFE to Create a Module
let funModule = (function() {
    return {
        isCuteMixin: function(obj) {
            obj.isCute = function() {
                return console.log(true);
            };
        },
        singMixin: function(obj) {
            obj.sing = function() {
                console.log("8. Singing to an awsome tune");
            };
        }
    };
})();

funModule.isCuteMixin(bird6);
bird6.isCute();
funModule.singMixin(bird6);
bird6.sing();



