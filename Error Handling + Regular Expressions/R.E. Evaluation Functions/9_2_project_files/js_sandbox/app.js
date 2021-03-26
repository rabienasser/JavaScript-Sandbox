let re, bb;
re = /hello/i; //i = case insensitive
bb = /hummus/i;

console.log(re);
console.log(re.source);  // Removes the / in /hello/


// exec() - Return result in an array or null
// const result = re.exec('hello world');
// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);


// test() - Returns true or false
// const result = re.test('hello');
// console.log(result);


// match() - Return result array or null (works like exec but opposite)
// const str = 'Hello There';
// const result = str.match(re)
// console.log(result);


// search() - Return index of the first match. If not found, returns a "-1"
// const str = 'There hello bay';
// const result = str.search(re);
// console.log(result);


// replace() - Return new string with some or all matches of a pattern
const str = `My favorite Middle Eastern dish is Hummus`;
const newStr = str.replace(bb, 'Baba Ghanoush');
console.log(newStr);
