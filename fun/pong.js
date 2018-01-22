var canvas, ctx;
var ball = {x: 0, y: 0};
var radius = 20;
var velocityB = {x: 5, y: 5};

var sideGap = 2;
var paddleL = {x: 2, y: 0, v: 0};
var paddleR = {x: 1, y: 0, v: 0};
var paddleW = 10;
var paddleH = 100;
var paddleSpeed = 10;
var score = {left: 0, right: 0};

window.onload = function() {
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');

  ball = {x: canvas.width / 2, y: canvas.height / 2};
  velocityB = {x: randomiseDirection(), y: randomiseDirection()};
  paddleL = {x: sideGap, y: canvas.height / 2 - paddleH / 2, v: 0};
  paddleR = {x: canvas.width - paddleW - sideGap, y: canvas.height / 2 - paddleH / 2, v: 0};

  window.addEventListener('keydown', keyDown);
  window.addEventListener('keyup', keyUp);

  var fps = 30;
  setInterval(game, 1000 / fps);
}

function game(){
  move();
  draw();
}

function bounce() {
  if (ball.x - radius <= 0 + paddleW + sideGap && ball.y >= paddleL.y && ball.y <= paddleL.y + paddleH){
    velocityB.x *= -1;
  }
  if (ball.x + radius >= canvas.width - paddleW - sideGap && ball.y >= paddleR.y && ball.y <= paddleR.y + paddleH){
    velocityB.x *= -1;
  }
  if (ball.y - radius <= 0){
    velocityB.y *= -1;
  }
  if (ball.y + radius >= canvas.height){
    velocityB.y *= -1;
  }
}

function randomise(){
  return Math.floor(Math.random() * 5) + 5;
}

function randomiseDirection(){
  const r = Math.floor(Math.random() * 10);
  return r < 5 ? r + 5 * -1 : r + 5;
}


function paddleMissed(){
  if ((ball.x - radius <= 0 + paddleW + sideGap) && (ball.y < paddleL.y || ball.y > paddleL.y + paddleH)){
    velocityB = {x: randomise(), y: randomiseDirection()};
    score.right++;
    document.getElementById('right').textContent = `Right: ${score.right}`;
    return true;
  }
  if ((ball.x + radius >= canvas.width - paddleW - sideGap) && (ball.y < paddleR.y || ball.y > paddleR.y + paddleH)){
    velocityB = {x: randomise() * -1, y: randomiseDirection()};
    score.left++;
    document.getElementById('left').textContent = `Left: ${score.left}`;
    return true;
  }
  return false;
}

function moveBall(){
  if (paddleMissed()){
    ball = {x: canvas.width / 2, y: canvas.height / 2};
  }
  bounce();
  ball.x += velocityB.x;
  ball.y += velocityB.y;
}

function movePaddle(){
  if (paddleL.y >= paddleSpeed && paddleL.v < 0 || paddleL.y <= canvas.height - paddleSpeed - paddleH && paddleL.v > 0){
    paddleL.y += paddleL.v;
  }
  if((paddleR.y >= paddleSpeed && paddleR.v < 0) || (paddleR.y <= canvas.height - paddleSpeed - paddleH && paddleR.v > 0)){
    paddleR.y += paddleR.v;
  }
}

function move() {
  moveBall();
  movePaddle();
}

function draw(){

  // draw canvas
  ctx.fillStyle = 'rgb(0, 0, 0)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  
  // lines
  ctx.strokeStyle = 'rgb(255, 255, 255)';
  ctx.beginPath();
  ctx.moveTo(sideGap + paddleW, 0);
  ctx.lineTo(sideGap + paddleW, canvas.height);
  ctx.stroke();
  
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, 0);
  ctx.lineTo(canvas.width / 2, canvas.height);
  ctx.stroke();
  
  ctx.beginPath();
  ctx.moveTo(canvas.width - paddleW - sideGap, 0);
  ctx.lineTo(canvas.width - paddleW - sideGap, canvas.height);
  ctx.stroke();
  
  // draw ball
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, radius, 0, 2 * Math.PI);
  ctx.fillStyle = 'rgb(236, 180, 76)';
  ctx.fill();

  // draw paddle
  ctx.fillStyle = 'rgb(255, 255, 255)';
  ctx.fillRect(paddleL.x, paddleL.y, paddleW, paddleH);
  
  ctx.fillStyle = 'rgb(255, 255, 255)';
  ctx.fillRect(paddleR.x, paddleR.y, paddleW, paddleH);
}

function keyDown(key) {
  switch(key.keyCode){
    
    // left: 'w' and 's'
    case 87:
      paddleL.v = 0 - paddleSpeed;
      break;
    case 83:
      paddleL.v = 0 + paddleSpeed;
      break;

    // right: 'up' and 'down
    case 38:
      paddleR.v = 0 - paddleSpeed;
      break;
    case 40:
      paddleR.v = 0 + paddleSpeed;
      break;
    }
}
function keyUp(key) {
  switch(key.keyCode){
    
    // left: 'w' and 's'
    case 87:
      paddleL.v = 0;
      break;
    case 83:
      paddleL.v = 0;
      break;

    // right: 'up' and 'down
    case 38:
      paddleR.v = 0;
      break;
    case 40:
      paddleR.v = 0;
      break;
    }
}
