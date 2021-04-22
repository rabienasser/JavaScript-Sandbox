const difficuly = document.querySelector('#difficulty');
const settingsBtn = document.querySelector('#settings-btn');
const settings = document.querySelector('#settings');
const settingsForm = document.querySelector('#settings-form');
const word = document.querySelector('#word');
const textInput = document.querySelector('#text');
const score = document.querySelector('#score');
const time = document.querySelector('#time');
const endGame = document.querySelector('#end-game-container');


// List of words for Game
async function getWords() {
    const response = await fetch('https://random-word-api.herokuapp.com/word?number=100');
    const data = await response.json();
    let randomWord = Math.floor(Math.random() * data.length)

    data.forEach(word => {
         return (data[randomWord]);
    })

    displayWord(randomWord);
}

function displayWord(randomWord) {
    word.innerHTML = randomWord;
}


settingsBtn.addEventListener('click', displayWord);



