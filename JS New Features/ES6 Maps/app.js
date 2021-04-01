// MAPS = key-value pais  -  can use ANY type as a key or value

const map1 = new Map();


// Set Keys
const key1 = 'some string',
      key2 = {},
      key3 = function() {};


// Set map values by key
map1.set(key1, 'Value of key1');
map1.set(key2, 'Value of key2');
map1.set(key3, 'Value of key3');


// Get values by key
console.log(map1.get(key1));
console.log(map1.get(key1), map1.get(key2), map1.get(key3))


// Count Values
console.log(map1.size);     // Will return 3 in console




// Iterating through maps
for(let [key, value] of map1) {
    console.log(`${key} = ${value}`)    //Will return smthng like this "some string = Value of key1"
}

// Iterate Keys Only
for(let key of map1.keys()) {
    console.log(key);
}
// Iterate Values Only
for(let value of map1.values()) {
    console.log(value);
}

// Loop with For Each
map1.forEach(function(key, value){
    console.log(`${key} = ${value}`)
});




// Convert to Arrays

// Create an array of the key value pairs
const keyValArr = Array.from(map1)
console.log(keyValArr);
console.log(keyValArr[2])

// Create an array of the values
const valArr = Array.from(map1.values())
console.log(valArr);

// Create an array of the keys
const keyArr = Array.from(map1.keys())
console.log(keyArr);