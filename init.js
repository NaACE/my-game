var pointJS = new PointJS(document.documentElement.clientWidth, document.documentElement.clientHeight, { backgroundColor: '#696969' });
pointJS.system.initFullPage();

var log = pointJS.system.log;
var game = pointJS.game;
var point = pointJS.vector.point;
var camera = pointJS.camera;
var brush = pointJS.brush;
var OOP = pointJS.OOP;
var math = pointJS.math;
var modules = pointJS.modules;

var key = pointJS.keyControl.initKeyControl();
var mouse = pjs.mouseControl.initMouseControl();

var myLevel = false;