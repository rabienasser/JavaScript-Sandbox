/*
Game Function/Rules
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct anser if lose
- Let player choose to play again
*/


// Game values
let min = 1, 
    max = 10,
    winningNum = randomNum();
    guessesLeft = 3;

    // UI Elements
    const game = document.querySelector('#game'),
          minNum = document.querySelector('.min-num'),
          maxNum = document.querySelector('.max-num'),
          guessBtn = document.querySelector('#guess-btn'),
          guessInput = document.querySelector('#guess-input'),
          message = document.querySelector('.message');


// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;


// Generating Random Number(Answer)
function randomNum(){
    return(Math.floor(Math.random() * 10) + 1);
}


// Listen for guess
guessBtn.addEventListener('click', function(e){
    let guess = parseInt(guessInput.value);

    // Validate
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
        return false;
    }

    // Check if won
    if(guess === winningNum){
        gameOver(true, `${winningNum} is correct. Congrats, You Won!`)
    } else {
        guessesLeft -= 1;

        if(guessesLeft === 0){
           gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`)
        } else{
            guessInput.value = '';
            guessInput.style.borderColor = 'red';
            setMessage(`${guess} is not correct. ${guessesLeft} guesses remaining`, 'red');
        }
    }
});


// Game Over function
function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';

    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    message.style.color = color;
    setMessage(msg);


    // Play Again?
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again'; 
    guessBtn.addEventListener('click', function(){
        window.location.reload();
    })
}


// Set Message for invalid/valid guess
function setMessage (msg, color){
    message.style.color = color;
    message.textContent = msg;
}

