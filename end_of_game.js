const isHeadInContact = function(other) {
  let head = snake.getHead();
  return other.some((element) => {
    return head.isSameCoordAs(element);
  });
}

const hasSnakeAteItself = function() {
  let body = snake.getBody();
  return isHeadInContact(body);
};

const hasSnakeHitTheViewPort = function() {
  return isHeadInContact(getViewPortEdgeCoords());
};

const hasGameTerminated = function() {
  return hasSnakeAteItself() || hasSnakeHitTheViewPort();
};
