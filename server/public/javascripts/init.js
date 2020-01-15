let pointJS = new PointJS(document.documentElement.clientWidth, document.documentElement.clientHeight, { backgroundColor: '#696969' });
pointJS.system.initFullPage();

let log = pointJS.system.log,
  game = pointJS.game,
  point = pointJS.vector.point,
  camera = pointJS.camera,
  brush = pointJS.brush,
  OOP = pointJS.OOP,
  math = pointJS.math,
  modules = pointJS.modules,
  setPositionC = pointJS.camera.setPositionC;

let myLevel = false,
  countLVL = 2,
  level = LEVELS[countLVL],
  step = 64,
  wall = [], // стена
  field = [], // игровые блоки
  cobblestone = [], // булыжники
  eats = [], // еда
  antivirus = [],
  player = null, // персонаж
  playerAlive = true,
  escape = null, // escape
  user_made_move = null,
  user_go_next_lvl = null,
  count = 0,
  arr_antivirus = ["images/antivirus 0.png", "images/antivirus 1.png", "images/antivirus 2.png"],
  arr_eat = ["images/eat.png", "images/eat 1.png", "images/eat 2.png"],
  arr_cobblestone = ["images/cobblestone.png", "images/cobblestone rotate r.png", "images/cobblestone rotate.png", "/img/cobblestone rotate l.png"];

class Cheack {
  collision_player(x, y) { 
    if (player.x == x && player.y == y) {
      return true;
    } return false;
  }
  for_player(x, y) { 
    if (player.alive == true && wall.some(w => w.x == x && w.y == y && w.file != "") == false && cobblestone.some(c => c.x == x && c.y == y && c.file != "") == false) {
      return true;
    } return false;
  }
  that_block_empty(x, y) { 
    if (wall.some(w => w.x == x && w.y == y && w.file != "") == false && cobblestone.some(c => c.x == x && c.y == y && c.file != "") == false && field.some(f => f.x == x && f.y == y && f.file != "") == false && eats.some(e => e.x == x && e.y == y && e.file != "") == false && this.collision_player(x, y) == false) {
      return true;
    } return false;
  }
  for_falling_block_one_by_one(x, y) { 
    if(cobblestone.some(c => c.x == x + step && c.y == y + 128) == false && field.some(f => f.x == x + step && f.y == y + 128) == false && eats.some(e => e.x == x + step && e.y == y + 128) == false) {
      return true;
    } else if(cobblestone.some(c => c.x == x - step && c.y == y + 128) == false && field.some(f => f.x == x - step && f.y == y + 128) == false && eats.some(e => e.x == x - step && e.y == y + 128) == false) {
      return true;
    } else {
      return false;
    }
  }
  check_that_object_is_not_in_scope(currentX, currentY, finalX, finalY) {
    
  }
  checking_all_objects(currentX, currentY, finalX, finalY) {
    
  }
}

let cheack = new Cheack(),
  physica = new Physica();