const showRulesBtn = document.querySelector('.rules-btn');
const closeShowRulesBtn = document.querySelector('#close-btn');
const rules = document.querySelector('.rules');
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

let score = 0;

const brickRowCount = 5;
const brickColumnCount = 9;


// ITEM PROPERTIES
// Create Brick Props
const  brickInfo = {
    w: 70,
    h: 20,
    padding: 10,
    offsetX: 45,
    offsetY: 60,
    visible: true
}

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


//DRAWING ITEMS IN UI

// Create Bricks
const bricks = [];
for(let i = 0; i < brickColumnCount; i++) {
    bricks[i] = [];
    for(let j = 0; j < brickRowCount; j++) {
        const x = i * (brickInfo.w + brickInfo.padding) + brickInfo.offsetX;
        const y = j * (brickInfo.h + brickInfo.padding) + brickInfo.offsetY;
        bricks[i][j] = { x, y, ...brickInfo }
    }
    console.log(bricks[i]);
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

// Draw score on canvas
function drawScore() {
    ctx.font = '20px Arial';
    ctx.fillText(`Score: ${score}`, canvas.width - 100, 30);
}

// Draw Bricks on Canvas
function drawBricks() {
    bricks.forEach((column) => {
        column.forEach((brick) => {
            ctx.beginPath();
            ctx.rect(brick.x, brick.y, brick.w, brick.h);
            ctx.fillStyle = brick.visible ? '#7584cb' : 'transparent';
            ctx.fill();
            ctx.closePath();
        })
    })
}
// Draw Everything
function draw() {
    drawBall();
    drawPaddle();
    drawScore();
    drawBricks();
}

draw();


// Rules and close event handlers
showRulesBtn.addEventListener('click', (e) => rules.classList.add('show'));
closeShowRulesBtn.addEventListener('click', (e) => rules.classList.remove('show'));