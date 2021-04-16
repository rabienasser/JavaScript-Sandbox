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


// Move paddle on canvas
function movePaddle() {
    paddle.x += paddle.dx;

    // Wall detection
    if(paddle.x + paddle.w > canvas.width) {
        paddle.x = canvas.width - paddle.w;
    }

    if(paddle.x < 0) {
        paddle.x = 0
    }
}

// Move Ball
function moveBall() {
    ball.x += ball.dx;
    ball.y += ball.dy;

    // Wall collision (x)
    if(ball.x + ball.size > canvas.width || ball.x - ball.size < 0) {
        ball.dx *= -1;
    }

    // Wall collision (y)
    if(ball.y + ball.size > canvas.height || ball.y + ball.size < 0) {
        ball.dy *= -1;
    }

    // Paddle collision
    if(ball.x - ball.size > paddle.x && 
       ball.x + ball.size < paddle.x + paddle.w && 
       ball.y + ball.size > paddle.y) {
        ball.dy = -ball.speed;
    }

    // Brick collision
    bricks.forEach(column => {
        column.forEach(brick => {
            if(brick.visible) {
                if(ball.x - ball.size > brick.x &&
                    ball.x + ball.size < brick.x + brick.w &&
                    ball.y + ball.size > brick.y &&
                    ball.y - ball.size < brick.y + brick.h) {
                        ball.dy *= -1;
                        brick.visible = false;
                }
            }
        })
    })
}

// Draw Everything
function draw() {
// Clear Canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawBall();
    drawPaddle();
    drawScore();
    drawBricks();
}

// Update Canvas drawing and animation
function update() {
    movePaddle();
    moveBall();

    // Draw Everything
    draw();

    requestAnimationFrame(update);
}

update();

// Keydown event 
function keyDown(e) {
    if(e.key === 'Right' || e.key === 'ArrowRight') {
        paddle.dx = paddle.speed;
    } else if(e.key === 'Left' || e.key === 'ArrowLeft') {
        paddle.dx = -paddle.speed;
    };
}

// KeyUp event
function keyUp(e) {
   paddle.dx = 0;
}

// Keyboard event handlers
document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);


// Rules and close event handlers
showRulesBtn.addEventListener('click', (e) => rules.classList.add('show'));
closeShowRulesBtn.addEventListener('click', (e) => rules.classList.remove('show'));