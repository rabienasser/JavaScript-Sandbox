// Create a Symbol
const sym1 = Symbol();
const sym2 = Symbol('sym2');

console.log(sym1);
console.log(sym2);
console.log(typeof sym2);

console.log(Symbol() === Symbol);       //2 Symbols can never be the same, this will generate false in the console


// Unique Object Keys
const KEY1 = Symbol(0);
const KEY2 = Symbol('sym2');

const myObj = {};

myObj[KEY1] = 'Prop1';
myObj[KEY2] = 'Prop2';

console.log(myObj);
console.log(myObj[KEY1]);
console.log(myObj[KEY2]);


// Symbols are ignored by JSON.stringify
console.log(JSON.stringify({key: 'prop'}));
console.log(JSON.stringify({[Symbol('sym1')]: 'prop'}));  //This fails to convert to string. It returns an empty object