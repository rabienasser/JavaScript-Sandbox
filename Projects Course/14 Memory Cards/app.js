const addNewCardBtn = document.getElementById('show')
const clearCardsBtn = document.getElementById('clear')
const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')
const cardsContainer = document.getElementById('cards-container')
const addCardBtn = document.getElementById('add-card')
const current = document.getElementById('current')
const hideBtn = document.getElementById('hide')
const question = document.getElementById('question')
const answer = document.getElementById('answer')
const addContainer = document.getElementById('add-container')

// Keep track of current card
let currentActiveCard = 0;

// Store DOM Cards
const cardsEl = [];

// Store card data
const cardsData = getCardsData();

// const cardsData = [
//     {
//         question: 'What\'s my favorite color?',
//         answer: 'white'
//     },
//     {
//         question: 'What\'s my favorite movie?',
//         answer: 'Lord of the Rings'
//     },
//     {
//         question: 'What\'s my favorite sport?',
//         answer: 'soccer'
//     }
// ];


// Create all cards
function createCards() {
    cardsData.forEach((data, index) => {
        createCard(data, index)
    })
}

// Create a single card in the DOM
function createCard(data, index) {
    const card = document.createElement('div')
    card.classList.add('card');

    if(index === 0) {
        card.classList.add('active')
    }

    card.innerHTML = `
        <div class="inner-card">
            <div class="inner-card-front">
                 <p>
                    ${data.question}
                </p>
            </div>
            <div class="inner-card-back">
                <p>
                    ${data.answer}
                </p>
            </div>
        </div>
    `;

    card.addEventListener('click', () => card.classList.toggle('show-answer'))

    // Add to DOM cards
    cardsEl.push(card);

    cardsContainer.appendChild(card);

    updateCurrentText();
}


// Show Number of Cards
function updateCurrentText() {
    current.innerText = `${currentActiveCard + 1}/${cardsEl.length}`;
}

// Get Cards from local storage
function getCardsData() {
    const cards = JSON.parse(localStorage.getItem('cards'))
    return cards === null ? [] : cards;
}

createCards();


// Event Listeners

// Next Button
nextBtn.addEventListener('click', () => {
    cardsEl[currentActiveCard].className = 'card left';

    currentActiveCard += 1;

    if(currentActiveCard > cardsEl.length - 1) {
        currentActiveCard = cardsEl.length -1;
    }

    cardsEl[currentActiveCard].className = 'card active'

    updateCurrentText()
})

// Previous Button
prevBtn.addEventListener('click', () => {
    cardsEl[currentActiveCard].className = 'card';

    currentActiveCard -= 1;

    if(currentActiveCard < 0) {
        currentActiveCard  = 0;
    }

    cardsEl[currentActiveCard].className = 'card active'

    updateCurrentText()
})

// Show Add Container
addNewCardBtn.addEventListener('click', () => {
    addContainer.classList.add('show')
})

// Hide Add Container
hideBtn.addEventListener('click', () => {
    addContainer.classList.remove('show')
})

// Add card button
addCardBtn.addEventListener('click', () => {
    const questionVal = question.value;
    const answerVal = answer.value;

    console.log(questionVal, answerVal)
})