let Game=function(numberOfRows,numberOfCols) {
  this.rows=numberOfRows;
  this.cols=numberOfCols;
  this.snake={};
};
Game.prototype.addSnake=function(snake) {
  this.snake=snake;
};
Game.prototype.hasSnakeHitTheWall=function(){
  let topLeft= new Position(0,0,"east");
  let bottomRight=new Position(this.rows,this.cols,"east");
  return this.snake.hasHitTheWall(topLeft,bottomRight);
};

Game.prototype.hasGameTerminated = function() {
  return snake.ateItself() || this.hasSnakeHitTheWall();
};
