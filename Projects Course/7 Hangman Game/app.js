const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const popup = document.getElementById('popup-container');
const playAgainBtn = document.getElementById('final-message');
const finalMessage = document.getElementById('final-message');
const notification = document.getElementById('notification-container');

const figurePart = document.querySelectorAll('.figure-part');

const word = ['Real Madrid', 'Dortmund'];


let selectedWord = word[Math.floor(Math.random() * word.length)];


const correctLetters = [];
const wrongLetters = [];


// Show hidden word
function displayWord() {
    if(selectedWord.includes(' ')) {
        wordEl.innerHTML = `
    ${selectedWord
    .split('')
    .map(letter => `
        <span class="letter">
        ${correctLetters.includes(letter) ? letter : ''}
        </span>
    `)
    .join('')}
    `;
    } else {
        wordEl.innerHTML = `
        ${selectedWord
        .split('')
        .map(letter => `
            <span class="letter">
            ${correctLetters.includes(letter) ? letter : ''}
            </span>
        `)
        .join('')}
        `;
    }

    console.log(selectedWord)

    const innerWord = wordEl.innerText.replace(/\n/g, '');

    if(innerWord === selectedWord) {
        finalMessage.innerText = 'Congratulations! You Won!';
        popup.style.display = 'flex';
    }
}

displayWord();


// Update Wrong Letters
function updateWrongLettersEl() {
    console.log('Update wrong')
}


// Show notification
function showNotification() {
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show')
    }, 2000)
}


// Keydown letter press
window.addEventListener('keydown', e => {
    // console.log(e.keyCode);
    if(e.keyCode >= 65 && e.keyCode <= 90) {
        const letter = e.key;

        if(selectedWord.includes(letter)) {
            if(!correctLetters.includes(letter)) {
                correctLetters.push(letter);

                displayWord();
            } else {
                showNotification();
            }
        } else {
            if(!wrongLetters.includes(letter)) {
                wrongLetters.push(letter);

                updateWrongLettersEl();
            } else {
                showNotification();
            }
        }
    }
})
