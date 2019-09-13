function array_filling() {
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
        cobblFallsXCells.push(0);
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
      } else if (element == 'A') {
        var rand = Math.floor(Math.random() * 3);
        if (rand == 0) {
          antivirus.push(game.newImageObject({
            file: arr_antivirus[0],
            x: x * 64,
            y: y * 64,
            w: 64,
            h: 64,
          }));
          direction_antivirus.push(new class_direction_antivirus(0, 64));
        } else if (rand == 1) {
          antivirus.push(game.newImageObject({
            file: arr_antivirus[1],
            x: x * 64,
            y: y * 64,
            w: 64,
            h: 64,
          }));
          direction_antivirus.push(new class_direction_antivirus(0, 64));
        } else {
          antivirus.push(game.newImageObject({
            file: arr_antivirus[2],
            x: x * 64,
            y: y * 64,
            w: 64,
            h: 64,
          }));
          direction_antivirus.push(new class_direction_antivirus(0, 64));
        }
      }
    })
  });
}
function painting_blocks(x, y) {
  for (var i = 0; i < wall.length; i++) {
    if (wall[i].x == x && wall[i].y == y) {
      wall[i].file = "";
    }
  }
  for (var i = 0; i < field.length; i++) {
    if (field[i].x == x && field[i].y == y) {
      field[i].file = "";
    }
  }
  for (var i = 0; i < cobblestone.length; i++) {
    if (cobblestone[i].x == x && cobblestone[i].y == y) {
      cobblestone[i].file = "";
    }
  }
  for (var i = 0; i < eats.length; i++) {
    if (eats[i].x == x && eats[i].y == y) {
      eats[i].file = "";
    }
  }
}
function boom(x, y) {
  painting_blocks(x - 64, y);
  painting_blocks(x + 64, y);

  painting_blocks(x, y - 64);
  painting_blocks(x, y + 64);

  painting_blocks(x - 64, y + 64);
  painting_blocks(x + 64, y + 64);

  painting_blocks(x - 64, y - 64);
  painting_blocks(x + 64, y - 64);
}
function move(object, x, y) {
  var movement = object;
  movement.x = x;
  movement.y = y;
  object.moveTime(movement, 2);// 1000
}


function nextLevel() {
  if (countLVL <= 3) {
    OOP.clearArr(wall);
    OOP.clearArr(field);
    OOP.clearArr(eats);
    OOP.clearArr(cobblestone);
    player = null;
    escape = null;

    level = LEVELS[++countLVL];
    forARR();
  }

};