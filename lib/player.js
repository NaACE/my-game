function controler_player() { 
  document.onkeydown = function(e) {
    user_made_move = true;

    if(player.alive == true && e.keyCode == 37 && cheack.for_player(player.x - step, player.y) == true) {
      move_player(player.x - step, player.y);
      user_go_next_lvl = false;
    } else if(player.alive == true && e.keyCode == 37) {
      cobblestone_move(player.x - step, player.y, false);
    } else if(player.alive == true && e.keyCode == 38 && cheack.for_player(player.x, player.y - step) == true) {
      move_player(player.x, player.y - step);
      user_go_next_lvl = false;
    } else if(player.alive == true && e.keyCode == 39 && cheack.for_player(player.x + step, player.y) == true) {
      move_player(player.x + step, player.y);
      user_go_next_lvl = false;
    } else if(player.alive == true && e.keyCode == 39) {
      cobblestone_move(player.x + step, player.y, true);
    } else if(player.alive == true && e.keyCode == 40 && cheack.for_player(player.x, player.y + step) == true) {
      move_player(player.x, player.y + step);
      user_go_next_lvl = false;
    }
  }
}
function move_player(x, y) { 
  var movement = player;
  movement.x = x;
  movement.y = y;
  player.moveTime(movement, 2);
}
function cobblestone_move(x, y, bool) { 
  cobblestone.forEach(c => {
    if(c.x == x && c.y == y && bool == false) {
      if(cheack.that_block_empty(x - step, y) == true) {
        move_player(player.x - step, player.y);

        let movement = c;
        movement.x -= step;
        c.moveTime(movement.getPosition(), 1000);
      }
    } else if(c.x == x && c.y == y && bool == true) {
      if(cheack.that_block_empty(x + step, y) == true) {
        move_player(player.x + step, player.y);

        let movement = c;
        movement.x += step;
        c.moveTime(movement.getPosition(), 1000);
      }
    }
  });
}
function check_what_player_stepped_on() { 
  field.forEach(f => {
    if(f.x == player.x && f.y == player.y && f.file != "") {
      f.file = "";
    }
  });
  eats.forEach(e => {
    if(e.x == player.x && e.y == player.y && e.file != "") {
      e.file = "";
      count++;
    }
  });
  if(escape != null && player.x == escape.x && player.y == escape.y) user_go_next_lvl = true;
}
function death_player() {
  player.alive = false;
  player.setImage("/img/playerAlive.png");
  boom(player.x, player.y);
}