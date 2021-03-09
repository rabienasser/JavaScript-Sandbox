const defaultResult = 0;
let currentResult = defaultResult;

currentResult = add(1,2);

let calculationDescription = "(" + defaultResult + " + 10) *3/2 +4; ";
let calculationDescription = `(${defaultResult} + 10) *3/2 +4`;

outputResult(currentResult, calculationDescription);

// Function Ex.)
function add(num1, num2){
    const result = num1 + num2;
    return result;
}

// Calling function
add(1, 2);


