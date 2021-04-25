const balance = document.querySelector('.total-bal');
const income = document.querySelector('.income');
const expense = document.querySelector('.expense');
const items = document.querySelector('#items')
const text = document.querySelector('#text');
const amount = document.querySelector('#amount');
const addBtn = document.querySelector('button');
const incomeBal = document.querySelector('.in-bal')
const expenseBal = document.querySelector('.ex-bal')

// CURRENCY FORMATTER
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  })

// ARRAYS HOLDING TRANSACTION TOTALS
let positiveNumbers = [];
let negativeNumbers = [];

let posSum = 0;
let negSum = 0;



// ADD TRANSACTION, INCOME AND EXPENSES
function addTransaction() {
    const list = document.createElement('div');
    list.classList.add('item');

    if(text.value && amount.value !== '') {
        list.innerHTML = `
            <h3>${text.value}</h3>
            <p>${amount.value}</p>
        `;
    
        items.appendChild(list);
    
        if(amount.value.includes('-')) {
            list.classList.add('negative-item');
            negativeNumbers.push(amount.value);
            const negNumArr = negativeNumbers.map((n) => {
                return parseInt(n, 10);
            })
             negSum = negNumArr.reduce(function(a, b){
                return a + b;
            }, 0);
        } 
        
        else {
            list.classList.add('positive-item');
            positiveNumbers.push(amount.value);
            const posNumArr = positiveNumbers.map((n) => {
                return parseInt(n, 10);
            })
             posSum = posNumArr.reduce(function(a, b){
                return a + b;
            }, 0);
        }
    } else {
        displayError();
    }
    clearFields();
    calculation();
}

// DISPLAY POSITIVE AND NEGATIVE SUM IN UI
function calculation() {
    incomeBal.textContent = formatter.format(posSum);
    expenseBal.textContent = formatter.format(negSum);
    balance.textContent = formatter.format(posSum + negSum);
}

// DISPLAY ERROR ON EMPTY FIELDS
function displayError() {
    if(text.value || amount.value === '') {
        alert('Please add text and an amount')
    }
}

function clearFields() {
    text.value = '';
    amount.value = '';
}

addBtn.addEventListener('submit', addTransaction);



