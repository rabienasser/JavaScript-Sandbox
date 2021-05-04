const draggableList = document.getElementById('draggable-list')
const checkBtn = document.getElementById('check')

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
    dragStartIndex = +this.closest('li').getAttribute('data-index');
}


function dragEnter() {
    this.classList.add('over');
}


function dragLeave() {
    this.classList.remove('over')
}


function dragOver(e) {
    e.preventDefault();
}


function dragDrop() {
    const dragEndIndex = +this.getAttribute('data-index');
    swapItems(dragStartIndex, dragEndIndex)

    this.classList.remove('over')
}


function swapItems(fromIndex, toIndex) {
    const itemOne = listItems[fromIndex].querySelector('.draggable');
    const itemTwo = listItems[toIndex].querySelector('.draggable');

    listItems[fromIndex].appendChild(itemTwo);
    listItems[toIndex].appendChild(itemOne);
}


function checkOrder() {
    listItems.forEach((item, index) => {
        const cityName = item.querySelector('.draggable').innerText;

        if(cityName != largestCities[index]) {
            item.classList.add('wrong')
        } else {
            item.classList.remove('wrong')
            item.classList.add('right')
        }
    })
}


checkBtn.addEventListener('click', checkOrder);