const balance = document.querySelector('.balance');
const income = document.querySelector('.income');
const expense = document.querySelector('.expense');
const items = document.querySelector('#items')
const text = document.querySelector('#text');
const amount = document.querySelector('#amount');
const addBtn = document.querySelector('button');

let positiveNumbers = [];
let negativeNumbers = [];

let sum = positiveNumbers.reduce(function(a, b){
    return a + b;
}, 0);


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
        list.classList.add('positive-item');
        positiveNumbers.push(amount.value);
        console.log(positiveNumbers);
        console.log(sum);
    }

    clearFields();
    calculation();

}


function calculation() {
    let incomeBal = document.createElement('h3');
    incomeBal.classList.add('income-bal', 'bal')

        incomeBal.innerHTML = `${sum}`;
        income.appendChild(incomeBal)
}

function clearFields() {
    text.value = '';
    amount.value = '';
}

addBtn.addEventListener('click', addTransaction);



