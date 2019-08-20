forARR();

game.newLoop("game", function () {
  game.clear();
  OOP.drawArr(wall);
  OOP.drawArr(field);
  OOP.drawArr(eats);
  OOP.drawArr(cobblestone);

  pointJS.camera.setPositionC(player.getPosition());
  player.draw();

  controlerPlayer();
  playerPaintingBlocks();
  playerTouchedFood();

  if (userMadeMove() == true) {
    dropCobblestone();
    dropFood();
    dropBiasCobblestone();
    dropBiasEats();
  }
  if (userGoNextLvL() == true) {
    nextLevel();
    setUserGoNextLvL();
    game.setLoop('game');
  }
  if(escape != null) {
    escape.draw();
    playerTouchedEscape();
  }
  if(antivirus.length != 0) {
    OOP.drawArr(antivirus);
    //movementAntivirus();
  }
  brush.drawTextS({ text: 'count: ' + count, size: 32, color: '#FFFFFF', strokeWidth: 1, x: 10, y: 10, style: 'bold'});
});

game.start();