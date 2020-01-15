function array_filling() {
  OOP.forArr(level.level, function (string, y) {
    OOP.forArr(string, function (element, x) {
      if (element == 'P') {
        let p = game.newImageObject({
          file: "images/player.png",
          x: x * step,
          y: y * step,
          w: step,
          h: step,
        });
        p.alive = true;
        p.live = 1;
        player = p;
      } else if (element == 'W') {
        wall.push(game.newImageObject({
          file: "images/block.bmp",
          x: x * step,
          y: y * step,
          w: step,
          h: step,
        }));
      } else if (element == 'F') {
        field.push(game.newImageObject({
          file: "images/edible block.jpg",
          x: x * step,
          y: y * step,
          w: step,
          h: step,
        }));
      } else if (element == 'C') {
        let cobb = game.newImageObject({
          file: "images/cobblestone.png",
          x: x * step,
          y: y * step,
          w: step,
          h: step,
        });
        cobb.isObject = "cobblestone";
        cobb.fallsXCells = 0;
        cobblestone.push(cobb);
      } else if (element == 'E') {
        var rand = Math.floor(Math.random() * 3);
        let eat = game.newImageObject({
          file: arr_eat[rand],
          x: x * step,
          y: y * step,
          w: step,
          h: step,
        });
        eat.isObject = "eat";
        eat.fallsXCells = 0;
        eats.push(eat);
      } else if (element == 'X') {
        escape = game.newImageObject({
          file: "images/escape.png",
          x: x * step,
          y: y * step,
          w: step,
          h: step
        });
      } else if (element == 'A') {
        var rand = Math.floor(Math.random() * 3);
        let avir = game.newImageObject({
          file: arr_antivirus[rand],
          x: x * step,
          y: y * step,
          w: step,
          h: step
        });

        avir.direction = 'down';
        avir.step = step;
        avir.route = { x: 0, y: step };
        antivirus.push(avir);
      }
    })
  });
}
function paint_block(x, y) {
  cobblestone.forEach(c => { if(c.x == x && c.y == y) { c.file = ""; } });
  field.forEach(f => { if(f.x == x && f.y == y) { f.file = ""; } });
  eats.forEach(e => { if(e.x == x && e.y == y) { e.file = ""; } });
  wall.forEach(w => { if(w.x == x && w.y == y) { w.file = ""; } })
}
function boom(x, y) {
  paint_block(x - step, y);
  paint_block(x + step, y);

  paint_block(x, y - step);
  paint_block(x, y + step);

  paint_block(x - step, y + step);
  paint_block(x + step, y + step);

  paint_block(x - step, y - step);
  paint_block(x + step, y - step);
}
function move(object, x, y) {
  object.moveTime( { x: x, y: y }, step);
}
function turn_cobblestone(object, bool) {
  if(object.isObject == "cobblestone") {
    console.log(bool);

    if (bool == true && object.file == arr_cobblestone[0]) {
      object.setImage(arr_cobblestone[1].toString());
    } else if (bool == true && object.file == arr_cobblestone[1]) {
      object.setImage(arr_cobblestone[2].toString());
    } else if (bool == true && object.file == arr_cobblestone[2]) {
      object.setImage(arr_cobblestone[3].toString());
    } else if (bool == true && object.file == arr_cobblestone[3]) {
      object.setImage(arr_cobblestone[0].toString());
    }

    if (bool == false && object.file == arr_cobblestone[0]) {
      object.setImage(arr_cobblestone[3].toString());
    } else if (bool == false && object.file == arr_cobblestone[3]) {
      object.setImage(arr_cobblestone[2].toString());
    } else if (bool == false && object.file == arr_cobblestone[2]) {
      object.setImage(arr_cobblestone[1].toString());
    } else if (bool == false && object.file == arr_cobblestone[1]) {
      object.setImage(arr_cobblestone[0].toString());
    }
  }
}