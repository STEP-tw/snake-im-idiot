let food = undefined;
let game=undefined;
let snake=undefined;
let animator = undefined;

const overlayOn=function(){
  let overlay=document.getElementById("overlay");
  overlay.style.display = "block";
  overlay.innerHTML+="<h1> GAME OVER !!</h2><h6>Click anywhere</h6>";
}
const removeOverlay=function() {
  document.getElementById("overlay").style.display="none";
};

const reloadGame = function() {
  window.location.reload();
}

const animateSnake = function() {
  let oldHead = snake.getHead();
  let oldTail = snake.move();
  let head = snake.getHead();
  paintBody(oldHead);
  unpaintSnake(oldTail);
  paintHead(head);
  if (head.isSameCoordAs(food)) {
    snake.grow();
    createFood(numberOfRows, numberOfCols);
    drawFood(food);
  }
  if (game.hasGameTerminated()) {
    clearInterval(animator);
    overlayOn();
    toggleDisableStateOfRestart();
  }
}

const changeSnakeDirection = function(event) {
  switch (event.code) {
    case "KeyA":
      snake.turnLeft();
      break;
    case "KeyD":
      snake.turnRight();
      break;
    case "KeyC":
      snake.grow();
      break;
    default:
  }
}

const toggleDisableStateOfRestart = function() {
  let reset = document.getElementById('restart');
  reset.disabled = !reset.disabled;
}

const addOnClickListenerToButton = function() {
  let reset = document.getElementById('restart');
  reset.onclick = reloadGame;
}
const addKeyListener = function() {
  let grid = document.getElementById("keys");
  grid.onkeyup = changeSnakeDirection;
  grid.focus();
}

const createSnake = function() {
  let tail = new Position(12, 10, "east");
  let body = [];
  body.push(tail);
  body.push(tail.next());
  let head = tail.next().next();
  snake=new Snake(head, body)
  game.addSnake(snake);
}

const createFood = function(numberOfRows, numberOfCols) {
  food = generateRandomPosition(numberOfCols, numberOfRows);
}

const startGame = function() {
  let numberOfRows=60
  let numberOfCols=120
  game=new Game(numberOfRows,numberOfCols);
  createSnake();
  drawGrids(numberOfRows, numberOfCols);
  drawSnake(snake);
  createFood(numberOfRows, numberOfCols);
  drawFood(food);
  addKeyListener();
  toggleDisableStateOfRestart();
  addOnClickListenerToButton();
  animator = setInterval(animateSnake, 140);
}

window.onload = startGame;
