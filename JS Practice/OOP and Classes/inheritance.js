// // INHERITANCE BETWEEN CLASSES

// // USING CONSTRUCTOR FUNCTIONS
// const Person = function(firstName, birthYear) {
//     // Instance properties
//     this.firstName = firstName
//     this.birthYear = birthYear
// }


// Person.prototype.calcAge = function() {
//     console.log(2021 - this.birthYear)
// }

// const Student = function(firstName, birthYear, course) {
//     // Eliminate repetitive code, make Student a child of Person class
//     // this.firstName = firstName
//     // this.birthYear = birthYear
//     Person.call(this, firstName, birthYear)
//     this.course = course
// }

// // Now Student.prototype object inherits from Person.prototype object
// Student.prototype = Object.create(Person.prototype)

// // Adding method to Student prototype
// Student.prototype.introduce = function() {
//     console.log(`Hello, my name is ${this.firstName} and I am currently studying ${this.course}`)
// }

// const mike = new Student('Mike', 2000, 'Physics')
// console.log(mike)
// mike.introduce()
// mike.calcAge()



// // INHERITANCE USING CLASSES (MUSCH EASIER/CLEANER)
// class PersonCl {
//     constructor(firstName, birthYear) {
//         this.firstName = firstName
//         this.birthYear = birthYear
//     }

//     // METHODS GO HERE, UNDER CONSTRUCTOR (will be added to .prototype property of PersonCl constructor)
//     calcAge() {
//         console.log(2021 - this.birthYear)
//     }
// }

// class StudentCl extends PersonCl {
//     constructor(firstName, birthYear, course) {
//         // Always needs to happen first! (gives the StudentCl acces to 'this' keyword from parent class (PersonCl))
//         super(firstName, birthYear)
//         this.course = course
//     }

//     introduce() {
//         console.log(`Hello, my name is ${this.firstName} and I am currently studying ${this.course}`)
//     }

//     // This will OVERWRITE calcAge() method from parent Class because it appears first in the prototype chain
//     calcAge() {
//         console.log(`I'm ${2021 - this.birthYear} but as a student, I feel much older!`)
//     }
// }

// const jessica = new StudentCl('Jessica', 1995, 'Architecture')
// console.log(jessica.course)
// jessica.introduce()
// jessica.calcAge()
