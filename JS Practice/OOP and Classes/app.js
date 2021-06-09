'use strict';

// CONSTRUCTOR FUNCTION
const Person = function(firstName, birthYear) {
    // Instance properties
    this.firstName = firstName
    this.birthYear = birthYear

    // Instance methods:  *NEVER DO THIS, SAME FUNCTION ON MANY INSTANCES SLOWS PERFORMANCE!*
    // this.calcAge = function() {
    //     console.log(2021 - this.birthYear)
    // }
}

const rabie = new Person('Rabie', 1998)  //rabie is an 'instance' of person constructor function
const matilda = new Person('Matilda', 1988)  //matilda is an 'instance' of person constructor function
console.log(rabie, matilda)
console.log(rabie instanceof Person)  //returns true (boolean value)

// When 'new' operator is used, 4 key things happen
// (1) New {} (object) is created
// (2) function is called, this = {}
// (3) {} linked to prototype
// (4) function automatically return {}




// PROTOTYPES
// Adding a method to the Person prototype, which all instances will have access to
Person.prototype.calcAge = function() {
    console.log(2021 - this.birthYear)
}

rabie.calcAge()  //returns 23

rabie.__proto__ === Person.prototype // returns true
Person.prototype.isPrototypeOf(rabie) //returns true
/* Person.prototype is NOT the prototype of the Person constructor function, but rather the prototype of the 
Person constructor's linked objects (like the 'rabie' or 'matilda' instance) */

// Can also set properties on prototype (not just methods)
Person.prototype.species = 'Homo Sapien'
console.log(rabie.species)

console.log(rabie.__proto__)




// ES6 CLASSES

// class expression
// const PersonCl = class {

// }

// class declaration
class PersonCl {
    constructor(firstName, birthYear) {
        this.firstName = firstName
        this.birthYear = birthYear
    }

    // METHODS GO HERE, UNDER CONSTRUCTOR (will be added to .prototype property of PersonCl constructor)
    calcAge() {
        console.log(2021 - this.birthYear)
    }
}

const jessica = new PersonCl('Jessica', 1994)
jessica.calcAge()  //returns 27









// CODING CHALLENGES

// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

// Step (1)
const Car = function(make, speed) {
    this.make = make;
    this.speed = speed;
}

// Step (2)
Car.prototype.accelerate = function() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};

// Step (3)
Car.prototype.brake = function() {
    this.speed -= 5
    console.log(`${this.make} is going at ${this.speed} km/h`)
}

const car_1 = new Car('BMW', 120);
car_1.brake()
car_1.brake()
car_1.accelerate()
car_1.accelerate()



