class Physica {
  fall_stones_and_food() {
    let array = cobblestone.concat(eats);

    array.forEach(a => {
      if (a.fallsXCells >= 2 && cheack.collision_player(a.x, a.y + step) == true) {
        death_player();
      } else if (cheack.that_block_empty(a.x, a.y + step) == true) {
        if (a.y % step == 0) {
          a.fallsXCells += 1;
        }
        move(a, a.x, a.y + step);
      } else {
        a.fallsXCells = 0;
      }
    });
  }
  movement_direction() {
    let array = cobblestone.concat(eats);

    array.forEach(a1 => {
      array.forEach(a2 => {
        if (a1.x == a2.x && a1.y + step == a2.y && cheack.that_block_empty(a2.x, a2.y + step) == false && cheack.for_falling_block_one_by_one(a1.x, a1.y) == true) {
          if (cheack.that_block_empty(a1.x + step, a1.y) == true && cheack.that_block_empty(a1.x + step, a1.y + step) == true && cheack.that_block_empty(a1.x - step, a1.y) == true && cheack.that_block_empty(a1.x - step, a1.y + step) == true) {
            let rand = Math.floor(Math.random() * 2);
            if (rand == 0) {
              turn_cobblestone(a1, false);
              let movement = a1;
              movement.x -= step;
              a1.moveTime(movement, 2);
            } else if (rand == 1) {
              turn_cobblestone(a1, true);
              let movement = a1;
              movement.x += step;
              a1.moveTime(movement, 2);
            }
          } else if (cheack.that_block_empty(a1.x + step, a1.y) == true && cheack.that_block_empty(a1.x + step, a1.y + step) == true) {
            turn_cobblestone(a1, true);
            let movement = a1;
            movement.x += step;
            a1.moveTime(movement, 2);
          } else if (cheack.that_block_empty(a1.x - step, a1.y) == true && cheack.that_block_empty(a1.x - step, a1.y + step) == true) {
            turn_cobblestone(a1, false);
            let movement = a1;
            movement.x -= step;
            a1.moveTime(movement, 2);
          }
        }
      })
    });
  }
}