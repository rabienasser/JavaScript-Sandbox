// REPLACE ELEMENT

// Create Element
const newHeading = document.createElement('h2');

// Add ID
newHeading.id = 'task-title';

// Create New text node
newHeading.appendChild(document.createTextNode('Task List'));

// Get the old heading
const oldHeading = document.getElementById('task-title');

// Parent
const cardAction = document.querySelector('.card-action');

// Replace
cardAction.replaceChild(newHeading, oldHeading);

// console.log(newHeading);





// REMOVE ELEMENT
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove list item
lis[0].remove();

// Remove child element
list.removeChild(lis[3]);





// CLASSES & ATTRIBUTES
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0]

let val;

// Classes
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');

// Attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
val = link.hasAttribute('href'); 

console.log(val);






document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e) {
    let val;
    val = e;

    val = e.target.className;

    console.log(val);
}