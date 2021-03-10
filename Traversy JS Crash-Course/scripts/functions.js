// Functions

function addNums(num1, num2) {
    console.log(num1 + num2);
}

addNums(5,4);


// Constructor Function
function Person(firstName, lastName, dob) {
    this.firtName = firstName;
    this.lastName = lastName; 
    this.dob = dob;
}

// Instantiate Object
const person1 = new Person("John", "Doe", "4-3-1998");
const person2 = new Person ("Mary", "Smith", "3-23-1987");

console.log(person1.lastName);