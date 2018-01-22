var canvas, ctx;
var snake = {x: 0, y: 0};
var snakeTrail = [];
var trailLength = 5;

var apple= {x: 0, y: 0};
var size = 20;
var velocity = {x: -1, y: 0};
var score = 0;

window.onload = function() {
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
  window.addEventListener('keydown', keyDown);
  
  setupGame();
  
  var fps = 10;
  setInterval(game, 1000 / fps, draw);
} 

function randomise(obj){
  obj.x = Math.floor(Math.random() * (canvas.width / size)) * size;
  obj.y = Math.floor(Math.random() * (canvas.width / size)) * size;
}

function setupGame(){
  randomise(snake);
  randomise(apple);
  snakeTrail = [];
  score = 0;
  for (let i = 0; i < trailLength; i++){
    snakeTrail.push({x: snake.x + i * size, y: snake.y});
  }
}

function hitApple(){
  return snake.x === apple.x && snake.y === apple.y;
}

function hitSelf(){
  for(let i = 1; i < snakeTrail.length; i++){
    if(snakeTrail[i].x === snake.x && snakeTrail[i].y === snake.y){
      return true;
    }
  }
}

function game(callback){
  document.getElementById('score').textContent = score;
  snake.x += velocity.x * 20;
  snake.y += velocity.y * 20;

  if (snake.x < 0){
    snake.x = canvas.width - size;
  }
  if (snake.x >= canvas.width){
    snake.x = 0;
  }
  if (snake.y < 0){
    snake.y = canvas.height - size;
  }
  if (snake.y >= canvas.height){
    snake.y = 0;
  }

  snakeTrail.unshift({x: snake.x, y: snake.y});

  if(!hitApple()){
    snakeTrail.pop();
  } else {
    score++;
    randomise(apple);
  }
  if(hitSelf()){
    setupGame();
  }

  callback();
}

// draw the canvas then the snake then the apple

function draw(){

  // draw canvas
  ctx.fillStyle = 'rgb(0, 0, 0)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // draw snake
  ctx.fillStyle = 'rgb(28, 255, 8)';
  ctx.strokeStyle = 'rgb(0, 0, 0)';
  snakeTrail.forEach((block) => {
    ctx.fillRect(block.x, block.y, size, size);
    ctx.strokeRect(block.x, block.y, size, size);
  });
  
  // draw apple
  ctx.fillStyle = 'rgb(255, 0, 0)';
  ctx.strokeStyle = 'rgb(0, 0, 0)';
  ctx.fillRect(apple.x, apple.y, size, size);
  ctx.strokeRect(apple.x, apple.y, size, size);
}


// The sname cannot reverse into itself

function keyDown(key){
  switch(key.keyCode){
    case 37:
      if (velocity.x != 1){
        velocity.x = -1;
        velocity.y = 0;
      }
      break;
    case 38:
      if (velocity.y != 1){
        velocity.y = -1;
        velocity.x = 0;
      }
      break;
    case 39:
      if (velocity.x != -1){
        velocity.x = 1;
        velocity.y = 0;
      }
      break;
    case 40:
    if (velocity.y != -1){
      velocity.x = 0;
      velocity.y = 1;
    }
      break;
    }
}