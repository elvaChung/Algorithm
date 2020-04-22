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

// 3. Add Methods After Inheritance

// 4. Override Inherited Methods

// 5. Use a Mixin to Add Common Behavior Between Unrelated Objects

// 6. Use Closure to Protect Properties Within an Object from Being Modified Externally

// 7. Understand the Immediately Invoked Function Expression(IIFE)

// 8. Use an IIFE to Create a Module

