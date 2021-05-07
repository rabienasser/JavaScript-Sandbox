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
const deleteCardBtn = document.getElementById('delete-card')

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

    const deleteCard = document.createElement('button')
    deleteCard.className = 'delete-card'
    deleteCard.innerHTML = 'x'
    card.appendChild(deleteCard)

    card.addEventListener('click', () => card.classList.toggle('show-answer'))

    // Add to DOM cards
    cardsEl.push(card);

    cardsContainer.appendChild(card);

    updateCurrentText();
}
createCards();


// Show Number of Cards
function updateCurrentText() {
    current.innerText = `${currentActiveCard + 1}/${cardsEl.length}`;
}

// Get Cards from local storage
function getCardsData() {
    const cards = JSON.parse(localStorage.getItem('cards'))
    return cards === null ? [] : cards;
}

// Add card to local storage
function setCardsData(cards) {
    localStorage.setItem('cards', JSON.stringify(cards))
    window.location.reload();
}

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

    if(questionVal.trim() && answerVal.trim()) {
        const newCard = {question: questionVal, answer: answerVal}

        createCard(newCard);

        questionVal.value = '';
        answerVal.value = '';

        addContainer.classList.remove('show')

        cardsData.push(newCard)
        setCardsData(cardsData)
    }
})

// Clear cards 
clearCardsBtn.addEventListener('click', () => {
    localStorage.clear();
    cardsContainer.innerHTML = ''
    window.location.reload();
})


function remove(e) {
    if(e.target.parentElement.classList.contains('delete-card')) {
        console.log(1234)
    }
}
