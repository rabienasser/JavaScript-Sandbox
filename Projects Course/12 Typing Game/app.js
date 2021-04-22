const difficuly = document.querySelector('#difficulty');
const settingsBtn = document.querySelector('#settings-btn');
const startGameBtn = document.querySelector('.start-game');
const stopGameBtn = document.querySelector('.stop-game');
const settings = document.querySelector('#settings');
const settingsForm = document.querySelector('#settings-form');
const word = document.querySelector('#word');
const textInput = document.querySelector('#text');
const score = document.querySelector('#score');
const time = document.querySelector('#time');
const endGame = document.querySelector('#end-game-container');
const small = document.querySelector('small');




function stopGame() {
    word.innerHTML = 'Game Over';
    small.style.display = 'none';
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




