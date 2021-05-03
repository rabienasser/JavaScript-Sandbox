const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const popup = document.getElementById('popup-container');
const playAgainBtn = document.getElementById('play-button');
const finalMessage = document.getElementById('final-message');
const notification = document.getElementById('notification-container');
const revealWord = document.getElementById('reveal-word');

const figureParts = document.querySelectorAll('.figure-part');

const word = ['Real Madrid', 'Dortmund', 'Roma', 'Newcastle', 'Sevilla', 'Leipzig', 'Atletico', 'Porto', 'Ajax', 'Liverpool', 'Leeds', 'Leverkusen', 'Napoli', 'Feyenoord', 'Arsenal', 'Everton', 'Atalanta', 'Leicester', 'Frankfurt', 'Valencia', 'Lazio', 'Wolves', 'Athletic Club', 'Fiorentina', 'Celtic', 'Rangers', 'Zenit', 'Barcelona', 'Wolfsburg', 'West Ham', 'Basel', 'Torino', 'Inter Milan', 'Spurs', 'Getafe', 'Parma', 'Lyon', 'Lille', 'Monaco', 'Sampdoria', 'Southampton', 'Paris Saint Germain', 'Werder Bremen', 'Besiktas', 'Bayern Munich', 'Schalke'];


let selectedWord = word[Math.floor(Math.random() * word.length)];


const correctLetters = [];
const wrongLetters = [];


// Show hidden word
function displayWord() {
        wordEl.innerHTML = `
        ${selectedWord
        .split('')
        .map(
            letter => {
                if(letter === ' ') {
                    return `<span class="space"></span>`
                } else {
                    return `
                    <span class="letter">
            ${correctLetters.includes(letter) ? letter : ''}
            </span>
                    `
                }
            }
            
        ).join('')}
        `;

        const innerWord = wordEl.innerText.replace(/\n/g, '');

        if(innerWord === selectedWord.replace(/\s/g, '')) {
            finalMessage.innerText = 'Congratulations! You Won! 😃';
            popup.style.display = 'flex';
            notification.style.display = 'none'
            window.removeEventListener('keydown', onKeyDown)
        }
}


    // Display Wrong Letters
function updateWrongLettersEl() {
     wrongLettersEl.innerHTML = `
        ${wrongLetters.length > 0 ? '<p>Wrong</p>' : ''}
        ${wrongLetters.map(letter => `<span>${letter}</span>`)}
            `;

        // Display figure
    figureParts.forEach((part, index) => {
        const errors = wrongLetters.length;

        if(index < errors) {
            part.style.display = 'block'
        } else {
            part.style.display = 'none'
        }
    })


    // Check if lost
    if(wrongLetters.length === figureParts.length) {
        finalMessage.innerText = 'Unfortunatley, you lost.'
        revealWord.innerText = `The team was: ${selectedWord}`
        popup.style.display = 'flex'
        notification.style.display = 'none'
        window.removeEventListener('keydown', onKeyDown)
    }
}


// Stop keydown after game is over
// function stopKeydown() {
//     // Object.preventExtensions(wrongLetters);
//     // Object.preventExtensions(correctLetters);
// }


// Show notification
function showNotification() {
    notification.classList.add('show');
  
    setTimeout(() => {
      notification.classList.remove('show');
    }, 2000);
  }


// Keydown letter press
window.addEventListener('keydown',onKeyDown) 

function onKeyDown(e) {
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
            if (!wrongLetters.includes(letter)) {
                wrongLetters.push(letter);
        
                updateWrongLettersEl();
              } else {
                showNotification();
              }
        }
    }
}


// Event listener
playAgainBtn.addEventListener('click', e => {
    window.location.reload();
})


displayWord();