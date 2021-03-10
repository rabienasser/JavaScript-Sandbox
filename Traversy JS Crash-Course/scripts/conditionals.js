const x = 9;
const y = 25;

if(x == 10) {
    console.log("x is 10");
} else if(x > 10){
    console.log("x is greather than 10");
}
else{
    console.log("x is less than 10");
}


// And & Or
if(x > 10 && y > 15) {
    console.log("everything checks out");
}

// Ternary Operator (conditional variable)
const color = x > 10 ? "red" : "blue";
console.log(color);


// Switches
switch(color) {
    case "red":
    console.log("color is red");
    break;
    case "blue":
    console.log("color is blue");
    break;
    default:
    console.log("color is NOT red or blue");
    break;
}