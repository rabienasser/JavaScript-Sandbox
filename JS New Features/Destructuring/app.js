// Destructuring Assignment

let a, b;
[a, b] = [100, 200];
// Rest Pattern
[a, b, ...rest] = [100, 200, 300, 400, 500];    //This will console.log all the numbers past b; [300, 400, 500]

console.log(rest);

({a, b, ...rest} = {a: 100, b: 200, c: 300, d: 400, e: 500});

console.log(rest);



// Array Destructuring Example
const people = ['John', 'Beth', 'Mike'];

const [person1, person2, person3] = people;

console.log(person1, person2, person3);




// Object Destructuring
const person = {
    name: 'John Doe',
    age: 34,
    city: 'Cleveland',
    gender: 'Male'
}

// Old ES5 Destructuring
const name = person.name,
      age = person.age,
      city = person.city,
      gender = person.gender


// New ES6 Destructuring
const {name, age, city} = person

console.log(name, age, city);