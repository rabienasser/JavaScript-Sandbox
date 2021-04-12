const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');


let data = [];
getRandomUser();
getRandomUser();
getRandomUser();


// fetch random user and add money
    async function getRandomUser() {
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();

    console.log(data);

    const user = data.results[0];

    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 1000000) +1
    };

    addData(newUser);
}

// add new obj to data array
function addData(randomUser) {
    data.push(randomUser);

    updateDOM();
}

// Double money Function
function doubleMoney() {
    data = data.map(user => ({ ...user, money: user.money * 2 }))

    updateDOM();
}

// Sort money function
function sortMoney() {
    data = data.sort((a, b) => b.money - a.money)

    updateDOM();
}

// Filter millionaires function
function showMillionaires() {
    data = data.filter(user => user.money > 1000000)

    updateDOM();
}


// Calculate wealth function
function calculateWealth() {
    const wealth = data.reduce((acc, user) => (acc += user.money), 0);

    const wealthEl = document.createElement('div');
    wealthEl.innerHTML = `<h3>Total Wealth: <strong>$ ${wealth.toLocaleString()}</strong></h3>`
    main.appendChild(wealthEl);

}


// Update DOM
function updateDOM(providedData = data) {
    // Clear main div
    main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';

    providedData.forEach(randomUser => {
        const element = document.createElement('div');
        element.classList.add('person');
        element.innerHTML = `<strong>${randomUser.name}</strong> $ ${randomUser.money.toLocaleString()}`;
        main.appendChild(element);
    })
}


// Event listeners
addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
sortBtn.addEventListener('click', sortMoney);
showMillionairesBtn.addEventListener('click', showMillionaires);
calculateWealthBtn.addEventListener('click', calculateWealth);