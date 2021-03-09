const task3Element = document.getElementById('task-3');


function add() {
    alert("Hello");
}

function greet(name) {
    alert("Hi " + name);
}

// Step 4
function combine(str1, str2, str3) {
    const combinedText = str1 + str2 +str3;
    return combinedText;
}


// Step 2
// add();
greet("Rabie");

// Step 3
task3Element.addEventListener("click", greet);

// Step 5
const CombinedString = combine("H1", "there", "!");
alert(combinedString);