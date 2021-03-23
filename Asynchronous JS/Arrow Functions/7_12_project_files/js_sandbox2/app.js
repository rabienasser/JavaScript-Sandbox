const sayHello = function() {
    console.log('Hello');
}

// Converting to Arrow Function
const sayHello = () => {
    console.log('Hello');
}

// Other notation
const sayHello = () => console.log('Hello');


// Arrow function and Object Literal
const sayHello = () => ({msg: 'Hello'});

console.log(sayHello());


// Passing a parameter (single parameter does not even need parenthesis, multiple params do)
const sayHello = (name) => console.log( `Hello ${name}`);

sayHello('Rabie');



// Array Example
const users = ['Nathan', 'John', 'William'];

const nameLengths = users.map(function(name) {
    return name.length;
});

// Shorter
const nameLengths = users.map((name) => {
    return name.lengths
});

// Shortest
const nameLengths = users.map(name => name.lengths);

console.log(nameLengths);