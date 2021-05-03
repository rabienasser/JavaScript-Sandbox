const draggableList = document.getElementById('draggable-list')
const list = document.getElementById('check')

const largestCities = ['New York City', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose'];

// Store list items
const listItems = [];

let dragStartIndex;

createList();

// insert list items into DOM
function createList() {
    [...largestCities]
}