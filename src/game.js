const isHeadInContact = function(other) {
  let head = snake.getHead();
  return other.some((element) => {
    return head.isSameCoordAs(element);
  });
}

const hasSnakeHitTheViewPort = function() {
  return isHeadInContact(getViewPortEdgeCoords());
};

const hasGameTerminated = function() {
  return snake.ateItself() || hasSnakeHitTheViewPort();
};
