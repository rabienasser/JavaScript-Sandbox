// Define UI Variables
const form = document.querySelector('form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');




// Load All Event Listeneres
loadEventListeneres();

// Load All Event Listeners
function loadEventListeneres() {
    // DOM Load Event
    document.addEventListener('DOMContentLoaded', getTasks);
    // Add Task Event
    form.addEventListener('submit', addTask);
    // Remove task Event
    taskList.addEventListener('click', removeTask);
    // Clear Tasks Event
    clearBtn.addEventListener('click', clearTasks);
    // Filter Tasks Event
    filter.addEventListener('keyup', filterTasks);
}



// Get Tasks from Local Storage
function getTasks() {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task){
            // Create li element
    const li = document.createElement('li');
    // Creating class name
    li.className = 'collection-item';
    // Create text node append to li
    li.appendChild(document.createTextNode(task));

    // Create new link element (x font awesome)
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class = "fas fa-times"></i>';
    // Append link to li
    li.appendChild(link);


    // Append the li to the ul
    taskList.appendChild(li);
    })
}




// Add Task Function
function addTask(e) {
    if(taskInput.value === "") {
        alert('Please add a task!');
    }

    // Create li element
    const li = document.createElement('li');
    // Creating class name
    li.className = 'collection-item';
    // Create text node append to li
    li.appendChild(document.createTextNode(taskInput.value));

    // Create new link element (x font awesome)
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class = "fas fa-times"></i>';
    // Append link to li
    li.appendChild(link);


    // Append the li to the ul
    taskList.appendChild(li);

    // Store in Local Storage
    storeInLocalStorage(taskInput.value);

    // Clear Input
    taskInput.value = '';

    e.preventDefault();
}



// Store Task
function storeInLocalStorage(task) {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}




// Remove Task Function
function removeTask(e) {
    if(e.target.parentElement.classList.contains
    ('delete-item')) {
    if(confirm('Are you sure you want to remove this item?')) {
        e.target.parentElement.parentElement.remove();

        // Remove task from Local Storage
        removeTaskFromLocalStorage( e.target.parentElement.parentElement);
    }
    }
}



// Remove from Local Storage
function removeTaskFromLocalStorage(taskItem) {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task, index){
        if(taskItem.textContent === task) {
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}




// Clear Tasks Function
function clearTasks(e) {
    // First version
    // taskList.innerHTML = '';


    // Fast version (Loop)
    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

    // Clear from Local Storage
    clearTasksFromLocalStorage();

}


// Clear Tasks from Local Storage
function clearTasksFromLocalStorage() {
    localStorage.clear();
}




// Filter Tasks Function
function filterTasks (e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach
    (function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        } else{
            task.style.display = 'none';
        }
    });
}