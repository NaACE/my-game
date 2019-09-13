array_filling();

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

  if (user_made_move == true) {
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
  if(antivirus.length >= 1) {
    move_antivirus();
    OOP.drawArr(antivirus);
  }
  brush.drawTextS({ text: 'count: ' + count, size: 32, color: '#FFFFFF', strokeWidth: 1, x: 10, y: 10, style: 'bold'});
});
console.log(antivirus[0].getPosition());

game.setLoop("game");
game.start();