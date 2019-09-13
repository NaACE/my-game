function move_antivirus() {
  for (var a in antivirus) {
    if (direction_antivirus[a].x == "0" && direction_antivirus[a].y == "64") {
      if (checkThatBlockEmpty(antivirus[a].x, antivirus[a].y + step) == true) {
        move(antivirus[a], antivirus[a].x, antivirus[a].y + step);
      } else if (checkThatBlockEmpty(antivirus[a].x + step, antivirus[a].y) == true) {
        move(antivirus[a], antivirus[a].x + step, antivirus[a].y);
      } else if (checkThatBlockEmpty(antivirus[a].x + step, antivirus[a].y) == false && checkThatBlockEmpty(antivirus[a].x, antivirus[a].y + step) == false) {
        direction_antivirus[a].setDirection(64, 0);
      }
    } else if (direction_antivirus[a].x == "64" && direction_antivirus[a].y == "0") {
      if (checkThatBlockEmpty(antivirus[a].x, antivirus[a].y - step) == true) {
        move(antivirus[a], antivirus[a].x, antivirus[a].y - step);
      } else if (checkThatBlockEmpty(antivirus[a].x + step, antivirus[a].y) == true) {
        move(antivirus[a], antivirus[a].x + step, antivirus[a].y);
      } else if (checkThatBlockEmpty(antivirus[a].x + step, antivirus[a].y) == false && checkThatBlockEmpty(antivirus[a].x, antivirus[a].y - step) == false) {
        direction_antivirus[a].setDirection(0, -64);
      }
    } else if (direction_antivirus[a].x == "0" && direction_antivirus[a].y == "-64") {
      if (checkThatBlockEmpty(antivirus[a].x, antivirus[a].y - step) == true) {
        move(antivirus[a], antivirus[a].x, antivirus[a].y - step);
      } else if (checkThatBlockEmpty(antivirus[a].x - step, antivirus[a].y) == true) {
        move(antivirus[a], antivirus[a].x - step, antivirus[a].y);
      } else if (checkThatBlockEmpty(antivirus[a].x - step, antivirus[a].y) == false && checkThatBlockEmpty(antivirus[a].x, antivirus[a].y - step) == false) {
        direction_antivirus[a].setDirection(-64, 0);
      }
    } else if (direction_antivirus[a].x == "-64" && direction_antivirus[a].y == "0") {
      if (checkThatBlockEmpty(antivirus[a].x, antivirus[a].y + step) == true) {
        move(antivirus[a], antivirus[a].x, antivirus[a].y + step);
      } else if (checkThatBlockEmpty(antivirus[a].x - step, antivirus[a].y) == true) {
        move(antivirus[a], antivirus[a].x - step, antivirus[a].y);
      } else if (checkThatBlockEmpty(antivirus[a].x - step, antivirus[a].y) == false && checkThatBlockEmpty(antivirus[a].x, antivirus[a].y + step) == false) {
        direction_antivirus[a].setDirection(0, 64);
      }
    }
  }
}


class class_direction_antivirus {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  setDirection(x, y) {
    this.x = x;
    this.y = y;
  }
}