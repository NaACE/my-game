var pointJS = new PointJS(document.documentElement.clientWidth, document.documentElement.clientHeight, { backgroundColor: '#696969' });
pointJS.system.initFullPage();

var log = pointJS.system.log,
  game = pointJS.game,
  point = pointJS.vector.point,
  camera = pointJS.camera,
  brush = pointJS.brush,
  OOP = pointJS.OOP,
  math = pointJS.math,
  modules = pointJS.modules;

var myLevel = false,
  countLVL = 0,
  level = LEVELS[countLVL],
  wall = [],        // стена
  field = [],       // игровые блоки
  cobblestone = [], // булыжники
  eats = [],        // еда
  player = null,    // персонаж
  escape = null,    // escape
  user_made_move = null,
  user_go_next_lvl = null,
  count = 0,
  arr_eat = ["/img/eat.png", "/img/eat 1.png", "/img/eat 2.png"],
  arr_cobblestone = ["/img/cobblestone.png", "/img/cobblestone rotate r.png", "/img/cobblestone rotate.png", "/img/cobblestone rotate l.png"];