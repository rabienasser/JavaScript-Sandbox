const difficuly = document.querySelector('#difficulty');
const settingsBtn = document.querySelector('#settings-btn');
const startGameBtn = document.querySelector('.start-game');
const settings = document.querySelector('#settings');
const settingsForm = document.querySelector('#settings-form');
const word = document.querySelector('#word');
const textInput = document.querySelector('#text');
const score = document.querySelector('#score');
const time = document.querySelector('#time');
const endGame = document.querySelector('#end-game-container');


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


// List of words for Game
async function getWords() {
    const response = await fetch('https://random-word-api.herokuapp.com/word?number=100');
    const data = await response.json();

    let randomWord;

    data.forEach(word => {
        randomWord = Math.floor(Math.random() * data.length)
    })

    word.innerHTML = data[randomWord];

    startGameBtn.classList.remove('start-game');
    startGameBtn.classList.add('end-game');
    startGameBtn.textContent = 'End Game';
}


// function displayWord(data) {

//     data.forEach(word => {
//         let randomWord = Math.floor(Math.random() * data.length)
//         console.log(randomWord)
//     })
// }


// settingsBtn.addEventListener('click', getWords);
startGameBtn.addEventListener('click', startGame)




