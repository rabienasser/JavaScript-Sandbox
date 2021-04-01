let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// Get child nodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[3].nodeType;

// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype


// Get children element nodes
val = list.children;
val = list.children[1];
list.children[1].textContent = 'Hello';
// Children of children
list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0];

// First child
val = list.firstChild;              //Returns Node
val = list.firstElementChild;       //Returns actual element, not Node

// Last child
val = list.lastChild;                //Returns Node
val = list.lastElementChild;         //Returns actual element

// Count child elements
val = list.childElementCount;       //Counts how many children the 'list' element has

// Get parent node
val = listItem.parentNode;          //Returns parent text Node
val = listItem.parentElement;       //Returns parent element
val = listItem.parentElement.parentElement;

// Get next sibling
val = listItem.nextSibling;         //Returns sibling node
val = listItem.nextElementSibling.nextElementSibling;

// Get prev sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;
console.log(val);


