const difficuly = document.querySelector('#difficulty');
const settingsBtn = document.querySelector('#settings-btn');
const startGameBtn = document.querySelector('.start-game');
const stopGameBtn = document.querySelector('.stop-game');
const settings = document.querySelector('#settings');
const settingsForm = document.querySelector('#settings-form');
const word = document.querySelector('#word');
const textInput = document.querySelector('#text');
const scoreEl = document.querySelector('#score');
const timeEl = document.querySelector('#time');
const endGame = document.querySelector('#end-game-container');
const small = document.querySelector('small');


let randomWord;
let score = 0;
let time = 10;




// Generate Random Word from API
async function getWords() {
    const response = await fetch('https://random-word-api.herokuapp.com/word?number=1');
    const data = await response.json();

    return data[0]

}

// Add Word to DOM
async function addWordToDOM() {
    randomWord = await getWords();
    word.innerHTML = randomWord;
}

addWordToDOM();

function updateScore() {
    score++;
    scoreEl.innerHTML = score;
}


// Event Listeners
textInput.addEventListener('input', e => {
    const insertedText = e.target.value;

    if(insertedText === randomWord) {
        addWordToDOM();
        updateScore();
        setTimeout(function() {e.target.value = ''},450);
    }
})
// startGameBtn.addEventListener('click', startGame)
// stopGameBtn.addEventListener('click', stopGame)




