function PointJS(Ka, La, kb, zc) {
  this._logo = "http://pointjs.ru/PjsMin.png";
  var k = window,
      A = this,
      F = !1,
      wa = "fixed",
      Hb = 0,
      Ib = 0,
      lb = 100,
      Jb = function(a) {
          a = a.getBoundingClientRect();
          return {
              y: a.top + k.pageYOffset,
              x: a.left + k.pageXOffset
          }
      },
      lc = function(a) {
          for (var b = 1; a;) b += a.style.zIndex, a = a.offsetParent;
          return b
      };
  if (1 === arguments.length) {
      F = arguments[0];
      var Kb = Jb(F);
      Hb = Kb.x;
      Ib = Kb.y;
      Ka = F.offsetWidth;
      La = F.offsetHeight;
      wa = "absolute";
      lb = lc(F)
  }
  var xa = !0,
      mb = !0,
      Lb = !0,
      da = !1,
      ya = !0,
      m = Ka,
      p = La,
      ha = Ka,
      ia = La,
      M = m / 2,
      N = p / 2,
      f = {
          x: 0,
          y: 0
      },
      t = {
          fillStyle: "black",
          strokeStyle: "black",
          globalAlpha: 1,
          font: "serif",
          textBaseline: "top"
      },
      Y = function(a) {
          console.log("[PointJS] : ", a)
      };
  "undefined" !== typeof POINTJS_USER_LOG && (Y = POINTJS_USER_LOG);
  var Ma = function(a) {
      var b = decodeURI(a.stack.toString().replace(/(@|[\(\)]|[\w]+:\/\/)/g, ""));
      b = b.split(/\n/);
      b = ("" === b[2] ? b[0] : b[1]).split("/");
      b = b[b.length - 1].split(":");
      Y('ERROR "' + a.toString() + '" \n in      ' + b[0] + " \n line :   " + b[1] + " \n symbol : " + b[2])
  };
  this.game = {};
  this.levels = {};
  this.camera = {};
  this.keyControl = {};
  this.mouseControl = {};
  this.touchControl = {};
  this.system = {};
  this.vector = {};
  this.math = {};
  this.layers = {};
  this.colors = {};
  this.brush = {};
  this.audio = {};
  this.wAudio = {};
  this.resources = {};
  this.tiles = {};
  this.OOP = {};
  this.memory = {};
  this.modules = {};
  this.zList = {};
  this.filters = {};
  this.system.log = Y;
  this.system.consoleLog = function(a) {
      this.log = !0 === a ? console.log : Y
  };
  this.system.setTitle = function(a) {
      k.document.title = a
  };
  this.system.setSettings = function(a) {
      xa = v(a.isShowError) ? a.isShowError : !0;
      mb = v(a.isStopForError) ? a.isStopForError :
          !0;
      Lb = v(a.isAutoClear) ? a.isAutoClear : !1;
      v(a.isZBuffer)
  };
  this.system.setDefaultSettings = function(a) {
      for (var b in a) t[b] = a[b];
      g.save()
  };
  this.system.setSmoothing = function(a) {
      ya = a;
      g.msImageSmoothingEnabled = ya;
      g.imageSmoothingEnabled = ya
  };
  this.system.restart = function(a) {
      k.location.reload(a)
  };
  var mc = {
      name: "PointJS",
      desc: "HTML5 Game Engine for JavaScript",
      author: "Skaner",
      version: "0.4.1"
  };
  this.system.getInfo = function() {
      return mc
  };
  this.modules["import"] = function(a, b) {
      B.add();
      var c = new XMLHttpRequest;
      c.open("GET", a, !0);
      c.onload = function() {
          var a = {
                  constructor: function() {}
              },
              h = c.responseText.toString().replace(/PointJS.Module/i, "Module.constructor");
          (new Function("Module", h))(a);
          a = new a.constructor(A, k);
          B.load();
          b(a)
      };
      c.send()
  };
  this.modules.importSync = function(a) {
      try {
          var b = new XMLHttpRequest;
          b.open("GET", a, !1);
          b.send()
      } catch (c) {
          return
      }
      a = {
          constructor: function() {}
      };
      b = b.responseText.toString().replace(/PointJS.Module/i, "Module.constructor");
      (new Function("Module", b))(a);
      return new a.constructor(A, k)
  };
  var Z = function(a, b) {
          b.prototype = Object.create(a.prototype);
          b.prototype.constructor = b
      },
      aa = function(a, b, c) {
          this.x = a || 0;
          this.y = b || 0;
          this.z = c || 0
      };
  aa.prototype = {
      abs: function() {
          return new aa(Math.abs(this.x), Math.abs(this.y), Math.abs(this.z))
      },
      invert: function() {
          return new aa(-this.x, -this.y, -this.z)
      },
      plus: function(a) {
          return new aa(this.x + a.x, this.y + a.y, this.z + a.z)
      },
      minus: function(a) {
          return new aa(this.x - a.x, this.y - a.y, this.z - a.z)
      },
      inc: function(a) {
          return new aa(this.x * a.x, this.y * a.y, this.z * a.z)
      },
      div: function(a) {
          return new aa(this.x /
              a.x, this.y / a.y, this.z / a.z)
      },
      "int": function() {
          return new aa(this.x >> 0, this.y >> 0, this.z >> 0)
      }
  };
  var e = function(a, b, c) {
          return new aa(a, b, c)
      },
      x = function(a, b, c) {
          return {
              w: a,
              h: b,
              d: c
          }
      },
      Na = function(a, b) {
          return {
              x: a.x + b.x,
              y: a.y + b.y,
              z: a.z + b.z
          }
      },
      E = function(a, b, c) {
          if (c) {
              var d = G(c);
              c = a.x - b.x;
              a = a.y - b.y;
              var h = Math.cos(d);
              d = Math.sin(d);
              return e(c * h - a * d + b.x, c * d + a * h + b.y)
          }
          return e(a.x, a.y)
      },
      za = function(a, b) {
          return 180 / Math.PI * Math.atan2(b.y - a.y, b.x - a.x)
      },
      ra = function(a, b) {
          var c, d = 0;
          var h = 0;
          var e = b.length;
          for (c = b.length -
              1; h < e; c = h++) b[h].y > a.y !== b[c].y > a.y && a.x < (b[c].x - b[h].x) * (a.y - b[h].y) / (b[c].y - b[h].y) + b[h].x && (d = !d);
          return d
      },
      Aa = function(a, b, c) {
          return !(a < b || a > c)
      };
  this.vector.isNumInRange = Aa;
  this.vector.point = e;
  this.vector.simplePoint = function(a, b, c) {
      return {
          x: !1 !== a ? a : !1,
          y: !1 !== b ? b : !1,
          z: !1 !== c ? c : !1
      }
  };
  this.vector.v2d = e;
  this.vector.size = x;
  this.vector.getPointAngle = E;
  this.vector.isPointIn = ra;
  this.vector.pointMinus = function(a, b) {
      return {
          x: a.x - b.x,
          y: a.y - b.y,
          z: a.z - b.z
      }
  };
  this.vector.pointPlus = Na;
  this.vector.pointInc = function(a,
      b) {
      return {
          x: a.x * b.x,
          y: a.y * b.y,
          z: a.z * b.z
      }
  };
  this.vector.pointDiv = function(a, b) {
      return {
          x: a.x / (0 !== b.x ? b.x : 1),
          y: a.y / (0 !== b.y ? b.y : 1),
          z: a.z / (0 !== b.z ? b.z : 1)
      }
  };
  this.vector.pointAbs = function(a) {
      return {
          x: Math.abs(a.x),
          y: Math.abs(a.y),
          z: Math.abs(a.z)
      }
  };
  this.vector.getMidPoint = function(a, b) {
      return v(b) ? e((a.x + b.x) / 2, (a.y + b.y) / 2) : 0
  };
  this.vector.getDistance = function(a, b) {
      return Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2))
  };
  this.vector.isSame = function(a, b) {
      return v(b) ? a.x === b.x && a.y === b.y : !1
  };
  this.vector.getAngle2Points =
      za;
  this.vector.newStaticBox = function(a, b, c, d) {
      return {
          x: a,
          y: b,
          w: c,
          h: d
      }
  };
  this.vector.newDynamicBoxRect = function(a, b, c, d) {
      return [e(a, b), e(a + c, b), e(a + c, b + d), e(a, b + d)]
  };
  this.vector.moveCollision = function(a, b, c, d, h, e) {
      var f = !1,
          g = !1,
          u = c.abs(),
          k = a.getStaticBoxPosition(),
          m = b.length - 1,
          p;
      var n = 2 + u.x;
      for (p = 2 + u.y; 0 <= m; m--)
          if (u = b[m], u.visible && a !== u && !(h && !u.isInCameraStatic() || e && a.getDistanceC(u.getPositionC()) > e) && a.isStaticIntersect(u.getStaticBox())) {
              var l = u.getStaticBoxPosition();
              k.h >= l.y + p && k.y <= l.h - p &&
                  (0 <= c.x ? Aa(k.w, l.x, l.w) && (a.x = l.x - (a.w + a.box.w + a.box.x) + 1, c.x = 0, f = !0) : 0 > c.x && Aa(k.x, l.x, l.w) && (a.x = l.w - a.box.x - 1, c.x = 0, f = !0));
              k.w >= l.x + n && k.x <= l.w - n && (0 < c.y ? Aa(k.h, l.y, l.h) && (a.y = l.y - (a.h + a.box.h + a.box.y) + 1, c.y = 0, g = !0) : 0 > c.y && Aa(k.y, l.y, l.h) && (a.y = l.h - a.box.y - 1, c.y = 0, g = !0));
              d && d(a, u, f, g)
          }
      a.move(c)
  };
  this.vector.moveCollisionAngle = function(a, b, c, d, h, f, g) {
      var u = e();
      h = math.a2r(OOP.isDef(h) ? h : a.angle);
      u.x = c * Math.cos(h);
      u.y = c * Math.sin(h);
      c = 0;
      h = b.length;
      for (var k; c < h; c += 1)
          if (k = b[c], !f || k.isInCamera())
              if (!g ||
                  !a.getDistanceC(k.getPositionC())) {
                  var l = k.getStaticBox();
                  if (a.isIntersect(k)) {
                      var m = a.getStaticBox(),
                          p = Math.abs(u.x),
                          n = Math.abs(u.y);
                      m.x + m.w > l.x + 10 + p && m.x < l.x + l.w - 10 - p && (0 < u.y && m.y + m.h < l.y + l.h / 2 + n ? u.y = 0 : 0 > u.y && m.y > l.y + l.h - l.h / 2 - n && (u.y = 0));
                      m.y + m.h > l.y + 10 + n && m.y < l.y + l.h - 10 - n && (0 < u.x && m.x + m.w < l.x + l.w / 2 + p ? u.x = 0 : 0 > u.x && m.x > l.x + l.w - l.w / 2 - p && (u.x = 0));
                      d && d(a, k)
                  }
              }
      a.move(u);
      return u
  };
  var Mb = {},
      nb = function() {
          var a = (new Date).getTime();
          Mb[a] && (a = nb());
          Mb[a] = !0;
          return a
      },
      G = function(a) {
          return Math.PI / 180 * a
      },
      ba = function(a, b, c) {
          var d = Math.floor(Math.random() * (b - a + 1) + a);
          return c && 0 == d ? ba(a, b, c) : d
      },
      ob = function(a) {
          return 0 > a ? -1 : 1
      };
  this.math.limit = function(a, b) {
      var c = ob(a);
      a = Math.abs(a);
      b = Math.abs(b);
      return a < b ? a * c : b * c
  };
  this.math.sign = ob;
  this.math.a2r = G;
  this.math.random = ba;
  this.math.toInt = function(a) {
      return a >> 0
  };
  this.math.uid = nb;
  this.math.toZiro = function(a, b) {
      if (0 == a) return 0;
      var c = ob(a);
      b = Math.abs(b);
      a = Math.abs(a);
      return 0 < a && (a -= b, a < b) ? 0 : a * c
  };
  var Nb = function(a, b) {
          return a ? a : b ? b : !1
      },
      pb = [],
      nc = function(a,
          b) {
          var c;
          this.canvas = c = k.document.createElement("canvas");
          var d = c.style,
              h = q.style;
          d.position = wa;
          d.top = h.top;
          d.left = h.left;
          c.width = q.width;
          c.height = q.height;
          d.width = h.width;
          d.height = h.height;
          d.zIndex = h.zIndex + a;
          b && (d.opacity = Nb(b.alpha, 1), d.backgroundColor = Nb(b.backgroundColor, "transparent"));
          n.attach(c);
          (this.context = c.getContext("2d")).textBaseline = t.textBaseline;
          this.isAutoClear = !0;
          this.clear = function() {
              this.context.clearRect(0, 0, m, p)
          };
          this.on = function(a) {
              g = this.context;
              this.isAutoClear && this.clear();
              a(this);
              g = Ob
          };
          this.setVisible = function(a) {
              this.canvas.style = a ? "block" : "none"
          };
          pb.push(this)
      },
      ja = function() {
          w(pb, function(a) {
              a.canvas.width = m;
              a.canvas.height = p;
              a.canvas.style.width = q.style.width;
              a.canvas.style.height = q.style.height;
              a.context.textBaseline = t.textBaseline
          })
      },
      oc = function() {
          w(pb, function(a) {
              a.canvas.style.left = q.style.left;
              a.canvas.style.top = q.style.top
          })
      };
  this.layers.newLayer = function(a, b) {
      return new nc(a, b)
  };
  var Pb = 0,
      n = {
          loaded: !1,
          events: {
              onload: [],
              preLoop: [],
              postLoop: [],
              entryLoop: [],
              exitLoop: [],
              gameBlur: [],
              gameFocus: [],
              gameResize: [],
              gameStop: [],
              gameStart: []
          },
          addEvent: function(a, b, c) {
              "onload" === a && n.loaded ? c() : n.events[a].push({
                  id: b,
                  func: c
              })
          },
          delEvent: function(a, b) {
              w(n.events[a], function(a, d, h) {
                  a.id === b && h.splice(d, 1)
              })
          },
          runEvent: function(a) {
              w(n.events[a], function(a) {
                  "function" === typeof a.func && a.func()
              })
          },
          attach: function(a) {
              var b = function() {
                  k.document.body.appendChild(a)
              };
              n.loaded ? b() : n.addEvent("onload", "attachElement_PointJS" + (Pb += 1), b)
          },
          remove: function(a) {
              var b = function() {
                  k.document.body.removeChild(a)
              };
              n.loaded ? b() : n.addEvent("onload", "attachElement_PointJS" + (Pb += 1), b)
          },
          getWH: function() {
              return {
                  w: parseInt(k.innerWidth || k.document.body.clientWidth),
                  h: parseInt(k.innerHeight || k.document.body.clientHeight)
              }
          }
      };
  this.system.delEvent = function(a, b) {
      n.delEvent(a, b)
  };
  this.system.addEvent = function(a, b, c) {
      n.addEvent(a, b, c)
  };
  this.system.removeDOM = function(a) {
      n.remove(a)
  };
  this.system.attachDOM = function(a) {
      n.attach(a)
  };
  this.system.newDOM = function(a, b) {
      var c = k.document.createElement(a);
      c.style.position = wa;
      c.style.left =
          0;
      c.style.top = 0;
      c.style.zIndex = r.style.zIndex + 1;
      if (b) {
          var d = function(a) {
              a.stopPropagation()
          };
          c.addEventListener("touchstart", d, !1);
          c.addEventListener("touchend", d, !1);
          c.addEventListener("touchmove", d, !1);
          c.addEventListener("mousedown", d, !1);
          c.addEventListener("mousepress", d, !1);
          c.addEventListener("mouseup", d, !1);
          c.addEventListener("mousemove", d, !1);
          c.addEventListener("keypress", d, !1);
          c.addEventListener("keydown", d, !1);
          c.addEventListener("keyup", d, !1);
          c.addEventListener("click", d, !1);
          c.addEventListener("wheel",
              d, !1);
          c.addEventListener("mousewheel", d, !1);
          c.addEventListener("contextmenu", d, !1);
          c.addEventListener("selectstart", d, !1);
          c.addEventListener("dragstart", d, !1);
          c.addEventListener("DOMMouseScroll", d, !1)
      }
      n.attach(c);
      return c
  };
  var g = null,
      Ob = null,
      Ba = e(Hb, Ib);
  var q = k.document.createElement("canvas");
  Ob = g = q.getContext("2d");
  g.textBaseline = t.textBaseline;
  q.crossOrigin = "anonymous";
  q.width = parseInt(Ka);
  q.height = parseInt(La);
  q.style.position = wa;
  F ? (q.style.left = Ba.x + "px", q.style.top = Ba.y + "px", n.addEvent("gameResize",
      "initedCanvasResize",
      function() {
          var a = Jb(F);
          A.system.setOffset(a.x, a.y);
          A.system.resize(F.offsetWidth, F.offsetHeight)
      })) : (q.style.left = 0, q.style.top = 0);
  q.style.zIndex = lb;
  q.id = "PointJS-canvas_0";
  if ("object" === typeof kb)
      for (var qb in kb) qb.match(/margin|padding|position/) || (q.style[qb] = kb[qb]);
  this.system.setOffset = function(a, b) {
      r.style.left = q.style.left = a + "px";
      r.style.top = q.style.top = b + "px";
      Ba = {
          x: a,
          y: b
      };
      oc()
  };
  var r = k.document.createElement("div");
  (function() {
      var a = r.style;
      a.position = wa;
      a.left = q.style.left;
      a.top = q.style.top;
      a.width = q.width + "px";
      a.height = q.height + "px";
      a.zIndex = lb + 100
  })();
  n.attach(r);
  n.attach(q);
  this.system.setStyle = function(a) {
      if ("object" === typeof a)
          for (var b in a) q.style[b] = a[b]
  };
  this.system.getCanvas = function() {
      return q
  };
  this.system.getContext = function() {
      return g
  };
  this.system.setContext = function(a) {
      a && (g = a)
  };
  this.system.resize = function(a, b) {
      m = a || ha;
      p = b || ia;
      M = m / 2;
      N = p / 2;
      q.width = m;
      q.height = p;
      r.style.width = m + "px";
      r.style.height = p + "px";
      ja()
  };
  this.system.initFullPage = function() {
      F || (n.addEvent("gameResize",
          "PointJS_resizeGame",
          function() {
              m = n.getWH().w;
              p = n.getWH().h;
              M = m / 2;
              N = p / 2;
              q.width = m;
              q.height = p;
              g.textBaseline = t.textBaseline;
              r.style.width = m + "px";
              r.style.height = p + "px";
              ja()
          }), n.runEvent("gameResize", "PointJS_resizeGame"))
  };
  var T = !1,
      pc = function() {
          T || (this.requestFullscreen ? (this.requestFullscreen(), T = !0) : this.mozRequestFullScreen ? (this.mozRequestFullScreen(), T = !0) : this.webkitRequestFullscreen && (this.webkitRequestFullscreen(), T = !0), m = n.getWH().w, p = n.getWH().h, M = m / 2, N = p / 2, q.width = m, q.height = p, r.style.width =
              m + "px", r.style.height = p + "px", ja())
      },
      rb = function(a) {
          T = Qb(k.document.fullscreenElement || k.document.mozFullScreenElement || k.document.webkitFullscreenElement)
      };
  k.document.addEventListener("webkitfullscreenchange", rb);
  k.document.addEventListener("mozfullscreenchange", rb);
  k.document.addEventListener("fullscreenchange", rb);
  this.system.initFullScreen = function() {
      F || T || (k.document.documentElement.onclick = pc, Ca || (n.addEvent("gameResize", "PointJS_initFullScreen", function() {
          m = n.getWH().w;
          p = n.getWH().h;
          M = m / 2;
          N =
              p / 2;
          q.width = m;
          q.height = p;
          g.textBaseline = t.textBaseline;
          r.style.width = m + "px";
          r.style.height = p + "px";
          ja()
      }), n.runEvent("gameResize", "PointJS_initFullScreen")))
  };
  this.system.exitFullScreen = function() {
      T && (n.delEvent("gameResize", "PointJS_initFullScreen"), k.document.exitFullscreen ? (k.document.exitFullscreen(), T = !1) : k.document.mozCancelFullScreen ? (k.document.mozCancelFullScreen(), T = !1) : k.document.webkitExitFullscreen && (k.document.webkitExitFullscreen(), T = !1), m = ha, p = ia, M = m / 2, N = p / 2, q.width = m, q.height = p, r.style.width =
          m + "px", r.style.height = p + "px", ja(), k.document.documentElement.onclick = function() {})
  };
  this.system.isFullScreen = function() {
      return T
  };
  this.system.exitFullPage = function() {
      n.delEvent("gameResize", "PointJS_resizeGame");
      m = ha;
      p = ia;
      M = m / 2;
      N = p / 2;
      q.width = m;
      q.height = p;
      r.style.width = m + "px";
      r.style.height = p + "px";
      ja()
  };
  var Oa = !1,
      Ca = !1,
      Rb = ha,
      Sb = ia,
      Tb = !1;
  this.system.initFullScale = function(a) {
      F || Ca || (a && (Tb = !0), n.addEvent("gameResize", "PointJS_initFullScale", function() {
          var a = Rb,
              c = Sb,
              d = n.getWH();
          Tb ? (a = d.w, c = d.h) : d.w <
              d.h ? (c = d.w / m, a = d.w, c *= p) : d.h < d.w && (a = d.h / p, c = d.h, a *= m);
          Rb = a;
          Sb = c;
          Oa = {
              w: a / m,
              h: c / p
          };
          q.style.width = a + "px";
          q.style.height = c + "px";
          r.style.width = a + "px";
          r.style.height = c + "px";
          ja()
      }), n.runEvent("gameResize", "PointJS_initFullScale"), Ca = !0)
  };
  this.system.exitFullScale = function() {
      Ca && (Ca = !1, n.delEvent("gameResize", "PointJS_initFullScale"), q.style.width = ha + "px", q.style.height = ia + "px", r.style.width = ha + "px", r.style.height = ia + "px")
  };
  this.system.getWH = function() {
      return n.getWH()
  };
  var sb = !1,
      Pa = {
          LEFT: 37,
          RIGHT: 39,
          UP: 38,
          DOWN: 40,
          SPACE: 32,
          CTRL: 17,
          SHIFT: 16,
          ALT: 18,
          ESC: 27,
          ENTER: 13,
          MINUS: 189,
          PLUS: 187,
          CAPS_LOCK: 20,
          BACKSPACE: 8,
          TAB: 9,
          DELETE: 46,
          Q: 81,
          W: 87,
          E: 69,
          R: 82,
          T: 84,
          Y: 89,
          U: 85,
          I: 73,
          O: 79,
          P: 80,
          A: 65,
          S: 83,
          D: 68,
          F: 70,
          G: 71,
          H: 72,
          J: 74,
          K: 75,
          L: 76,
          Z: 90,
          X: 88,
          V: 86,
          B: 66,
          N: 78,
          M: 77,
          0: 48,
          1: 49,
          2: 50,
          3: 51,
          4: 52,
          5: 53,
          6: 54,
          7: 55,
          8: 56,
          C: 67,
          9: 57,
          F1: 112,
          F2: 113,
          F3: 114,
          F4: 115,
          F5: 116,
          F6: 117,
          F7: 118,
          F8: 119,
          F9: 120,
          F10: 121,
          F11: 122,
          F12: 123
      },
      sa = {
          37: "LEFT",
          39: "RIGHT",
          38: "UP",
          40: "DOWN",
          32: "SPACE",
          17: "CTRL",
          16: "SHIFT",
          18: "ALT",
          27: "ESC",
          13: "ENTER",
          189: "MINUS",
          187: "PLUS",
          20: "CAPS_LOCK",
          8: "BACKSPACE",
          9: "TAB",
          46: "DELETE",
          81: "Q",
          87: "W",
          69: "E",
          82: "R",
          84: "T",
          89: "Y",
          85: "U",
          73: "I",
          79: "O",
          80: "P",
          65: "A",
          83: "S",
          68: "D",
          70: "F",
          71: "G",
          72: "H",
          74: "J",
          75: "K",
          76: "L",
          90: "Z",
          88: "X",
          86: "V",
          66: "B",
          78: "N",
          77: "M",
          48: "0",
          49: "1",
          50: "2",
          51: "3",
          52: "4",
          53: "5",
          54: "6",
          55: "7",
          56: "8",
          67: "C",
          57: "9",
          112: "F1",
          113: "F2",
          114: "F3",
          115: "F4",
          116: "F5",
          117: "F6",
          118: "F7",
          119: "F8",
          120: "F9",
          121: "F10",
          122: "F11",
          123: "F12"
      },
      qc = {
          8: !0,
          9: !0,
          13: !0,
          18: !0,
          16: !0,
          17: !0,
          27: !0,
          112: !0,
          113: !0,
          114: !0,
          115: !0,
          116: !0,
          117: !0,
          118: !0,
          119: !0,
          120: !0,
          121: !0,
          122: !0,
          123: !0
      };
  this.keyControl.getKeyList = function() {
      var a, b = [];
      for (a in Pa) b.push(a);
      return b
  };
  var U = {},
      Da = {},
      ka = {},
      Ea = !1,
      Fa = !1,
      Qa = !1,
      Ra = !1,
      rc = function(a) {
          D(ka, function(a, c, d) {
              1 == a && (d[c] = 2)
          })
      };
  this.keyControl.getCountKeysDown = function() {
      var a = 0;
      D(U, function(b, c) {
          b && a++
      });
      return a
  };
  this.keyControl.getAllKeysDown = function() {
      var a = [];
      D(U, function(b, c) {
          b && a.push(sa[c])
      });
      return a
  };
  this.keyControl.getLastKeyPress = function() {
      return Ra ? sa[Ra] : !1
  };
  this.keyControl.isDown =
      function(a) {
          return 1 == U[Pa[a]]
      };
  this.keyControl.isUp = function(a) {
      return 1 == Da[Pa[a]]
  };
  this.keyControl.isPress = function(a) {
      return 1 == ka[Pa[a]]
  };
  this.keyControl.getInputChar = function() {
      return Ea
  };
  this.keyControl.getInputKey = function() {
      return sa[Fa]
  };
  this.keyControl.setInputMode = function(a) {
      Qa = a
  };
  this.keyControl.isInputMode = function() {
      return Qa
  };
  this.keyControl.exitKeyControl = function() {
      k.onkeydown = function() {};
      k.onkeypress = function() {};
      k.onkeyup = function() {};
      C.clear("key:down");
      C.clear("key:press");
      C.clear("key:up");
      n.delEvent("postLoop", "PointJS_clearAllKeyUp");
      n.delEvent("preLoop", "PointJS_KeyDownEvent");
      U = {};
      Da = {};
      ka = {};
      sb = Qa = Fa = Ea = !1
  };
  this.keyControl.initControl = this.keyControl.initKeyControl = function() {
      if (sb) return this;
      sb = !0;
      k.onkeydown = function(a) {
          if (Qa) return Fa = a.keyCode, qc[a.keyCode] ? (a.preventDefault(), !1) : !0;
          a.preventDefault();
          2 != ka[a.keyCode] && (ka[a.keyCode] = 1, Ra = a.keyCode, C.run("key:press", sa[a.keyCode]));
          U[a.keyCode] = !0;
          return !1
      };
      k.onkeypress = function(a) {
          var b = !1;
          0 != a.which &&
              0 != a.charCode && 32 <= a.which && (b = String.fromCharCode(a.which));
          Ea = b
      };
      k.onkeyup = function(a) {
          a.preventDefault();
          1 == U[a.keyCode] && (Da[a.keyCode] = !0);
          U[a.keyCode] = !1;
          C.run("key:up", sa[a.keyCode]);
          delete ka[a.keyCode];
          delete U[a.keyCode];
          return !1
      };
      n.addEvent("postLoop", "PointJS_clearAllKeyUp", function() {
          Da = {};
          rc();
          Ra = Fa = Ea = !1
      });
      n.addEvent("preLoop", "PointJS_KeyDownEvent", function() {
          C.isEvent("key:down") && D(U, function(a, b) {
              a && C.run("key:down", sa[b])
          })
      });
      return this
  };
  var tb = !1,
      y = e(0, 0),
      Sa = e(0, 0);
  e(0, 0);
  var Ga = !0,
      Ta = "",
      Ua = !1,
      la = e(0, 0),
      Va = !1,
      ub = {
          LEFT: 1,
          RIGHT: 3,
          MIDDLE: 2
      },
      vb = {
          1: "LEFT",
          3: "RIGHT",
          2: "MIDDLE"
      },
      Wa = !1,
      Xa = {},
      Ya = {},
      Ha = {},
      ta = 0,
      Ub = function() {
          Xa = {};
          Ya = {};
          Ha = {};
          ta = 0;
          Va = !1
      },
      sc = function() {
          D(Ha, function(a, b, c) {
              1 == a && (c[b] = 2)
          })
      },
      Za = function(a) {
          var b = 0,
              c = 0;
          a && (b = f.x, c = f.y);
          return e(b + y.x, c + y.y)
      };
  this.mouseControl.getPosition = function() {
      return Za(1)
  };
  this.mouseControl.getPositionS = function() {
      return Za()
  };
  this.mouseControl.setCursorImage = function(a) {
      a = "url('" + a + "'), auto";
      if (Ta !== a) return Ta = a, k.document.body.style.cursor =
          Ta
  };
  this.mouseControl.setVisible = function(a) {
      !Ga && !a || Ga && a || (Ga = 1 == a, k.document.body.style.cursor = Ga ? Ta : "none")
  };
  this.mouseControl.isVisible = function() {
      return Ga
  };
  this.mouseControl.isDown = function(a) {
      return Xa[ub[a]]
  };
  this.mouseControl.isUp = function(a) {
      return Ya[ub[a]]
  };
  this.mouseControl.isPress = function(a) {
      return 1 == Ha[ub[a]]
  };
  this.mouseControl.isMove = function() {
      return Va
  };
  this.mouseControl.isInStatic = function(a) {
      var b = Za(1);
      return b.x >= a.x && b.x <= a.x + a.w && b.y >= a.y && b.y <= a.y + a.h
  };
  this.mouseControl.isInDynamic =
      function(a) {
          return ra(Za(1), a)
      };
  this.mouseControl.isInObject = function(a) {
      return a.visible ? a.angle ? this.isInDynamic(a.getDynamicBox()) : this.isInStatic(a.getStaticBox()) : !1
  };
  this.mouseControl.isWheel = function(a) {
      return "UP" === a && 0 < ta || "DOWN" === a && 0 > ta
  };
  var Vb = function(a) {
          a.preventDefault();
          ta = a.wheelDelta ? a.wheelDelta : -a.detail;
          C.run("mouse:wheel", 0 > ta ? "DOWN" : "UP");
          return !1
      },
      $a = !1,
      Wb = function() {
          $a && (Ua = v(k.document.pointerLockElement) || v(k.document.mozPointerLockElement) ? !0 : !1)
      };
  this.mouseControl.initMouseLock =
      function() {
          n.addEvent("onload", "initPointerLock", function() {
              $a = r.requestPointerLock || r.mozRequestPointerLock || !1;
              k.document.exitPointerLock = k.document.exitPointerLock || k.document.mozExitPointerLock || !1;
              "onpointerlockchange" in k.document ? k.document.addEventListener("pointerlockchange", Wb, !1) : "onmozpointerlockchange" in k.document && k.document.addEventListener("mozpointerlockchange", Wb, !1);
              if (!$a) return Y("error in initMouseLock : not supported");
              Ua || (r.onclick = $a)
          })
      };
  this.mouseControl.exitMouseLock =
      function() {
          k.document.exitPointerLock();
          r.onclick = function() {};
          la = e(0, 0)
      };
  this.mouseControl.unlockMouse = function() {
      la = e(0, 0);
      k.document.exitPointerLock()
  };
  this.mouseControl.isMouseLock = function() {
      return Ua
  };
  this.mouseControl.getSpeed = function() {
      return e(la.x, la.y)
  };
  this.mouseControl.isPeekStatic = function(a, b) {
      return this.isPress(a) ? this.isInStatic(b) : !1
  };
  this.mouseControl.isPeekDynamic = function(a, b) {
      return this.isPress(a) ? this.isInDynamic(b) : !1
  };
  this.mouseControl.isPeekObject = function(a, b) {
      return this.isPress(a) &&
          b.visible ? this.isInDynamic(b.getDynamicBox()) : !1
  };
  this.mouseControl.initControl = this.mouseControl.initMouseControl = function() {
      if (tb) return this;
      tb = !0;
      r.onmousemove = function(a) {
          a.preventDefault();
          a.stopPropagation();
          if (Ua) {
              var b = a.movementY || a.mozMovementY || 0;
              y.x += a.movementX || a.mozMovementX || 0;
              y.y += b
          } else y.x = a.pageX - Ba.x, y.y = a.pageY - Ba.y, Oa && (y.x /= Oa.w, y.y /= Oa.h);
          y.x /= 1;
          y.y /= 1;
          la.x = y.x - Sa.x;
          la.y = y.y - Sa.y;
          Sa.x = y.x;
          Sa.y = y.y;
          C.run("mouse:move");
          Va = !0;
          return !1
      };
      r.onmousedown = function(a) {
          a.preventDefault();
          a.stopPropagation();
          !a.which && a.button && (a.button & 1 ? a.which = 1 : a.button & 4 ? a.which = 2 : a.button & 2 && (a.which = 3));
          C.run("mouse:press", vb[a.which]);
          Wa = vb[a.which];
          Xa[a.which] = !0;
          Ha[a.which] = 1
      };
      r.onmouseup = function(a) {
          a.preventDefault();
          a.stopPropagation();
          !a.which && a.button && (a.button & 1 ? a.which = 1 : a.button & 4 ? a.which = 2 : a.button & 2 && (a.which = 3));
          C.run("mouse:up", vb[a.which]);
          Wa = !1;
          Xa[a.which] = !1;
          Ya[a.which] = !0;
          delete Ha[a.which]
      };
      r.oncontextmenu = r.onselectstart = r.ondragstart = function() {
          return !1
      };
      r.onmousewheel =
          Vb;
      r.addEventListener("DOMMouseScroll", Vb, !1);
      n.addEvent("preLoop", "PointJS_MouseEventDown", function() {
          Wa && C.run("mouse:down", Wa)
      });
      n.addEvent("postLoop", "PointJS_clearAllMouseUp", function() {
          Ya = {};
          sc();
          ta = 0;
          Va = !1;
          la = e(0, 0)
      });
      return this
  };
  this.mouseControl.exitMouseControl = function() {
      C.clear("mouse:press");
      C.clear("mouse:down");
      C.clear("mouse:up");
      C.clear("mouse:move");
      C.clear("mouse:wheel");
      r.onmousemove = r.onmousedown = r.onmouseup = r.oncontextmenu = r.onselectstart = r.ondragstart = r.onmousewheel = function() {};
      n.delEvent("postLoop", "PointJS_clearAllMouseUp");
      n.delEvent("preLoop", "PointJS_MouseEventDown");
      Ub();
      tb = !1
  };
  e(0, 0);
  e(0, 0);
  e(0, 0);
  this.touchControl.isTouchSupported = function() {
      console.log("\u0424\u0443\u043d\u043a\u0446\u0438\u044f touchControl.isTouchSupported \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u0432 \u043f\u043e\u043b\u043d\u043e\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u0438\u0433\u0440\u043e\u0432\u043e\u0433\u043e \u0434\u0432\u0438\u0436\u043a\u0430 PointJS \n\u041e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u044c\u0441\u044f \u0441\u043e \u0432\u0441\u0435\u043c\u0438 \u0432\u0435\u0440\u0441\u0438\u044f\u043c\u0438 \u0438 \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0441\u0442\u0438 \n\u043f\u043e\u043b\u043d\u0443\u044e \u0432\u0435\u0440\u0441\u0438\u044e \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u0434\u0432\u0438\u0436\u043a\u0430: https://mult-uroki.ru/pointjs/")
  };
  this.touchControl.isMobileDevice = function() {
      console.log("\u0424\u0443\u043d\u043a\u0446\u0438\u044f touchControl.isMobileDevice \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u0432 \u043f\u043e\u043b\u043d\u043e\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u0438\u0433\u0440\u043e\u0432\u043e\u0433\u043e \u0434\u0432\u0438\u0436\u043a\u0430 PointJS \n\u041e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u044c\u0441\u044f \u0441\u043e \u0432\u0441\u0435\u043c\u0438 \u0432\u0435\u0440\u0441\u0438\u044f\u043c\u0438 \u0438 \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0441\u0442\u0438 \n\u043f\u043e\u043b\u043d\u0443\u044e \u0432\u0435\u0440\u0441\u0438\u044e \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u0434\u0432\u0438\u0436\u043a\u0430: https://mult-uroki.ru/pointjs/")
  };
  this.touchControl.getFixPositionS = function() {
      console.log("\u0424\u0443\u043d\u043a\u0446\u0438\u044f touchControl.getFixPositionS \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u0432 \u043f\u043e\u043b\u043d\u043e\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u0438\u0433\u0440\u043e\u0432\u043e\u0433\u043e \u0434\u0432\u0438\u0436\u043a\u0430 PointJS \n\u041e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u044c\u0441\u044f \u0441\u043e \u0432\u0441\u0435\u043c\u0438 \u0432\u0435\u0440\u0441\u0438\u044f\u043c\u0438 \u0438 \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0441\u0442\u0438 \n\u043f\u043e\u043b\u043d\u0443\u044e \u0432\u0435\u0440\u0441\u0438\u044e \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u0434\u0432\u0438\u0436\u043a\u0430: https://mult-uroki.ru/pointjs/")
  };
  this.touchControl.getFixPosition = function() {
      console.log("\u0424\u0443\u043d\u043a\u0446\u0438\u044f touchControl.getFixPosition \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u0432 \u043f\u043e\u043b\u043d\u043e\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u0438\u0433\u0440\u043e\u0432\u043e\u0433\u043e \u0434\u0432\u0438\u0436\u043a\u0430 PointJS \n\u041e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u044c\u0441\u044f \u0441\u043e \u0432\u0441\u0435\u043c\u0438 \u0432\u0435\u0440\u0441\u0438\u044f\u043c\u0438 \u0438 \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0441\u0442\u0438 \n\u043f\u043e\u043b\u043d\u0443\u044e \u0432\u0435\u0440\u0441\u0438\u044e \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u0434\u0432\u0438\u0436\u043a\u0430: https://mult-uroki.ru/pointjs/")
  };
  this.touchControl.getRun = function() {
      console.log("\u0424\u0443\u043d\u043a\u0446\u0438\u044f touchControl.getRun \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u0432 \u043f\u043e\u043b\u043d\u043e\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u0438\u0433\u0440\u043e\u0432\u043e\u0433\u043e \u0434\u0432\u0438\u0436\u043a\u0430 PointJS \n\u041e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u044c\u0441\u044f \u0441\u043e \u0432\u0441\u0435\u043c\u0438 \u0432\u0435\u0440\u0441\u0438\u044f\u043c\u0438 \u0438 \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0441\u0442\u0438 \n\u043f\u043e\u043b\u043d\u0443\u044e \u0432\u0435\u0440\u0441\u0438\u044e \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u0434\u0432\u0438\u0436\u043a\u0430: https://mult-uroki.ru/pointjs/")
  };
  this.touchControl.getVector = function() {
      console.log("\u0424\u0443\u043d\u043a\u0446\u0438\u044f touchControl.getVector \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u0432 \u043f\u043e\u043b\u043d\u043e\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u0438\u0433\u0440\u043e\u0432\u043e\u0433\u043e \u0434\u0432\u0438\u0436\u043a\u0430 PointJS \n\u041e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u044c\u0441\u044f \u0441\u043e \u0432\u0441\u0435\u043c\u0438 \u0432\u0435\u0440\u0441\u0438\u044f\u043c\u0438 \u0438 \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0441\u0442\u0438 \n\u043f\u043e\u043b\u043d\u0443\u044e \u0432\u0435\u0440\u0441\u0438\u044e \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u0434\u0432\u0438\u0436\u043a\u0430: https://mult-uroki.ru/pointjs/")
  };
  this.touchControl.getSpeed = function() {
      console.log("\u0424\u0443\u043d\u043a\u0446\u0438\u044f touchControl.getSpeed \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u0432 \u043f\u043e\u043b\u043d\u043e\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u0438\u0433\u0440\u043e\u0432\u043e\u0433\u043e \u0434\u0432\u0438\u0436\u043a\u0430 PointJS \n\u041e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u044c\u0441\u044f \u0441\u043e \u0432\u0441\u0435\u043c\u0438 \u0432\u0435\u0440\u0441\u0438\u044f\u043c\u0438 \u0438 \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0441\u0442\u0438 \n\u043f\u043e\u043b\u043d\u0443\u044e \u0432\u0435\u0440\u0441\u0438\u044e \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u0434\u0432\u0438\u0436\u043a\u0430: https://mult-uroki.ru/pointjs/")
  };
  this.touchControl.isDown = function() {
      console.log("\u0424\u0443\u043d\u043a\u0446\u0438\u044f touchControl.isDown \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u0432 \u043f\u043e\u043b\u043d\u043e\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u0438\u0433\u0440\u043e\u0432\u043e\u0433\u043e \u0434\u0432\u0438\u0436\u043a\u0430 PointJS \n\u041e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u044c\u0441\u044f \u0441\u043e \u0432\u0441\u0435\u043c\u0438 \u0432\u0435\u0440\u0441\u0438\u044f\u043c\u0438 \u0438 \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0441\u0442\u0438 \n\u043f\u043e\u043b\u043d\u0443\u044e \u0432\u0435\u0440\u0441\u0438\u044e \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u0434\u0432\u0438\u0436\u043a\u0430: https://mult-uroki.ru/pointjs/")
  };
  this.touchControl.isPress = function() {
      console.log("\u0424\u0443\u043d\u043a\u0446\u0438\u044f touchControl.isPress \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u0432 \u043f\u043e\u043b\u043d\u043e\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u0438\u0433\u0440\u043e\u0432\u043e\u0433\u043e \u0434\u0432\u0438\u0436\u043a\u0430 PointJS \n\u041e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u044c\u0441\u044f \u0441\u043e \u0432\u0441\u0435\u043c\u0438 \u0432\u0435\u0440\u0441\u0438\u044f\u043c\u0438 \u0438 \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0441\u0442\u0438 \n\u043f\u043e\u043b\u043d\u0443\u044e \u0432\u0435\u0440\u0441\u0438\u044e \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u0434\u0432\u0438\u0436\u043a\u0430: https://mult-uroki.ru/pointjs/")
  };
  this.touchControl.isUp = function() {
      console.log("\u0424\u0443\u043d\u043a\u0446\u0438\u044f touchControl.isUp \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u0432 \u043f\u043e\u043b\u043d\u043e\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u0438\u0433\u0440\u043e\u0432\u043e\u0433\u043e \u0434\u0432\u0438\u0436\u043a\u0430 PointJS \n\u041e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u044c\u0441\u044f \u0441\u043e \u0432\u0441\u0435\u043c\u0438 \u0432\u0435\u0440\u0441\u0438\u044f\u043c\u0438 \u0438 \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0441\u0442\u0438 \n\u043f\u043e\u043b\u043d\u0443\u044e \u0432\u0435\u0440\u0441\u0438\u044e \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u0434\u0432\u0438\u0436\u043a\u0430: https://mult-uroki.ru/pointjs/")
  };
  this.touchControl.getPosition = function() {
      console.log("\u0424\u0443\u043d\u043a\u0446\u0438\u044f touchControl.getPosition \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u0432 \u043f\u043e\u043b\u043d\u043e\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u0438\u0433\u0440\u043e\u0432\u043e\u0433\u043e \u0434\u0432\u0438\u0436\u043a\u0430 PointJS \n\u041e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u044c\u0441\u044f \u0441\u043e \u0432\u0441\u0435\u043c\u0438 \u0432\u0435\u0440\u0441\u0438\u044f\u043c\u0438 \u0438 \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0441\u0442\u0438 \n\u043f\u043e\u043b\u043d\u0443\u044e \u0432\u0435\u0440\u0441\u0438\u044e \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u0434\u0432\u0438\u0436\u043a\u0430: https://mult-uroki.ru/pointjs/")
  };
  this.touchControl.getPositionS = function() {
      console.log("\u0424\u0443\u043d\u043a\u0446\u0438\u044f touchControl.getPositionS \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u0432 \u043f\u043e\u043b\u043d\u043e\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u0438\u0433\u0440\u043e\u0432\u043e\u0433\u043e \u0434\u0432\u0438\u0436\u043a\u0430 PointJS \n\u041e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u044c\u0441\u044f \u0441\u043e \u0432\u0441\u0435\u043c\u0438 \u0432\u0435\u0440\u0441\u0438\u044f\u043c\u0438 \u0438 \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0441\u0442\u0438 \n\u043f\u043e\u043b\u043d\u0443\u044e \u0432\u0435\u0440\u0441\u0438\u044e \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u0434\u0432\u0438\u0436\u043a\u0430: https://mult-uroki.ru/pointjs/")
  };
  this.touchControl.isPeekStatic = function(a) {
      console.log("\u0424\u0443\u043d\u043a\u0446\u0438\u044f touchControl.isPeekStatic \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u0432 \u043f\u043e\u043b\u043d\u043e\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u0438\u0433\u0440\u043e\u0432\u043e\u0433\u043e \u0434\u0432\u0438\u0436\u043a\u0430 PointJS \n\u041e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u044c\u0441\u044f \u0441\u043e \u0432\u0441\u0435\u043c\u0438 \u0432\u0435\u0440\u0441\u0438\u044f\u043c\u0438 \u0438 \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0441\u0442\u0438 \n\u043f\u043e\u043b\u043d\u0443\u044e \u0432\u0435\u0440\u0441\u0438\u044e \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u0434\u0432\u0438\u0436\u043a\u0430: https://mult-uroki.ru/pointjs/")
  };
  this.touchControl.isPeekDynamic = function(a) {
      console.log("\u0424\u0443\u043d\u043a\u0446\u0438\u044f touchControl.isPeekDynamic \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u0432 \u043f\u043e\u043b\u043d\u043e\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u0438\u0433\u0440\u043e\u0432\u043e\u0433\u043e \u0434\u0432\u0438\u0436\u043a\u0430 PointJS \n\u041e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u044c\u0441\u044f \u0441\u043e \u0432\u0441\u0435\u043c\u0438 \u0432\u0435\u0440\u0441\u0438\u044f\u043c\u0438 \u0438 \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0441\u0442\u0438 \n\u043f\u043e\u043b\u043d\u0443\u044e \u0432\u0435\u0440\u0441\u0438\u044e \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u0434\u0432\u0438\u0436\u043a\u0430: https://mult-uroki.ru/pointjs/")
  };
  this.touchControl.isPeekObject = function(a) {
      console.log("\u0424\u0443\u043d\u043a\u0446\u0438\u044f touchControl.isPeekObject \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u0432 \u043f\u043e\u043b\u043d\u043e\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u0438\u0433\u0440\u043e\u0432\u043e\u0433\u043e \u0434\u0432\u0438\u0436\u043a\u0430 PointJS \n\u041e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u044c\u0441\u044f \u0441\u043e \u0432\u0441\u0435\u043c\u0438 \u0432\u0435\u0440\u0441\u0438\u044f\u043c\u0438 \u0438 \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0441\u0442\u0438 \n\u043f\u043e\u043b\u043d\u0443\u044e \u0432\u0435\u0440\u0441\u0438\u044e \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u0434\u0432\u0438\u0436\u043a\u0430: https://mult-uroki.ru/pointjs/")
  };
  this.touchControl.isInStatic = function(a) {
      console.log("\u0424\u0443\u043d\u043a\u0446\u0438\u044f touchControl.isInStatic \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u0432 \u043f\u043e\u043b\u043d\u043e\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u0438\u0433\u0440\u043e\u0432\u043e\u0433\u043e \u0434\u0432\u0438\u0436\u043a\u0430 PointJS \n\u041e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u044c\u0441\u044f \u0441\u043e \u0432\u0441\u0435\u043c\u0438 \u0432\u0435\u0440\u0441\u0438\u044f\u043c\u0438 \u0438 \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0441\u0442\u0438 \n\u043f\u043e\u043b\u043d\u0443\u044e \u0432\u0435\u0440\u0441\u0438\u044e \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u0434\u0432\u0438\u0436\u043a\u0430: https://mult-uroki.ru/pointjs/")
  };
  this.touchControl.isInDynamic = function(a) {
      console.log("\u0424\u0443\u043d\u043a\u0446\u0438\u044f touchControl.isInDynamic \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u0432 \u043f\u043e\u043b\u043d\u043e\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u0438\u0433\u0440\u043e\u0432\u043e\u0433\u043e \u0434\u0432\u0438\u0436\u043a\u0430 PointJS \n\u041e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u044c\u0441\u044f \u0441\u043e \u0432\u0441\u0435\u043c\u0438 \u0432\u0435\u0440\u0441\u0438\u044f\u043c\u0438 \u0438 \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0441\u0442\u0438 \n\u043f\u043e\u043b\u043d\u0443\u044e \u0432\u0435\u0440\u0441\u0438\u044e \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u0434\u0432\u0438\u0436\u043a\u0430: https://mult-uroki.ru/pointjs/")
  };
  this.touchControl.isInObject = function(a) {
      console.log("\u0424\u0443\u043d\u043a\u0446\u0438\u044f touchControl.isInObject \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u0432 \u043f\u043e\u043b\u043d\u043e\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u0438\u0433\u0440\u043e\u0432\u043e\u0433\u043e \u0434\u0432\u0438\u0436\u043a\u0430 PointJS \n\u041e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u044c\u0441\u044f \u0441\u043e \u0432\u0441\u0435\u043c\u0438 \u0432\u0435\u0440\u0441\u0438\u044f\u043c\u0438 \u0438 \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0441\u0442\u0438 \n\u043f\u043e\u043b\u043d\u0443\u044e \u0432\u0435\u0440\u0441\u0438\u044e \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u0434\u0432\u0438\u0436\u043a\u0430: https://mult-uroki.ru/pointjs/")
  };
  this.touchControl.getTouches = function() {
      console.log("\u0424\u0443\u043d\u043a\u0446\u0438\u044f touchControl.getTouches \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u0432 \u043f\u043e\u043b\u043d\u043e\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u0438\u0433\u0440\u043e\u0432\u043e\u0433\u043e \u0434\u0432\u0438\u0436\u043a\u0430 PointJS \n\u041e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u044c\u0441\u044f \u0441\u043e \u0432\u0441\u0435\u043c\u0438 \u0432\u0435\u0440\u0441\u0438\u044f\u043c\u0438 \u0438 \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0441\u0442\u0438 \n\u043f\u043e\u043b\u043d\u0443\u044e \u0432\u0435\u0440\u0441\u0438\u044e \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u0434\u0432\u0438\u0436\u043a\u0430: https://mult-uroki.ru/pointjs/")
  };
  this.touchControl.initControl = this.touchControl.initTouchControl = function() {
      console.log("\u0424\u0443\u043d\u043a\u0446\u0438\u044f touchControl.initControl \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u0432 \u043f\u043e\u043b\u043d\u043e\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u0438\u0433\u0440\u043e\u0432\u043e\u0433\u043e \u0434\u0432\u0438\u0436\u043a\u0430 PointJS \n\u041e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u044c\u0441\u044f \u0441\u043e \u0432\u0441\u0435\u043c\u0438 \u0432\u0435\u0440\u0441\u0438\u044f\u043c\u0438 \u0438 \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0441\u0442\u0438 \n\u043f\u043e\u043b\u043d\u0443\u044e \u0432\u0435\u0440\u0441\u0438\u044e \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u0434\u0432\u0438\u0436\u043a\u0430: https://mult-uroki.ru/pointjs/")
  };
  this.touchControl.exitTouchControl = function() {
      console.log("\u0424\u0443\u043d\u043a\u0446\u0438\u044f touchControl.exitTouchControl \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u0432 \u043f\u043e\u043b\u043d\u043e\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u0438\u0433\u0440\u043e\u0432\u043e\u0433\u043e \u0434\u0432\u0438\u0436\u043a\u0430 PointJS \n\u041e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u044c\u0441\u044f \u0441\u043e \u0432\u0441\u0435\u043c\u0438 \u0432\u0435\u0440\u0441\u0438\u044f\u043c\u0438 \u0438 \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0441\u0442\u0438 \n\u043f\u043e\u043b\u043d\u0443\u044e \u0432\u0435\u0440\u0441\u0438\u044e \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u0434\u0432\u0438\u0436\u043a\u0430: https://mult-uroki.ru/pointjs/")
  };
  var ab = function(a, b, c, d) {
          return d ? "rgba(" + a + ", " + b + ", " + c + ", " + d + ")" : "rgb(" + a + ", " + b + ", " + c + ")"
      },
      Xb = function(a, b) {
          a = "#" === a[0] ? a.substr(1, 6) : a;
          var c = parseInt(a.substr(0, 2), 16),
              d = parseInt(a.substr(2, 2), 16),
              h = parseInt(a.substr(4, 2), 16);
          return ab(c, d, h, b)
      };
  this.colors.rgb = function(a, b, c) {
      return ab(a, b, c)
  };
  this.colors.rgba = function(a, b, c, d) {
      return ab(a, b, c, d)
  };
  this.colors.hex2rgb = function(a) {
      return Xb(a)
  };
  this.colors.hex2rgba = function(a, b) {
      return Xb(a, b)
  };
  this.colors.randomColor = function(a, b, c) {
      return ab(ba(a,
          b), ba(a, b), ba(a, b), c || 1)
  };
  this.colors.fromImage = function(a, b, c, d, h) {
      var e = {
          img: k.document.createElement("img"),
          color: null
      };
      e.img.onload = function() {
          var a = k.document.createElement("canvas");
          a.width = d ? d : this.width;
          a.height = h ? h : this.height;
          a.getContext("2d").drawImage(this, 0, 0, a.width, a.height);
          e.color = g.createPattern(a, b);
          "function" === typeof c && (e.onload = c, e.onload(), delete e.onload)
      };
      e.img.src = a;
      return e
  };
  var v = function(a) {
          return "undefined" == typeof a || null == a ? !1 : !0
      },
      Qb = function(a) {
          return v(a) && "" !==
              a && 0 !== a ? !0 : !1
      },
      D = function(a, b, c) {
          var d, h;
          for (d in a)
              if ((!c || a.hasOwnProperty(d)) && "undefined" !== typeof a[d] && (h = b(a[d], d, a)) && "break" === h) break
      },
      w = function(a, b) {
          if (a.length)
              for (var c = a.length - 1, d; 0 <= c && ("undefined" === typeof a[c] || !(d = b(a[c], c, a) || !1) || "break" !== d); c--);
      };
  this.OOP.extractArrElement = function(a, b) {
      var c = a[b];
      a.splice(b, 1);
      return c
  };
  this.OOP.extractRandArrElement = function(a) {
      var b = ba(0, a.length - 1),
          c = a[b];
      a.splice(b, 1);
      return c
  };
  this.OOP.drawEach = function(a, b) {
      D(a, function(a) {
          a && a.draw &&
              a.isInCamera() && (a.draw(), b && b(a))
      })
  };
  this.OOP.drawArr = function(a, b) {
      var c;
      var d = 0;
      for (c = a.length; d < c; d += 1) a[d] && a[d].draw && a[d].isInCamera() && (a[d].draw(), b && b(a[d], d))
  };
  this.OOP.getArrInCamera = function(a) {
      var b = [];
      w(a, function(a) {
          a.isInCamera() && b.push(a)
      });
      return b
  };
  this.OOP.getArrOutCamera = function(a) {
      var b = [];
      w(a, function(a) {
          a.isInCamera() || b.push(a)
      });
      return b
  };
  var tc = function(a, b) {
      var c = !1,
          d = nb(),
          h = !1,
          e = new XMLHttpRequest,
          f = function() {
              e.open("GET", a, !0);
              e.send()
          };
      e.onreadystatechange = function() {
          4 ==
              e.readyState && (b(e.responseText), c && (h ? setTimeout(f, h) : f()))
      };
      this.start = function() {
          a = a.match(/\?/) ? a + ("&session_id=" + d) : a + ("?session_id=" + d);
          f();
          c = !0
      };
      this.setSID = function(a) {
          d = a
      };
      this.setTime = function(a) {
          h = a
      };
      this.stop = function() {
          c = !1
      };
      this.isActive = function() {
          return c
      }
  };
  this.OOP.readJSON = function(a, b, c) {
      var d = {},
          h = new XMLHttpRequest;
      h.open("GET", a, !0);
      B.add();
      h.onreadystatechange = function() {
          4 == h.readyState && (d = h.responseText, c || (d = JSON.parse(d)), B.load(), b(d))
      };
      h.send()
  };
  this.OOP.toString = function(a,
      b) {
      var c, d = 0,
          h = "[";
      for (c in a)
          if (a.hasOwnProperty(c)) {
              var e = a[c];
              "number" == typeof e && b && (e = parseInt(e));
              h += (0 < d ? ", " : "") + c + " : " + e;
              d += 1
          }
      return h + "]"
  };
  this.OOP.sendGET = function(a, b, c) {
      var d = new XMLHttpRequest,
          h = "?";
      D(b, function(a, b) {
          h += b + "=" + encodeURIComponent(a) + "&"
      });
      d.open("GET", a + h, !0);
      d.onreadystatechange = function() {
          4 == d.readyState && c(d.responseText)
      };
      d.send()
  };
  this.OOP.sendPOST = function(a, b, c) {
      var d = new XMLHttpRequest,
          h = "";
      D(b, function(a, b) {
          h += b + "=" + encodeURIComponent(a) + "&"
      });
      d.open("POST",
          a, !0);
      d.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      d.onreadystatechange = function() {
          4 == d.readyState && c(d.responseText)
      };
      d.send(h)
  };
  this.OOP.sendPOSTScreen = function(a, b, c) {
      var d = new XMLHttpRequest;
      b = b + "=" + q.toDataURL("image/png");
      d.open("POST", a, !0);
      d.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      d.onreadystatechange = function() {
          4 == d.readyState && c(d.responseText)
      };
      d.send(b)
  };
  this.OOP.isDef = v;
  this.OOP.isSet = Qb;
  this.OOP.forEach = D;
  this.OOP.forInt = function(a,
      b) {
      var c, d;
      for (c = 0; c < a && (!(d = b(c)) || "break" != d); c += 1);
  };
  this.OOP.forXY = function(a, b, c) {
      var d, h, e;
      for (h = 0; h < b; h += 1)
          for (d = 0; d < a && (!(e = c(d, h)) || "break" != e); d += 1);
  };
  this.OOP.forArr = w;
  this.OOP.clearArr = function(a) {
      a.length = 0
  };
  this.OOP.fillArr = function(a, b, c) {
      a.length = 0;
      var d;
      for (d = 0; d < b; d += 1) a.push(c(d, 0 < d ? a[d - 1] : !1));
      return a
  };
  this.OOP.delObject = function(a, b) {
      var c;
      var d = 0;
      for (c = a.length; d < c; d += 1)
          if (a[d] == b) return a.splice(d, 1), !0
  };
  this.OOP.randArrElement = function(a) {
      return a[ba(0, a.length - 1)]
  };
  this.OOP.readJSONSync =
      function(a) {
          var b = new XMLHttpRequest;
          b.open("GET", a, !1);
          b.send();
          a = b.responseText;
          return a = JSON.parse(a)
      };
  this.OOP.sendGETSync = function(a, b) {
      var c = new XMLHttpRequest,
          d = "?";
      D(b, function(a, b) {
          d += b + "=" + encodeURIComponent(a) + "&"
      });
      c.open("GET", a + d, !1);
      c.send();
      return c.responseText
  };
  this.OOP.sendPOSTSync = function(a, b) {
      var c = new XMLHttpRequest,
          d = "";
      D(b, function(a, b) {
          d += b + "=" + encodeURIComponent(a) + "&"
      });
      c.open("POST", a, !1);
      c.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      c.send(d);
      return c.responseText
  };
  this.OOP.newAJAXListener = function(a, b) {
      return new tc(a, b)
  };
  this.OOP.runCode = function(a) {
      (new Function("", a))()
  };
  var H = {};
  this.OOP.includeSync = function(a, b) {
      if (H[a]) H[a].loaded && !b && H[a].code();
      else {
          H[a] = {
              loaded: !1,
              code: function() {
                  console.log(a + " is loading")
              }
          };
          var c = new XMLHttpRequest;
          c.open("GET", a, !1);
          c.send();
          H[a].code = new Function("", c.responseText);
          H[a].loaded = !0;
          H[a].code()
      }
  };
  this.OOP.include = function(a, b, c) {
      if (H[a]) H[a].loaded && !c && H[a].code(), b && b();
      else {
          H[a] = {
              loaded: !1,
              code: function() {
                  console.log(a + " is loading")
              }
          };
          var d = new XMLHttpRequest;
          d.open("GET", a, !0);
          d.onreadystatechange = function() {
              4 === d.readyState && (H[a].code = new Function("", d.responseText), H[a].loaded = !0, H[a].code(), b && b())
          };
          d.send()
      }
  };
  this.OOP.clone = function(a, b) {
      var c = uc(a);
      D(a, function(a, b) {
          -1 === ["id", "type", "anim"].indexOf(b) && (c[b] = a)
      });
      b && (c.onClone = b, c.onClone(c), delete c.onClone);
      return c
  };
  var vc = function() {
      var a = [];
      this.fillFromArr = function(b) {
          a.length = 0;
          w(b, function(b) {
              a.push(b)
          })
      };
      this.fill =
          function(b, c) {
              a.length = 0;
              A.OOP.fillArr(a, b, c)
          };
      this.draw = function(b) {
          for (var c = a.length - 1; 0 <= c; c--) a[c].isInCamera() && (a[c].draw(), b && b(a[c], c))
      };
      this.update = function(b, c) {
          for (var d = a.length - 1; 0 <= d; d--) c && !a[d].isInCamera() || b(a[d], d)
      };
      this.add = function(b) {
          a.push(b)
      };
      this.del = function(b) {
          A.OOP.delObject(a, b)
      }
  };
  this.OOP.newGroup = function() {
      return new vc
  };
  var Ia = 60,
      I = Date.now(),
      bb = 0,
      cb = -1,
      Yb = I,
      ea = {},
      db = 0;
  this.game.setFPS = function(a) {
      Ia = 0 < a ? a : 60
  };
  this.game.getDT = function(a) {
      a || (a = 1E3);
      return bb / a
  };
  this.game.getTime =
      function() {
          return I
      };
  var Zb = function() {
          return k.requestAnimationFrame || k.webkitRequestAnimationFrame || k.mozRequestAnimationFrame || k.oRequestAnimationFrame || k.msRequestAnimationFrame || function(a) {
              k.setTimeout(a, 1E3 / Ia)
          }
      },
      ua = Zb(),
      $b = function() {
          I = Date.now();
          Lb && g.clearRect(0, 0, m, p);
          n.runEvent("preLoop")
      },
      ac = function() {
          n.runEvent("postLoop"); - 1 !== cb && (bb = I - cb);
          cb = I
      },
      J = {
          func: function() {
              console.log('please, use a "setLoop" function.');
              ua = function() {}
          },
          events: !1,
          start: !1,
          end: !1,
          audio: !1,
          fps: !1,
          name: "NotLoop"
      },
      bc = function() {
          J.audio && w(J.audio, function(a) {
              a.stop()
          })
      };
  this.game.newLoop = function(a, b, c, d, h) {
      "function" === typeof b ? ea[a] = {
          events: h || !1,
          func: b,
          start: c || !1,
          end: d || !1,
          audio: !1,
          fps: !1,
          name: a
      } : fa("error in newLoop : " + b + " is not a function")
  };
  this.game.newLoopFromClassObject = function(a, b) {
      if (!b.update) return fa('error in newLoopFromClassObject : function "update" not found');
      ea[a] = {
          events: b.events || !1,
          func: b.update,
          start: b.entry || !1,
          end: b.exit || !1,
          audio: !1,
          fps: !1,
          name: a
      }
  };
  this.game.newLoopFromConstructor =
      function(a, b) {
          A.game.newLoopFromClassObject(a, new b)
      };
  this.game.setLoopSound = function(a, b) {
      var c;
      ea[a].audio || (ea[a].audio = []);
      for (c = 0; c < b.length; c += 1) ea[a].audio.length = 0, b[c].setNextPlay(b[c + 1 === b.length ? 0 : c + 1]), ea[a].audio.push(b[c])
  };
  this.game.setLoop = function(a) {
      if (!ea[a]) return fa("setLoop : " + a + " is no a Loop");
      bc();
      Ub();
      U = {};
      Da = {};
      ka = {};
      Fa = Ea = !1;
      wb(e(0, 0));
      J.end && J.end();
      n.runEvent("exitLoop");
      J = ea[a];
      C.loadFromEvents(J.events);
      J.start && J.start();
      n.runEvent("entryLoop");
      J.audio && J.audio[0].play()
  };
  var C = new function() {
      var a = {
              "mouse:click": []
          },
          b = this;
      this.add = function(b, d) {
          a[b] || (a[b] = []);
          a[b].push(d)
      };
      this.run = function(b, d) {
          a[b] && w(a[b], function(a) {
              return a(d)
          })
      };
      this.clear = function(b) {
          a[b] && (a[b].length = 0)
      };
      this.clearAll = function() {
          D(a, function(a) {
              a.length = 0
          })
      };
      this.loadFromEvents = function(a) {
          b.clearAll();
          a && D(a, function(a, c) {
              b.add(c, a)
          })
      };
      this.isEvent = function(b) {
          return !!a[b]
      }
  };
  this.game.tick = function(a, b) {
      db === a && b()
  };
  var eb = {};
  this.game.skip = function(a, b, c) {
      v(eb[a]) || (eb[a] = 0);
      eb[a]++ >=
          b && (c(), eb[a] = 0)
  };
  var xb = function() {
          60 > db ? db++ : db = 0;
          if (60 > Ia) {
              var a = 1E3 / Ia;
              try {
                  I = Date.now(), I - Yb > a && ($b(), J.func(bb), Yb = I, ac())
              } catch (b) {
                  xa && Ma(b), mb && (xa || Ma(b), fa())
              }
              ua(xb);
              return !1
          }
          try {
              $b(), J.func(bb), ac()
          } catch (b) {
              xa && Ma(b), mb && (xa || Ma(b), fa())
          }
          ua(xb)
      },
      cc = function(a) {
          da || (da = !0, Ia = a || 60, ua(xb), n.runEvent("gameStart"))
      },
      fa = function(a) {
          da && (da = !1, bc(), ua = function() {
              "undefined" !== typeof a && Y(a)
          }, n.runEvent("gameStop"))
      };
  this.game.isStopped = function() {
      return !da
  };
  this.game.getWH = function() {
      return {
          w: m,
          h: p,
          w2: M,
          h2: N
      }
  };
  this.game.getWH2 = function() {
      return {
          w: M,
          h: N
      }
  };
  this.game.getResolution = function() {
      return Math.min(m / ha, p / ia)
  };
  this.game.startLoop = function(a, b) {
      this.setLoop(a);
      this.start(b)
  };
  this.game.start = cc;
  this.game.stop = fa;
  this.game.resume = function() {
      if (!da) return J.audio && J.audio[0].play(), ua = Zb(), cb = -1, cc(), !1
  };
  var wc = 0,
      z = function(a) {
          this.type = "BaseObject";
          this.id = wc += 1;
          this.x = a.x || 0;
          this.y = a.y || 0;
          this.w = a.w || 0;
          this.h = a.h || 0;
          this.ondraw = a.ondraw ? a.ondraw : !1;
          "function" === typeof a.predraw && (this.predraw =
              a.predraw);
          this.parent = !1;
          this.children = [];
          this.fillColor = a.fillColor || !1;
          this.strokeColor = a.strokeColor || t.strokeStyle;
          this.strokeWidth = a.strokeWidth || 0;
          this.angle = a.angle || 0;
          this.alpha = v(a.alpha) ? a.alpha : 1;
          this.center = e(0, 0);
          this.box = {
              x: 0,
              y: 0,
              w: 0,
              h: 0
          };
          this.visible = v(a.visible) ? a.visible : !0;
          this.flip = e(0, 0);
          this.__dataset__ = {};
          this.setShadow(a);
          "object" === typeof a.data && D(a.data, function(a, c) {
              this.dataSet(c, a)
          }, !0);
          a.userData && this.setUserData(a.userData);
          a.center && this.setCenter(a.center);
          a.box &&
              this.setBox(a.box);
          a.size && this.setSize(a.size);
          a.sizeC && this.setSizeC(a.sizeC);
          a.position && this.setPosition(a.position);
          a.positionC && this.setPositionC(a.positionC);
          "function" === typeof a.oncreate && (this.oncreate = a.oncreate, this.oncreate(this), delete this.oncreate)
      };
  z.prototype = {
      predraw: function() {},
      getID: function() {
          return this.id
      },
      getType: function() {
          return this.type
      },
      dataDel: function(a) {
          delete this.__dataset__[a]
      },
      dataSet: function(a, b) {
          this.__dataset__[a] = b
      },
      dataGet: function(a, b) {
          return "undefined" !==
              typeof this.__dataset__[a] ? this.__dataset__[a] : "undefined" !== typeof b ? b : !1
      },
      data: function() {
          return this.__dataset__
      },
      getParent: function() {
          return this.parent
      },
      addChild: function(a) {
          a && a.id != this.id && (a.parent = this, this.children.push(a), a.move(this.getPosition()), a.setPositionC(E(a.getPositionC(), this.getPositionC(), this.angle)), a.turn(this.angle))
      },
      delChild: function(a) {
          a.parent = !1;
          var b;
          var c = 0;
          for (b = this.children.length; c < b; c += 1)
              if (this.children[c].id == a.id) {
                  this.children.splice(c, 1);
                  break
              }
      },
      delParent: function() {
          this.parent.delChild(this)
      },
      setBox: function(a) {
          a.offset && (this.box.x = a.offset.x || 0, this.box.y = a.offset.y || 0);
          a.size && (this.box.w = a.size.w || 0, this.box.h = a.size.h || 0)
      },
      isArrIntersect: function(a) {
          var b;
          var c = 0;
          for (b = a.length; c < b; c += 1)
              if (a[c].id !== this.id && this.isIntersect(a[c])) return a[c];
          return !1
      },
      isArrInside: function(a) {
          var b;
          var c = 0;
          for (b = a.length; c < b; c += 1)
              if (this.isDynamicInside(a[c].getDynamicBox())) return a[c];
          return !1
      },
      getNearest: function(a) {
          var b = 0,
              c = !1,
              d;
          var h = 0;
          for (d = a.length; h < d; h += 1)
              if (this.id !== a[h].id) {
                  !1 === c && (c =
                      this.getDistanceC(a[h].getPositionC()), b = h);
                  var e = this.getDistanceC(a[h].getPositionC());
                  e < c && (c = e, b = h)
              }
          return a[b]
      },
      setFlip: function(a, b) {
          v(a) && this.flip.x !== a && (this.flip.x = a);
          v(b) && this.flip.y !== b && (this.flip.y = b)
      },
      setUserData: function(a) {
          for (var b in a) v(this[b]) || (this[b] = a[b])
      },
      setShadow: function(a) {
          this.shadowColor = a.shadowColor || !1;
          this.shadowBlur = v(a.shadowBlur) ? a.shadowBlur : 3;
          this.shadowX = a.shadowX || 0;
          this.shadowY = a.shadowY || 0
      },
      getDynamicBox: function() {
          var a = this.getPosition(1);
          return 0 ===
              this.angle ? [e(this.x + this.box.x, this.y + this.box.y), e(this.x + this.box.x + this.w + this.box.w, this.y + this.box.y), e(this.x + this.box.x + this.w + this.box.w, this.y + this.box.y + this.h + this.box.h), e(this.x + this.box.x, this.y + this.box.y + this.h + this.box.h)] : [E(e(this.x + this.box.x, this.y + this.box.y), a, this.getAngle()), E(e(this.x + this.box.x + this.w + this.box.w, this.y + this.box.y), a, this.getAngle()), E(e(this.x + this.box.x + this.w + this.box.w, this.y + this.box.y + this.h + this.box.h), a, this.getAngle()), E(e(this.x + this.box.x, this.y +
                  this.box.y + this.h + this.box.h), a, this.getAngle())]
      },
      isDynamicIntersect: function(a) {
          if (3 > a.length) return !1;
          var b = this.getDynamicBox(),
              c;
          for (c = b.length - 1; 0 <= c; c--)
              if (ra(b[c], a)) return !0;
          for (c = b.length - 1; 0 <= c; c--)
              if (ra(a[c], b)) return !0;
          return !1
      },
      isIntersect: function(a) {
          return a.visible ? this.angle || a.angle ? this.isDynamicIntersect(a.getDynamicBox()) : this.isStaticIntersect(a.getStaticBox()) : !1
      },
      isDynamicInside: function(a) {
          if (3 > a.length) return !1;
          var b = this.getDynamicBox(),
              c, d = 0;
          var h = 0;
          for (c = b.length; h < c; h +=
              1) ra(b[h], a) && (d += 1);
          return d === b.length ? !0 : !1
      },
      drawDynamicBox: function(a, b, c, d, h) {
          O(this, 1);
          g.shadowColor = "transparent";
          V(e(this.x + this.box.x + (a || 0), this.y + this.box.y + (b || 0)), x(this.w + this.box.w + (2 * c || 0), this.h + this.box.h + (2 * d || 0)), !1, h || "red", 2);
          dc(e(this.x + this.w / 2 + this.center.x, this.y + this.h / 2 + this.center.y), 10, h || "red");
          K()
      },
      drawStaticBox: function(a, b, c, d, h) {
          g.shadowColor = "transparent";
          V(e(this.x + this.box.x + (a || 0), this.y + this.box.y + (b || 0)), x(this.w + this.box.w + (2 * c || 0), this.h + this.box.h + (2 * d ||
              0)), !1, h || "yellow", 2);
          dc(e(this.x + this.w / 2 + this.center.x, this.y + this.h / 2 + this.center.y), 10, h || "yellow")
      },
      drawStaticBoxA: function(a, b, c, d, h) {
          g.shadowColor = "transparent";
          V(e(this.x + this.box.x + (a || 0), this.y + this.box.y + 1 + (b || 0)), x(this.w + this.box.w - 1 + (c || 0), this.h + this.box.h - 2 + (d || 0)), !1, h || "orange", 2)
      },
      drawStaticBoxD: function(a, b, c, d, h) {
          g.shadowColor = "transparent";
          V(e(this.x + this.box.x + 1 + (a || 0), this.y + this.box.y + 1 + (b || 0)), x(this.w + this.box.w - 1 + (c || 0), this.h + this.box.h - 2 + (d || 0)), !1, h || "red", 2)
      },
      drawStaticBoxW: function(a,
          b, c, d, h) {
          g.shadowColor = "transparent";
          V(e(this.x + this.box.x + 1 + (a || 0), this.y + this.box.y + (b || 0)), x(this.w + this.box.w - 2 + (c || 0), this.h + this.box.h - 1 + (d || 0)), !1, h || "blue", 2)
      },
      drawStaticBoxS: function(a, b, c, d, h) {
          g.shadowColor = "transparent";
          V(e(this.x + this.box.x + 1 + (a || 0), this.y + this.box.y + 1 + (b || 0)), x(this.w + this.box.w - 2 + (c || 0), this.h + this.box.h - 1 + (d || 0)), !1, h || "#329F93", 2)
      },
      isStaticIntersect: function(a) {
          return this.y + this.box.y + this.h + this.box.h >= a.y && this.x + this.box.x + this.w + this.box.w >= a.x && this.x + this.box.x <
              a.x + a.w && this.y + this.box.y < a.y + a.h
      },
      getStaticBoxPosition: function() {
          return {
              x: this.x + this.box.x,
              y: this.y + this.box.y,
              w: this.x + this.box.x + this.w + this.box.w,
              h: this.y + this.box.y + this.h + this.box.h
          }
      },
      getStaticBox: function(a, b, c, d) {
          return {
              x: this.x + this.box.x + (a || 0),
              y: this.y + this.box.y + (b || 0),
              w: this.w + this.box.w + (2 * c || 0),
              h: this.h + this.box.h + (2 * d || 0)
          }
      },
      getStaticBoxA: function(a, b, c, d) {
          return {
              x: this.x + this.box.x + (a || 0),
              y: this.y + this.box.y + 1 + (b || 0),
              w: this.w + this.box.w - 1 + (c || 0),
              h: this.h + this.box.h - 2 + (d || 0)
          }
      },
      getStaticBoxD: function(a,
          b, c, d) {
          return {
              x: this.x + this.box.x + 1 + (a || 0),
              y: this.y + this.box.y + 1 + (b || 0),
              w: this.w + this.box.w - 1 + (c || 0),
              h: this.h + this.box.h - 2 + (d || 0)
          }
      },
      getStaticBoxW: function(a, b, c, d) {
          return {
              x: this.x + this.box.x + 1 + (a || 0),
              y: this.y + this.box.y + (b || 0),
              w: this.w + this.box.w - 2 + (c || 0),
              h: this.h + this.box.h - 1 + (d || 0)
          }
      },
      getStaticBoxS: function(a, b, c, d) {
          return {
              x: this.x + this.box.x + 1 + (a || 0),
              y: this.y + this.box.y + 1 + (b || 0),
              w: this.w + this.box.w - 1 + (c || 0),
              h: this.h + this.box.h - 2 + (d || 0)
          }
      },
      setAlpha: function(a) {
          this.alpha !== a && (this.alpha = 0 <= a ? 1 >=
              a ? a : 1 : 0)
      },
      transparent: function(a) {
          this.setAlpha(this.alpha + a)
      },
      getAlpha: function() {
          return this.alpha
      },
      rotate: function(a) {
          this.setAngle(Math.atan2(a.y - this.getPosition(1).y, a.x - this.getPosition(1).x) * (180 / Math.PI))
      },
      setCenter: function(a) {
          this.center = e(a.x, a.y)
      },
      nullCenter: function(a) {
          a || (a = e(0, 0));
          this.center = e(-this.w / 2 + a.x, -this.h / 2 + a.y)
      },
      getCenter: function() {
          return e(this.center.x, this.center.y)
      },
      getBox: function() {
          return this.box
      },
      move: function(a) {
          this.x += a.x;
          this.y += a.y
      },
      circling: function(a, b,
          c) {
          v(this.circlingAnglePointJS) || (this.circlingAnglePointJS = 0);
          this.x = a.x + b * Math.cos(G(this.circlingAnglePointJS));
          this.y = a.y + b * Math.sin(G(this.circlingAnglePointJS));
          this.circlingAnglePointJS = 360 < this.circlingAnglePointJS ? 0 : this.circlingAnglePointJS + c
      },
      circlingC: function(a, b, c) {
          v(this.circlingAnglePointJS) || (this.circlingAnglePointJS = 0);
          this.setPositionC(e(a.x + b * Math.cos(G(this.circlingAnglePointJS)), a.y + b * Math.sin(G(this.circlingAnglePointJS))));
          this.circlingAnglePointJS = 360 < this.circlingAnglePointJS ?
              0 : this.circlingAnglePointJS + c
      },
      motion: function(a, b, c) {
          v(this.motionPercentPointJS) || (this.motionPercentPointJS = 0);
          this.x = a.x + b.w * Math.cos(G(this.motionPercentPointJS));
          this.y = a.y + b.h * Math.sin(G(this.motionPercentPointJS));
          this.motionPercentPointJS = 360 < this.motionPercentPointJS ? 0 : this.motionPercentPointJS + c
      },
      motionC: function(a, b, c) {
          v(this.motionPercentPointJS) || (this.motionPercentPointJS = 0);
          this.setPositionC(e(a.x + b.w * Math.cos(G(this.motionPercentPointJS)), a.y + b.h * Math.sin(G(this.motionPercentPointJS))));
          this.motionPercentPointJS = 360 < this.motionPercentPointJS ? 0 : this.motionPercentPointJS + c
      },
      scale: function(a) {
          this.w *= a;
          this.h *= a
      },
      scaleC: function(a) {
          var b = this.w,
              c = this.h;
          this.scale(a);
          this.move(e(-((this.w - b) / 2), -((this.h - c) / 2)))
      },
      getPosition: function(a) {
          return 1 === a ? e(this.x + (this.w / 2 + this.center.x), this.y + (this.h / 2 + this.center.y)) : 2 === a ? (a = e(this.x + this.w / 2, this.y + this.h / 2), this.angle && (a = E(a, this.getPosition(1), this.angle)), e(a.x, a.y)) : e(this.x, this.y)
      },
      getPositionC: function() {
          return e(this.x + (this.w /
              2 + this.center.x), this.y + (this.h / 2 + this.center.y))
      },
      getPositionS: function() {
          return e(this.x + f.x, this.y + f.x)
      },
      getPositionCS: function() {
          return e(this.x + (this.w / 2 + this.center.x) + f.x, this.y + (this.h / 2 + this.center.y) + f.y)
      },
      setPosition: function(a) {
          !1 !== a.x && (this.x = a.x);
          !1 !== a.y && (this.y = a.y)
      },
      setPositionS: function(a) {
          !1 !== a.x && (this.x = a.x + f.x);
          !1 !== a.y && (this.y = a.y + f.y)
      },
      setPositionC: function(a) {
          !1 !== a.x && (this.x = -(this.w / 2 + this.center.x) + a.x);
          !1 !== a.y && (this.y = -(this.h / 2 + this.center.y) + a.y)
      },
      setPositionCS: function(a) {
          !1 !==
              a.x && (this.x = -(this.w / 2 + this.center.x) + a.x + f.x);
          !1 !== a.y && (this.y = -(this.h / 2 + this.center.y) + a.y + f.y)
      },
      getSize: function() {
          return x(this.w, this.h)
      },
      setSize: function(a) {
          this.w = a.w;
          this.h = a.h
      },
      setSizeC: function(a) {
          this.w = a.w;
          this.h = a.h;
          this.move(e(-(a.w / 2), -(a.h / 2)))
      },
      turn: function(a) {
          this.angle += a
      },
      rotateForAngle: function(a, b) {
          0 > this.angle && (this.angle += 360);
          0 > a && (a += 360);
          var c = this.angle - a;
          180 < c ? c -= 360 : -180 > c && (c += 360);
          c >= -b - .5 && c <= b + .5 ? this.angle = a : c > b + .5 ? this.angle -= b : c < -b - .5 && (this.angle += b)
      },
      rotateForPoint: function(a,
          b) {
          var c = za(this.getPositionC(), a);
          this.rotateForAngle(c, b)
      },
      rotateForObject: function(a, b) {
          var c = za(this.getPositionC(), a.getPositionC());
          this.rotateForAngle(c, b)
      },
      moveTo: function(a, b) {
          var c = G(za(this.getPosition(), a));
          this.x += b * Math.cos(c);
          this.y += b * Math.sin(c)
      },
      moveToC: function(a, b) {
          var c = G(za(this.getPositionC(), a));
          this.x += b * Math.cos(c);
          this.y += b * Math.sin(c)
      },
      moveAngle: function(a, b) {
          b = G(v(b) ? b : this.angle);
          this.x += a * Math.cos(b);
          this.y += a * Math.sin(b)
      },
      moveTime: function(a, b) {
         //console.log(this);
          b = b || 1;
          var c = this.getPosition();
          this.move(e((a.x - c.x) / b, (a.y - c.y) / b))
      },
      moveTimeC: function(a, b) {
          b = b || 1;
          var c = this.getPosition(1);
          this.move(e((a.x - c.x) / b, (a.y - c.y) / b))
      },
      getAngle: function() {
          return this.angle
      },
      setAngle: function(a) {
          this.angle !== a && (this.angle = a % 360)
      },
      getDistance: function(a) {
          return Math.sqrt(Math.pow(a.x - this.getPosition(2).x, 2) + Math.pow(a.y - this.getPosition(2).y, 2))
      },
      getDistanceC: function(a) {
          return Math.sqrt(Math.pow(a.x - this.getPosition(1).x, 2) + Math.pow(a.y - this.getPosition(1).y, 2))
      },
      setVisible: function(a) {
          this.visible = !0 === a
      },
      isVisible: function() {
          return this.visible
      },
      isInCamera: function() {
          return this.angle ? this.isInCameraDynamic() : this.isInCameraStatic()
      },
      isInCameraStatic: function() {
          return this.x + this.w < f.x || this.x > f.x + m || this.y + this.h < f.y || this.y > f.y + p ? !1 : !0
      },
      isInCameraDynamic: function() {
          var a = this.getDynamicBox(),
              b = [e(f.x, f.y), e(f.x + m, f.y), e(f.x + m, f.y + p), e(f.x, f.y + p)],
              c, d = 0;
          var h = 0;
          for (c = a.length; h < c; h += 1) ra(a[h], b) && (d += 1);
          return 0 < d
      },
      draw: function() {}
  };
  this.game.newBaseObject = function(a) {
      return new z(a)
  };
  var fb =
      function(a) {
          z.call(this, a);
          this.type = "TriangleObject"
      };
  Z(z, fb);
  fb.prototype.getDynamicBox = function() {
      var a = this.getPositionC();
      return 0 === this.angle ? [e(this.x + this.w / 2, this.y), e(this.x + this.w, this.y + this.h), e(this.x, this.y + this.h)] : [E(e(this.x + this.w / 2, this.y), a, this.getAngle()), E(e(this.x + this.w, this.y + this.h), a, this.getAngle()), E(e(this.x, this.y + this.h), a, this.getAngle())]
  };
  fb.prototype.draw = function() {
      this.predraw();
      if (this.visible && this.alpha) {
          var a = !1;
          if (this.angle || 1 !== this.alpha || this.shadowColor) O(this),
              a = !0;
          Ja(this.x, this.y, [e(this.w / 2, 0), e(this.w, this.h), e(0, this.h)], this.fillColor, this.strokeWidth ? this.strokeColor : !1, this.strokeWidth);
          if (this.ondraw) this.ondraw();
          a && K()
      }
  };
  this.game.newTriangleObject = function(a) {
      return new fb(a)
  };
  var yb = function(a) {
      z.call(this, a);
      this.type = "RectObject"
  };
  Z(z, yb);
  yb.prototype.draw = function() {
      this.predraw();
      if (this.visible && this.alpha) {
          var a = !1;
          if (this.angle || 1 !== this.alpha || this.shadowColor) O(this), a = !0;
          V(e(this.x, this.y), x(this.w, this.h), this.fillColor, this.strokeColor,
              this.strokeWidth);
          if (this.ondraw) this.ondraw();
          a && K()
      }
  };
  this.game.newRectObject = function(a) {
      return new yb(a)
  };
  var zb = function(a) {
      z.call(this, a);
      this.type = "RoundRectObject";
      this.radius = a.radius || 1
  };
  Z(z, zb);
  zb.prototype.draw = function() {
      this.predraw();
      if (this.visible && this.alpha) {
          var a = !1;
          if (this.angle || 1 !== this.alpha || this.shadowColor) O(this), a = !0;
          gb(e(this.x, this.y), x(this.w, this.h), this.radius, this.fillColor, this.strokeColor, this.strokeWidth);
          if (this.ondraw) this.ondraw();
          a && K()
      }
  };
  this.game.newRoundRectObject =
      function(a) {
          return new zb(a)
      };
  var ma = function(a) {
      z.call(this, a);
      this.radius = a.radius || 5;
      a.scale && (this.radius *= a.scale);
      this.w = 2 * this.radius;
      this.h = 2 * this.radius;
      this.type = "CircleObject";
      a.positionC && this.setPositionC(a.positionC)
  };
  Z(z, ma);
  ma.prototype.draw = function() {
      this.predraw();
      if (this.visible) {
          if (!this.alpha) return this.ondraw ? this.ondraw() : null;
          var a = !1;
          if (this.angle || 1 !== this.alpha || this.shadowColor) O(this), a = !0;
          va(e(this.x, this.y), this.radius, this.fillColor, this.strokeColor, this.strokeWidth);
          if (this.ondraw) this.ondraw();
          a && K()
      }
  };
  ma.prototype.scale = function(a) {
      this.w *= a || 0;
      this.h *= a || 0;
      this.radius *= a ? a / 2 : 0
  };
  ma.prototype.scaleC = function(a) {
      var b = this.w,
          c = this.h;
      this.w *= a || 0;
      this.h *= a || 0;
      this.radius *= a;
      this.move(e(-((this.w - b) / 2), -((this.h - c) / 2)))
  };
  ma.prototype.getRadius = function() {
      return this.radius
  };
  ma.prototype.setRadius = function(a) {
      a && this.radius !== a && (this.radius = a, this.w = 2 * a, this.h = 2 * a)
  };
  this.game.newCircleObject = function(a) {
      return new ma(a)
  };
  var Ab = function(a) {
      this.file = a.file;
      this.w =
          a.w;
      this.h = a.h;
      this.read = {
          x: 0,
          y: 0,
          w: 0,
          h: 0
      };
      a.read && (this.read.w = a.read.w || 0, this.read.h = a.read.h || 0, this.read.x = a.read.x || 0, this.read.y = a.read.y || 0);
      this.countX = a.countX;
      this.countY = a.countY;
      this.fullW = this.countX * this.w;
      this.fullH = this.countY * this.h;
      this.cnv = k.document.createElement("canvas");
      this.cnv.width = this.w;
      this.cnv.height = this.h;
      this.ctx = this.cnv.getContext("2d");
      this.loaded = !1;
      this.x = a.x || 0;
      this.y = a.y || 0;
      a = k.document.createElement("img");
      var b = this;
      a.onload = function() {
          b.ctx.drawImage(this,
              b.read.x ? b.read.x : 0, b.read.y ? b.read.y : 0, b.read.w ? b.read.w : this.width, b.read.h ? b.read.h : this.height, 0, 0, b.w, b.h);
          b.loaded = !0;
          B.load()
      };
      a.src = this.file;
      B.add()
  };
  Ab.prototype.draw = function() {
      if (this.loaded) {
          var a = -f.x + this.x,
              b = -f.y + this.y,
              c, d;
          for (d = 0; d < this.countY; d += 1)
              if (!(this.y + d * this.h + this.h < f.y || this.y + d * this.h > f.y + p))
                  for (c = 0; c < this.countX; c += 1) this.x + c * this.w + this.w < f.x || this.x + c * this.w > f.x + m || g.drawImage(this.cnv, a + c * this.w, b + d * this.h, this.w, this.h)
      }
  };
  Ab.prototype.getSize = function() {
      return this.loaded ?
          x(this.fullW, this.fullH) : x()
  };
  this.game.newBackgroundObject = function(a) {
      return new Ab(a)
  };
  var Bb = function(a) {
      z.call(this, a);
      this.type = "EllipsObject"
  };
  Z(z, Bb);
  Bb.prototype.draw = function() {
      this.predraw();
      if (this.visible && this.alpha) {
          O(this);
          va(e(this.x, this.y), this.h / 2, this.fillColor, this.strokeColor, this.strokeWidth);
          if (this.ondraw) this.ondraw();
          K()
      }
  };
  this.game.newEllipsObject = function(a) {
      return new Bb(a)
  };
  var W = function(a) {
      z.call(this, a);
      this.type = "TextObject";
      this.text = a.text || "TextObject";
      this.color =
          a.color || "";
      this.size = 0 < a.size ? a.size : 10;
      a.scale && (this.size *= a.scale);
      this.font = a.font || "serif";
      this.style = a.style || "";
      this.align = "left";
      this.valign = "top";
      this.radius = a.radius || 0;
      this.padding = a.padding || 0;
      this.w = Cb(this.text, this.style, this.size, this.font) + 2 * this.padding;
      this.h = this.size + 2 * this.padding;
      this.strokeColorText = a.strokeColorText || !1;
      this.strokeWidthText = a.strokeWidthText || !1;
      this.textDY = -this.size / 11;
      a.positionC && this.setPositionC(a.positionC)
  };
  Z(z, W);
  W.prototype.reStyle = function(a) {
      this.text =
          a.text || this.text;
      this.color = a.color || this.color;
      this.size = a.size || this.size;
      this.font = a.font || this.font;
      this.style = a.style || this.style;
      this.padding = a.padding || this.padding;
      this.w = Cb(this.text, this.style, this.size, this.font) + 2 * this.padding;
      this.h = this.size + 2 * this.padding;
      this.strokeColorText = a.strokeColorText || this.strokeColorText;
      this.strokeWidthText = a.strokeWidthText || this.strokeWidthText;
      this.strokeColor = a.strokeColor || this.strokeColor;
      this.strokeWidth = a.strokeWidth || this.strokeWidth;
      this.fillColor =
          a.fillColor || this.fillColor;
      this.textDY = -this.size / 11
  };
  W.prototype.setText = function(a) {
      this.text !== a && this.reStyle({
          text: a
      })
  };
  W.prototype.getText = function() {
      return this.text
  };
  W.prototype.draw = function() {
      this.predraw();
      if (this.visible && this.alpha) {
          var a = !1;
          if (this.angle || 1 !== this.alpha || this.shadowColor) O(this), a = !0;
          if (this.fillColor || this.strokeColor) this.radius ? gb(e(this.x, this.y), x(this.w, this.h), this.radius, this.fillColor, this.strokeColor, this.strokeWidth) : V(e(this.x, this.y), x(this.w, this.h), this.fillColor,
              this.strokeColor, this.strokeWidth);
          na(e(this.x + this.padding, this.textDY + this.y + this.padding), this.text, this.color, this.size, this.font, this.style, this.align, this.strokeColorText, this.strokeWidthText);
          if (this.ondraw) this.ondraw();
          a && K()
      }
  };
  W.prototype.scale = function(a) {
      this.reStyle({
          size: this.size * a
      })
  };
  W.prototype.scaleC = function(a) {
      var b = this.w,
          c = this.h;
      this.reStyle({
          size: this.size * a
      });
      this.move(e(-((this.w - b) / 2), -((this.h - c) / 2)))
  };
  W.prototype.setSize = function(a) {
      this.size !== a && this.reStyle({
          size: a
      })
  };
  W.prototype.setSizeC = function(a) {
      this.size !== a && (this.reStyle({
          size: a
      }), this.move(e(-a / 2, -a / 2)))
  };
  var Cb = function(a, b, c, d) {
      var h = k.document.createElement("canvas").getContext("2d");
      h.font = (b ? b + " " : "") + c + "px " + d;
      return h.measureText(a).width
  };
  this.OOP.getTextWidth = function(a) {
      return Cb(a.text, a.style || "", a.size || 10, a.font || "serif")
  };
  this.game.newTextObject = function(a) {
      return new W(a)
  };
  var P = function(a) {
      z.call(this, a);
      this.type = "PolygonObject";
      this.points = [];
      this.pointColor = a.pointColor || !1;
      this.w =
          this.h = 0;
      var b = this;
      "undefined" !== typeof a.points && w(a.points, function(a) {
          b.addPoint(a)
      })
  };
  Z(z, P);
  P.prototype.addPoint = function(a) {
      this.points.push(a);
      a.x > this.w && (this.w = a.x);
      a.x > this.h && (this.h = a.x)
  };
  P.prototype.delPoint = function(a) {
      this.points.splice(a, 1)
  };
  P.prototype.clearPoints = function() {
      this.points.length = 0
  };
  P.prototype.getPoints = function() {
      return this.points
  };
  P.prototype.getCount = function() {
      return this.points.length
  };
  P.prototype.getPoint = function(a) {
      return this.points[a]
  };
  P.prototype.isIntersect =
      function(a) {
          return a.visible ? this.isDynamicIntersect(a.getDynamicBox()) : !1
      };
  P.prototype.drawDynamicBox = function(a) {
      Ja(this.x, this.y, this.points, !1, "yellow", 1, "red")
  };
  P.prototype.getDynamicBox = function() {
      for (var a = [], b = this.points.length - 1; 0 <= b; b--) a.push(E(this.points[b], e(this.w / 2 + this.center.x, this.h / 2 + this.center.y), this.angle).plus(e(this.x, this.y)));
      return a
  };
  P.prototype.draw = function() {
      this.predraw();
      if (this.visible && this.alpha) {
          var a = !1;
          if (this.angle || 1 !== this.alpha || this.shadowColor) O(this),
              a = !0;
          Ja(this.x, this.y, this.points, this.fillColor, this.strokeColor, this.strokeWidth, this.pointColor);
          if (this.ondraw) this.ondraw();
          a && K()
      }
  };
  this.game.newPolygonObject = function(a) {
      return new P(a)
  };
  var oa = function(a) {
      z.call(this, a);
      this.type = "ImageObject";
      this.loaded = !1;
      this.file = "";
      this.forOnLoad = a.onload || !1;
      ec(a.file, this, a.scale || 1)
  };
  Z(z, oa);
  oa.prototype.draw = function() {
      this.predraw();
      if (this.visible && this.alpha && this.loaded) {
          var a = !1;
          if (this.angle || 1 !== this.alpha || this.shadowColor || this.flip.x ||
              this.flip.y) O(this), a = !0;
          fc(e(this.x, this.y), x(this.w, this.h), this.file);
          if (this.ondraw) this.ondraw();
          a && K()
      }
  };
  oa.prototype.simpleDraw = function(a) {
      this.predraw();
      if (this.loaded) {
          var b = !1;
          if (this.angle || 1 !== this.alpha || this.shadowColor) O(this), b = !0;
          fc(e(a.x, a.y), x(this.w, this.h), this.file);
          b && K()
      }
  };
  oa.prototype.setImage = function(a, b) {
      this.file !== a && (v(l[a]) ? (this.file = a, b && b()) : (this.loaded = !1, this.origHeight = this.origWidth = 0, this.forOnLoad = b || !1, ec(a, this)))
  };
  oa.prototype.getImage = function() {
      return this.file
  };
  oa.prototype.resize = function(a) {
      if (!1 !== a.w && !1 === a.h) {
          var b = a.w / this.w;
          this.w = a.w;
          this.h *= b
      } else !1 !== a.h && !1 === a.w ? (b = a.h / this.h, this.h = a.h, this.w *= b) : !1 !== a.w && !1 !== a.h && (this.w = a.w, this.h = a.h)
  };
  this.game.newImageObject = function(a) {
      return new oa(a)
  };
  var L = function(a) {
      z.call(this, a);
      this.type = "AnimationObject";
      this.frame = 0;
      this.anim = a.animation;
      this.step = a.delay || 10;
      this.toFrameStep = this.difStep = 0;
      a.scale && (this.w *= a.scale, this.h *= a.scale)
  };
  Z(z, L);
  L.prototype.draw = function() {
      if (this.visible && this.alpha) {
          var a = !1;
          if (this.angle || 1 !== this.alpha || this.flip.x || this.flip.y || this.shadowColor) O(this), a = !0;
          Db(this.anim, e(this.x, this.y), x(this.w, this.h), this.frame);
          if (this.ondraw) this.ondraw();
          this.difStep > this.step ? (this.frame = this.frame < this.anim.r ? this.frame + 1 : 0, this.difStep = 0) : this.difStep += 1;
          a && K()
      }
  };
  L.prototype.drawFrames = function(a, b, c) {
      if (this.visible && this.alpha) {
          if (this.frame < a || this.frame > b) this.frame = a;
          c = !1;
          if (this.angle || 1 !== this.alpha || this.flip.x || this.flip.y || this.shadowColor) O(this), c = !0;
          Db(this.anim,
              e(this.x, this.y), x(this.w, this.h), this.frame);
          if (this.ondraw) this.ondraw();
          this.difStep > this.step ? (this.frame = this.frame < b ? this.frame + 1 : a, this.difStep = 0) : this.difStep += 1;
          c && K()
      }
  };
  L.prototype.drawFrame = function(a) {
      if (this.visible && this.alpha) {
          var b = !1;
          if (this.angle || 1 !== this.alpha || this.flip.x || this.flip.y || this.shadowColor) O(this), b = !0;
          Db(this.anim, e(this.x, this.y), x(this.w, this.h), a);
          if (this.ondraw) this.ondraw();
          b && K()
      }
  };
  L.prototype.drawToFrame = function(a) {
      if (this.visible && this.alpha) {
          if (this.frame <
              a) this.toFrameStep = 1;
          else if (this.frame > a) this.toFrameStep = -1;
          else {
              this.drawFrame(a);
              return
          }
          this.drawFrame(this.frame);
          if (this.ondraw) this.ondraw();
          this.difStep > this.step ? (this.frame = this.frame < this.anim.r ? this.frame + this.toFrameStep : 0, this.difStep = 0) : this.difStep += 1
      }
  };
  L.prototype.drawReverFrames = function(a, b) {
      if (this.visible && this.alpha) {
          this.drawFrame(this.frame);
          if (this.ondraw) this.ondraw();
          this.difStep > this.step ? (this.frame <= a ? this.toFrameStep = 1 : this.frame >= b && (this.toFrameStep = -1), this.frame +=
              this.toFrameStep, this.difStep = 0) : this.difStep += 1
      }
  };
  L.prototype.setAnimation = function(a) {
      a !== this.anim && (this.frame = 0, this.anim = a)
  };
  L.prototype.getAnimation = function() {
      return this.anim
  };
  L.prototype.setDelay = function(a) {
      this.step = 0 < a ? a : this.step
  };
  L.prototype.getDelay = function() {
      return this.step
  };
  L.prototype.getFrame = function() {
      return this.frame
  };
  L.prototype.setFrame = function(a) {
      this.frame = a
  };
  L.prototype.getLastFrame = function() {
      return this.anim.endFrame
  };
  this.game.newAnimationObject = function(a) {
      return new L(a)
  };
  var uc = function(a) {
          var b = !1;
          "RectObject" === a.type ? b = A.game.newRectObject({}) : "CircleObject" === a.type ? b = A.game.newCircleObject({}) : "RoundRectObject" === a.type ? b = A.game.newRoundRectObject({}) : "TextObject" === a.type ? b = A.game.newTextObject({}) : "EllipsObject" === a.type ? b = A.game.newEllipsObject({}) : "ImageObject" === a.type ? b = A.game.newImageObject({
                  file: a.file
              }) : "TriangleObject" === a.type ? b = A.game.newTriangleObject({}) : "PolygonObject" === a.type ? b = A.game.newTriangleObject({
                  points: a.points
              }) : "AnimationObject" ===
              a.type && (b = A.game.newAnimationObject({
                  animation: a.anim
              }));
          return b
      },
      Eb = {},
      xc = 0,
      pa = function(a, b) {
          this.file = a;
          this.loaded = !1;
          this.h = this.w = 0;
          this.id = xc++;
          this.toLoad = [];
          var c = k.document.createElement("img"),
              d = this;
          Eb[a] = d;
          c.onload = function() {
              d.loaded = !0;
              d.w = this.width;
              d.h = this.height;
              d.img = k.document.createElement("canvas");
              d.img.width = this.width;
              d.img.height = this.height;
              d.context = d.img.getContext("2d");
              d.context.drawImage(this, 0, 0);
              d.toLoad.length && w(d.toLoad, function(a) {
                  a.func(d.context, a.w, a.h, a.r)
              });
              b && (d.onLoad = b, d.onLoad());
              B.load()
          };
          c.src = a;
          B.add()
      };
  pa.prototype.onContext = function(a) {
      this.loaded ? a(this.context, this.w, this.h, 1) : this.toLoad.push({
          w: this.w,
          h: this.h,
          r: 1,
          func: a
      })
  };
  pa.prototype.getCanvas = function() {
      return this.img
  };
  var yc = 0;
  pa.prototype.getAnimation = function(a, b, c, d, h) {
      var e = function(a, b, c, d, h, e) {
          this.id = yc++;
          this.image = a;
          this.x = b;
          this.y = c;
          this.w = d;
          this.h = h;
          this.endFrame = this.r = e ? e - 1 : 0;
          this.frameCount = this.r + 1
      };
      e.prototype = {
          onContext: function(a) {
              this.image.loaded ? a(this.image.context,
                  this.w, this.h, this.r) : this.image.toLoad.push({
                  w: this.w,
                  h: this.h,
                  r: this.r,
                  func: a
              })
          },
          getImage: function() {
              return this.image
          },
          getCount: function() {
              return this.r
          }
      };
      return new e(this, a, b, c, d, h)
  };
  var Fb = function(a, b) {
      this.loaded = !0;
      this.w = a;
      this.h = b;
      this.img = k.document.createElement("canvas");
      this.img.width = a;
      this.img.height = b;
      this.context = this.img.getContext("2d")
  };
  Fb.prototype.onContext = pa.prototype.onContext;
  Fb.prototype.getAnimation = pa.prototype.getAnimation;
  this.tiles.newDrawImage = function(a, b) {
      return new Fb(a,
          b)
  };
  this.tiles.newImage = function(a, b) {
      return Eb[a] ? Eb[a] : new pa(a, b)
  };
  this.tiles.newAnimation = function(a, b, c, d) {
      return (new pa(a)).getAnimation(0, 0, b, c, d)
  };
  var Db = function(a, b, c, d) {
          if (a && a.image.loaded) {
              var h = -f.x,
                  e = -f.y;
              a.image.img && g.drawImage(a.image.img, a.x + a.w * d, a.y, a.w, a.h, b.x + h, b.y + e, c.w, c.h)
          }
      },
      l = {},
      ec = function(a, b, c) {
          if (v(l[a])) {
              b.loaded = !0;
              b.file = a;
              if (b.w && !b.h) {
                  var d = b.w / l[a].w;
                  var h = b.w;
                  var e = l[a].h * d
              } else !b.w && b.h ? (d = b.h / l[a].h, e = b.h, h = l[a].w * d) : b.w && b.h ? (h = b.w, e = b.h) : (h = l[a].w, e = l[a].h);
              c && (h *= c, e *= c);
              b.w = h;
              b.h = e;
              b.forOnLoad && b.forOnLoad()
          } else h = k.document.createElement("img"), h.onload = function() {
              l[a] = {};
              l[a].loaded = !0;
              l[a].img = this;
              l[a].w = this.width;
              l[a].h = this.height;
              if (v(b)) {
                  b.loaded = !0;
                  if (b.w && !b.h) {
                      var d = b.w / l[a].w;
                      var e = b.w;
                      var h = l[a].h * d
                  } else !b.w && b.h ? (d = b.h / l[a].h, h = b.h, e = l[a].w * d) : b.w && b.h ? (e = b.w, h = b.h) : (e = l[a].w, h = l[a].h);
                  c && (e *= c, h *= c);
                  b.w = e;
                  b.h = h;
                  b.file = a;
                  b.forOnLoad && b.forOnLoad()
              }
              B.load()
          }, h.src = a, B.add()
      },
      fc = function(a, b, c) {
          if (c) {
              var d = -f.x,
                  e = -f.y;
              l[c] && g.drawImage(l[c].img,
                  0, 0, l[c].w, l[c].h, a.x + d, a.y + e, b.w, b.h)
          }
      },
      gc = function(a) {
          this.type = "Mesh";
          this.objs = [];
          this.x = a.x || 0;
          this.y = a.y || 0;
          this.angle = a.angle || 0;
          this.count = 0;
          var b = this;
          a.add && w(a.add, function(a) {
              b.add(a)
          });
          this.angle && this.setAngle(this.angle)
      };
  gc.prototype = {
      getCount: function() {
          return this.count
      },
      getObjects: function() {
          return this.objs
      },
      add: function(a) {
          this.count += 1;
          this.objs.push(a);
          a.offsetMesh = a.getPosition(1);
          a.turn(this.angle);
          a.setPositionC(e(this.x + a.offsetMesh.x, this.y + a.offsetMesh.y))
      },
      del: function(a) {
          var b =
              this;
          w(this.objs, function(c) {
              c.id == a.id && (b.objs.splice(void 0, 1), b.count--)
          })
      },
      draw: function(a) {
          w(this.objs, function(a) {
              a.draw()
          })
      },
      move: function(a) {
          this.x += a.x || 0;
          this.y += a.y || 0;
          var b = this;
          w(this.objs, function(a) {
              a.setPositionC(e(b.x + a.offsetMesh.x, b.y + a.offsetMesh.y))
          })
      },
      turn: function(a) {
          if (0 != a) {
              this.angle %= 360;
              this.angle += a;
              var b = e(this.x, this.y),
                  c = this;
              w(this.objs, function(d) {
                  d.turn(a);
                  d.setPositionC(E(e(c.x + d.offsetMesh.x, c.y + d.offsetMesh.y), b, c.angle))
              })
          }
      },
      setAngle: function(a) {
          if (a != this.angle) {
              this.angle =
                  a %= 360;
              var b = e(this.x, this.y),
                  c = this;
              w(this.objs, function(d) {
                  d.setAngle(a);
                  d.setPositionC(E(e(c.x + d.offsetMesh.x, c.y + d.offsetMesh.y), b, c.angle))
              })
          }
      },
      setPosition: function(a) {
          if (this.x != a.x || this.y != a.y) {
              this.x = a.x || this.x;
              this.y = a.y || this.y;
              var b = this;
              w(this.objs, function(a) {
                  b.angle ? a.setPositionC(E(e(b.x + a.offsetMesh.x, b.y + a.offsetMesh.y), e(b.x, b.y), b.angle)) : a.setPositionC(e(b.x + a.offsetMesh.x, b.y + a.offsetMesh.y))
              })
          }
      },
      isDynamicIntersect: function(a) {
          if (3 > a.length) return !1;
          var b = !1;
          w(this.objs, function(c) {
              if (c.isDynamicIntersect(a)) return b =
                  c
          });
          return b
      },
      isStaticIntersect: function(a) {
          var b = !1;
          w(this.objs, function(c) {
              if (c.isStaticIntersect(a)) return b = c
          });
          return b
      },
      isIntersect: function(a) {
          var b = !1;
          w(this.objs, function(c) {
              if (c.isIntersect(a)) return b = c
          });
          return b
      }
  };
  this.game.newMesh = function(a) {
      return new gc(a)
  };
  this.camera.shake = function(a, b) {
      console.log("\u0424\u0443\u043d\u043a\u0446\u0438\u044f setAlpha \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u0432 \u043f\u043e\u043b\u043d\u043e\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u0438\u0433\u0440\u043e\u0432\u043e\u0433\u043e \u0434\u0432\u0438\u0436\u043a\u0430 PointJS \n\u041e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u044c\u0441\u044f \u0441\u043e \u0432\u0441\u0435\u043c\u0438 \u0432\u0435\u0440\u0441\u0438\u044f\u043c\u0438 \u0438 \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0441\u0442\u0438 \n\u043f\u043e\u043b\u043d\u0443\u044e \u0432\u0435\u0440\u0441\u0438\u044e \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u0434\u0432\u0438\u0436\u043a\u0430: https://mult-uroki.ru/pointjs/")
  };
  this.camera.shakeC = function(a, b) {
      console.log("\u0424\u0443\u043d\u043a\u0446\u0438\u044f camera.shake \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u0432 \u043f\u043e\u043b\u043d\u043e\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u0438\u0433\u0440\u043e\u0432\u043e\u0433\u043e \u0434\u0432\u0438\u0436\u043a\u0430 PointJS \n\u041e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u044c\u0441\u044f \u0441\u043e \u0432\u0441\u0435\u043c\u0438 \u0432\u0435\u0440\u0441\u0438\u044f\u043c\u0438 \u0438 \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0441\u0442\u0438 \n\u043f\u043e\u043b\u043d\u0443\u044e \u0432\u0435\u0440\u0441\u0438\u044e \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u0434\u0432\u0438\u0436\u043a\u0430: https://mult-uroki.ru/pointjs/")
  };
  this.camera.scale = function(a) {
      console.log("\u0424\u0443\u043d\u043a\u0446\u0438\u044f camera.scale \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u0432 \u043f\u043e\u043b\u043d\u043e\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u0438\u0433\u0440\u043e\u0432\u043e\u0433\u043e \u0434\u0432\u0438\u0436\u043a\u0430 PointJS \n\u041e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u044c\u0441\u044f \u0441\u043e \u0432\u0441\u0435\u043c\u0438 \u0432\u0435\u0440\u0441\u0438\u044f\u043c\u0438 \u0438 \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0441\u0442\u0438 \n\u043f\u043e\u043b\u043d\u0443\u044e \u0432\u0435\u0440\u0441\u0438\u044e \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u0434\u0432\u0438\u0436\u043a\u0430: https://mult-uroki.ru/pointjs/")
  };
  this.camera.scaleC = function(a) {
      console.log("\u0424\u0443\u043d\u043a\u0446\u0438\u044f camera.scaleC \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u0432 \u043f\u043e\u043b\u043d\u043e\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u0438\u0433\u0440\u043e\u0432\u043e\u0433\u043e \u0434\u0432\u0438\u0436\u043a\u0430 PointJS \n\u041e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u044c\u0441\u044f \u0441\u043e \u0432\u0441\u0435\u043c\u0438 \u0432\u0435\u0440\u0441\u0438\u044f\u043c\u0438 \u0438 \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0441\u0442\u0438 \n\u043f\u043e\u043b\u043d\u0443\u044e \u0432\u0435\u0440\u0441\u0438\u044e \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u0434\u0432\u0438\u0436\u043a\u0430: https://mult-uroki.ru/pointjs/")
  };
  this.camera.circling = function(a, b, c) {
      console.log("\u0424\u0443\u043d\u043a\u0446\u0438\u044f camera.circling \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u0432 \u043f\u043e\u043b\u043d\u043e\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u0438\u0433\u0440\u043e\u0432\u043e\u0433\u043e \u0434\u0432\u0438\u0436\u043a\u0430 PointJS \n\u041e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u044c\u0441\u044f \u0441\u043e \u0432\u0441\u0435\u043c\u0438 \u0432\u0435\u0440\u0441\u0438\u044f\u043c\u0438 \u0438 \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0441\u0442\u0438 \n\u043f\u043e\u043b\u043d\u0443\u044e \u0432\u0435\u0440\u0441\u0438\u044e \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u0434\u0432\u0438\u0436\u043a\u0430: https://mult-uroki.ru/pointjs/")
  };
  this.camera.circlingC = function(a, b, c) {
      console.log("\u0424\u0443\u043d\u043a\u0446\u0438\u044f camera.circlingC \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u0432 \u043f\u043e\u043b\u043d\u043e\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u0438\u0433\u0440\u043e\u0432\u043e\u0433\u043e \u0434\u0432\u0438\u0436\u043a\u0430 PointJS \n\u041e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u044c\u0441\u044f \u0441\u043e \u0432\u0441\u0435\u043c\u0438 \u0432\u0435\u0440\u0441\u0438\u044f\u043c\u0438 \u0438 \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0441\u0442\u0438 \n\u043f\u043e\u043b\u043d\u0443\u044e \u0432\u0435\u0440\u0441\u0438\u044e \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u0434\u0432\u0438\u0436\u043a\u0430: https://mult-uroki.ru/pointjs/")
  };
  this.camera.motion = function(a, b, c) {
      console.log("\u0424\u0443\u043d\u043a\u0446\u0438\u044f camera.motion \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u0432 \u043f\u043e\u043b\u043d\u043e\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u0438\u0433\u0440\u043e\u0432\u043e\u0433\u043e \u0434\u0432\u0438\u0436\u043a\u0430 PointJS \n\u041e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u044c\u0441\u044f \u0441\u043e \u0432\u0441\u0435\u043c\u0438 \u0432\u0435\u0440\u0441\u0438\u044f\u043c\u0438 \u0438 \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0441\u0442\u0438 \n\u043f\u043e\u043b\u043d\u0443\u044e \u0432\u0435\u0440\u0441\u0438\u044e \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u0434\u0432\u0438\u0436\u043a\u0430: https://mult-uroki.ru/pointjs/")
  };
  this.camera.motionC = function(a, b, c) {
      console.log("\u0424\u0443\u043d\u043a\u0446\u0438\u044f camera.motionC \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u0432 \u043f\u043e\u043b\u043d\u043e\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u0438\u0433\u0440\u043e\u0432\u043e\u0433\u043e \u0434\u0432\u0438\u0436\u043a\u0430 PointJS \n\u041e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u044c\u0441\u044f \u0441\u043e \u0432\u0441\u0435\u043c\u0438 \u0432\u0435\u0440\u0441\u0438\u044f\u043c\u0438 \u0438 \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0441\u0442\u0438 \n\u043f\u043e\u043b\u043d\u0443\u044e \u0432\u0435\u0440\u0441\u0438\u044e \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u0434\u0432\u0438\u0436\u043a\u0430: https://mult-uroki.ru/pointjs/")
  };
  this.camera.follow = function(a, b) {
      this.moveTimeC(a.getPositionC(), b || 10)
  };
  this.camera.move = function(a) {
      f.x += a.x || 0;
      f.y += a.y || 0
  };
  this.camera.moveTime = function(a, b) {
      b = b || 1;
      var c = e(f.x, f.y);
      this.move(e((a.x - c.x) / b, (a.y - c.y) / b))
  };
  this.camera.moveTimeC = function(a, b) {
      b = b || 1;
      var c = e(f.x + M, f.y + N);
      this.move(e((a.x - c.x) / b, (a.y - c.y) / b))
  };
  this.camera.setPosition = function(a) {
      wb(e(!1 !== a.x ? a.x : f.x, !1 !== a.y ? a.y : f.y))
  };
  this.camera.setPositionC = function(a) {
      wb(e(!1 !== a.x ? a.x - M : f.x, !1 !== a.y ? a.y - N : f.y))
  };
  this.camera.getPosition =
      function(a) {
          return a ? e(f.x + M, f.y + N) : e(f.x, f.y)
      };
  this.camera.getPositionC = function() {
      return e(f.x + M, f.y + N)
  };
  this.camera.getStaticBox = function() {
      return {
          x: f.x,
          y: f.y,
          w: m,
          h: p
      }
  };
  this.camera.getDynamicBox = function() {
      return [e(f.x, f.y), e(f.x + m, f.y), e(f.x + m, f.y + p), e(f.x, f.y + p)]
  };
  var wb = function(a) {
          f = e(a.x, a.y)
      },
      K = function(a) {
          g.restore();
          g.globalAlpha = t.globalAlpha;
          g.fillStyle = "black";
          g.strokeStyle = "black";
          g.msImageSmoothingEnabled = ya;
          g.imageSmoothingEnabled = ya
      },
      O = function(a, b) {
          g.save();
          var c = a.getPositionC();
          a.angle && (g.translate(-f.x + c.x, -f.y + c.y), g.rotate(G(a.angle)), g.translate(-c.x + f.x, -c.y + f.y));
          1 !== a.alpha && (g.globalAlpha = a.alpha);
          if (a.flip.x || a.flip.y) g.translate(-f.x + c.x, -f.y + c.y), g.scale(a.flip.x ? -1 : 1, a.flip.y ? -1 : 1), g.translate(-c.x + f.x, -c.y + f.y);
          a.shadowColor && (g.shadowBlur = a.shadowBlur, g.shadowColor = a.shadowColor, g.shadowOffsetX = a.shadowX, g.shadowOffsetY = a.shadowY);
          if ("EllipsObject" === a.type && !b) {
              c = a.w / 2;
              var d = a.h / 2,
                  h = e(-f.x + a.x, -f.y + a.y);
              g.translate(h.x, h.y);
              g.scale(c / d, 1);
              g.translate(-h.x, -h.y)
          }
      };
  this.system.setContextSettings = function(a) {
      g.save();
      for (var b in a) g[b] = a[b]
  };
  this.system.defaultSettings = function() {
      K()
  };
  this.game.clear = function() {
      g.clearRect(0, 0, m, p)
  };
  this.game.fill = function(a) {
      g.fillStyle = a;
      g.fillRect(0, 0, m, p)
  };
  var Ja = function(a, b, c, d, h, k, l) {
          if (!(3 > c.length)) {
              if (d && !(3 > c.length)) {
                  g.fillStyle = d;
                  d = -f.x + a;
                  var m = -f.y + b;
                  var u;
                  g.beginPath();
                  g.moveTo(d + c[0].x, m + c[0].y);
                  for (u = 1; u < c.length; u += 1) g.lineTo(d + c[u].x, m + c[u].y);
                  g.closePath();
                  g.fill()
              }
              for (d = 0; d < c.length; d += 1) m = d + 1 < c.length ?
                  d + 1 : 0, h && X(Na(c[d], e(a, b)), Na(c[m], e(a, b)), h, k), l && hb(Na(c[d], e(a, b)), l)
          }
      },
      Q = function(a) {
          a.x || (a.x = 0);
          a.y || (a.y = 0);
          a.w || (a.w = 0);
          a.h || (a.h = 0)
      };
  this.brush.drawPolygon = function(a) {
      var b = a.points || [],
          c = a.fillColor || !1,
          d = a.strokeColor || !1,
          e = a.strokeWidth || 1;
      a = a.pointColor || !1;
      if (!(3 > b.length)) {
          if (c && !(3 > b.length)) {
              g.fillStyle = c;
              c = -f.x;
              var k = -f.y;
              var l;
              g.beginPath();
              g.moveTo(c + b[0].x, k + b[0].y);
              for (l = 1; l < b.length; l += 1) g.lineTo(c + b[l].x, k + b[l].y);
              g.closePath();
              g.fill()
          }
          for (c = 0; c < b.length; c += 1) k = c + 1 < b.length ?
              c + 1 : 0, d && X(b[c], b[k], d, e), a && hb(b[c], a)
      }
  };
  this.brush.drawTriangle = function(a) {
      Q(a);
      if (a.x + a.w < f.x || a.x > f.x + m || a.y + a.h < f.y || a.y > f.y + p) return !1;
      Ja(a.x, a.y, [e(a.w / 2, 0), e(a.w, a.h), e(0, a.h)], a.fillColor, a.strokeColor, a.strokeWidth)
  };
  this.brush.drawTriangleS = function(a) {
      Q(a);
      if (0 > a.x + a.w || a.x > m || 0 > a.y + a.h || a.y > p) return !1;
      Ja(f.x + a.x, f.y + a.y, [e(a.w / 2, 0), e(a.w, a.h), e(0, a.h)], a.fillColor, a.strokeColor, a.strokeWidth)
  };
  var na = function(a, b, c, d, e, k, l, m, p) {
      g.textAlign = l;
      g.lineWidth = p;
      g.font = (k ? k + " " : "") + d + "px " +
          e;
      d = -f.x;
      e = -f.y;
      c && (g.fillStyle = c, g.fillText(b, d + a.x, e + a.y));
      m && (g.strokeStyle = m, g.strokeText(b, d + a.x, e + a.y))
  };
  this.brush.drawMultiText = function(a) {
      var b, c = a.text.split("\n");
      for (b = 0; b < c.length; b += 1) na(e(a.x, a.y + a.size * b), c[b], a.color || t.fillStyle, a.size || 10, a.font || t.font, a.style || !1, a.align || "left", a.strokeColor || !1, a.strokeWidth || 2)
  };
  this.brush.drawMultiTextS = function(a) {
      var b, c = a.text.split("\n"),
          d = a.size || 10;
      for (b = 0; b < c.length; b += 1) na(e(a.x + f.x, a.y + f.y + d * b), c[b], a.color || t.fillStyle, d || 10, a.font ||
          t.font, a.style || !1, a.align || "left", a.strokeColor || !1, a.strokeWidth || 2)
  };
  this.brush.drawText = function(a) {
      na(e(a.x || 0, a.y || 0), a.text, a.color || !1, a.size || 10, a.font || t.font, a.style || !1, a.align || "left", a.strokeColor || !1, a.strokeWidth || 2)
  };
  this.brush.drawTextS = function(a) {
      na(e((a.x || 0) + f.x, (a.y || 0) + f.y), a.text, a.color || t.fillStyle, a.size || 10, a.font || t.font, a.style || !1, a.align || "left", a.strokeColor || !1, a.strokeWidth || 2)
  };
  this.brush.drawTextLines = function(a) {
      if (a.lines) {
          var b, c = a.size || 10;
          for (b = 0; b < a.lines.length; b +=
              1) na(e(a.x || 0, (a.y || 0) + c * b), a.lines[b], a.color || t.fillStyle, c, a.font || t.font, a.style || !1, a.align || "left", a.strokeColor || !1, a.strokeWidth || 2)
      }
  };
  this.brush.drawTextLinesS = function(a) {
      if (a.lines) {
          var b, c = a.size || 10;
          for (b = 0; b < a.lines.length; b += 1) na(e((a.x || 0) + f.x, (a.y || 0) + f.y + c * b), a.lines[b], a.color || t.fillStyle, c, a.font || t.font, a.style || !1, a.align || "left", a.strokeColor || !1, a.strokeWidth || 2)
      }
  };
  var dc = function(a, b, c) {
          X(e(a.x - b, a.y), e(a.x + b, a.y), c, 2);
          X(e(a.x, a.y - b), e(a.x, a.y + b), c, 2)
      },
      V = function(a, b, c, d,
          e) {
          g.fillStyle = c;
          g.strokeStyle = d;
          d = -f.x;
          var h = -f.y;
          c && g.fillRect(a.x + d, a.y + h, b.w, b.h);
          e && (g.lineWidth = e, c = e / 2, g.strokeRect(a.x + d + c, a.y + h + c, b.w - e, b.h - e))
      };
  this.brush.drawRect = function(a) {
      Q(a);
      if (a.x + a.w < f.x || a.x > f.x + m || a.y + a.h < f.y || a.y > f.y + p) return !1;
      V(e(a.x, a.y), x(a.w, a.h), a.fillColor || !1, a.strokeColor || t.strokeStyle, a.strokeWidth || !1)
  };
  this.brush.drawRectS = function(a) {
      Q(a);
      if (0 > a.x + a.w || a.x > m || 0 > a.y + a.h || a.y > p) return !1;
      V(e(a.x + f.x, a.y + f.y), x(a.w, a.h), a.fillColor || !1, a.strokeColor || t.strokeStyle,
          a.strokeWidth || !1)
  };
  var hb = function(a, b) {
      (g.fillStyle = b) && g.fillRect(-f.x + a.x - 1, -f.y + a.y - 1, 2, 2)
  };
  this.brush.drawPoint = function(a) {
      Q(a);
      if (a.x < f.x || a.x > f.x + m || a.y < f.y || a.y > f.y + p) return !1;
      hb(e(a.x, a.y), a.fillColor || !1)
  };
  this.brush.drawPointS = function(a) {
      Q(a);
      if (0 > a.x || a.x > m || 0 > a.y || a.y > p) return !1;
      hb(e(a.x + f.x, a.y + f.y), a.fillColor || !1)
  };
  var gb = function(a, b, c, d, e, k) {
      g.fillStyle = d;
      g.strokeStyle = e;
      g.lineWidth = k;
      e = -f.x + a.x + k / 2;
      a = -f.y + a.y + k / 2;
      b.w -= +k;
      b.h -= +k;
      g.beginPath();
      g.moveTo(e + c, a);
      g.lineTo(e + b.w - c,
          a);
      g.quadraticCurveTo(e + b.w, a, e + b.w, a + c);
      g.lineTo(e + b.w, a + b.h - c);
      g.quadraticCurveTo(e + b.w, a + b.h, e + b.w - c, a + b.h);
      g.lineTo(e + c, a + b.h);
      g.quadraticCurveTo(e, a + b.h, e, a + b.h - c);
      g.lineTo(e, a + c);
      g.quadraticCurveTo(e, a, e + c, a);
      g.closePath();
      d && g.fill();
      k && g.stroke()
  };
  this.brush.drawRoundRect = function(a) {
      Q(a);
      if (a.x + a.w < f.x || a.x > f.x + m || a.y + a.h < f.y || a.y > f.y + p) return !1;
      gb(e(a.x, a.y), x(a.w, a.h), a.radius || 2, a.fillColor || !1, a.strokeColor || t.strokeStyle, a.strokeWidth || !1)
  };
  this.brush.drawRoundRectS = function(a) {
      Q(a);
      if (0 > a.x + a.w || a.x > m || 0 > a.y + a.h || a.y > p) return !1;
      gb(e(f.x + a.x, f.y + a.y), x(a.w, a.h), a.radius || 2, a.fillColor || !1, a.strokeColor || t.strokeStyle, a.strokeWidth || !1)
  };
  var va = function(a, b, c, d, e) {
      g.fillStyle = c;
      g.strokeStyle = d;
      g.lineWidth = e;
      d = -f.x + b + (e ? e / 2 : 0);
      var h = -f.y + b + (e ? e / 2 : 0);
      g.beginPath();
      g.arc(a.x + d, a.y + h, b, 0, 2 * Math.PI, !0);
      g.closePath();
      c && g.fill();
      e && g.stroke()
  };
  this.brush.drawCircle = function(a) {
      Q(a);
      var b = 2 * a.radius;
      if (a.x + b < f.x || a.x > f.x + m || a.y + b < f.y || a.y > f.y + p) return !1;
      va(e(a.x, a.y), a.radius, a.fillColor ||
          !1, a.strokeColor || t.strokeStyle, a.strokeWidth || !1)
  };
  this.brush.drawCircleS = function(a) {
      Q(a);
      var b = 2 * a.radius;
      if (0 > a.x + b || a.x > m || 0 > a.y + b || a.y > p) return !1;
      va(e(a.x + f.x, a.y + f.y), a.radius, a.fillColor || !1, a.strokeColor || t.strokeStyle, a.strokeWidth || !1)
  };
  var X = function(a, b, c, d) {
      g.strokeStyle = c;
      g.lineWidth = d;
      c = -f.x;
      d = -f.y;
      g.beginPath();
      g.moveTo(c + a.x, d + a.y);
      g.lineTo(c + b.x, d + b.y);
      g.closePath();
      g.stroke()
  };
  this.brush.drawLineAngle = function(a) {
      var b = E(e(a.x + a.length, a.y), e(a.x, a.y), a.angle);
      X(e(a.x, a.y), e(b.x,
          b.y), a.strokeColor || t.strokeStyle, a.strokeWidth || 1)
  };
  this.brush.drawLineAngleS = function(a) {
      var b = E(e(f.x + a.x + a.length, f.y + a.y), e(f.x + a.x, f.y + a.y), a.angle);
      X(e(f.x + a.x, f.y + a.y), e(b.x, b.y), a.strokeColor || t.strokeStyle, a.strokeWidth || 1)
  };
  this.brush.drawLine = function(a) {
      X(e(a.x1, a.y1), e(a.x1 + a.x2, a.y1 + a.y2), a.strokeColor || t.strokeStyle, a.strokeWidth || 1)
  };
  this.brush.drawLineS = function(a) {
      X(e(f.x + a.x1, f.y + a.y1), e(f.x + a.x2, f.y + a.y2), a.strokeColor || t.strokeStyle, a.strokeWidth || 1)
  };
  this.brush.drawLineA = function(a) {
      X(e(a.x1,
          a.y1), e(a.x2, a.y2), a.strokeColor || t.strokeStyle, a.strokeWidth || 1)
  };
  this.brush.drawLineAS = function(a) {
      X(e(a.x1 + f.x, a.y1 + f.y), e(a.x2 + f.x, a.y2 + f.y), a.strokeColor || t.strokeStyle, a.strokeWidth || 1)
  };
  this.brush.drawEllips = function(a) {
      Q(a);
      if (a.x + a.w < f.x || a.x > f.x + m || a.y + a.h < f.y || a.y > f.y + p) return !1;
      var b = a.w / 2,
          c = a.h / 2,
          d = e(-f.x + a.x, -f.y + a.y);
      g.save();
      g.translate(d.x, d.y);
      g.scale(b / c, 1);
      g.translate(-d.x, -d.y);
      va(e(a.x, a.y), c, a.fillColor, a.strokeColor, a.strokeWidth);
      g.restore()
  };
  this.brush.drawEllipsS = function(a) {
      Q(a);
      if (0 > a.x + a.w || a.x > m || 0 > a.y + a.h || a.y > p) return !1;
      var b = a.w / 2,
          c = a.h / 2,
          d = e(a.x, a.y);
      g.save();
      g.translate(d.x, d.y);
      g.scale(b / c, 1);
      g.translate(-d.x, -d.y);
      va(e(f.x + a.x, f.y + a.y), c, a.fillColor, a.strokeColor, a.strokeWidth);
      g.restore()
  };
  this.brush.drawImageS = function(a) {
      if (a.file)
          if (v(l[a.file])) {
              if (l[a.file].loaded) {
                  var b = a.x || 0,
                      c = a.y || 0;
                  if (a.w && !a.h) {
                      var d = a.w / l[a.file].w;
                      var e = a.w;
                      var f = l[a.file].h * d
                  } else !a.w && a.h ? (d = a.h / l[a.file].h, f = a.h, e = l[a.file].w * d) : a.w && a.h ? (e = a.w, f = a.h) : (e = l[a.file].w, f = l[a.file].h);
                  a.scale && (e *= a.scale, f *= a.scale);
                  if (0 > b + e || b > m || 0 > c + f || c > p) return !1;
                  g.drawImage(l[a.file].img, 0, 0, l[a.file].w, l[a.file].h, b, c, e, f)
              }
          } else l[a.file] = {
              loaded: !1
          }, b = k.document.createElement("img"), b.onload = function() {
              l[a.file].loaded = !0;
              l[a.file].img = this;
              l[a.file].w = this.width;
              l[a.file].h = this.height;
              B.load()
          }, b.src = a.file, B.add()
  };
  this.brush.drawImage = function(a) {
      if (a.file)
          if (v(l[a.file])) {
              if (l[a.file].loaded) {
                  var b = a.x || 0,
                      c = a.y || 0;
                  if (a.w && !a.h) {
                      var d = a.w / l[a.file].w;
                      var e = a.w;
                      var n = l[a.file].h * d
                  } else !a.w &&
                      a.h ? (d = a.h / l[a.file].h, n = a.h, e = l[a.file].w * d) : a.w && a.h ? (e = a.w, n = a.h) : (e = l[a.file].w, n = l[a.file].h);
                  a.scale && (e *= a.scale, n *= a.scale);
                  if (b + e < f.x || b > f.x + m || c + n < f.y || c > f.y + p) return !1;
                  g.drawImage(l[a.file].img, 0, 0, l[a.file].w, l[a.file].h, -f.x + b, -f.y + c, e, n)
              }
          } else l[a.file] = {}, l[a.file].loaded = !1, b = k.document.createElement("img"), b.onload = function() {
              l[a.file].loaded = !0;
              l[a.file].img = this;
              l[a.file].w = this.width;
              l[a.file].h = this.height;
              B.load()
          }, b.src = a.file, B.add()
  };
  this.brush.onContext = function(a) {
      a(g)
  };
  this.brush.getPixelColor = function(a, b) {
      var c = g.getImageData(a, b, 1, 1).data;
      return "rgb(" + c[0] + ", " + c[1] + ", " + c[2] + ")"
  };
  this.brush.setPixelColor = function(a, b, c) {
      var d = g.createImageData(1, 1);
      d.data[0] = c.r || d.data[0];
      d.data[1] = c.g || d.data[1];
      d.data[2] = c.b || d.data[2];
      d.data[3] = c.a || 255;
      g.putImageData(d, a, b)
  };
  this.brush.onPixel = function(a, b, c) {
      var d = g.getImageData(a, b, 1, 1),
          e = {
              r: d.data[0],
              g: d.data[1],
              b: d.data[2],
              a: d.data[3] ? d.data[3] : 255
          };
      c(e);
      d.data[0] = e.r;
      d.data[1] = e.g;
      d.data[2] = e.b;
      d.data[3] = e.a;
      g.putImageData(d,
          a, b)
  };
  this.brush.onPixels = function(a, b, c, d, e) {
      c = g.getImageData(a, b, c, d);
      var f;
      d = 0;
      for (f = c.data.length; d < f; d += 4) {
          var h = {
              r: c.data[d],
              g: c.data[d + 1],
              b: c.data[d + 2],
              a: c.data[d + 3] ? c.data[d + 3] : 255
          };
          e(h);
          c.data[d] = h.r;
          c.data[d + 1] = h.g;
          c.data[d + 2] = h.b;
          c.data[d + 3] = h.a
      }
      g.putImageData(c, a, b)
  };
  this.brush.onRawPixels = function(a, b, c, d, e) {
      c = g.getImageData(a, b, c, d);
      e(c.data, c.data.length);
      g.putImageData(c, a, b)
  };
  var R = k.AudioContext || k.webkitAudioContext || !1;
  (R = R ? new R : !1) && R.listener.setPosition(0, 0, 0);
  var S = function(a,
      b) {
      R || Y('module "wAudio" is not supported! use a "audio"');
      this.vol = b && 1 >= b && 0 < b ? b : 1;
      this.loadPLay = this.nextPlay = this.loaded = this.playing = !1;
      this.pausedTime = this.duration = this.startTime = 0;
      var c = this,
          d = new XMLHttpRequest;
      d.open("GET", a, !0);
      d.responseType = "arraybuffer";
      d.onload = function(a) {
          R.decodeAudioData(this.response, function(a) {
              c.wABuffer = a;
              c.duration = c.wABuffer.duration;
              c.wAGain = R.createGain();
              c.wAGain.gain.value = c.vol;
              c.wAPanner = R.createPanner();
              c.wAPanner.setPosition(0, 0, 1);
              c.wAPanner.panningModel =
                  "equalpower";
              B.load();
              c.loaded = !0;
              c.loadPlay && c.replay()
          }, function(a) {
              Y("error in wAudio.newAudio : error decoding file", a)
          })
      };
      a ? d.send() : Y("error in wAudio.newAudio : Where is file?");
      B.add()
  };
  S.prototype.play = function(a) {
      if (!this.loaded) this.loadPlay = !0;
      else if (!this.playing) {
          this.playing = !0;
          this.wASource = R.createBufferSource();
          this.wASource.buffer = this.wABuffer;
          this.wAListener = R.destination;
          this.wASource.connect(this.wAGain);
          this.wAGain.connect(this.wAPanner);
          this.wAPanner.connect(this.wAListener);
          this.wASource.start(0, this.pausedTime, this.duration);
          this.startTime = R.currentTime;
          var b = this;
          this.wASource.onended = function() {
              b.playing = !1;
              b.startTime = 0;
              b.pausedTime = 0;
              b.nextPlay && b.nextPlay.replay()
          }
      }
  };
  S.prototype.replay = function(a) {
      this.loaded ? (this.stop(), this.play()) : this.loadPlay = !0
  };
  S.prototype.stop = function() {
      this.pause();
      this.pausedTime = this.startTime = 0
  };
  S.prototype.pause = function() {
      if (this.playing) {
          this.pausedTime = this.getProgress();
          this.playing = !1;
          this.wASource.stop(0);
          var a = this;
          this.wASource.onended =
              function() {
                  a.playing = !1
              }
      }
  };
  S.prototype.getProgress = function() {
      return this.playing ? R.currentTime - this.startTime + this.pausedTime : this.pausedTime
  };
  S.prototype.playPause = function() {
      this.playing ? this.pause() : this.play()
  };
  S.prototype.setNextPlay = function(a) {
      this.nextPlay = a
  };
  S.prototype.setVolume = function(a) {
      this.vol = a && 1 >= a && 0 < a ? a : this.vol;
      this.wAGain.gain.value = this.vol
  };
  S.prototype.getVolume = function() {
      return this.vol
  };
  S.prototype.setSide = function(a) {
      this.side = a;
      this.wAPanner && this.wAPanner.setPosition(this.side,
          0, 1 - Math.abs(this.side))
  };
  S.prototype.getSide = function() {
      return this.side
  };
  this.wAudio.newAudio = function(a, b) {
      return new S(a, b)
  };
  var ca = function(a, b) {
      var c, d = k.document.createElement("audio");
      if ("string" == typeof a) {
          var e = k.document.createElement("source");
          e.src = a;
          d.appendChild(e)
      } else {
          var f = 0;
          for (c = a.length; f < c; f += 1) e = k.document.createElement("source"), e.src = a[f], d.appendChild(e)
      }
      this.vol = b && 1 >= b && 0 < b ? b : 1;
      this.playing = 0;
      this.audio = d;
      this.nextPlay = this.loaded = !1;
      d.volume = this.vol;
      var g = this;
      d.onloadeddata =
          function() {
              g.loaded = !0;
              B.load()
          };
      d.onended = function() {
          g.playing = !1;
          g.nextPlay && g.nextPlay.play()
      };
      d.load();
      B.add()
  };
  ca.prototype.play = function(a) {
      this.playing || (a && (this.vol = a && 1 >= a && 0 < a ? a : this.vol, this.audio.volume = this.vol), this.playing = !0, this.audio.play())
  };
  ca.prototype.replay = function(a) {
      a && this.setVolume(a);
      this.playing = !0;
      this.audio.currentTime = 0;
      this.audio.play()
  };
  ca.prototype.stop = function() {
      this.playing && (this.playing = !1, this.audio.pause(), this.audio.currentTime = 0)
  };
  ca.prototype.pause = function() {
      this.playing &&
          (this.playing = !1, this.audio.pause())
  };
  ca.prototype.playPause = function() {
      this.playing ? this.pause() : this.play()
  };
  ca.prototype.setNextPlay = function(a) {
      this.nextPlay = a
  };
  ca.prototype.setVolume = function(a) {
      this.vol = a && 1 >= a && 0 < a ? a : this.vol;
      this.audio.volume = this.vol
  };
  ca.prototype.getVolume = function() {
      return this.vol
  };
  this.audio.newAudio = function(a, b) {
      return new ca(a, b)
  };
  var ib = [],
      qa = [];
  this.zList.useZValue = function() {
      this.update = function() {
          qa.length = 0;
          w(ib, function(a) {
              a.isInCamera() && qa.push(a)
          });
          qa.sort(function(a,
              b) {
              return a.z - b.z
          })
      }
  };
  this.zList.useYValue = function() {
      this.update = function() {
          qa.length = 0;
          w(ib, function(a) {
              a.isInCamera() && qa.push(a)
          });
          qa.sort(function(a, b) {
              return a.y + a.h - (b.y + b.h)
          })
      }
  };
  this.zList.add = function(a) {
      ib.push(a)
  };
  this.zList.init = function(a) {
      w(a, function(a) {
          A.zList.add(a)
      })
  };
  this.zList.draw = function(a) {
      A.OOP.drawArr(qa, a)
  };
  this.zList.del = function(a) {
      A.OOP.delObject(ib, a)
  };
  this.zList.useYValue();
  var B = {
      count: 0,
      loaded: 0,
      errored: 0,
      add: function() {
          this.count += 1
      },
      load: function() {
          this.loaded +=
              1
      },
      error: function() {
          this.errored += 1
      }
  };
  this.resources.isLoaded = function() {
      console.log("\u0424\u0443\u043d\u043a\u0446\u0438\u044f isLoaded \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u0432 \u043f\u043e\u043b\u043d\u043e\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u0438\u0433\u0440\u043e\u0432\u043e\u0433\u043e \u0434\u0432\u0438\u0436\u043a\u0430 PointJS \n\u041e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u044c\u0441\u044f \u0441\u043e \u0432\u0441\u0435\u043c\u0438 \u0432\u0435\u0440\u0441\u0438\u044f\u043c\u0438 \u0438 \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0441\u0442\u0438 \n\u043f\u043e\u043b\u043d\u0443\u044e \u0432\u0435\u0440\u0441\u0438\u044e \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u0434\u0432\u0438\u0436\u043a\u0430: https://mult-uroki.ru/pointjs/")
  };
  this.resources.getProgress = function() {
      console.log("\u0424\u0443\u043d\u043a\u0446\u0438\u044f getProgress \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u0432 \u043f\u043e\u043b\u043d\u043e\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u0438\u0433\u0440\u043e\u0432\u043e\u0433\u043e \u0434\u0432\u0438\u0436\u043a\u0430 PointJS \n\u041e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u044c\u0441\u044f \u0441\u043e \u0432\u0441\u0435\u043c\u0438 \u0432\u0435\u0440\u0441\u0438\u044f\u043c\u0438 \u0438 \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0441\u0442\u0438 \n\u043f\u043e\u043b\u043d\u0443\u044e \u0432\u0435\u0440\u0441\u0438\u044e \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u0434\u0432\u0438\u0436\u043a\u0430: https://mult-uroki.ru/pointjs/")
  };
  this.levels.forStringArray = function(a, b) {
      console.log("\u0424\u0443\u043d\u043a\u0446\u0438\u044f levels.forStringArray \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u0432 \u043f\u043e\u043b\u043d\u043e\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u0438\u0433\u0440\u043e\u0432\u043e\u0433\u043e \u0434\u0432\u0438\u0436\u043a\u0430 PointJS \n\u041e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u044c\u0441\u044f \u0441\u043e \u0432\u0441\u0435\u043c\u0438 \u0432\u0435\u0440\u0441\u0438\u044f\u043c\u0438 \u0438 \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0441\u0442\u0438 \n\u043f\u043e\u043b\u043d\u0443\u044e \u0432\u0435\u0440\u0441\u0438\u044e \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u0434\u0432\u0438\u0436\u043a\u0430: https://mult-uroki.ru/pointjs/")
  };
  this.levels.newLevelFromJSON = function(a, b) {
      console.log("\u0424\u0443\u043d\u043a\u0446\u0438\u044f levels.newLevelFromJSON \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u0432 \u043f\u043e\u043b\u043d\u043e\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u0438\u0433\u0440\u043e\u0432\u043e\u0433\u043e \u0434\u0432\u0438\u0436\u043a\u0430 PointJS \n\u041e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u044c\u0441\u044f \u0441\u043e \u0432\u0441\u0435\u043c\u0438 \u0432\u0435\u0440\u0441\u0438\u044f\u043c\u0438 \u0438 \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0441\u0442\u0438 \n\u043f\u043e\u043b\u043d\u0443\u044e \u0432\u0435\u0440\u0441\u0438\u044e \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u0434\u0432\u0438\u0436\u043a\u0430: https://mult-uroki.ru/pointjs/")
  };
  this.levels.newEmptyLevel = function(a) {
      console.log("\u0424\u0443\u043d\u043a\u0446\u0438\u044f levels.newEmptyLevel \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u0432 \u043f\u043e\u043b\u043d\u043e\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u0438\u0433\u0440\u043e\u0432\u043e\u0433\u043e \u0434\u0432\u0438\u0436\u043a\u0430 PointJS \n\u041e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u044c\u0441\u044f \u0441\u043e \u0432\u0441\u0435\u043c\u0438 \u0432\u0435\u0440\u0441\u0438\u044f\u043c\u0438 \u0438 \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0441\u0442\u0438 \n\u043f\u043e\u043b\u043d\u0443\u044e \u0432\u0435\u0440\u0441\u0438\u044e \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u0434\u0432\u0438\u0436\u043a\u0430: https://mult-uroki.ru/pointjs/")
  };
  var hc = 0,
      ic = 0,
      Gb = 0,
      jc = !1;
  this.system.initFPSCheck = function() {
      jc || (jc = !0, n.addEvent("postLoop", "fpsCheckUpdate", function() {
          Gb += 1;
          1E3 <= I - ic && (hc = Gb, Gb = 0, ic = I)
      }))
  };
  this.system.getFPS = function() {
      return hc
  };
  var jb = this.filters;
  jb.setCSSFilter = function(a, b) {
      var c = (b ? b.canvas : q).style,
          d = "";
      D(a, function(a, b) {
          d += " " + b + "(" + a + ")"
      });
      c.OFilter = c.MozFilter = c.WebkitFilter = c.filter = d
  };
  jb.clearCSSFilter = function(a) {
      a = (a ? a.canvas : q).style;
      a.OFilter = a.MozFilter = a.WebkitFilter = a.filter = "none"
  };
  jb.setCSSTransform = function(a,
      b) {
      var c = (b ? b.canvas : q).style,
          d = "perspective(" + m + "px)";
      D(a, function(a, b) {
          d += " " + b + "(" + a + ")"
      });
      c.transform = c.MozTransform = c.WebkitTransform = d
  };
  jb.clearCSSTransform = function(a) {
      a = (a ? a.canvas : q).style;
      a.transform = a.MozTransform = a.WebkitTransform = "none"
  };
  this.OOP.newRever = function(a, b, c) {
      var d = function(a, b, c) {
          this.min = a;
          this.max = b;
          this.step = c;
          this.value = a;
          this.to = c
      };
      d.prototype = {
          update: function() {
              var a = this.value;
              this.value <= this.min ? this.to = this.step : this.value >= this.max && (this.to = -this.step);
              this.value +=
                  this.to;
              return a
          },
          getValue: function() {
              return this.value
          },
          setValue: function(a) {
              this.value = parseFloat(a)
          },
          setStep: function(a) {
              this.step = a
          },
          getStep: function() {
              return this.step
          }
      };
      return new d(a, b, c)
  };
  var kc = {};
  this.OOP.once = function(a, b) {
      kc[a] || (kc[a] = !0, b())
  };
  this.OOP.newTimer = function(a, b) {
      if (0 >= a) return fa("error in system.newTimer : variable < 0, Timer is not created");
      var c = {
          time: 0 < a ? a : 1E3,
          func: b,
          startTime: !1,
          ending: !1,
          start: function() {
              this.ending || this.startTime || (this.startTime = I)
          },
          run: function() {
              !this.ending &&
                  this.startTime && I - this.startTime >= this.time && (this.func(), this.ending = !0)
          },
          end: function() {
              this.ending || (this.ending = !0, this.func())
          },
          restart: function(a) {
              this.startTime || this.start();
              if (this.ending) {
                  if (a && 0 >= a) return fa("error in Timer.restart : variable < 0");
                  a && (this.time = a);
                  this.ending = !1;
                  this.startTime = I
              }
          },
          stop: function() {
              this.ending || (this.ending = !0)
          }
      };
      n.addEvent("postLoop", "timer" + ba(-100, 100) * ba(-100, 100) + I, function() {
          c.run()
      });
      return c
  };
  this.memory.local = {
      storage: k.localStorage,
      clear: function() {
          this.storage.clear()
      },
      save: function(a, b) {
          this.storage.setItem(a, b)
      },
      saveAsObject: function(a, b) {
          var c = JSON.stringify(b);
          this.storage.setItem(a, c)
      },
      loadAsObject: function(a) {
          return JSON.parse(this.storage.getItem(a) || "false")
      },
      load: function(a) {
          return this.storage.getItem(a)
      },
      loadAsNumber: function(a) {
          return parseFloat(this.storage.getItem(a))
      }
  };
  this.memory.temp = {
      values: {},
      save: function(a, b) {
          this.values[a] = b
      },
      load: function(a) {
          return this.values[a]
      },
      loadAsNumber: function(a) {
          return parseFloat(this.values[a])
      }
  };
  k.addEventListener("load",
      function() {
          if (g) {
              for (var a in t) g[a] = t[a];
              g.save()
          }
          n.runEvent("onload");
          n.loaded = !0;
          F || (k.document.body.style.overflow = "hidden");
          "function" === typeof POINTJS_USER_ONLOAD && POINTJS_USER_ONLOAD();
          return !1
      });
  k.addEventListener("blur", function() {
      if (da) return n.runEvent("gameBlur"), !1
  });
  k.addEventListener("focus", function() {
      if (!da) return k.document.activeElement.blur(), k.focus(), n.runEvent("gameFocus"), !1
  });
  k.addEventListener("resize", function() {
      n.runEvent("gameResize");
      g && (g.textBaseline = t.textBaseline,
          m /= 1, p /= 1, M = m / 2, N = p / 2, g.scale(1, 1));
      return !1
  });
  (F ? r : k).addEventListener("click", function() {
      k.document.activeElement && k.document.activeElement.blur();
      k.focus()
  });
  if ("undefined" !== typeof POINTJS_LOADED_DOM_IGNORE) k.onload();
  "undefined" !== typeof POINTJS_ENGINE_CREATED_EVENT && POINTJS_ENGINE_CREATED_EVENT(this);
  k._GLOGAL_POINT_JS = this
};