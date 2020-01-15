// управление персонажем 
function controlerPlayer() {
  document.onkeydown = function (e) {
    user_made_move = true;
    if (playerAlive == true && e.keyCode == 37 && checkThatPlayerCanGo(player.x - 64, player.y) == true) {
      var move = player;
      move.x -= 64;
      player.moveTime(move.getPosition(), 1000);
      user_go_next_lvl = false;
    } else if (playerAlive == true && e.keyCode == 37) {
      cobblestoneMovement(player.x - 64, player.y, false);
    } else if (playerAlive == true && e.keyCode == 38 && checkThatPlayerCanGo(player.x, player.y - 64) == true) {
      var move = player;
      move.y -= 64;
      player.moveTime(move.getPosition(), 1000);
      user_go_next_lvl = false;
    } else if (playerAlive == true && e.keyCode == 39 && checkThatPlayerCanGo(player.x + 64, player.y) == true) {
      var move = player;
      move.x += 64;
      player.moveTime(move.getPosition(), 1000);
      user_go_next_lvl = false;
    } else if (playerAlive == true && e.keyCode == 39) {
      cobblestoneMovement(player.x + 64, player.y, true);
    } else if (playerAlive == true && e.keyCode == 40 && checkThatPlayerCanGo(player.x, player.y + 64) == true) {
      var move = player;
      move.y += 64;
      player.moveTime(move.getPosition(), 1000);
      user_go_next_lvl = false;
    }

    else if (playerAlive == true && e.key == "a") {
      var move = player;
      move.x -= 64;
      player.moveTime(move.getPosition(), 1000);
      user_go_next_lvl = false;
    } else if (playerAlive == true && e.key == "w") {
      var move = player;
      move.y -= 64;
      player.moveTime(move.getPosition(), 1000);
    } else if (playerAlive == true && e.key == "d") {
      var move = player;
      move.x += 64;
      player.moveTime(move.getPosition(), 1000);
    } else if (playerAlive == true && e.key == "s") {
      var move = player;
      move.y += 64;
      player.moveTime(move.getPosition(), 1000);
      user_go_next_lvl = false;
    }
  };
}
// покраска блоков
function playerPaintingBlocks() {
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
// проверка что игрок съел определенное количество еды и может перейти на следующий уровень
function userGoNextLvL() {

  if (user_go_next_lvl == true && count >= 10 && level == LEVELS[0]) {
    return true;
  } else if(user_go_next_lvl == true && count >= 6 && level == LEVELS[1]) {
    return true;
  } else if(user_go_next_lvl == true && count >= 0 && level == LEVELS[2]) {
    return true;
  } 
}
// возможность толкать булыжники в сторону
function cobblestoneMovement(playerX, playerY, bool) {
  for (var i in cobblestone) {
    if (cobblestone[i].x == playerX && cobblestone[i].y == playerY && bool == false) { // <==
      if (checkThatBlockEmpty(playerX - 64, playerY) == true) {
        var move = player;
        move.x -= 64;
        player.moveTime(move.getPosition(), 1000);

        move = cobblestone[i];
        move.x -= 64;
        cobblestone[i].moveTime(move.getPosition(), 1000);
      }
    } else if (cobblestone[i].x == playerX && cobblestone[i].y == playerY && bool == true) { // ==>
      if (checkThatBlockEmpty(playerX + 64, playerY) == true) {
        var move = player;
        move.x += 64;
        player.moveTime(move.getPosition(), 1000);

        move = cobblestone[i];
        move.x += 64;
        cobblestone[i].moveTime(move.getPosition(), 1000);
      }
    }
  }
}
// обнуление счетчика
function setUserGoNextLvL() {
  user_go_next_lvl = false;
  count = 0;
}

var deathPlayer = function() {
  playerAlive = false;
  player.setImage("/img/playerAlive.png");
  boom(player.x, player.y);
}