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
    .map(a => ({ value: a, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(a => a.value)
    .forEach((city, index) => {
        const listItem = document.createElement('li')

        listItem.setAttribute('data-index', index);

        listItem.innerHTML = `
        <span class="number">${index + 1}</span>
        <div class="draggable" draggable="true">
            <p class="city-name">${city}</p>
            <i class="fas fa-grip-lines"></i>
        </div>
        `;

        listItems.push(listItem);

        draggableList.appendChild(listItem)
    });

    addEventListeners();
}


function addEventListeners() {
    const draggables = document.querySelectorAll('.draggable')
    const dragListItems = document.querySelectorAll('.draggable-list li')


    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', dragStart)
    })

    dragListItems.forEach(item => {
        item.addEventListener('dragover', dragOver)
        item.addEventListener('drop', dragDrop)
        item.addEventListener('dragenter', dragEnter)
        item.addEventListener('dragleave', dragLeave)
    })
}


function dragStart() {
    
}