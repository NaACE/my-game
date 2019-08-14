/* всяческие проверки с блоками */
// проверка на столкновение со стеной 
function collisionCheckBlock(testX, testY) {
  for (var i in wall) {
    if (wall[i].x == testX && wall[i].y == testY) {
      return true;
    }
  }
  return false;
}
// проверка на столкновение с булыжником 
function collisionCheckCobblestone(testX, testY) {
  for (var i in cobblestone) {
    if (cobblestone[i].x == testX && cobblestone[i].y == testY) {
      return true;
    }
  }

  return false;
}
// проверка столкновений игровым полем 
function collisionCheckField(testX, testY) {
  for (var i in field) {
    if (field[i].x == testX && field[i].y == testY && field[i].file != "") {
      return true;
    }
  }

  return false;
}
// проверка столкновения с персонажем 
function collisionCheckPlayer(testX, testY) {
  if (player.x == testX && player.y == testY) {
    return true;
  }

  return false;
}
// проверка столкновения с едой 
function collisionCheckEat(testX, testY) {
  for (var i in eats) {
    if (eats[i].x == testX && eats[i].y == testY && eats[i].file != "") {
      return true;
    }
  }

  return false;
}
// проверка столкновения с escape 
function collisionCheckEscape(testX, testY) {
  if (escape.x == testX && escape.y == testY) {
    return true;
  }

  return false;
}
// проверка что блок пустой 
function checkThatBlockEmpty(testX, testY) {
  if (this.collisionCheckBlock(testX, testY) == false &&
    this.collisionCheckCobblestone(testX, testY) == false &&
    this.collisionCheckField(testX, testY) == false &&
    this.collisionCheckPlayer(testX, testY) == false &&
    this.collisionCheckEat(testX, testY) == false &&
    this.collisionCheckEscape(testX, testY) == false) {
    return true;
  } else {
    return false;
  }
}