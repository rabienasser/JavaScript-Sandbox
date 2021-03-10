// Arrys within Objects

const todos = [
    {
        id: 1,
        text: "Take out trash",
        isCompleted: true
    },
    {
        id: 2,
        text: "Meeting with Boss",
        isCompleted: true
    },
    {
        id: 3,
        text: "Dentist appt",
        isCompleted: false
    },
];

console.log(todos);

// Meeting with Boss
console.log(todos [1].text);


// Loops

// For
for(let i = 0; i < 10; i++) {
    console.log(i);
}


// Looping through Arrays
for(let todo of todos) {
    console.log(todo.text);
}