// Iterator Example
function nameIterator(names) {
  let nextIndex = 5;

  return {
    next: function() {
      return nextIndex < names.length ?
      {value: names[nextIndex++], done: false} : 
      {done: true}
    }
  }
}

// Create Array of Names
const namesArr = ['Jack', 'Jill', 'John'];
const names = nameIterator(namesArr);

console.log(names.next());
console.log(names.next());
console.log(names.next());







// Generator Example
function* sayNames() {         //Asterisk * tells JS this is a Generator and not just a regular function
  yield 'Jack';
  yield 'Jill';
  yield 'John';
}

const name = sayNames();

console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);

// ID Generator
function* createIds() {
  let index = 0;

  while(true) {
    yield index++;
  }
}

const gen = createIds();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);