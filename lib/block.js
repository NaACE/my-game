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

// свободное падение объектов 
function dropCobblestone() {
  for (var i in cobblestone) {
    if (this.checkThatBlockEmpty(cobblestone[i].x, cobblestone[i].y + 64) == true) {
      var cobb = cobblestone[i];
      cobb.y += 64;
      cobblestone[i].moveTime(cobb, 9999999);
      //cobblestone[i].moveToC(cobb, 0, 1);
    } else {
      
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
function turnCobblestone(i, numer) {
  if(numer == 64 && cobblestone[i].file == arr_cobblestone[0]) {
    cobblestone[i].setImage(arr_cobblestone[1].toString());
    cobblestone[i].x += 64;
  } else if(numer == 64 && cobblestone[i].file == arr_cobblestone[1]) {
    cobblestone[i].setImage(arr_cobblestone[2].toString());
    cobblestone[i].x += 64;
  } else if(numer == 64 && cobblestone[i].file == arr_cobblestone[2]) {
    cobblestone[i].setImage(arr_cobblestone[3].toString());
    cobblestone[i].x += 64;
  } else if(numer == 64 && cobblestone[i].file == arr_cobblestone[3]) {
    cobblestone[i].setImage(arr_cobblestone[0].toString());
    cobblestone[i].x += 64;
  }
  
  if(numer == -64 && cobblestone[i].file == arr_cobblestone[0]) {
    cobblestone[i].setImage(arr_cobblestone[3].toString());
    cobblestone[i].x -= 64;
  } else if(numer == -64 && cobblestone[i].file == arr_cobblestone[3]) {
    cobblestone[i].setImage(arr_cobblestone[2].toString());
    cobblestone[i].x -= 64;
  } else if(numer == -64 && cobblestone[i].file == arr_cobblestone[2]) {
    cobblestone[i].setImage(arr_cobblestone[1].toString());
    cobblestone[i].x -= 64;
  } else if(numer == -64 && cobblestone[i].file == arr_cobblestone[1]) {
    cobblestone[i].setImage(arr_cobblestone[0].toString());
    cobblestone[i].x -= 64;
  }
}
function dropBiasCobblestone() {
  for (var i in cobblestone) {
    for (var j in cobblestone) {
      if (cobblestone[i].x == cobblestone[j].x && cobblestone[i].y + 64 == cobblestone[j].y) {
        if (this.checkThatBlockEmpty(cobblestone[i].x - 64, cobblestone[i].y) == true && this.checkThatBlockEmpty(cobblestone[i].x + 64, cobblestone[i].y) == true) {
          var rand = Math.floor(Math.random() * 2);
          if (rand == 0 && this.checkThatBlockEmpty(cobblestone[j].x + 64, cobblestone[j].y) == true) {
            turnCobblestone(i, 64);
          } else if (rand == 1 && this.checkThatBlockEmpty(cobblestone[j].x - 64, cobblestone[j].y) == true) {
            turnCobblestone(i, -64);
          }
        } else if (this.checkThatBlockEmpty(cobblestone[i].x - 64, cobblestone[i].y) == false && this.checkThatBlockEmpty(cobblestone[i].x + 64, cobblestone[i].y) == true) {
          if (this.checkThatBlockEmpty(cobblestone[j].x + 64, cobblestone[j].y) == true) {
            turnCobblestone(i, 64);
          }
        } else if (this.checkThatBlockEmpty(cobblestone[i].x - 64, cobblestone[i].y) == true && this.checkThatBlockEmpty(cobblestone[i].x + 64, cobblestone[i].y) == false) {
          if (this.checkThatBlockEmpty(cobblestone[j].x - 64, cobblestone[j].y) == true) {
            turnCobblestone(i, -64);
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