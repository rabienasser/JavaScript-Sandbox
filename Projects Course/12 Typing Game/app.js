const difficuly = document.querySelector('#difficulty');
const settingsBtn = document.querySelector('#settings-btn');
const startGameBtn = document.querySelector('.start-game');
const stopGameBtn = document.querySelector('.stop-game');
const settings = document.querySelector('#settings');
const settingsForm = document.querySelector('#settings-form');
const word = document.querySelector('#word');
const textInput = document.querySelector('#text');
const scoreEl = document.querySelector('#score');
const time = document.querySelector('#time');
const endGame = document.querySelector('#end-game-container');
const small = document.querySelector('small');


let score = 0;

// Start game
function startGame() {
    let countdown = 6;

        const beginGame = setInterval(function() {
            countdown--;
            word.innerHTML = countdown;
            if(countdown <= 0){
                clearInterval(beginGame);
                setInterval(getWords, 3000);
            } 
        }, 1000)

}

// Stop game
function stopGame() {
        word.style.display = 'none';
        small.style.display = 'none';
        clearInterval(getWords);
        endGame.innerHTML = 'Game Over';

        startGame();
}


// Update score
function updateScore() {
    score++;
    scoreEl.innerHTML = score;
}


// List of words for Game
async function getWords() {
    const response = await fetch('https://random-word-api.herokuapp.com/word?number=100');
    const data = await response.json();

    let randomWord;

    data.forEach(word => {
        randomWord = Math.floor(Math.random() * data.length)
    })
    
    word.innerHTML = data[randomWord];

}



startGameBtn.addEventListener('click', startGame)
stopGameBtn.addEventListener('click', stopGame)




