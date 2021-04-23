// Variables
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
let timeInterval;



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


// Update Time
function updateTime() {
    if(time >= 1) {
        time--;
        timeEl.innerHTML = time + 's';
    }

    if(time === 0) {
        clearInterval(timeInterval)
        gameOver();
    }
}


// Update Score
function updateScore() {
    score++;
    scoreEl.innerHTML = score;
}

// Start Game
function startGame() {
     timeInterval = setInterval(updateTime, 1000);
    getWords();
    addWordToDOM();
    updateTime();

    // Focus on text on Start
    textInput.focus();

    startGameBtn.style.display = 'none';
    stopGameBtn.style.display = 'flex';
}


// Game over, show end screen
function gameOver() {
    endGame.innerHTML = `
    <h1>Time ran out</h1>
    <p>Your score is ${score}</p>
    <button onclick = "location.reload()">Reload</button>
    `;

    endGame.style.display = 'flex';
    stopGameBtn.style.display = 'none';
}


// Event Listeners
textInput.addEventListener('input', e => {
    const insertedText = e.target.value;

    if(insertedText === randomWord) {
        addWordToDOM();
        updateScore();
        time = 11;
        setTimeout(function() {e.target.value = ''},450);
    }
})

startGameBtn.addEventListener('click', startGame)
stopGameBtn.addEventListener('click', gameOver)


// Hide Settings Btn
settingsBtn.addEventListener('click', () => {
    settings.classList.toggle('hidden');
})


// Settings Select
settingsForm.addEventListener('change', e => {
    difficulty = e.target.value;
    localStorage.setItem('difficulty', difficulty);
})
