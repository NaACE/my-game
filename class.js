var wall = [];        // стена
var field = [];       // игровые блоки
var cobblestone = []; // булыжники
var eats = [];        // еда
var player = null;    // персонаж
var escape = null;    // escape
var user_made_move = null;
var user_go_next_lvl = null;
var count = 0;

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
// проверьте, что игрок может идти
function checkThatPlayerCanGo(testX, testY) {
  if (this.collisionCheckBlock(testX, testY) == false &&
    this.collisionCheckCobblestone(testX, testY) == false &&
    this.collisionCheckPlayer(testX, testY) == false) {
      return true;
  } else {
    false;
  }
}
function userGoNextLvL() {
  if (user_go_next_lvl == true && count >= 10) {
    return true;
  }
}
// свободное падение объектов 
function userMadeMove() {
  if (user_made_move == true) {
    return true;
  }
}
function dropCobblestone() {
  for (var i in cobblestone) {
    if (this.checkThatBlockEmpty(cobblestone[i].x, cobblestone[i].y + 64) == true) {
      var cobb = cobblestone[i];
      cobb.y += 64;
      cobblestone[i].moveToC(cobb, 0, 1);
    }
  }
}
function dropFood() {
  for (var i in eats) {
    if (this.checkThatBlockEmpty(eats[i].x, eats[i].y + 64) == true) {
      var eat = eats[i];
      eat.y += 64;

      eats[i].moveToC(eat, 0, 1);
    }
  }
}
function dropBiasCobblestone() {
  for (var i in cobblestone) {
    for (var j in cobblestone) {
      if (cobblestone[i].x == cobblestone[j].x && cobblestone[i].y + 64 == cobblestone[j].y) {
        if (this.checkThatBlockEmpty(cobblestone[i].x - 64, cobblestone[i].y) == true && this.checkThatBlockEmpty(cobblestone[i].x + 64, cobblestone[i].y) == true) {
          var rand = Math.floor(Math.random() * 2);
          if (rand == 0 && this.checkThatBlockEmpty(cobblestone[j].x + 64, cobblestone[j].y) == true) {
            cobblestone[i].x += 64;
          } else if (rand == 1 && this.checkThatBlockEmpty(cobblestone[j].x - 64, cobblestone[j].y) == true) {
            cobblestone[i].x -= 64;
          }
        } else if (this.checkThatBlockEmpty(cobblestone[i].x - 64, cobblestone[i].y) == false && this.checkThatBlockEmpty(cobblestone[i].x + 64, cobblestone[i].y) == true) {
          if (this.checkThatBlockEmpty(cobblestone[j].x + 64, cobblestone[j].y) == true) {
            cobblestone[i].x += 64;
          }
        } else if (this.checkThatBlockEmpty(cobblestone[i].x - 64, cobblestone[i].y) == true && this.checkThatBlockEmpty(cobblestone[i].x + 64, cobblestone[i].y) == false) {
          if (this.checkThatBlockEmpty(cobblestone[j].x - 64, cobblestone[j].y) == true) {
            cobblestone[i].x -= 64;
          }
        }
      }
    }
  }
}
function dropBiasEats() {
  for (var i in eats) {
    for (var j in eats) {
      if (eats[i].x == eats[j].x && eats[i].y + 64 == eats[j].y) {
        if (this.checkThatBlockEmpty(eats[i].x - 64, eats[i].y) == true && this.checkThatBlockEmpty(eats[i].x + 64, eats[i].y) == true) {
          var rand = Math.floor(Math.random() * 2);
          if (rand == 0 && this.checkThatBlockEmpty(eats[j].x + 64, eats[j].y) == true) {
            eats[i].x += 64;
          } else if (rand == 1 && this.checkThatBlockEmpty(eats[j].x - 64, eats[j].y) == true) {
            eats[i].x -= 64;
          }
        } else if (this.checkThatBlockEmpty(eats[i].x - 64, eats[i].y) == false && this.checkThatBlockEmpty(eats[i].x + 64, eats[i].y) == true) {
          if (this.checkThatBlockEmpty(eats[j].x + 64, eats[j].y) == true) {
            eats[i].x += 64;
          }
        } else if (this.checkThatBlockEmpty(eats[i].x - 64, eats[i].y) == true && this.checkThatBlockEmpty(eats[i].x + 64, eats[i].y) == false) {
          if (this.checkThatBlockEmpty(eats[j].x - 64, eats[j].y) == true) {
            eats[i].x -= 64;
          }
        }
      }
    }
  }
}



/* getter и setter массивов */
function getCount() {
  return count;
}
function getWall() {
  return wall;
}
function setWall(point) {
  wall.push(point);
}
function getPlayer() {
  return player;
}
function setPlayer(point) {
  player = point;
}
function getField() {
  return field;
}
function setField(point) {
  field.push(point);
}
function getCobblestone() {
  return cobblestone;
}
function setCobblestone(point) {
  cobblestone.push(point);
}
function getEats() {
  return eats;
}
function setEats(point) {
  eats.push(point);
}
function getEscape() {
  return escape;
}
function setEscape(point) {
  escape = point;
}
function setUserGoNextLvL() {
  user_go_next_lvl = false;
  count = 0;
}



/* функции игрока */
function getPlayer() {
  return player;
}
// управление персонажем 
function controlerPlayer() {
  document.onkeydown = function (e) {
    user_made_move = true;
    if (e.keyCode == 37 && checkThatPlayerCanGo(player.x - 64, player.y) == true) {
      console.log(player.getPosition());
      var move = player;
      move.x -= 64;
      player.moveTime(move.getPosition(), 1000);
      console.log(player.getPosition());
      user_go_next_lvl = false;
    } else if (e.keyCode == 38 && checkThatPlayerCanGo(player.x, player.y - 64) == true) {
      console.log(player.getPosition());
      var move = player;
      move.y -= 64;
      player.moveTime(move.getPosition(), 1000);
      console.log(player.getPosition());
      user_go_next_lvl = false;
    } else if (e.keyCode == 39 && checkThatPlayerCanGo(player.x + 64, player.y) == true) {
      console.log(player.getPosition());
      var move = player;
      move.x += 64;
      player.moveTime(move.getPosition(), 1000);
      console.log(player.getPosition());
      user_go_next_lvl = false;
    } else if (e.keyCode == 40 && checkThatPlayerCanGo(player.x, player.y + 64) == true) {
      console.log(player.getPosition());
      var move = player;
      move.y += 64;
      player.moveTime(move.getPosition(), 1000);
      console.log(player.getPosition());
      user_go_next_lvl = false;
    }
  };
}
// покраска блоков
function paintingBlocks() {
  for (var i in field) {
    if (field[i].x == player.x && field[i].y == player.y && field[i].file != "") {
      field[i].file = "";
    }
  }
}
// игрок прикоснулся к еде
function playerTouchedFood() {
  for (var i in eats) {
    if (eats[i].x == player.x && eats[i].y == player.y && eats[i].file != "") {
      eats[i].file = "";
      count++;
    }
  }
}
// игрок прикоснулся к escape 
function playerTouchedEscape() {
  if (player.x == escape.x && player.y == escape.y) {
    user_go_next_lvl = true;
  }
}