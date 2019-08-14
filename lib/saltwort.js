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
function turnCobblestone(i, numer) {
  if(numer == 64 && cobblestone[i].file == arr_cobblestone[0]) {
    //cobblestone[i].file = arr_cobblestone[1].toString();
    cobblestone[i].x += 64;
  } else if(numer == 64 && cobblestone[i].file == arr_cobblestone[1]) {
    //cobblestone[i].file = arr_cobblestone[2].toString();
    cobblestone[i].x += 64;
  } else if(numer == 64 && cobblestone[i].file == arr_cobblestone[2]) {
    //cobblestone[i].file = arr_cobblestone[3].toString();
    cobblestone[i].x += 64;
  } else if(numer == 64 && cobblestone[i].file == arr_cobblestone[3]) {
    //cobblestone[i].file = arr_cobblestone[0].toString();
    cobblestone[i].x += 64;
  }
  
  if(numer == -64 && cobblestone[i].file == arr_cobblestone[0]) {
    //cobblestone[i].file = arr_cobblestone[3].toString();
    cobblestone[i].x -= 64;
  } else if(numer == -64 && cobblestone[i].file == arr_cobblestone[3]) {
    //cobblestone[i].file = arr_cobblestone[2].toString();
    cobblestone[i].x -= 64;
  } else if(numer == -64 && cobblestone[i].file == arr_cobblestone[2]) {
    //cobblestone[i].file = arr_cobblestone[1].toString();
    cobblestone[i].x -= 64;
  } else if(numer == -64 && cobblestone[i].file == arr_cobblestone[1]) {
    //cobblestone[i].file = arr_cobblestone[0].toString();
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

function nextLevel() {
  if(countLVL <= 3) {
    OOP.clearArr(wall);
    OOP.clearArr(field);
    OOP.clearArr(eats);
    OOP.clearArr(cobblestone);
    player = null;
    escape = null;
    
    countLVL++;
    level = LEVELS[countLVL];
    forARR();
  }

};
function forARR() {
  OOP.forArr(level.level, function (string, y) {
    OOP.forArr(string, function (element, x) {
      if (element == 'P') {
        player = game.newImageObject({
          file: "/img/player.png",
          x: x * 64,
          y: y * 64,
          w: 64,
          h: 64,
        });
      } else if (element == 'W') {
        wall.push(game.newImageObject({
          file: "/img/block.bmp",
          x: x * 64,
          y: y * 64,
          w: 64,
          h: 64,
        }));
      } else if (element == 'F') {
        field.push(game.newImageObject({
          file: "/img/edible block.jpg",
          x: x * 64,
          y: y * 64,
          w: 64,
          h: 64,
        }));
      } else if (element == 'C') {
        cobblestone.push(game.newImageObject({
          file: "/img/cobblestone.png",
          x: x * 64,
          y: y * 64,
          w: 64,
          h: 64,
        }));
      } else if (element == 'E') {
        var rand = Math.floor(Math.random() * 3);
        if (rand == 0) {
          eats.push(game.newImageObject({
            file: arr_eat[0],
            x: x * 64,
            y: y * 64,
            w: 64,
            h: 64,
          }));
        } else if (rand == 1) {
          eats.push(game.newImageObject({
            file: arr_eat[1],
            x: x * 64,
            y: y * 64,
            w: 64,
            h: 64,
          }));
        } else {
          eats.push(game.newImageObject({
            file: arr_eat[2],
            x: x * 64,
            y: y * 64,
            w: 64,
            h: 64,
          }));
        }
      } else if (element == 'X') {
        escape = game.newImageObject({
          file: "/img/escape.png",
          x: x * 64,
          y: y * 64,
          w: 64,
          h: 64,
        });
      }
    })
  });
}