ballX = 200;
ballY = 200;

ballDx = 2;
ballDy = 0;

function setup() {
    createCanvas(400, 400);
}

function drawBall() {
    circle(ballX, ballY, 20);
}
  
function draw() {
    background(220);
    drawBall();
    ballX = ballX + ballDx;
    ballY = ballY + ballDy;

    if ((ballX < 0) || (ballX > 400)){
        ballDx = -ballDx;
    }
    if ((ballY < 0) || (ballY > 400)){
        ballDy = -ballDy;
    }
    ballDy = ballDy + 0.1;
}

function mousePressed() {
    ballX = mouseX;
    ballY = mouseY;
    ballDy = 0;
    ballDx = 0;
}