// 1. Create a Basic JavaScript Object
let dog1 = {
    name: "Doggy",
    numLegs: 4
};
console.log(dog1);

// 2. Use Dot Notation to Access The Properties of an Object 
let dog2 = { 
    name: "Doggy",
    numLegs: 4
};
console.log(dog2.name);
console.log(dog2.numLegs);

// 3. Create a Method on an Object
let dog3 = {
    name: "Dogggy",
    numLegs: 4,
    sayLegs: function() {
        return "The name of this dog is " + dog3.name 
        + ". The legs are " + dog3.numLegs + "."
    }    
};
console.log(dog3.sayLegs());

// 4. Make Code More Reusable with the this Keyword
let dog4 = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function(){ return "This dog has " + this.numLegs + " legs."}
};
console.log(dog4.sayLegs());
// 5. Define a Consstructor to Create Objects
function Dog5() {
    this.name = "Doggy";
    this.color = "Blue";
    this.numLegs = 4;
}

console.log(Dog5);

// 6. Use a Constructor to Create Objects
function Dog6() {
    this.name = "Snoopy";
    this.color = "blue";
    this.numLegs = 4;
}

let hound = new Dog6();
console.log(hound);
console.log(hound.name);

// 7. Extend Constructor to Receive Arguments
function Dog7(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}

let terrier = new Dog7("Terrier", "gray");
console.log(terrier);
console.log(terrier.numLegs);

// 8. Verify an Object's Constructor with instanceof
function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}

let myHouse = new House(5);

console.log(myHouse instanceof House);

let yourHouse = {
    numBedrooms: 4
};

console.log(yourHouse instanceof House)