const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const popup = document.getElementById('popup-container');
const playAgainBtn = document.getElementById('final-message');
const finalMessage = document.getElementById('final-message');
const notification = document.getElementById('notification-container');

const figurePart = document.querySelectorAll('.figure-part');

const word = ['Real Madrid', 'Dortmund', 'Roma', 'Newcastle', 'Sevilla', 'Leipzig', 'Atletico', 'Porto', 'Ajax', 'Liverpool', 'Leeds', 'Leverkusen', 'Napoli', 'Feyenoord', 'Arsenal', 'Everton', 'Atalanta', 'Leicester', 'Frankfurt', 'Valencia', 'Lazio', 'Wolves', 'Athletic Club', 'Fiorentina', 'Celtic', 'Rangers', 'Zenit', 'Barcelona', 'Wolfsburg', 'West Ham', 'Basel', 'Torino', 'Inter Milan', 'Spurs', 'Getafe', 'Parma'];

let selectedWord = word[Math.floor(Math.random() * word.length)];

const correctLetters = [];
const wrongLetters = [];


// Show hidden word
(function displayWord() {
    wordEl.innerHTML = `
    ${selectedWord
    .split('')
    .map(letter => `
        <span class="letter">
        ${correctLetters.includes(letter) ? letter : ''}
        </span>
    `).join('')}
    `;

    const innerWord = wordEl.innerText.replace(/\n/g, '');

    if(innerWord === selectedWord) {
        finalMessage.innerText = 'Congratulations! You Won!';
        popup.style.display = 'flex';
    }
})()


// Keydown letter press
window.addEventListener('keydown', e => {
    // console.log(e.keyCode);
    if(e.keyCode >= 65 && e.keyCode <= 90) {
        const letter = e.key;

        if(selectedWord.includes(letter)) {
            if(!correctLetters.includes(letter)) {
                correctLetters.push(letter);

                displayWord();
            } else
        }
    }
})
