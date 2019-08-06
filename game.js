var level = LEVELS[0];

OOP.forArr(level.level, function (string, y) {
  OOP.forArr(string, function (element, x) {
    if (element == 'P') {
      setPlayer(game.newImageObject({
        file: "/img/player.jpg",
        x: x * 64,
        y: y * 64,
        w: 64,
        h: 64,
      }));
    } else if (element == 'W') {
      setWall(game.newImageObject({
        file: "/img/block.png",
        x: x * 64,
        y: y * 64,
        w: 64,
        h: 64,
      }));
    } else if (element == 'F') {
      setField(game.newImageObject({
        file: "/img/edible block.jpg",
        x: x * 64,
        y: y * 64,
        w: 64,
        h: 64,
      }));
    } else if (element == 'C') {
      setCobblestone(game.newImageObject({
        file: "/img/cobblestone.png",
        x: x * 64,
        y: y * 64,
        w: 64,
        h: 64,
      }));
    } else if (element == 'E') {
      setEats(game.newImageObject({
        file: "/img/eat.jpg",
        x: x * 64,
        y: y * 64,
        w: 64,
        h: 64,
      }));
    } else if (element == 'X') {
      setEscape(game.newImageObject({
        file: "/img/escape.png",
        x: x * 64,
        y: y * 64,
        w: 64,
        h: 64,
      }));
    }
  })
});

var nextLevel = function () {
  OOP.clearArr(getWall());
  OOP.clearArr(getField());
  OOP.clearArr(getEats());
  OOP.clearArr(getCobblestone());  
  setPlayer(null);

  level = LEVELS[1];

  OOP.forArr(level.level, function (string, y) {
    OOP.forArr(string, function (element, x) {
      if (element == 'P') {
        setPlayer(game.newImageObject({
          file: "/img/player.jpg",
          x: x * 64,
          y: y * 64,
          w: 64,
          h: 64,
        }));
      } else if (element == 'W') {
        setWall(game.newImageObject({
          file: "/img/block.png",
          x: x * 64,
          y: y * 64,
          w: 64,
          h: 64,
        }));
      } else if (element == 'F') {
        setField(game.newImageObject({
          file: "/img/edible block.jpg",
          x: x * 64,
          y: y * 64,
          w: 64,
          h: 64,
        }));
      }
    })
  });
};

game.newLoop("game", function () {
  game.clear();
  OOP.drawArr(getWall());
  OOP.drawArr(getField());
  OOP.drawArr(getEats());
  OOP.drawArr(getCobblestone());

  pointJS.camera.setPositionC(getPlayer().getPosition());
  getPlayer().draw();
  getEscape().draw();

  console.log(player.getPosition());

  controlerPlayer();
  paintingBlocks();
  playerTouchedFood();
  playerTouchedEscape();

  if(userMadeMove() == true) {
    dropCobblestone();
    dropFood();
    dropBiasCobblestone();
    dropBiasEats();
  }
  if(userGoNextLvL() == true) {    
    nextLevel();
    setUserGoNextLvL();
    game.setLoop('game');
  }

  brush.drawTextS({
    text : 'count: ' + getCount(),
    size : 32,
    color : '#FFFFFF',
    strokeWidth : 1,
    x : 10, y : 10,
    style : 'bold'
  });
});

game.start();