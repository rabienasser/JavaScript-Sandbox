// SETS - Store unique values of any type

const set1 = new Set();

// Add values to new set
set1.add(100);
set1.add('A string');
set1.add({name: 'Rabie'});
set1.add(true);


// Another method of creating Sets
const set2 = new Set([1, true, 'Apple Pie', {city: 'Cleveland'}]);

console.log(set1);
console.log(set2);


// Get count
console.log(set1.size);


// Check for values
console.log(set1.has(100));     //Returns "true" in console
console.log(set1.has(50 + 50));     //Returns "true" in console


// Delete from Set
set1.delete(100);
console.log(set1);


// Iterate through sets
for(let item of set1) {             //For..of loop
    console.log(item);
}


set1.forEach((value) => {              //forEach loop
    console.log(value);
});


// Convert to Array
const setArr = Array.from(set1);
console.log(setArr);
console.log(setArr[1]);
