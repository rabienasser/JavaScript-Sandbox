const person = {
    firstName: "Rabie",
    lastName: "Nasser",
    age: 22,
    hobbies: ["soccer", "music", "coding"],
    address: {
        street: "Glenwood Ln",
        city: "Strongsville",
        state: "OH"
    }
}

console.log(person);
console.log (person.lastName);

// Getting "Music"
console.log(person.hobbies [1]);

//Getting "Strongsville"
console.log(person.address.city);

// Adding property
person.email = "rabie@email.com";
console.log(person);