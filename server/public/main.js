array_filling();

game.newLoop("game", function () {
  game.clear();

  OOP.drawArr(cobblestone);
  OOP.drawArr(field);
  OOP.drawArr(eats);
  OOP.drawArr(wall);

  setPositionC(player.getPosition());
  player.draw();

  controler_player();
  check_what_player_stepped_on();

  if(user_made_move == true) {
    physica.fall_stones_and_food();
    physica.movement_direction();
  }
  if(antivirus > 0) {
    OOP.drawArr(antivirus);
    
  }
  
  brush.drawTextS({ text: 'count: ' + count, size: 32, color: '#FFFFFF', strokeWidth: 1, x: 10, y: 10, style: 'bold'});
  if(player.live > 0) {
    brush.drawTextS({ text: 'alive: ' + player.live, size: 32, color: '#FFFFFF', strokeWidth: 1, x: 10, y: 40, style: 'bold'});
  } else {
    brush.drawTextS({ text: 'game over', size: 50, color: '#FFFFFF', strokeWidth: 1, x: 10, y: 40, style: 'bold'});
  }
});

game.setLoop("game");
game.start();