function userMadeMove() {
  if (user_made_move == true) {
    return true;
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