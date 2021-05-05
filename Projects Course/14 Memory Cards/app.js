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
const cardData = [
    {
        question: 'What\'s my favorite color?',
        answer: 'white'
    },
    {
        question: 'What\'s my favorite movie?',
        answer: 'Lord of the Rings'
    },
    {
        question: 'What\'s my favorite sport?',
        answer: 'soccer'
    }
];


// Create all cards
function createCards() {
    cardData.forEach((data, index) => {
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

createCards();