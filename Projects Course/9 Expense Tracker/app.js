const balance = document.querySelector('.balance');
const income = document.querySelector('.income-bal');
const expense = document.querySelector('.expense-bal');
const items = document.querySelector('#items')
const text = document.querySelector('#text');
const amount = document.querySelector('#amount');
const addBtn = document.querySelector('button');

// Add transaction
function addTransaction() {
    const list = document.createElement('div');
    list.classList.add('item');

    list.innerHTML = `
        <h3>${text.value}</h3>
        <p>${amount.value}</p>
    `;

    items.appendChild(list);

    if(amount.value.includes('-')) {
        list.classList.add('negative-item')
    } else {
        list.classList.add('positive-item')
    }

    clearFields();

}

function clearFields() {
    text.value = '';
    amount.value = '';
}

addBtn.addEventListener('click', addTransaction);
