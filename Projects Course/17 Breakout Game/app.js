const showRulesBtn = document.querySelector('.rules-btn');
const closeShowRulesBtn = document.querySelector('#close-btn');
const rules = document.querySelector('.rules');
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

let score = 0;

// Create Ball props
const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    size: 10,
    speed: 4,
    dx: 4,
    dy: -4      //Negative to make the ball move down, not up
}

// Create paddle props
const paddle = {
    x: canvas.width / 2 - 40,
    y: canvas.height - 20,
    w: 80,
    h: 10,
    speed: 8,
    dx: 0
}

// Draw ball onto canvas
function drawBall() {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2,);
    ctx.fillStyle = '#7584cb';
    ctx.fill();
    ctx.closePath();
}

// Draw paddle onto canvas
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddle.x, paddle.y, paddle.w, paddle.h);
    ctx.fillStyle = '#7584cb';
    ctx.fill();
    ctx.closePath();
}

// Draw Everything
function draw() {
    drawBall();
    drawPaddle();
    drawScore();
}

// Draw score on canvas
function drawScore() {
    ctx.font = '20px Arial';
    ctx.fillText(`Score: ${score}`, canvas.width - 100, 30);
}

draw();


// Rules and close event handlers
showRulesBtn.addEventListener('click', (e) => rules.classList.add('show'));
closeShowRulesBtn.addEventListener('click', (e) => rules.classList.remove('show'));