const balance = document.querySelector('.total-bal');
const income = document.querySelector('.income');
const expense = document.querySelector('.expense');
const items = document.querySelector('#items')
const text = document.querySelector('#text');
const amount = document.querySelector('#amount');
const addBtn = document.querySelector('.add-btn');
const clearBtn = document.querySelector('.clear-btn');
const incomeBal = document.querySelector('.in-bal')
const expenseBal = document.querySelector('.ex-bal')
const deleteBtn = document.createElement('button');

let list;


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
     list = document.createElement('div');
    list.classList.add('item');

    if(text.value !== '' && amount.value !== '' && amount.value != 0) {
        list.innerHTML = `
            <h3>${text.value}</h3>
            <p>${amount.value}</p>
        `;

        items.appendChild(list);

    
        if(amount.value.includes('-')) {
            list.classList.add('negative-item');
            negativeNumbers.push(amount.value);
            const negNumArr = negativeNumbers.map((n) => {
                return parseFloat(n, 10);
            })
             negSum = negNumArr.reduce(function(a, b){
                return a + b;
            }, 0);
        } 
        
        else {
            list.classList.add('positive-item');
            positiveNumbers.push(amount.value);
            const posNumArr = positiveNumbers.map((n) => {
                return parseFloat(n, 10);
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
    deleteButton();
}



// DELETE BUTTON CREATION
function deleteButton() {
    deleteBtn.classList.add('delete-btn');
    deleteBtn.innerHTML = `X`;
    list.appendChild(deleteBtn);
}

// DELETE LIST ITEM
function deleteItem() {
    list.remove();
    positiveNumbers.pop(amount.value)
    const posNumArr = positiveNumbers.map((n) => {
        return parseFloat(n, 10);
    })
     posSum = posNumArr.reduce(function(a, b){
        return a + b;
    }, 0);
    

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

// // CLEAR TRANSACTIONS
// function clearTransactions() {
//     items.remove();
//     positiveNumbers = [];
//     negativeNumbers = [];
// }

function clearFields() {
    text.value = '';
    amount.value = '';
}


// EVENT LISTENERS
addBtn.addEventListener('click', addTransaction);
// clearBtn.addEventListener('click', clearTransactions)
deleteBtn.addEventListener('click', deleteItem);

(function() {
    text.addEventListener('keydown', (e) => {
        if(e.code === 'Enter') {
            e.preventDefault();
            addTransaction();
        }
    })
    amount.addEventListener('keydown', (e) => {
        if(e.code === 'Enter') {
            e.preventDefault();
            addTransaction();
            text.focus();
        }
    })
})()


