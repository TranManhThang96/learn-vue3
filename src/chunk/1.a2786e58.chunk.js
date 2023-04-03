(this.webpackJsonpplatform6 = this.webpackJsonpplatform6 || []).push([[1], {
  259: function (t, e, n) {
    "use strict";
    n.d(e, "c", (function () {
      return a;
    }
    )),
      n.d(e, "b", (function () {
        return i;
      }
      )),
      n.d(e, "a", (function () {
        return c;
      }
      ));
    var r = n(45)
      , o = window.matchMedia("(orientation: landscape)").matches
      , a = function (t) {
        var e = [];
        return Object(r.forEach)(Object(r.keys)(t), (function (n) {
          return e.push("".concat(n, "=").concat(encodeURIComponent(t[n])));
        }
        )),
          Object(r.join)(e, "&");
      }
      , i = function (t, e, n) {
        var o = Object(r.cloneDeep)(t);
        return o[e] = n,
          o;
      }
      , c = function (t) {
        return t && o;
      };
  },
  262: function (t, e, n) {
    "use strict";
    n.d(e, "e", (function () {
      return s;
    }
    )),
      n.d(e, "a", (function () {
        return p;
      }
      )),
      n.d(e, "c", (function () {
        return f;
      }
      )),
      n.d(e, "b", (function () {
        return m;
      }
      )),
      n.d(e, "d", (function () {
        return d;
      }
      ));
    var r = n(25)
      , o = function (t, e) {
        try {
          if (null === t || isNaN(t))
            return "";
          var n = t.toString().split(".")[1] ? t.toFixed(e.precision).replace(/^0+(?!\.)|(?:\.|(\..*?))0+$/gm, "$1").replace(/\B(?=(\d{3})+(?!\d).)/g, ",") : t.toLocaleString("en");
          return "".concat(e.currencySymbol, " ").concat(n);
        } catch (r) {
          return console.warn("Currency object is not valid", r),
            String(t);
        }
      }
      , a = function (t) {
        return t.wallets;
      }
      , i = function (t) {
        return t.registry.data.currenciesInfo;
      }
      , c = function (t) {
        return t.registry.data.partnerConfig;
      }
      , l = Object(r.a)((function (t) {
        return t.account.userInfo;
      }
      ), (function (t) {
        return !!t && (t.isDemo && t.isDemoActive);
      }
      ))
      , u = Object(r.a)(l, (function (t) {
        return function (e) {
          return t ? e.baseCurrency || e.displayCurrency : e.displayCurrency || e.baseCurrency;
        };
      }
      ))
      , s = Object(r.a)(a, i, c, u, (function (t, e, n, r) {
        return t ? e[r(t)].currencySymbol : e[n.baseCurrency] ? e[n.baseCurrency].currencySymbol : "$";
      }
      ))
      , d = Object(r.a)(a, i, c, u, (function (t, e, n, r) {
        return t ? e[r(t)].precision : e[n.baseCurrency] ? e[n.baseCurrency].precision : "2";
      }
      ))
      , p = Object(r.a)(s, d, (function (t, e) {
        return function (n) {
          return o(n, {
            currencySymbol: t,
            precision: e
          });
        };
      }
      ))
      , f = Object(r.a)(s, (function (t) {
        return function (e) {
          return "".concat(t, " ").concat(e);
        };
      }
      ))
      , m = Object(r.a)(i, (function (t) {
        return function (e, n) {
          var r = t[n];
          return "" === e ? "" : "string" === typeof e ? o(parseFloat(e), r) : Number.isNaN(e) ? String(e) : o(e, r);
        };
      }
      ));
  },
  264: function (t, e, n) {
    "use strict";
    var r = n(58)
      , o = n(88);
    function a() {
      var t = Object(r.a)(["\n\tleft: 62px;\n"]);
      return a = function () {
        return t;
      }
        ,
        t;
    }
    function i() {
      var t = Object(r.a)(["\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tz-index: ", ";\n\tdisplay: block;\n\tfloat: left;\n"]);
      return i = function () {
        return t;
      }
        ,
        t;
    }
    var c = o.c.div(i(), (function (t) {
      var e;
      return null !== (e = t.zIndex) && void 0 !== e ? e : 40;
    }
    ));
    Object(o.c)(c)(a());
    e.a = c;
  },
  272: function (t, e, n) {
    "use strict";
    var r = n(89)
      , o = n(58)
      , a = n(2)
      , i = n.n(a);
    function c() {
      var t = Object(o.a)(["\n  position: absolute;\n  top: ", "px;\n  right: 10px;\n  cursor: pointer;\n  z-index: 999;\n"]);
      return c = function () {
        return t;
      }
        ,
        t;
    }
    var l = n(88).c.div(c(), (function (t) {
      return t.top;
    }
    ));
    e.a = function (t) {
      var e = Object(a.useState)(!1)
        , n = Object(r.a)(e, 2)
        , o = n[0]
        , c = n[1]
        , u = o ? t.colors.primary : t.colors.secondaryText;
      return i.a.createElement(l, {
        id: "close-btn__sidebar-panel",
        top: t.top ? t.top : 10,
        onClick: t.onClick,
        onMouseEnter: function () {
          return c(!0);
        },
        onMouseLeave: function () {
          return c(!1);
        }
      }, i.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "12",
        height: "12",
        viewBox: "0 0 12 12"
      }, i.a.createElement("g", {
        fill: "none",
        fillRule: "evenodd",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, i.a.createElement("g", {
        stroke: u,
        strokeWidth: "2"
      }, i.a.createElement("g", null, i.a.createElement("g", null, i.a.createElement("g", null, i.a.createElement("path", {
        d: "M0 0L10 10M0 10L10 0",
        transform: "translate(-526 -104) translate(185 94) translate(341 10) translate(1 1)"
      }))))))));
    };
  },
  274: function (t, e, n) {
    "use strict";
    var r = n(89)
      , o = n(2)
      , a = n.n(o);
    e.a = function (t) {
      var e = t.src
        , n = t.placeholderSrc
        , i = t.klass
        , c = t.alt
        , l = Object(o.useState)(null)
        , u = Object(r.a)(l, 2)
        , s = u[0]
        , d = u[1]
        , p = Object(o.useState)(!1)
        , f = Object(r.a)(p, 2)
        , m = f[0]
        , b = f[1];
      return Object(o.useEffect)((function () {
        d(e);
      }
      ), [e]),
        a.a.createElement("img", {
          className: i,
          style: {
            visibility: m ? "visible" : "hidden"
          },
          alt: c,
          src: s,
          onError: function () {
            return d(n);
          },
          onLoad: function () {
            return b(!0);
          }
        });
    };
  },
  275: function (t, e, n) {
    t.exports = n.p + "static/media/asset-placeholder.e50a8619.svg";
  },
  277: function (t, e, n) {
    "use strict";
    n.d(e, "f", (function () {
      return O;
    }
    )),
      n.d(e, "e", (function () {
        return y;
      }
      )),
      n.d(e, "g", (function () {
        return j;
      }
      )),
      n.d(e, "b", (function () {
        return E;
      }
      )),
      n.d(e, "c", (function () {
        return w;
      }
      )),
      n.d(e, "h", (function () {
        return C;
      }
      )),
      n.d(e, "i", (function () {
        return k;
      }
      )),
      n.d(e, "k", (function () {
        return M;
      }
      )),
      n.d(e, "j", (function () {
        return T;
      }
      )),
      n.d(e, "a", (function () {
        return S;
      }
      )),
      n.d(e, "d", (function () {
        return L;
      }
      ));
    var r = n(58)
      , o = n(88);
    function a() {
      var t = Object(r.a)(["\n  color: ", ";\n"]);
      return a = function () {
        return t;
      }
        ,
        t;
    }
    function i() {
      var t = Object(r.a)([""]);
      return i = function () {
        return t;
      }
        ,
        t;
    }
    function c() {
      var t = Object(r.a)(["\n          font-size: ", "px;\n        "]);
      return c = function () {
        return t;
      }
        ,
        t;
    }
    function l() {
      var t = Object(r.a)([""]);
      return l = function () {
        return t;
      }
        ,
        t;
    }
    function u() {
      var t = Object(r.a)(["\n          height: ", "px;\n        "]);
      return u = function () {
        return t;
      }
        ,
        t;
    }
    function s() {
      var t = Object(r.a)(["\n  color: ", ";\n  font-weight: 500;\n  ", "\n  ", "\n"]);
      return s = function () {
        return t;
      }
        ,
        t;
    }
    function d() {
      var t = Object(r.a)(["\n  display: flex;\n  height: 35px;\n  line-height: 35px;\n  // opacity: 0.5;\n  font-size: 14px;\n  letter-spacing: normal;\n  cursor: pointer;\n\n  color: #9fabbd;\n  opacity: ", ";\n  background-color: ", ";\n\n  img {\n    margin: 0 12px 0 10px;\n    width: 24px;\n    height: 24px;\n    align-self: center;\n  }\n\n  span {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    font-size: 12px;\n  }\n\n  span:nth-of-type(1) {\n    flex: 0 1 110px;\n    padding-right: 15px;\n    font-size: 14px;\n    ", "\n  }\n\n  span:nth-of-type(2) {\n    flex: 0 0 73px;\n    padding-right: 15px;\n  }\n\n  span:nth-of-type(3) {\n    flex: 0 0 60px;\n  }\n\n  span:nth-of-type(4) {\n    flex: 0 0 50px;\n  }\n\n  span:nth-of-type(5) {\n    display: flex;\n    flex: 0 0 26px;\n    align-items: center;\n  }\n\n  &:active,\n  &:hover,\n  &.active {\n    background-color: #0f1721;\n  }\n"]);
      return d = function () {
        return t;
      }
        ,
        t;
    }
    function p() {
      var t = Object(r.a)(["\n  display: flex;\n  font-family: Roboto;\n  font-weight: bold;\n  font-size: 10px;\n  line-height: 12px;\n  text-transform: uppercase;\n  height: 32px;\n  align-items: center;\n  color: #8491a3;\n\n  span:nth-of-type(1) {\n    flex: 0 0 73px;\n    margin-left: ", ";\n  }\n\n  span:nth-of-type(2) {\n    flex: 0 0 60px;\n  }\n\n  span:nth-of-type(3) {\n    flex: 0 0 50px;\n  }\n"]);
      return p = function () {
        return t;
      }
        ,
        t;
    }
    function f() {
      var t = Object(r.a)(["\n  display: ", ";\n  position: absolute;\n  ", ";\n  left: 100%;\n  z-index: 43;\n  min-width: 171px;\n  min-height: 35px;\n  max-height: 400px;\n  overflow-y: auto;\n  border-radius: 2px;\n  box-shadow: 0 2px 10px 0 rgba(20, 31, 44, 0.8);\n  background-color: #1e2836;\n"]);
      return f = function () {
        return t;
      }
        ,
        t;
    }
    function m() {
      var t = Object(r.a)(["\n  position: absolute;\n  z-index: 41;\n  top: 50px;\n  width: 171px;\n  min-height: 180px;\n  border-radius: 2px;\n  padding-bottom: 6px;\n  box-shadow: 0 2px 10px 0 rgba(20, 31, 44, 0.8);\n\n  background-color: #1e2836;\n\n  .input__group {\n    display: flex;\n    border-bottom: 1px solid #9fabbd;\n    margin-bottom: 6px;\n\n    svg {\n      flex: 0 0 40px;\n      vertical-align: middle;\n      text-align: center;\n      margin-top: 5px;\n    }\n    input {\n      flex: 1 1 auto;\n      max-width: 130px;\n\n      border: none;\n      background: transparent;\n      outline: none;\n      box-sizing: border-box;\n\n      height: 36px;\n      line-height: 36px;\n\n      font-size: 14px;\n      letter-spacing: -0.08px;\n      color: #9fabbd;\n    }\n  }\n"]);
      return m = function () {
        return t;
      }
        ,
        t;
    }
    function b() {
      var t = Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"]);
      return b = function () {
        return t;
      }
        ,
        t;
    }
    function h() {
      var t = Object(r.a)(["\n  display: flex;\n  width: 100%;\n  height: 35px;\n  line-height: 35px;\n  opacity: ", ";\n  padding-left: 10px;\n  white-space: nowrap;\n  align-items: center;\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n  span {\n    flex: 1 1 auto;\n    margin-left: 10px;\n  }\n  div {\n    flex: 0 0 24px;\n    svg {\n      vertical-align: middle;\n    }\n  }\n\n  img {\n    width: 24px;\n    height: 24px;\n  }\n\n  font-size: 14px;\n\n  color: #9fabbd;\n  cursor: default;\n  background-color: #1e2836;\n\n  &:hover,\n  &:active,\n  &.active {\n    background-color: #0f1721;\n  }\n"]);
      return h = function () {
        return t;
      }
        ,
        t;
    }
    function g() {
      var t = Object(r.a)(["\n  display: flex;\n"]);
      return g = function () {
        return t;
      }
        ,
        t;
    }
    function v() {
      var t = Object(r.a)(["\n  display: inline-flex;\n  align-items: center;\n  height: ", ";\n  padding: 0 0 0 0;\n  margin: 0 0 0 0;\n  color: ", ";\n  cursor: pointer;\n  background-color: ", ";\n  border: 1px solid ", ";\n  box-sizing: border-box;\n  border-radius: 4px;\n  float: left;\n\n  img {\n    width: ", ";\n    padding: 8px;\n    height: 40px;\n  }\n\n  span {\n    flex: 1 1 auto;\n    font-size: ", ";\n    max-width: ", ";\n    font-weight: 900;\n    letter-spacing: -0.18px;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n  }\n\n  svg {\n    margin: ", ";\n    width: 11px;\n  }\n"]);
      return v = function () {
        return t;
      }
        ,
        t;
    }
    function x() {
      var t = Object(r.a)([""]);
      return x = function () {
        return t;
      }
        ,
        t;
    }
    var O = o.c.div(x())
      , y = o.c.h1(v(), (function (t) {
        return t.isMobile ? "40px" : "50px";
      }
      ), (function (t) {
        return t.colors.primaryText;
      }
      ), (function (t) {
        return t.colors.assetsSelector;
      }
      ), (function (t) {
        return t.colors.panelBorder;
      }
      ), (function (t) {
        return t.isMobile ? "40px" : "50px";
      }
      ), (function (t) {
        return t.isMobile ? "18px" : "24px";
      }
      ), (function (t) {
        return t.isMobile ? "130px" : "170px";
      }
      ), (function (t) {
        return t.isMobile ? "0 6px 0 6px" : "0 13px 0 10px";
      }
      ))
      , j = o.c.div(g())
      , E = o.c.div(h(), (function (t) {
        return t.isOpen ? 1 : .5;
      }
      ))
      , w = o.c.div(b())
      , C = o.c.div(m())
      , k = o.c.div(f(), (function (t) {
        return t.display;
      }
      ), (function (t) {
        return t.top ? "top: ".concat(t.top, "px") : "";
      }
      ))
      , T = o.c.div(p(), (function (t) {
        return t.scroll ? "147px" : "157px";
      }
      ))
      , M = o.c.div(d(), (function (t) {
        return t.active || t.isOpen ? 1 : .3;
      }
      ), (function (t) {
        return t.active ? "#0f1721" : "inherit";
      }
      ), (function (t) {
        return t.isMobile ? "max-width: 110px" : "";
      }
      ))
      , S = o.c.span(s(), (function (t) {
        return t.directionUp ? t.colors.tradebox.highText : t.colors.tradebox.lowText;
      }
      ), (function (t) {
        return t.height ? Object(o.b)(u(), t.height) : Object(o.b)(l());
      }
      ), (function (t) {
        return t.fontSize ? Object(o.b)(c(), t.fontSize) : Object(o.b)(i());
      }
      ))
      , L = o.c.span(a(), (function (t) {
        return t.color;
      }
      ));
  },
  280: function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
      return m;
    }
    ));
    var r = n(1)
      , o = n.n(r)
      , a = n(12)
      , i = n(30)
      , c = n(53)
      , l = n(91)
      , u = n(90)
      , s = n(2)
      , d = n.n(s)
      , p = n(61)
      , f = n.n(p)
      , m = function (t) {
        Object(l.a)(n, t);
        var e = Object(u.a)(n);
        function n(t) {
          var r;
          return Object(i.a)(this, n),
            (r = e.call(this, t)).container = void 0,
            r.componentDidCatch = function () {
              r.setState({
                error: !0
              });
            }
            ,
            r.state = {
              contents: null,
              error: !1
            },
            r.container = d.a.createRef(),
            r;
        }
        return Object(c.a)(n, [{
          key: "componentDidUpdate",
          value: function () {
            var t = Object(a.a)(o.a.mark((function t(e, n, r) {
              return o.a.wrap((function (t) {
                for (; ;)
                  switch (t.prev = t.next) {
                    case 0:
                      if (e.src === this.props.src) {
                        t.next = 3;
                        break;
                      }
                      return t.next = 3,
                        this.getIcon();
                    case 3:
                    case "end":
                      return t.stop();
                  }
              }
              ), t, this);
            }
            )));
            return function (e, n, r) {
              return t.apply(this, arguments);
            };
          }()
        }, {
          key: "componentDidMount",
          value: function () {
            var t = Object(a.a)(o.a.mark((function t() {
              return o.a.wrap((function (t) {
                for (; ;)
                  switch (t.prev = t.next) {
                    case 0:
                      return t.next = 2,
                        this.getIcon();
                    case 2:
                    case "end":
                      return t.stop();
                  }
              }
              ), t, this);
            }
            )));
            return function () {
              return t.apply(this, arguments);
            };
          }()
        }, {
          key: "getIcon",
          value: function () {
            var t = Object(a.a)(o.a.mark((function t() {
              var e, n, r = this;
              return o.a.wrap((function (t) {
                for (; ;)
                  switch (t.prev = t.next) {
                    case 0:
                      return t.prev = 0,
                        t.next = 3,
                        f.a.get(this.props.src);
                    case 3:
                      e = t.sent,
                        n = e.data,
                        this.setState({
                          contents: n
                        }, (function () {
                          var t = r.container.current;
                          if (t) {
                            t.innerHTML = n;
                            var e = t.querySelector("svg");
                            r.props.fill && e.setAttribute("fill", r.props.fill),
                              r.props.stroke && e.setAttribute("stroke", r.props.stroke),
                              r.props.width && e.setAttribute("width", r.props.width),
                              r.props.height && e.setAttribute("height", r.props.height),
                              r.props.verticalAlign && (e.style.verticalAlign = r.props.verticalAlign);
                          }
                        }
                        )),
                        t.next = 12;
                      break;
                    case 8:
                      t.prev = 8,
                        t.t0 = t.catch(0),
                        console.warn("Could not load icon:", t.t0),
                        this.setState({
                          error: !0
                        });
                    case 12:
                    case "end":
                      return t.stop();
                  }
              }
              ), t, this, [[0, 8]]);
            }
            )));
            return function () {
              return t.apply(this, arguments);
            };
          }()
        }, {
          key: "render",
          value: function () {
            return this.state.error ? null : d.a.createElement("div", {
              ref: this.container,
              style: {
                display: "flex",
                alignItems: "center"
              },
              className: "avatar" === this.props.type ? "themed_icon avatar-mobile" : "themed_icon"
            });
          }
        }]),
          n;
      }(s.Component);
  },
  281: function (t, e, n) {
    "use strict";
    var r = n(89)
      , o = n(58)
      , a = n(2)
      , i = n.n(a)
      , c = n(88);
    function l() {
      var t = Object(o.a)(["\n  width: 8px;\n  position: absolute;\n  cursor: ew-resize;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  background-color: ", ";\n\n  &:after {\n    content: '';\n    width: 4px;\n    height: 20px;\n    position: absolute;\n    cursor: ew-resize;\n    top: 50%;\n    border-left: 1px solid black;\n    border-right: 1px solid black;\n    transform: translate3d(0, -50%, 0);\n    margin: 0 2px;\n  }\n"]);
      return l = function () {
        return t;
      }
        ,
        t;
    }
    function u() {
      var t = Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  position: ", ";\n  z-index: 50;\n  top: 0;\n  bottom: 0;\n  padding: 0 10px 10px 11px;\n  max-width: ", ";\n  min-width: ", ";\n  left: ", "px;\n  width: ", ";\n  box-shadow: 0 2px 15px 0 #031420;\n  background-color: ", ";\n"]);
      return u = function () {
        return t;
      }
        ,
        t;
    }
    var s = c.c.div(u(), (function (t) {
      return t.isMobile ? "fixed" : "absolute";
    }
    ), (function (t) {
      return t.isMobile ? "auto" : "".concat(t.maxWidth, "px");
    }
    ), (function (t) {
      return t.isMobile ? "auto" : "".concat(t.minWidth, "px");
    }
    ), (function (t) {
      return t.isMobile ? "0" : "62";
    }
    ), (function (t) {
      return t.isMobile ? " 100%" : "300px";
    }
    ), (function (t) {
      return t.isMobile ? t.colors.background : t.colors.panelBackground + "E5";
    }
    ))
      , d = c.c.div(l(), (function (t) {
        return t.colors.leftPanel.itemBackground;
      }
      ));
    e.a = function (t) {
      var e = t.colors
        , n = t.adjustable
        , o = t.children
        , c = t.isMobile
        , l = t.sidebarWidth
        , u = Object(a.useState)(null)
        , p = Object(r.a)(u, 2)
        , f = p[0]
        , m = p[1]
        , b = Object(a.useRef)(null);
      document.onmouseup = function () {
        return h();
      }
        ;
      var h = function () {
        document.onmousemove = null,
          m(null);
      };
      return Object(a.useEffect)((function () {
        b && l && l(b.current.clientWidth),
          f && (document.onmousemove = function (t) {
            var e = t.pageX;
            if (!(e > f.max || e < f.min)) {
              var n = e - f.offset;
              window.requestAnimationFrame((function () {
                b.current && !c && (b.current.style.width = "".concat(n, "px"));
              }
              )),
                l && l(n);
            }
          }
          );
      }
      ), [f]),
        i.a.createElement(s, {
          ref: b,
          minWidth: 300,
          maxWidth: 800,
          colors: e,
          isMobile: c
        }, n && i.a.createElement(d, {
          colors: e,
          onMouseDown: function (t) {
            return function (t) {
              var e, n = t.pageX - Number(null === (e = b.current) || void 0 === e ? void 0 : e.clientWidth);
              m({
                offset: n,
                max: n + 800,
                min: n + 300
              });
            }(t);
          }
        }), o);
    };
  },
  282: function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
      return le;
    }
    )),
      n.d(e, "b", (function () {
        return ue;
      }
      ));
    var r = n(89)
      , o = n(58)
      , a = n(2)
      , i = n.n(a)
      , c = n(44)
      , l = n(33)
      , u = n(88);
    function s() {
      return (s = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
        return t;
      }
      ).apply(this, arguments);
    }
    function d(t, e) {
      if (null == t)
        return {};
      var n, r, o = function (t, e) {
        if (null == t)
          return {};
        var n, r, o = {}, a = Object.keys(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || (o[n] = t[n]);
        return o;
      }(t, e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]);
      }
      return o;
    }
    var p = i.a.createElement("path", {
      d: "M6.516 15.5H12c.3 0 .543.224.543.5s-.243.5-.543.5H6.516c-.3 0-.543-.224-.543-.5s.243-.5.543-.5zM6.516 3h13.683c.3 0 .543.224.543.5S20.5 4 20.2 4H6.516c-.3 0-.543-.224-.543-.5s.243-.5.543-.5zM14.715 15.5h5.484c.3 0 .543.224.543.5s-.243.5-.543.5h-5.484c-.3 0-.543-.224-.543-.5s.243-.5.543-.5zM6.516 5.5H12c.3 0 .543.224.543.5s-.243.5-.543.5H6.516c-.3 0-.543-.224-.543-.5s.243-.5.543-.5zM6.516 8H12c.3 0 .543.224.543.5S12.3 9 12 9H6.516c-.3 0-.543-.224-.543-.5s.243-.5.543-.5zM6.516 10.5H12c.3 0 .543.224.543.5s-.243.5-.543.5H6.516c-.3 0-.543-.224-.543-.5s.243-.5.543-.5zM6.516 13H12c.3 0 .543.224.543.5S12.3 14 12 14H6.516c-.3 0-.543-.224-.543-.5s.243-.5.543-.5zM14.715 13h5.484c.3 0 .543.224.543.5s-.243.5-.543.5h-5.484c-.3 0-.543-.224-.543-.5s.243-.5.543-.5zM14.715 5.5h5.484c.3 0 .543.224.543.5v5.05c0 .276-.243.5-.543.5h-5.484c-.3 0-.543-.224-.543-.5V6c0-.276.243-.5.543-.5zm.543 5.05h4.398V6.5h-4.398v4.05z",
      transform: "translate(-204 -208) translate(185 94) translate(19 114) translate(0 2)"
    })
      , f = i.a.createElement("path", {
        d: "M1.086 2.5h1.629V1c0-.551.487-1 1.086-1h19.113C23.513 0 24 .449 24 1v16c0 1.378-1.218 2.5-2.715 2.5H2.715C1.218 19.5 0 18.378 0 17V3.5c0-.551.487-1 1.086-1zm0 14.5c0 .827.73 1.5 1.629 1.5h18.57c.898 0 1.629-.673 1.629-1.5V1H3.801v15.25c0 .69-.61 1.25-1.358 1.25-.3 0-.543-.224-.543-.5s.244-.5.543-.5c.144.006.266-.106.272-.25V3.5H1.086V17z",
        transform: "translate(-204 -208) translate(185 94) translate(19 114) translate(0 2)"
      })
      , m = function (t) {
        var e = t.svgRef
          , n = t.title
          , r = d(t, ["svgRef", "title"]);
        return i.a.createElement("svg", s({
          width: 24,
          height: 24,
          viewBox: "0 0 24 24",
          ref: e
        }, r), n ? i.a.createElement("title", null, n) : null, p, f);
      }
      , b = i.a.forwardRef((function (t, e) {
        return i.a.createElement(m, s({
          svgRef: e
        }, t));
      }
      ));
    n.p;
    function h() {
      return (h = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
        return t;
      }
      ).apply(this, arguments);
    }
    function g(t, e) {
      if (null == t)
        return {};
      var n, r, o = function (t, e) {
        if (null == t)
          return {};
        var n, r, o = {}, a = Object.keys(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || (o[n] = t[n]);
        return o;
      }(t, e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]);
      }
      return o;
    }
    var v = i.a.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M6.88235 4H3L3 7H6.88235L6.88235 4ZM3 3C2.44772 3 2 3.44772 2 4V7C2 7.55228 2.44771 8 3 8H6.88235C7.43464 8 7.88235 7.55228 7.88235 7V4C7.88235 3.44772 7.43464 3 6.88235 3H3ZM13.9409 4H10.0586V7H13.9409V4ZM10.0586 3C9.50631 3 9.05859 3.44772 9.05859 4V7C9.05859 7.55228 9.50631 8 10.0586 8H13.9409C14.4932 8 14.9409 7.55228 14.9409 7V4C14.9409 3.44772 14.4932 3 13.9409 3H10.0586ZM17.1172 4H20.9995V7H17.1172V4ZM16.1172 4C16.1172 3.44772 16.5649 3 17.1172 3H20.9995C21.5518 3 21.9995 3.44772 21.9995 4V7C21.9995 7.55228 21.5518 8 20.9995 8H17.1172C16.5649 8 16.1172 7.55228 16.1172 7V4ZM21 10H3V12H21V10ZM21 13H3V15H21V13ZM3 18V16H21V18H3ZM3 19V21H21V19H3ZM3 9C2.44772 9 2 9.44772 2 10V21C2 21.5523 2.44772 22 3 22H21C21.5523 22 22 21.5523 22 21V10C22 9.44772 21.5523 9 21 9H3Z"
    })
      , x = function (t) {
        var e = t.svgRef
          , n = t.title
          , r = g(t, ["svgRef", "title"]);
        return i.a.createElement("svg", h({
          width: 24,
          height: 25,
          viewBox: "0 0 24 25",
          fill: "none",
          ref: e
        }, r), n ? i.a.createElement("title", null, n) : null, v);
      }
      , O = i.a.forwardRef((function (t, e) {
        return i.a.createElement(x, h({
          svgRef: e
        }, t));
      }
      ));
    n.p;
    function y() {
      return (y = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
        return t;
      }
      ).apply(this, arguments);
    }
    function j(t, e) {
      if (null == t)
        return {};
      var n, r, o = function (t, e) {
        if (null == t)
          return {};
        var n, r, o = {}, a = Object.keys(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || (o[n] = t[n]);
        return o;
      }(t, e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]);
      }
      return o;
    }
    var E = i.a.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3 0.5C3 0.223858 3.22386 0 3.5 0C3.77614 0 4 0.223858 4 0.5V5H5C5.55228 5 6 5.44772 6 6V18C6 18.5523 5.55228 19 5 19H4V23.5C4 23.7761 3.77614 24 3.5 24C3.22386 24 3 23.7761 3 23.5V19H2C1.44772 19 1 18.5523 1 18V6C1 5.44772 1.44772 5 2 5H3V0.5ZM3.5 18H5V6H3.5H2L2 18H3.5Z"
    })
      , w = i.a.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M10 5.5C10 5.22386 10.2239 5 10.5 5C10.7761 5 11 5.22386 11 5.5V7H12C12.5523 7 13 7.44772 13 8V14C13 14.5523 12.5523 15 12 15H11V22.5C11 22.7761 10.7761 23 10.5 23C10.2239 23 10 22.7761 10 22.5V15H9C8.44772 15 8 14.5523 8 14V8C8 7.44772 8.44772 7 9 7H10V5.5ZM10.5 14H12V8H10.5H9L9 14H10.5Z"
      })
      , C = i.a.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M23.0333 0.5H23.5V0.954741C23.5026 0.9842 23.5026 1.01385 23.5 1.04331V6C23.5 6.27614 23.2761 6.5 23 6.5C22.7239 6.5 22.5 6.27614 22.5 6V2.20808L17.3555 7.35258C17.1602 7.54784 16.8437 7.54784 16.6484 7.35258C16.4531 7.15731 16.4531 6.84073 16.6484 6.64547L21.7939 1.5H18C17.7239 1.5 17.5 1.27614 17.5 1C17.5 0.723858 17.7239 0.5 18 0.5H22.9706C22.9915 0.498698 23.0124 0.498698 23.0333 0.5Z"
      })
      , k = i.a.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M23.5 18.0443V18.498H23.0462C23.0168 18.5007 22.9871 18.5007 22.9577 18.498H18C17.7239 18.498 17.5 18.2742 17.5 17.998C17.5 17.7219 17.7239 17.498 18 17.498H21.7929L16.6484 12.3536C16.4531 12.1583 16.4531 11.8417 16.6484 11.6464C16.8437 11.4512 17.1602 11.4512 17.3555 11.6464L22.5 16.7909V12.998C22.5 12.7219 22.7239 12.498 23 12.498C23.2761 12.498 23.5 12.7219 23.5 12.998L23.5 17.9557C23.5026 17.9852 23.5026 18.0148 23.5 18.0443Z"
      })
      , T = function (t) {
        var e = t.svgRef
          , n = t.title
          , r = j(t, ["svgRef", "title"]);
        return i.a.createElement("svg", y({
          width: 24,
          height: 24,
          viewBox: "0 0 24 24",
          fill: "none",
          ref: e
        }, r), n ? i.a.createElement("title", null, n) : null, E, w, C, k);
      }
      , M = i.a.forwardRef((function (t, e) {
        return i.a.createElement(T, y({
          svgRef: e
        }, t));
      }
      ));
    n.p;
    function S() {
      return (S = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
        return t;
      }
      ).apply(this, arguments);
    }
    function L(t, e) {
      if (null == t)
        return {};
      var n, r, o = function (t, e) {
        if (null == t)
          return {};
        var n, r, o = {}, a = Object.keys(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || (o[n] = t[n]);
        return o;
      }(t, e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]);
      }
      return o;
    }
    var I = i.a.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3 1.5C2.17614 1.5 1.5 2.17614 1.5 3V10.6H10.6V1.5H3ZM0.5 3C0.5 1.62386 1.62386 0.5 3 0.5H11.6V11.6H0.5V3Z"
    })
      , _ = i.a.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12.4004 0.5H21.0004C22.3765 0.5 23.5004 1.62386 23.5004 3V11.6H12.4004V0.5ZM13.4004 1.5V10.6H22.5004V3C22.5004 2.17614 21.8242 1.5 21.0004 1.5H13.4004Z"
      })
      , P = i.a.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12.4004 12.3999H23.5004V20.9999C23.5004 22.376 22.3765 23.4999 21.0004 23.4999H12.4004V12.3999ZM13.4004 13.3999V22.4999H21.0004C21.8242 22.4999 22.5004 21.8238 22.5004 20.9999V13.3999H13.4004Z"
      })
      , A = i.a.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M0.5 12.3999H11.6V23.4999H3C1.62386 23.4999 0.5 22.376 0.5 20.9999V12.3999ZM1.5 13.3999V20.9999C1.5 21.8238 2.17614 22.4999 3 22.4999H10.6V13.3999H1.5Z"
      })
      , z = function (t) {
        var e = t.svgRef
          , n = t.title
          , r = L(t, ["svgRef", "title"]);
        return i.a.createElement("svg", S({
          width: 24,
          height: 24,
          viewBox: "0 0 24 24",
          fill: "none",
          ref: e
        }, r), n ? i.a.createElement("title", null, n) : null, I, _, P, A);
      }
      , N = i.a.forwardRef((function (t, e) {
        return i.a.createElement(z, S({
          svgRef: e
        }, t));
      }
      ));
    n.p;
    function D() {
      return (D = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
        return t;
      }
      ).apply(this, arguments);
    }
    function R(t, e) {
      if (null == t)
        return {};
      var n, r, o = function (t, e) {
        if (null == t)
          return {};
        var n, r, o = {}, a = Object.keys(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || (o[n] = t[n]);
        return o;
      }(t, e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]);
      }
      return o;
    }
    var F = i.a.createElement("g", {
      transform: "translate(29.047 15.732) rotate(135)"
    }, i.a.createElement("path", {
      d: "M20.234,5.167a.564.564,0,0,0-.526-.6H1.789l3.15-3.561a.645.645,0,0,0,0-.837.48.48,0,0,0-.74,0L.154,4.746a.645.645,0,0,0,0,.837L4.2,10.155a.485.485,0,0,0,.745,0,.645.645,0,0,0,0-.837L1.793,5.757H19.716A.558.558,0,0,0,20.234,5.167Z",
      transform: "translate(-0.702 11.217)"
    }), i.a.createElement("path", {
      d: "M20.085,4.741,16.041.174a.481.481,0,0,0-.74,0,.645.645,0,0,0,0,.837l3.15,3.561H.526a.564.564,0,0,0-.526.6.564.564,0,0,0,.526.6H18.45L15.3,9.313a.645.645,0,0,0,0,.837.485.485,0,0,0,.745,0l4.044-4.572A.651.651,0,0,0,20.085,4.741Z"
    }))
      , B = function (t) {
        var e = t.svgRef
          , n = t.title
          , r = R(t, ["svgRef", "title"]);
        return i.a.createElement("svg", D({
          viewBox: "0 0 29.047 30.044",
          fit: "",
          height: "100%",
          width: "100%",
          preserveAspectRatio: "xMidYMid meet",
          focusable: "false",
          ref: e
        }, r), n ? i.a.createElement("title", null, n) : null, F);
      }
      , H = i.a.forwardRef((function (t, e) {
        return i.a.createElement(B, D({
          svgRef: e
        }, t));
      }
      ));
    n.p;
    function V() {
      return (V = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
        return t;
      }
      ).apply(this, arguments);
    }
    function W(t, e) {
      if (null == t)
        return {};
      var n, r, o = function (t, e) {
        if (null == t)
          return {};
        var n, r, o = {}, a = Object.keys(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || (o[n] = t[n]);
        return o;
      }(t, e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]);
      }
      return o;
    }
    var U = i.a.createElement("defs", null, i.a.createElement("path", {
      id: "fowu6jzo7a",
      d: "M0 0H24V18.634H0z"
    }))
      , G = i.a.createElement("g", {
        fill: "none",
        fillRule: "evenodd"
      }, i.a.createElement("g", null, i.a.createElement("g", null, i.a.createElement("g", null, i.a.createElement("g", {
        transform: "translate(-204 -376) translate(185 94) translate(19 282) translate(0 3)"
      }, i.a.createElement("mask", {
        id: "3uafn2ycab"
      }, i.a.createElement("use", {
        xlinkHref: "#fowu6jzo7a"
      })), i.a.createElement("g", {
        mask: "url(#3uafn2ycab)"
      }, i.a.createElement("g", null, i.a.createElement("g", {
        fillRule: "nonzero"
      }, i.a.createElement("path", {
        d: "M22.93 5.202c-.04-.087-.108-.156-.195-.194L11.638.034c-.1-.045-.214-.045-.313 0L.227 5.009C.089 5.07 0 5.207 0 5.358c0 .151.089.288.227.35l3.6 1.612v6.84c0 .112.05.22.137.292 4.34 3.668 10.694 3.668 15.035 0 .086-.073.136-.18.136-.293V7.32l1.53-.685v6.644l-.573.86c-.126.188-.192.41-.192.636v.444c0 .633.514 1.147 1.148 1.147.634 0 1.148-.514 1.148-1.147v-.445c0-.227-.066-.448-.191-.637l-.574-.858V6.292l1.304-.585c.193-.086.28-.312.194-.505zm-4.56 8.778c-4.008 3.277-9.77 3.277-13.777 0V7.666l6.732 3.017c.1.045.213.045.313 0l6.732-3.019v6.316zm3.061 1.237c0 .212-.171.383-.382.383-.212 0-.383-.171-.383-.383v-.443c0-.076.022-.15.064-.212l.319-.479.318.477c.042.063.064.137.064.212v.445zm-.6-9.495l-9.32-.747c-.21-.017-.396.141-.413.352-.016.212.141.397.353.414l7.928.634-7.898 3.537L1.32 5.358 11.48.804l10.163 4.554-.813.364z",
        transform: "translate(.447 .717) translate(0 .029)"
      })))))))))
      , Y = function (t) {
        var e = t.svgRef
          , n = t.title
          , r = W(t, ["svgRef", "title"]);
        return i.a.createElement("svg", V({
          width: 24,
          height: 24,
          viewBox: "0 0 24 24",
          ref: e
        }, r), n ? i.a.createElement("title", null, n) : null, U, G);
      }
      , q = i.a.forwardRef((function (t, e) {
        return i.a.createElement(Y, V({
          svgRef: e
        }, t));
      }
      ));
    n.p;
    function Z() {
      return (Z = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
        return t;
      }
      ).apply(this, arguments);
    }
    function X(t, e) {
      if (null == t)
        return {};
      var n, r, o = function (t, e) {
        if (null == t)
          return {};
        var n, r, o = {}, a = Object.keys(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || (o[n] = t[n]);
        return o;
      }(t, e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]);
      }
      return o;
    }
    var Q = i.a.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M2.89062 20.1718L8.56506 14.4973V22.0632H2.89062V20.1718Z"
    })
      , J = i.a.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M10.457 12.6058L16.1315 18.2803V22.0632H10.457V12.6058Z"
      })
      , K = i.a.createElement("path", {
        className: "line",
        d: "M1 16.9056L9.7093 7.71993L17.217 14.6673L25 2"
      })
      , $ = i.a.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M18.0234 18.2803L23.6979 8.82288V22.0632H18.0234V18.2803Z"
      })
      , tt = function (t) {
        var e = t.svgRef
          , n = t.title
          , r = X(t, ["svgRef", "title"]);
        return i.a.createElement("svg", Z({
          width: 26,
          height: 24,
          viewBox: "0 0 26 24",
          fill: "none",
          ref: e
        }, r), n ? i.a.createElement("title", null, n) : null, Q, J, K, $);
      }
      , et = i.a.forwardRef((function (t, e) {
        return i.a.createElement(tt, Z({
          svgRef: e
        }, t));
      }
      ));
    n.p;
    function nt() {
      return (nt = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
        return t;
      }
      ).apply(this, arguments);
    }
    function rt(t, e) {
      if (null == t)
        return {};
      var n, r, o = function (t, e) {
        if (null == t)
          return {};
        var n, r, o = {}, a = Object.keys(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || (o[n] = t[n]);
        return o;
      }(t, e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]);
      }
      return o;
    }
    var ot = i.a.createElement("path", {
      d: "M24 .368c0-.194-.157-.352-.352-.352H.352C.157.016 0 .174 0 .368v15.85c0 .454.703.454.703 0v-.683h22.594v3.058H.703v-.546c0-.454-.703-.454-.703 0v.898c0 .194.157.351.352.351h23.296c.195 0 .352-.157.352-.351V.368zM.703.72h22.594v14.103H.703V.72z",
      transform: "translate(-204 -292) translate(185 94) translate(19 198) translate(0 2)"
    })
      , at = i.a.createElement("path", {
        d: "M15.116 7.087L9.61 3.91c-.517-.298-1.185.092-1.185.684v6.357c0 .592.669.982 1.185.684l3.315-1.914c.393-.227.04-.836-.352-.61L9.26 11.026c-.072.025-.116 0-.13-.075V4.593c.014-.075.058-.1.13-.075l5.505 3.178c.058.05.058.1 0 .15l-.502.29c-.393.227-.041.836.351.61l.503-.29c.516-.298.516-1.07 0-1.369zM3.674 17.416c.143.382.511.656.943.656.432 0 .8-.274.943-.656h15.674c.454 0 .454-.704 0-.704H5.56c-.143-.382-.51-.656-.943-.656-.432 0-.8.274-.943.656h-.908c-.454 0-.454.704 0 .704h.908zm.943-.657c.168 0 .305.137.305.305 0 .168-.137.305-.305.305-.168 0-.304-.137-.304-.305 0-.168.136-.305.304-.305z",
        transform: "translate(-204 -292) translate(185 94) translate(19 198) translate(0 2)"
      })
      , it = function (t) {
        var e = t.svgRef
          , n = t.title
          , r = rt(t, ["svgRef", "title"]);
        return i.a.createElement("svg", nt({
          width: 24,
          height: 24,
          viewBox: "0 0 24 24",
          ref: e
        }, r), n ? i.a.createElement("title", null, n) : null, ot, at);
      }
      , ct = i.a.forwardRef((function (t, e) {
        return i.a.createElement(it, nt({
          svgRef: e
        }, t));
      }
      ));
    n.p;
    function lt() {
      return (lt = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
        return t;
      }
      ).apply(this, arguments);
    }
    function ut(t, e) {
      if (null == t)
        return {};
      var n, r, o = function (t, e) {
        if (null == t)
          return {};
        var n, r, o = {}, a = Object.keys(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || (o[n] = t[n]);
        return o;
      }(t, e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]);
      }
      return o;
    }
    var st = i.a.createElement("path", {
      d: "M64 896m32 0l832 0q32 0 32 32l0 0q0 32-32 32l-832 0q-32 0-32-32l0 0q0-32 32-32Z"
    })
      , dt = i.a.createElement("path", {
        d: "M448 960H192V606a62.07 62.07 0 0 1 62-62h132a62.07 62.07 0 0 1 62 62z m-192-64h128V608H256zM832 960H576V670a62.07 62.07 0 0 1 62-62h132a62.07 62.07 0 0 1 62 62z m-192-64h128V672H640z"
      })
      , pt = i.a.createElement("path", {
        d: "M640 960H384V414a62.07 62.07 0 0 1 62-62h132a62.07 62.07 0 0 1 62 62z m-192-64h128V416H448zM576 320H448a32 32 0 0 1-27.39-15.46l-64-106A32 32 0 0 1 384 150h56.31l44.59-71a32 32 0 0 1 54.2 0l44.59 71H640a32 32 0 0 1 27.39 48.54l-64 106A32 32 0 0 1 576 320z m-109.94-64h91.88l25.36-42H566a32 32 0 0 1-27.1-15L512 156.18 485.1 199a32 32 0 0 1-27.1 15h-17.3z"
      })
      , ft = function (t) {
        var e = t.svgRef
          , n = t.title
          , r = ut(t, ["svgRef", "title"]);
        return i.a.createElement("svg", lt({
          className: "svg-icon",
          width: 24,
          height: 24,
          viewBox: "0 0 1024 1024",
          ref: e
        }, r), n ? i.a.createElement("title", null, n) : null, st, dt, pt);
      }
      , mt = i.a.forwardRef((function (t, e) {
        return i.a.createElement(ft, lt({
          svgRef: e
        }, t));
      }
      ))
      , bt = (n.p,
        n(333))
      , ht = n(334)
      , gt = n(332)
      , vt = n(272)
      , xt = n(281);
    function Ot() {
      var t = Object(o.a)(["Signals"]);
      return Ot = function () {
        return t;
      }
        ,
        t;
    }
    var yt = Object(l.c)((function (t) {
      return {
        leftPanel: t.registry.data.partnerConfig.leftPanel
      };
    }
    ))((function (t) {
      var e = t.leftPanel
        , n = t.onClose
        , r = t.colors
        , o = e.signalsSrc;
      return i.a.createElement(xt.a, {
        colors: r,
        adjustable: !1,
        isMobile: !1
      }, i.a.createElement(le, {
        colors: r
      }, Object(c.t)(Ot())), i.a.createElement(vt.a, {
        colors: r,
        onClick: n
      }), i.a.createElement(ue, null, i.a.createElement("iframe", {
        src: o,
        title: "signals iframe",
        frameBorder: "0",
        height: "100%",
        width: "100%"
      })));
    }
    ))
      , jt = n(396)
      , Et = n.n(jt)
      , wt = n(304);
    function Ct() {
      var t = Object(o.a)(["Tutorials"]);
      return Ct = function () {
        return t;
      }
        ,
        t;
    }
    function kt() {
      var t = Object(o.a)(["\n\tdisplay: block;\n\tbox-sizing: border-box;\n\twidth: 270px;\n\tmargin: 0 auto;\n\n\tspan {\n\t\tdisplay: block;\n\t\tbox-sizing: border-box;\n\t\twidth: 100%;\n\t\tfont-size: 11px;\n\t\tpadding-bottom: 6px;\n\t\tpadding-left: 10px;\n\t\tpadding-right: 10px;\n\t\tpadding-top: 12px;\n\t\tuser-select: none;\n\n\t\tbackground-color: rgb(10, 26, 44);\n\t\tcolor: rgba(255, 255, 255, 0.87);\n\t}\n"]);
      return kt = function () {
        return t;
      }
        ,
        t;
    }
    var Tt = u.c.div(kt())
      , Mt = Object(l.c)((function (t) {
        return {
          data: t.registry.data.partnerConfig.leftPanel.videos,
          thumbnails: t.registry.data.partnerConfig.leftPanel.videos.images.wow.en.thumbnails
        };
      }
      ))((function (t) {
        var e = Object(a.useState)(-1)
          , n = Object(r.a)(e, 2)
          , o = n[0]
          , l = n[1]
          , u = t.data
          , s = t.thumbnails
          , d = t.colors
          , p = u.defaultLang
          , f = u.wow.order
          , m = u.sources.wow[p]
          , b = u.titles[p];
        return i.a.createElement(xt.a, {
          colors: d,
          adjustable: !1,
          isMobile: !1
        }, i.a.createElement(le, {
          colors: d
        }, Object(c.t)(Ct())), i.a.createElement(vt.a, {
          colors: d,
          onClick: t.onClose
        }), i.a.createElement(wt.f, {
          className: "scrollable"
        }, f.map((function (t, e) {
          return i.a.createElement(Tt, {
            key: t
          }, o !== e && i.a.createElement("div", {
            key: s[t],
            onClick: function () {
              return l(e);
            },
            style: {
              width: 270,
              height: 150,
              background: "url(".concat(s[t], ") no-repeat"),
              backgroundSize: "cover"
            }
          }), o === e && i.a.createElement(Et.a, {
            width: "270",
            height: "150",
            key: e,
            url: "".concat(m[t], ".mp4"),
            autoPlay: !0,
            playing: !0,
            controls: !0
          }), i.a.createElement("span", null, e, ". ", b[t]));
        }
        ))));
      }
      ));
    function St() {
      var t = Object(o.a)(["Social"]);
      return St = function () {
        return t;
      }
        ,
        t;
    }
    var Lt = Object(l.c)((function (t) {
      return {
        leftPanel: t.registry.data.partnerConfig.leftPanel
      };
    }
    ))((function (t) {
      var e = t.leftPanel
        , n = t.onClose
        , r = t.colors
        , o = e.socialWidgetUrl;
      return i.a.createElement(xt.a, {
        adjustable: !1,
        colors: r,
        isMobile: !1
      }, i.a.createElement(le, {
        colors: r
      }, Object(c.t)(St())), i.a.createElement(vt.a, {
        colors: r,
        onClick: n
      }), i.a.createElement(ue, null, i.a.createElement("iframe", {
        src: o,
        frameBorder: "0",
        height: "100%",
        width: "100%",
        title: "social iframe"
      })));
    }
    ))
      , It = n(41)
      , _t = n(40)
      , Pt = n(19)
      , At = n(331)
      , zt = n(52)
      , Nt = n(92)
      , Dt = n(79)
      , Rt = n(276)
      , Ft = n(335);
    function Bt() {
      var t = Object(o.a)(["new"]);
      return Bt = function () {
        return t;
      }
        ,
        t;
    }
    function Ht() {
      var t = Object(o.a)(["Leaderboard"]);
      return Ht = function () {
        return t;
      }
        ,
        t;
    }
    function Vt() {
      var t = Object(o.a)(["Trade"]);
      return Vt = function () {
        return t;
      }
        ,
        t;
    }
    function Wt() {
      var t = Object(o.a)(["Markets"]);
      return Wt = function () {
        return t;
      }
        ,
        t;
    }
    function Ut() {
      var t = Object(o.a)(["Daily Analysis"]);
      return Ut = function () {
        return t;
      }
        ,
        t;
    }
    function Gt() {
      var t = Object(o.a)(["Signals"]);
      return Gt = function () {
        return t;
      }
        ,
        t;
    }
    function Yt() {
      var t = Object(o.a)(["Tutorials"]);
      return Yt = function () {
        return t;
      }
        ,
        t;
    }
    function qt() {
      var t = Object(o.a)(["Video News"]);
      return qt = function () {
        return t;
      }
        ,
        t;
    }
    function Zt() {
      var t = Object(o.a)(["News"]);
      return Zt = function () {
        return t;
      }
        ,
        t;
    }
    function Xt() {
      var t = Object(o.a)(["Open/\u0421losed Positions"]);
      return Xt = function () {
        return t;
      }
        ,
        t;
    }
    function Qt() {
      var t = Object(o.a)(["Dashboard"]);
      return Qt = function () {
        return t;
      }
        ,
        t;
    }
    function Jt() {
      var t = Object(o.a)(["\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  top: 25px;\n  width: 18px;\n  height: 18px;\n  font-size: 12px;\n  padding: 0 2px;\n  right: 4px;\n  border: 1px solid ", ";\n  border-radius: 50%;\n  color: ", ";\n  background-color: ", ";\n"]);
      return Jt = function () {
        return t;
      }
        ,
        t;
    }
    function Kt() {
      var t = Object(o.a)(["\n  position: absolute;\n  top: 25px;\n  font-size: 9px;\n  padding: 0 2px;\n  border-radius: 2px;\n  text-transform: uppercase;\n  font-weight: bold;\n  right: 4px;\n  color: ", ";\n  background-color: ", ";\n"]);
      return Kt = function () {
        return t;
      }
        ,
        t;
    }
    function $t() {
      var t = Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n\n  iframe {\n    flex: 1 1 auto;\n  }\n"]);
      return $t = function () {
        return t;
      }
        ,
        t;
    }
    function te() {
      var t = Object(o.a)(["\n  display: block;\n  box-sizing: border-box;\n  width: 180px;\n  height: 26px;\n  padding-bottom: 11px;\n  margin: 13px auto;\n  font-size: 12px;\n  font-weight: 500;\n  font-style: normal;\n  letter-spacing: -0.07px;\n  text-align: center;\n  text-transform: uppercase;\n\n  color: ", ";\n  border-bottom: 1px solid ", ";\n"]);
      return te = function () {
        return t;
      }
        ,
        t;
    }
    function ee() {
      var t = Object(o.a)(["\n  display: block;\n  width: 100%;\n  box-sizing: border-box;\n  text-align: center;\n  height: 84px;\n  cursor: pointer;\n  position: relative;\n\n  ", "\n  ", "\n  svg, img {\n    width: 24px;\n    height: 24px;\n    margin-top: 30px;\n    vertical-align: middle;\n  }\n\n  path:not(.line) {\n    fill: ", ";\n  }\n\n  path.line {\n    fill: none;\n    stroke: ", ";\n  }\n\n  &:hover {\n    path:not(.line) {\n      fill: ", ";\n    }\n    path.line {\n      stroke: ", ";\n    }\n  }\n"]);
      return ee = function () {
        return t;
      }
        ,
        t;
    }
    function ne() {
      var t = Object(o.a)(["\n  box-sizing: border-box;\n  height: 100%;\n  padding-top: 26px;\n  background-color: ", ";\n  border-left: 1px solid ", ";\n  border-right: 1px solid ", ";\n"]);
      return ne = function () {
        return t;
      }
        ,
        t;
    }
    function re() {
      var t = Object(o.a)(["\n  // flex: 0 0 62px;\n  width: 62px;\n  position: relative;\n"]);
      return re = function () {
        return t;
      }
        ,
        t;
    }
    var oe = {
      0: "Dashboard",
      2: "Open/\u0421losed Positions",
      3: "News",
      4: "Video News",
      5: "Tutorials",
      6: "Signals",
      8: "Daily Analysis",
      9: "Markets",
      10: "Trade",
      11: "Leaderboard"
    }
      , ae = u.c.div(re())
      , ie = u.c.div(ne(), (function (t) {
        return t.colors.panelBackground;
      }
      ), (function (t) {
        return t.colors.panelBorder;
      }
      ), (function (t) {
        return t.colors.panelBorder;
      }
      ))
      , ce = u.c.div(ee(), (function (t) {
        return t.active ? "border-left: 3px solid ".concat(t.colors.primary, ";") : "";
      }
      ), (function (t) {
        return t.active ? "background-color: ".concat(t.colors.background, ";") : "";
      }
      ), (function (t) {
        return t.colors.primaryText;
      }
      ), (function (t) {
        return t.colors.primaryText;
      }
      ), (function (t) {
        return t.colors.primary;
      }
      ), (function (t) {
        return t.colors.primary;
      }
      ))
      , le = u.c.h3(te(), (function (t) {
        return t.colors.primaryText;
      }
      ), (function (t) {
        return t.colors.sidebarBorder;
      }
      ))
      , ue = u.c.div($t())
      , se = u.c.div(Kt(), (function (t) {
        return t.colors.panelBackground;
      }
      ), (function (t) {
        return t.colors.primary;
      }
      ))
      , de = u.c.div(Jt(), (function (t) {
        return t.colors.primary;
      }
      ), (function (t) {
        return t.colors.primary;
      }
      ), (function (t) {
        return t.colors.panelBackground;
      }
      ))
      , pe = function (t) {
        var e = t.colors
          , n = t.value
          , r = t.onChange
          , o = t.actionSetSelectedTrade
          , a = function () {
            r(It.a.none),
              o(null);
          }
          , c = function (t) {
            return n === t;
          };
        return i.a.createElement("div", {
          style: {
            width: "58px"
          }
        }, c(It.a.positions) && i.a.createElement(bt.b, {
          colors: e,
          isMobile: !1,
          onClose: a
        }), c(It.a.tutorial) && i.a.createElement(Mt, {
          colors: e,
          onClose: a
        }), c(It.a.video) && i.a.createElement(gt.a, {
          colors: e,
          onClose: a
        }), c(It.a.news) && i.a.createElement(ht.a, {
          colors: e,
          onClose: a
        }), c(It.a.signals) && i.a.createElement(yt, {
          colors: e,
          onClose: a
        }), c(It.a.social) && i.a.createElement(Lt, {
          colors: e,
          onClose: a
        }), c(It.a.analysis) && i.a.createElement(At.a, {
          forceLoad: !0,
          colors: e,
          onClose: a
        }), c(It.a.leaderboard) && zt.a && i.a.createElement(Ft.a, {
          colors: e,
          onClose: a
        }));
      }
      , fe = function (t) {
        var e = t.state
          , n = t.value
          , r = t.onChange
          , o = t.icon
          , a = t.colors
          , c = t.banner
          , l = t.counter
          , u = t.tooltipName;
        return i.a.createElement("div", {
          "data-tip": "",
          "data-for": It.a[n] + "-panel-item"
        }, i.a.createElement(ce, {
          colors: a,
          active: e === n,
          onClick: function () {
            return r(n);
          }
        }, o, c && i.a.createElement(se, {
          colors: a
        }, c), l && i.a.createElement(de, {
          colors: a
        }, l)), i.a.createElement(Rt.a, {
          offset: {
            right: 5
          },
          id: It.a[n] + "-panel-item",
          place: "right",
          class: "react-tooltip-small"
        }, u));
      };
    e.c = Object(l.c)((function (t) {
      return {
        leftPanel: t.registry.data.partnerConfig.leftPanel,
        state: t.sidebar.panel,
        colors: t.theme,
        isLoggedIn: Object(zt.a)(t),
        container: t.container.content,
        openTradesCount: t.trades.open.length,
        lang: t.registry.data.lang
      };
    }
    ), {
      actionSetSidebar: _t.b,
      actionSetSelectedTrade: Pt.u,
      actionSetContainer: Dt.c
    })((function (t) {
      var e, n = t.leftPanel, o = t.state, l = t.colors, u = t.isLoggedIn, s = n.news.enabled || n.cryptoNews.enabled, d = n.videoNews.enabled, p = !!n.signalsSrc, f = 1 === n.allowSocial, m = n.dailyAnalysis.enabled, h = n.videos.enabled, g = n.dashboard.enabled, v = (null === (e = n.leaderboard) || void 0 === e ? void 0 : e.enabled) && u, x = function (t) {
        switch (t) {
          case "Dashboard":
            return Object(c.t)(Qt());
          case "Open/\u0421losed Positions":
            return Object(c.t)(Xt());
          case "News":
            return Object(c.t)(Zt());
          case "Video News":
            return Object(c.t)(qt());
          case "Tutorials":
            return Object(c.t)(Yt());
          case "Signals":
            return Object(c.t)(Gt());
          case "Daily Analysis":
            return Object(c.t)(Ut());
          case "Markets":
            return Object(c.t)(Wt());
          case "Trade":
            return Object(c.t)(Vt());
          case "Leaderboard":
            return Object(c.t)(Ht());
        }
      }, y = Object(a.useState)((function () {
        var t = {};
        return Object.keys(oe).forEach((function (e) {
          var n = x(oe[e]);
          t[e] = n;
        }
        )),
          t;
      }
      )), j = Object(r.a)(y, 2), E = j[0], w = j[1];
      Object(a.useEffect)((function () {
        C(It.a.none);
      }
      ), [t.container]),
        Object(a.useEffect)((function () {
          var t = {};
          Object.keys(oe).forEach((function (e) {
            var n = x(oe[e]);
            t[e] = n;
          }
          )),
            w(t);
        }
        ), [t.lang]);
      var C = function (e) {
        if (e === t.state)
          return t.actionSetSidebar(It.a.trade),
            void (e !== It.a.dashboard && e !== It.a.markets || t.actionSetContainer(Nt.a.trade));
        if (e !== It.a.none) {
          switch (e) {
            case It.a.dashboard:
              t.actionSetContainer(Nt.a.dashboard);
              break;
            case It.a.markets:
              t.actionSetContainer(Nt.a.assets);
              break;
            case It.a.trade:
              t.actionSetContainer(Nt.a.trade);
          }
          t.actionSetSidebar(e);
        } else
          switch (t.container) {
            case Nt.a.dashboard:
              t.actionSetSidebar(It.a.dashboard);
              break;
            case Nt.a.assets:
              t.actionSetSidebar(It.a.markets);
              break;
            case Nt.a.trade:
              t.actionSetSidebar(It.a.trade);
          }
      };
      return i.a.createElement(ae, {
        className: "sidebar__panel"
      }, i.a.createElement(ie, {
        colors: l
      }, t.isLoggedIn && g && i.a.createElement(fe, {
        colors: l,
        state: o,
        value: It.a.dashboard,
        tooltipName: E[It.a.dashboard],
        onChange: C,
        icon: i.a.createElement(N, null)
      }), i.a.createElement(fe, {
        colors: l,
        state: o,
        value: It.a.markets,
        tooltipName: E[It.a.markets],
        onChange: C,
        icon: i.a.createElement(O, null)
      }), i.a.createElement(fe, {
        colors: l,
        state: o,
        value: It.a.trade,
        tooltipName: E[It.a.trade],
        onChange: C,
        icon: i.a.createElement(M, null)
      }), i.a.createElement(fe, {
        colors: l,
        state: o,
        value: It.a.positions,
        tooltipName: E[It.a.positions],
        onChange: C,
        counter: 0 !== t.openTradesCount ? t.openTradesCount : null,
        icon: i.a.createElement(H, null)
      }), v && i.a.createElement(fe, {
        colors: l,
        state: o,
        banner: Object(c.t)(Bt()),
        value: It.a.leaderboard,
        tooltipName: E[It.a.leaderboard],
        onChange: C,
        icon: i.a.createElement(mt, null)
      }), s && i.a.createElement(fe, {
        colors: l,
        state: o,
        value: It.a.news,
        tooltipName: E[It.a.news],
        onChange: C,
        icon: i.a.createElement(b, null)
      }), d && i.a.createElement(fe, {
        colors: l,
        state: o,
        value: It.a.video,
        tooltipName: E[It.a.video],
        onChange: C,
        icon: i.a.createElement(ct, null)
      }), m && i.a.createElement(fe, {
        colors: l,
        state: o,
        value: It.a.analysis,
        tooltipName: E[It.a.analysis],
        onChange: C,
        icon: i.a.createElement(et, null)
      }), p && i.a.createElement(fe, {
        colors: l,
        state: o,
        value: It.a.signals,
        tooltipName: E[It.a.signals],
        onChange: C,
        icon: i.a.createElement(ct, null)
      }), f && i.a.createElement(fe, {
        colors: l,
        state: o,
        value: It.a.social,
        tooltipName: E[It.a.social],
        onChange: C,
        icon: i.a.createElement(ct, null)
      }), h && i.a.createElement(fe, {
        colors: l,
        state: o,
        value: It.a.tutorial,
        tooltipName: E[It.a.tutorial],
        onChange: C,
        icon: i.a.createElement(q, null)
      })), i.a.createElement(pe, {
        colors: l,
        value: o,
        onChange: C,
        actionSetSelectedTrade: t.actionSetSelectedTrade
      }));
    }
    ));
  },
  284: function (t, e, n) {
    "use strict";
    var r = n(2)
      , o = n.n(r);
    e.a = function (t) {
      var e = t.value
        , n = t.filledColor
        , r = t.normalColor
        , a = t.textColor
        , i = t.size
        , c = t.text
        , l = t.thickness
        , u = t.withBackground
        , s = t.backgroundColor
        , d = 2 * Math.PI * ((i - l) / 2)
        , p = d.toFixed(3)
        , f = {
          "aria-valuenow": Math.round(e),
          style: {
            display: "block",
            flex: "0 0 ".concat(i, "px"),
            width: i,
            height: i,
            transform: "rotate(-90deg)"
          }
        }
        , m = "".concat(((100 - e) / 100 * d).toFixed(3), "px")
        , b = i / 2;
      return o.a.createElement("div", f, o.a.createElement("svg", {
        viewBox: "".concat(b, " ").concat(b, " ").concat(i, " ").concat(i)
      }, o.a.createElement("circle", {
        cx: i,
        cy: i,
        r: (i - l) / 2,
        fill: "none",
        stroke: r,
        strokeWidth: l
      }), o.a.createElement("circle", {
        cx: i,
        cy: i,
        r: (i - l) / 2,
        fill: "none",
        stroke: n,
        strokeWidth: l,
        strokeDasharray: p,
        strokeDashoffset: m
      }), u && o.a.createElement("circle", {
        transform: "translate(".concat(.6 * i, ", ").concat(.6 * i, ")"),
        cx: "".concat(.4 * i),
        cy: "".concat(.4 * i),
        r: "".concat(.375 * i),
        fill: s
      }), c && o.a.createElement("text", {
        x: i,
        y: -i,
        textAnchor: "middle",
        fill: a,
        dy: ".3em",
        style: {
          transform: "rotate(90deg)",
          fontSize: 12
        }
      }, c)));
    };
  },
  287: function (t, e, n) {
    "use strict";
    n.d(e, "c", (function () {
      return c;
    }
    )),
      n.d(e, "b", (function () {
        return l;
      }
      ));
    var r = n(2)
      , o = n.n(r)
      , a = n(33)
      , i = n(284)
      , c = function (t) {
        return 1e3 * Math.round(t / 1e3);
      }
      , l = function (t) {
        var e, n = c(t);
        if (n > 6048e5)
          return "".concat(Math.ceil(n / 6048e5), "w");
        if (n > 864e5)
          return "".concat(Math.ceil(n / 864e5), "d");
        if (n > 36e5)
          return "".concat(Math.ceil(n / 36e5), "h");
        if (n > 3e5)
          return "".concat(Math.round(n / 6e4), "m");
        if (n > 6e4) {
          var r = Math.floor(n / 6e4)
            , o = Math.round(n % 6e4 / 1e3);
          return "".concat(r, ":").concat((e = o) > 9 ? String(e) : "0".concat(e));
        }
        var a = Math.round(n / 1e3);
        return "".concat(a);
      };
    e.a = Object(a.c)((function (t) {
      return {
        time: t.time
      };
    }
    ))((function (t) {
      var e = t.expiry - t.created
        , n = t.expiry - t.time
        , r = n < 0
        , a = Math.ceil((n - e) / e * 100)
        , c = t.moneyState < 0 ? t.colors.primary : t.colors.secondary
        , u = l(n);
      return r ? null : o.a.createElement("div", {
        className: "trade__countdown"
      }, o.a.createElement(i.a, {
        value: 100 - a,
        filledColor: c,
        normalColor: "transparent",
        size: 30,
        text: u,
        textColor: t.colors.primaryText,
        thickness: 1
      }));
    }
    ));
  },
  289: function (t, e, n) {
    "use strict";
    n.d(e, "b", (function () {
      return c;
    }
    ));
    var r = n(2)
      , o = n.n(r)
      , a = n(33)
      , i = n(277)
      , c = function (t, e) {
        try {
          var n = t ? t.last : null
            , r = e ? parseFloat(e.referencePrice) : null;
          return n && r ? Number(((n - r) / r * 100).toFixed(2)) : null;
        } catch (o) {
          return console.warn(o),
            null;
        }
      };
    e.a = Object(a.c)((function (t, e) {
      return {
        quote: t.quotes[e.instrumentID],
        instrument: t.instruments[e.instrumentID]
      };
    }
    ))((function (t) {
      var e = t.quote
        , n = t.instrument
        , r = t.colors
        , a = t.withArrow
        , l = void 0 !== a && a
        , u = t.withSign
        , s = void 0 !== u && u
        , d = t.height
        , p = t.fontSize
        , f = c(e, n);
      return f && (null === n || void 0 === n ? void 0 : n.isOpen) ? o.a.createElement(i.a, {
        colors: r,
        directionUp: f >= 0,
        height: d,
        fontSize: p
      }, s && f > 0 && o.a.createElement("span", null, "+"), f, "%", l && o.a.createElement("span", null, "\xa0 ", f < 0 ? "\u25be" : "\u25b4")) : o.a.createElement("span", null, "...");
    }
    ));
  },
  291: function (t, e, n) {
    "use strict";
    n.d(e, "e", (function () {
      return Ot;
    }
    )),
      n.d(e, "a", (function () {
        return yt;
      }
      )),
      n.d(e, "c", (function () {
        return jt;
      }
      )),
      n.d(e, "d", (function () {
        return Et;
      }
      ));
    var r = n(89)
      , o = n(58)
      , a = n(2)
      , i = n.n(a)
      , c = n(33)
      , l = n(44)
      , u = n(88)
      , s = n(34)
      , d = n(10)
      , p = n(49)
      , f = n(62)
      , m = n(6)
      , b = n(78);
    function h() {
      var t = Object(o.a)(["\n  flex: 1;\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n  margin: 0 5px;\n  background: ", ";\n  border-radius: 4px;\n\n  .expiration {\n    flex: 1;\n    display: flex;\n    justify-content: ", ";\n    align-items: center;\n    font-size: 13px;\n    font-weight: 500;\n    letter-spacing: 0.11px;\n    color: ", ";\n    margin-bottom: 2px;\n\n    .trades_count {\n      display: inline-block;\n      min-width: 18px;\n      height: 18px;\n      line-height: 18px;\n      text-align: center;\n      font-size: 14px;\n      border-radius: 50%;\n      border: 1px solid ", ";\n      margin-left: 4px;\n      padding: 0 2px;\n    }\n  }\n\n  .expiry_payout_container {\n    flex: 1;\n    justify-content: flex-start;\n\n    .expiry_payout {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      font-size: 10px;\n      letter-spacing: 0.13px;\n      width: 40px;\n      height: 100%;\n      color: ", ";\n    }\n  }\n"]);
      return h = function () {
        return t;
      }
        ,
        t;
    }
    function g() {
      var t = Object(o.a)(["\n  display: flex;\n  box-sizing: border-box;\n  height: 36px;\n  margin-top: 6px;\n  border-radius: 2px;\n"]);
      return g = function () {
        return t;
      }
        ,
        t;
    }
    var v = u.c.div(g())
      , x = u.c.div(h(), (function (t) {
        return t.colors.tradebox.fieldBackground;
      }
      ), (function (t) {
        return t.isCfdOptions ? "center" : "flex-end";
      }
      ), (function (t) {
        return t.colors.primary;
      }
      ), (function (t) {
        return t.colors.primary;
      }
      ), (function (t) {
        return t.colors.sidebarLabelText;
      }
      ))
      , O = n(3)
      , y = n(341)
      , j = n.n(y)
      , E = n(259)
      , w = n(342)
      , C = n.n(w);
    function k() {
      var t = Object(o.a)(["Time Duration"]);
      return k = function () {
        return t;
      }
        ,
        t;
    }
    function T() {
      var t = Object(o.a)(["Time Duration"]);
      return T = function () {
        return t;
      }
        ,
        t;
    }
    function M() {
      var t = Object(o.a)(["", "d"]);
      return M = function () {
        return t;
      }
        ,
        t;
    }
    function S() {
      var t = Object(o.a)(["", "h"]);
      return S = function () {
        return t;
      }
        ,
        t;
    }
    function L() {
      var t = Object(o.a)(["", "m"]);
      return L = function () {
        return t;
      }
        ,
        t;
    }
    function I() {
      var t = Object(o.a)(["", "s"]);
      return I = function () {
        return t;
      }
        ,
        t;
    }
    function _() {
      var t = Object(o.a)(["\n          right: 0;\n        "]);
      return _ = function () {
        return t;
      }
        ,
        t;
    }
    function P() {
      var t = Object(o.a)(["\n          right: 5px;\n        "]);
      return P = function () {
        return t;
      }
        ,
        t;
    }
    function A() {
      var t = Object(o.a)(["\n  position: absolute;\n  top: -10px;\n  ", ";\n  display: block;\n  width: 34px;\n  height: 34px;\n  background: url(", ") no-repeat center;\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n"]);
      return A = function () {
        return t;
      }
        ,
        t;
    }
    function z() {
      var t = Object(o.a)(["\n          cursor: pointer;\n          border: 1px solid transparent;\n        "]);
      return z = function () {
        return t;
      }
        ,
        t;
    }
    function N() {
      var t = Object(o.a)(["\n          border: 1px solid ", ";\n          pointer-events: none;\n          cursor: not-allowed;\n        "]);
      return N = function () {
        return t;
      }
        ,
        t;
    }
    function D() {
      var t = Object(o.a)(["\n  width: 65px;\n  background: #06141f;\n  margin: 1px;\n  border-radius: 2px;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  ", "\n\n  .top, .bottom {\n    white-space: nowrap;\n  }\n\n  .bottom {\n    line-height: 12px;\n  }\n\n  .time {\n    font-size: 13px;\n    color: ", ";\n    opacity: ", ";\n    font-weight: 500;\n  }\n\n  .count {\n    display: inline-block;\n    margin-left: 4px;\n    color: ", ";\n    border: 1px solid ", ";\n    opacity: ", ";\n    font-size: 10px;\n    border-radius: 50%;\n    min-width: 15px;\n    font-weight: 700;\n    padding: 0 2px;\n    text-align: center;\n  }\n\n  .expiry {\n    font-size: 9px;\n    color: #8b9097;\n  }\n\n  .divide {\n    margin-left: 3px;\n    margin-right: 3px;\n    border-left: 0.5px solid #8b9097;\n    height: 7px;\n    display: inline-block;\n  }\n\n  &:hover {\n    border: 1px solid ", ";\n  }\n"]);
      return D = function () {
        return t;
      }
        ,
        t;
    }
    function R() {
      var t = Object(o.a)(["\n            width: 280px;\n          "]);
      return R = function () {
        return t;
      }
        ,
        t;
    }
    function F() {
      var t = Object(o.a)(["\n            width: 285px;\n          "]);
      return F = function () {
        return t;
      }
        ,
        t;
    }
    function B() {
      var t = Object(o.a)(["\n            width: 280px;\n          "]);
      return B = function () {
        return t;
      }
        ,
        t;
    }
    function H() {
      var t = Object(o.a)(["\n            width: 285px;\n          "]);
      return H = function () {
        return t;
      }
        ,
        t;
    }
    function V() {
      var t = Object(o.a)(["\n          right: 0;\n        "]);
      return V = function () {
        return t;
      }
        ,
        t;
    }
    function W() {
      var t = Object(o.a)(["\n          right: ", "px;\n        "]);
      return W = function () {
        return t;
      }
        ,
        t;
    }
    function U() {
      var t = Object(o.a)(["\n          padding: 20px 10px 20px 20px;\n        "]);
      return U = function () {
        return t;
      }
        ,
        t;
    }
    function G() {
      var t = Object(o.a)(["\n          padding: 20px 5px 20px 20px;\n        "]);
      return G = function () {
        return t;
      }
        ,
        t;
    }
    function Y() {
      var t = Object(o.a)(["\n  background-color: #1e2836;\n  ", ";\n  position: absolute;\n  top: ", "px;\n  ", ";\n  box-shadow: 0 0 15px #000;\n\n  .time-duration-label-header {\n    position: relative;\n    height: 40px;\n    font-weight: bold;\n    font-size: 12px;\n    color: #8b9097;\n  }\n\n  .time-duration-container {\n    ", ";\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    max-height: 113px;\n    overflow: auto;\n  }\n\n  .time-duration-container-mobile {\n    ", ";\n    height: ", "px !important;\n\n    .time-duration-container-mobile-frame {\n      display: flex !important;\n      flex-direction: row !important;\n      flex-wrap: wrap !important;\n    }\n  }\n\n  .scrollable-container {\n    &::-webkit-scrollbar {\n      -webkit-appearance: none;\n      width: 6px;\n    }\n\n    &::-webkit-scrollbar-thumb {\n      width: 6px;\n      border-radius: 3px;\n      background-color: rgba(255, 255, 255, 0.7);\n    }\n  }\n"]);
      return Y = function () {
        return t;
      }
        ,
        t;
    }
    function q() {
      var t = Object(o.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 99999;\n\n  .container {\n    position: relative;\n    width: 100%;\n    height: 100%;\n  }\n"]);
      return q = function () {
        return t;
      }
        ,
        t;
    }
    var Z = u.c.div(q())
      , X = u.c.div(Y(), (function (t) {
        return t.isFirefox ? Object(u.b)(G()) : Object(u.b)(U());
      }
      ), (function (t) {
        return t.top;
      }
      ), (function (t) {
        return t.isMobile && !Object(E.a)(t.isMobile) ? Object(u.b)(W(), (window.innerWidth - 310) / 2) : Object(u.b)(V());
      }
      ), (function (t) {
        return t.isFirefox ? Object(u.b)(H()) : Object(u.b)(B());
      }
      ), (function (t) {
        return t.isFirefox ? Object(u.b)(F()) : Object(u.b)(R());
      }
      ), (function (t) {
        return t.tradesLength > 8 ? 113 : t.tradesLength > 4 ? 76 : 38;
      }
      ))
      , Q = u.c.div(D(), (function (t) {
        return t.isActive ? Object(u.b)(N(), t.colors.primary) : Object(u.b)(z());
      }
      ), (function (t) {
        return t.colors.primary;
      }
      ), (function (t) {
        return t.isActive ? 1 : .5;
      }
      ), (function (t) {
        return t.colors.primary;
      }
      ), (function (t) {
        return t.colors.primary;
      }
      ), (function (t) {
        return t.isActive ? 1 : .5;
      }
      ), (function (t) {
        return t.colors.primary;
      }
      ))
      , J = u.c.div(A(), (function (t) {
        return t.isFirefox ? Object(u.b)(P()) : Object(u.b)(_());
      }
      ), j.a, (function (t) {
        return t.colors.primary;
      }
      ))
      , K = Object(c.c)((function (t) {
        return {
          openTrades: t.trades.open
        };
      }
      ), {})((function (t) {
        var e = t.game
          , n = t.getPositionsForExpiry
          , o = t.colors
          , c = t.isMobile
          , u = t.openTrades
          , s = t.expiries
          , d = t.onSelect
          , p = Object(a.useState)(!1)
          , f = Object(r.a)(p, 2)
          , m = f[0]
          , h = f[1]
          , g = Object(a.useRef)(null)
          , v = Object(a.useState)(0)
          , y = Object(r.a)(v, 2)
          , j = y[0]
          , E = y[1]
          , w = function () {
            var t, e = ((null === (t = g.current) || void 0 === t ? void 0 : t.getBoundingClientRect()) || {}).y, n = void 0 === e ? 0 : e, r = P.length > 8 ? 193 : 155;
            E(n - r);
          };
        Object(a.useEffect)((function () {
          return window.addEventListener("resize", w),
            function () {
              return window.removeEventListener("resize", w);
            };
        }
        ), []);
        var _ = e ? n(e) : null
          , P = s.map((function (t) {
            var e = new Date(t.timestamp).getTime()
              , n = u.filter((function (t) {
                return t.expiryTimestamp === e;
              }
              ));
            return Object(O.a)(Object(O.a)({}, t), {}, {
              trades: n
            });
          }
          ))
          , A = function (t) {
            return "string" === typeof t && (t = new Date(Date.parse(t))),
              yt(t, new Date) ? b.a.format(t, "HH:mm") : b.a.format(t, "LLL-d");
          }
          , z = function (t) {
            if (t < 60)
              return Object(l.t)(I(), t);
            if (t < 7200)
              return t /= 60,
                Object(l.t)(L(), t);
            var e = Math.round(t / 3600);
            return e <= 24 ? Object(l.t)(S(), e) : (e = Math.round(e / 24),
              Object(l.t)(M(), e));
          };
        Object(a.useEffect)((function () {
          w();
        }
        ), [m]);
        var N = /firefox/i.test(navigator.userAgent);
        return c ? i.a.createElement(i.a.Fragment, null, i.a.createElement(x, {
          colors: o,
          isCfdOptions: e && e.isCfdOptions,
          ref: g,
          onMouseEnter: function () {
            return h(!0);
          },
          onClick: function () {
            return h(!0);
          }
        }, e && i.a.createElement("div", {
          className: "expiration"
        }, i.a.createElement("span", null, e.isCfdOptions ? "".concat(e.cdfExpiry, "H") : Ot(e.expiry)), Array.isArray(_) && i.a.createElement("span", {
          className: "trades_count"
        }, _.length)), e && !e.isCfdOptions && i.a.createElement("div", {
          className: "expiry_payout_container"
        }, i.a.createElement("span", {
          className: "expiry_payout"
        }, i.a.createElement("span", null, jt(e)), i.a.createElement("span", null, e.payout, "%")))), m && i.a.createElement(Z, {
          onClick: function () {
            return h(!1);
          }
        }, i.a.createElement(X, {
          isMobile: c,
          top: j,
          isFirefox: N,
          tradesLength: Array.isArray(P) ? P.length : 0
        }, i.a.createElement("div", {
          className: "time-duration-label-header"
        }, Object(l.t)(T()), i.a.createElement(J, {
          colors: o,
          onClick: function () {
            return h(!1);
          },
          isFirefox: N
        })), Array.isArray(P) && i.a.createElement(C.a, {
          className: "time-duration-container-mobile",
          scrollAreaColor: "transparent",
          scrollWidth: "6px",
          scrollBarRadius: "3px",
          scrollBarColor: "rgba(255, 255, 255, 0.7)"
        }, P.map((function (t, n) {
          return i.a.createElement(Q, {
            key: "DurationTimeItem".concat(n),
            colors: o,
            isActive: (null === e || void 0 === e ? void 0 : e.expiry) === t.expiry,
            onClick: function () {
              h(!1),
                d(s[n]);
            }
          }, i.a.createElement("div", {
            className: "top"
          }, i.a.createElement("span", {
            className: "time"
          }, A(t.timestamp)), t.trades.length > 0 && i.a.createElement("span", {
            className: "count",
            "data-expiry-index": n
          }, t.trades.length)), i.a.createElement("div", {
            className: "bottom"
          }, i.a.createElement("span", {
            className: "expiry"
          }, z(t.expiry)), i.a.createElement("span", {
            className: "divide"
          }), i.a.createElement("span", {
            className: "expiry"
          }, t.payout, "%")));
        }
        )))))) : i.a.createElement(i.a.Fragment, null, i.a.createElement(x, {
          colors: o,
          isCfdOptions: e && e.isCfdOptions,
          ref: g
        }, e && i.a.createElement("div", {
          className: "expiration"
        }, i.a.createElement("span", {
          onMouseEnter: function () {
            return h(!0);
          },
          onClick: function () {
            return h(!0);
          }
        }, e.isCfdOptions ? "".concat(e.cdfExpiry, "H") : Ot(e.expiry)), Array.isArray(_) && i.a.createElement("span", {
          className: "trades_count"
        }, _.length)), e && !e.isCfdOptions && i.a.createElement("div", {
          className: "expiry_payout_container"
        }, i.a.createElement("span", {
          className: "expiry_payout"
        }, i.a.createElement("span", null, jt(e)), i.a.createElement("span", null, e.payout, "%")))), m && i.a.createElement(Z, {
          onClick: function () {
            return h(!1);
          }
        }, i.a.createElement(X, {
          isMobile: c,
          top: j,
          isFirefox: N,
          tradesLength: Array.isArray(P) ? P.length : 0
        }, i.a.createElement("div", {
          className: "time-duration-label-header"
        }, Object(l.t)(k()), i.a.createElement(J, {
          colors: o,
          onClick: function () {
            return h(!1);
          },
          isFirefox: N
        })), i.a.createElement("div", {
          className: "time-duration-container scrollable-container"
        }, Array.isArray(P) && P.map((function (t, n) {
          return i.a.createElement(Q, {
            colors: o,
            isActive: (null === e || void 0 === e ? void 0 : e.expiry) === t.expiry,
            onClick: function () {
              h(!1),
                d(s[n]);
            }
          }, i.a.createElement("div", {
            className: "top"
          }, i.a.createElement("span", {
            className: "time"
          }, A(t.timestamp)), t.trades.length > 0 && i.a.createElement("span", {
            className: "count",
            "data-expiry-index": n
          }, t.trades.length)), i.a.createElement("div", {
            className: "bottom"
          }, i.a.createElement("span", {
            className: "expiry"
          }, z(t.expiry)), i.a.createElement("span", {
            className: "divide"
          }), i.a.createElement("span", {
            className: "expiry"
          }, t.payout, "%")));
        }
        ))))));
      }
      ));
    function $() {
      var t = Object(o.a)(["\n  flex: 0 0 35px;\n  height: 35px;\n  line-height: 35px;\n  border-radius: 3px;\n  text-align: center;\n  user-select: none;\n  font-size: 30px;\n  color: ", ";\n  opacity: ", ";\n  background-color: ", ";\n\n  cursor: ", ";\n"]);
      return $ = function () {
        return t;
      }
        ,
        t;
    }
    var tt = u.c.div($(), (function (t) {
      return t.colors.primaryText;
    }
    ), (function (t) {
      return t.disabled ? .3 : 1;
    }
    ), (function (t) {
      return t.colors.tradebox.fieldBackground;
    }
    ), (function (t) {
      return t.disabled ? "not-allowed" : "pointer";
    }
    ))
      , et = function (t) {
        var e = t.items
          , n = t.selected
          , r = t.onSelect
          , o = t.colors
          , a = t.disabled
          , c = t.getPositionsForExpiry
          , l = t.isMobile
          , u = e.find((function (t) {
            return n(t);
          }
          ))
          , s = e.findIndex((function (t) {
            return n(t);
          }
          ))
          , d = function (t) {
            return t && s < e.length && e[s + 1] ? r(e[s + 1]) : !t && s >= 1 && e[s - 1] ? r(e[s - 1]) : void 0;
          };
        return i.a.createElement(v, null, i.a.createElement(tt, {
          colors: o,
          disabled: s <= 0 || a,
          onClick: function () {
            return d(!1);
          },
          className: "expires-button-minus"
        }, "\u2013"), i.a.createElement(K, {
          game: u,
          colors: o,
          getPositionsForExpiry: c,
          isMobile: l,
          expiries: e,
          onSelect: r
        }), i.a.createElement(tt, {
          colors: o,
          disabled: s === e.length - 1 || a,
          onClick: function () {
            return d(!0);
          },
          className: "expires-button-plus"
        }, "+"));
      }
      , nt = n(309)
      , rt = n.n(nt);
    function ot() {
      var t = Object(o.a)(["Long"]);
      return ot = function () {
        return t;
      }
        ,
        t;
    }
    function at() {
      var t = Object(o.a)(["Short"]);
      return at = function () {
        return t;
      }
        ,
        t;
    }
    function it() {
      var t = Object(o.a)(["", " days"]);
      return it = function () {
        return t;
      }
        ,
        t;
    }
    function ct() {
      var t = Object(o.a)(["", " day"]);
      return ct = function () {
        return t;
      }
        ,
        t;
    }
    function lt() {
      var t = Object(o.a)(["", " hours"]);
      return lt = function () {
        return t;
      }
        ,
        t;
    }
    function ut() {
      var t = Object(o.a)(["", " hour"]);
      return ut = function () {
        return t;
      }
        ,
        t;
    }
    function st() {
      var t = Object(o.a)(["", " min"]);
      return st = function () {
        return t;
      }
        ,
        t;
    }
    function dt() {
      var t = Object(o.a)(["", " seconds"]);
      return dt = function () {
        return t;
      }
        ,
        t;
    }
    function pt() {
      var t = Object(o.a)(["\n  flex: 1 1 auto;\n  background: ", ";\n  color: ", ";\n  height: 28px;\n  padding-left: 10px;\n  line-height: 28px;\n  border-radius: 2px;\n  font-size: 12px;\n  position: relative;\n\n  &:after {\n    content: '';\n    position: absolute;\n    right: 10px;\n    top: 50%;\n    transform: translateY(-50%);\n    width: 10px;\n    height: 6px;\n    clip-path: polygon(0 0, 100% 0, 50% 100%);\n    background-color: ", ";\n  }\n"]);
      return pt = function () {
        return t;
      }
        ,
        t;
    }
    function ft() {
      var t = Object(o.a)(["\n  flex: 0 0 9px;\n"]);
      return ft = function () {
        return t;
      }
        ,
        t;
    }
    function mt() {
      var t = Object(o.a)(["\n  flex: 1 1 auto;\n  height: 28px;\n  line-height: 28px;\n  text-align: center;\n  cursor: ", ";\n  ", ";\n  user-select: none;\n\n  ", ";\n\n  font-size: 13px;\n  font-weight: 500;\n  letter-spacing: 0.11px;\n\n  margin-left: 1px;\n  margin-right: 1px;\n\n  &:first-child {\n    border-top-left-radius: 2px;\n    border-bottom-left-radius: 2px;\n    margin-left: 0;\n  }\n\n  &:last-child {\n    border-top-right-radius: 2px;\n    border-bottom-right-radius: 2px;\n    margin-right: 0;\n  }\n\n  ", ";\n\n  ", ";\n\n  outline: ", ";\n\n  background-color: ", ";\n\n  opacity: ", ";\n\n  &:hover {\n    color: ", ";\n  }\n"]);
      return mt = function () {
        return t;
      }
        ,
        t;
    }
    function bt() {
      var t = Object(o.a)(["\n  display: flex;\n  height: 28px;\n  line-height: 28px;\n  ", "\n"]);
      return bt = function () {
        return t;
      }
        ,
        t;
    }
    function ht() {
      var t = Object(o.a)(["\n  display: block;\n  width: 100%;\n  margin-top: ", "px;\n  margin-bottom: 14px;\n"]);
      return ht = function () {
        return t;
      }
        ,
        t;
    }
    var gt = u.c.div(ht(), (function (t) {
      return t.isMobile ? 0 : 9;
    }
    ))
      , vt = u.c.div(bt(), (function (t) {
        return t.bottom ? "margin-top: 5px;" : "";
      }
      ))
      , xt = u.c.span(mt(), (function (t) {
        return t.disabled ? "not-allowed" : "pointer";
      }
      ), (function (t) {
        return t.disabled ? "opacity: .4" : "";
      }
      ), (function (t) {
        return t.isMobile ? "max-width: 84px" : "";
      }
      ), (function (t) {
        return t.isMobile ? "" : "color: ".concat(t.disabled ? t.colors.primaryText : t.active ? t.colors.primary : t.colors.primaryText);
      }
      ), (function (t) {
        return t.isMobile ? "color: ".concat(t.disabled ? t.colors.primaryText : t.active ? t.colors.primaryTextContrast : t.colors.primary) : "";
      }
      ), (function (t) {
        return t.isMobile ? "none" : t.active ? "1px solid ".concat(t.colors.primary) : "none";
      }
      ), (function (t) {
        return t.isMobile ? t.active ? t.colors.primary : t.colors.background : t.colors.tradebox.fieldBackground;
      }
      ), (function (t) {
        return t.disabled ? "0.7" : "1";
      }
      ), (function (t) {
        return t.disabled ? t.colors.primaryText : t.primary;
      }
      ))
      , Ot = (u.c.span(ft()),
        u.c.div(pt(), (function (t) {
          return t.colors.tradebox.expiryBackground;
        }
        ), (function (t) {
          return t.colors.primaryText;
        }
        ), (function (t) {
          return t.colors.textfieldText;
        }
        )),
        function (t) {
          if (t < 60)
            return Object(l.t)(dt(), t);
          if (t < 7200)
            return t /= 60,
              Object(l.t)(st(), t);
          var e = Math.round(t / 3600);
          return e <= 24 ? 1 === e ? Object(l.t)(ut(), e) : Object(l.t)(lt(), e) : 1 === (e = Math.round(e / 24)) ? Object(l.t)(ct(), e) : Object(l.t)(it(), e);
        }
      )
      , yt = function (t, e) {
        return t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth() && t.getDate() === e.getDate();
      }
      , jt = function (t) {
        return "string" === typeof t.timestamp && (t.timestamp = new Date(Date.parse(t.timestamp))),
          yt(t.timestamp, new Date) ? b.a.format(t.timestamp, "HH:mm") : b.a.format(t.timestamp, "LLL-d");
      }
      , Et = function (t) {
        return t.isCfdOptions ? "".concat(t.cdfExpiry, "H") : "".concat(jt(t), " (").concat(Ot(t.expiry), ")");
      }
      , wt = function (t, e, n, r) {
        return t ? e.map((function (e) {
          return t[e];
        }
        )).flat().sort((function (t) {
          return t.expiry;
        }
        )).filter((function (t) {
          return !!t;
        }
        )) : [];
      };
    e.b = Object(c.c)((function (t) {
      return {
        defaultGameType: Object(p.a)(t),
        getPositionsForExpiry: Object(f.b)(t),
        positions: t.trades.open
      };
    }
    ), {
      actionSelectGame: s.c,
      actionShowModal: d.e,
      actionSetSelectedCfdOptionExpiry: m.R
    })((function (t) {
      t.isMobile,
        t.positions;
      var e = Object(a.useState)([2, 1, 11])
        , n = Object(r.a)(e, 2)
        , o = n[0]
        , c = n[1]
        , u = t.isCfdOptions ? t.games : wt(t.games, o)
        , s = function (e) {
          return !!t.games && (t.games[e] || []).length > 0;
        }
        , d = {
          short: !s(2),
          long: !s(11) && !s(1)
        };
      return i.a.createElement(gt, {
        isMobile: !1
      }, !t.disableShortLong && i.a.createElement(vt, null, i.a.createElement(xt, {
        colors: t.colors,
        disabled: d.short || t.disabled,
        active: o.includes(2),
        onClick: function () {
          if (!t.disabled && !d.short) {
            c([2]);
            var e = wt(t.games, [2]);
            t.actionSelectGame(e[0]);
          }
        }
      }, Object(l.t)(at())), i.a.createElement(xt, {
        colors: t.colors,
        disabled: d.long || t.disabled,
        active: o.includes(1) || o.includes(11),
        onClick: function () {
          if (!t.disabled && !d.long) {
            c([1, 11]);
            var e = wt(t.games, [1, 11]);
            t.actionSelectGame(e[0]);
          }
        }
      }, Object(l.t)(ot()))), i.a.createElement(et, {
        items: u,
        colors: t.colors,
        disabled: t.disabled,
        selected: function (e) {
          return function (t, e) {
            return !(!t || !e) && (e.isCfdOptions ? e.cdfExpiry === t.cdfExpiry : t.deadPeriod === e.deadPeriod && rt()(t.timestamp).isSame(rt()(e.timestamp)) && t.gameType === e.gameType && t.payout === e.payout && t.round === e.round);
          }(t.game, e);
        },
        onSelect: function (e) {
          !function (e) {
            if (e.isCfdOptions && e.cdfExpiry)
              return t.actionSetSelectedCfdOptionExpiry(e.cdfExpiry);
            !t.disabled && t.actionSelectGame(e);
          }(e);
        },
        getPositionsForExpiry: t.getPositionsForExpiry,
        isMobile: t.isMobile
      }));
    }
    ));
  },
  292: function (t, e, n) {
    "use strict";
    n.d(e, "e", (function () {
      return Y;
    }
    )),
      n.d(e, "f", (function () {
        return q;
      }
      )),
      n.d(e, "c", (function () {
        return Z;
      }
      )),
      n.d(e, "g", (function () {
        return X;
      }
      )),
      n.d(e, "a", (function () {
        return Q;
      }
      )),
      n.d(e, "d", (function () {
        return J;
      }
      ));
    var r = n(89)
      , o = n(58)
      , a = n(2)
      , i = n.n(a)
      , c = n(44)
      , l = n(295)
      , u = n(434)
      , s = n(287)
      , d = function (t) {
        return i.a.createElement("svg", Object.assign({
          xmlns: "http://www.w3.org/2000/svg",
          width: "28",
          height: "28",
          viewBox: "0 0 28 28"
        }, t.style, {
          onClick: t.onClick
        }), i.a.createElement("g", {
          fill: "none",
          fillRule: "evenodd"
        }, i.a.createElement("g", null, i.a.createElement("g", null, i.a.createElement("g", null, i.a.createElement("g", {
          transform: "translate(-430 -360) translate(185 94) translate(73 255) translate(172 11)"
        }, i.a.createElement("circle", {
          cx: "14",
          cy: "14",
          r: "13.5",
          stroke: t.primary
        }), i.a.createElement("g", {
          fill: t.primary
        }, i.a.createElement("path", {
          d: "M8 1L12 6 4 6z",
          transform: "translate(6 6) rotate(-180 8 3.5)"
        }), i.a.createElement("path", {
          d: "M8 10L12 15 4 15z",
          transform: "translate(6 6) matrix(-1 0 0 1 16 0)"
        }), i.a.createElement("path", {
          d: "M4 7.5H12V8.5H4z",
          transform: "translate(6 6)"
        }))))))));
      }
      , p = function (t) {
        return i.a.createElement("svg", Object.assign({
          xmlns: "http://www.w3.org/2000/svg",
          width: "28",
          height: "28",
          viewBox: "0 0 28 28"
        }, t.style, {
          onClick: t.onClick
        }), i.a.createElement("g", {
          fill: "none",
          fillRule: "evenodd"
        }, i.a.createElement("g", null, i.a.createElement("g", null, i.a.createElement("g", null, i.a.createElement("g", {
          transform: "translate(-465 -360) translate(185 94) translate(73 255) translate(207 11)"
        }, i.a.createElement("circle", {
          cx: "14",
          cy: "14",
          r: "13.5",
          stroke: t.primary
        }), i.a.createElement("g", {
          fill: t.primary,
          fillRule: "nonzero"
        }, i.a.createElement("path", {
          d: "M5.683 11.396l.984-.998-2.102-2.142 2.102-2.142-.984-.998L3.58 7.258 1.485 5.116.5 6.114l2.102 2.142L.5 10.398l.985.998L3.58 9.26l2.103 2.136zM14.5 12.82v-1.29h-4.497l2.368-2.536c.621-.674 1.068-1.276 1.34-1.806.273-.53.41-1.037.41-1.52 0-.834-.272-1.487-.815-1.96C12.762 3.237 12.02 3 11.08 3c-.652 0-1.227.13-1.726.393-.5.261-.883.628-1.151 1.1-.268.473-.403 1.004-.403 1.594h1.617c0-.554.144-.991.433-1.31.288-.32.694-.48 1.217-.48.44 0 .788.142 1.048.426.26.284.39.657.39 1.118 0 .35-.1.7-.297 1.048-.197.348-.529.781-.995 1.3l-3.226 3.52v1.11H14.5z",
          transform: "translate(6 6)"
        }))))))));
      }
      , f = n(299)
      , m = n(274)
      , b = n(275)
      , h = n.n(b)
      , g = n(15)
      , v = n(39)
      , x = n(78)
      , O = n(276)
      , y = n(300);
    function j() {
      var t = Object(o.a)(["Double Up"]);
      return j = function () {
        return t;
      }
        ,
        t;
    }
    function E() {
      var t = Object(o.a)(["Hedge"]);
      return E = function () {
        return t;
      }
        ,
        t;
    }
    function w() {
      var t = Object(o.a)(["Sellback"]);
      return w = function () {
        return t;
      }
        ,
        t;
    }
    function C() {
      var t = Object(o.a)(["Sell back"]);
      return C = function () {
        return t;
      }
        ,
        t;
    }
    function k() {
      var t = Object(o.a)(["Close Trade"]);
      return k = function () {
        return t;
      }
        ,
        t;
    }
    function T() {
      var t = Object(o.a)(["Current PnL"]);
      return T = function () {
        return t;
      }
        ,
        t;
    }
    function M() {
      var t = Object(o.a)(["Payout"]);
      return M = function () {
        return t;
      }
        ,
        t;
    }
    function S() {
      var t = Object(o.a)(["Investment"]);
      return S = function () {
        return t;
      }
        ,
        t;
    }
    function L() {
      var t = Object(o.a)(["Current Price"]);
      return L = function () {
        return t;
      }
        ,
        t;
    }
    function I() {
      var t = Object(o.a)(["Strike"]);
      return I = function () {
        return t;
      }
        ,
        t;
    }
    function _() {
      var t = Object(o.a)(["Trade ID"]);
      return _ = function () {
        return t;
      }
        ,
        t;
    }
    function P() {
      var t = Object(o.a)(["Expiry time"]);
      return P = function () {
        return t;
      }
        ,
        t;
    }
    function A() {
      var t = Object(o.a)(["Trade time"]);
      return A = function () {
        return t;
      }
        ,
        t;
    }
    function z() {
      var t = Object(o.a)(["Low"]);
      return z = function () {
        return t;
      }
        ,
        t;
    }
    function N() {
      var t = Object(o.a)(["DOWN"]);
      return N = function () {
        return t;
      }
        ,
        t;
    }
    function D() {
      var t = Object(o.a)(["High"]);
      return D = function () {
        return t;
      }
        ,
        t;
    }
    function R() {
      var t = Object(o.a)(["UP"]);
      return R = function () {
        return t;
      }
        ,
        t;
    }
    function F() {
      var t = Object(o.a)(["Money back"]);
      return F = function () {
        return t;
      }
        ,
        t;
    }
    function B() {
      var t = Object(o.a)(["Out of the money"]);
      return B = function () {
        return t;
      }
        ,
        t;
    }
    function H() {
      var t = Object(o.a)(["In the money"]);
      return H = function () {
        return t;
      }
        ,
        t;
    }
    function V() {
      var t = Object(o.a)(["At the money"]);
      return V = function () {
        return t;
      }
        ,
        t;
    }
    function W() {
      var t = Object(o.a)(["Out of the money"]);
      return W = function () {
        return t;
      }
        ,
        t;
    }
    function U() {
      var t = Object(o.a)(["In the money"]);
      return U = function () {
        return t;
      }
        ,
        t;
    }
    var G = function (t) {
      try {
        return x.a.format(t, "dd-MMM-yyyy HH:mm");
      } catch (e) {
        return t;
      }
    }
      , Y = function (t, e) {
        return (+t.strike - e) * t.direction;
      }
      , q = function (t) {
        return t < 0 ? Object(c.t)(U()) : t > 0 ? Object(c.t)(W()) : Object(c.t)(V());
      }
      , Z = function (t) {
        return t > 0 ? Object(c.t)(H()) : t < 0 ? Object(c.t)(B()) : Object(c.t)(F());
      }
      , X = function (t, e) {
        return 0 === t ? e.secondaryText : t < 0 ? e.primary : e.secondary;
      }
      , Q = function (t, e) {
        return 0 === t ? e.secondaryText : t > 0 ? e.primary : e.secondary;
      }
      , J = function (t, e) {
        if (e < 0) {
          var n = t.userCurrencyStake;
          return n + n * t.payout / 100;
        }
        return e > 0 ? 0 : t.userCurrencyStake;
      };
    e.b = function (t) {
      var e, n = t.userID, o = t.showOpened, b = t.locked, x = t.colors, F = t.position, B = t.selected, H = t.quote, V = t.showSellbackButton, W = t.formatCurrency, U = t.onHedge, K = t.onDoubleUp, $ = t.onSellBack, tt = t.actionSelectExpiry, et = t.actionRefrechTrades, nt = t.isInGroup, rt = Object(a.useState)(o), ot = Object(r.a)(rt, 2), at = ot[0], it = ot[1], ct = F.instrumentName, lt = F.direction, ut = F.instrumentID, st = F.userCurrencyStake, dt = F.allowSellback, pt = F.expiryTimestamp, ft = F.optionManualCloseAllowed, mt = H ? Y(F, H.last) : -1, bt = q(mt), ht = X(mt, x), gt = J(F, mt), vt = !!F.optionValue, xt = Math.max((H.last - F.strike) * F.direction / F.optionValue * F.stake - F.stake, -1 * F.stake), Ot = Z(xt), yt = Q(xt, x), jt = vt ? Object(c.t)(R()) : Object(c.t)(D()), Et = vt ? Object(c.t)(N()) : Object(c.t)(z()), wt = 1 === lt ? jt : Et, Ct = (1 === lt ? x.primary : x.secondary,
        function (t) {
          it(t),
            vt && y.a.emit("positionOpened", {
              position: F,
              opened: t
            });
        }
      );
      return i.a.createElement(l.d, {
        colors: x,
        opened: at,
        isInGroup: nt,
        selected: B,
        onClick: function () {
          return tt(pt);
        }
      }, b && i.a.createElement(l.e, null, i.a.createElement(f.a, {
        colors: x
      })), i.a.createElement(l.h, {
        colors: x,
        opened: at,
        onClick: function () {
          return Ct(!at);
        }
      }, i.a.createElement(m.a, {
        alt: "instrument ".concat(ut),
        src: "".concat("", "/static/icons/instruments/").concat(ut, ".svg"),
        placeholderSrc: h.a
      }), i.a.createElement(l.k, null, i.a.createElement(l.j, {
        colors: x
      }, i.a.createElement("span", {
        className: "trade__asset_name"
      }, ct), i.a.createElement("span", {
        className: "trade__direction"
      }, i.a.createElement("b", {
        style: {
          color: lt > 0 ? x.primary : x.secondary
        }
      }, wt), " ", W(st)), i.a.createElement("span", {
        className: "trade__money",
        style: {
          color: vt ? yt : ht
        }
      }, vt ? Ot : bt)), i.a.createElement(l.i, {
        color: vt ? yt : ht
      }, i.a.createElement(l.m, {
        color: vt ? yt : ht
      }, i.a.createElement("span", null, W(vt ? xt : gt))), i.a.createElement(s.a, {
        created: F.createdTimestamp,
        expiry: F.expiryTimestamp,
        moneyState: vt ? xt : mt,
        colors: x
      }))), i.a.createElement(l.l, {
        colors: x,
        opened: at,
        onClick: function () {
          return Ct(!at);
        }
      })), at && i.a.createElement(l.c, {
        colors: x
      }, i.a.createElement("div", {
        onClick: function () {
          return Ct(!1);
        }
      }, i.a.createElement("div", {
        className: "line"
      }, i.a.createElement("div", null, Object(c.t)(A())), i.a.createElement("span", null, G(F.createdTimestamp))), i.a.createElement("div", {
        className: "line"
      }, i.a.createElement("div", null, Object(c.t)(P())), i.a.createElement("span", null, "string" === typeof (e = F.expiryTimestamp) ? e : G(e))), i.a.createElement("div", {
        className: "line"
      }, i.a.createElement("div", null, Object(c.t)(_())), i.a.createElement("span", null, F.tradeID)), i.a.createElement("div", {
        className: "line"
      }, i.a.createElement("div", null, Object(c.t)(I())), i.a.createElement("span", null, F.strike)), !vt && H && i.a.createElement("div", {
        className: "line"
      }, i.a.createElement("div", null, Object(c.t)(L())), i.a.createElement("span", null, H.last)), i.a.createElement("div", {
        className: "line"
      }, i.a.createElement("div", null, Object(c.t)(S())), i.a.createElement("span", null, W(F.userCurrencyStake))), !vt && i.a.createElement("div", {
        className: "line"
      }, i.a.createElement("div", null, Object(c.t)(M())), i.a.createElement("span", null, function (t) {
        return "string" === typeof t ? t : "".concat(t, "%");
      }(F.payout))), vt && i.a.createElement("div", {
        className: "line"
      }, i.a.createElement("div", null, Object(c.t)(T())), i.a.createElement("span", null, W(xt)))), vt && 1 === ft && i.a.createElement("div", {
        className: "trade_line"
      }, i.a.createElement(u.a, {
        id: "cancel-trade-icon-tooltip",
        tooltip: "Close Trade"
      }, i.a.createElement(l.g, {
        colors: x,
        onClick: function (t) {
          var e;
          if (t.stopPropagation(),
            n)
            return g.a.closeTrades([[+F.tradeID, +n]], null !== (e = v.a.getOneClickTrade()) && void 0 !== e && e).then((function () {
              et();
            }
            ));
        }
      }, Object(c.t)(k())))), !vt && i.a.createElement("div", {
        className: "trade_line"
      }, V && i.a.createElement("div", {
        "data-tip": "",
        "data-for": "sellback-icon-tooltup"
      }, i.a.createElement(l.g, {
        colors: x,
        style: {
          opacity: dt ? 1 : .5
        },
        onClick: dt ? $ : function () { }
      }, Object(c.t)(C())), i.a.createElement(O.a, {
        id: "sellback-icon-tooltup",
        place: "top",
        className: "react-tooltip-small"
      }, Object(c.t)(w()))), i.a.createElement("div", {
        "data-tip": "",
        "data-for": "hedge-icon-tooltup"
      }, i.a.createElement(l.a, null, i.a.createElement(d, {
        primary: x.primary,
        style: {
          "margin-right": "7px"
        },
        onClick: U
      })), i.a.createElement(O.a, {
        id: "hedge-icon-tooltup",
        place: "top",
        className: "react-tooltip-small"
      }, Object(c.t)(E()))), i.a.createElement("div", {
        "data-tip": "",
        "data-for": "double-up-icon-tooltup"
      }, i.a.createElement(l.a, null, i.a.createElement(p, {
        primary: x.primary,
        style: {
          "margin-right": "7px"
        },
        onClick: K
      })), i.a.createElement(O.a, {
        id: "double-up-icon-tooltup",
        place: "top",
        className: "react-tooltip-small"
      }, Object(c.t)(j()))))));
    };
  },
  293: function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
      return l;
    }
    )),
      n.d(e, "b", (function () {
        return u;
      }
      ));
    var r = n(58)
      , o = n(88)
      , a = n(259);
    function i() {
      var t = Object(r.a)(["\n  display: flex;\n  width: 100%;\n  box-sizing: border-box;\n  height: 35px;\n  line-height: 35px;\n  font-size: 14px;\n  letter-spacing: normal;\n\n  img,\n  div {\n    margin-left: 10px;\n    flex: 0 0 24px;\n  }\n  span {\n    margin-left: 10px;\n    flex: 1 1 auto;\n  }\n  cursor: pointer;\n\n  &:hover {\n    color: ", ";\n    background-color: ", ";\n  }\n\n  .themed_icon {\n    svg {\n      vertical-align: middle;\n    }\n  }\n\n  color: ", ";\n  background-color: ", ";\n"]);
      return i = function () {
        return t;
      }
        ,
        t;
    }
    function c() {
      var t = Object(r.a)(["\n  position: fixed;\n  ", ";\n  ", ";\n  ", ";\n  z-index: ", ";\n  max-height: ", "px;\n  overflow-y: auto;\n\n  padding-top: 8px;\n  padding-bottom: 8px;\n\n  width: 171px;\n  border-radius: 2px;\n  box-shadow: 0 2px 10px 0 rgba(20, 31, 44, 0.8);\n  background-color: ", ";\n"]);
      return c = function () {
        return t;
      }
        ,
        t;
    }
    var l = o.c.div(c(), (function (t) {
      return t.top ? "top: ".concat(t.top, "px") : "";
    }
    ), (function (t) {
      return t.left ? "left: ".concat(t.left, "px") : "";
    }
    ), (function (t) {
      return t.bottom ? "bottom: ".concat(t.bottom, "px") : "";
    }
    ), (function (t) {
      var e;
      return null !== (e = t.zIndex) && void 0 !== e ? e : 41;
    }
    ), (function (t) {
      return Object(a.a)(t.isMobile) ? 200 : 400;
    }
    ), (function (t) {
      return t.colors.listBackgroundNormal;
    }
    ))
      , u = o.c.div(i(), (function (t) {
        return t.colors.primaryText;
      }
      ), (function (t) {
        return t.colors.listBackgroundActive;
      }
      ), (function (t) {
        return t.active ? t.colors.primaryText : t.colors.textfieldText;
      }
      ), (function (t) {
        return t.active ? t.colors.listBackgroundNormal : "transparent";
      }
      ));
  },
  294: function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
      return u;
    }
    ));
    var r = n(2)
      , o = n.n(r);
    function a() {
      return (a = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
        return t;
      }
      ).apply(this, arguments);
    }
    function i(t, e) {
      if (null == t)
        return {};
      var n, r, o = function (t, e) {
        if (null == t)
          return {};
        var n, r, o = {}, a = Object.keys(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || (o[n] = t[n]);
        return o;
      }(t, e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]);
      }
      return o;
    }
    var c = o.a.createElement("path", {
      d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
    })
      , l = function (t) {
        var e = t.svgRef
          , n = t.title
          , r = i(t, ["svgRef", "title"]);
        return o.a.createElement("svg", a({
          focusable: "false",
          viewBox: "0 0 24 24",
          "aria-hidden": "true",
          ref: e
        }, r), n ? o.a.createElement("title", null, n) : null, c);
      }
      , u = o.a.forwardRef((function (t, e) {
        return o.a.createElement(l, a({
          svgRef: e
        }, t));
      }
      ));
    n.p;
  },
  295: function (t, e, n) {
    "use strict";
    n.d(e, "c", (function () {
      return M;
    }
    )),
      n.d(e, "h", (function () {
        return T;
      }
      )),
      n.d(e, "d", (function () {
        return k;
      }
      )),
      n.d(e, "f", (function () {
        return C;
      }
      )),
      n.d(e, "g", (function () {
        return _;
      }
      )),
      n.d(e, "a", (function () {
        return P;
      }
      )),
      n.d(e, "e", (function () {
        return N;
      }
      )),
      n.d(e, "b", (function () {
        return D;
      }
      )),
      n.d(e, "k", (function () {
        return S;
      }
      )),
      n.d(e, "i", (function () {
        return A;
      }
      )),
      n.d(e, "j", (function () {
        return L;
      }
      )),
      n.d(e, "l", (function () {
        return I;
      }
      )),
      n.d(e, "m", (function () {
        return z;
      }
      ));
    var r = n(58)
      , o = n(88)
      , a = n(368)
      , i = n.n(a)
      , c = n(369)
      , l = n.n(c);
    function u() {
      var t = Object(r.a)(["\n  display: flex;\n  overflow: auto;\n  flex-direction: column;\n\n  .positions-actions {\n    display: flex;\n    justify-content: space-between;\n    padding: 10px;\n\n    span {\n      font-weight: normal;\n      font-size: 14px;\n      line-height: 16px;\n      color: ", ";\n    }\n\n    .positions_load-more {\n      font-size: 14px;\n      line-height: 16px;\n      text-transform: uppercase;\n      cursor: pointer;\n      color: ", ";\n    }\n  }\n"]);
      return u = function () {
        return t;
      }
        ,
        t;
    }
    function s() {
      var t = Object(r.a)(["\n  position: absolute;\n  z-index: 40;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.1);\n"]);
      return s = function () {
        return t;
      }
        ,
        t;
    }
    function d() {
      var t = Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  text-align: right;\n  margin-right: 10px;\n  color: ", ";\n\n  .label {\n    font-size: 10px;\n    text-align: right;\n    letter-spacing: 0.00641px;\n    color: #66707a;\n  }\n"]);
      return d = function () {
        return t;
      }
        ,
        t;
    }
    function p() {
      var t = Object(r.a)(["\n  display: flex;\n  font-weight: 500;\n  color: ", ";\n  align-items: center;\n"]);
      return p = function () {
        return t;
      }
        ,
        t;
    }
    function f() {
      var t = Object(r.a)(["\n  position: absolute;\n  top: 14px;\n  right: ", "px;\n  bottom: 14px;\n  font-weight: 500;\n  color: ", ";\n"]);
      return f = function () {
        return t;
      }
        ,
        t;
    }
    function m() {
      var t = Object(r.a)(["\n  flex: 0 1 30%;\n  text-align: right;\n  margin-left: 10px;\n"]);
      return m = function () {
        return t;
      }
        ,
        t;
    }
    function b() {
      var t = Object(r.a)(["\n  flex: 1 0 178px;\n  height: 28px;\n  line-height: 28px;\n  border-radius: 2px;\n  border: solid 1px ", ";\n  font-size: 12px;\n  font-weight: 500;\n  letter-spacing: -0.07px;\n  text-align: center;\n  text-transform: uppercase;\n  color: ", ";\n  cursor: pointer;\n\n  &:hover {\n    opacity: 0.7;\n  }\n"]);
      return b = function () {
        return t;
      }
        ,
        t;
    }
    function h() {
      var t = Object(r.a)(["\n  display: block;\n  width: 20px;\n  height: 10px;\n  position: absolute;\n  bottom: 5px;\n  left: calc(50% - 10px);\n  cursor: pointer;\n\n  background: url(", ") no-repeat center;\n  color: ", ";\n"]);
      return h = function () {
        return t;
      }
        ,
        t;
    }
    function g() {
      var t = Object(r.a)(["\n  display: block;\n  width: 20px;\n  height: 10px;\n  position: absolute;\n  bottom: 5px;\n  left: calc(50% - 10px);\n  cursor: pointer;\n\n  background: url(", ") no-repeat center;\n  color: ", ";\n"]);
      return g = function () {
        return t;
      }
        ,
        t;
    }
    function v() {
      var t = Object(r.a)(["\n  width: 28px;\n  height: 100%;\n  border-left: 1px solid ", ";\n  margin-left: 10px;\n  background: url(", ") no-repeat\n    center;\n  cursor: pointer;\n"]);
      return v = function () {
        return t;
      }
        ,
        t;
    }
    function x() {
      var t = Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-left: 6px;\n\n  .trade__asset_name {\n    font-size: 11px;\n    letter-spacing: 0.09px;\n    color: ", ";\n  }\n  .trade__direction {\n    font-size: 10px;\n    letter-spacing: 0.01px;\n    color: #66707a;\n    text-transform: uppercase;\n  }\n  .trade__money {\n    font-size: 10px;\n    letter-spacing: 0.01px;\n  }\n"]);
      return x = function () {
        return t;
      }
        ,
        t;
    }
    function O() {
      var t = Object(r.a)(["\n  display: flex;\n  flex: 1;\n  justify-content: space-between;\n  align-items: center;\n"]);
      return O = function () {
        return t;
      }
        ,
        t;
    }
    function y() {
      var t = Object(r.a)(["\n  padding: 10px;\n  box-sizing: border-box;\n  position: relative;\n\n  .line {\n    display: flex;\n    div {\n      flex: 1 1 auto;\n      text-align: left;\n      font-size: 12px;\n      line-height: 1.42;\n      letter-spacing: 0.01px;\n      color: #646e79;\n    }\n    span {\n      flex: 1 1 auto;\n      text-align: right;\n      font-size: 12px;\n      line-height: 1.42;\n      letter-spacing: 0.01px;\n      color: ", ";\n    }\n  }\n  .trade_line {\n    display: flex;\n    height: 28px;\n    margin-top: 18px;\n    margin-bottom: 21px;\n\n    div:nth-child(1) {\n      flex: 1 0 178px;\n    }\n\n    div:nth-child(2) {\n      flex: 0 1 30%;\n    }\n\n    div:nth-child(3) {\n      flex: 0 1 30%;\n    }\n  }\n"]);
      return y = function () {
        return t;
      }
        ,
        t;
    }
    function j() {
      var t = Object(r.a)(["\n  display: flex;\n  width: 100%;\n  height: 50px;\n  box-sizing: border-box;\n\n  position: relative;\n  background-color: ", ";\n\n  img {\n    margin: 5px 0 0 10px;\n    width: 26px;\n    height: 26px;\n  }\n"]);
      return j = function () {
        return t;
      }
        ,
        t;
    }
    function E() {
      var t = Object(r.a)(["\n  position: relative;\n  display: block;\n  box-sizing: border-box;\n  margin-bottom: 5px;\n  background: ", ";\n\n  &:before {\n    content: '';\n    position: absolute;\n    height: 100%;\n    background-color: ", ";\n    width: ", ";\n    z-index: 1;\n  }\n\n  &:hover {\n    outline: 1px solid ", ";\n  }\n"]);
      return E = function () {
        return t;
      }
        ,
        t;
    }
    function w() {
      var t = Object(r.a)(["\n  display: block;\n  padding: 10px 1px;\n  box-sizing: border-box;\n"]);
      return w = function () {
        return t;
      }
        ,
        t;
    }
    var C = o.c.div(w())
      , k = o.c.span(E(), (function (t) {
        return t.opened ? t.colors.sidebarElementActive : "none";
      }
      ), (function (t) {
        return t.selected || t.isInGroup ? t.colors.primary : t.colors.background;
      }
      ), (function (t) {
        return t.isInGroup ? "4px" : "";
      }
      ), (function (t) {
        return t.colors.primary;
      }
      ))
      , T = o.c.div(j(), (function (t) {
        return t.opened ? t.colors.sidebarElementActive : t.colors.background;
      }
      ))
      , M = o.c.div(y(), (function (t) {
        return t.colors.primaryText;
      }
      ))
      , S = o.c.div(O())
      , L = o.c.div(x(), (function (t) {
        return t.colors.primaryText;
      }
      ))
      , I = o.c.div(v(), (function (t) {
        return t.colors.panelBorder;
      }
      ), (function (t) {
        return t.opened ? l.a : i.a;
      }
      ))
      , _ = (o.c.div(g(), i.a, (function (t) {
        return t.colors.sidebarBorder;
      }
      )),
        o.c.div(h(), l.a, (function (t) {
          return t.colors.secondaryText;
        }
        )),
        o.c.div(b(), (function (t) {
          return t.colors.primary;
        }
        ), (function (t) {
          return t.colors.primary;
        }
        )))
      , P = o.c.div(m())
      , A = (o.c.span(f(), (function (t) {
        return t.closed ? 10 : 50;
      }
      ), (function (t) {
        return t.color;
      }
      )),
        o.c.div(p(), (function (t) {
          return t.color;
        }
        )))
      , z = o.c.div(d(), (function (t) {
        return t.color;
      }
      ))
      , N = o.c.div(s())
      , D = o.c.div(u(), (function (t) {
        return t.colors.primaryText;
      }
      ), (function (t) {
        return t.colors.primary;
      }
      ));
  },
  298: function (t, e, n) {
    "use strict";
    var r = n(2)
      , o = n.n(r)
      , a = n(49)
      , i = n(33);
    e.a = Object(i.c)((function (t) {
      return {
        dataForInstrument: Object(a.i)(t)
      };
    }
    ))((function (t) {
      var e = t.instrumentId
        , n = t.dataForInstrument
        , r = t.fixed
        , a = n(Number(e)).price;
      if (!r)
        return o.a.createElement("span", null, a);
      var i = parseFloat(a).toFixed(r);
      return o.a.createElement("span", null, isNaN(Number(i)) ? a : i);
    }
    ));
  },
  299: function (t, e, n) {
    "use strict";
    var r = n(2)
      , o = n.n(r)
      , a = n(33);
    e.a = Object(a.c)((function (t) {
      return {
        colors: t.theme
      };
    }
    ))((function (t) {
      var e = t.colors
        , n = t.width
        , r = t.height
        , a = t.fill
        , i = e.primary
        , c = a || i;
      return o.a.createElement("svg", {
        style: {
          margin: "auto",
          background: "rgba(0, 0, 0, 0)",
          display: "block",
          shapeRendering: "auto"
        },
        width: n || "200px",
        height: r || "200px",
        viewBox: "0 0 100 100",
        preserveAspectRatio: "xMidYMid"
      }, o.a.createElement("g", {
        transform: "rotate(0 50 50)"
      }, o.a.createElement("rect", {
        x: "47",
        y: "24",
        rx: "3",
        ry: "4.08",
        width: "6",
        height: "12",
        fill: c
      }, o.a.createElement("animate", {
        attributeName: "opacity",
        values: "1;0",
        keyTimes: "0;1",
        dur: "1s",
        begin: "-0.9166666666666666s",
        repeatCount: "indefinite"
      }))), o.a.createElement("g", {
        transform: "rotate(30 50 50)"
      }, o.a.createElement("rect", {
        x: "47",
        y: "24",
        rx: "3",
        ry: "4.08",
        width: "6",
        height: "12",
        fill: c
      }, o.a.createElement("animate", {
        attributeName: "opacity",
        values: "1;0",
        keyTimes: "0;1",
        dur: "1s",
        begin: "-0.8333333333333334s",
        repeatCount: "indefinite"
      }))), o.a.createElement("g", {
        transform: "rotate(60 50 50)"
      }, o.a.createElement("rect", {
        x: "47",
        y: "24",
        rx: "3",
        ry: "4.08",
        width: "6",
        height: "12",
        fill: c
      }, o.a.createElement("animate", {
        attributeName: "opacity",
        values: "1;0",
        keyTimes: "0;1",
        dur: "1s",
        begin: "-0.75s",
        repeatCount: "indefinite"
      }))), o.a.createElement("g", {
        transform: "rotate(90 50 50)"
      }, o.a.createElement("rect", {
        x: "47",
        y: "24",
        rx: "3",
        ry: "4.08",
        width: "6",
        height: "12",
        fill: c
      }, o.a.createElement("animate", {
        attributeName: "opacity",
        values: "1;0",
        keyTimes: "0;1",
        dur: "1s",
        begin: "-0.6666666666666666s",
        repeatCount: "indefinite"
      }))), o.a.createElement("g", {
        transform: "rotate(120 50 50)"
      }, o.a.createElement("rect", {
        x: "47",
        y: "24",
        rx: "3",
        ry: "4.08",
        width: "6",
        height: "12",
        fill: c
      }, o.a.createElement("animate", {
        attributeName: "opacity",
        values: "1;0",
        keyTimes: "0;1",
        dur: "1s",
        begin: "-0.5833333333333334s",
        repeatCount: "indefinite"
      }))), o.a.createElement("g", {
        transform: "rotate(150 50 50)"
      }, o.a.createElement("rect", {
        x: "47",
        y: "24",
        rx: "3",
        ry: "4.08",
        width: "6",
        height: "12",
        fill: c
      }, o.a.createElement("animate", {
        attributeName: "opacity",
        values: "1;0",
        keyTimes: "0;1",
        dur: "1s",
        begin: "-0.5s",
        repeatCount: "indefinite"
      }))), o.a.createElement("g", {
        transform: "rotate(180 50 50)"
      }, o.a.createElement("rect", {
        x: "47",
        y: "24",
        rx: "3",
        ry: "4.08",
        width: "6",
        height: "12",
        fill: c
      }, o.a.createElement("animate", {
        attributeName: "opacity",
        values: "1;0",
        keyTimes: "0;1",
        dur: "1s",
        begin: "-0.4166666666666667s",
        repeatCount: "indefinite"
      }))), o.a.createElement("g", {
        transform: "rotate(210 50 50)"
      }, o.a.createElement("rect", {
        x: "47",
        y: "24",
        rx: "3",
        ry: "4.08",
        width: "6",
        height: "12",
        fill: c
      }, o.a.createElement("animate", {
        attributeName: "opacity",
        values: "1;0",
        keyTimes: "0;1",
        dur: "1s",
        begin: "-0.3333333333333333s",
        repeatCount: "indefinite"
      }))), o.a.createElement("g", {
        transform: "rotate(240 50 50)"
      }, o.a.createElement("rect", {
        x: "47",
        y: "24",
        rx: "3",
        ry: "4.08",
        width: "6",
        height: "12",
        fill: c
      }, o.a.createElement("animate", {
        attributeName: "opacity",
        values: "1;0",
        keyTimes: "0;1",
        dur: "1s",
        begin: "-0.25s",
        repeatCount: "indefinite"
      }))), o.a.createElement("g", {
        transform: "rotate(270 50 50)"
      }, o.a.createElement("rect", {
        x: "47",
        y: "24",
        rx: "3",
        ry: "4.08",
        width: "6",
        height: "12",
        fill: c
      }, o.a.createElement("animate", {
        attributeName: "opacity",
        values: "1;0",
        keyTimes: "0;1",
        dur: "1s",
        begin: "-0.16666666666666666s",
        repeatCount: "indefinite"
      }))), o.a.createElement("g", {
        transform: "rotate(300 50 50)"
      }, o.a.createElement("rect", {
        x: "47",
        y: "24",
        rx: "3",
        ry: "4.08",
        width: "6",
        height: "12",
        fill: c
      }, o.a.createElement("animate", {
        attributeName: "opacity",
        values: "1;0",
        keyTimes: "0;1",
        dur: "1s",
        begin: "-0.08333333333333333s",
        repeatCount: "indefinite"
      }))), o.a.createElement("g", {
        transform: "rotate(330 50 50)"
      }, o.a.createElement("rect", {
        x: "47",
        y: "24",
        rx: "3",
        ry: "4.08",
        width: "6",
        height: "12",
        fill: c
      }, o.a.createElement("animate", {
        attributeName: "opacity",
        values: "1;0",
        keyTimes: "0;1",
        dur: "1s",
        begin: "0s",
        repeatCount: "indefinite"
      }))));
    }
    ));
  },
  300: function (t, e, n) {
    "use strict";
    var r = n(370)
      , o = n.n(r);
    e.a = new o.a;
  },
  303: function (t, e, n) {
    "use strict";
    var r = n(58)
      , o = n(2)
      , a = n.n(o)
      , i = n(33)
      , c = n(88);
    function l() {
      var t = Object(r.a)(["\n  flex: 1;\n  box-sizing: border-box;\n  font-size: 11px;\n  letter-spacing: -0.06px;\n  text-align: center;\n  cursor: pointer;\n  user-select: none;\n  outline: none;\n\n  color: ", ";\n  border-bottom: ", ";\n"]);
      return l = function () {
        return t;
      }
        ,
        t;
    }
    function u() {
      var t = Object(r.a)(["\n  display: flex;\n  width: 100%;\n  height: 41px;\n  line-height: 41px;\n"]);
      return u = function () {
        return t;
      }
        ,
        t;
    }
    var s = c.c.div(u())
      , d = c.c.span(l(), (function (t) {
        return t.active ? t.colors.primary : t.colors.primaryText;
      }
      ), (function (t) {
        return t.active ? "2px solid ".concat(t.colors.primary) : "1px solid ".concat(t.colors.sidebarBorder);
      }
      ));
    e.a = Object(i.c)((function (t) {
      return {
        colors: t.theme
      };
    }
    ))((function (t) {
      var e = t.value
        , n = t.colors
        , r = t.tabs
        , o = t.onChange;
      return a.a.createElement(s, null, r.map((function (t, r) {
        return a.a.createElement(d, {
          key: r,
          colors: n,
          tabIndex: r + 1,
          active: e === r,
          onClick: function () {
            return o(r);
          }
        }, t);
      }
      )));
    }
    ));
  },
  304: function (t, e, n) {
    "use strict";
    n.d(e, "f", (function () {
      return v;
    }
    )),
      n.d(e, "c", (function () {
        return p;
      }
      )),
      n.d(e, "a", (function () {
        return f;
      }
      )),
      n.d(e, "e", (function () {
        return m;
      }
      )),
      n.d(e, "g", (function () {
        return b;
      }
      )),
      n.d(e, "d", (function () {
        return h;
      }
      )),
      n.d(e, "b", (function () {
        return g;
      }
      ));
    var r = n(58)
      , o = n(88);
    function a() {
      var t = Object(r.a)(["\n\theight: 100%;\n\toverflow: auto;\n"]);
      return a = function () {
        return t;
      }
        ,
        t;
    }
    function i() {
      var t = Object(r.a)(["\n\tfont-weight: bold;\n\tfont-size: 12px;\n\tline-height: 14px;\n\tmargin-top: 14px;\n\tcursor: pointer;\n\toutline: none;\n\n\tcolor: ", ";\n"]);
      return i = function () {
        return t;
      }
        ,
        t;
    }
    function c() {
      var t = Object(r.a)(["\n\tmargin-top: 14px;\n\tfont-size: 12px;\n\tline-height: 14px;\n\n\tcolor: ", ";\n"]);
      return c = function () {
        return t;
      }
        ,
        t;
    }
    function l() {
      var t = Object(r.a)(["\n\tmargin: 0;\n\tfont-weight: 500;\n\tfont-size: 14px;\n\tline-height: 16px;\n\n\tcolor: ", ";\n"]);
      return l = function () {
        return t;
      }
        ,
        t;
    }
    function u() {
      var t = Object(r.a)(["\n\twidth: 100%;\n\theight: ", ";\n\tobject-fit: cover;\n"]);
      return u = function () {
        return t;
      }
        ,
        t;
    }
    function s() {
      var t = Object(r.a)(["\n\tpadding: 10px 10px 20px 11px;\n\twidth: 100%;\n\tword-break: break-word;\n\n\tbackground-color: ", ";\n"]);
      return s = function () {
        return t;
      }
        ,
        t;
    }
    function d() {
      var t = Object(r.a)(["\n\twidth: 100%;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tmargin-top: 20px;\n"]);
      return d = function () {
        return t;
      }
        ,
        t;
    }
    var p = o.c.div(d())
      , f = o.c.div(s(), (function (t) {
        return t.colors.leftPanel.itemBackground;
      }
      ))
      , m = o.c.img(u(), (function (t) {
        return t.visible ? "134px" : 0;
      }
      ))
      , b = o.c.h2(l(), (function (t) {
        return t.colors.primaryText;
      }
      ))
      , h = o.c.div(c(), (function (t) {
        return t.colors.leftPanel.textColor;
      }
      ))
      , g = o.c.div(i(), (function (t) {
        return t.colors.primary;
      }
      ))
      , v = o.c.div(a());
  },
  305: function (t, e, n) {
    "use strict";
    var r = n(58)
      , o = n(89)
      , a = n(2)
      , i = n.n(a)
      , c = n(33)
      , l = n(44)
      , u = n(6)
      , s = n(291)
      , d = n(88)
      , p = n(302);
    function f() {
      var t = Object(r.a)(["\n          font-size: 30px;\n        "]);
      return f = function () {
        return t;
      }
        ,
        t;
    }
    function m() {
      var t = Object(r.a)([""]);
      return m = function () {
        return t;
      }
        ,
        t;
    }
    function b() {
      var t = Object(r.a)(["\n  flex: 0 0 35px;\n  height: 35px;\n  line-height: 35px;\n  border-radius: 3px;\n  text-align: center;\n  user-select: none;\n  ", "\n  color: ", ";\n  background-color: ", ";\n  cursor: ", ";\n"]);
      return b = function () {
        return t;
      }
        ,
        t;
    }
    function h() {
      var t = Object(r.a)(["\n  display: flex;\n  margin-top: 10px;\n  margin-bottom: 10px;\n\n  .amount-input {\n    flex: 1;\n    box-sizing: border-box;\n    height: 35px;\n    border-radius: 3px;\n    min-width: 0;\n    margin: 0 5px;\n    font-size: 16px;\n    font-weight: 500;\n    line-height: 0.75;\n    letter-spacing: 0.13px;\n    text-align: center;\n    border: none;\n    outline: none;\n\n    color: ", ";\n    background-color: ", ";\n  }\n"]);
      return h = function () {
        return t;
      }
        ,
        t;
    }
    var g, v, x = function (t, e, n, r, o) {
      return !(!o && (t > 0 || e > 0)) && (t + e > r || t + e < n);
    }, O = d.c.div(h(), (function (t) {
      return t.colors.primary;
    }
    ), (function (t) {
      return t.colors.tradebox.fieldBackground;
    }
    )), y = d.c.div(b(), (function (t) {
      return t.isCfdOptions ? Object(d.b)(m()) : Object(d.b)(f());
    }
    ), (function (t) {
      return t.colors.primaryText;
    }
    ), (function (t) {
      return t.colors.tradebox.fieldBackground;
    }
    ), (function (t) {
      return t.disabled ? "not-allowed" : "pointer";
    }
    )), j = function (t) {
      var e = t.defaultStake
        , n = function (e) {
          if (x(Number(t.value), e, t.minStake, t.maxStake, t.loggedIn))
            ;
          else {
            var n = Number(t.value) + e;
            t.onChange(n > 0 ? n : 0);
          }
        };
      return i.a.createElement(O, {
        isMobile: t.isMobile,
        colors: t.colors
      }, i.a.createElement(y, {
        colors: t.colors,
        disabled: x(Number(t.value), -e, t.minStake, t.maxStake, t.loggedIn),
        onClick: function () {
          return n(-e);
        },
        isCfdOptions: t.isCfdOptions
      }, "-"), i.a.createElement(p.a, {
        className: "amount-input",
        name: "amount",
        value: t.value,
        allowNegativeValue: !1,
        decimalsLimit: t.precision,
        prefix: t.currencySymbol,
        onValueChange: function (e) {
          return t.onChange(e ? parseFloat(e) : 0);
        },
        onFocus: function () {
          var e;
          return null === (e = t.onFocus) || void 0 === e ? void 0 : e.call(t);
        },
        readOnly: null != t.onFocus
      }), i.a.createElement(y, {
        colors: t.colors,
        disabled: x(Number(t.value), e, t.minStake, t.maxStake, t.loggedIn),
        onClick: function () {
          return n(e);
        },
        isCfdOptions: t.isCfdOptions
      }, "+"));
    }, E = n(259);
    function w() {
      var t = Object(r.a)(["Low"]);
      return w = function () {
        return t;
      }
        ,
        t;
    }
    function C() {
      var t = Object(r.a)(["DOWN"]);
      return C = function () {
        return t;
      }
        ,
        t;
    }
    function k() {
      var t = Object(r.a)(["\n            border: 1px solid ", " !important;\n          "]);
      return k = function () {
        return t;
      }
        ,
        t;
    }
    function T() {
      var t = Object(r.a)(["\n            border: 1px solid\n              ", " !important;\n          "]);
      return T = function () {
        return t;
      }
        ,
        t;
    }
    function M() {
      var t = Object(r.a)(["\n            color: ", " !important;\n          "]);
      return M = function () {
        return t;
      }
        ,
        t;
    }
    function S() {
      var t = Object(r.a)(["\n            color: ", " !important;\n          "]);
      return S = function () {
        return t;
      }
        ,
        t;
    }
    function L() {
      var t = Object(r.a)(["\n  margin-top: ", "px;\n  margin-bottom: ", "px;\n  color: ", ";\n  background: ", ";\n  border: 1px solid\n    ", ";\n  display: flex;\n  justify-content: center;\n\n  svg {\n    stroke: ", " !important;\n  }\n\n  &:hover {\n    ", "\n    ", "\n\n    svg {\n      stroke: ", " !important;\n    }\n  }\n"]);
      return L = function () {
        return t;
      }
        ,
        t;
    }
    function I() {
      var t = Object(r.a)(["High"]);
      return I = function () {
        return t;
      }
        ,
        t;
    }
    function _() {
      var t = Object(r.a)(["UP"]);
      return _ = function () {
        return t;
      }
        ,
        t;
    }
    function P() {
      var t = Object(r.a)(["\n            border: 1px solid ", " !important;\n          "]);
      return P = function () {
        return t;
      }
        ,
        t;
    }
    function A() {
      var t = Object(r.a)(["\n            border: 1px solid\n              ", " !important;\n          "]);
      return A = function () {
        return t;
      }
        ,
        t;
    }
    function z() {
      var t = Object(r.a)(["\n            color: ", " !important;\n          "]);
      return z = function () {
        return t;
      }
        ,
        t;
    }
    function N() {
      var t = Object(r.a)(["\n            color: ", " !important;\n          "]);
      return N = function () {
        return t;
      }
        ,
        t;
    }
    function D() {
      var t = Object(r.a)(["\n  margin-top: ", "px;\n  margin-bottom: ", "px;\n  color: ", ";\n  background: ", ";\n  border: 1px solid\n    ", ";\n  display: flex;\n  justify-content: center;\n\n  svg {\n    stroke: ", ";\n  }\n\n  &:hover {\n    ", "\n\n    ", "\n\n    svg {\n      stroke: ", " !important;\n    }\n  }\n"]);
      return D = function () {
        return t;
      }
        ,
        t;
    }
    function R() {
      var t = Object(r.a)([""]);
      return R = function () {
        return t;
      }
        ,
        t;
    }
    function F() {
      var t = Object(r.a)(["\n            line-height: 20px;\n          "]);
      return F = function () {
        return t;
      }
        ,
        t;
    }
    function B() {
      var t = Object(r.a)([""]);
      return B = function () {
        return t;
      }
        ,
        t;
    }
    function H() {
      var t = Object(r.a)(["\n            line-height: 20px;\n          "]);
      return H = function () {
        return t;
      }
        ,
        t;
    }
    function V() {
      var t = Object(r.a)([""]);
      return V = function () {
        return t;
      }
        ,
        t;
    }
    function W() {
      var t = Object(r.a)(["\n            line-height: 20px;\n          "]);
      return W = function () {
        return t;
      }
        ,
        t;
    }
    function U() {
      var t = Object(r.a)(["\n            margin-right: ", "px;\n            padding-top: 4px;\n          "]);
      return U = function () {
        return t;
      }
        ,
        t;
    }
    function G() {
      var t = Object(r.a)(["\n            padding-top: 4px;\n          "]);
      return G = function () {
        return t;
      }
        ,
        t;
    }
    function Y() {
      var t = Object(r.a)([""]);
      return Y = function () {
        return t;
      }
        ,
        t;
    }
    function q() {
      var t = Object(r.a)(["\n          gap: 8px;\n          justify-content: center;\n        "]);
      return q = function () {
        return t;
      }
        ,
        t;
    }
    function Z() {
      var t = Object(r.a)([""]);
      return Z = function () {
        return t;
      }
        ,
        t;
    }
    function X() {
      var t = Object(r.a)(["\n          padding: 5px 0;\n        "]);
      return X = function () {
        return t;
      }
        ,
        t;
    }
    function Q() {
      var t = Object(r.a)(["\n  display: flex;\n  height: ", "px;\n  line-height: 50px;\n  font-size: 18px;\n  pointer-events: ", ";\n  border-radius: 5px;\n  cursor: pointer;\n  user-select: none;\n  ", ";\n\n  ", "\n\n  .dp__arrow {\n    ", "\n    ", "\n  }\n\n  .dp__caption {\n    font-weight: bold;\n    letter-spacing: 0.01px;\n    text-transform: uppercase;\n    ", "\n  }\n\n  .dp__payout {\n    margin-left: ", "px;\n    font-weight: bold;\n    letter-spacing: 0.01px;\n    ", "\n  }\n"]);
      return Q = function () {
        return t;
      }
        ,
        t;
    }
    !function (t) {
      t[t.normal = 0] = "normal",
        t[t.active = 1] = "active",
        t[t.depressed = 2] = "depressed";
    }(g || (g = {})),
      function (t) {
        t.high = "high",
          t.low = "low";
      }(v || (v = {}));
    var J = function (t, e) {
      switch (t.value) {
        case 0:
          return g.normal;
        case 1:
          return e === v.high ? g.active : g.depressed;
        case -1:
          return e === v.low ? g.active : g.depressed;
        default:
          return g.normal;
      }
    }
      , K = function (t, e) {
        if (t.disabled)
          return "transparent";
        switch (J(t, e)) {
          case g.active:
            return t.colors.tradebox["".concat(e, "Active")];
          case g.depressed:
            return t.colors.tradebox["".concat(e, "Depressed")];
          default:
            return t.colors.tradebox["".concat(e, "Normal")];
        }
      }
      , $ = function (t, e) {
        if (t.disabled)
          return t.colors.secondaryText;
        switch (J(t, e)) {
          case g.active:
            return t.colors.tradebox["".concat(e, "Active")];
          case g.depressed:
            return t.colors.tradebox["".concat(e, "Depressed")];
          default:
            return t.colors.tradebox["".concat(e, "Normal")];
        }
      }
      , tt = function (t, e) {
        if (t.disabled)
          return t.colors.secondaryText;
        switch (J(t, e)) {
          case g.active:
            return t.colors.tradebox.highlowDepressedTextColor;
          case g.depressed:
          default:
            return t.colors.tradebox["".concat(e, "Text")];
        }
      }
      , et = d.c.div(Q(), (function (t) {
        return Object(E.a)(t.isMobile) ? 70 : 50;
      }
      ), (function (t) {
        return t.disabled ? "none" : "auto";
      }
      ), (function (t) {
        return Object(E.a)(t.isMobile) ? Object(d.b)(X()) : Object(d.b)(Z());
      }
      ), (function (t) {
        return t.isCfdOptions ? Object(d.b)(q()) : Object(d.b)(Y());
      }
      ), (function (t) {
        return t.isCfdOptions ? Object(d.b)(G()) : Object(d.b)(U(), Object(E.a)(t.isMobile) ? 0 : 14);
      }
      ), (function (t) {
        return Object(E.a)(t.isMobile) ? Object(d.b)(W()) : Object(d.b)(V());
      }
      ), (function (t) {
        return Object(E.a)(t.isMobile) ? Object(d.b)(H()) : Object(d.b)(B());
      }
      ), (function (t) {
        return Object(E.a)(t.isMobile) ? 5 : 12;
      }
      ), (function (t) {
        return Object(E.a)(t.isMobile) ? Object(d.b)(F()) : Object(d.b)(R());
      }
      ))
      , nt = Object(d.c)(et)(D(), (function (t) {
        return t.isMobile ? 0 : 10;
      }
      ), (function (t) {
        return t.isMobile ? 0 : 10;
      }
      ), (function (t) {
        return 1 === t.value ? t.colors.primaryTextContrast : tt(t, v.high);
      }
      ), (function (t) {
        return K(t, v.high);
      }
      ), (function (t) {
        return $(t, v.high);
      }
      ), (function (t) {
        return 1 === t.value ? t.colors.primaryTextContrast : tt(t, v.high);
      }
      ), (function (t) {
        return t.isMobile ? Object(d.b)(N(), t.sendingTrade || 1 === t.value ? t.colors.primaryTextContrast : tt(t, v.high)) : Object(d.b)(z(), t.colors.primaryTextContrast);
      }
      ), (function (t) {
        return t.isMobile ? Object(d.b)(A(), t.sendingTrade || 1 === t.value ? t.colors.tradebox.highText : K(t, v.high)) : Object(d.b)(P(), t.colors.tradebox.highText);
      }
      ), (function (t) {
        return t.isMobile ? t.sendingTrade || 1 === t.value ? t.colors.primaryTextContrast : tt(t, v.high) : t.colors.primaryTextContrast;
      }
      ))
      , rt = function (t) {
        return i.a.createElement(nt, {
          disabled: t.disabled,
          colors: t.colors,
          value: t.value,
          isMobile: t.isMobile,
          isCfdOptions: null == t.payout,
          onClick: function () {
            return t.onChange(1 === t.value ? 0 : 1);
          },
          onMouseEnter: function () {
            return t.onHover(1);
          },
          onMouseLeave: function () {
            return t.onHover(0);
          },
          sendingTrade: t.sendingTrade
        }, i.a.createElement("span", {
          className: "dp__arrow"
        }, i.a.createElement("svg", {
          width: "18",
          height: "18",
          viewBox: "0 0 9 9",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, i.a.createElement("path", {
          d: "M1 8L8 1",
          strokeLinecap: "round"
        }), i.a.createElement("path", {
          d: "M2 1H8V7",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }))), Object(E.a)(t.isMobile) && t.payout && i.a.createElement("span", {
          className: "dp__payout"
        }, t.payout, "%"), i.a.createElement("span", {
          className: "dp__caption"
        }, null == t.payout ? Object(l.t)(_()) : Object(l.t)(I())), (!Object(E.a)(t.isMobile) || !t.isMobile) && t.payout && i.a.createElement("span", {
          className: "dp__payout"
        }, t.payout, "%"));
      }
      , ot = Object(d.c)(et)(L(), (function (t) {
        return t.isMobile ? 0 : 10;
      }
      ), (function (t) {
        return t.isMobile ? 0 : 10;
      }
      ), (function (t) {
        return -1 === t.value ? t.colors.primaryTextContrast : tt(t, v.low);
      }
      ), (function (t) {
        return K(t, v.low);
      }
      ), (function (t) {
        return $(t, v.low);
      }
      ), (function (t) {
        return -1 === t.value ? t.colors.primaryTextContrast : tt(t, v.low);
      }
      ), (function (t) {
        return t.isMobile ? Object(d.b)(S(), t.sendingTrade || -1 === t.value ? t.colors.primaryTextContrast : tt(t, v.low)) : Object(d.b)(M(), t.colors.primaryTextContrast);
      }
      ), (function (t) {
        return t.isMobile ? Object(d.b)(T(), t.sendingTrade || -1 === t.value ? t.colors.secondary : K(t, v.low)) : Object(d.b)(k(), t.colors.secondary);
      }
      ), (function (t) {
        return t.isMobile ? t.sendingTrade || -1 === t.value ? t.colors.primaryTextContrast : tt(t, v.low) : t.colors.primaryTextContrast;
      }
      ))
      , at = function (t) {
        return i.a.createElement(ot, {
          disabled: t.disabled,
          colors: t.colors,
          value: t.value,
          isMobile: t.isMobile,
          isCfdOptions: null == t.payout,
          onClick: function () {
            return t.onChange(-1 === t.value ? 0 : -1);
          },
          onMouseEnter: function () {
            return t.onHover(-1);
          },
          onMouseLeave: function () {
            return t.onHover(0);
          },
          sendingTrade: t.sendingTrade
        }, i.a.createElement("span", {
          className: "dp__arrow"
        }, i.a.createElement("svg", {
          width: "18",
          height: "18",
          viewBox: "0 0 9 9",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, i.a.createElement("path", {
          d: "M1 1L8 8",
          strokeLinecap: "round"
        }), i.a.createElement("path", {
          d: "M2 8H8V2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }))), Object(E.a)(t.isMobile) && t.payout && i.a.createElement("span", {
          className: "dp__payout"
        }, t.payout, "%"), i.a.createElement("span", {
          className: "dp__caption"
        }, null == t.payout ? Object(l.t)(C()) : Object(l.t)(w())), (!Object(E.a)(t.isMobile) || !t.isMobile) && t.payout && i.a.createElement("span", {
          className: "dp__payout"
        }, t.payout, "%"));
      }
      , it = n(49)
      , ct = n(52)
      , lt = n(10)
      , ut = n(34)
      , st = n(28)
      , dt = n(45)
      , pt = function (t, e, n) {
        var r = e.currenciesInfo
          , o = e.investmentDefaults
          , a = o.highLow
          , i = o.sixtySeconds
          , c = o.optionsCfd
          , l = e.partnerConfig.baseCurrency
          , u = 0;
        switch (t) {
          case 12:
            u = Number(c);
            break;
          case 1:
            u = Number(a);
            break;
          case 2:
            u = Number(i);
            break;
          default:
            u = Number(a);
        }
        var s, d, p = Object.values(r).find((function (t) {
          return t.currencyName.toLocaleUpperCase() === l.toLocaleUpperCase();
        }
        )), f = (s = r,
          d = p,
          Object.keys(s).find((function (t) {
            return s[t] === d;
          }
          )));
        return p && (Object(dt.isEmpty)(n) || f === n.currency || (u /= p.conversionRate)),
          u;
      };
    function ft() {
      var t = Object(r.a)(["\n  display: flex;\n  text-align: center;\n  margin-top: 10px;\n  margin-bottom: -10px;\n  color: ", ";\n"]);
      return ft = function () {
        return t;
      }
        ,
        t;
    }
    function mt() {
      var t = Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 10px;\n  border-radius: 2px;\n  box-shadow: 0 2px 10px 0 rgba(20, 31, 44, 0.8);\n  background-color: ", ";\n  z-index: 9999;\n  padding: 0 8px;\n"]);
      return mt = function () {
        return t;
      }
        ,
        t;
    }
    function bt() {
      var t = Object(r.a)(["\n  display: block;\n  margin: 5px auto 15px;\n  text-align: center;\n  font-size: 12px;\n  font-weight: 500;\n  font-stretch: normal;\n  letter-spacing: 0.1px;\n  color: ", ";\n"]);
      return bt = function () {
        return t;
      }
        ,
        t;
    }
    function ht() {
      var t = Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  z-index: 41;\n  position: relative;\n  left: -365px;\n  top: -60px;\n  width: 322px;\n  padding: 10px;\n  border-radius: 2px;\n  box-shadow: 0 2px 10px 0 rgba(20, 31, 44, 0.8);\n  background-color: ", ";\n\n  &:after {\n    content: '';\n    clip-path: polygon(50% 0%, 100% 50%, 50% 100%);\n    background-color: ", ";\n    position: absolute;\n    z-index: 1000;\n    width: 36px;\n    height: 36px;\n    right: -18px;\n    top: 35px;\n  }\n"]);
      return ht = function () {
        return t;
      }
        ,
        t;
    }
    function gt() {
      var t = Object(r.a)([""]);
      return gt = function () {
        return t;
      }
        ,
        t;
    }
    function vt() {
      var t = Object(r.a)(["\n            flex-wrap: wrap;\n            align-items: center;\n          "]);
      return vt = function () {
        return t;
      }
        ,
        t;
    }
    function xt() {
      var t = Object(r.a)(["\n  display: flex;\n  div {\n    flex: 1;\n    ", "\n    &:first-of-type {\n      margin-right: 10px;\n    }\n  }\n"]);
      return xt = function () {
        return t;
      }
        ,
        t;
    }
    function Ot() {
      var t = Object(r.a)(["\n  display: block;\n  margin-top: ", "px;\n  height: 42px;\n  line-height: 42px;\n  border-radius: 4px;\n  border: 2px dashed #979797;\n  font-size: 16px;\n  font-weight: 500;\n  text-align: center;\n  text-transform: uppercase;\n  user-select: none;\n  color: ", ";\n  background: transparent;\n"]);
      return Ot = function () {
        return t;
      }
        ,
        t;
    }
    function yt() {
      var t = Object(r.a)(["\n  display: block;\n  margin-top: ", "px;\n  height: 42px;\n  line-height: 42px;\n  border-radius: 4px;\n\n  font-size: 16px;\n  font-weight: 500;\n  letter-spacing: -0.09px;\n  text-align: center;\n  text-transform: uppercase;\n  user-select: none;\n\n  cursor: ", ";\n\n  color: ", ";\n  background: ", ";\n\n  &:hover {\n    color: ", ";\n    background: ", ";\n  }\n"]);
      return yt = function () {
        return t;
      }
        ,
        t;
    }
    function jt() {
      var t = Object(r.a)([""]);
      return jt = function () {
        return t;
      }
        ,
        t;
    }
    function Et() {
      var t = Object(r.a)(["\n          @media (orientation: landscape) {\n            margin: 20px auto 0 auto;\n          }\n        "]);
      return Et = function () {
        return t;
      }
        ,
        t;
    }
    function wt() {
      var t = Object(r.a)(["\n  display: block;\n  height: 14px;\n  text-align: center;\n  margin: 60px auto 0 auto;\n  font-size: 12px;\n  font-weight: 500;\n  letter-spacing: 0.1px;\n  color: ", ";\n\n  ", "\n\n  span {\n    cursor: pointer;\n  }\n\n  svg,\n  img {\n    margin-left: 7px;\n    vertical-align: middle;\n  }\n"]);
      return wt = function () {
        return t;
      }
        ,
        t;
    }
    function Ct() {
      var t = Object(r.a)(["\n  display: flex;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  height: 35px;\n  line-height: 35px;\n  border-radius: 3px;\n  background-color: ", ";\n  color: ", ";\n\n  h2 {\n    height: 28px;\n    flex: 1 1 auto;\n    text-align: right;\n    margin-top: 0;\n    margin-bottom: 0;\n    margin-right: 6px;\n    font-size: 24px;\n    font-weight: 500;\n    letter-spacing: 0.2px;\n  }\n  h3 {\n    height: 28px;\n    flex: 1 1 auto;\n    text-align: left;\n    margin-top: 0;\n    margin-bottom: 0;\n    margin-left: 6px;\n    font-size: 12px;\n    font-weight: 500;\n    letter-spacing: 0.1px;\n  }\n"]);
      return Ct = function () {
        return t;
      }
        ,
        t;
    }
    function kt() {
      var t = Object(r.a)(["\n  display: block;\n  margin-top: ", "px;\n  height: 14px;\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 1;\n  letter-spacing: 0.1px;\n  color: ", ";\n\n  div {\n    display: inline-block;\n    margin-left: 10px;\n    font-size: 12px;\n    font-weight: 500;\n    letter-spacing: 0.1px;\n\n    color: ", ";\n  }\n  svg,\n  img {\n    vertical-align: middle;\n    margin-left: 5px;\n    width: 14px;\n    height: 14px;\n  }\n"]);
      return kt = function () {
        return t;
      }
        ,
        t;
    }
    function Tt() {
      var t = Object(r.a)([""]);
      return Tt = function () {
        return t;
      }
        ,
        t;
    }
    function Mt() {
      var t = Object(r.a)(["\n          @media (orientation: landscape) {\n            min-width: 160px;\n          }\n        "]);
      return Mt = function () {
        return t;
      }
        ,
        t;
    }
    function St() {
      var t = Object(r.a)(["\n  position: relative;\n  display: block;\n  box-sizing: border-box;\n  min-width: 270px;\n\n  padding: ", ";\n\n  border-radius: 3px;\n  background-color: ", ";\n\n  ", "\n"]);
      return St = function () {
        return t;
      }
        ,
        t;
    }
    function Lt() {
      var t = Object(r.a)([""]);
      return Lt = function () {
        return t;
      }
        ,
        t;
    }
    function It() {
      var t = Object(r.a)(["\n          @media (orientation: landscape) {\n            width: 180px !important;\n            padding: 9px !important;\n            background-color: #1d2834 !important;\n            height: ", "px;\n            overflow: auto;\n            -ms-overflow-style: none;\n            scrollbar-width: none;\n            &::-webkit-scrollbar {\n              display: none;\n            }\n          }\n        "]);
      return It = function () {
        return t;
      }
        ,
        t;
    }
    function _t() {
      var t = Object(r.a)(["\n  width: ", ";\n  padding: ", ";\n  box-sizing: border-box;\n  background-color: ", ";\n\n  ", "\n"]);
      return _t = function () {
        return t;
      }
        ,
        t;
    }
    var Pt = d.c.div(_t(), (function (t) {
      return t.isMobile ? "100%" : "310px";
    }
    ), (function (t) {
      return t.isMobile ? "10px 20px 20px 20px" : "10px";
    }
    ), (function (t) {
      return t.isMobile ? t.colors.tradebox.widgetBackground : t.colors.background;
    }
    ), (function (t) {
      return t.isMobile && Object(E.a)(t.isMobile) ? Object(d.b)(It(), window.innerHeight) : Object(d.b)(Lt());
    }
    ))
      , At = d.c.div(St(), (function (t) {
        return t.isMobile ? 0 : t.isCfdOptions ? "10px" : "20px";
      }
      ), (function (t) {
        return t.colors.tradebox.widgetBackground;
      }
      ), (function (t) {
        return t.isMobile && Object(E.a)(t.isMobile) ? Object(d.b)(Mt()) : Object(d.b)(Tt());
      }
      ))
      , zt = d.c.span(kt(), (function (t) {
        return t.top;
      }
      ), (function (t) {
        return t.colors.sidebarLabelText;
      }
      ), (function (t) {
        return t.colors.primary;
      }
      ))
      , Nt = d.c.div(Ct(), (function (t) {
        return t.colors.tradebox.expiryBackground;
      }
      ), (function (t) {
        return t.colors.primary;
      }
      ))
      , Dt = d.c.div(wt(), (function (t) {
        return t.colors.primary;
      }
      ), (function (t) {
        return t.isMobile && Object(E.a)(t.isMobile) ? Object(d.b)(Et()) : Object(d.b)(jt());
      }
      ))
      , Rt = d.c.div(yt(), (function (t) {
        return Object(E.a)(t.isMobile) ? 10 : 20;
      }
      ), (function (t) {
        return t.disabled ? "not-allowed" : "pointer";
      }
      ), (function (t) {
        return t.disabled ? t.colors.btnDisabledText : t.colors.btnNormalText;
      }
      ), (function (t) {
        return t.disabled ? t.colors.tradebox.btnDisabled : t.colors.tradebox.btnNormal;
      }
      ), (function (t) {
        return t.disabled ? "" : t.colors.primaryText;
      }
      ), (function (t) {
        return t.disabled ? "" : t.colors.tradebox.highHover;
      }
      ))
      , Ft = d.c.div(Ot(), (function (t) {
        return Object(E.a)(t.isMobile) ? 10 : 20;
      }
      ), (function (t) {
        return t.colors.secondaryText;
      }
      ))
      , Bt = d.c.div(xt(), (function (t) {
        return Object(E.a)(t.isMobile) ? Object(d.b)(vt()) : Object(d.b)(gt());
      }
      ))
      , Ht = d.c.div(ht(), (function (t) {
        return t.colors.modalBackground;
      }
      ), (function (t) {
        return t.colors.modalBackground;
      }
      ))
      , Vt = d.c.span(bt(), (function (t) {
        return t.colors.sidebarLabelText;
      }
      ))
      , Wt = d.c.div(mt(), (function (t) {
        return t.colors.modalBackground;
      }
      ))
      , Ut = d.c.div(ft(), (function (t) {
        return t.colors.secondaryText;
      }
      ))
      , Gt = n(262)
      , Yt = n(384)
      , qt = n.n(Yt);
    function Zt() {
      var t = Object(r.a)([""]);
      return Zt = function () {
        return t;
      }
        ,
        t;
    }
    function Xt() {
      var t = Object(r.a)(["\n          @media (orientation: landscape) {\n            min-width: 160px;\n          }\n        "]);
      return Xt = function () {
        return t;
      }
        ,
        t;
    }
    function Qt() {
      var t = Object(r.a)(["\n  position: absolute;\n  ", "\n  z-index: 85;\n  left: 10px;\n  right: 10px;\n  ", "\n\n  display: block;\n  min-width: 270px;\n  min-height: 100px;\n  ", "\n  ", "\n\tborder-radius: 2px;\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n  box-shadow: 0 2px 10px 0 rgba(20, 31, 44, 0.8);\n  background-color: rgba(0, 0, 0, 0.6);\n  animation: ", " 6s linear;\n\n  &:after {\n    ", "\n    position: absolute;\n    top: -10px;\n    left: -10px;\n    right: -10px;\n    bottom: -10px;\n    border: 10px solid ", ";\n    border-radius: 3px;\n  }\n\n  ", "\n\n  .closeButton {\n    display: block;\n    position: absolute;\n    top: 5px;\n    right: 5px;\n    width: 17px;\n    height: 17px;\n    background: url(", ") no-repeat center;\n    z-index: 1;\n    padding: 5px;\n    cursor: pointer;\n    background: url(", ") no-repeat center;\n  }\n\n  p {\n    display: block;\n    padding: 30px 30px 5px 30px;\n    font-size: 16px;\n    font-weight: 500;\n    line-height: 1.25;\n    margin: 0;\n    color: ", ";\n\n    .profit {\n      color: ", ";\n    }\n  }\n\n  div {\n    position: relative;\n    z-index: 1;\n    margin: 0 0 15px 30px;\n    cursor: pointer;\n    color: ", ";\n  }\n"]);
      return Qt = function () {
        return t;
      }
        ,
        t;
    }
    function Jt() {
      var t = Object(r.a)([""]);
      return Jt = function () {
        return t;
      }
        ,
        t;
    }
    function Kt() {
      var t = Object(r.a)(["\n          @media (orientation: landscape) {\n            min-width: 160px;\n          }\n        "]);
      return Kt = function () {
        return t;
      }
        ,
        t;
    }
    function $t() {
      var t = Object(r.a)(["\n  position: absolute;\n  ", "\n  z-index: 85;\n  left: 10px;\n  right: 10px;\n  ", "\n\n  display: block;\n  min-width: 270px;\n  min-height: 100px;\n  max-height: 180px;\n  border-radius: 2px;\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n  box-shadow: 0 2px 10px 0 rgba(20, 31, 44, 0.8);\n  background-color: ", ";\n  animation: ", " 6s linear;\n\n  ", "\n\n  &:after {\n    ", "\n    position: absolute;\n    top: -10px;\n    left: -10px;\n    right: -10px;\n    bottom: -10px;\n    border: 10px solid ", ";\n    border-radius: 3px;\n  }\n\n  .closeButton {\n    display: block;\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    width: 12px;\n    height: 12px;\n    z-index: 10;\n    background: url(", ") no-repeat center;\n    padding: 5px;\n    cursor: pointer;\n  }\n\n  span {\n    display: block;\n    padding: 30px;\n    font-size: 16px;\n    font-weight: 500;\n    line-height: 1.25;\n    text-align: center;\n    color: ", ";\n  }\n"]);
      return $t = function () {
        return t;
      }
        ,
        t;
    }
    function te() {
      var t = Object(r.a)(["\n\t0% { opacity: 0; }\n\t10%, 90% { opacity: 1}\n\t100% { opacity: 0; }\n"]);
      return te = function () {
        return t;
      }
        ,
        t;
    }
    var ee = Object(d.d)(te())
      , ne = d.c.div($t(), (function (t) {
        return t.isMobile ? "" : "margin-top: 10px;";
      }
      ), (function (t) {
        return t.isMobile ? "top: 0;" : "";
      }
      ), (function (t) {
        return t.success ? "rgba(90, 185, 109, 0.9)" : "rgba(172, 4, 42, 0.8)";
      }
      ), ee, (function (t) {
        return t.isMobile && Object(E.a)(t.isMobile) ? Object(d.b)(Kt()) : Object(d.b)(Jt());
      }
      ), (function (t) {
        return t.isMobile ? "" : "content: '';";
      }
      ), (function (t) {
        return t.colors.sidebarElementActive;
      }
      ), qt.a, (function (t) {
        return t.colors.primaryText;
      }
      ))
      , re = d.c.div(Qt(), (function (t) {
        return t.isMobile ? "" : "margin-top: 10px;";
      }
      ), (function (t) {
        return t.isMobile ? "top: 0;" : "";
      }
      ), (function (t) {
        return t.isMobile ? "" : "max-height: 180px;";
      }
      ), (function (t) {
        return t.isMobile ? "bottom: 0;" : "";
      }
      ), ee, (function (t) {
        return t.isMobile ? "" : "content: '';";
      }
      ), (function (t) {
        return t.colors.sidebarElementActive;
      }
      ), (function (t) {
        return t.isMobile && Object(E.a)(t.isMobile) ? Object(d.b)(Xt()) : Object(d.b)(Zt());
      }
      ), qt.a, qt.a, (function (t) {
        return t.colors.primaryText;
      }
      ), (function (t) {
        return t.colors.primary;
      }
      ), (function (t) {
        return t.colors.primary;
      }
      ))
      , oe = n(21);
    function ae() {
      var t = Object(r.a)(["Maximum investment amount"]);
      return ae = function () {
        return t;
      }
        ,
        t;
    }
    function ie() {
      var t = Object(r.a)(["Minimum investment amount"]);
      return ie = function () {
        return t;
      }
        ,
        t;
    }
    var ce = Object(c.c)((function (t) {
      return {
        colors: t.theme,
        formatCurrency: Object(Gt.c)(t),
        isMobile: t.registry.isMobile
      };
    }
    ), {
      actionCloseNotification: oe.e
    })((function (t) {
      var e, n = t.notification.props.message ? (e = t.notification.props.message) ? e.replace(/<br>/gi, "\n") : "" : t.notification.props.minStake ? "".concat(Object(l.t)(ie()), ": ").concat(t.formatCurrency(String(t.notification.props.minStake))) : "".concat(Object(l.t)(ae()), ": ").concat(t.formatCurrency(String(t.notification.props.maxStake)));
      return i.a.createElement(ne, {
        colors: t.colors,
        success: !1,
        isMobile: t.isMobile
      }, i.a.createElement("div", {
        className: "closeButton",
        onClick: function () {
          return t.actionCloseNotification(t.notification.id);
        }
      }), i.a.createElement("span", null, n));
    }
    ));
    function le() {
      var t = Object(r.a)(["The trade was successfully opened"]);
      return le = function () {
        return t;
      }
        ,
        t;
    }
    var ue = Object(c.c)((function (t) {
      return {
        colors: t.theme,
        isMobile: t.registry.isMobile
      };
    }
    ), {
      actionCloseNotification: oe.e
    })((function (t) {
      var e = Object(l.t)(le());
      return i.a.createElement(ne, {
        colors: t.colors,
        success: !0,
        isMobile: t.isMobile
      }, i.a.createElement("div", {
        className: "closeButton",
        onClick: function () {
          return t.actionCloseNotification(t.notification.id);
        }
      }), i.a.createElement("span", null, e));
    }
    ))
      , se = n(41)
      , de = n(40);
    function pe() {
      var t = Object(r.a)(["Go to the closed positions"]);
      return pe = function () {
        return t;
      }
        ,
        t;
    }
    function fe() {
      var t = Object(r.a)(["", " positions were closed at ", ". Total profit "]);
      return fe = function () {
        return t;
      }
        ,
        t;
    }
    var me = Object(c.c)((function (t) {
      return {
        colors: t.theme,
        formatCurrency: Object(Gt.c)(t),
        isMobile: t.registry.isMobile
      };
    }
    ), {
      actionCloseNotification: oe.e,
      actionSetSidebar: de.b
    })((function (t) {
      var e = (new Date).toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: !0
      })
        , n = Object(l.t)(fe(), t.notification.props.amount, e);
      return i.a.createElement(re, {
        colors: t.colors,
        isMobile: t.isMobile
      }, i.a.createElement("div", {
        className: "closeButton",
        onClick: function () {
          return t.actionCloseNotification(t.notification.id);
        }
      }), i.a.createElement("p", null, n, i.a.createElement("span", {
        className: "profit"
      }, t.formatCurrency(t.notification.props.profit.toFixed(2)))), i.a.createElement("div", {
        onClick: function () {
          return t.actionSetSidebar(se.a.positions, {
            tab: 1
          });
        }
      }, Object(l.t)(pe())));
    }
    ))
      , be = Object(c.c)((function (t) {
        return {
          notifications: t.notifications.notifications
        };
      }
      ), {
        actionCloseNotification: oe.e
      })((function (t) {
        var e = function (t, e) {
          var n = Object(a.useState)(null)
            , r = Object(o.a)(n, 2)
            , i = r[0]
            , c = r[1];
          return Object(a.useEffect)((function () {
            var e = Object(o.a)(t, 1)[0];
            e ? (null === i || void 0 === i ? void 0 : i.id) !== e.id && c(e) : c(null);
          }
          ), [t]),
            Object(a.useEffect)((function () {
              if (i) {
                var t = setTimeout((function () {
                  return e(i.id);
                }
                ), 3e3);
                return function () {
                  clearTimeout(t);
                };
              }
            }
            ), [i]),
          {
            current: i
          };
        }(t.notifications, t.actionCloseNotification).current;
        if (!e)
          return null;
        switch (e.type) {
          case oe.c.TRADE_SUBMITTED_ERROR:
            return i.a.createElement(ce, {
              notification: e
            });
          case oe.c.TRADE_SUBMITTED_SUCCESS:
            return i.a.createElement(ue, {
              notification: e
            });
          case oe.c.TRADE_SUBMITTED_POSITION_CLOSED:
            return i.a.createElement(me, {
              notification: e
            });
          default:
            return null;
        }
      }
      ));
    function he() {
      return (he = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
        return t;
      }
      ).apply(this, arguments);
    }
    function ge(t, e) {
      if (null == t)
        return {};
      var n, r, o = function (t, e) {
        if (null == t)
          return {};
        var n, r, o = {}, a = Object.keys(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || (o[n] = t[n]);
        return o;
      }(t, e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]);
      }
      return o;
    }
    var ve = i.a.createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, i.a.createElement("g", null, i.a.createElement("g", {
      transform: "translate(-1335 -679) translate(1130 94) translate(10 10) translate(10 481) translate(72 94) translate(113)"
    }, i.a.createElement("path", {
      fill: "#7E91A7",
      fillRule: "nonzero",
      d: "M3.293 4.08c.277 0 .514-.104.71-.313.197-.21.295-.462.295-.76 0-.296-.098-.55-.295-.76-.196-.212-.433-.317-.71-.317-.277 0-.514.105-.712.316-.199.211-.298.465-.298.762s.1.55.298.759c.198.209.435.313.712.313zm-.728 7.078c.267 0 .5-.04.703-.12.201-.08.471-.196.81-.349l.112-.527c-.058.031-.152.067-.282.109-.13.04-.246.061-.348.061-.219 0-.373-.041-.462-.123-.088-.082-.133-.236-.133-.463 0-.09.014-.223.041-.398.027-.176.058-.332.092-.47l.42-1.704c.042-.156.07-.328.085-.516.016-.187.023-.318.023-.392 0-.36-.11-.652-.33-.876-.22-.225-.534-.337-.941-.337-.226 0-.465.046-.718.137-.253.092-.518.203-.794.331L.73 6.05c.082-.035.18-.072.295-.112.114-.039.226-.058.335-.058.223 0 .373.043.452.129.078.086.117.238.117.457 0 .12-.012.255-.038.401-.026.147-.057.302-.095.466l-.42 1.711c-.038.18-.065.34-.082.483-.017.143-.026.283-.026.42 0 .35.114.64.341.87.227.228.546.342.956.342z",
      transform: "translate(4.375)"
    }), i.a.createElement("circle", {
      cx: 7,
      cy: 7,
      r: 7,
      stroke: "#8191A5"
    }))))
      , xe = function (t) {
        var e = t.svgRef
          , n = t.title
          , r = ge(t, ["svgRef", "title"]);
        return i.a.createElement("svg", he({
          width: 14,
          height: 14,
          viewBox: "0 0 14 14",
          ref: e
        }, r), n ? i.a.createElement("title", null, n) : null, ve);
      }
      , Oe = i.a.forwardRef((function (t, e) {
        return i.a.createElement(xe, he({
          svgRef: e
        }, t));
      }
      ));
    n.p;
    function ye() {
      var t = Object(r.a)(["At the money"]);
      return ye = function () {
        return t;
      }
        ,
        t;
    }
    function je() {
      var t = Object(r.a)(["Out of the money"]);
      return je = function () {
        return t;
      }
        ,
        t;
    }
    function Ee() {
      var t = Object(r.a)(["In the money"]);
      return Ee = function () {
        return t;
      }
        ,
        t;
    }
    function we() {
      var t = Object(r.a)(["\n\tflex: 1 1 auto;\n\tfont-size: 11px;\n\ttext-align: left;\n\tline-height: 1.36;\n\n\tmargin-right: 10px;\n\t&:last-of-type {\n\t\tmargin-right: 0;\n\t}\n\n\tdiv {\n\t\tcolor: ", ";\n\t}\n\tspan {\n\t\tdisplay: block;\n\t\tcolor: ", ";\n\t}\n"]);
      return we = function () {
        return t;
      }
        ,
        t;
    }
    function Ce() {
      var t = Object(r.a)(["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tmargin-top: 6px;\n"]);
      return Ce = function () {
        return t;
      }
        ,
        t;
    }
    var ke = d.c.div(Ce())
      , Te = d.c.div(we(), (function (t) {
        return t.colors.sidebarLabelText;
      }
      ), (function (t) {
        return t.colors.primaryText;
      }
      ))
      , Me = function (t) {
        var e = t.amount
          , n = t.payout
          , r = t.colors
          , o = t.formatCurrency
          , a = e + e * n / 100;
        return i.a.createElement(ke, null, i.a.createElement(Te, {
          colors: r
        }, i.a.createElement("div", null, Object(l.t)(Ee())), i.a.createElement("span", null, o(a), " (", n, "%)")), i.a.createElement(Te, {
          colors: r
        }, i.a.createElement("div", null, Object(l.t)(je())), i.a.createElement("span", null, o(0), " (0%)")), i.a.createElement(Te, {
          colors: r
        }, i.a.createElement("div", null, Object(l.t)(ye())), i.a.createElement("span", null, o(e), " (0%)")));
      };
    function Se() {
      var t = Object(r.a)(["Payout information"]);
      return Se = function () {
        return t;
      }
        ,
        t;
    }
    var Le = function (t) {
      var e = t.colors
        , n = t.payout
        , r = t.amount
        , o = t.potentialProfit
        , a = t.formatCurrency;
      return i.a.createElement(Ht, {
        colors: e
      }, i.a.createElement(Vt, {
        colors: e
      }, Object(l.t)(Se())), i.a.createElement(Nt, {
        colors: e
      }, i.a.createElement("h2", null, n, "%"), i.a.createElement("h3", null, "+", a(o))), i.a.createElement(Me, {
        payout: n,
        amount: r,
        colors: e,
        formatCurrency: a
      }));
    };
    function Ie() {
      var t = Object(r.a)(["Next expiry time"]);
      return Ie = function () {
        return t;
      }
        ,
        t;
    }
    function _e() {
      var t = Object(r.a)(["Pick another expiry time."]);
      return _e = function () {
        return t;
      }
        ,
        t;
    }
    function Pe() {
      var t = Object(r.a)(["It\u2019s not possible to open a trade at this expiry time anymore, since the price is no longer in the range."]);
      return Pe = function () {
        return t;
      }
        ,
        t;
    }
    function Ae() {
      var t = Object(r.a)(["\n            padding: 0;\n          "]);
      return Ae = function () {
        return t;
      }
        ,
        t;
    }
    function ze() {
      var t = Object(r.a)(["\n            padding: 26px;\n            @media (orientation: landscape) {\n              padding: 9px;\n            }\n          "]);
      return ze = function () {
        return t;
      }
        ,
        t;
    }
    function Ne() {
      var t = Object(r.a)(["\n          top: -30px;\n          @media (orientation: landscape) {\n            top: -10px;\n          }\n        "]);
      return Ne = function () {
        return t;
      }
        ,
        t;
    }
    function De() {
      var t = Object(r.a)(["\n          width: calc(100% - 10px);\n        "]);
      return De = function () {
        return t;
      }
        ,
        t;
    }
    function Re() {
      var t = Object(r.a)(["\n          width: calc(100% + 20px);\n          @media (orientation: landscape) {\n            width: 180px;\n          }\n        "]);
      return Re = function () {
        return t;
      }
        ,
        t;
    }
    function Fe() {
      var t = Object(r.a)(["\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  ", ";\n  ", ";\n  height: 380px;\n  z-index: 84;\n  ", ";\n  background-color: ", ";\n  ", ";\n\n  svg {\n    top: 30px;\n    left: ", ";\n    position: relative;\n  }\n\n  .action {\n    position: absolute;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    top: ", ";\n    left: ", ";\n    transform: translate(", ");\n    width: ", ";\n    ", ";\n    color: white;\n\n    span {\n      display: block;\n      text-align: center;\n      margin-bottom: ", ";\n      font-size: 14px;\n      line-height: ", ";\n      color: #e7eaed;\n\n      &:last-of-type {\n        margin-bottom: ", ";\n      }\n    }\n\n    .next_expiry-button {\n      display: block;\n      margin: 0 auto 0;\n      min-width: 164px;\n      width: ", ";\n      height: ", ";\n      line-height: ", ";\n      background: ", ";\n      cursor: pointer;\n      border-radius: 2px;\n      color: ", ";\n      text-transform: uppercase;\n      box-sizing: border-box;\n      font-size: ", ";\n      font-weight: 500;\n      text-align: center;\n    }\n  }\n"]);
      return Fe = function () {
        return t;
      }
        ,
        t;
    }
    var Be = function (t) {
      return i.a.createElement("svg", Object.assign({
        fill: "none",
        height: 405,
        width: 295
      }, t), i.a.createElement("rect", {
        fill: "#0F1E2A",
        rx: 3,
        height: 28,
        width: 46,
        y: 44,
        x: 11
      }), i.a.createElement("rect", {
        fill: "#0F1E2A",
        rx: 3,
        height: 28,
        width: 46,
        y: 44,
        x: 113
      }), i.a.createElement("rect", {
        fill: "#0F1E2A",
        rx: 3,
        height: 28,
        width: 46,
        y: 44,
        x: 62
      }), i.a.createElement("rect", {
        fill: "#0F1E2A",
        rx: 3,
        height: 28,
        width: 56,
        y: 44,
        x: 164
      }), i.a.createElement("rect", {
        fill: "#0F1E2A",
        rx: 3,
        height: 28,
        width: 56,
        y: 44,
        x: 225
      }), i.a.createElement("rect", {
        fill: "#0F1E2A",
        rx: 5,
        height: 35,
        width: 270,
        y: 152,
        x: 11
      }), i.a.createElement("rect", {
        fill: "#0F1E2A",
        rx: 3,
        height: 35,
        width: 270,
        y: 197,
        x: 11
      }), i.a.createElement("rect", {
        fill: "#0F1E2A",
        rx: 3,
        height: 35,
        width: 35,
        y: 3,
        x: 11
      }), i.a.createElement("rect", {
        fill: "#0F1E2A",
        rx: 3,
        height: 35,
        width: 35,
        y: 3,
        x: 246
      }), i.a.createElement("rect", {
        fill: "#0F1E2A",
        rx: 3,
        height: 35,
        width: 190,
        y: 3,
        x: 51
      }), i.a.createElement("path", {
        d: "M25 20h8v2h-8z",
        fillOpacity: .6,
        fill: "#8B9097"
      }), i.a.createElement("path", {
        d: "M259 20h10v2h-10z",
        fill: "#5A626B"
      }), i.a.createElement("path", {
        d: "M263 26V16h2v10z",
        fill: "#5A626B"
      }), i.a.createElement("path", {
        strokeDasharray: 2,
        stroke: "#3A4856",
        d: "M71.484 97.549H232M60.484 112.549H245M62.484 127.549H240",
        opacity: .5
      }), i.a.createElement("rect", {
        fill: "#0F1E2A",
        rx: 4,
        height: 42,
        width: 270,
        y: 297,
        x: 11
      }), i.a.createElement("rect", {
        fill: "#0F1E2A",
        rx: 3,
        height: 14,
        width: 58,
        y: 87,
        x: 11
      }), i.a.createElement("rect", {
        fill: "#0F1E2A",
        rx: 3,
        height: 14,
        width: 44,
        y: 87,
        x: 237
      }), i.a.createElement("rect", {
        fill: "#0F1E2A",
        rx: 3,
        height: 14,
        width: 44,
        y: 103,
        x: 11
      }), i.a.createElement("rect", {
        fill: "#0F1E2A",
        rx: 3,
        height: 14,
        width: 32,
        y: 103,
        x: 249
      }), i.a.createElement("rect", {
        fill: "#0F1E2A",
        rx: 3,
        height: 14,
        width: 48,
        y: 119,
        x: 11
      }), i.a.createElement("rect", {
        fill: "#0F1E2A",
        rx: 3,
        height: 14,
        width: 37,
        y: 119,
        x: 244
      }), i.a.createElement("rect", {
        fill: "#0F1E2A",
        rx: 5,
        height: 35,
        width: 270,
        y: 242,
        x: 11
      }), i.a.createElement("g", {
        filter: "url(#a)",
        opacity: .5
      }, i.a.createElement("path", {
        d: "M20 20h255v177H20z",
        fill: "#1D2834"
      })), i.a.createElement("defs", null, i.a.createElement("filter", {
        colorInterpolationFilters: "sRGB",
        filterUnits: "userSpaceOnUse",
        height: 217,
        width: 295,
        y: 0,
        x: 0,
        id: "a"
      }, i.a.createElement("feFlood", {
        result: "BackgroundImageFix",
        floodOpacity: 0
      }), i.a.createElement("feBlend", {
        result: "shape",
        in2: "BackgroundImageFix",
        in: "SourceGraphic"
      }), i.a.createElement("feGaussianBlur", {
        result: "effect1_foregroundBlur",
        stdDeviation: 10
      }))));
    }
      , He = d.c.div(Fe(), (function (t) {
        return t.isMobile && Object(E.a)(t.isMobile) ? Object(d.b)(Re()) : Object(d.b)(De());
      }
      ), (function (t) {
        return t.isMobile ? "left: -10px" : "";
      }
      ), (function (t) {
        return t.isMobile && Object(E.a)(t.isMobile) ? Object(d.b)(Ne()) : "";
      }
      ), (function (t) {
        return t.isMobile ? "rgba(0, 0, 0, 0.6)" : t.colors.tradebox.widgetBackground;
      }
      ), (function (t) {
        return t.isMobile ? "backdrop-filter: blur(8px)" : "";
      }
      ), (function (t) {
        return t.isMobile ? "0" : "-11px";
      }
      ), (function (t) {
        return t.isMobile ? "0" : "55px";
      }
      ), (function (t) {
        return t.isMobile ? "50%" : "29px";
      }
      ), (function (t) {
        return t.isMobile ? "calc(-50%)" : "0";
      }
      ), (function (t) {
        return t.isMobile ? "100%" : "213px";
      }
      ), (function (t) {
        return t.isMobile && Object(E.a)(t.isMobile) ? Object(d.b)(ze()) : Object(d.b)(Ae());
      }
      ), (function (t) {
        return t.isMobile ? "6px" : "21px";
      }
      ), (function (t) {
        return t.isMobile ? "18px" : "20px";
      }
      ), (function (t) {
        return t.isMobile ? "20px" : "21px";
      }
      ), (function (t) {
        return t.isMobile ? "100%" : "auto";
      }
      ), (function (t) {
        return t.isMobile ? "42px" : "28px";
      }
      ), (function (t) {
        return t.isMobile ? "42px" : "28px";
      }
      ), (function (t) {
        return t.colors.primary;
      }
      ), (function (t) {
        return t.colors.primaryTextContrast;
      }
      ), (function (t) {
        return t.isMobile ? "16px" : "12px";
      }
      ))
      , Ve = Object(c.c)(null, {
        actionSelectNextExpiry: ut.d
      })((function (t) {
        return i.a.createElement(He, {
          colors: t.colors,
          isMobile: t.isMobile
        }, !t.isMobile && i.a.createElement(Be, {
          colors: t.colors
        }), i.a.createElement("div", {
          className: "action"
        }, i.a.createElement("span", null, Object(l.t)(Pe())), i.a.createElement("span", null, Object(l.t)(_e())), i.a.createElement("div", {
          className: "next_expiry-button",
          onClick: t.actionSelectNextExpiry
        }, Object(l.t)(Ie()))));
      }
      ));
    function We() {
      var t = Object(r.a)(["\n  flex: 1 1 auto;\n  height: 28px;\n  line-height: 28px;\n  padding-left: 6px;\n  padding-right: 6px;\n  text-align: center;\n  border-radius: 3px;\n  background-color: ", ";\n  font-size: 12px;\n  letter-spacing: normal;\n  cursor: pointer;\n  color: ", ";\n  margin-left: 5px;\n\n  &:first-of-type {\n    margin-left: 0;\n  }\n\n  &:hover {\n    ", ";\n  }\n"]);
      return We = function () {
        return t;
      }
        ,
        t;
    }
    function Ue() {
      var t = Object(r.a)([""]);
      return Ue = function () {
        return t;
      }
        ,
        t;
    }
    function Ge() {
      var t = Object(r.a)(["\n          display: none;\n        "]);
      return Ge = function () {
        return t;
      }
        ,
        t;
    }
    function Ye() {
      var t = Object(r.a)(["\n  display: flex;\n  height: 28px;\n  margin-top: 6px;\n  margin-bottom: 15px;\n\n  ", "\n"]);
      return Ye = function () {
        return t;
      }
        ,
        t;
    }
    var qe = function (t, e, n, r) {
      return !!r && t + e > n;
    }
      , Ze = d.c.div(Ye(), (function (t) {
        return Object(E.a)(t.isMobile) ? Object(d.b)(Ge()) : Object(d.b)(Ue());
      }
      ))
      , Xe = d.c.div(We(), (function (t) {
        return t.colors.tradebox.investmentButton;
      }
      ), (function (t) {
        return t.colors.primaryText;
      }
      ), (function (t) {
        return t.disabled ? "cursor: not-allowed" : "color: ".concat(t.colors.primary);
      }
      ))
      , Qe = Object(c.c)((function (t) {
        var e;
        return {
          registry: t.registry.data,
          game: t.game,
          formatCurrency: Object(Gt.a)(t),
          investmentPresets: null !== (e = t.registry.data.partnerConfig.investmentPresets) && void 0 !== e ? e : [25, 50, 75, 100],
          isMobile: t.registry.isMobile
        };
      }
      ))((function (t) {
        var e, n = function (t, e, n) {
          var r = {
            1: "defaultStake",
            2: "defaultStake60sec",
            11: "defaultStake"
          }[t];
          return n.map((function (t) {
            return t / 100 * Number(e[r]);
          }
          ));
        }((null === (e = t.game) || void 0 === e ? void 0 : e.gameType) || 1, t.registry.investmentLimits, t.investmentPresets);
        return i.a.createElement(Ze, {
          isMobile: t.isMobile
        }, n.map((function (e) {
          return i.a.createElement(Xe, {
            disabled: qe(t.curValue, e, t.maxValue, t.loggedIn),
            key: e,
            colors: t.colors,
            onClick: function () {
              return qe(t.curValue, e, t.maxValue, t.loggedIn) ? "" : t.onClick(e);
            }
          }, "+", e);
        }
        )));
      }
      ))
      , Je = n(322);
    function Ke() {
      var t = Object(r.a)(["One-click Trade"]);
      return Ke = function () {
        return t;
      }
        ,
        t;
    }
    function $e() {
      var t = Object(r.a)(["\n  display: flex;\n  align-items: center;\n  margin-top: 10px;\n  justify-content: center;\n\n  span {\n    font-family: Roboto;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 12px;\n    margin-right: 5px;\n    line-height: 19px;\n    letter-spacing: 0.1px;\n    color: ", ";\n  }\n"]);
      return $e = function () {
        return t;
      }
        ,
        t;
    }
    var tn = d.c.div($e(), (function (t) {
      return t.active ? t.colors.primaryText : t.colors.tradebox.oneClickTradeText;
    }
    ))
      , en = function (t) {
        return i.a.createElement(tn, {
          colors: t.colors,
          active: t.active,
          isMobile: t.isMobile
        }, i.a.createElement("span", null, Object(l.t)(Ke())), i.a.createElement(Je.a, {
          backgroundColor: t.active ? t.colors.primaryText : t.colors.tradebox.oneClickTradeText,
          pinColor: t.active ? t.colors.primary : t.colors.primaryText,
          knobOnLeft: !t.active,
          onChange: function (e) {
            return t.onChange(!e);
          }
        }));
      }
      , nn = n(39);
    function rn() {
      var t = Object(r.a)(["\n  width: 100%;\n  padding: 4px 12px;\n  font-size: 14px;\n  cursor: pointer;\n\n  color: ", ";\n  background-color: ", ";\n\n  &:hover {\n    background-color: ", " !important;\n  }\n"]);
      return rn = function () {
        return t;
      }
        ,
        t;
    }
    function on() {
      var t = Object(r.a)(["\n  display: block;\n"]);
      return on = function () {
        return t;
      }
        ,
        t;
    }
    function an() {
      var t = Object(r.a)(["\n  position: relative;\n  top: 0;\n  left: 85px;\n  z-index: 42;\n  width: 171px;\n  box-shadow: 0 2px 10px 0 rgba(20, 31, 44, 0.8);\n  background-color: ", ";\n"]);
      return an = function () {
        return t;
      }
        ,
        t;
    }
    function cn() {
      var t = Object(r.a)(["\n  display: inline-block;\n  margin-left: 19px;\n  font-weight: bold;\n  letter-spacing: -0.2px;\n  cursor: pointer;\n\n  user-select: none;\n  color: ", ";\n\n  &.disabled {\n    cursor: not-allowed;\n    opacity: 0.3;\n    pointer-events: none;\n  }\n\n  &:hover {\n    opacity: 0.7;\n  }\n"]);
      return cn = function () {
        return t;
      }
        ,
        t;
    }
    function ln() {
      var t = Object(r.a)([""]);
      return ln = function () {
        return t;
      }
        ,
        t;
    }
    function un() {
      var t = Object(r.a)(["\n          @media (orientation: landscape) {\n            min-width: 160px;\n          }\n        "]);
      return un = function () {
        return t;
      }
        ,
        t;
    }
    function sn() {
      var t = Object(r.a)(["\n  display: block;\n  box-sizing: border-box;\n  min-width: 270px;\n  margin-bottom: 10px;\n  border-radius: 3px;\n  background-color: ", ";\n\n  ", "\n"]);
      return sn = function () {
        return t;
      }
        ,
        t;
    }
    var dn = d.c.div(sn(), (function (t) {
      return t.colors.tradebox.widgetBackground;
    }
    ), (function (t) {
      return t.isMobile && Object(E.a)(t.isMobile) ? Object(d.b)(un()) : Object(d.b)(ln());
    }
    ))
      , pn = (d.c.div(cn(), (function (t) {
        return t.colors.primary;
      }
      )),
        d.c.div(an(), (function (t) {
          return t.colors.listBackgroundActive;
        }
        )),
        d.c.div(on()),
        d.c.div(rn(), (function (t) {
          return t.colors.textfieldText;
        }
        ), (function (t) {
          return t.active ? t.colors.listBackgroundNormal : "transparent";
        }
        ), (function (t) {
          return t.colors.listBackgroundNormal;
        }
        )),
        n(27))
      , fn = n(264)
      , mn = n(79)
      , bn = n(46);
    function hn() {
      return (hn = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
        return t;
      }
      ).apply(this, arguments);
    }
    function gn(t, e) {
      if (null == t)
        return {};
      var n, r, o = function (t, e) {
        if (null == t)
          return {};
        var n, r, o = {}, a = Object.keys(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || (o[n] = t[n]);
        return o;
      }(t, e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]);
      }
      return o;
    }
    var vn = i.a.createElement("path", {
      d: "M10 0C15.52 0 20 4.48 20 10C20 15.52 15.52 20 10 20C4.48 20 0 15.52 0 10C0 4.48 4.48 0 10 0ZM10 18C14.42 18 18 14.42 18 10C18 5.58 14.42 2 10 2C5.58 2 2 5.58 2 10C2 14.42 5.58 18 10 18ZM13.536 5.05L14.95 6.464L10 11.414L8.586 10L13.536 5.05Z",
      fill: "currentColor"
    })
      , xn = function (t) {
        var e = t.svgRef
          , n = t.title
          , r = gn(t, ["svgRef", "title"]);
        return i.a.createElement("svg", hn({
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          fill: "none",
          ref: e
        }, r), n ? i.a.createElement("title", null, n) : null, vn);
      }
      , On = i.a.forwardRef((function (t, e) {
        return i.a.createElement(xn, hn({
          svgRef: e
        }, t));
      }
      ));
    n.p;
    function yn() {
      return (yn = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
        return t;
      }
      ).apply(this, arguments);
    }
    function jn(t, e) {
      if (null == t)
        return {};
      var n, r, o = function (t, e) {
        if (null == t)
          return {};
        var n, r, o = {}, a = Object.keys(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || (o[n] = t[n]);
        return o;
      }(t, e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]);
      }
      return o;
    }
    var En = i.a.createElement("rect", {
      opacity: .3,
      x: 12,
      width: 14,
      height: 2,
      fill: "#8491A3"
    })
      , wn = i.a.createElement("rect", {
        opacity: .3,
        x: 12,
        y: 4,
        width: 14,
        height: 2,
        fill: "#8491A3"
      })
      , Cn = i.a.createElement("rect", {
        x: 12,
        y: 8,
        width: 14,
        height: 2,
        fill: "currentColor"
      })
      , kn = i.a.createElement("rect", {
        x: 12,
        y: 12,
        width: 14,
        height: 2,
        fill: "currentColor"
      })
      , Tn = i.a.createElement("rect", {
        x: 12,
        y: 16,
        width: 14,
        height: 2,
        fill: "currentColor"
      })
      , Mn = i.a.createElement("path", {
        d: "M10 9L2.5 13.3301L2.5 4.66987L10 9Z",
        fill: "currentColor"
      })
      , Sn = function (t) {
        var e = t.svgRef
          , n = t.title
          , r = jn(t, ["svgRef", "title"]);
        return i.a.createElement("svg", yn({
          width: 26,
          height: 18,
          viewBox: "0 0 26 18",
          fill: "none",
          ref: e
        }, r), n ? i.a.createElement("title", null, n) : null, En, wn, Cn, kn, Tn, Mn);
      }
      , Ln = i.a.forwardRef((function (t, e) {
        return i.a.createElement(Sn, yn({
          svgRef: e
        }, t));
      }
      ));
    n.p;
    function In() {
      var t = Object(r.a)(["High/Low"]);
      return In = function () {
        return t;
      }
        ,
        t;
    }
    function _n() {
      var t = Object(r.a)(["Options"]);
      return _n = function () {
        return t;
      }
        ,
        t;
    }
    function Pn() {
      var t = Object(r.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  height: 70px;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  user-select: none;\n  pointer-events: ", ";\n  ", ";\n  font-size: 13px;\n  font-weight: 500;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 3px;\n  opacity: ", ";\n"]);
      return Pn = function () {
        return t;
      }
        ,
        t;
    }
    function An() {
      var t = Object(r.a)(["\n  display: flex;\n  height: 70px;\n  background-color: ", ";\n"]);
      return An = function () {
        return t;
      }
        ,
        t;
    }
    var zn = d.c.div(An(), (function (t) {
      return t.colors.background;
    }
    ))
      , Nn = d.c.div(Pn(), (function (t) {
        return t.disabled || t.type === t.selectedProductType ? "none" : "auto";
      }
      ), (function (t) {
        return t.isMobile ? "max-width: 84px" : "";
      }
      ), (function (t) {
        return t.active ? t.colors.sidebarElementActive : t.colors.background;
      }
      ), (function (t) {
        return t.disabled ? t.colors.background : t.active ? t.colors.primary : t.colors.secondaryText;
      }
      ), (function (t) {
        return t.disabled ? "0.7" : "1";
      }
      ))
      , Dn = Object(c.c)((function (t) {
        var e, n;
        return {
          isMobile: t.registry.isMobile,
          selectedProductType: t.trading.selectedProductType,
          isCfdOptionsVisible: Object(bn.c)(t),
          firstOpenInstrument: null === (e = Object(it.e)(t)) || void 0 === e ? void 0 : e.instrumentID,
          firstOpenCfdInstrument: null === (n = Object(it.d)(t)) || void 0 === n ? void 0 : n.instrumentID
        };
      }
      ), {
        actionSetProductType: u.P,
        actionSelectInstrument: u.G,
        actionSetDirection: u.N,
        actionSetFirstTimeOpenWeb: mn.d
      })((function (t) {
        var e = t.colors
          , n = t.isMobile
          , r = t.isCfdOptionsVisible
          , c = t.productTypes
          , u = t.selectedProductType
          , s = t.actionSetProductType
          , d = t.actionSelectInstrument
          , p = t.actionSetDirection
          , f = t.firstOpenCfdInstrument
          , m = t.firstOpenInstrument
          , b = t.actionSetFirstTimeOpenWeb
          , h = Object(a.useState)(!1)
          , g = Object(o.a)(h, 2)
          , v = g[0]
          , x = g[1]
          , O = function (t) {
            x(!1),
              s(t),
              p(0);
            var e = t === pn.a.cfdOptions ? f : m;
            d(e),
              b(!1);
          }
          , y = c.filter((function (t) {
            return !!r || t !== pn.a.cfdOptions;
          }
          ));
        return i.a.createElement(dn, {
          colors: e,
          isMobile: n
        }, i.a.createElement(zn, {
          colors: e
        }, i.a.createElement(Nn, {
          colors: e,
          disabled: !y.includes(pn.a.cfdOptions),
          active: u === pn.a.cfdOptions,
          type: pn.a.cfdOptions,
          selectedProductType: u,
          onClick: function () {
            return O(pn.a.cfdOptions);
          }
        }, y.includes(pn.a.cfdOptions) && i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
          style: {
            marginBottom: "10px"
          }
        }, i.a.createElement(Ln, null)), Object(l.t)(_n()))), i.a.createElement(Nn, {
          colors: e,
          disabled: !y.includes(pn.a.highLow),
          active: u === pn.a.highLow,
          type: pn.a.highLow,
          selectedProductType: u,
          onClick: function () {
            return O(pn.a.highLow);
          }
        }, y.includes(pn.a.highLow) && i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
          style: {
            marginBottom: "10px"
          }
        }, i.a.createElement(On, null)), Object(l.t)(In())))), v && i.a.createElement(fn.a, {
          onClick: function () {
            return x(!1);
          }
        }));
      }
      ));
    function Rn() {
      var t = Object(r.a)([""]);
      return Rn = function () {
        return t;
      }
        ,
        t;
    }
    function Fn() {
      var t = Object(r.a)(["\n              @media (orientation: landscape) {\n                margin-top: 4px;\n                flex-direction: column;\n                align-items: flex-start;\n              }\n            "]);
      return Fn = function () {
        return t;
      }
        ,
        t;
    }
    function Bn() {
      var t = Object(r.a)(["\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 10px;\n  border-radius: 3px;\n  background-color: ", ";\n\n  .instrument-image {\n    width: 40px;\n    height: 40px;\n  }\n\n  .instrument-info {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    margin-left: 10px;\n    justify-content: space-between;\n\n    .instrument-name {\n      font-size: 16px;\n      font-weight: 700;\n      line-height: 13px;\n      color: ", ";\n    }\n    .instrument-price-container {\n      display: flex;\n      align-items: flex-end;\n\n      ", "\n\n      .instrument-price {\n        font-size: 16px;\n        font-weight: 500;\n        line-height: 16px;\n        color: ", ";\n        margin-right: 10px;\n\n        .instrument-price-big {\n          font-size: 22px;\n        }\n\n        .instrument-price-small {\n          font-size: 14px;\n          position: relative;\n          top: -2px;\n        }\n      }\n    }\n  }\n"]);
      return Bn = function () {
        return t;
      }
        ,
        t;
    }
    var Hn = d.c.div(Bn(), (function (t) {
      return t.colors.tradebox.widgetBackground;
    }
    ), (function (t) {
      return t.colors.secondaryText;
    }
    ), (function (t) {
      return t.isMobile && Object(E.a)(t.isMobile) ? Object(d.b)(Fn()) : Object(d.b)(Rn());
    }
    ), (function (t) {
      return t.colors.primaryText;
    }
    ))
      , Vn = n(274)
      , Wn = n(275)
      , Un = n.n(Wn)
      , Gn = n(289)
      , Yn = Object(c.c)((function (t) {
        return {
          instrument: Object(it.h)(t),
          lastPrice: Object(it.k)(t),
          isMobile: t.registry.isMobile
        };
      }
      ), {})((function (t) {
        var e = t.colors
          , n = t.instrument
          , r = t.lastPrice
          , o = t.isCfdOptions
          , a = t.isMobile
          , c = function (t, e) {
            try {
              var n = t.toFixed(e)
                , r = n.substring(0, n.length - 2)
                , o = n.substring(n.length - 2);
              return {
                start: r,
                endBig: o.substring(0, 1),
                endSmall: o.substring(1)
              };
            } catch (a) {
              return console.log("Debug ~ file: index.tsx ~ line 28 ~ formatLastPrice ~ err", a),
                null;
            }
          }(Number(r), (null === n || void 0 === n ? void 0 : n.precision) || 3)
          , l = c.start
          , u = c.endBig
          , s = c.endSmall;
        return i.a.createElement(Hn, {
          colors: e,
          isMobile: a
        }, i.a.createElement("div", {
          className: "instrument-image"
        }, i.a.createElement(Vn.a, {
          klass: "instrument-image",
          alt: "Instrument ".concat(n.name),
          src: "".concat("", "/static/icons/instruments/").concat(n.instrumentID, ".svg"),
          placeholderSrc: Un.a
        })), i.a.createElement("div", {
          className: "instrument-info"
        }, i.a.createElement("span", {
          className: "instrument-name"
        }, n.name), i.a.createElement("div", {
          className: "instrument-price-container"
        }, i.a.createElement("span", {
          className: "instrument-price"
        }, l, i.a.createElement("span", {
          className: "instrument-price-big"
        }, u), i.a.createElement("sup", {
          className: "instrument-price-small"
        }, s)), !o && i.a.createElement(Gn.a, {
          instrumentID: n.instrumentID,
          colors: e,
          withArrow: !0,
          withSign: !0,
          height: 15,
          fontSize: 14
        }))));
      }
      ))
      , qn = (n(18),
        n(385))
      , Zn = n.n(qn)
      , Xn = n(386)
      , Qn = n.n(Xn);
    function Jn() {
      var t = Object(r.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tflex: 0 0 72px;\n\tpadding: 5px 7px 3px 7px;\n\theight: 100%;\n\tmargin-left: 1px;\n\tcursor: ", ";\n\tbackground: ", ";\n\tborder: ", ";\n\n\t.expiration {\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\tflex-wrap: nowrap;\n\t\theight: 15px;\n\t\tline-height: 15px;\n\t\ttext-align: center;\n\t\tfont-size: 13px;\n\t\tfont-weight: 500;\n\t\tletter-spacing: 0.11px;\n\t\tcolor: ", ";\n\t\tmargin-bottom: 2px;\n\n\t\t.trades_count {\n\t\t\tdisplay: inline-block;\n\t\t\tmin-width: 14px;\n\t\t\theight: 14px;\n\t\t\tline-height: 13px;\n\t\t\ttext-align: center;\n\t\t\tfont-size: 10px;\n\t\t\tborder-radius: 50%;\n\t\t\tborder: 1px solid ", ";\n\t\t\tmargin-left: 4px;\n\t\t}\n\t}\n\n\t.expiry_payout {\n\t\tfont-size: 9px;\n\t\tletter-spacing: 0.07px;\n\t\ttext-align: center;\n\t\tcolor: ", ";\n\n\t\tspan {\n\t\t\tmargin: 0 3px;\n\t\t}\n\t}\n\n\t&:first-of-type {\n\t\tmargin-left: 0;\n\t}\n\n\t&:first-of-type {\n\t\tflex: 0 0 66px;\n\t}\n"]);
      return Jn = function () {
        return t;
      }
        ,
        t;
    }
    function Kn() {
      var t = Object(r.a)(["\n\tflex: 0 0 18px;\n\theight: 100%;\n\tborder-radius: 2px;\n\tbackdrop-filter: blur(0.5px);\n\tcursor: ", ";\n\tbackground: ", "\n\t\turl(", ") no-repeat center;\n"]);
      return Kn = function () {
        return t;
      }
        ,
        t;
    }
    function $n() {
      var t = Object(r.a)(["\n\tdisplay: flex;\n\ttransition: 0.2s ease-in-out;\n\ttransform: translate3d(", "px, 0, 0);\n"]);
      return $n = function () {
        return t;
      }
        ,
        t;
    }
    function tr() {
      var t = Object(r.a)(["\n\tdisplay: flex;\n\tflex: 0 0 230px;\n\toverflow: hidden;\n\tmargin: 0 1px;\n"]);
      return tr = function () {
        return t;
      }
        ,
        t;
    }
    function er() {
      var t = Object(r.a)(["\n\tflex: 0 0 18px;\n\theight: 100%;\n\tborder-radius: 2px;\n\tbackdrop-filter: blur(0.5px);\n\tcursor: ", ";\n\tbackground: ", "\n\t\turl(", ") no-repeat center;\n"]);
      return er = function () {
        return t;
      }
        ,
        t;
    }
    function nr() {
      var t = Object(r.a)(["\n\tdisplay: flex;\n\tbox-sizing: border-box;\n\twidth: 270px;\n\theight: 36px;\n\tmargin-top: 6px;\n\tborder-radius: 2px;\n"]);
      return nr = function () {
        return t;
      }
        ,
        t;
    }
    var rr = d.c.div(nr())
      , or = d.c.div(er(), (function (t) {
        return t.disabled ? "not-allowed" : "pointer";
      }
      ), (function (t) {
        return t.colors.tradebox.fieldBackground;
      }
      ), Zn.a)
      , ar = d.c.div(tr())
      , ir = d.c.div($n(), (function (t) {
        return -t.slidingWidth;
      }
      ))
      , cr = d.c.div(Kn(), (function (t) {
        return t.disabled ? "not-allowed" : "pointer";
      }
      ), (function (t) {
        return t.colors.tradebox.fieldBackground;
      }
      ), Qn.a)
      , lr = d.c.div(Jn(), (function (t) {
        return t.disabled ? "not-allowed" : "pointer";
      }
      ), (function (t) {
        return t.colors.tradebox.fieldBackground;
      }
      ), (function (t) {
        return t.active ? "solid 1px ".concat(t.colors.primary) : "solid 1px ".concat(t.colors.tradebox.fieldBackground);
      }
      ), (function (t) {
        return t.colors.primary;
      }
      ), (function (t) {
        return t.colors.primary;
      }
      ), (function (t) {
        return t.colors.sidebarLabelText;
      }
      ));
    function ur() {
      var t = Object(r.a)(["", "H"]);
      return ur = function () {
        return t;
      }
        ,
        t;
    }
    var sr = function (t) {
      var e = t.game
        , n = t.selected
        , r = t.onSelect
        , o = (0,
          t.getPositionsForExpiry)(e);
      return i.a.createElement(lr, {
        key: "".concat(e.deadPeriod, "-").concat(e.timestamp),
        colors: t.colors,
        disabled: e.disabled,
        onClick: function () {
          return r(e);
        },
        active: n(e)
      }, i.a.createElement("div", {
        className: "expiration"
      }, i.a.createElement("span", null, e.isCfdOptions ? Object(l.t)(ur(), e.cdfExpiry) : Object(s.c)(e)), Array.isArray(o) && i.a.createElement("span", {
        className: "trades_count"
      }, o.length)), !e.isCfdOptions && i.a.createElement("div", {
        className: "expiry_payout"
      }, Object(s.e)(e.expiry), i.a.createElement("span", null, "|"), e.payout, "%"));
    }
      , dr = function (t) {
        var e = Object(a.useRef)(null)
          , n = Object(a.useState)(0)
          , r = Object(o.a)(n, 2)
          , c = r[0]
          , l = r[1]
          , u = Object(a.useState)(0)
          , s = Object(o.a)(u, 2)
          , d = s[0]
          , p = s[1]
          , f = t.items
          , m = t.selected
          , b = t.onSelect
          , h = t.colors
          , g = (t.disabled,
            t.getPositionsForExpiry);
        Object(a.useEffect)((function () {
          l(e.current.scrollWidth),
            p(0);
        }
        ), [f.length]);
        return i.a.createElement(rr, null, i.a.createElement(or, {
          colors: h,
          disabled: 0 === d,
          onClick: function () {
            var t = 0 !== d && d - 74 > 0;
            p((function (e) {
              return t ? e - 74 : 0;
            }
            ));
          }
        }), i.a.createElement(ar, null, i.a.createElement(ir, {
          ref: e,
          slidingWidth: d
        }, f.map((function (t, e) {
          return i.a.createElement(sr, {
            key: e,
            game: t,
            colors: h,
            getPositionsForExpiry: g,
            onSelect: b,
            selected: m
          });
        }
        )))), i.a.createElement(cr, {
          colors: h,
          disabled: d === c - 230,
          onClick: function () {
            var t = d + 74 < c - 230;
            p((function (e) {
              return t ? e + 74 : c - 230;
            }
            ));
          }
        }));
      }
      , pr = n(62)
      , fr = n(78);
    function mr() {
      var t = Object(r.a)(["Long"]);
      return mr = function () {
        return t;
      }
        ,
        t;
    }
    function br() {
      var t = Object(r.a)(["Short"]);
      return br = function () {
        return t;
      }
        ,
        t;
    }
    function hr() {
      var t = Object(r.a)(["Long"]);
      return hr = function () {
        return t;
      }
        ,
        t;
    }
    function gr() {
      var t = Object(r.a)(["Short"]);
      return gr = function () {
        return t;
      }
        ,
        t;
    }
    function vr() {
      var t = Object(r.a)(["", "d"]);
      return vr = function () {
        return t;
      }
        ,
        t;
    }
    function xr() {
      var t = Object(r.a)(["", "h"]);
      return xr = function () {
        return t;
      }
        ,
        t;
    }
    function Or() {
      var t = Object(r.a)(["", "m"]);
      return Or = function () {
        return t;
      }
        ,
        t;
    }
    function yr() {
      var t = Object(r.a)(["", "s"]);
      return yr = function () {
        return t;
      }
        ,
        t;
    }
    function jr() {
      var t = Object(r.a)(["\n  flex: 1 1 auto;\n  background: ", ";\n  color: ", ";\n  height: 28px;\n  padding-left: 10px;\n  line-height: 28px;\n  border-radius: 2px;\n  font-size: 12px;\n  position: relative;\n\n  &:after {\n    content: '';\n    position: absolute;\n    right: 10px;\n    top: 50%;\n    transform: translateY(-50%);\n    width: 10px;\n    height: 6px;\n    clip-path: polygon(0 0, 100% 0, 50% 100%);\n    background-color: ", ";\n  }\n"]);
      return jr = function () {
        return t;
      }
        ,
        t;
    }
    function Er() {
      var t = Object(r.a)(["\n  flex: 0 0 9px;\n"]);
      return Er = function () {
        return t;
      }
        ,
        t;
    }
    function wr() {
      var t = Object(r.a)(["\n  flex: 1 1 auto;\n  height: 28px;\n  line-height: 28px;\n  text-align: center;\n  cursor: ", ";\n  ", ";\n  user-select: none;\n\n  ", ";\n\n  font-size: 13px;\n  font-weight: 500;\n  letter-spacing: 0.11px;\n\n  margin-left: 1px;\n  margin-right: 1px;\n\n  &:first-child {\n    border-top-left-radius: 2px;\n    border-bottom-left-radius: 2px;\n    margin-left: 0;\n  }\n\n  &:last-child {\n    border-top-right-radius: 2px;\n    border-bottom-right-radius: 2px;\n    margin-right: 0;\n  }\n\n  ", ";\n\n  ", ";\n\n  outline: ", ";\n\n  background-color: ", ";\n\n  opacity: ", ";\n\n  &:hover {\n    color: ", ";\n  }\n"]);
      return wr = function () {
        return t;
      }
        ,
        t;
    }
    function Cr() {
      var t = Object(r.a)(["\n  display: flex;\n  height: 28px;\n  line-height: 28px;\n  ", "\n"]);
      return Cr = function () {
        return t;
      }
        ,
        t;
    }
    function kr() {
      var t = Object(r.a)(["\n  display: block;\n  width: 100%;\n  margin-top: ", "px;\n  margin-bottom: 14px;\n"]);
      return kr = function () {
        return t;
      }
        ,
        t;
    }
    var Tr = d.c.div(kr(), (function (t) {
      return t.isMobile ? 0 : 9;
    }
    ))
      , Mr = d.c.div(Cr(), (function (t) {
        return t.bottom ? "margin-top: 5px;" : "";
      }
      ))
      , Sr = d.c.span(wr(), (function (t) {
        return t.disabled ? "not-allowed" : "pointer";
      }
      ), (function (t) {
        return t.disabled ? "opacity: .4" : "";
      }
      ), (function (t) {
        return t.isMobile ? "max-width: 84px" : "";
      }
      ), (function (t) {
        return t.isMobile ? "" : "color: ".concat(t.disabled ? t.colors.primaryText : t.active ? t.colors.primary : t.colors.primaryText);
      }
      ), (function (t) {
        return t.isMobile ? "color: ".concat(t.disabled ? t.colors.primaryText : t.active ? t.colors.primaryTextContrast : t.colors.primary) : "";
      }
      ), (function (t) {
        return t.isMobile ? "none" : t.active ? "1px solid ".concat(t.colors.primary) : "none";
      }
      ), (function (t) {
        return t.isMobile ? t.active ? t.colors.primary : t.colors.background : t.colors.tradebox.fieldBackground;
      }
      ), (function (t) {
        return t.disabled ? "0.7" : "1";
      }
      ), (function (t) {
        return t.disabled ? t.colors.primaryText : t.primary;
      }
      ))
      , Lr = d.c.span(Er())
      , Ir = d.c.div(jr(), (function (t) {
        return t.colors.tradebox.expiryBackground;
      }
      ), (function (t) {
        return t.colors.primaryText;
      }
      ), (function (t) {
        return t.colors.textfieldText;
      }
      ))
      , _r = function (t) {
        return t.isCfdOptions ? "".concat(t.cdfExpiry, "H") : "".concat(function (t) {
          return "string" === typeof t.timestamp && (t.timestamp = new Date(Date.parse(t.timestamp))),
            e = t.timestamp,
            n = new Date,
            e.getFullYear() === n.getFullYear() && e.getMonth() === n.getMonth() && e.getDate() === n.getDate() ? fr.a.format(t.timestamp, "HH:mm") : fr.a.format(t.timestamp, "LLL-d");
          var e, n;
        }(t), " (").concat(function (t) {
          if (t < 60)
            return Object(l.t)(yr(), t);
          if (t < 7200)
            return t /= 60,
              Object(l.t)(Or(), t);
          var e = Math.round(t / 3600);
          return e <= 24 ? Object(l.t)(xr(), e) : (e = Math.round(e / 24),
            Object(l.t)(vr(), e));
        }(t.expiry), ")");
      }
      , Pr = function (t, e, n, r) {
        return t ? e.sort().map((function (e) {
          return t[e];
        }
        )).flat().filter((function (t) {
          return !!t;
        }
        )) : [];
      }
      , Ar = Object(c.c)((function (t) {
        return {
          defaultGameType: Object(it.a)(t),
          getPositionsForExpiry: Object(pr.b)(t),
          positions: t.trades.open
        };
      }
      ), {
        actionSelectGame: ut.c,
        actionShowModal: lt.e,
        actionSetSelectedCfdOptionExpiry: u.R
      })((function (t) {
        var e = t.isMobile
          , n = (t.defaultGameType,
            t.positions,
            Object(a.useState)([2]))
          , r = Object(o.a)(n, 2)
          , c = r[0]
          , u = r[1]
          , s = t.isCfdOptions ? t.games : Pr(t.games, c)
          , d = function (e) {
            return !!t.games && (t.games[e] || []).length > 0;
          }
          , p = {
            short: !d(2),
            long: !d(11) && !d(1)
          }
          , f = function () {
            if (!t.disabled && !p.short) {
              u([2]);
              var e = Pr(t.games, [2]);
              t.actionSelectGame(e[0]);
            }
          }
          , m = function () {
            if (!t.disabled && !p.long) {
              u([1, 11]);
              var e = Pr(t.games, [1, 11]);
              t.actionSelectGame(e[0]);
            }
          };
        return Object(a.useEffect)((function () {
          t.game && u(2 === t.game.gameType ? [2] : [1, 11]);
        }
        ), [t.game]),
          e ? i.a.createElement(Tr, {
            isMobile: !0
          }, i.a.createElement(Mr, null, !t.disableShortLong && i.a.createElement(Sr, {
            colors: t.colors,
            addBorderLeftRadius: !0,
            disabled: p.short || t.disabled,
            active: c.includes(2),
            onClick: f,
            isMobile: !0
          }, Object(l.t)(gr())), !t.disableShortLong && i.a.createElement(Sr, {
            colors: t.colors,
            addBorderRightRadius: !0,
            disabled: p.long || t.disabled,
            active: c.includes(1) || c.includes(11),
            onClick: m,
            isMobile: !0
          }, Object(l.t)(hr())), !t.disableShortLong && i.a.createElement(Lr, null), i.a.createElement(Ir, {
            onClick: function () {
              return t.actionShowModal(lt.b.EXPIRIES_MODAL, {
                items: s,
                bottomSpace: t.mobileTradeHeight
              });
            },
            colors: t.colors
          }, _r(t.game)))) : i.a.createElement(Tr, {
            isMobile: !1
          }, !t.disableShortLong && i.a.createElement(Mr, null, i.a.createElement(Sr, {
            colors: t.colors,
            disabled: p.short || t.disabled,
            active: c.includes(2),
            onClick: f
          }, Object(l.t)(br())), i.a.createElement(Sr, {
            colors: t.colors,
            disabled: p.long || t.disabled,
            active: c.includes(1) || c.includes(11),
            onClick: m
          }, Object(l.t)(mr()))), i.a.createElement(dr, {
            items: s,
            colors: t.colors,
            disabled: t.disabled,
            selected: function (e) {
              return function (t, e) {
                return !(!t || !e) && (e.isCfdOptions ? e.cdfExpiry === t.cdfExpiry : t.deadPeriod === e.deadPeriod && t.expiry === e.expiry && t.gameType === e.gameType && t.payout === e.payout && t.round === e.round);
              }(t.game, e);
            },
            onSelect: function (e) {
              !function (e) {
                if (e.isCfdOptions && e.cdfExpiry)
                  return t.actionSetSelectedCfdOptionExpiry(e.cdfExpiry);
                !t.disabled && t.actionSelectGame(e);
              }(e);
            },
            getPositionsForExpiry: t.getPositionsForExpiry
          }));
      }
      ))
      , zr = n(287);
    function Nr() {
      var t = Object(r.a)(["seconds"]);
      return Nr = function () {
        return t;
      }
        ,
        t;
    }
    var Dr = Object(c.c)((function (t) {
      return {
        time: t.time
      };
    }
    ))((function (t) {
      var e = t.time
        , n = t.game;
      if (null === n || void 0 === n ? void 0 : n.timestamp) {
        var r = Number(n.timestamp) - 1e3 * n.deadPeriod;
        return r < e ? i.a.createElement("div", null, "0 ", Object(l.t)(Nr())) : i.a.createElement("div", null, fr.a.formatDistanceStrict(Object(zr.c)(e), r));
      }
      return null;
    }
    ));
    function Rr() {
      var t = Object(r.a)(["Breakeven Price"]);
      return Rr = function () {
        return t;
      }
        ,
        t;
    }
    function Fr() {
      var t = Object(r.a)(["Potential profit"]);
      return Fr = function () {
        return t;
      }
        ,
        t;
    }
    function Br() {
      var t = Object(r.a)(["Time left"]);
      return Br = function () {
        return t;
      }
        ,
        t;
    }
    function Hr() {
      var t = Object(r.a)(["Strike price"]);
      return Hr = function () {
        return t;
      }
        ,
        t;
    }
    function Vr() {
      var t = Object(r.a)([""]);
      return Vr = function () {
        return t;
      }
        ,
        t;
    }
    function Wr() {
      var t = Object(r.a)(["\n          @media (orientation: landscape) {\n            margin-top: 15px;\n          }\n        "]);
      return Wr = function () {
        return t;
      }
        ,
        t;
    }
    function Ur() {
      var t = Object(r.a)(["\n  width: 100%;\n  text-align: left;\n  margin-top: 10px;\n  ", "\n\n  thead {\n    height: 12px;\n    line-height: 12px;\n    font-weight: 500;\n    font-size: 12px;\n    letter-spacing: 0.1px;\n    color: ", ";\n  }\n  tbody {\n    tr {\n      margin-top: 6px;\n      height: 12px;\n      line-height: 1;\n      font-size: 12px;\n      font-weight: 500;\n      letter-spacing: 0.1px;\n\n      td.secondary {\n        color: ", ";\n      }\n      td.primary {\n        color: ", ";\n      }\n    }\n  }\n"]);
      return Ur = function () {
        return t;
      }
        ,
        t;
    }
    var Gr = d.c.table(Ur(), (function (t) {
      return t.isMobile && Object(E.a)(t.isMobile) ? Object(d.b)(Wr()) : Object(d.b)(Vr());
    }
    ), (function (t) {
      return t.colors.sidebarLabelText;
    }
    ), (function (t) {
      return t.colors.primaryText;
    }
    ), (function (t) {
      return t.colors.primary;
    }
    ))
      , Yr = function (t) {
        return i.a.createElement(Gr, {
          colors: t.colors,
          isMobile: t.isMobile
        }, i.a.createElement("colgroup", null, i.a.createElement("col", {
          span: 1,
          style: {
            width: "33%"
          }
        }), i.a.createElement("col", {
          span: 1,
          style: {
            width: "33%"
          }
        }), i.a.createElement("col", {
          span: 1,
          style: {
            width: "33%"
          }
        })), i.a.createElement("thead", null, i.a.createElement("tr", null, t.lastPrice && i.a.createElement("th", null, Object(l.t)(Hr())), i.a.createElement("th", null, Object(l.t)(Br())), t.potentialProfit && i.a.createElement("th", null, Object(l.t)(Fr())), t.breakevenPrice && i.a.createElement("th", null, Object(l.t)(Rr())))), i.a.createElement("tbody", null, i.a.createElement("tr", null, t.lastPrice && i.a.createElement("td", {
          className: "secondary"
        }, t.lastPrice), i.a.createElement("td", {
          className: "primary"
        }, i.a.createElement(Dr, {
          game: t.game
        })), t.potentialProfit && i.a.createElement("td", {
          className: "primary"
        }, t.potentialProfit), t.breakevenPrice && i.a.createElement("td", {
          className: "primary"
        }, t.breakevenPrice))));
      };
    function qr() {
      var t = Object(r.a)(["Time left"]);
      return qr = function () {
        return t;
      }
        ,
        t;
    }
    function Zr() {
      var t = Object(r.a)(["Expiry at"]);
      return Zr = function () {
        return t;
      }
        ,
        t;
    }
    function Xr() {
      var t = Object(r.a)(["Strike Price"]);
      return Xr = function () {
        return t;
      }
        ,
        t;
    }
    function Qr() {
      var t = Object(r.a)(["\n\tmargin-left: 5px;\n\tflex: 0 1 auto;\n\ttext-align: right;\n\tfont-size: 11px;\n\tcolor: ", ";\n"]);
      return Qr = function () {
        return t;
      }
        ,
        t;
    }
    function Jr() {
      var t = Object(r.a)(["\n\tflex: 1 1 auto;\n\topacity: 0.5;\n\theight: 11px;\n\tborder-bottom: dashed 1px #979797;\n"]);
      return Jr = function () {
        return t;
      }
        ,
        t;
    }
    function Kr() {
      var t = Object(r.a)(["\n\tflex: 0 1 auto;\n\ttext-align: left;\n\tfont-size: 11px;\n\tcolor: ", ";\n\tmargin-right: 5px;\n"]);
      return Kr = function () {
        return t;
      }
        ,
        t;
    }
    function $r() {
      var t = Object(r.a)(["\n\tdisplay: flex;\n\theight: 14px;\n\tline-height: 14px;\n"]);
      return $r = function () {
        return t;
      }
        ,
        t;
    }
    function to() {
      var t = Object(r.a)(["\n\tdisplay: block;\n\tmargin-bottom: 20px;\n"]);
      return to = function () {
        return t;
      }
        ,
        t;
    }
    var eo = d.c.div(to())
      , no = d.c.div($r())
      , ro = d.c.div(Kr(), (function (t) {
        return t.colors.sidebarLabelText;
      }
      ))
      , oo = d.c.div(Jr())
      , ao = d.c.div(Qr(), (function (t) {
        return t.green ? t.colors.primary : t.colors.primaryText;
      }
      ))
      , io = function (t) {
        var e = t.game
          , n = t.lastPrice
          , r = t.colors
          , o = t.disableStrikePrice;
        return i.a.createElement(eo, null, !o && i.a.createElement(no, null, i.a.createElement(ro, {
          colors: r
        }, Object(l.t)(Xr())), i.a.createElement(oo, null), i.a.createElement(ao, {
          colors: r,
          green: !1
        }, n)), e && i.a.createElement(no, null, i.a.createElement(ro, {
          colors: r
        }, Object(l.t)(Zr())), i.a.createElement(oo, null), i.a.createElement(ao, {
          colors: r,
          green: !1
        }, e.timestamp && Object(s.c)(e))), i.a.createElement(no, null, i.a.createElement(ro, {
          colors: r
        }, Object(l.t)(qr())), i.a.createElement(oo, null), i.a.createElement(ao, {
          colors: r,
          green: !0
        }, i.a.createElement(Dr, {
          game: e
        }))));
      };
    function co() {
      var t = Object(r.a)(["\n  font-size: 18px;\n  font-weight: bold;\n  text-transform: uppercase;\n\n  .dp__arrow {\n    margin-right: 6px;\n    padding-top: 4px;\n  }\n"]);
      return co = function () {
        return t;
      }
        ,
        t;
    }
    function lo() {
      var t = Object(r.a)(["\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n  margin: 5px;\n  cursor: pointer;\n  border-radius: 5px;\n  pointer-events: ", ";\n  color: ", ";\n  background: ", ";\n  border: 1px solid ", ";\n  svg {\n    stroke: ", ";\n  }\n\n  &:hover,\n  &.hover {\n    color: ", " !important;\n    border: 1px solid\n      ", " !important;\n\n    svg {\n      stroke: ", " !important;\n    }\n  }\n\n  &:first-child {\n    margin-left: 0;\n  }\n\n  &:last-child {\n    margin-right: 0;\n  }\n"]);
      return lo = function () {
        return t;
      }
        ,
        t;
    }
    function uo() {
      var t = Object(r.a)(["\n  display: flex;\n  flex-direction: ", ";\n"]);
      return uo = function () {
        return t;
      }
        ,
        t;
    }
    var so = function (t) {
      return t.disable ? "#8491A3" : t.activeButton && t.activeButton === t.direction ? t.colors.tradebox.highlowDepressedTextColor : tt(t, 1 == t.direction ? v.high : v.low);
    }
      , po = d.c.div(uo(), (function (t) {
        return Object(E.a)(t.isMobile) ? "column" : "row";
      }
      ))
      , fo = d.c.div(lo(), (function (t) {
        return t.disable ? "none" : "unset";
      }
      ), (function (t) {
        return so(t);
      }
      ), (function (t) {
        return function (t) {
          return t.disable ? "transparent" : t.activeButton && t.activeButton === t.direction ? 1 == t.activeButton ? t.colors.tradebox.highActive : t.colors.tradebox.lowActive : K(t, 1 == t.direction ? v.high : v.low);
        }(t);
      }
      ), (function (t) {
        return function (t) {
          return t.disable ? t.colors.secondaryText : t.activeButton && t.activeButton === t.direction ? 1 == t.activeButton ? t.colors.tradebox.highActive : t.colors.tradebox.lowActive : K(t, 1 == t.direction ? v.high : v.low);
        }(t);
      }
      ), (function (t) {
        return so(t);
      }
      ), (function (t) {
        return t.colors.primaryText;
      }
      ), (function (t) {
        return 1 == t.direction ? t.colors.tradebox.highText : t.colors.tradebox.lowText;
      }
      ), (function (t) {
        return t.colors.primaryText;
      }
      ))
      , mo = d.c.div(co());
    function bo() {
      var t = Object(r.a)(["\n  flex: 0 0 35px;\n  height: 35px;\n  line-height: 35px;\n  border-radius: 3px;\n  text-align: center;\n  user-select: none;\n\n  color: ", ";\n  background-color: ", ";\n\n  cursor: ", ";\n  pointer-events: ", ";\n  opacity: ", ";\n"]);
      return bo = function () {
        return t;
      }
        ,
        t;
    }
    function ho() {
      var t = Object(r.a)(["\n            flex: 1 0 auto;\n          "]);
      return ho = function () {
        return t;
      }
        ,
        t;
    }
    function go() {
      var t = Object(r.a)([""]);
      return go = function () {
        return t;
      }
        ,
        t;
    }
    function vo() {
      var t = Object(r.a)(["\n  display: flex;\n  margin-top: ", "px;\n  margin-bottom: ", "px;\n\n  .amount-input {\n    ", "\n    box-sizing: border-box;\n    height: 35px;\n    border-radius: 3px;\n    min-width: 0;\n    margin: 0 5px;\n    font-size: 16px;\n    font-weight: 500;\n    line-height: 0.75;\n    letter-spacing: 0.13px;\n    text-align: center;\n    border: none;\n    outline: none;\n    pointer-events: none;\n\n    &::placeholder {\n      color: ", ";\n    }\n\n    color: ", ";\n    background-color: ", ";\n  }\n"]);
      return vo = function () {
        return t;
      }
        ,
        t;
    }
    var xo, Oo = d.c.div(vo(), (function (t) {
      return t.isMobile ? 10 : 0;
    }
    ), (function (t) {
      return t.isMobile ? 15 : 10;
    }
    ), (function (t) {
      return Object(E.a)(t.isMobile) ? Object(d.b)(go()) : Object(d.b)(ho());
    }
    ), (function (t) {
      return t.colors.primary;
    }
    ), (function (t) {
      return t.colors.primary;
    }
    ), (function (t) {
      return t.colors.tradebox.fieldBackground;
    }
    )), yo = d.c.div(bo(), (function (t) {
      return t.colors.primaryText;
    }
    ), (function (t) {
      return t.colors.tradebox.fieldBackground;
    }
    ), (function (t) {
      return t.disabled ? "not-allowed" : "pointer";
    }
    ), (function (t) {
      return t.disabled ? "none" : "unset";
    }
    ), (function (t) {
      return t.disabled ? "0.3" : "1";
    }
    )), jo = function (t) {
      var e, n = t.games.map((function (t) {
        return t.cdfExpiry;
      }
      )).indexOf(t.game.cdfExpiry), r = null == t.games[n + 1], o = null == t.games[n - 1];
      return i.a.createElement(Oo, {
        isMobile: !0,
        colors: t.colors
      }, i.a.createElement(yo, {
        colors: t.colors,
        disabled: o,
        onClick: function () {
          return t.actionSetSelectedCfdOptionExpiry(t.games[n - 1].cdfExpiry);
        }
      }, "-"), i.a.createElement(p.a, {
        className: "amount-input",
        name: "amount",
        placeholder: "".concat(null !== (e = t.game.cdfExpiry) && void 0 !== e ? e : "", " H"),
        allowNegativeValue: !1
      }), i.a.createElement(yo, {
        colors: t.colors,
        disabled: r,
        onClick: function () {
          return t.actionSetSelectedCfdOptionExpiry(t.games[n + 1].cdfExpiry);
        }
      }, "+"));
    }, Eo = n(276);
    function wo() {
      var t = Object(r.a)(["Tap up or down"]);
      return wo = function () {
        return t;
      }
        ,
        t;
    }
    function Co() {
      var t = Object(r.a)(["It is not allowed to make trades in the opposite direction while you have active open trades"]);
      return Co = function () {
        return t;
      }
        ,
        t;
    }
    function ko() {
      var t = Object(r.a)(["It is not allowed to make trades in the opposite direction while you have active open trades"]);
      return ko = function () {
        return t;
      }
        ,
        t;
    }
    function To() {
      var t = Object(r.a)(["Down"]);
      return To = function () {
        return t;
      }
        ,
        t;
    }
    function Mo() {
      var t = Object(r.a)(["It is not allowed to make trades in the opposite direction while you have active open trades"]);
      return Mo = function () {
        return t;
      }
        ,
        t;
    }
    function So() {
      var t = Object(r.a)(["Up"]);
      return So = function () {
        return t;
      }
        ,
        t;
    }
    function Lo() {
      var t = Object(r.a)(["Amount"]);
      return Lo = function () {
        return t;
      }
        ,
        t;
    }
    function Io() {
      var t = Object(r.a)(["Time Duration"]);
      return Io = function () {
        return t;
      }
        ,
        t;
    }
    function _o() {
      var t = Object(r.a)(["Trading is not available"]);
      return _o = function () {
        return t;
      }
        ,
        t;
    }
    function Po() {
      var t = Object(r.a)(["Trade"]);
      return Po = function () {
        return t;
      }
        ,
        t;
    }
    !function (t) {
      t.allow = "1",
        t.notAllow = "0";
    }(xo || (xo = {}));
    var Ao = Object(c.c)((function (t) {
      return {
        direction: t.trading.direction,
        minStake: Number(t.registry.data.investmentLimits.minStake),
        wallet: t.wallets,
        registry: t.registry.data,
        colors: t.theme,
        loggedIn: Object(ct.a)(t),
        game: t.game,
        instrumentID: t.trading.selected,
        inTradingHours: t.trading.inTradingHours,
        payout: t.trading.currentPayout,
        practiceMode: Object(it.m)(t),
        lastPrice: Object(it.k)(t),
        tradeOperationsConfig: t.registry.data.tradeOperationsConfig,
        formatCurrency: Object(Gt.a)(t),
        currencySymbol: Object(Gt.e)(t),
        precision: Object(Gt.d)(t),
        tradeSubmittedNotification: t.notifications.notifications.length > 0,
        sendingTrade: t.trading.sendingTrade,
        oneClickTrade: t.registry.data.partnerConfig.oneClickTrade,
        cfdOptionsActiveDirection: t.trading.cfdOptionsActiveDirection,
        selectedCfdOptionInstrument: t.trading.selectedCfdOptionInstrument,
        cfdRiskAmount: t.trading.cfdRiskAmount,
        selectedCfdOptionExpiry: t.trading.selectedCfdOptionExpiry,
        optionsCfdHedgeAllowed: t.registry.data.partnerConfig.optionsCfdHedgeAllowed,
        openTrades: t.trades.open || []
      };
    }
    ), {
      actionSubmitTrade: u.U,
      actionSelectGame: ut.c,
      actionSetDirection: u.N,
      actionShowModal: lt.e,
      actionAddMessage: st.c,
      actionSetCfdRiskAmount: u.K,
      actionSetCfdOptionsActiveDirection: u.J,
      actionSetSelectedCfdOptionExpiry: u.R
    })((function (t) {
      var e, n = t.payout, r = t.loggedIn, c = t.direction, u = t.colors, s = t.inTradingHours, d = t.instrumentID, p = t.practiceMode, f = t.wallet, m = t.registry, b = (t.formatCurrency,
        t.precision), h = t.isMobile, g = t.tradeSubmittedNotification, v = t.sendingTrade, x = t.cfdOptionsActiveDirection, O = t.selectedCfdOptionInstrument, y = t.selectedCfdOptionExpiry, E = t.cfdRiskAmount, w = t.actionSetCfdRiskAmount, C = t.optionsCfdHedgeAllowed, k = t.openTrades, T = Object(a.useState)(!1), M = Object(o.a)(T, 2), S = M[0], L = M[1], I = Object(a.useState)(!1), _ = Object(o.a)(I, 2), P = _[0], A = _[1], z = Object(a.useState)(!1), N = Object(o.a)(z, 2), D = N[0], R = N[1];
      Object(a.useEffect)((function () {
        if (C === xo.notAllow && k.length > 0) {
          var t = k.filter((function (t) {
            return Object(dt.toNumber)(t.instrumentID) === Object(dt.toNumber)(d) && (t.optionValue || 0) > 0;
          }
          ));
          if (t.length > 0)
            return void (1 === t[0].direction ? (R(!0),
              A(!1)) : (A(!0),
                R(!1)));
        }
        R(!1),
          A(!1);
      }
      ), [C, k, d]);
      var F, B = s, H = B ? Object(l.t)(Po()) : Object(l.t)(_o()), V = (F = m.investmentLimits,
      {
        defaultStake: Number(F.defaultStakeOptionsCfd),
        minStake: Number(F.minStakeOptionsCfd),
        maxStake: Number(F.maxStakeOptionsCfd)
      }), W = V.defaultStake, U = V.minStake, G = V.maxStake, Y = Object(a.useState)((function () {
        var e = nn.a.getOneClickTrade();
        return null !== e ? e : !!t.isMobile || t.oneClickTrade;
      }
      )), q = Object(o.a)(Y, 2), Z = q[0], X = q[1], Q = (Z || B) && !v, J = Q && 0 !== c;
      Object(a.useEffect)((function () {
        if (!S && t.game && f) {
          var e = pt(12, m, f);
          w(e);
        }
      }
      ), [d, t.game, f, m, S]);
      var K = function (e) {
        if (e.preventDefault(),
          !r)
          return t.actionShowModal(lt.b.SESSION_EXPIRED, {});
        var o = O[y];
        J && t.actionSubmitTrade({
          type: 12,
          userCurrencyStake: E,
          userCurrency: 1,
          instrumentID: d,
          direction: c,
          distance: 0,
          gameType: 12,
          practice: p,
          strike: t.lastPrice,
          payout: n,
          stake: E,
          expiry: o.expiry,
          optionValue: o.price,
          source: "Simple-Trader",
          wow: !0
        });
      }
        , $ = function (e) {
          return Z ? function (e) {
            if (r)
              if (B) {
                var o = O[y];
                t.actionSubmitTrade({
                  type: 12,
                  userCurrencyStake: E,
                  userCurrency: 1,
                  instrumentID: d,
                  direction: e,
                  distance: 0,
                  gameType: 12,
                  practice: p,
                  strike: t.lastPrice,
                  payout: n,
                  stake: E,
                  expiry: o.expiry,
                  optionValue: o.price,
                  source: "Simple-Trader",
                  wow: !0,
                  openPanel: !h
                });
              } else
                t.actionAddMessage("Could not create a trade");
            else
              t.actionShowModal(lt.b.SESSION_EXPIRED, {});
          }(e) : t.actionSetDirection(e);
        }
        , tt = null === O || void 0 === O ? void 0 : O[y]
        , et = {
          round: 0,
          expiry: 0,
          deadPeriod: 0,
          payout: "",
          rebate: "",
          gameType: 12,
          cdfExpiry: y,
          timestamp: (null === tt || void 0 === tt ? void 0 : tt.expiry) && new Date(tt.expiry),
          isCfdOptions: !0,
          disabled: !1
        };
      return i.a.createElement(Pt, {
        isMobile: h,
        colors: u
      }, !h && i.a.createElement(Dn, {
        colors: u,
        productTypes: t.productTypes
      }), i.a.createElement(At, {
        id: "tradebox_panel",
        colors: u,
        isMobile: h,
        isCfdOptions: !0
      }, i.a.createElement(zt, {
        top: 2,
        colors: u
      }, Object(l.t)(Io())), !h && i.a.createElement(Ar, {
        game: et,
        games: Object.keys(null !== O && void 0 !== O ? O : []).map((function (t) {
          return {
            round: 0,
            expiry: 0,
            deadPeriod: 0,
            payout: "",
            rebate: "",
            gameType: 12,
            cdfExpiry: t,
            timestamp: O[t].expiry,
            isCfdOptions: !0,
            disabled: !1
          };
        }
        )),
        colors: u,
        isMobile: h,
        disableShortLong: !0,
        disabled: !s,
        isCfdOptions: !0
      }), h && i.a.createElement(jo, {
        colors: u,
        game: et,
        games: Object.keys(null !== O && void 0 !== O ? O : []).map((function (t) {
          return {
            round: 0,
            expiry: 0,
            deadPeriod: 0,
            payout: "",
            rebate: "",
            gameType: 12,
            cdfExpiry: t,
            timestamp: O[t].expiry,
            isCfdOptions: !0,
            disabled: !1
          };
        }
        )),
        actionSetSelectedCfdOptionExpiry: t.actionSetSelectedCfdOptionExpiry
      }), i.a.createElement(zt, {
        top: 0,
        colors: u
      }, Object(l.t)(Lo())), i.a.createElement(j, {
        isCfdOptions: !0,
        colors: u,
        currencySymbol: t.currencySymbol,
        precision: b,
        value: E,
        isMobile: h,
        minStake: U,
        defaultStake: W,
        maxStake: G,
        onChange: function (t) {
          w(t),
            S || L(!0);
        },
        loggedIn: r
      }), "\u0243" !== t.currencySymbol && i.a.createElement(Qe, {
        maxValue: G,
        curValue: E,
        colors: u,
        loggedIn: r,
        onClick: function (t) {
          return w(E + t);
        }
      }), !h && i.a.createElement(io, {
        colors: u,
        game: et,
        disableStrikePrice: !0,
        lastPrice: t.lastPrice
      }), g && i.a.createElement(be, null), !h && i.a.createElement(po, null, i.a.createElement("div", {
        "data-tip": "",
        "data-for": "hight_trade_button_tooltip",
        style: {
          flex: 1,
          marginRight: 5
        }
      }, i.a.createElement(fo, {
        direction: 1,
        className: 1 !== x || P ? "" : "hover",
        colors: u,
        activeButton: c,
        onClick: function () {
          return $(1);
        },
        onMouseEnter: function () {
          return t.actionSetCfdOptionsActiveDirection(1);
        },
        onMouseLeave: function () {
          return t.actionSetCfdOptionsActiveDirection(null);
        },
        disable: P
      }, i.a.createElement(mo, {
        direction: 1,
        colors: u
      }, i.a.createElement("span", {
        className: "dp__arrow"
      }, i.a.createElement("svg", {
        width: "9",
        height: "9",
        viewBox: "0 0 9 9",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, i.a.createElement("path", {
        d: "M1 8L8 1",
        strokeLinecap: "round"
      }), i.a.createElement("path", {
        d: "M2 1H8V7",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }))), Object(l.t)(So())), i.a.createElement(Eo.a, {
        id: "hight_trade_button_tooltip",
        place: "bottom"
      }, P ? Object(l.t)(Mo()) : ""))), i.a.createElement("div", {
        "data-tip": "",
        "data-for": "low_trade_button_tooltip",
        style: {
          flex: 1,
          marginLeft: 5
        }
      }, i.a.createElement(fo, {
        direction: -1,
        className: -1 !== x || D ? "" : "hover",
        colors: u,
        activeButton: c,
        onClick: function () {
          return $(-1);
        },
        onMouseEnter: function () {
          return t.actionSetCfdOptionsActiveDirection(-1);
        },
        onMouseLeave: function () {
          return t.actionSetCfdOptionsActiveDirection(null);
        },
        disable: D
      }, i.a.createElement(mo, {
        direction: -1,
        colors: u
      }, i.a.createElement("span", {
        className: "dp__arrow"
      }, i.a.createElement("svg", {
        width: "9",
        height: "9",
        viewBox: "0 0 9 9",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, i.a.createElement("path", {
        d: "M1 1L8 8",
        strokeLinecap: "round"
      }), i.a.createElement("path", {
        d: "M2 8H8V2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }))), Object(l.t)(To()))), i.a.createElement(Eo.a, {
        id: "low_trade_button_tooltip",
        place: "bottom"
      }, D ? Object(l.t)(ko()) : ""))), h && i.a.createElement(Bt, {
        isMobile: h
      }, i.a.createElement(at, {
        colors: u,
        isMobile: h,
        value: c,
        payout: void 0,
        disabled: !Q || D,
        onChange: $,
        onHover: function () { },
        sendingTrade: v
      }), i.a.createElement(rt, {
        colors: u,
        isMobile: h,
        value: c,
        payout: void 0,
        disabled: !Q || P,
        onChange: $,
        onHover: function () { },
        sendingTrade: v
      })), h && (D || P) && i.a.createElement(Ut, {
        colors: t.colors
      }, D || P ? Object(l.t)(Co()) : ""), h ? Z ? null : J ? i.a.createElement(Rt, {
        colors: u,
        disabled: !J,
        onClick: r ? K : function (e) {
          e.preventDefault(),
            t.actionShowModal(lt.b.SESSION_EXPIRED, {});
        }
        ,
        isMobile: h
      }, H) : i.a.createElement(Ft, {
        colors: u,
        isMobile: h
      }, Object(l.t)(wo())) : null, h ? null : !Z && i.a.createElement(Rt, {
        colors: u,
        disabled: !J,
        onClick: K,
        isMobile: h
      }, H), i.a.createElement(en, {
        isMobile: h,
        active: Z,
        colors: u,
        onChange: function (e) {
          nn.a.setOneClickTrade(e),
            X(e),
            e && t.actionSetDirection(0);
        }
      }), h && i.a.createElement(Yr, {
        isMobile: h,
        game: et,
        colors: u,
        lastPrice: t.lastPrice,
        breakevenPrice: Object(dt.round)(Number(t.lastPrice) + Number(null !== (e = null === tt || void 0 === tt ? void 0 : tt.price) && void 0 !== e ? e : 0), 3)
      })));
    }
    ));
    function zo() {
      var t = Object(r.a)(["\n  content: '';\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: 0 40px;\n"]);
      return zo = function () {
        return t;
      }
        ,
        t;
    }
    function No() {
      var t = Object(r.a)(["\n  flex: 0 0 35px;\n  height: 35px;\n  line-height: 35px;\n  border-radius: 3px;\n  text-align: center;\n  user-select: none;\n  font-size: 30px;\n  color: ", ";\n  background-color: ", ";\n\n  cursor: ", ";\n"]);
      return No = function () {
        return t;
      }
        ,
        t;
    }
    function Do() {
      var t = Object(r.a)(["\n            flex: 1 0 auto;\n          "]);
      return Do = function () {
        return t;
      }
        ,
        t;
    }
    function Ro() {
      var t = Object(r.a)([""]);
      return Ro = function () {
        return t;
      }
        ,
        t;
    }
    function Fo() {
      var t = Object(r.a)(["\n  display: flex;\n  margin-top: ", "px;\n  margin-bottom: ", "px;\n  position: relative;\n\n  .amount-input,\n  .amount-input:disabled {\n    ", "\n    box-sizing: border-box;\n    height: 35px;\n    border-radius: 3px;\n    min-width: 0;\n    margin: 0 5px;\n    font-size: 16px;\n    font-weight: 500;\n    line-height: 0.75;\n    letter-spacing: 0.13px;\n    text-align: center;\n    border: none;\n    outline: none;\n    opacity: 1;\n\n    &::placeholder {\n      color: ", ";\n    }\n\n    background-color: ", ";\n  }\n"]);
      return Fo = function () {
        return t;
      }
        ,
        t;
    }
    var Bo = function (t, e, n, r, o) {
      return !(!o && (t > 0 || e > 0)) && (t + e > r || t + e < n);
    }
      , Ho = d.c.div(Fo(), (function (t) {
        return t.isMobile ? 15 : 10;
      }
      ), (function (t) {
        return t.isMobile ? 15 : 10;
      }
      ), (function (t) {
        return Object(E.a)(t.isMobile) ? Object(d.b)(Ro()) : Object(d.b)(Do());
      }
      ), (function (t) {
        return t.colors.primary;
      }
      ), (function (t) {
        return t.colors.tradebox.fieldBackground;
      }
      ))
      , Vo = d.c.div(No(), (function (t) {
        return t.colors.primaryText;
      }
      ), (function (t) {
        return t.colors.tradebox.fieldBackground;
      }
      ), (function (t) {
        return t.disabled ? "not-allowed" : "pointer";
      }
      ))
      , Wo = d.c.div(zo())
      , Uo = function (t) {
        var e = t.defaultStake
          , n = function (e) {
            if (Bo(Number(t.value), e, t.minStake, t.maxStake, t.loggedIn))
              ;
            else {
              var n = Number(t.value) + e;
              t.onChange(n > 0 ? n : 0);
            }
          };
        return i.a.createElement(Ho, {
          isMobile: t.isMobile,
          colors: t.colors
        }, i.a.createElement(Wo, {
          onClick: t.onClick
        }), i.a.createElement(Vo, {
          colors: t.colors,
          disabled: Bo(Number(t.value), -e, t.minStake, t.maxStake, t.loggedIn),
          onClick: function () {
            return n(-e);
          }
        }, "\u2013"), i.a.createElement(p.a, {
          className: "amount-input",
          name: "amount",
          disabled: !0,
          value: t.value,
          allowNegativeValue: !1,
          decimalsLimit: t.precision,
          prefix: t.currencySymbol,
          onValueChange: function (e) {
            return t.onChange(e ? parseFloat(e) : 0);
          }
        }), i.a.createElement(Vo, {
          colors: t.colors,
          disabled: Bo(Number(t.value), e, t.minStake, t.maxStake, t.loggedIn),
          onClick: function () {
            return n(e);
          }
        }, "+"));
      }
      , Go = n(323);
    function Yo() {
      return (Yo = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
        return t;
      }
      ).apply(this, arguments);
    }
    function qo(t, e) {
      if (null == t)
        return {};
      var n, r, o = function (t, e) {
        if (null == t)
          return {};
        var n, r, o = {}, a = Object.keys(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || (o[n] = t[n]);
        return o;
      }(t, e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]);
      }
      return o;
    }
    var Zo = i.a.createElement("path", {
      d: "M10.8932 0.244706L0.844398 8.96426C0.394044 9.35505 0.383569 10.0506 0.821949 10.4548L10.888 19.7352C11.0726 19.9055 11.3146 20 11.5658 20H34.4545C35.0068 20 35.4545 19.5523 35.4545 19V1C35.4545 0.447715 35.0068 0 34.4545 0H11.5485C11.3077 0 11.075 0.0868897 10.8932 0.244706Z",
      fill: "#667DA1"
    })
      , Xo = i.a.createElement("path", {
        d: "M17.667 6.66669L24.3337 13.3334",
        stroke: "white",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
      , Qo = i.a.createElement("path", {
        d: "M17.667 13.3334L24.3337 6.66669",
        stroke: "white",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
      , Jo = function (t) {
        var e = t.svgRef
          , n = t.title
          , r = qo(t, ["svgRef", "title"]);
        return i.a.createElement("svg", Yo({
          width: 36,
          height: 20,
          viewBox: "0 0 36 20",
          fill: "none",
          ref: e
        }, r), n ? i.a.createElement("title", null, n) : null, Zo, Xo, Qo);
      }
      , Ko = i.a.forwardRef((function (t, e) {
        return i.a.createElement(Jo, Yo({
          svgRef: e
        }, t));
      }
      ));
    n.p;
    function $o() {
      var t = Object(r.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tcolor: ", ";\n\tbackground-color: ", ";\n"]);
      return $o = function () {
        return t;
      }
        ,
        t;
    }
    function ta() {
      var t = Object(r.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tpadding-left: 11px;\n\tgrid-column: 1 / span 3;\n\n\tfont-style: normal;\n\tfont-weight: 500;\n\tfont-size: 16px;\n\tline-height: 14px;\n\tcolor: ", ";\n\n\t", " {\n\t\ttransform: none;\n\t\tz-index: unset;\n\t}\n"]);
      return ta = function () {
        return t;
      }
        ,
        t;
    }
    function ea() {
      var t = Object(r.a)(["\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr 1fr;\n\tgrid-template-rows: 51px 51px 51px 51px 51px;\n\tgap: 1.36px;\n\twidth: calc(100% + 40px);\n\tmargin-left: -20px;\n\tbackground-color: ", ";\n"]);
      return ea = function () {
        return t;
      }
        ,
        t;
    }
    var na = d.c.div(ea(), (function (t) {
      return t.colors.background;
    }
    ))
      , ra = d.c.div(ta(), (function (t) {
        return t.colors.primaryText;
      }
      ), Go.a)
      , oa = d.c.div($o(), (function (t) {
        return t.colors.primaryText;
      }
      ), (function (t) {
        return t.colors.panelBorder;
      }
      ))
      , aa = Object(c.c)((function (t) {
        return {
          colors: t.theme
        };
      }
      ))((function (t) {
        var e = t.colors
          , n = t.onClose
          , r = t.onInput
          , c = t.onTouch
          , l = Object(a.useState)(!1)
          , u = Object(o.a)(l, 2)
          , s = u[0]
          , d = u[1];
        return i.a.createElement(na, {
          colors: e
        }, i.a.createElement(ra, {
          colors: e
        }, i.a.createElement(Go.a, {
          onClick: n,
          colors: e
        })), [1, 2, 3, 4, 5, 6, 7, 8, 9, ".", 0, -1].map((function (t, n) {
          return i.a.createElement(oa, {
            key: n,
            colors: e,
            onClick: function () {
              return function (t) {
                if (!s && void 0 !== t)
                  return d(!0),
                    void c(t);
                void 0 !== t && r(t);
              }(t);
            }
          }, -1 !== t ? t : i.a.createElement(Ko, null));
        }
        )));
      }
      ))
      , ia = function (t) {
        var e = t.colors
          , n = t.payout
          , r = t.amount
          , o = t.potentialProfit
          , a = t.formatCurrency;
        return i.a.createElement(Wt, {
          colors: e
        }, i.a.createElement(Nt, {
          colors: e
        }, i.a.createElement("h2", null, n, "%"), i.a.createElement("h3", null, "+", a(o))), i.a.createElement(Me, {
          payout: n,
          amount: r,
          colors: e,
          formatCurrency: a
        }));
      };
    function ca() {
      var t = Object(r.a)(["Payout information"]);
      return ca = function () {
        return t;
      }
        ,
        t;
    }
    function la() {
      var t = Object(r.a)(["Payout information"]);
      return la = function () {
        return t;
      }
        ,
        t;
    }
    function ua() {
      var t = Object(r.a)(["Tap high or low"]);
      return ua = function () {
        return t;
      }
        ,
        t;
    }
    function sa() {
      var t = Object(r.a)(["Time Duration"]);
      return sa = function () {
        return t;
      }
        ,
        t;
    }
    function da() {
      var t = Object(r.a)(["Amount"]);
      return da = function () {
        return t;
      }
        ,
        t;
    }
    function pa() {
      var t = Object(r.a)(["Trading is not available"]);
      return pa = function () {
        return t;
      }
        ,
        t;
    }
    function fa() {
      var t = Object(r.a)(["Trade"]);
      return fa = function () {
        return t;
      }
        ,
        t;
    }
    e.a = Object(c.c)((function (t) {
      var e;
      return {
        direction: t.trading.direction,
        minStake: Number(t.registry.data.investmentLimits.minStake),
        wallet: t.wallets,
        registry: t.registry.data,
        colors: t.theme,
        loggedIn: Object(ct.a)(t),
        game: t.game,
        games: t.games,
        instrumentID: t.trading.selected,
        selectedProductType: t.trading.selectedProductType,
        productTypes: t.trading.productTypes,
        gameEnteredDeadPeriod: t.trading.gameEnteredDeadPeriod,
        inTradingHours: t.trading.inTradingHours,
        payout: t.trading.currentPayout,
        practiceMode: Object(it.m)(t),
        lastPrice: Object(it.k)(t),
        tradeOperationsConfig: t.registry.data.tradeOperationsConfig,
        formatCurrency: Object(Gt.a)(t),
        currencySymbol: Object(Gt.e)(t),
        precision: Object(Gt.d)(t),
        tradeSubmittedNotification: t.notifications.notifications.length > 0,
        sendingTrade: t.trading.sendingTrade,
        oneClickTrade: t.registry.data.partnerConfig.oneClickTrade,
        isCfdProductType: Object(bn.b)(t),
        hideBonusWallet: t.registry.data.partnerConfig.hideBonusWallet,
        partnerConfig: t.registry.data.partnerConfig,
        enabledPlatformTypes: t.registry.data.enabledPlatformTypes,
        firstOpenCfdInstrument: null === (e = Object(it.d)(t)) || void 0 === e ? void 0 : e.instrumentID,
        isFirstTimeOpenWeb: t.container.isFirstTimeOpenWeb
      };
    }
    ), {
      actionSubmitTrade: u.U,
      actionSelectGame: ut.c,
      actionSetDirection: u.N,
      actionHoverDirection: u.B,
      actionShowModal: lt.e,
      actionAddMessage: st.c,
      actionSetProductType: u.P,
      actionSelectInstrument: u.G
    })((function (t) {
      var e, n, r = t.direction, c = t.payout, u = t.loggedIn, d = t.game, p = t.games, f = t.colors, m = t.inTradingHours, b = t.instrumentID, h = t.practiceMode, g = t.wallet, v = t.registry, x = t.formatCurrency, O = t.precision, y = t.gameEnteredDeadPeriod, w = t.isMobile, C = t.tradeSubmittedNotification, k = t.sendingTrade, T = t.isCfdProductType, M = t.onKeyboardOpened, S = t.hideBonusWallet, L = t.productTypes, I = t.mobileTradeHeight, _ = t.isFirstTimeOpenWeb, P = Object(a.useState)(100), A = Object(o.a)(P, 2), z = A[0], N = A[1], D = Object(a.useState)(!1), R = Object(o.a)(D, 2), F = R[0], B = R[1], H = Object(a.useState)(!1), V = Object(o.a)(H, 2), W = V[0], U = V[1], G = Object(a.useState)(!1), Y = Object(o.a)(G, 2), q = Y[0], Z = Y[1], X = c ? Number(z) * c / 100 : 0, Q = m && !y, J = Q ? Object(l.t)(fa()) : Object(l.t)(pa()), K = function (t, e) {
        var n = Object(o.a)({
          1: ["defaultStake", "minStake", "maxStake"],
          2: ["defaultStake60sec", "minStake60sec", "maxStake60sec"],
          11: ["defaultStakeLongTerm", "minStakeLongTerm", "maxStakeLongTerm"],
          12: ["defaultStakeOptionsCfd", "minStakeOptionsCfd", "maxStakeOptionsCfd"]
        }[t], 3)
          , r = n[0]
          , a = n[1]
          , i = n[2];
        return {
          defaultStake: Number(e[r]),
          minStake: Number(e[a]),
          maxStake: Number(e[i])
        };
      }((null === d || void 0 === d ? void 0 : d.gameType) || 2, v.investmentLimits), $ = K.defaultStake, tt = K.minStake, et = K.maxStake, nt = Object(a.useState)(!!(null !== (e = nn.a.getOneClickTrade()) && void 0 !== e ? e : t.isMobile) || t.oneClickTrade), ot = Object(o.a)(nt, 2), it = ot[0], ct = ot[1], ut = (it || Q) && !k, st = ut && 0 !== r;
      Object(a.useEffect)((function () {
        "options_cfd" === t.registry.partnerConfig.optionsDefaultPlatform && _ && (t.actionSetProductType(pn.a.cfdOptions),
          t.actionSetDirection(0),
          t.inTradingHours && t.actionSelectInstrument(t.firstOpenCfdInstrument));
      }
      ), []),
        Object(a.useEffect)((function () {
          if (!F && t.game && g) {
            var e = pt(t.game.gameType, v, g);
            N(e);
          }
        }
        ), [null === (n = t.game) || void 0 === n ? void 0 : n.gameType, v, F]);
      var dt = function (t) {
        N(t),
          F || B(!0);
      }
        , ft = function (e) {
          return it ? (n = e,
            void (u ? Q ? t.actionSubmitTrade({
              type: null === d || void 0 === d ? void 0 : d.gameType,
              userCurrencyStake: z,
              userCurrency: 1,
              instrumentID: b,
              direction: n,
              distance: 0,
              gameType: null === d || void 0 === d ? void 0 : d.gameType,
              practice: h,
              rebate: null === d || void 0 === d ? void 0 : d.rebate,
              strike: t.lastPrice,
              payout: c,
              stake: z,
              expiry: Number(null === d || void 0 === d ? void 0 : d.timestamp),
              source: "Simple-Trader",
              wow: !0,
              openPanel: !w
            }) : t.actionAddMessage("Could not create a trade") : t.actionShowModal(lt.b.SESSION_EXPIRED, {}))) : t.actionSetDirection(e);
          var n;
        }
        , mt = S && w ? Uo : j;
      return w || 0 !== L.length ? T ? i.a.createElement(Ao, {
        isMobile: w,
        productTypes: L
      }) : i.a.createElement(Pt, {
        isMobile: w,
        colors: f
      }, !w && i.a.createElement(Dn, {
        productTypes: L,
        colors: f
      }), i.a.createElement(At, {
        id: "tradebox_panel",
        colors: f,
        isMobile: w,
        isCfdOptions: !1
      }, (!w || Object(E.a)(w)) && i.a.createElement(Yn, {
        isCfdOptions: !1,
        colors: f
      }), i.a.createElement(zt, {
        top: Object(E.a)(w) ? 11 : w ? 0 : 21,
        colors: f
      }, Object(l.t)(da())), i.a.createElement(mt, {
        colors: f,
        currencySymbol: t.currencySymbol,
        precision: O,
        value: z,
        isMobile: w,
        minStake: tt,
        defaultStake: $,
        maxStake: et,
        onChange: dt,
        isCfdOptions: !1,
        loggedIn: u,
        onClick: function () {
          M(!0),
            Z(!0);
        }
      }), S && w && q && i.a.createElement(aa, {
        onInput: function (t) {
          if ("." !== t || !z.toString().includes(".")) {
            var e = -1 !== Number(t) ? String(z) + String(t) : String(z).slice(0, -1);
            dt(e);
          }
        },
        onClose: function () {
          M(!1),
            Z(!1);
        },
        onTouch: dt
      }), "\u0243" !== t.currencySymbol && i.a.createElement(Qe, {
        maxValue: et,
        curValue: Number(z),
        colors: f,
        loggedIn: u,
        onClick: function (t) {
          return N(Number(z) + t);
        }
      }), i.a.createElement(zt, {
        top: Object(E.a)(w) ? 11 : w ? 0 : 21,
        colors: f
      }, Object(l.t)(sa())), d && i.a.createElement(s.b, {
        game: d,
        games: p,
        colors: f,
        isMobile: w,
        isCfdOptions: !1,
        disabled: !m,
        disableShortLong: !0,
        mobileTradeHeight: I
      }), y && i.a.createElement(Ve, {
        colors: f,
        isMobile: w
      }), !w && i.a.createElement(i.a.Fragment, null, i.a.createElement(rt, {
        colors: f,
        isMobile: w,
        value: r,
        payout: c,
        disabled: !ut,
        onChange: ft,
        onHover: t.actionHoverDirection
      }), i.a.createElement(at, {
        colors: f,
        isMobile: w,
        value: r,
        payout: c,
        disabled: !ut,
        onChange: ft,
        onHover: t.actionHoverDirection
      })), w && i.a.createElement(Bt, {
        isMobile: w
      }, i.a.createElement(at, {
        colors: f,
        isMobile: w,
        value: r,
        payout: c,
        disabled: !ut,
        onChange: ft,
        onHover: function () { },
        sendingTrade: k
      }), i.a.createElement(rt, {
        colors: f,
        isMobile: w,
        value: r,
        payout: c,
        disabled: !ut,
        onChange: ft,
        onHover: function () { },
        sendingTrade: k
      })), C && i.a.createElement(be, null), it ? null : 0 !== r ? st && i.a.createElement(Rt, {
        colors: f,
        disabled: !st,
        onClick: u ? function (e) {
          e.preventDefault(),
            st && t.actionSubmitTrade({
              type: null === d || void 0 === d ? void 0 : d.gameType,
              userCurrencyStake: z,
              userCurrency: 1,
              instrumentID: b,
              direction: r,
              distance: 0,
              gameType: null === d || void 0 === d ? void 0 : d.gameType,
              practice: h,
              rebate: null === d || void 0 === d ? void 0 : d.rebate,
              strike: t.lastPrice,
              payout: c,
              stake: z,
              expiry: Number(null === d || void 0 === d ? void 0 : d.timestamp),
              source: "Simple-Trader",
              wow: !0,
              openPanel: !w
            });
        }
          : function (e) {
            e.preventDefault(),
              t.actionShowModal(lt.b.SESSION_EXPIRED, {});
          }
        ,
        isMobile: w
      }, J) : i.a.createElement(Ft, {
        colors: f,
        isMobile: w
      }, Object(l.t)(ua())), i.a.createElement(en, {
        isMobile: w,
        active: it,
        colors: f,
        onChange: function (e) {
          nn.a.setOneClickTrade(e),
            ct(e),
            e && t.actionSetDirection(0);
        }
      }), w ? i.a.createElement(Dt, {
        colors: f,
        isMobile: w
      }, i.a.createElement("span", {
        "data-tip": "",
        "data-for": "payout_information"
      }, i.a.createElement("span", null, Object(l.t)(la()), i.a.createElement(Oe, null)), i.a.createElement(Eo.a, {
        id: "payout_information",
        className: "react-tooltip-nopadding",
        overridePosition: function (t) {
          return {
            top: t.top,
            left: Object(E.a)(w) ? window.innerWidth - 180 : (window.innerWidth - 260) / 2
          };
        },
        clickable: !0
      }, i.a.createElement(ia, {
        colors: f,
        payout: c,
        amount: z,
        potentialProfit: X,
        formatCurrency: x
      })))) : i.a.createElement(Dt, {
        colors: f,
        isMobile: w
      }, i.a.createElement("span", {
        onMouseOver: function () {
          return !!c && U(!0);
        },
        onMouseLeave: function () {
          return U(!1);
        }
      }, Object(l.t)(ca()), i.a.createElement(Oe, null)), W && i.a.createElement(Le, {
        colors: f,
        payout: c,
        amount: z,
        potentialProfit: X,
        formatCurrency: x,
        onClose: function () {
          return U(!1);
        }
      })))) : null;
    }
    ));
  },
  306: function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
      return ot;
    }
    ));
    var r = n(89)
      , o = n(58)
      , a = n(2)
      , i = n.n(a)
      , c = n(33)
      , l = n(44)
      , u = n(10)
      , s = n(88)
      , d = n(387)
      , p = n.n(d);
    function f() {
      var t = Object(o.a)(["\n\tdisplay: flex;\n\tcolor: #8491a3;\n\tmargin-top: 30px;\n\tpadding-left: 20px;\n\tcursor: pointer;\n\n\timg {\n\t\twidth: 20px;\n\t\theight: 20px;\n\t\tmargin-right: 15px;\n\t}\n"]);
      return f = function () {
        return t;
      }
        ,
        t;
    }
    function m() {
      var t = Object(o.a)(["\n    z-index: 81;\n    position: absolute;\n    padding: 10px 0;\n    border-radius: 2px;\n    box-shadow: 0 2px 10px 0 rgba(20, 31, 44, 0.8);\n    background-color: ", ";\n    color: ", ";\n\tleft: 50%;\n\ttop: 45%;\n\ttransform: translate(-50%, -50%);\n    max-height: 450px;\n    overflow: auto;\n  \n  img {\n    width: 24px;\n    height: 24px;\n  }\n}\n"]);
      return m = function () {
        return t;
      }
        ,
        t;
    }
    function b() {
      var t = Object(o.a)(["\n\tdisplay: block;\n\theight: 20px;\n\tline-height: 20px;\n\tfont-size: 16px;\n\tmargin-top: 30px;\n\tpadding-left: 20px;\n\tbox-sizing: border-box;\n\tletter-spacing: -0.27px;\n\ttext-decoration: none;\n\tuser-select: none;\n\n\tcolor: #8491a3;\n\n\timg {\n\t\tmargin-right: 15px;\n\t\tvertical-align: sub;\n\t}\n"]);
      return b = function () {
        return t;
      }
        ,
        t;
    }
    function h() {
      var t = Object(o.a)(["\n\tflex: 1 1 auto;\n"]);
      return h = function () {
        return t;
      }
        ,
        t;
    }
    function g() {
      var t = Object(o.a)(["\n\tposition: absolute;\n\ttop: 24px;\n\tright: 20px;\n\tdisplay: block;\n\twidth: 12px;\n\theight: 12px;\n\tbackground: url(", ") no-repeat center;\n"]);
      return g = function () {
        return t;
      }
        ,
        t;
    }
    function v() {
      var t = Object(o.a)(["\n\tdisplay: block;\n\tposition: relative;\n\theight: 60px;\n\tline-height: 60px;\n\tflex: 0 0 60px;\n\n\ta {\n\t\tposition: absolute;\n\t\ttop: 10px;\n\t\tleft: 20px;\n\t}\n\tborder-bottom: solid 1px #263346;\n"]);
      return v = function () {
        return t;
      }
        ,
        t;
    }
    function x() {
      var t = Object(o.a)(["\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tbackground-color: #06141f;\n\tdisplay: flex;\n\tflex-direction: column;\n\tz-index: 24;\n"]);
      return x = function () {
        return t;
      }
        ,
        t;
    }
    var O = s.c.div(x())
      , y = s.c.div(v())
      , j = s.c.div(g(), p.a)
      , E = s.c.section(h())
      , w = s.c.a(b())
      , C = s.c.div(m(), (function (t) {
        return t.colors.modalBackground;
      }
      ), (function (t) {
        return t.colors.secondaryText;
      }
      ))
      , k = s.c.div(f())
      , T = n(8)
      , M = n(388)
      , S = n.n(M)
      , L = n(389)
      , I = n.n(L)
      , _ = n(390)
      , P = n.n(_)
      , A = n(391)
      , z = n.n(A)
      , N = n(392)
      , D = n.n(N)
      , R = n(393)
      , F = n.n(R)
      , B = n(394)
      , H = n.n(B)
      , V = n(395)
      , W = n.n(V)
      , U = n(39)
      , G = n(264)
      , Y = n(336);
    function q() {
      var t = Object(o.a)(["Guest demo"]);
      return q = function () {
        return t;
      }
        ,
        t;
    }
    function Z() {
      var t = Object(o.a)(["Log out"]);
      return Z = function () {
        return t;
      }
        ,
        t;
    }
    function X() {
      var t = Object(o.a)(["Transactions"]);
      return X = function () {
        return t;
      }
        ,
        t;
    }
    function Q() {
      var t = Object(o.a)(["Privacy Center"]);
      return Q = function () {
        return t;
      }
        ,
        t;
    }
    function J() {
      var t = Object(o.a)(["Add Account"]);
      return J = function () {
        return t;
      }
        ,
        t;
    }
    function K() {
      var t = Object(o.a)(["Transfer Funds"]);
      return K = function () {
        return t;
      }
        ,
        t;
    }
    function $() {
      var t = Object(o.a)(["Withdrawal"]);
      return $ = function () {
        return t;
      }
        ,
        t;
    }
    function tt() {
      var t = Object(o.a)(["Deposit"]);
      return tt = function () {
        return t;
      }
        ,
        t;
    }
    function et() {
      var t = Object(o.a)(["Settings"]);
      return et = function () {
        return t;
      }
        ,
        t;
    }
    function nt() {
      var t = Object(o.a)(["Dashboard"]);
      return nt = function () {
        return t;
      }
        ,
        t;
    }
    var rt = function (t) {
      switch (t) {
        case "account_balance":
          return i.a.createElement("img", {
            src: S.a
          });
        case "settings":
          return i.a.createElement("img", {
            src: I.a
          });
        case "account_balance_wallet":
          return i.a.createElement("img", {
            src: P.a
          });
        case "credit_card":
          return null;
        case "compare_arrows":
          return i.a.createElement("img", {
            src: z.a
          });
        case "add_circle_outline":
          return i.a.createElement("img", {
            src: D.a
          });
        case "security":
          return i.a.createElement("img", {
            src: F.a
          });
        case "logout":
          return i.a.createElement("img", {
            src: H.a
          });
        case "education":
          return i.a.createElement("img", {
            src: W.a
          });
        default:
          return null;
      }
    }
      , ot = {
        tm_Dashboard: Object(l.t)(nt()),
        tm_Account_Settings: Object(l.t)(et()),
        tm_Deposit: Object(l.t)(tt()),
        tm_Withdrawal: Object(l.t)($()),
        tm_Transfer_Funds: Object(l.t)(K()),
        tm_Add_Account: Object(l.t)(J()),
        tm_Privacy_Center: Object(l.t)(Q()),
        tm_Transactions: Object(l.t)(X())
      }
      , at = function (t, e) {
        return i.a.createElement(E, null, t.map((function (t) {
          return i.a.createElement(w, {
            key: t.label,
            onClick: function (e) {
              return function (t, e) {
                window.parent && window.parent.hasOwnProperty("cordova") && (t.preventDefault(),
                  window.xprops.onNavigate(e));
              }(e, t.url);
            },
            href: t.url
          }, rt(t.icon), ot[t.label] || t.label);
        }
        )), i.a.createElement(w, {
          key: "logout",
          onClick: e
        }, rt("logout"), Object(l.t)(Z())));
      }
      , it = function (t) {
        var e, n = Object(a.useState)(!1), o = Object(r.a)(n, 2), c = o[0], l = o[1], u = U.a.getLanguage() || t.lang, s = null === (e = t.langs[u]) || void 0 === e ? void 0 : e.name;
        return i.a.createElement(i.a.Fragment, null, i.a.createElement(k, {
          onClick: function () {
            return l(!0);
          }
        }, i.a.createElement("img", {
          src: "".concat("", "/static/icons/languages/").concat(u, ".svg"),
          alt: "select a ".concat(u)
        }), s), c && i.a.createElement(i.a.Fragment, null, i.a.createElement(G.a, {
          onClick: function () {
            return l(!1);
          }
        }), i.a.createElement(C, {
          colors: t.colors,
          className: "scrollable"
        }, i.a.createElement(Y.a, {
          langs: t.langs,
          onSelect: function () {
            return l(!1);
          }
        }))));
      };
    e.b = Object(c.c)((function (t) {
      return {
        data: t.registry.data,
        userInfo: t.account.userInfo,
        colors: t.theme
      };
    }
    ), {
      actionShowModal: u.e,
      actionGuestDemoRequest: T.v,
      actionLogout: T.w
    })((function (t) {
      var e = t.userInfo
        , n = t.data
        , r = n.customLogoUrlLink
        , o = n.partnerConfig
        , a = o.customMenu
        , c = (o.registrationLink,
          o.allowDemo)
        , u = e ? e.isDemo ? i.a.createElement(E, null) : at(a, (function () {
          return t.actionLogout(!0);
        }
        )) : function (t, e, n, r) {
          return i.a.createElement(E, null, n && i.a.createElement(w, {
            onClick: r
          }, Object(l.t)(q())));
        }(0, 0, c, (function () {
          return t.actionGuestDemoRequest();
        }
        ));
      return i.a.createElement(O, null, i.a.createElement(y, null, o.logoUrl && i.a.createElement("a", {
        href: r
      }, i.a.createElement("img", {
        height: "42",
        src: o.logoUrl
      })), i.a.createElement(j, {
        onClick: function () {
          return t.onClose();
        }
      })), i.a.createElement(it, {
        langs: t.data.langs,
        lang: t.data.lang,
        colors: t.colors
      }), u);
    }
    ));
  },
  310: function (t, e, n) {
    "use strict";
    var r = n(58)
      , o = n(2)
      , a = n.n(o)
      , i = n(33)
      , c = n(276)
      , l = n(44)
      , u = n(10)
      , s = n(52)
      , d = n(8)
      , p = n(353)
      , f = n.n(p)
      , m = n(354)
      , b = n.n(m);
    function h() {
      var t = Object(r.a)(["Add to Favorites"]);
      return h = function () {
        return t;
      }
        ,
        t;
    }
    function g() {
      var t = Object(r.a)(["Remove from Favorites"]);
      return g = function () {
        return t;
      }
        ,
        t;
    }
    e.a = Object(i.c)((function (t) {
      return {
        isLoggedIn: Object(s.a)(t)
      };
    }
    ), {
      actionAddInstrumentToFavorites: d.s,
      actionRemoveInstrumentFromFavorites: d.z,
      actionShowModal: u.e
    })((function (t) {
      var e = t.isFav
        , n = t.instrumentId
        , r = t.isLoggedIn
        , o = t.actionAddInstrumentToFavorites
        , i = t.actionRemoveInstrumentFromFavorites
        , s = t.actionShowModal
        , d = Math.floor(999901 * Math.random() + 1e3);
      return a.a.createElement("div", {
        style: {
          display: "inline-block"
        },
        "data-tip": "",
        "data-for": "fav-icon" + d
      }, a.a.createElement("img", {
        style: {
          width: "16px",
          cursor: "pointer"
        },
        src: e ? b.a : f.a,
        onClick: function (t) {
          t.stopPropagation(),
            r ? e ? i(n) : o(n) : s(u.b.SESSION_EXPIRED, {});
        },
        alt: ""
      }), a.a.createElement(c.a, {
        id: "fav-icon" + d,
        place: "top",
        className: "react-tooltip-small",
        offset: {
          top: 5
        }
      }, e ? Object(l.t)(g()) : Object(l.t)(h())));
    }
    ));
  },
  311: function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
      return o;
    }
    ));
    var r = n(45);
    function o(t, e) {
      var n = Object(r.toLower)(e)
        , o = t.filter((function (t) {
          return Object(r.toLower)(t.name).includes(n);
        }
        ));
      if (0 === o.length) {
        var a = Object(r.filter)(Object(r.split)(n, ""), (function (t) {
          return " " !== t;
        }
        ));
        o = t.filter((function (t) {
          var e = Object(r.split)(Object(r.toLower)(t.name), "");
          return 0 === Object(r.difference)(a, e).length;
        }
        ));
      }
      return o;
    }
  },
  316: function (t, e, n) {
    "use strict";
    var r = n(89)
      , o = n(2)
      , a = n.n(o)
      , i = n(33)
      , c = n(107)
      , l = n(277);
    e.a = Object(i.c)((function (t, e) {
      var n, r = e.instrumentId;
      return {
        payoutDeltas: t.registry.data.payoutDeltas,
        maxClientPayouts: t.registry.data.maxClientPayouts,
        gameType: null === (n = t.game) || void 0 === n ? void 0 : n.gameType,
        instrument: t.instruments[r]
      };
    }
    ))((function (t) {
      var e = t.gameType
        , n = t.instrument
        , i = t.payoutDeltas
        , u = t.maxClientPayouts
        , s = t.color
        , d = Object(o.useState)(null)
        , p = Object(r.a)(d, 2)
        , f = p[0]
        , m = p[1]
        , b = Object(c.a)(e, n, i, u);
      return Object(o.useEffect)((function () {
        m(b);
      }
      ), [b]),
        f ? a.a.createElement(l.d, {
          color: s
        }, f, "%") : a.a.createElement("span", null, "...");
    }
    ));
  },
  319: function (t, e, n) {
    "use strict";
    var r = n(2)
      , o = n.n(r)
      , a = n(33)
      , i = n(28)
      , c = n(301)
      , l = n(436)
      , u = Object(a.c)((function (t) {
        return {
          messages: t.messages
        };
      }
      ), {
        actionClearMessages: i.d
      })((function (t) {
        var e = Object(c.f)();
        return Object(r.useEffect)((function () {
          t.messages.forEach((function (t) {
            e({
              children: t
            });
          }
          )),
            setTimeout((function () {
              t.messages.length > 0 && t.actionClearMessages();
            }
            ), 3e3);
        }
        ), [t.messages]),
          null;
      }
      ));
    e.a = function () {
      return o.a.createElement(l.a, {
        id: "alerts-message-queue",
        timeout: 3e3
      }, o.a.createElement(u, null));
    };
  },
  320: function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
      return s;
    }
    ));
    var r = n(30)
      , o = n(53)
      , a = n(91)
      , i = n(90)
      , c = n(2)
      , l = n.n(c)
      , u = n(259)
      , s = function (t) {
        Object(a.a)(n, t);
        var e = Object(i.a)(n);
        function n(t) {
          var o;
          return Object(r.a)(this, n),
            (o = e.call(this, t)).onError = function () {
              return o.setState({
                error: !0
              });
            }
            ,
            o.state = {
              error: !1
            },
            o;
        }
        return Object(o.a)(n, [{
          key: "render",
          value: function () {
            var t = this.props.src;
            return this.state.error ? l.a.createElement("div", {
              className: "avatar_fallback"
            }) : l.a.createElement(l.a.Fragment, null, l.a.createElement("img", {
              width: Object(u.a)(this.props.isMobile) ? 30 : 40,
              height: Object(u.a)(this.props.isMobile) ? 30 : 40,
              src: t,
              alt: "avatar",
              style: {
                marginTop: Object(u.a)(this.props.isMobile) ? 5 : 10,
                borderRadius: "50%"
              },
              onError: this.onError
            }), Object(u.a)(this.props.isMobile) && l.a.createElement("span", {
              style: {
                marginLeft: 10,
                color: "white",
                fontSize: 16
              }
            }, "\u25be"));
          }
        }]),
          n;
      }(c.Component);
  },
  321: function (t, e, n) {
    t.exports = n.p + "static/media/avatar_fallback.5c4443ea.svg";
  },
  322: function (t, e, n) {
    "use strict";
    var r = n(58)
      , o = n(2)
      , a = n.n(o)
      , i = n(88);
    function c() {
      var t = Object(r.a)(["\n\tposition: absolute;\n\ttop: 0;\n\tleft: ", "px;\n\n\twidth: 10px;\n\theight: 10px;\n\tborder-radius: 50%;\n\tbox-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.5);\n\tbackground-color: ", ";\n"]);
      return c = function () {
        return t;
      }
        ,
        t;
    }
    function l() {
      var t = Object(r.a)(["\n\tposition: absolute;\n\ttop: 2px;\n\tleft: 5px;\n\n\tdisplay: block;\n\twidth: 12px;\n\theight: 6px;\n\tborder-radius: 2px;\n\tbackground: ", ";\n"]);
      return l = function () {
        return t;
      }
        ,
        t;
    }
    function u() {
      var t = Object(r.a)(["\n\tposition: relative;\n\tdisplay: inline-block;\n\twidth: 25px;\n\theight: 12px;\n\tcursor: pointer;\n\t", "\n"]);
      return u = function () {
        return t;
      }
        ,
        t;
    }
    var s = i.c.div(u(), (function (t) {
      return t.overrideStyles ? t.overrideStyles : "";
    }
    ))
      , d = i.c.div(l(), (function (t) {
        return t.backgroundColor;
      }
      ))
      , p = i.c.div(c(), (function (t) {
        return t.left;
      }
      ), (function (t) {
        return t.pinColor;
      }
      ));
    e.a = function (t) {
      return a.a.createElement(s, {
        overrideStyles: t.overrideStyles,
        onClick: function () {
          return t.onChange(!t.knobOnLeft);
        }
      }, a.a.createElement(d, {
        backgroundColor: t.backgroundColor
      }), a.a.createElement(p, {
        left: t.knobOnLeft ? 0 : 14,
        pinColor: t.pinColor
      }));
    };
  },
  323: function (t, e, n) {
    "use strict";
    n.d(e, "d", (function () {
      return p;
    }
    )),
      n.d(e, "e", (function () {
        return f;
      }
      )),
      n.d(e, "b", (function () {
        return b;
      }
      )),
      n.d(e, "c", (function () {
        return m;
      }
      )),
      n.d(e, "a", (function () {
        return h;
      }
      ));
    var r = n(58)
      , o = n(88);
    function a() {
      var t = Object(r.a)(["\n\tposition: absolute;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tright: 0;\n\twidth: 34px;\n\theight: 34px;\n\tbackground-color: ", ";\n\tmargin-right: 10px;\n\ttransform: translate3d(0, -50%, 0);\n\tborder: none;\n\tborder-radius: 50%;\n\tpadding: 0;\n\tz-index: 85;\n\n\t&:before {\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\twidth: 2px;\n\t\theight: 14px;\n\t\tbackground-color: ", ";\n\t\ttransform: rotate3d(0, 0, 1, 45deg);\n\t}\n\n\t&:after {\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\twidth: 2px;\n\t\theight: 14px;\n\t\tbackground-color: ", ";\n\t\ttransform: rotate3d(0, 0, 1, -45deg);\n\t}\n"]);
      return a = function () {
        return t;
      }
        ,
        t;
    }
    function i() {
      var t = Object(r.a)(["\n\tdisplay: flex;\n\tjustify-content: flex-end;\n\talign-items: center;\n\tflex-direction: column;\n\twidth: 80px;\n\theight: 15px;\n\tclip-path: polygon(15px 0, 65px 0, 100% 100%, 0 100%);\n\ttransform: translate3d(0, -40%, 0);\n\tbackground-color: ", ";\n\n\t&:before {\n\t\tcontent: '';\n\t\tbackground-color: ", ";\n\t\twidth: 44px;\n\t\theight: 1px;\n\t\tmargin-bottom: 2px;\n\t}\n\n\t&:after {\n\t\tcontent: '';\n\t\tbackground-color: ", ";\n\t\twidth: 44px;\n\t\theight: 1px;\n\t\tmargin-bottom: 2px;\n\t}\n"]);
      return i = function () {
        return t;
      }
        ,
        t;
    }
    function c() {
      var t = Object(r.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\theight: 20px;\n\ttransform: translate3d(0, -10px, 0);\n\tbox-sizing: border-box;\n"]);
      return c = function () {
        return t;
      }
        ,
        t;
    }
    function l() {
      var t = Object(r.a)(["\n\tposition: fixed;\n\tz-index: 52;\n\tbottom: 0;\n\tleft: 0;\n\tright: 0;\n\tanimation: ", " 0.3s linear;\n\t", "\n\theight: ", "px;\n\twidth: 100%;\n\tbox-sizing: border-box;\n\tbox-shadow: 0 -10px 20px 0 rgba(0, 0, 0, 0.1);\n\tbackground: ", ";\n"]);
      return l = function () {
        return t;
      }
        ,
        t;
    }
    function u() {
      var t = Object(r.a)(["\n\tposition: fixed;\n\tz-index: 20;\n\ttop: 0;\n\tbottom: 0;\n\tleft: 0;\n\tright: 0;\n"]);
      return u = function () {
        return t;
      }
        ,
        t;
    }
    function s() {
      var t = Object(r.a)(["\n  from {opacity: 0;}\n  to {opacity: 0.9;}\n"]);
      return s = function () {
        return t;
      }
        ,
        t;
    }
    var d = Object(o.d)(s())
      , p = o.c.div(u())
      , f = o.c.div(l(), d, (function (t) {
        return t.dragging ? "" : "transition: height .5s;";
      }
      ), (function (t) {
        return t.height;
      }
      ), (function (t) {
        return t.colors.sidebarElementActive;
      }
      ))
      , m = o.c.div(c())
      , b = o.c.div(i(), (function (t) {
        return t.colors.sidebarElementActive;
      }
      ), (function (t) {
        return t.colors.secondaryText;
      }
      ), (function (t) {
        return t.colors.secondaryText;
      }
      ))
      , h = o.c.button(a(), (function (t) {
        return t.colors.primary;
      }
      ), (function (t) {
        return t.colors.panelBackground;
      }
      ), (function (t) {
        return t.colors.panelBackground;
      }
      ));
  },
  327: function (t, e, n) {
    "use strict";
    var r = n(89)
      , o = n(58)
      , a = n(2)
      , i = n.n(a)
      , c = n(44)
      , l = n(45)
      , u = n(295)
      , s = n(274)
      , d = n(275)
      , p = n.n(d)
      , f = n(292)
      , m = n(78);
    function b() {
      var t = Object(o.a)(["Status"]);
      return b = function () {
        return t;
      }
        ,
        t;
    }
    function h() {
      var t = Object(o.a)(["Return"]);
      return h = function () {
        return t;
      }
        ,
        t;
    }
    function g() {
      var t = Object(o.a)(["Payout"]);
      return g = function () {
        return t;
      }
        ,
        t;
    }
    function v() {
      var t = Object(o.a)(["Investment"]);
      return v = function () {
        return t;
      }
        ,
        t;
    }
    function x() {
      var t = Object(o.a)(["Closed Price"]);
      return x = function () {
        return t;
      }
        ,
        t;
    }
    function O() {
      var t = Object(o.a)(["Strike Price"]);
      return O = function () {
        return t;
      }
        ,
        t;
    }
    function y() {
      var t = Object(o.a)(["Trade ID"]);
      return y = function () {
        return t;
      }
        ,
        t;
    }
    function j() {
      var t = Object(o.a)(["Expiry time"]);
      return j = function () {
        return t;
      }
        ,
        t;
    }
    function E() {
      var t = Object(o.a)(["Trade time"]);
      return E = function () {
        return t;
      }
        ,
        t;
    }
    function w() {
      var t = Object(o.a)(["Low"]);
      return w = function () {
        return t;
      }
        ,
        t;
    }
    function C() {
      var t = Object(o.a)(["Down"]);
      return C = function () {
        return t;
      }
        ,
        t;
    }
    function k() {
      var t = Object(o.a)(["High"]);
      return k = function () {
        return t;
      }
        ,
        t;
    }
    function T() {
      var t = Object(o.a)(["Up"]);
      return T = function () {
        return t;
      }
        ,
        t;
    }
    function M() {
      var t = Object(o.a)(["Sold back"]);
      return M = function () {
        return t;
      }
        ,
        t;
    }
    function S() {
      var t = Object(o.a)(["At the money"]);
      return S = function () {
        return t;
      }
        ,
        t;
    }
    function L() {
      var t = Object(o.a)(["Out of the money"]);
      return L = function () {
        return t;
      }
        ,
        t;
    }
    function I() {
      var t = Object(o.a)(["At the money"]);
      return I = function () {
        return t;
      }
        ,
        t;
    }
    function _() {
      var t = Object(o.a)(["In the money"]);
      return _ = function () {
        return t;
      }
        ,
        t;
    }
    var P = function (t) {
      try {
        return m.a.format(t, "dd-MMM-yyyy HH:mm");
      } catch (e) {
        return t;
      }
    };
    e.a = function (t) {
      var e = t.isOpen
        , n = t.colors
        , o = t.position
        , d = t.selected
        , m = t.formatStringCurrency
        , A = Object(a.useState)(!!e)
        , z = Object(r.a)(A, 2)
        , N = z[0]
        , D = z[1];
      Object(a.useEffect)((function () {
        D(e);
      }
      ), [e]);
      var R, F = o.instrumentName, B = o.direction, H = o.instrumentID, V = o.userCurrencyStake, W = o.status, U = !!o.optionValue, G = U ? Object(c.t)(T()) : Object(c.t)(k()), Y = U ? Object(c.t)(C()) : Object(c.t)(w()), q = 1 === B ? G : Y, Z = function (t) {
        switch (t) {
          case 1:
            return Object(c.t)(_());
          case 0:
            return Object(c.t)(I());
          case -1:
            return Object(c.t)(L());
          case 2:
            return Object(c.t)(S());
          case 3:
            return Object(c.t)(M());
          default:
            return "";
        }
      }(Number(W)), X = function (t, e) {
        switch (t) {
          case 2:
          case 0:
          case 3:
            return e.secondarySubText;
          case 1:
            return e.primary;
          case -1:
            return e.secondary;
        }
      }(Number(W), n), Q = Object(l.round)(o.userCurrencyReturn - (U ? o.stake : 0), 4), J = Object(f.c)(Q), K = Object(f.a)(Q, n);
      1 === B ? n.primary : n.secondary;
      return i.a.createElement(u.d, {
        colors: n,
        opened: N,
        selected: d,
        isInGroup: !1
      }, i.a.createElement(u.h, {
        colors: n,
        opened: N,
        onClick: function () {
          return D(!N);
        }
      }, i.a.createElement(s.a, {
        alt: "instrument ".concat(H),
        src: "".concat("", "/static/icons/instruments/").concat(H, ".svg"),
        placeholderSrc: p.a
      }), i.a.createElement(u.k, null, i.a.createElement(u.j, {
        colors: n
      }, i.a.createElement("span", {
        className: "trade__asset_name"
      }, F), i.a.createElement("span", {
        className: "trade__direction"
      }, i.a.createElement("b", {
        style: {
          color: B > 0 ? n.primary : n.secondary
        }
      }, q), " ", m(V)), i.a.createElement("span", {
        className: "trade__money",
        style: {
          color: U ? K : X
        }
      }, U ? J : Z)), i.a.createElement(u.i, {
        color: U ? K : X
      }, i.a.createElement(u.m, {
        color: U ? K : X
      }, i.a.createElement("span", null, m(Q))))), i.a.createElement(u.l, {
        colors: n,
        opened: N,
        onClick: function () {
          return D(!N);
        }
      })), N && i.a.createElement(u.c, {
        colors: n,
        onClick: function () {
          return D(!1);
        }
      }, i.a.createElement("div", {
        className: "line"
      }, i.a.createElement("div", null, Object(c.t)(E())), i.a.createElement("span", null, P(o.createdTimestamp))), i.a.createElement("div", {
        className: "line"
      }, i.a.createElement("div", null, Object(c.t)(j())), i.a.createElement("span", null, P(o.expiryTimestamp))), i.a.createElement("div", {
        className: "line"
      }, i.a.createElement("div", null, Object(c.t)(y())), i.a.createElement("span", null, o.tradeID)), i.a.createElement("div", {
        className: "line"
      }, i.a.createElement("div", null, Object(c.t)(O())), i.a.createElement("span", null, o.strike)), i.a.createElement("div", {
        className: "line"
      }, i.a.createElement("div", null, Object(c.t)(x())), i.a.createElement("span", null, o.closedPrice)), i.a.createElement("div", {
        className: "line"
      }, i.a.createElement("div", null, Object(c.t)(v())), i.a.createElement("span", null, m(o.userCurrencyStake))), !U && i.a.createElement("div", {
        className: "line"
      }, i.a.createElement("div", null, Object(c.t)(g())), i.a.createElement("span", null, "string" === typeof (R = o.payout) ? R : "".concat(R, "%"))), i.a.createElement("div", {
        className: "line"
      }, i.a.createElement("div", null, Object(c.t)(h())), i.a.createElement("span", null, m(Q))), !U && i.a.createElement("div", {
        className: "line"
      }, i.a.createElement("div", null, Object(c.t)(b())), i.a.createElement("span", {
        style: {
          color: X
        }
      }, Z))));
    };
  },
  328: function (t, e, n) {
    "use strict";
    var r = n(58)
      , o = n(2)
      , a = n.n(o)
      , i = n(33)
      , c = n(88)
      , l = n(63)
      , u = n(3)
      , s = n(1)
      , d = n.n(s)
      , p = n(12)
      , f = n(30)
      , m = n(95)
      , b = n(91)
      , h = n(90)
      , g = n(18)
      , v = n(89)
      , x = n(297)
      , O = n(61)
      , y = n.n(O)
      , j = n(285)
      , E = n.n(j)
      , w = n(81)
      , C = n(352)
      , k = n(15)
      , T = n(44)
      , M = n(276)
      , S = n(293);
    function L() {
      var t = Object(r.a)(["\n  position: absolute;\n  top: -40px;\n  transform: rotate(90deg);\n"]);
      return L = function () {
        return t;
      }
        ,
        t;
    }
    function I() {
      var t = Object(r.a)(["\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  color: ", ";\n  ", ";\n  margin: 0 10px -3px 10px;\n  line-height: 20px;\n  cursor: pointer;\n\n  &:nth-of-type(5),\n  &:nth-of-type(6),\n  &:nth-of-type(7),\n  &:nth-of-type(8) {\n    text-transform: uppercase;\n  }\n"]);
      return I = function () {
        return t;
      }
        ,
        t;
    }
    function _() {
      var t = Object(r.a)(["\n  display: flex;\n  justify-content: space-around;\n  height: 40px;\n  padding: 10px;\n"]);
      return _ = function () {
        return t;
      }
        ,
        t;
    }
    function P() {
      var t = Object(r.a)(["\n  flex: 1 0 178px;\n  height: 28px;\n  max-width: 92px;\n  line-height: 28px;\n  border-radius: 5px;\n  border: solid 1px ", ";\n  font-size: 12px;\n  font-weight: 500;\n  letter-spacing: -0.07px;\n  text-align: center;\n  text-transform: uppercase;\n  color: ", ";\n"]);
      return P = function () {
        return t;
      }
        ,
        t;
    }
    function A() {
      var t = Object(r.a)(["\n  line-height: normal;\n  margin-bottom: 14px;\n"]);
      return A = function () {
        return t;
      }
        ,
        t;
    }
    function z() {
      var t = Object(r.a)(["\n  max-width: 186px;\n"]);
      return z = function () {
        return t;
      }
        ,
        t;
    }
    function N() {
      var t = Object(r.a)(["\n  display: inline-block;\n"]);
      return N = function () {
        return t;
      }
        ,
        t;
    }
    function D() {
      var t = Object(r.a)([""]);
      return D = function () {
        return t;
      }
        ,
        t;
    }
    function R() {
      var t = Object(r.a)(["\n  font-size: 16px;\n  font-weight: bold;\n"]);
      return R = function () {
        return t;
      }
        ,
        t;
    }
    function F() {
      var t = Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 100%;\n  max-width: 50%;\n  max-height: 100%;\n  box-sizing: border-box;\n"]);
      return F = function () {
        return t;
      }
        ,
        t;
    }
    function B() {
      var t = Object(r.a)(["\n  display: flex;\n  width: 340px;\n  white-space: nowrap;\n"]);
      return B = function () {
        return t;
      }
        ,
        t;
    }
    function H() {
      var t = Object(r.a)(["\n  position: relative;\n  min-width: ", ";\n  width: ", ";\n  text-align: left;\n  border-radius: 15px;\n\n  &.disabled {\n    opacity: 0.3;\n    pointer-events: none;\n  }\n\n  svg {\n    display: inline-block;\n    vertical-align: sub;\n    margin-left: 4px;\n    margin-right: 4px;\n  }\n\n  .btn__caption {\n    display: inline-block;\n\n    font-size: 12px;\n    font-weight: bold;\n    line-height: normal;\n    letter-spacing: normal;\n    color: ", ";\n  }\n\n  .enabled__indicators {\n    position: absolute;\n    top: 0;\n    right: 0;\n    display: block;\n\n    width: 36px;\n    height: 30px;\n    line-height: 30px;\n    border-radius: 15px;\n    text-align: center;\n    font-size: 12px;\n    font-weight: bold;\n    letter-spacing: normal;\n    cursor: pointer;\n\n    color: #000000;\n    background: ", ";\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);\n  }\n"]);
      return H = function () {
        return t;
      }
        ,
        t;
    }
    function V() {
      var t = Object(r.a)(["\n  margin: 0 5px;\n  padding: 0 7px;\n"]);
      return V = function () {
        return t;
      }
        ,
        t;
    }
    function W() {
      var t = Object(r.a)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 30px;\n  height: 30px;\n  width: 30px;\n  line-height: 28px;\n  margin: ", ";\n  outline: none;\n  border: none;\n  border-radius: 15px;\n  font-size: ", "px;\n  font-weight: 500;\n  letter-spacing: 0.1px;\n  text-align: center;\n  text-transform: uppercase;\n  cursor: pointer;\n\n  color: ", ";\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);\n  background-color: ", ";\n\n  &.resolution-button {\n    width: auto !important;\n  }\n\n  .switch-chart-view-wrapper {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    padding: ", " 0 5px;\n    color: #fff;\n  }\n"]);
      return W = function () {
        return t;
      }
        ,
        t;
    }
    function U() {
      var t = Object(r.a)(["\n  display: inline-block;\n  height: 30px;\n  line-height: 30px;\n\n  padding-left: 15px;\n  margin-right: 19px;\n  font-size: 24px;\n  font-weight: 500;\n  letter-spacing: normal;\n\n  color: ", ";\n"]);
      return U = function () {
        return t;
      }
        ,
        t;
    }
    function G() {
      var t = Object(r.a)(["\n  display: flex;\n  align-items: center;\n  margin: 0 4px;\n"]);
      return G = function () {
        return t;
      }
        ,
        t;
    }
    function Y() {
      var t = Object(r.a)(["\n  display: inline-flex;\n  align-items: center;\n"]);
      return Y = function () {
        return t;
      }
        ,
        t;
    }
    function q() {
      var t = Object(r.a)(["\n  padding: 6px 0 0 3px;\n  img {\n    padding: unset !important;\n  }\n"]);
      return q = function () {
        return t;
      }
        ,
        t;
    }
    function Z() {
      var t = Object(r.a)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  text-align: left;\n  line-height: 30px;\n"]);
      return Z = function () {
        return t;
      }
        ,
        t;
    }
    function X() {
      var t = Object(r.a)(["\n  flex: 1 1 auto;k\n  display: flex;\n  align-items: center;\n  height: 40px;\n  &:after {\n    content: ' ';\n    clear: both;\n  }\n"]);
      return X = function () {
        return t;
      }
        ,
        t;
    }
    function Q() {
      var t = Object(r.a)(["\n  flex: 1 1 auto;\n  display: flex;\n  align-items: center;\n\n  &:after {\n    content: ' ';\n    clear: both;\n  }\n"]);
      return Q = function () {
        return t;
      }
        ,
        t;
    }
    function J() {
      var t = Object(r.a)(["\n  position: absolute;\n  max-width: 280px;\n\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n\n  top: 40px;\n  left: 235px;\n  right: 0;\n  height: 16px;\n\n  font-size: 14px;\n  letter-spacing: -0.08px;\n  color: #ffffff;\n  font-weight: 500;\n"]);
      return J = function () {
        return t;
      }
        ,
        t;
    }
    function K() {
      var t = Object(r.a)(["\n  position: absolute;\n  z-index: 30;\n  display: flex;\n  flex-direction: row;\n\n  top: 7px;\n  left: 11px;\n  right: 0;\n"]);
      return K = function () {
        return t;
      }
        ,
        t;
    }
    var $ = c.c.div(K())
      , tt = c.c.div(J())
      , et = c.c.div(Q())
      , nt = (c.c.div(X()),
        c.c.div(Z()))
      , rt = c.c.div(q())
      , ot = c.c.div(Y())
      , at = c.c.div(G())
      , it = (c.c.span(U(), (function (t) {
        return t.colors.primary;
      }
      )),
        c.c.button(W(), (function (t) {
          return t.isMobile && t.isTradingView ? "0 16px " : t.isTradingView ? t.index && t.index > 0 ? "0px 8px 0px 8px" : "0px 8px 0px 30px" : "0 5px";
        }
        ), (function (t) {
          return t.smallText ? "9" : "12";
        }
        ), (function (t) {
          return t.colors.primaryText;
        }
        ), (function (t) {
          return t.colors.panelBorder;
        }
        ), (function (t) {
          return t.colors.panelBorder;
        }
        )))
      , ct = Object(c.c)(it)(V())
      , lt = Object(c.c)(it)(H(), (function (t) {
        return t.isMobile ? "unset" : "124px";
      }
      ), (function (t) {
        return t.indicators && !t.isMobile ? "150px" : "auto";
      }
      ), (function (t) {
        return t.colors.primaryText;
      }
      ), (function (t) {
        return t.isMobile ? "0px 0px" : "0px 5px";
      }
      ))
      , ut = c.c.div(B())
      , st = c.c.div(F())
      , dt = c.c.div(R())
      , pt = c.c.div(D())
      , ft = c.c.div(N())
      , mt = c.c.div(z())
      , bt = c.c.div(A())
      , ht = c.c.div(P(), (function (t) {
        return t.colors.primary;
      }
      ), (function (t) {
        return t.colors.primary;
      }
      ))
      , gt = c.c.div(_())
      , vt = c.c.span(I(), (function (t) {
        return t.active ? t.colors.primaryText : t.colors.textfieldText;
      }
      ), (function (t) {
        return t.active ? "border-bottom: 2px solid ".concat(t.colors.primary) : "";
      }
      ))
      , xt = c.c.div(L())
      , Ot = n(264);
    function yt() {
      return (yt = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
        return t;
      }
      ).apply(this, arguments);
    }
    function jt(t, e) {
      if (null == t)
        return {};
      var n, r, o = function (t, e) {
        if (null == t)
          return {};
        var n, r, o = {}, a = Object.keys(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || (o[n] = t[n]);
        return o;
      }(t, e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]);
      }
      return o;
    }
    var Et = a.a.createElement("g", {
      fillRule: "evenodd",
      stroke: "currentColor",
      strokeWidth: 1.5,
      transform: "translate(.493)"
    }, a.a.createElement("rect", {
      width: 3.5,
      height: 3.5,
      x: 11.75,
      y: .75,
      rx: 1
    }), a.a.createElement("rect", {
      width: 3.5,
      height: 3.5,
      x: .75,
      y: 11.75,
      rx: 1
    }), a.a.createElement("path", {
      d: "M4 12L12 4"
    }))
      , wt = function (t) {
        var e = t.svgRef
          , n = t.title
          , r = jt(t, ["svgRef", "title"]);
        return a.a.createElement("svg", yt({
          width: 17,
          height: 16,
          viewBox: "0 0 17 16",
          ref: e
        }, r), n ? a.a.createElement("title", null, n) : null, Et);
      }
      , Ct = a.a.forwardRef((function (t, e) {
        return a.a.createElement(wt, yt({
          svgRef: e
        }, t));
      }
      ));
    n.p;
    function kt() {
      var t = Object(r.a)(["\n\t#toolbar-edit-icon {\n\t\tbackground-color: ", ";\n\t}\n\n\t#toolbar-destroy-icon {\n\t\tbackground-color: ", ";\n\t}\n"]);
      return kt = function () {
        return t;
      }
        ,
        t;
    }
    function Tt() {
      var t = Object(r.a)(["\n\tdisplay: flex;\n\tbox-sizing: border-box;\n\twidth: 100%;\n\theight: 35px;\n\tline-height: 35px;\n\tfont-size: 14px;\n\tletter-spacing: normal;\n\tcursor: pointer;\n\n\timg {\n\t\tmargin-left: 10px;\n\t\tmargin-right: 10px;\n\t\twidth: auto;\n\t\theight: 24px;\n\t\tmargin-top: 5px;\n\t}\n\tdiv {\n\t\tflex: 0 0 44px;\n\t\ttext-align: center;\n\t}\n\tspan {\n\t\tflex: 1 1 auto;\n\t}\n\n\tcolor: ", ";\n\tbackground-color: ", ";\n\n\t&:hover {\n\t\tbackground-color: ", " !important;\n\t}\n"]);
      return Tt = function () {
        return t;
      }
        ,
        t;
    }
    function Mt() {
      var t = Object(r.a)(["\n\tdisplay: block;\n\tmargin-top: 8px;\n\theight: 288px;\n\toverflow-y: scroll;\n\n\tborder-bottom: 1px solid #424e60;\n"]);
      return Mt = function () {
        return t;
      }
        ,
        t;
    }
    function St() {
      var t = Object(r.a)(["\n\tdisplay: flex;\n\twidth: 100%;\n\theight: 34px;\n\tline-height: 34px;\n\tborder-bottom: 1px solid #424e60;\n\n\tdiv {\n\t\tflex: 1 1 auto;\n\t\ttext-align: center;\n\t}\n"]);
      return St = function () {
        return t;
      }
        ,
        t;
    }
    function Lt() {
      var t = Object(r.a)(["\n\tposition: fixed;\n\tz-index: 42;\n\tdisplay: block;\n\tbox-sizing: border-box;\n\twidth: 171px;\n\tmin-height: 300px;\n\tpadding: 6px 0 8px;\n\tborder-radius: 2px;\n\tbox-shadow: 0 2px 10px 0 rgba(20, 31, 44, 0.8);\n\n\t", ";\n\t", ";\n\tbackground-color: ", ";\n"]);
      return Lt = function () {
        return t;
      }
        ,
        t;
    }
    var It = c.c.div(Lt(), (function (t) {
      return t.isMobile ? "" : "top: 152px";
    }
    ), (function (t) {
      return t.isMobile ? "bottom: 120px" : "";
    }
    ), (function (t) {
      return t.colors.listBackgroundActive;
    }
    ))
      , _t = c.c.div(St())
      , Pt = c.c.div(Mt())
      , At = c.c.div(Tt(), (function (t) {
        return t.colors.textfieldText;
      }
      ), (function (t) {
        return t.active ? t.colors.listBackgroundNormal : "transparent";
      }
      ), (function (t) {
        return t.colors.listBackgroundNormal;
      }
      ))
      , zt = c.c.div(kt(), (function (t) {
        return t.colors.sidebarElementActive;
      }
      ), (function (t) {
        return t.colors.sidebarElementActive;
      }
      ));
    function Nt() {
      return (Nt = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
        return t;
      }
      ).apply(this, arguments);
    }
    function Dt(t, e) {
      if (null == t)
        return {};
      var n, r, o = function (t, e) {
        if (null == t)
          return {};
        var n, r, o = {}, a = Object.keys(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || (o[n] = t[n]);
        return o;
      }(t, e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]);
      }
      return o;
    }
    var Rt = a.a.createElement("g", {
      transform: "translate(0.000000,24.000000) scale(0.100000,-0.100000)",
      stroke: "none"
    }, a.a.createElement("path", {
      fill: "current",
      d: "M20 127 l0 -47 47 0 c44 0 45 1 30 18 -21 23 -13 32 30 32 23 0 41 -8 57 -25 26 -28 36 -31 36 -11 0 23 -59 66 -90 66 -16 0 -41 -5 -56 -12 -23 -11 -28 -10 -40 7 -13 17 -14 14 -14 -28z"
    }))
      , Ft = function (t) {
        var e = t.svgRef
          , n = t.title
          , r = Dt(t, ["svgRef", "title"]);
        return a.a.createElement("svg", Nt({
          width: "24.000000pt",
          height: "24.000000pt",
          viewBox: "0 0 24.000000 24.000000",
          preserveAspectRatio: "xMidYMid meet",
          ref: e
        }, r), n ? a.a.createElement("title", null, n) : null, Rt);
      }
      , Bt = a.a.forwardRef((function (t, e) {
        return a.a.createElement(Ft, Nt({
          svgRef: e
        }, t));
      }
      ));
    n.p;
    function Ht() {
      return (Ht = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
        return t;
      }
      ).apply(this, arguments);
    }
    function Vt(t, e) {
      if (null == t)
        return {};
      var n, r, o = function (t, e) {
        if (null == t)
          return {};
        var n, r, o = {}, a = Object.keys(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || (o[n] = t[n]);
        return o;
      }(t, e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]);
      }
      return o;
    }
    var Wt = a.a.createElement("g", {
      transform: "translate(0.000000,24.000000) scale(0.100000,-0.100000)",
      stroke: "none"
    }, a.a.createElement("path", {
      fill: "current",
      d: "M198 154 c-12 -12 -20 -14 -36 -5 -35 19 -78 13 -111 -15 -17 -14 -31 -33 -31 -41 0 -10 11 -6 35 16 36 31 68 38 95 21 12 -7 12 -12 -4 -29 -19 -21 -19 -21 27 -21 l47 0 0 45 c0 25 -1 45 -3 45 -1 0 -10 -7 -19 -16z"
    }))
      , Ut = function (t) {
        var e = t.svgRef
          , n = t.title
          , r = Vt(t, ["svgRef", "title"]);
        return a.a.createElement("svg", Ht({
          width: "24.000000pt",
          height: "24.000000pt",
          viewBox: "0 0 24.000000 24.000000",
          preserveAspectRatio: "xMidYMid meet",
          ref: e
        }, r), n ? a.a.createElement("title", null, n) : null, Wt);
      }
      , Gt = a.a.forwardRef((function (t, e) {
        return a.a.createElement(Ut, Ht({
          svgRef: e
        }, t));
      }
      ));
    n.p;
    function Yt() {
      return (Yt = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
        return t;
      }
      ).apply(this, arguments);
    }
    function qt(t, e) {
      if (null == t)
        return {};
      var n, r, o = function (t, e) {
        if (null == t)
          return {};
        var n, r, o = {}, a = Object.keys(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || (o[n] = t[n]);
        return o;
      }(t, e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]);
      }
      return o;
    }
    var Zt = a.a.createElement("path", {
      d: "M117.341.71a1.534,1.534,0,0,0-2.17,0L109.09,6.792a.341.341,0,0,0-.087.15l-.8,2.887a.341.341,0,0,0,.42.42l2.887-.8a.341.341,0,0,0,.15-.087l6.082-6.082a1.536,1.536,0,0,0,0-2.17Zm-7.509,6.3,4.978-4.978,1.605,1.605-4.978,4.978Zm-.321.643,1.283,1.283-1.774.492ZM117.259,2.8l-.362.362-1.605-1.605.362-.362a.852.852,0,0,1,1.205,0l.4.4A.853.853,0,0,1,117.259,2.8Zm0,0",
      transform: "translate(-108.188 -0.261)"
    })
      , Xt = function (t) {
        var e = t.svgRef
          , n = t.title
          , r = qt(t, ["svgRef", "title"]);
        return a.a.createElement("svg", Yt({
          width: "20px",
          height: "40px",
          viewBox: "0 0 10 10.001",
          fill: "#ffffff",
          ref: e
        }, r), n ? a.a.createElement("title", null, n) : null, Zt);
      }
      , Qt = a.a.forwardRef((function (t, e) {
        return a.a.createElement(Xt, Yt({
          svgRef: e
        }, t));
      }
      ));
    n.p;
    function Jt() {
      return (Jt = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
        return t;
      }
      ).apply(this, arguments);
    }
    function Kt(t, e) {
      if (null == t)
        return {};
      var n, r, o = function (t, e) {
        if (null == t)
          return {};
        var n, r, o = {}, a = Object.keys(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || (o[n] = t[n]);
        return o;
      }(t, e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]);
      }
      return o;
    }
    var $t = a.a.createElement("g", null, a.a.createElement("rect", {
      x: 12.75,
      y: 14,
      width: 1.5,
      height: 10
    }), a.a.createElement("rect", {
      x: 17.75,
      y: 14,
      width: 1.5,
      height: 10
    }), a.a.createElement("path", {
      d: "M25.25,10.5c0-1.517-1.233-2.75-2.75-2.75h-3.25V7c0-1.24-1.01-2.25-2.25-2.25h-2 c-1.24,0-2.25,1.01-2.25,2.25v0.75H9.5c-1.517,0-2.75,1.233-2.75,2.75v1.751h2V27.25h14.5V12.251h2V10.5z M14.25,7 c0-0.413,0.337-0.75,0.75-0.75h2c0.413,0,0.75,0.337,0.75,0.75v0.75h-3.5V7z M21.75,25.75h-11.5V12.251h11.5V25.75z M23.75,10.751 H8.25V10.5c0-0.689,0.561-1.25,1.25-1.25h13c0.689,0,1.25,0.561,1.25,1.25V10.751z"
    }))
      , te = function (t) {
        var e = t.svgRef
          , n = t.title
          , r = Kt(t, ["svgRef", "title"]);
        return a.a.createElement("svg", Jt({
          id: "Layer_1",
          x: "0px",
          y: "0px",
          width: "40px",
          height: "40px",
          viewBox: "0 0 40 40",
          enableBackground: "new 0 0 40 40",
          xmlSpace: "preserve",
          fill: "#ffffff",
          ref: e
        }, r), n ? a.a.createElement("title", null, n) : null, $t);
      }
      , ee = a.a.forwardRef((function (t, e) {
        return a.a.createElement(te, Jt({
          svgRef: e
        }, t));
      }
      ))
      , ne = (n.p,
        n(280));
    function re() {
      var t = Object(r.a)(["Clear All"]);
      return re = function () {
        return t;
      }
        ,
        t;
    }
    function oe() {
      var t = Object(r.a)(["Vertical arrow"]);
      return oe = function () {
        return t;
      }
        ,
        t;
    }
    function ae() {
      var t = Object(r.a)(["Vertical label"]);
      return ae = function () {
        return t;
      }
        ,
        t;
    }
    function ie() {
      var t = Object(r.a)(["Vertical counter"]);
      return ie = function () {
        return t;
      }
        ,
        t;
    }
    function ce() {
      var t = Object(r.a)(["Parallel channel"]);
      return ce = function () {
        return t;
      }
        ,
        t;
    }
    function le() {
      var t = Object(r.a)(["Pitchfork"]);
      return le = function () {
        return t;
      }
        ,
        t;
    }
    function ue() {
      var t = Object(r.a)(["Measure X"]);
      return ue = function () {
        return t;
      }
        ,
        t;
    }
    function se() {
      var t = Object(r.a)(["Measure Y"]);
      return se = function () {
        return t;
      }
        ,
        t;
    }
    function de() {
      var t = Object(r.a)(["Measure XY"]);
      return de = function () {
        return t;
      }
        ,
        t;
    }
    function pe() {
      var t = Object(r.a)(["Crooked 5"]);
      return pe = function () {
        return t;
      }
        ,
        t;
    }
    function fe() {
      var t = Object(r.a)(["Crooked 3"]);
      return fe = function () {
        return t;
      }
        ,
        t;
    }
    function me() {
      var t = Object(r.a)(["Elliot 5"]);
      return me = function () {
        return t;
      }
        ,
        t;
    }
    function be() {
      var t = Object(r.a)(["Elliot 3"]);
      return be = function () {
        return t;
      }
        ,
        t;
    }
    function he() {
      var t = Object(r.a)(["Vertical line"]);
      return he = function () {
        return t;
      }
        ,
        t;
    }
    function ge() {
      var t = Object(r.a)(["Horizontal line"]);
      return ge = function () {
        return t;
      }
        ,
        t;
    }
    function ve() {
      var t = Object(r.a)(["Arrow ray"]);
      return ve = function () {
        return t;
      }
        ,
        t;
    }
    function xe() {
      var t = Object(r.a)(["Ray"]);
      return xe = function () {
        return t;
      }
        ,
        t;
    }
    function Oe() {
      var t = Object(r.a)(["Arrow segment"]);
      return Oe = function () {
        return t;
      }
        ,
        t;
    }
    function ye() {
      var t = Object(r.a)(["Segment"]);
      return ye = function () {
        return t;
      }
        ,
        t;
    }
    function je() {
      var t = Object(r.a)(["Rectangle"]);
      return je = function () {
        return t;
      }
        ,
        t;
    }
    function Ee() {
      var t = Object(r.a)(["Circle"]);
      return Ee = function () {
        return t;
      }
        ,
        t;
    }
    function we() {
      var t = Object(r.a)(["Label"]);
      return we = function () {
        return t;
      }
        ,
        t;
    }
    function Ce() {
      var t = Object(r.a)(["Vertical arrow"]);
      return Ce = function () {
        return t;
      }
        ,
        t;
    }
    function ke() {
      var t = Object(r.a)(["Vertical label"]);
      return ke = function () {
        return t;
      }
        ,
        t;
    }
    function Te() {
      var t = Object(r.a)(["Vertical counter"]);
      return Te = function () {
        return t;
      }
        ,
        t;
    }
    function Me() {
      var t = Object(r.a)(["Parallel channel"]);
      return Me = function () {
        return t;
      }
        ,
        t;
    }
    function Se() {
      var t = Object(r.a)(["Pitchfork"]);
      return Se = function () {
        return t;
      }
        ,
        t;
    }
    function Le() {
      var t = Object(r.a)(["Measure X"]);
      return Le = function () {
        return t;
      }
        ,
        t;
    }
    function Ie() {
      var t = Object(r.a)(["Measure Y"]);
      return Ie = function () {
        return t;
      }
        ,
        t;
    }
    function _e() {
      var t = Object(r.a)(["Measure XY"]);
      return _e = function () {
        return t;
      }
        ,
        t;
    }
    function Pe() {
      var t = Object(r.a)(["Crooked 5"]);
      return Pe = function () {
        return t;
      }
        ,
        t;
    }
    function Ae() {
      var t = Object(r.a)(["Crooked 3"]);
      return Ae = function () {
        return t;
      }
        ,
        t;
    }
    function ze() {
      var t = Object(r.a)(["Elliot 5"]);
      return ze = function () {
        return t;
      }
        ,
        t;
    }
    function Ne() {
      var t = Object(r.a)(["Elliot 3"]);
      return Ne = function () {
        return t;
      }
        ,
        t;
    }
    function De() {
      var t = Object(r.a)(["Vertical line"]);
      return De = function () {
        return t;
      }
        ,
        t;
    }
    function Re() {
      var t = Object(r.a)(["Horizontal line"]);
      return Re = function () {
        return t;
      }
        ,
        t;
    }
    function Fe() {
      var t = Object(r.a)(["Arrow ray"]);
      return Fe = function () {
        return t;
      }
        ,
        t;
    }
    function Be() {
      var t = Object(r.a)(["Ray"]);
      return Be = function () {
        return t;
      }
        ,
        t;
    }
    function He() {
      var t = Object(r.a)(["Arrow segment"]);
      return He = function () {
        return t;
      }
        ,
        t;
    }
    function Ve() {
      var t = Object(r.a)(["Segment"]);
      return Ve = function () {
        return t;
      }
        ,
        t;
    }
    function We() {
      var t = Object(r.a)(["Rectangle"]);
      return We = function () {
        return t;
      }
        ,
        t;
    }
    function Ue() {
      var t = Object(r.a)(["Circle"]);
      return Ue = function () {
        return t;
      }
        ,
        t;
    }
    function Ge() {
      var t = Object(r.a)(["Label"]);
      return Ge = function () {
        return t;
      }
        ,
        t;
    }
    var Ye = [{
      title: Object(T.t)(Ge()),
      titleEnglish: "Label",
      class: "highcharts-label-annotation",
      icon: "chart-label"
    }, {
      title: Object(T.t)(Ue()),
      titleEnglish: "Circle",
      class: "highcharts-circle-annotation",
      icon: "chart-circle"
    }, {
      title: Object(T.t)(We()),
      titleEnglish: "Rectangle",
      class: "highcharts-rectangle-annotation",
      icon: "chart-rectangle"
    }, {
      title: Object(T.t)(Ve()),
      titleEnglish: "Segment",
      class: "highcharts-segment",
      icon: "chart-segment"
    }, {
      title: Object(T.t)(He()),
      titleEnglish: "Arrow segment",
      class: "highcharts-arrow-segment",
      icon: "chart-arrow-segment"
    }, {
      title: Object(T.t)(Be()),
      titleEnglish: "Ray",
      class: "highcharts-ray",
      icon: "chart-ray"
    }, {
      title: Object(T.t)(Fe()),
      titleEnglish: "Arrow ray",
      class: "highcharts-arrow-ray",
      icon: "chart-arrow-ray"
    }, {
      title: Object(T.t)(Re()),
      titleEnglish: "Horizontal line",
      class: "highcharts-horizontal-line",
      icon: "chart-horizontal-line"
    }, {
      title: Object(T.t)(De()),
      titleEnglish: "Vertical line",
      class: "highcharts-vertical-line",
      icon: "chart-vertical-line"
    }, {
      title: Object(T.t)(Ne()),
      titleEnglish: "Elliot 3",
      class: "highcharts-elliott3",
      icon: "chart-elliott-3"
    }, {
      title: Object(T.t)(ze()),
      titleEnglish: "Elliot 5",
      class: "highcharts-elliott5",
      icon: "chart-elliott-5"
    }, {
      title: Object(T.t)(Ae()),
      titleEnglish: "Crooked 3",
      class: "highcharts-crooked3",
      icon: "chart-crooked-3"
    }, {
      title: Object(T.t)(Pe()),
      titleEnglish: "Crooked 5",
      class: "highcharts-crooked5",
      icon: "chart-crooked-5"
    }, {
      title: Object(T.t)(_e()),
      titleEnglish: "Measure XY",
      class: "highcharts-measure-xy",
      icon: "chart-measure-xy"
    }, {
      title: Object(T.t)(Ie()),
      titleEnglish: "Measure Y",
      class: "highcharts-measure-y",
      icon: "chart-measure-y"
    }, {
      title: Object(T.t)(Le()),
      titleEnglish: "Measure X",
      class: "highcharts-measure-x",
      icon: "chart-measure-x"
    }, {
      title: Object(T.t)(Se()),
      titleEnglish: "Pitchfork",
      class: "highcharts-pitchfork",
      icon: "chart-pitchfork"
    }, {
      title: Object(T.t)(Me()),
      titleEnglish: "Parallel channel",
      class: "highcharts-parallel-channel",
      icon: "chart-parallel-channel"
    }, {
      title: Object(T.t)(Te()),
      titleEnglish: "Vertical counter",
      class: "highcharts-vertical-counter",
      icon: "chart-vertical-counter"
    }, {
      title: Object(T.t)(ke()),
      titleEnglish: "Vertical label",
      class: "highcharts-vertical-label",
      icon: "chart-vertical-counter"
    }, {
      title: Object(T.t)(Ce()),
      titleEnglish: "Vertical arrow",
      class: "highcharts-vertical-arrow",
      icon: "chart-vertical-counter"
    }]
      , qe = Object(i.c)((function (t) {
        return {
          lang: t.registry.data.lang
        };
      }
      ))((function (t) {
        var e = Object(o.useState)(!1)
          , n = Object(v.a)(e, 2)
          , r = n[0]
          , i = n[1]
          , c = Object(o.useState)(0)
          , l = Object(v.a)(c, 2)
          , s = l[0]
          , d = l[1]
          , p = Object(o.useState)(Ye)
          , f = Object(v.a)(p, 2)
          , m = f[0]
          , b = f[1]
          , h = function (t) {
            switch (t) {
              case "Label":
                return Object(T.t)(we());
              case "Circle":
                return Object(T.t)(Ee());
              case "Rectangle":
                return Object(T.t)(je());
              case "Segment":
                return Object(T.t)(ye());
              case "Arrow segment":
                return Object(T.t)(Oe());
              case "Ray":
                return Object(T.t)(xe());
              case "Arrow ray":
                return Object(T.t)(ve());
              case "Horizontal line":
                return Object(T.t)(ge());
              case "Vertical line":
                return Object(T.t)(he());
              case "Elliot 3":
                return Object(T.t)(be());
              case "Elliot 5":
                return Object(T.t)(me());
              case "Crooked 3":
                return Object(T.t)(fe());
              case "Crooked 5":
                return Object(T.t)(pe());
              case "Measure XY":
                return Object(T.t)(de());
              case "Measure Y":
                return Object(T.t)(se());
              case "Measure X":
                return Object(T.t)(ue());
              case "Pitchfork":
                return Object(T.t)(le());
              case "Parallel channel":
                return Object(T.t)(ce());
              case "Vertical counter":
                return Object(T.t)(ie());
              case "Vertical label":
                return Object(T.t)(ae());
              case "Vertical arrow":
                return Object(T.t)(oe());
              default:
                return t;
            }
          };
        Object(o.useEffect)((function () {
          b(m.map((function (t) {
            return Object(u.a)(Object(u.a)({}, t), {}, {
              title: h(t.titleEnglish)
            });
          }
          )));
        }
        ), [t.lang]);
        return a.a.createElement(a.a.Fragment, null, a.a.createElement(it, {
          isMobile: t.isMobile,
          colors: t.colors
        }, a.a.createElement("div", {
          style: {
            display: "flex"
          }
        }, a.a.createElement(Ct, {
          onClick: function (e) {
            d(e.target.getBoundingClientRect().left),
              i(!0),
              t.calculateAnnotations();
          }
        }))), a.a.createElement(It, {
          className: "tools-container scrollable",
          style: {
            left: s,
            display: r ? "" : "none"
          },
          colors: t.colors,
          isMobile: t.isMobile
        }, a.a.createElement(_t, null, a.a.createElement("div", {
          onClick: function () {
            return t.toggleAnnotation(!1);
          }
        }, a.a.createElement(Bt, {
          fill: "#9dabbf"
        })), a.a.createElement("div", {
          onClick: function () {
            return t.toggleAnnotation(!0);
          }
        }, a.a.createElement(Gt, {
          fill: "#9dabbf"
        }))), a.a.createElement(Pt, {
          className: "scrollable"
        }, m.map((function (e) {
          return a.a.createElement(At, {
            colors: t.colors,
            key: e.class,
            className: e.class,
            onClick: function () {
              return i(!1);
            }
          }, a.a.createElement(ne.a, {
            fill: "#FFFFFF",
            src: "".concat("", "/static/icons/chart/").concat(e.icon, ".svg")
          }), a.a.createElement("span", null, e.title));
        }
        ))), a.a.createElement(At, {
          colors: t.colors,
          onClick: function () {
            return t.removeAllAnnotations();
          }
        }, a.a.createElement("div", null), Object(T.t)(re()))), r && a.a.createElement(Ot.a, {
          onClick: function () {
            return i(!1);
          }
        }), a.a.createElement(zt, {
          className: "highcharts-popup custom-annotation-toolbar",
          colors: t.colors
        }, a.a.createElement(Qt, {
          id: "toolbar-edit-icon"
        }), a.a.createElement(ee, {
          id: "toolbar-destroy-icon"
        })), a.a.createElement("style", null, "\n\t\t\t\t\t.highcharts-popup button.highcharts-annotation-edit-button {\n\t\t\t\t\t\tbackground-color: ".concat(t.colors.panelBorder, ";\n\t\t\t\t\t}\n\n\t\t\t\t\t.highcharts-popup button.highcharts-annotation-remove-button  {\n\t\t\t\t\t\tbackground-color: ").concat(t.colors.panelBorder, ";\n\t\t\t\t\t}\n\n\t\t\t\t\t.highcharts-popup {\n\t\t\t\t\t\tbackground-color: ").concat(t.colors.panelBorder, ";\n\t\t\t\t\t\tcolor: ").concat(t.colors.primaryText, ";\n\t\t\t\t\t}\n\n\t\t\t\t\t.highcharts-popup input {\n\t\t\t\t\t\tbackground-color: ").concat(t.colors.background, ";\n\t\t\t\t\t\tcolor: ").concat(t.colors.primaryText, ";\n\t\t\t\t\t}\n\n\t\t\t\t\t.highcharts-popup-bottom-row button {\n\t\t\t\t\t\tbackground-color: ").concat(t.colors.primary, ";\n\t\t\t\t\t\tcolor: ").concat(t.colors.primaryTextContrast, ";\n\t\t\t\t\t}\n\n\t\t\t\t\t.highcharts-popup button.highcharts-annotation-remove-button,\n\t\t\t\t\t.highcharts-popup button.highcharts-annotation-edit-button {\n\t\t\t\t\t\tcolor: ").concat(t.colors.primaryText, ";\n\t\t\t\t\t}\n\n\t\t\t\t\t.highcharts-popup button.highcharts-annotation-remove-button:hover,\n\t\t\t\t\t.highcharts-popup button.highcharts-annotation-edit-button:hover {\n\t\t\t\t\t\tbackground-color: ").concat(t.colors.background, " !important;\n\t\t\t\t\t}\n\t\t\t\t")));
      }
      ));
    function Ze() {
      var t = Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 20px 30px;\n  width: ", "px;\n"]);
      return Ze = function () {
        return t;
      }
        ,
        t;
    }
    function Xe() {
      var t = Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  width: ", "px;\n  border-right: 1px solid #263346;\n"]);
      return Xe = function () {
        return t;
      }
        ,
        t;
    }
    function Qe() {
      var t = Object(r.a)(["\n          width: fit-content;\n        "]);
      return Qe = function () {
        return t;
      }
        ,
        t;
    }
    function Je() {
      var t = Object(r.a)(["\n          width: ", "px;\n        "]);
      return Je = function () {
        return t;
      }
        ,
        t;
    }
    function Ke() {
      var t = Object(r.a)(["\n          left: calc(50% - 300px);\n        "]);
      return Ke = function () {
        return t;
      }
        ,
        t;
    }
    function $e() {
      var t = Object(r.a)(["\n          left: 15px;\n          right: 15px;\n        "]);
      return $e = function () {
        return t;
      }
        ,
        t;
    }
    function tn() {
      var t = Object(r.a)(["\n  position: fixed;\n  ", "\n  top: calc(50% - 220px);\n  z-index: 42;\n  display: flex;\n  flex-direction: row;\n  ", "\n\n  background: rgb(22, 33, 46);\n  text-align: left;\n  color: #ffffff;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),\n    0 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]);
      return tn = function () {
        return t;
      }
        ,
        t;
    }
    var en = window.innerWidth
      , nn = c.c.div(tn(), (function (t) {
        return t.isMobile ? Object(c.b)($e()) : Object(c.b)(Ke());
      }
      ), (function (t) {
        return t.isMobile ? Object(c.b)(Je(), en - 30) : Object(c.b)(Qe());
      }
      ))
      , rn = c.c.div(Xe(), (function (t) {
        return t.isMobile ? en / 2 - 15 : 270;
      }
      ))
      , on = c.c.div(Ze(), (function (t) {
        return t.isMobile ? en / 2 : 380;
      }
      ));
    function an() {
      return (an = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
        return t;
      }
      ).apply(this, arguments);
    }
    function cn(t, e) {
      if (null == t)
        return {};
      var n, r, o = function (t, e) {
        if (null == t)
          return {};
        var n, r, o = {}, a = Object.keys(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || (o[n] = t[n]);
        return o;
      }(t, e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]);
      }
      return o;
    }
    var ln = a.a.createElement("defs", null, a.a.createElement("filter", {
      id: "a4cpfqcx2a",
      width: "107.3%",
      height: "109.9%",
      x: "-3.6%",
      y: "-4.5%",
      filterUnits: "objectBoundingBox"
    }, a.a.createElement("feOffset", {
      dy: 2,
      in: "SourceAlpha",
      result: "shadowOffsetOuter1"
    }), a.a.createElement("feGaussianBlur", {
      in: "shadowOffsetOuter1",
      result: "shadowBlurOuter1",
      stdDeviation: 2
    }), a.a.createElement("feColorMatrix", {
      in: "shadowBlurOuter1",
      result: "shadowMatrixOuter1",
      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
    }), a.a.createElement("feMerge", null, a.a.createElement("feMergeNode", {
      in: "shadowMatrixOuter1"
    }), a.a.createElement("feMergeNode", {
      in: "SourceGraphic"
    }))))
      , un = a.a.createElement("g", {
        fill: "#424E60",
        fillRule: "evenodd",
        filter: "url(#a4cpfqcx2a)",
        transform: "translate(-22 -6)"
      }, a.a.createElement("g", null, a.a.createElement("path", {
        d: "M6 8H24V10H6zM6 14H24V16H6zM6 20H24V22H6z",
        transform: "translate(22 6)"
      })))
      , sn = function (t) {
        var e = t.svgRef
          , n = t.title
          , r = cn(t, ["svgRef", "title"]);
        return a.a.createElement("svg", an({
          width: 30,
          height: 30,
          viewBox: "0 0 30 30",
          ref: e
        }, r), n ? a.a.createElement("title", null, n) : null, ln, un);
      }
      , dn = a.a.forwardRef((function (t, e) {
        return a.a.createElement(sn, an({
          svgRef: e
        }, t));
      }
      ));
    n.p;
    function pn() {
      return (pn = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
        return t;
      }
      ).apply(this, arguments);
    }
    function fn(t, e) {
      if (null == t)
        return {};
      var n, r, o = function (t, e) {
        if (null == t)
          return {};
        var n, r, o = {}, a = Object.keys(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || (o[n] = t[n]);
        return o;
      }(t, e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]);
      }
      return o;
    }
    var mn = a.a.createElement("defs", null, a.a.createElement("filter", {
      id: "739bajzfba",
      width: "107.3%",
      height: "109.9%",
      x: "-3.6%",
      y: "-4.5%",
      filterUnits: "objectBoundingBox"
    }, a.a.createElement("feOffset", {
      dy: 2,
      in: "SourceAlpha",
      result: "shadowOffsetOuter1"
    }), a.a.createElement("feGaussianBlur", {
      in: "shadowOffsetOuter1",
      result: "shadowBlurOuter1",
      stdDeviation: 2
    }), a.a.createElement("feColorMatrix", {
      in: "shadowBlurOuter1",
      result: "shadowMatrixOuter1",
      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
    }), a.a.createElement("feMerge", null, a.a.createElement("feMergeNode", {
      in: "shadowMatrixOuter1"
    }), a.a.createElement("feMergeNode", {
      in: "SourceGraphic"
    }))))
      , bn = a.a.createElement("g", {
        fill: "none",
        stroke: "#FFF",
        strokeWidth: 2,
        filter: "url(#739bajzfba)",
        transform: "translate(-95 -6)"
      }, a.a.createElement("path", {
        d: "M110 11.382l3.299 6.437 7.275 1.02-5.264 4.953 1.256 7.046-6.566-3.33-6.546 3.319 1.235-7.037-5.276-4.949 7.288-1.022L110 11.382z"
      }))
      , hn = function (t) {
        var e = t.svgRef
          , n = t.title
          , r = fn(t, ["svgRef", "title"]);
        return a.a.createElement("svg", pn({
          width: 30,
          height: 30,
          viewBox: "0 0 30 30",
          ref: e
        }, r), n ? a.a.createElement("title", null, n) : null, mn, bn);
      }
      , gn = a.a.forwardRef((function (t, e) {
        return a.a.createElement(hn, pn({
          svgRef: e
        }, t));
      }
      ));
    n.p;
    function vn() {
      return (vn = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
        return t;
      }
      ).apply(this, arguments);
    }
    function xn(t, e) {
      if (null == t)
        return {};
      var n, r, o = function (t, e) {
        if (null == t)
          return {};
        var n, r, o = {}, a = Object.keys(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || (o[n] = t[n]);
        return o;
      }(t, e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]);
      }
      return o;
    }
    var On = a.a.createElement("defs", null, a.a.createElement("filter", {
      id: "mszkywbp6a",
      width: "107.3%",
      height: "109.9%",
      x: "-3.6%",
      y: "-4.5%",
      filterUnits: "objectBoundingBox"
    }, a.a.createElement("feOffset", {
      dy: 2,
      in: "SourceAlpha",
      result: "shadowOffsetOuter1"
    }), a.a.createElement("feGaussianBlur", {
      in: "shadowOffsetOuter1",
      result: "shadowBlurOuter1",
      stdDeviation: 2
    }), a.a.createElement("feColorMatrix", {
      in: "shadowBlurOuter1",
      result: "shadowMatrixOuter1",
      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
    }), a.a.createElement("feMerge", null, a.a.createElement("feMergeNode", {
      in: "shadowMatrixOuter1"
    }), a.a.createElement("feMergeNode", {
      in: "SourceGraphic"
    }))), a.a.createElement("filter", {
      id: "6ycstwbuqb"
    }, a.a.createElement("feColorMatrix", {
      in: "SourceGraphic",
      values: "0 0 0 0 0.258695 0 0 0 0 0.306196 0 0 0 0 0.374692 0 0 0 1.000000 0"
    })))
      , yn = a.a.createElement("g", {
        fill: "none",
        fillRule: "evenodd",
        filter: "url(#mszkywbp6a)",
        transform: "translate(-168 -6)"
      }, a.a.createElement("g", {
        filter: "url(#6ycstwbuqb)"
      }, a.a.createElement("g", {
        stroke: "#424E60",
        strokeWidth: 2,
        transform: "translate(168 6)"
      }, a.a.createElement("rect", {
        width: 22,
        height: 10,
        x: 4,
        y: 10,
        rx: 5
      }), a.a.createElement("circle", {
        cx: 21,
        cy: 15,
        r: 5
      }))))
      , jn = function (t) {
        var e = t.svgRef
          , n = t.title
          , r = xn(t, ["svgRef", "title"]);
        return a.a.createElement("svg", vn({
          width: 30,
          height: 30,
          viewBox: "0 0 30 30",
          ref: e
        }, r), n ? a.a.createElement("title", null, n) : null, On, yn);
      }
      , En = a.a.forwardRef((function (t, e) {
        return a.a.createElement(jn, vn({
          svgRef: e
        }, t));
      }
      ));
    n.p;
    function wn() {
      var t = Object(r.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tflex-grow: 1;\n\theight: 42px;\n\tborder-bottom: 1px solid ", ";\n\n\tsvg {\n\t\twidth: 24px;\n\t\theight: 24px;\n\t\tmargin: auto;\n\t}\n\n\t&:not(.active) {\n\t\tbackground-color: ", ";\n\t}\n\n\t&.active {\n\t\tborder-top: 2px solid ", ";\n\t\tborder-bottom: none;\n\n\t\t&:nth-child(1) {\n\t\t\tborder-right: 1px solid ", ";\n\t\t}\n\n\t\t&:nth-child(2) {\n\t\t\tborder-right: 1px solid ", ";\n\t\t\tborder-left: 1px solid ", ";\n\t\t}\n\n\t\t&:nth-child(3) {\n\t\t\tborder-left: 1px solid ", ";\n\t\t}\n\t}\n"]);
      return wn = function () {
        return t;
      }
        ,
        t;
    }
    function Cn() {
      var t = Object(r.a)(["\n\tdisplay: flex;\n\tflex-direction: row;\n"]);
      return Cn = function () {
        return t;
      }
        ,
        t;
    }
    var kn, Tn = c.c.div(Cn()), Mn = c.c.div(wn(), (function (t) {
      return t.colors.panelBorder;
    }
    ), (function (t) {
      return t.colors.textfieldBackground;
    }
    ), (function (t) {
      return t.colors.primary;
    }
    ), (function (t) {
      return t.colors.panelBorder;
    }
    ), (function (t) {
      return t.colors.panelBorder;
    }
    ), (function (t) {
      return t.colors.panelBorder;
    }
    ), (function (t) {
      return t.colors.panelBorder;
    }
    ));
    !function (t) {
      t.tabAll = "tabAll",
        t.tabInUse = "tabInUse",
        t.tabFavorites = "tabFavorites";
    }(kn || (kn = {}));
    var Sn = {
      tabAll: dn,
      tabInUse: En,
      tabFavoritesActive: gn
    }
      , Ln = [{
        id: kn.tabAll,
        icon: "tabAll"
      }, {
        id: kn.tabFavorites,
        icon: "tabFavoritesActive"
      }, {
        id: kn.tabInUse,
        icon: "tabInUse"
      }]
      , In = Object(i.c)((function (t) {
        return {
          colors: t.theme
        };
      }
      ))((function (t) {
        var e = t.colors
          , n = t.active
          , r = t.setActive;
        return a.a.createElement(Tn, null, Ln.map((function (t) {
          var o = Sn[t.icon];
          return a.a.createElement(Mn, {
            colors: e,
            key: t.id,
            onClick: function () {
              return r(t.id);
            },
            className: t.id === n ? "active" : ""
          }, a.a.createElement(o, null));
        }
        )));
      }
      ))
      , _n = n(45)
      , Pn = n(437);
    function An() {
      var t = Object(r.a)(["\n\tdisplay: block;\n\tmargin-top: 8px;\n\theight: 288px;\n\toverflow-y: scroll;\n\n\t.active {\n\t\tbackground-color: ", ";\n\t\tborder-bottom: 1px solid ", ";\n\t}\n"]);
      return An = function () {
        return t;
      }
        ,
        t;
    }
    function zn() {
      var t = Object(r.a)(["\n\tfont-size: 14px;\n\ttext-transform: uppercase;\n\tfont-weight: 700;\n\tpadding: 15px 20px 0;\n"]);
      return zn = function () {
        return t;
      }
        ,
        t;
    }
    function Nn() {
      var t = Object(r.a)(["\n\tdisplay: flex;\n\tmargin-bottom: 6px;\n\tborder-bottom: 1px solid #9fabbd;\n\n\tsvg {\n\t\tflex: 0 0 40px;\n\t\tmargin-top: 5px;\n\t}\n\n\tinput {\n\t\tflex: 1 1 auto;\n\t\tborder: none;\n\t\tbackground: transparent;\n\t\toutline: none;\n\t\tbox-sizing: border-box;\n\n\t\theight: 36px;\n\t\tline-height: 36px;\n\n\t\topacity: 0.5;\n\t\tfont-size: 14px;\n\t\tletter-spacing: -0.08px;\n\n\t\tcolor: #9fabbd;\n\t}\n"]);
      return Nn = function () {
        return t;
      }
        ,
        t;
    }
    function Dn() {
      var t = Object(r.a)(["\n\tfont-size: 14px;\n"]);
      return Dn = function () {
        return t;
      }
        ,
        t;
    }
    var Rn = c.c.div(Dn())
      , Fn = c.c.div(Nn())
      , Bn = c.c.div(zn())
      , Hn = c.c.div(An(), (function (t) {
        return t.colors.textfieldBackground;
      }
      ), (function (t) {
        return t.colors.primary;
      }
      ))
      , Vn = n(259);
    function Wn() {
      var t = Object(r.a)(["Period"]);
      return Wn = function () {
        return t;
      }
        ,
        t;
    }
    function Un() {
      var t = Object(r.a)(["Index"]);
      return Un = function () {
        return t;
      }
        ,
        t;
    }
    function Gn() {
      var t = Object(r.a)(["Periods"]);
      return Gn = function () {
        return t;
      }
        ,
        t;
    }
    function Yn() {
      var t = Object(r.a)(["Period"]);
      return Yn = function () {
        return t;
      }
        ,
        t;
    }
    function qn() {
      var t = Object(r.a)(["Index"]);
      return qn = function () {
        return t;
      }
        ,
        t;
    }
    function Zn() {
      var t = Object(r.a)(["Bottom band"]);
      return Zn = function () {
        return t;
      }
        ,
        t;
    }
    function Xn() {
      var t = Object(r.a)(["Top band"]);
      return Xn = function () {
        return t;
      }
        ,
        t;
    }
    function Qn() {
      var t = Object(r.a)(["Period"]);
      return Qn = function () {
        return t;
      }
        ,
        t;
    }
    function Jn() {
      var t = Object(r.a)(["Index"]);
      return Jn = function () {
        return t;
      }
        ,
        t;
    }
    function Kn() {
      var t = Object(r.a)(["Period"]);
      return Kn = function () {
        return t;
      }
        ,
        t;
    }
    function $n() {
      var t = Object(r.a)(["Index"]);
      return $n = function () {
        return t;
      }
        ,
        t;
    }
    function tr() {
      var t = Object(r.a)(["Period"]);
      return tr = function () {
        return t;
      }
        ,
        t;
    }
    function er() {
      var t = Object(r.a)(["Index"]);
      return er = function () {
        return t;
      }
        ,
        t;
    }
    function nr() {
      var t = Object(r.a)(["Period"]);
      return nr = function () {
        return t;
      }
        ,
        t;
    }
    function rr() {
      var t = Object(r.a)(["Index"]);
      return rr = function () {
        return t;
      }
        ,
        t;
    }
    function or() {
      var t = Object(r.a)(["Period"]);
      return or = function () {
        return t;
      }
        ,
        t;
    }
    function ar() {
      var t = Object(r.a)(["Index"]);
      return ar = function () {
        return t;
      }
        ,
        t;
    }
    function ir() {
      var t = Object(r.a)(["Period"]);
      return ir = function () {
        return t;
      }
        ,
        t;
    }
    function cr() {
      var t = Object(r.a)(["Index"]);
      return cr = function () {
        return t;
      }
        ,
        t;
    }
    function lr() {
      var t = Object(r.a)(["Period"]);
      return lr = function () {
        return t;
      }
        ,
        t;
    }
    function ur() {
      var t = Object(r.a)(["Index"]);
      return ur = function () {
        return t;
      }
        ,
        t;
    }
    function sr() {
      var t = Object(r.a)(["Period"]);
      return sr = function () {
        return t;
      }
        ,
        t;
    }
    function dr() {
      var t = Object(r.a)(["Index"]);
      return dr = function () {
        return t;
      }
        ,
        t;
    }
    function pr() {
      var t = Object(r.a)(["Period"]);
      return pr = function () {
        return t;
      }
        ,
        t;
    }
    function fr() {
      var t = Object(r.a)(["Index"]);
      return fr = function () {
        return t;
      }
        ,
        t;
    }
    function mr() {
      var t = Object(r.a)(["Period"]);
      return mr = function () {
        return t;
      }
        ,
        t;
    }
    function br() {
      var t = Object(r.a)(["Index"]);
      return br = function () {
        return t;
      }
        ,
        t;
    }
    function hr() {
      var t = Object(r.a)(["Period"]);
      return hr = function () {
        return t;
      }
        ,
        t;
    }
    function gr() {
      var t = Object(r.a)(["Index"]);
      return gr = function () {
        return t;
      }
        ,
        t;
    }
    function vr() {
      var t = Object(r.a)(["Periods"]);
      return vr = function () {
        return t;
      }
        ,
        t;
    }
    function xr() {
      var t = Object(r.a)(["Period"]);
      return xr = function () {
        return t;
      }
        ,
        t;
    }
    function Or() {
      var t = Object(r.a)(["Index"]);
      return Or = function () {
        return t;
      }
        ,
        t;
    }
    function yr() {
      var t = Object(r.a)(["Period"]);
      return yr = function () {
        return t;
      }
        ,
        t;
    }
    function jr() {
      var t = Object(r.a)(["Period"]);
      return jr = function () {
        return t;
      }
        ,
        t;
    }
    function Er() {
      var t = Object(r.a)(["Index"]);
      return Er = function () {
        return t;
      }
        ,
        t;
    }
    function wr() {
      var t = Object(r.a)(["Period"]);
      return wr = function () {
        return t;
      }
        ,
        t;
    }
    function Cr() {
      var t = Object(r.a)(["Index"]);
      return Cr = function () {
        return t;
      }
        ,
        t;
    }
    function kr() {
      var t = Object(r.a)(["Period"]);
      return kr = function () {
        return t;
      }
        ,
        t;
    }
    function Tr() {
      var t = Object(r.a)(["Index"]);
      return Tr = function () {
        return t;
      }
        ,
        t;
    }
    function Mr() {
      var t = Object(r.a)(["Period"]);
      return Mr = function () {
        return t;
      }
        ,
        t;
    }
    function Sr() {
      var t = Object(r.a)(["Index"]);
      return Sr = function () {
        return t;
      }
        ,
        t;
    }
    function Lr() {
      var t = Object(r.a)(["Period"]);
      return Lr = function () {
        return t;
      }
        ,
        t;
    }
    function Ir() {
      var t = Object(r.a)(["Index"]);
      return Ir = function () {
        return t;
      }
        ,
        t;
    }
    function _r() {
      var t = Object(r.a)(["Period"]);
      return _r = function () {
        return t;
      }
        ,
        t;
    }
    function Pr() {
      var t = Object(r.a)(["Index"]);
      return Pr = function () {
        return t;
      }
        ,
        t;
    }
    function Ar() {
      var t = Object(r.a)(["Signal period"]);
      return Ar = function () {
        return t;
      }
        ,
        t;
    }
    function zr() {
      var t = Object(r.a)(["Long period"]);
      return zr = function () {
        return t;
      }
        ,
        t;
    }
    function Nr() {
      var t = Object(r.a)(["Short period"]);
      return Nr = function () {
        return t;
      }
        ,
        t;
    }
    function Dr() {
      var t = Object(r.a)(["Standard Deviation"]);
      return Dr = function () {
        return t;
      }
        ,
        t;
    }
    function Rr() {
      var t = Object(r.a)(["Period"]);
      return Rr = function () {
        return t;
      }
        ,
        t;
    }
    function Fr() {
      var t = Object(r.a)(["Index"]);
      return Fr = function () {
        return t;
      }
        ,
        t;
    }
    function Br() {
      var t = Object(r.a)(["Decimals"]);
      return Br = function () {
        return t;
      }
        ,
        t;
    }
    function Hr() {
      var t = Object(r.a)(["Period"]);
      return Hr = function () {
        return t;
      }
        ,
        t;
    }
    function Vr() {
      var t = Object(r.a)(["Period"]);
      return Vr = function () {
        return t;
      }
        ,
        t;
    }
    function Wr() {
      var t = Object(r.a)(["Index"]);
      return Wr = function () {
        return t;
      }
        ,
        t;
    }
    var Ur = function (t, e) {
      var n = [];
      return Object(_n.forEach)(e, (function (t) {
        return n.push(Object(Vn.c)(t));
      }
      )),
        "".concat(t, "-").concat(Object(_n.join)(n, "&"));
    }
      , Gr = [{
        type: "sma",
        name: "SMA",
        supportedOnLineChartType: !0,
        supportedOnCandleChartType: !0,
        active: !1,
        params: [{
          id: "index",
          title: Object(T.t)(Wr()),
          value: 0
        }, {
          id: "period",
          title: Object(T.t)(Vr()),
          value: 14
        }]
      }, {
        type: "rsi",
        name: "RSI",
        supportedOnLineChartType: !0,
        supportedOnCandleChartType: !0,
        active: !1,
        params: [{
          id: "period",
          title: Object(T.t)(Hr()),
          value: 30
        }, {
          id: "decimals",
          title: Object(T.t)(Br()),
          value: 70
        }]
      }, {
        type: "bb",
        name: "BB",
        supportedOnLineChartType: !0,
        supportedOnCandleChartType: !0,
        active: !1,
        params: [{
          id: "index",
          title: Object(T.t)(Fr()),
          value: 0
        }, {
          id: "period",
          title: Object(T.t)(Rr()),
          value: 14
        }, {
          id: "standardDeviation",
          title: Object(T.t)(Dr()),
          value: 4
        }]
      }, {
        type: "macd",
        name: "MACD",
        supportedOnLineChartType: !0,
        supportedOnCandleChartType: !0,
        active: !1,
        params: [{
          id: "shortPeriod",
          title: Object(T.t)(Nr()),
          value: 12
        }, {
          id: "longPeriod",
          title: Object(T.t)(zr()),
          value: 26
        }, {
          id: "signalPeriod",
          title: Object(T.t)(Ar()),
          value: 9
        }]
      }, {
        type: "aroon",
        name: "Aroon",
        supportedOnLineChartType: !0,
        supportedOnCandleChartType: !0,
        active: !1,
        params: [{
          id: "index",
          title: Object(T.t)(Pr()),
          value: 0
        }, {
          id: "period",
          title: Object(T.t)(_r()),
          value: 25
        }]
      }, {
        type: "aroonoscillator",
        name: "Aroon Oscillator",
        supportedOnLineChartType: !0,
        supportedOnCandleChartType: !0,
        active: !1,
        params: [{
          id: "index",
          title: Object(T.t)(Ir()),
          value: 0
        }, {
          id: "period",
          title: Object(T.t)(Lr()),
          value: 25
        }]
      }, {
        type: "dpo",
        name: "DPO",
        supportedOnLineChartType: !0,
        supportedOnCandleChartType: !0,
        active: !1,
        params: [{
          id: "index",
          title: Object(T.t)(Sr()),
          value: 0
        }, {
          id: "period",
          title: Object(T.t)(Mr()),
          value: 21
        }]
      }, {
        type: "ema",
        name: "EMA",
        supportedOnLineChartType: !0,
        supportedOnCandleChartType: !0,
        active: !1,
        params: [{
          id: "index",
          title: Object(T.t)(Tr()),
          value: 3
        }, {
          id: "period",
          title: Object(T.t)(kr()),
          value: 9
        }]
      }, {
        type: "tema",
        name: "TEMA",
        supportedOnLineChartType: !0,
        supportedOnCandleChartType: !0,
        active: !1,
        params: [{
          id: "index",
          title: Object(T.t)(Cr()),
          value: 3
        }, {
          id: "period",
          title: Object(T.t)(wr()),
          value: 9
        }]
      }, {
        type: "trix",
        name: "TRIX",
        supportedOnLineChartType: !0,
        supportedOnCandleChartType: !0,
        active: !1,
        params: [{
          id: "index",
          title: Object(T.t)(Er()),
          value: 3
        }, {
          id: "period",
          title: Object(T.t)(jr()),
          value: 9
        }]
      }, {
        type: "apo",
        name: "APO",
        supportedOnLineChartType: !0,
        supportedOnCandleChartType: !0,
        active: !1,
        params: [{
          id: "period",
          title: Object(T.t)(yr()),
          value: [10, 20]
        }]
      }, {
        type: "ppo",
        name: "PPO",
        supportedOnLineChartType: !0,
        supportedOnCandleChartType: !0,
        active: !1,
        params: [{
          id: "index",
          title: Object(T.t)(Or()),
          value: 3
        }, {
          id: "period",
          title: Object(T.t)(xr()),
          value: 9
        }, {
          id: "periods",
          title: Object(T.t)(vr()),
          value: [12, 26]
        }]
      }, {
        type: "wma",
        name: "WMA",
        supportedOnLineChartType: !0,
        supportedOnCandleChartType: !0,
        active: !1,
        params: [{
          id: "index",
          title: Object(T.t)(gr()),
          value: 3
        }, {
          id: "period",
          title: Object(T.t)(hr()),
          value: 9
        }]
      }, {
        type: "linearRegression",
        name: "Linear regression",
        supportedOnLineChartType: !0,
        supportedOnCandleChartType: !0,
        active: !1,
        params: [{
          id: "index",
          title: Object(T.t)(br()),
          value: 0
        }, {
          id: "period",
          title: Object(T.t)(mr()),
          value: 14
        }]
      }, {
        type: "linearRegressionSlope",
        name: "Linear regression slope",
        supportedOnLineChartType: !0,
        supportedOnCandleChartType: !0,
        active: !1,
        params: [{
          id: "index",
          title: Object(T.t)(fr()),
          value: 0
        }, {
          id: "period",
          title: Object(T.t)(pr()),
          value: 14
        }]
      }, {
        type: "ao",
        name: "AO",
        supportedOnLineChartType: !0,
        supportedOnCandleChartType: !0,
        active: !1,
        params: [{
          id: "index",
          title: Object(T.t)(dr()),
          value: 0
        }, {
          id: "period",
          title: Object(T.t)(sr()),
          value: 14
        }]
      }, {
        type: "atr",
        name: "ATR",
        supportedOnLineChartType: !0,
        supportedOnCandleChartType: !0,
        active: !1,
        params: [{
          id: "index",
          title: Object(T.t)(ur()),
          value: 0
        }, {
          id: "period",
          title: Object(T.t)(lr()),
          value: 14
        }]
      }, {
        type: "cci",
        name: "CCI",
        supportedOnLineChartType: !0,
        supportedOnCandleChartType: !0,
        active: !1,
        params: [{
          id: "index",
          title: Object(T.t)(cr()),
          value: 0
        }, {
          id: "period",
          title: Object(T.t)(ir()),
          value: 14
        }]
      }, {
        type: "ikh",
        name: "IKH",
        supportedOnLineChartType: !0,
        supportedOnCandleChartType: !0,
        active: !1,
        params: [{
          id: "index",
          title: Object(T.t)(ar()),
          value: 0
        }, {
          id: "period",
          title: Object(T.t)(or()),
          value: 26
        }, {
          id: "periodTenkan",
          title: "Period tenkan",
          value: 9
        }, {
          id: "periodSenkouSpanB",
          title: "Period senkou span b",
          value: 52
        }]
      }, {
        type: "momentum",
        name: "Momentum",
        supportedOnLineChartType: !0,
        supportedOnCandleChartType: !0,
        active: !1,
        params: [{
          id: "index",
          title: Object(T.t)(rr()),
          value: 0
        }, {
          id: "period",
          title: Object(T.t)(nr()),
          value: 14
        }]
      }, {
        type: "pivotpoints",
        name: "Pivot points",
        supportedOnLineChartType: !0,
        supportedOnCandleChartType: !0,
        active: !1,
        params: [{
          id: "index",
          title: Object(T.t)(er()),
          value: 0
        }, {
          id: "period",
          title: Object(T.t)(tr()),
          value: 28
        }]
      }, {
        type: "pc",
        name: "Price Channel",
        supportedOnLineChartType: !0,
        supportedOnCandleChartType: !0,
        active: !1,
        params: [{
          id: "index",
          title: Object(T.t)($n()),
          value: 0
        }, {
          id: "period",
          title: Object(T.t)(Kn()),
          value: 20
        }]
      }, {
        type: "priceenvelopes",
        name: "Price Envelopes",
        supportedOnLineChartType: !0,
        supportedOnCandleChartType: !0,
        active: !1,
        params: [{
          id: "index",
          title: Object(T.t)(Jn()),
          value: 0
        }, {
          id: "period",
          title: Object(T.t)(Qn()),
          value: 20
        }, {
          id: "topBand",
          title: Object(T.t)(Xn()),
          value: .1
        }, {
          id: "bottomBand",
          title: Object(T.t)(Zn()),
          value: .1
        }]
      }, {
        type: "stochastic",
        name: "Stochastic",
        supportedOnLineChartType: !0,
        supportedOnCandleChartType: !0,
        active: !1,
        params: [{
          id: "index",
          title: Object(T.t)(qn()),
          value: 0
        }, {
          id: "period",
          title: Object(T.t)(Yn()),
          value: 14
        }, {
          id: "periods",
          title: Object(T.t)(Gn()),
          value: [14, 3]
        }]
      }, {
        type: "williamsr",
        name: "Williamsr",
        supportedOnLineChartType: !0,
        supportedOnCandleChartType: !0,
        active: !1,
        params: [{
          id: "index",
          title: Object(T.t)(Un()),
          value: 0
        }, {
          id: "period",
          title: Object(T.t)(Wn()),
          value: 14
        }]
      }]
      , Yr = n(294);
    function qr() {
      return (qr = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
        return t;
      }
      ).apply(this, arguments);
    }
    function Zr(t, e) {
      if (null == t)
        return {};
      var n, r, o = function (t, e) {
        if (null == t)
          return {};
        var n, r, o = {}, a = Object.keys(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || (o[n] = t[n]);
        return o;
      }(t, e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]);
      }
      return o;
    }
    var Xr = a.a.createElement("defs", null, a.a.createElement("filter", {
      id: "r67xbvy0pa",
      width: "107.3%",
      height: "109.9%",
      x: "-3.6%",
      y: "-4.5%",
      filterUnits: "objectBoundingBox"
    }, a.a.createElement("feOffset", {
      dy: 2,
      in: "SourceAlpha",
      result: "shadowOffsetOuter1"
    }), a.a.createElement("feGaussianBlur", {
      in: "shadowOffsetOuter1",
      result: "shadowBlurOuter1",
      stdDeviation: 2
    }), a.a.createElement("feColorMatrix", {
      in: "shadowBlurOuter1",
      result: "shadowMatrixOuter1",
      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
    }), a.a.createElement("feMerge", null, a.a.createElement("feMergeNode", {
      in: "shadowMatrixOuter1"
    }), a.a.createElement("feMergeNode", {
      in: "SourceGraphic"
    }))))
      , Qr = a.a.createElement("g", {
        fill: "none",
        fillRule: "evenodd"
      }, a.a.createElement("g", {
        fill: "#75F986",
        fillRule: "nonzero"
      }, a.a.createElement("g", {
        filter: "url(#r67xbvy0pa)",
        transform: "translate(-438 -250) translate(248 83)"
      }, a.a.createElement("g", null, a.a.createElement("path", {
        d: "M16 5.813c0 .138-.083.29-.25.454l-3.49 3.345.827 4.726c.006.044.01.107.01.19 0 .314-.132.472-.395.472-.122 0-.25-.038-.385-.113L8 12.656l-4.317 2.23c-.141.076-.27.114-.385.114-.135 0-.236-.046-.303-.137-.067-.091-.1-.203-.1-.336 0-.037.006-.1.018-.189l.827-4.726-3.5-3.345C.08 6.097 0 5.945 0 5.813c0-.233.18-.378.538-.435l4.827-.69L7.53.388C7.65.129 7.808 0 8 0c.192 0 .35.13.471.388l2.164 4.3 4.827.69c.359.057.538.202.538.435z",
        transform: "translate(190 167)"
      })))))
      , Jr = function (t) {
        var e = t.svgRef
          , n = t.title
          , r = Zr(t, ["svgRef", "title"]);
        return a.a.createElement("svg", qr({
          width: 16,
          height: 16,
          viewBox: "0 0 16 16",
          ref: e
        }, r), n ? a.a.createElement("title", null, n) : null, Xr, Qr);
      }
      , Kr = a.a.forwardRef((function (t, e) {
        return a.a.createElement(Jr, qr({
          svgRef: e
        }, t));
      }
      ));
    n.p;
    function $r() {
      return ($r = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
        return t;
      }
      ).apply(this, arguments);
    }
    function to(t, e) {
      if (null == t)
        return {};
      var n, r, o = function (t, e) {
        if (null == t)
          return {};
        var n, r, o = {}, a = Object.keys(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || (o[n] = t[n]);
        return o;
      }(t, e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]);
      }
      return o;
    }
    var eo = a.a.createElement("defs", null, a.a.createElement("filter", {
      id: "nj8won1pba",
      width: "107.3%",
      height: "109.9%",
      x: "-3.6%",
      y: "-4.5%",
      filterUnits: "objectBoundingBox"
    }, a.a.createElement("feOffset", {
      dy: 2,
      in: "SourceAlpha",
      result: "shadowOffsetOuter1"
    }), a.a.createElement("feGaussianBlur", {
      in: "shadowOffsetOuter1",
      result: "shadowBlurOuter1",
      stdDeviation: 2
    }), a.a.createElement("feColorMatrix", {
      in: "shadowBlurOuter1",
      result: "shadowMatrixOuter1",
      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
    }), a.a.createElement("feMerge", null, a.a.createElement("feMergeNode", {
      in: "shadowMatrixOuter1"
    }), a.a.createElement("feMergeNode", {
      in: "SourceGraphic"
    }))), a.a.createElement("filter", {
      id: "p4pmht6zyb"
    }, a.a.createElement("feColorMatrix", {
      in: "SourceGraphic",
      values: "0 0 0 0 0.248986 0 0 0 0 0.306297 0 0 0 0 0.383234 0 0 0 1.000000 0"
    })))
      , no = a.a.createElement("g", {
        fill: "none",
        fillRule: "evenodd"
      }, a.a.createElement("g", null, a.a.createElement("g", {
        filter: "url(#nj8won1pba)",
        transform: "translate(-438 -179) translate(248 83)"
      }, a.a.createElement("g", {
        filter: "url(#p4pmht6zyb)"
      }, a.a.createElement("g", null, a.a.createElement("path", {
        fillRule: "nonzero",
        stroke: "#FFF",
        strokeWidth: 1.5,
        d: "M8 1.12l2.14 4.255 4.748.678-3.436 3.295.802 4.59-4.26-2.123-3.548 1.833.048-4.353-3.39-3.241 4.755-.679L8 1.12z",
        transform: "translate(190 96)"
      }))))))
      , ro = function (t) {
        var e = t.svgRef
          , n = t.title
          , r = to(t, ["svgRef", "title"]);
        return a.a.createElement("svg", $r({
          width: 16,
          height: 16,
          viewBox: "0 0 16 16",
          ref: e
        }, r), n ? a.a.createElement("title", null, n) : null, eo, no);
      }
      , oo = a.a.forwardRef((function (t, e) {
        return a.a.createElement(ro, $r({
          svgRef: e
        }, t));
      }
      ));
    n.p;
    function ao() {
      var t = Object(r.a)(["Search..."]);
      return ao = function () {
        return t;
      }
        ,
        t;
    }
    function io() {
      var t = Object(r.a)(["All Indicators"]);
      return io = function () {
        return t;
      }
        ,
        t;
    }
    function co() {
      var t = Object(r.a)(["Currently in use"]);
      return co = function () {
        return t;
      }
        ,
        t;
    }
    function lo() {
      var t = Object(r.a)(["Favorites"]);
      return lo = function () {
        return t;
      }
        ,
        t;
    }
    function uo() {
      var t = Object(r.a)(["All Indicators"]);
      return uo = function () {
        return t;
      }
        ,
        t;
    }
    var so = function (t) {
      var e = t.item
        , n = t.favorites
        , r = t.onAddFavorite
        , o = t.onRemoveFavorite;
      return !!n.filter((function (t) {
        return t.id === e.id;
      }
      ))[0] ? a.a.createElement(Kr, {
        onClick: function (t) {
          t.stopPropagation(),
            o(e);
        }
      }) : a.a.createElement(oo, {
        onClick: function (t) {
          t.stopPropagation(),
            r(e);
        }
      });
    }
      , po = Object(i.c)((function (t) {
        return {
          colors: t.theme
        };
      }
      ))((function (t) {
        var e = t.favorites
          , n = t.menuItems
          , r = t.item
          , i = t.activeTab
          , c = t.isLoggedIn
          , l = t.onItem
          , s = t.onFavoritesChange
          , d = t.colors
          , p = Object(o.useState)("")
          , f = Object(v.a)(p, 2)
          , m = f[0]
          , b = f[1]
          , h = "";
        switch (i) {
          case kn.tabAll:
            h = Object(T.t)(uo());
            break;
          case kn.tabFavorites:
            h = Object(T.t)(lo());
            break;
          case kn.tabInUse:
            h = Object(T.t)(co());
            break;
          default:
            h = Object(T.t)(io());
        }
        var x = r ? Ur(r.type, r.params) : ""
          , O = function (t) {
            return s([].concat(Object(g.a)(e), [t]));
          }
          , y = function (t) {
            return s(e.filter((function (e) {
              return e.id !== t.id;
            }
            )));
          };
        return a.a.createElement(Rn, null, a.a.createElement(Bn, null, h), a.a.createElement(Fn, null, a.a.createElement(Yr.a, {
          width: "24",
          height: "24",
          fill: "#9fabbd"
        }), a.a.createElement("input", {
          type: "text",
          onChange: function (t) {
            return b(t.target.value);
          },
          value: m,
          placeholder: Object(T.t)(ao())
        })), a.a.createElement(Hn, {
          colors: d,
          className: "scrollable"
        }, n.filter((function (t) {
          return Object(_n.includes)(Object(_n.toLower)(t.name), Object(_n.toLower)(m));
        }
        )).map((function (t) {
          return Object(u.a)(Object(u.a)({}, t), {}, {
            id: Ur(t.type, t.params)
          });
        }
        )).map((function (t) {
          return a.a.createElement(Pn.a, {
            key: t.id,
            onClick: function () {
              return l(t);
            },
            className: t.id === x ? "active" : "",
            primaryText: t.name,
            rightAddon: c ? a.a.createElement(so, {
              item: t,
              favorites: e,
              onAddFavorite: O,
              onRemoveFavorite: y
            }) : null
          });
        }
        ))));
      }
      ));
    function fo() {
      var t = Object(r.a)(["\n\tmargin-top: 15px;\n\tborder: none;\n\toutline: none;\n\tbackground: transparent;\n\n\tdisplay: block;\n\tmin-width: 130px;\n\theight: 36px;\n\tline-height: 34px;\n\tfont-family: 'Roboto', sans-serif;\n\tfont-size: 12px;\n\tfont-weight: 500;\n\tletter-spacing: -0.07px;\n\ttext-align: center;\n\ttext-transform: uppercase;\n\tuser-select: none;\n\tcursor: pointer;\n\n\tborder-radius: 4px;\n\n\tcolor: ", ";\n\tbackground: ", ";\n"]);
      return fo = function () {
        return t;
      }
        ,
        t;
    }
    function mo() {
      var t = Object(r.a)(["\n\tdisplay: flex;\n\tflex: 1;\n\talign-items: flex-end;\n\tjustify-content: flex-end;\n"]);
      return mo = function () {
        return t;
      }
        ,
        t;
    }
    function bo() {
      var t = Object(r.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n"]);
      return bo = function () {
        return t;
      }
        ,
        t;
    }
    function ho() {
      var t = Object(r.a)(["\n\tpadding: 0 10px;\n\tmargin: 5px 0;\n\theight: 30px;\n\tfont-size: 14px;\n\ttext-align: right;\n\toutline: none;\n\tborder: none;\n\tbackground-color: ", ";\n\tcolor: ", ";\n"]);
      return ho = function () {
        return t;
      }
        ,
        t;
    }
    function go() {
      var t = Object(r.a)(["\n\twidth: 50%;\n\tmargin-right: 20px;\n\tfont-size: 14px;\n"]);
      return go = function () {
        return t;
      }
        ,
        t;
    }
    function vo() {
      var t = Object(r.a)(["\n\tdisplay: flex;\n\tflex-direction: row;\n"]);
      return vo = function () {
        return t;
      }
        ,
        t;
    }
    function xo() {
      var t = Object(r.a)([""]);
      return xo = function () {
        return t;
      }
        ,
        t;
    }
    function Oo() {
      var t = Object(r.a)(["\n\tfont-size: 20px;\n\tfont-weight: 700;\n\ttext-transform: uppercase;\n\tmargin-bottom: 20px;\n"]);
      return Oo = function () {
        return t;
      }
        ,
        t;
    }
    function yo() {
      var t = Object(r.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\theight: 100%;\n"]);
      return yo = function () {
        return t;
      }
        ,
        t;
    }
    var jo = c.c.div(yo())
      , Eo = c.c.div(Oo())
      , wo = (c.c.div(xo()),
        c.c.div(vo()),
        c.c.div(go()),
        c.c.input(ho(), (function (t) {
          return t.colors.textfieldBackground;
        }
        ), (function (t) {
          return t.colors.primaryText;
        }
        )),
        c.c.div(bo()),
        c.c.div(mo()))
      , Co = c.c.button(fo(), (function (t) {
        return t.colors.primaryTextContrast;
      }
      ), (function (t) {
        return t.colors.primary;
      }
      ));
    function ko() {
      var t = Object(r.a)(["\n\twidth: 37px;\n\theight: 37px;\n\tcursor: pointer;\n\ttext-align: center;\n\n\tsvg {\n\t\tdisplay: flex;\n\t\theight: 100%;\n\t\tmargin: auto;\n\t}\n\n\t&:hover {\n\t\tbackground-color: #0d1722;\n\t}\n"]);
      return ko = function () {
        return t;
      }
        ,
        t;
    }
    function To() {
      var t = Object(r.a)(["\n\tdisplay: flex;\n\tflex-direction: row;\n\tmargin-right: auto;\n"]);
      return To = function () {
        return t;
      }
        ,
        t;
    }
    var Mo = c.c.div(To())
      , So = c.c.div(ko());
    function Lo() {
      return (Lo = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
        return t;
      }
      ).apply(this, arguments);
    }
    function Io(t, e) {
      if (null == t)
        return {};
      var n, r, o = function (t, e) {
        if (null == t)
          return {};
        var n, r, o = {}, a = Object.keys(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || (o[n] = t[n]);
        return o;
      }(t, e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]);
      }
      return o;
    }
    var _o = a.a.createElement("defs", null, a.a.createElement("filter", {
      id: "rn5phoia0a",
      width: "107.3%",
      height: "109.9%",
      x: "-3.6%",
      y: "-4.5%",
      filterUnits: "objectBoundingBox"
    }, a.a.createElement("feOffset", {
      dy: 2,
      in: "SourceAlpha",
      result: "shadowOffsetOuter1"
    }), a.a.createElement("feGaussianBlur", {
      in: "shadowOffsetOuter1",
      result: "shadowBlurOuter1",
      stdDeviation: 2
    }), a.a.createElement("feColorMatrix", {
      in: "shadowBlurOuter1",
      result: "shadowMatrixOuter1",
      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
    }), a.a.createElement("feMerge", null, a.a.createElement("feMergeNode", {
      in: "shadowMatrixOuter1"
    }), a.a.createElement("feMergeNode", {
      in: "SourceGraphic"
    }))))
      , Po = a.a.createElement("g", {
        fill: "none",
        fillRule: "evenodd"
      }, a.a.createElement("g", {
        fill: "#FFF",
        fillRule: "nonzero"
      }, a.a.createElement("g", {
        filter: "url(#rn5phoia0a)",
        transform: "translate(-509 -471) translate(248 83)"
      }, a.a.createElement("g", null, a.a.createElement("g", null, a.a.createElement("path", {
        d: "M10.248 1.888L8.832 3.312c-1.105-.296-2.283.02-3.092.828-.809.809-1.124 1.987-.828 3.092l-2.208 2.2C1.648 8.632.768 7.592.16 6.4 2.04 2.712 6.237.834 10.24 1.888h.008zm3.04 1.48c1.064.8 1.944 1.84 2.56 3.032-1.882 3.695-6.088 5.574-10.096 4.512l1.416-1.424c1.105.296 2.283-.02 3.092-.828.809-.809 1.124-1.987.828-3.092l2.208-2.2h-.008zm-.2-3.192l1.136 1.136L2.912 12.624l-1.136-1.136L13.088.176z",
        transform: "translate(261 388) translate(0 1)"
      }))))))
      , Ao = function (t) {
        var e = t.svgRef
          , n = t.title
          , r = Io(t, ["svgRef", "title"]);
        return a.a.createElement("svg", Lo({
          width: 16,
          height: 16,
          viewBox: "0 0 16 16",
          ref: e
        }, r), n ? a.a.createElement("title", null, n) : null, _o, Po);
      }
      , zo = a.a.forwardRef((function (t, e) {
        return a.a.createElement(Ao, Lo({
          svgRef: e
        }, t));
      }
      ));
    n.p;
    function No() {
      return (No = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
        return t;
      }
      ).apply(this, arguments);
    }
    function Do(t, e) {
      if (null == t)
        return {};
      var n, r, o = function (t, e) {
        if (null == t)
          return {};
        var n, r, o = {}, a = Object.keys(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || (o[n] = t[n]);
        return o;
      }(t, e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]);
      }
      return o;
    }
    var Ro = a.a.createElement("g", {
      fill: "#FFF"
    }, a.a.createElement("g", null, a.a.createElement("path", {
      d: "M16.001,20.25c-2.344,0-4.25-1.906-4.25-4.25c0-2.343,1.906-4.25,4.25-4.25s4.25,1.907,4.25,4.25 C20.251,18.344,18.345,20.25,16.001,20.25z M16.001,13.25c-1.517,0-2.75,1.233-2.75,2.75s1.233,2.75,2.75,2.75 s2.75-1.233,2.75-2.75S17.518,13.25,16.001,13.25z"
    })), a.a.createElement("g", null, a.a.createElement("path", {
      d: "M16.001,23.238L16.001,23.238c-2.729-0.001-5.302-1.062-7.246-2.988L4.465,16l4.29-4.25 c1.945-1.926,4.519-2.987,7.246-2.987c2.729,0,5.302,1.061,7.246,2.987L27.537,16l-4.29,4.25 C21.302,22.177,18.729,23.238,16.001,23.238z M6.454,16l3.357,3.186c1.661,1.646,3.859,2.553,6.189,2.553s4.528-0.907,6.19-2.553 L25.548,16l-3.357-3.186c-1.661-1.646-3.859-2.553-6.189-2.553s-4.528,0.907-6.19,2.553L6.454,16z"
    })))
      , Fo = function (t) {
        var e = t.svgRef
          , n = t.title
          , r = Do(t, ["svgRef", "title"]);
        return a.a.createElement("svg", No({
          id: "Layer_1",
          x: "0px",
          y: "0px",
          viewBox: "0 0 32 32",
          enableBackground: "new 0 0 32 32",
          width: "100%",
          height: "100%",
          xmlSpace: "preserve",
          fit: "",
          preserveAspectRatio: "xMidYMid meet",
          focusable: "false",
          ref: e
        }, r), n ? a.a.createElement("title", null, n) : null, Ro);
      }
      , Bo = a.a.forwardRef((function (t, e) {
        return a.a.createElement(Fo, No({
          svgRef: e
        }, t));
      }
      ));
    n.p;
    function Ho() {
      return (Ho = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
        return t;
      }
      ).apply(this, arguments);
    }
    function Vo(t, e) {
      if (null == t)
        return {};
      var n, r, o = function (t, e) {
        if (null == t)
          return {};
        var n, r, o = {}, a = Object.keys(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || (o[n] = t[n]);
        return o;
      }(t, e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]);
      }
      return o;
    }
    var Wo = a.a.createElement("defs", null, a.a.createElement("filter", {
      id: "a2hd3g8raa",
      width: "107.3%",
      height: "109.9%",
      x: "-3.6%",
      y: "-4.5%",
      filterUnits: "objectBoundingBox"
    }, a.a.createElement("feOffset", {
      dy: 2,
      in: "SourceAlpha",
      result: "shadowOffsetOuter1"
    }), a.a.createElement("feGaussianBlur", {
      in: "shadowOffsetOuter1",
      result: "shadowBlurOuter1",
      stdDeviation: 2
    }), a.a.createElement("feColorMatrix", {
      in: "shadowBlurOuter1",
      result: "shadowMatrixOuter1",
      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
    }), a.a.createElement("feMerge", null, a.a.createElement("feMergeNode", {
      in: "shadowMatrixOuter1"
    }), a.a.createElement("feMergeNode", {
      in: "SourceGraphic"
    }))), a.a.createElement("filter", {
      id: "16q37bprkb"
    }, a.a.createElement("feColorMatrix", {
      in: "SourceGraphic",
      values: "0 0 0 0 0.604575 0 0 0 0 0.671332 0 0 0 0 0.757029 0 0 0 1.000000 0"
    })))
      , Uo = a.a.createElement("g", {
        fill: "none",
        fillRule: "evenodd"
      }, a.a.createElement("g", null, a.a.createElement("g", {
        filter: "url(#a2hd3g8raa)",
        transform: "translate(-546 -471) translate(248 83)"
      }, a.a.createElement("g", {
        filter: "url(#16q37bprkb)"
      }, a.a.createElement("g", {
        fill: "#FFF",
        fillRule: "nonzero"
      }, a.a.createElement("path", {
        d: "M4.8 3.2V1.6C4.8.72 5.52 0 6.4 0h3.2c.884 0 1.6.716 1.6 1.6v1.6h4c.442 0 .8.358.8.8 0 .442-.358.8-.8.8h-.8v9.6c0 .884-.716 1.6-1.6 1.6H3.2c-.884 0-1.6-.716-1.6-1.6V4.8H.8C.358 4.8 0 4.442 0 4c0-.442.358-.8.8-.8h4zM3.2 4.8v9.6h9.6V4.8H3.2zm6.4-1.6V1.6H6.4v1.6h3.2zM6.4 6.4c.442 0 .8.358.8.8V12c0 .442-.358.8-.8.8-.442 0-.8-.358-.8-.8V7.2c0-.442.358-.8.8-.8zm3.2 0c.442 0 .8.358.8.8V12c0 .442-.358.8-.8.8-.442 0-.8-.358-.8-.8V7.2c0-.442.358-.8.8-.8z",
        transform: "translate(298 388)"
      }))))))
      , Go = function (t) {
        var e = t.svgRef
          , n = t.title
          , r = Vo(t, ["svgRef", "title"]);
        return a.a.createElement("svg", Ho({
          width: 16,
          height: 16,
          viewBox: "0 0 16 16",
          ref: e
        }, r), n ? a.a.createElement("title", null, n) : null, Wo, Uo);
      }
      , Yo = a.a.forwardRef((function (t, e) {
        return a.a.createElement(Go, Ho({
          svgRef: e
        }, t));
      }
      ));
    n.p;
    function qo() {
      return (qo = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
        return t;
      }
      ).apply(this, arguments);
    }
    function Zo(t, e) {
      if (null == t)
        return {};
      var n, r, o = function (t, e) {
        if (null == t)
          return {};
        var n, r, o = {}, a = Object.keys(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || (o[n] = t[n]);
        return o;
      }(t, e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]);
      }
      return o;
    }
    var Xo = a.a.createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, a.a.createElement("g", {
      fill: "#FFF",
      fillRule: "nonzero"
    }, a.a.createElement("g", null, a.a.createElement("g", null, a.a.createElement("path", {
      d: "M9.84 2.96l3.2 3.2L3.2 16H0v-3.2l9.84-9.84zm1.12-1.12L12.8 0 16 3.2l-1.84 1.84-3.2-3.2z",
      transform: "translate(-356 -85) translate(345.5 70) translate(11 15)"
    })))))
      , Qo = function (t) {
        var e = t.svgRef
          , n = t.title
          , r = Zo(t, ["svgRef", "title"]);
        return a.a.createElement("svg", qo({
          width: 17,
          height: 16,
          viewBox: "0 0 17 16",
          ref: e
        }, r), n ? a.a.createElement("title", null, n) : null, Xo);
      }
      , Jo = a.a.forwardRef((function (t, e) {
        return a.a.createElement(Qo, qo({
          svgRef: e
        }, t));
      }
      ))
      , Ko = (n.p,
        function (t) {
          var e = t.indicatorVisability
            , n = t.onRemove
            , r = t.onToggle
            , o = t.onEdit
            , i = t.showHideEnabled
            , c = t.trashEnabled
            , l = t.editEnabled;
          return a.a.createElement(Mo, null, i && a.a.createElement(So, null, e ? a.a.createElement(zo, {
            onClick: r
          }) : a.a.createElement(Bo, {
            onClick: r
          })), c && a.a.createElement(So, null, a.a.createElement(Yo, {
            onClick: n
          })), l && a.a.createElement(So, null, a.a.createElement(Jo, {
            onClick: o
          })));
        }
      );
    function $o() {
      var t = Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n"]);
      return $o = function () {
        return t;
      }
        ,
        t;
    }
    function ta() {
      var t = Object(r.a)(["\n  padding: 0 10px;\n  margin: 5px 0;\n  height: 30px;\n  font-size: 14px;\n  text-align: right;\n  outline: none;\n  border: none;\n  background-color: ", ";\n  color: ", ";\n"]);
      return ta = function () {
        return t;
      }
        ,
        t;
    }
    function ea() {
      var t = Object(r.a)(["\n  width: 50%;\n  margin-right: 20px;\n  font-size: 14px;\n"]);
      return ea = function () {
        return t;
      }
        ,
        t;
    }
    function na() {
      var t = Object(r.a)(["\n  display: flex;\n  flex-direction: ", ";\n"]);
      return na = function () {
        return t;
      }
        ,
        t;
    }
    function ra() {
      var t = Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  max-height: 210px;\n  margin-bottom: 20px;\n  overflow-y: auto;\n"]);
      return ra = function () {
        return t;
      }
        ,
        t;
    }
    var oa = c.c.div(ra())
      , aa = c.c.div(na(), (function (t) {
        return t.isMobile ? "column" : "row";
      }
      ))
      , ia = c.c.div(ea())
      , ca = c.c.input(ta(), (function (t) {
        return t.colors.textfieldBackground;
      }
      ), (function (t) {
        return t.colors.primaryText;
      }
      ))
      , la = c.c.div($o())
      , ua = Object(i.c)((function (t) {
        return {
          colors: t.theme
        };
      }
      ))((function (t) {
        var e = t.colors
          , n = t.params
          , r = t.setParams
          , o = t.isMobile
          , i = function (t, e, o) {
            var a = Number(t.target.value)
              , i = Object(_n.findIndex)(n, {
                id: e.id
              });
            -1 !== i && (void 0 === o ? function (t, e, o) {
              if (n) {
                var a = Object(u.a)(Object(u.a)({}, t), {}, {
                  value: o
                });
                r(Object(Vn.b)(n, e, a));
              }
            }(e, i, a) : function (t, e, o, a) {
              if (n) {
                var i = n[e].value
                  , c = Object(Vn.b)(i, o, a)
                  , l = Object(u.a)(Object(u.a)({}, t), {}, {
                    value: c
                  });
                r(Object(Vn.b)(n, e, l));
              }
            }(e, i, o, a));
          };
        return n ? a.a.createElement(oa, null, n.map((function (t) {
          return a.a.createElement(aa, {
            key: t.id,
            isMobile: o
          }, a.a.createElement(ia, null, t.title), Array.isArray(t.value) ? a.a.createElement(la, null, t.value.map((function (n, r) {
            return a.a.createElement(ca, {
              colors: e,
              type: "number",
              key: r,
              value: n,
              onChange: function (e) {
                return i(e, t, r);
              }
            });
          }
          ))) : a.a.createElement(ca, {
            colors: e,
            type: "number",
            value: t.value,
            onChange: function (e) {
              return i(e, t);
            }
          }));
        }
        ))) : null;
      }
      ));
    function sa() {
      var t = Object(r.a)(["Update"]);
      return sa = function () {
        return t;
      }
        ,
        t;
    }
    function da() {
      var t = Object(r.a)(["Add Indicator"]);
      return da = function () {
        return t;
      }
        ,
        t;
    }
    var pa = Object(i.c)((function (t) {
      return {
        colors: t.theme
      };
    }
    ))((function (t) {
      var e = t.item
        , n = t.itemVisability
        , r = t.onAdd
        , i = t.onUpdate
        , c = t.onRemove
        , l = t.onToggle
        , u = t.tab
        , s = t.colors
        , d = t.isMobile
        , p = Object(o.useState)([])
        , f = Object(v.a)(p, 2)
        , m = f[0]
        , b = f[1];
      Object(o.useEffect)((function () {
        e && b(e.params);
      }
      ), [e]);
      var h = [kn.tabAll, kn.tabFavorites].includes(u);
      return e ? a.a.createElement(jo, null, a.a.createElement(Eo, null, h ? e.name : "".concat(e.name, " (").concat(e.params.flatMap((function (t) {
        return t.value;
      }
      )).join(","), ")")), a.a.createElement(ua, {
        isMobile: d,
        params: m,
        setParams: b
      }), a.a.createElement(wo, null, a.a.createElement(Ko, {
        indicatorVisability: n,
        onRemove: c,
        onToggle: l,
        showHideEnabled: !h,
        trashEnabled: !h,
        editEnabled: !1
      }), h ? a.a.createElement(Co, {
        onClick: function () {
          return r(m);
        },
        colors: s
      }, Object(T.t)(da())) : a.a.createElement(Co, {
        onClick: function () {
          return i(m);
        },
        colors: s
      }, Object(T.t)(sa())))) : null;
    }
    ))
      , fa = n(39)
      , ma = function (t) {
        var e = t.indicators
          , n = t.menuItems
          , r = t.isLoggedIn
          , i = t.isMobile
          , c = t.setVisibility
          , l = Object(o.useState)(kn.tabAll)
          , s = Object(v.a)(l, 2)
          , d = s[0]
          , p = s[1]
          , f = Object(o.useState)(n[0])
          , m = Object(v.a)(f, 2)
          , b = m[0]
          , h = m[1]
          , g = Object(o.useState)(!1)
          , x = Object(v.a)(g, 2)
          , O = x[0]
          , y = x[1]
          , j = Object(o.useState)([])
          , E = Object(v.a)(j, 2)
          , w = E[0]
          , C = E[1]
          , k = Object(o.useContext)(Kp)
          , T = k.addIndicator
          , M = k.removeIndicator
          , S = k.updateIndicator
          , L = k.toggleIndicator
          , I = k.getIndicatorVisibility;
        Object(o.useEffect)((function () {
          C(fa.a.getFavouriteIndicators());
        }
        ), []);
        var _ = function (t) {
          switch (t) {
            case kn.tabAll:
              return n;
            case kn.tabFavorites:
              return w;
            case kn.tabInUse:
              return e;
            default:
              return n;
          }
        }
          , P = function (t) {
            h(t),
              t && y(I(t));
          }
          , A = _(d);
        return a.a.createElement(nn, {
          isMobile: i
        }, a.a.createElement(rn, {
          isMobile: i
        }, a.a.createElement(In, {
          active: d,
          setActive: function (t) {
            var e = _(t)
              , n = Object(v.a)(e, 1)[0];
            p(t),
              P(n);
          }
        }), a.a.createElement(po, {
          isLoggedIn: r,
          activeTab: d,
          menuItems: A,
          favorites: w,
          onFavoritesChange: function (t) {
            C(t),
              fa.a.setFavouriteIndicators(t);
          },
          item: b,
          onItem: P
        })), a.a.createElement(on, {
          isMobile: i
        }, a.a.createElement(pa, {
          isMobile: i,
          item: b,
          itemVisability: O,
          onAdd: function (t) {
            b && T(Object(u.a)(Object(u.a)({}, b), {}, {
              params: t
            })),
              b && i && c(!1);
          },
          onUpdate: function (t) {
            b && S(b, t);
          },
          onRemove: function () {
            b && (h(null),
              M(b));
          },
          onToggle: function () {
            b && (L(b),
              y(!O));
          },
          tab: d
        })));
      };
    function ba() {
      return (ba = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
        return t;
      }
      ).apply(this, arguments);
    }
    function ha(t, e) {
      if (null == t)
        return {};
      var n, r, o = function (t, e) {
        if (null == t)
          return {};
        var n, r, o = {}, a = Object.keys(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || (o[n] = t[n]);
        return o;
      }(t, e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]);
      }
      return o;
    }
    var ga = a.a.createElement("g", {
      fillRule: "evenodd"
    }, a.a.createElement("g", null, a.a.createElement("path", {
      fill: "current",
      d: "M11.5 11L14 15 9 15z",
      transform: "translate(-425 -23) translate(412 16) translate(14 8)"
    }), a.a.createElement("path", {
      fill: "current",
      d: "M2.5 0L5 4 0 4z",
      transform: "translate(-425 -23) translate(412 16) translate(14 8) rotate(-180 2.5 2)"
    }), a.a.createElement("path", {
      fill: "none",
      stroke: "current",
      d: "M0 14L3.454 7 9.983 8.975 14 0",
      transform: "translate(-425 -23) translate(412 16) translate(14 8)"
    })))
      , va = function (t) {
        var e = t.svgRef
          , n = t.title
          , r = ha(t, ["svgRef", "title"]);
        return a.a.createElement("svg", ba({
          width: 16,
          height: 16,
          viewBox: "0 0 16 16",
          ref: e
        }, r), n ? a.a.createElement("title", null, n) : null, ga);
      }
      , xa = a.a.forwardRef((function (t, e) {
        return a.a.createElement(va, ba({
          svgRef: e
        }, t));
      }
      ));
    n.p;
    function Oa() {
      var t = Object(r.a)(["INDICATORS"]);
      return Oa = function () {
        return t;
      }
        ,
        t;
    }
    var ya = Object(i.c)((function (t) {
      return {
        colors: t.theme,
        isMobile: t.registry.isMobile
      };
    }
    ))((function (t) {
      var e = t.timeframe
        , n = t.colors
        , r = t.indicators
        , i = t.isLoggedIn
        , c = t.isMobile
        , l = Object(o.useState)(!1)
        , u = Object(v.a)(l, 2)
        , s = u[0]
        , d = u[1]
        , p = r.length > 0
        , f = "tick" === e.period;
      return a.a.createElement(a.a.Fragment, null, a.a.createElement(lt, {
        colors: n,
        indicators: p,
        onClick: function () {
          return d(!0);
        },
        className: f ? "disabled" : "",
        isMobile: c
      }, a.a.createElement(xa, {
        fill: "#FFFFFF",
        stroke: "#FFFFFF"
      }), !c && a.a.createElement("div", {
        className: "btn__caption"
      }, Object(T.t)(Oa())), !c && p && a.a.createElement("div", {
        className: "enabled__indicators"
      }, r.length)), s && a.a.createElement(a.a.Fragment, null, a.a.createElement(Ot.a, {
        onClick: function () {
          return d(!1);
        }
      }), a.a.createElement(ma, {
        isMobile: c,
        indicators: r,
        menuItems: Gr,
        isLoggedIn: i,
        setVisibility: d
      })));
    }
    ))
      , ja = n(434);
    function Ea() {
      var t = Object(r.a)(["\n\theight: 2px;\n\twidth: 100%;\n\tmargin: auto;\n\tbackground-color: ", ";\n"]);
      return Ea = function () {
        return t;
      }
        ,
        t;
    }
    function wa() {
      var t = Object(r.a)(["\n\tdisplay: flex;\n\twidth: 16px;\n\theight: 16px;\n\tmargin-right: 8px;\n\tbackground-color: #263346;\n"]);
      return wa = function () {
        return t;
      }
        ,
        t;
    }
    function Ca() {
      var t = Object(r.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tmargin-right: 20px;\n\tcursor: pointer;\n"]);
      return Ca = function () {
        return t;
      }
        ,
        t;
    }
    function ka() {
      var t = Object(r.a)([""]);
      return ka = function () {
        return t;
      }
        ,
        t;
    }
    function Ta() {
      var t = Object(r.a)([""]);
      return Ta = function () {
        return t;
      }
        ,
        t;
    }
    var Ma = c.c.div(Ta())
      , Sa = (c.c.div(ka()),
        c.c.span(Ca()))
      , La = c.c.div(wa())
      , Ia = c.c.div(Ea(), (function (t) {
        return t.backgroundColor;
      }
      ));
    function _a() {
      var t = Object(r.a)(["\n\tposition: fixed;\n\ttop: ", "px;\n\tleft: ", "px;\n\tz-index: 42;\n\tdisplay: flex;\n\tmargin-top: ", ";\n\tbackground: rgb(22, 33, 46);\n\tbox-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),\n\t\t0 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]);
      return _a = function () {
        return t;
      }
        ,
        t;
    }
    var Pa = c.c.div(_a(), (function (t) {
      return t.y;
    }
    ), (function (t) {
      return t.x;
    }
    ), (function (t) {
      return t.y && t.x ? "0" : "50px";
    }
    ));
    function Aa() {
      var t = Object(r.a)(["\n\tmargin-top: 15px;\n\tborder: none;\n\toutline: none;\n\tbackground: transparent;\n\n\tdisplay: block;\n\tmin-width: 130px;\n\theight: 36px;\n\tline-height: 34px;\n\tfont-family: 'Roboto', sans-serif;\n\tfont-size: 12px;\n\tfont-weight: 500;\n\tletter-spacing: -0.07px;\n\ttext-align: center;\n\ttext-transform: uppercase;\n\tuser-select: none;\n\n\tborder-radius: 4px;\n\n\tcolor: #031420;\n\tbackground: #75f986;\n"]);
      return Aa = function () {
        return t;
      }
        ,
        t;
    }
    function za() {
      var t = Object(r.a)(["\n\tdisplay: flex;\n\tflex: 1;\n\talign-items: flex-end;\n\tjustify-content: flex-end;\n"]);
      return za = function () {
        return t;
      }
        ,
        t;
    }
    function Na() {
      var t = Object(r.a)(["\n\tmargin-bottom: 30px;\n\tfont-size: 20px;\n\tfont-weight: 700;\n\ttext-transform: uppercase;\n"]);
      return Na = function () {
        return t;
      }
        ,
        t;
    }
    function Da() {
      var t = Object(r.a)(["\n\tposition: fixed;\n\tz-index: 42;\n\tleft: calc(50% - 300px);\n\ttop: calc(50% - 220px);\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth: 380px;\n\theight: 280px;\n\tpadding: 30px;\n\tbackground: rgb(22, 33, 46);\n\tbox-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),\n\t\t0 2px 1px -1px rgba(0, 0, 0, 0.12);\n\tcolor: #8491a3;\n"]);
      return Da = function () {
        return t;
      }
        ,
        t;
    }
    var Ra = c.c.div(Da())
      , Fa = c.c.div(Na())
      , Ba = c.c.div(za())
      , Ha = c.c.button(Aa());
    function Va() {
      var t = Object(r.a)(["Update"]);
      return Va = function () {
        return t;
      }
        ,
        t;
    }
    var Wa = function (t) {
      var e = t.indicator
        , n = t.indicatorVisability
        , r = t.onToggle
        , i = t.onUpdate
        , c = t.onRemove
        , l = Object(o.useState)([])
        , u = Object(v.a)(l, 2)
        , s = u[0]
        , d = u[1];
      return Object(o.useEffect)((function () {
        d(e.params);
      }
      ), [e]),
        a.a.createElement(Ra, null, a.a.createElement(Fa, null, e.type), a.a.createElement(ua, {
          isMobile: !1,
          params: s,
          setParams: d
        }), a.a.createElement(Ba, null, a.a.createElement(Ko, {
          indicatorVisability: n,
          onRemove: c,
          onToggle: r,
          showHideEnabled: !0,
          trashEnabled: !0,
          editEnabled: !1
        }), a.a.createElement(Ha, {
          onClick: function () {
            return i(s);
          }
        }, Object(T.t)(Va()))));
    }
      , Ua = function (t) {
        var e = t.indicator
          , n = t.x
          , r = t.y
          , i = Object(o.useState)(!1)
          , c = Object(v.a)(i, 2)
          , l = c[0]
          , u = c[1]
          , s = Object(o.useState)(!1)
          , d = Object(v.a)(s, 2)
          , p = d[0]
          , f = d[1]
          , m = Object(o.useContext)(Kp)
          , b = m.removeIndicator
          , h = m.updateIndicator
          , g = m.toggleIndicator
          , x = m.getIndicatorVisibility;
        Object(o.useEffect)((function () {
          var t = x(e);
          f(t);
        }
        ), [e]);
        var O = function () {
          g(e),
            f(!p);
        };
        return a.a.createElement(Pa, {
          x: n,
          y: r
        }, a.a.createElement(Ko, {
          indicatorVisability: p,
          onRemove: function () {
            return b(e);
          },
          onToggle: O,
          onEdit: function () {
            return u(!0);
          },
          showHideEnabled: !0,
          trashEnabled: !0,
          editEnabled: !0
        }), l && a.a.createElement(Wa, {
          indicator: e,
          indicatorVisability: p,
          onToggle: O,
          onUpdate: function (t) {
            e && h(e, t);
          },
          onRemove: function () {
            e && b(e);
          }
        }), l && a.a.createElement(Ot.a, {
          onClick: function () {
            return u(!1);
          }
        }));
      }
      , Ga = function (t) {
        var e = t.indicator
          , n = t.withBrief
          , r = void 0 === n || n
          , i = t.x
          , c = t.y
          , l = Object(o.useState)(!1)
          , u = Object(v.a)(l, 2)
          , s = u[0]
          , d = u[1];
        return Object(o.useEffect)((function () {
          Object(_n.isNil)(r) || d(!r);
        }
        ), [e, r]),
          a.a.createElement(Ma, null, a.a.createElement(Sa, {
            onMouseEnter: function () {
              return d(!0);
            },
            onMouseLeave: function () {
              return d(!1);
            }
          }, e.color && a.a.createElement(La, null, a.a.createElement(Ia, {
            backgroundColor: e.color
          })), function (t) {
            return "".concat(t.name, " (").concat(t.params.flatMap((function (t) {
              return t.value;
            }
            )).join(","), ")");
          }(e), s && a.a.createElement(Ua, {
            indicator: e,
            x: i,
            y: c
          })));
      }
      , Ya = n(52);
    function qa() {
      var t = Object(r.a)(["PAYOUT"]);
      return qa = function () {
        return t;
      }
        ,
        t;
    }
    function Za() {
      var t = Object(r.a)(["\n\tdisplay: block;\n\tmargin-top: -13px;\n\theight: 14px;\n\tfont-size: 12px;\n\twhite-space: nowrap;\n\tcolor: ", ";\n"]);
      return Za = function () {
        return t;
      }
        ,
        t;
    }
    function Xa() {
      var t = Object(r.a)(["\n\tdisplay: block;\n\theight: 30px;\n\tline-height: 30px;\n\ttext-align: center;\n\tfont-size: 24px;\n\tfont-weight: 500;\n\tcolor: ", ";\n"]);
      return Xa = function () {
        return t;
      }
        ,
        t;
    }
    function Qa() {
      var t = Object(r.a)(["\n\tdisplay: block;\n\tfloat: left;\n\tmin-width: 45px;\n\tmax-width: 60px;\n\theight: 38px;\n\tmargin-left: 15px;\n\tmargin-right: 19px;\n\tposition: relative;\n"]);
      return Qa = function () {
        return t;
      }
        ,
        t;
    }
    var Ja = c.c.div(Qa())
      , Ka = c.c.span(Xa(), (function (t) {
        return t.colors.primary;
      }
      ))
      , $a = c.c.div(Za(), (function (t) {
        return t.colors.secondaryText;
      }
      ))
      , ti = Object(i.c)((function (t) {
        return {
          payout: t.trading.currentPayout
        };
      }
      ))((function (t) {
        return a.a.createElement(Ja, null, a.a.createElement(Ka, {
          colors: t.colors
        }, t.payout, "%"), a.a.createElement($a, {
          colors: t.colors
        }, Object(T.t)(qa())));
      }
      ))
      , ei = n(277);
    function ni() {
      return (ni = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
        return t;
      }
      ).apply(this, arguments);
    }
    function ri(t, e) {
      if (null == t)
        return {};
      var n, r, o = function (t, e) {
        if (null == t)
          return {};
        var n, r, o = {}, a = Object.keys(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || (o[n] = t[n]);
        return o;
      }(t, e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]);
      }
      return o;
    }
    var oi = a.a.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M0 0L5.5 6L11 0H0Z",
      fill: "white"
    })
      , ai = function (t) {
        var e = t.svgRef
          , n = t.title
          , r = ri(t, ["svgRef", "title"]);
        return a.a.createElement("svg", ni({
          width: 11,
          height: 6,
          viewBox: "0 0 11 6",
          fill: "none",
          ref: e
        }, r), n ? a.a.createElement("title", null, n) : null, oi);
      }
      , ii = a.a.forwardRef((function (t, e) {
        return a.a.createElement(ai, ni({
          svgRef: e
        }, t));
      }
      ))
      , ci = (n.p,
        n(274))
      , li = n(275)
      , ui = n.n(li)
      , si = n(49)
      , di = n(310)
      , pi = Object(i.c)((function (t) {
        return {
          isMobile: t.registry.isMobile,
          colors: t.theme,
          instrument: Object(si.h)(t),
          user: Object(si.j)(t)
        };
      }
      ))((function (t) {
        var e, n = t.isMobile, r = t.colors, o = t.instrument, i = t.onClick;
        return a.a.createElement(ei.e, {
          isMobile: n,
          onClick: i,
          colors: r
        }, a.a.createElement(rt, null, a.a.createElement(di.a, {
          isFav: (null === (e = t.user) || void 0 === e ? void 0 : e.favAssets.includes(t.instrument.instrumentID)) || !1,
          instrumentId: t.instrument.instrumentID
        })), a.a.createElement(ci.a, {
          klass: "asset_icon_big",
          alt: "Instrument ".concat(o.name),
          src: "".concat("", "/static/icons/instruments/").concat(o.instrumentID, ".svg"),
          placeholderSrc: ui.a
        }), a.a.createElement("span", null, o.name), a.a.createElement(ii, null));
      }
      ))
      , fi = n(6)
      , mi = n(46)
      , bi = n(311)
      , hi = Object(i.c)((function (t) {
        return {
          instruments: Object(si.o)(t),
          isCfdOptions: Object(mi.b)(t),
          cfdInstruments: t.trading.cfdOptionsInstruments
        };
      }
      ), {
        actionSelectInstrument: fi.G
      })((function (t) {
        var e = t.instruments
          , n = t.onSearch
          , r = t.actionSelectInstrument
          , i = t.onClose
          , c = t.isCfdOptions
          , l = t.cfdInstruments
          , u = Object(o.useState)(!1)
          , s = Object(v.a)(u, 2)
          , d = s[0]
          , p = s[1]
          , f = Object(o.useState)("")
          , m = Object(v.a)(f, 2)
          , b = m[0]
          , h = m[1]
          , g = Object(o.useState)(e)
          , x = Object(v.a)(g, 2)
          , O = x[0]
          , y = x[1];
        Object(o.useEffect)((function () {
          y(c ? l : e);
        }
        ), [c]);
        var j = Object(bi.a)(O, b);
        return console.log("Debug ~ file: InstrumentSearch.tsx ~ line 47 ~ searchedItems", j),
          Object(o.useEffect)((function () {
            var t = b.length >= 2;
            p(t),
              n(t);
          }
          ), [b]),
          a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
            className: "input__group"
          }, a.a.createElement(Yr.a, {
            width: "24",
            height: "24",
            fill: "#9fabbd"
          }), a.a.createElement("input", {
            type: "text",
            onChange: function (t) {
              return h(t.target.value);
            },
            value: b,
            placeholder: "Search..."
          })), d && j.map((function (t) {
            return a.a.createElement(ei.b, {
              isOpen: t.tradingHours.isOpen,
              key: t.instrumentID,
              onClick: function () {
                r(t.instrumentID),
                  i();
              }
            }, a.a.createElement(ci.a, {
              alt: t.name,
              src: "".concat("", "/static/icons/instruments/").concat(t.instrumentID, ".svg"),
              placeholderSrc: ui.a
            }), a.a.createElement("span", null, t.name));
          }
          )));
      }
      ))
      , gi = n(421)
      , vi = n(289)
      , xi = n(316)
      , Oi = n(8);
    function yi() {
      return (yi = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
        return t;
      }
      ).apply(this, arguments);
    }
    function ji(t, e) {
      if (null == t)
        return {};
      var n, r, o = function (t, e) {
        if (null == t)
          return {};
        var n, r, o = {}, a = Object.keys(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || (o[n] = t[n]);
        return o;
      }(t, e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]);
      }
      return o;
    }
    var Ei = a.a.createElement("path", {
      d: "M16 5.81285C16 5.95148 15.9167 6.10271 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0929 14.3825 13.0962 14.4455 13.0962 14.5274C13.0962 14.8425 12.9647 15 12.7019 15C12.5801 15 12.4519 14.9622 12.3173 14.8866L8 12.656L3.68269 14.8866C3.54167 14.9622 3.41346 15 3.29808 15C3.16346 15 3.0625 14.9543 2.99519 14.8629C2.92788 14.7716 2.89423 14.6597 2.89423 14.5274C2.89423 14.4896 2.90064 14.4266 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.0801282 6.09641 0 5.94518 0 5.81285C0 5.57971 0.179487 5.43478 0.538462 5.37807L5.36538 4.68809L7.52885 0.387524C7.65064 0.129175 7.80769 0 8 0C8.19231 0 8.34936 0.129175 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.8205 5.43478 16 5.57971 16 5.81285Z",
      fill: "#75F986"
    })
      , wi = function (t) {
        var e = t.svgRef
          , n = t.title
          , r = ji(t, ["svgRef", "title"]);
        return a.a.createElement("svg", yi({
          width: 16,
          height: 15,
          viewBox: "0 0 16 15",
          fill: "none",
          ref: e
        }, r), n ? a.a.createElement("title", null, n) : null, Ei);
      }
      , Ci = a.a.forwardRef((function (t, e) {
        return a.a.createElement(wi, yi({
          svgRef: e
        }, t));
      }
      ));
    n.p;
    function ki() {
      return (ki = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
        return t;
      }
      ).apply(this, arguments);
    }
    function Ti(t, e) {
      if (null == t)
        return {};
      var n, r, o = function (t, e) {
        if (null == t)
          return {};
        var n, r, o = {}, a = Object.keys(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || (o[n] = t[n]);
        return o;
      }(t, e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]);
      }
      return o;
    }
    var Mi = a.a.createElement("path", {
      d: "M11.7406 9.07106L11.4519 9.34781L11.5208 9.74174L12.269 14.0174L8.34427 11.9896L8 11.8118L7.65573 11.9896L3.73102 14.0174L4.47916 9.74174L4.5482 9.34716L4.25865 9.07035L1.10427 6.05482L5.47151 5.43054L5.85933 5.37511L6.03538 5.02514L8 1.11984L9.96462 5.02514L10.1407 5.37511L10.5285 5.43054L14.8882 6.05374L11.7406 9.07106ZM12.3448 14.5537C12.3447 14.5536 12.3449 14.5518 12.3455 14.5483C12.3452 14.5521 12.3449 14.5538 12.3448 14.5537Z",
      stroke: "white",
      strokeWidth: 1.5
    })
      , Si = function (t) {
        var e = t.svgRef
          , n = t.title
          , r = Ti(t, ["svgRef", "title"]);
        return a.a.createElement("svg", ki({
          width: 16,
          height: 15,
          viewBox: "0 0 16 15",
          fill: "none",
          ref: e
        }, r), n ? a.a.createElement("title", null, n) : null, Mi);
      }
      , Li = a.a.forwardRef((function (t, e) {
        return a.a.createElement(Si, ki({
          svgRef: e
        }, t));
      }
      ))
      , Ii = (n.p,
        n(10))
      , _i = Object(i.c)((function (t) {
        return {
          favoriteInstruments: Object(si.f)(t),
          isLoggedIn: Object(Ya.a)(t)
        };
      }
      ), {
        actionRemoveInstrumentFromFavorites: Oi.z,
        actionAddInstrumentToFavorites: Oi.s,
        actionShowModal: Ii.e
      })((function (t) {
        var e = t.instrumentId
          , n = t.isLoggedIn
          , r = t.favoriteInstruments
          , o = t.actionRemoveInstrumentFromFavorites
          , i = t.actionAddInstrumentToFavorites
          , c = t.actionShowModal
          , l = r.includes(e)
          , u = l ? Ci : Li;
        return a.a.createElement("span", {
          onClick: function (t) {
            return function (t) {
              (t.stopPropagation(),
                n) ? (l ? o : i)(e) : c(Ii.b.SESSION_EXPIRED);
            }(t);
          }
        }, a.a.createElement(u, null));
      }
      ))
      , Pi = n(298);
    function Ai() {
      var t = Object(r.a)(["payout"]);
      return Ai = function () {
        return t;
      }
        ,
        t;
    }
    function zi() {
      var t = Object(r.a)(["daily %"]);
      return zi = function () {
        return t;
      }
        ,
        t;
    }
    function Ni() {
      var t = Object(r.a)(["price"]);
      return Ni = function () {
        return t;
      }
        ,
        t;
    }
    var Di = Object(i.c)((function (t) {
      return {
        colors: t.theme,
        isMobile: t.registry.isMobile,
        selectedInstrument: Object(si.n)(t)
      };
    }
    ), {
      actionSelectInstrument: fi.G,
      actionAddInstrumentToTop: Oi.t
    })((function (t) {
      var e = t.subgroup
        , n = t.isMobile
        , r = t.isCfdOptions
        , o = t.selectedInstrument
        , i = t.colors
        , c = t.top
        , l = t.onClose
        , u = t.actionSelectInstrument
        , s = t.actionAddInstrumentToTop;
      console.log("Debug ~ file: InstrumentSubGroup.tsx ~ line 44 ~ subgroup", e);
      return a.a.createElement(ei.i, {
        top: c
      }, a.a.createElement(ei.j, {
        scroll: e.length > 5
      }, a.a.createElement("span", null, Object(T.t)(Ni())), !r && a.a.createElement("span", null, Object(T.t)(zi())), !r && a.a.createElement("span", null, Object(T.t)(Ai()))), a.a.createElement(gi.a, {
        width: 364,
        height: 182,
        rowCount: e.length,
        rowHeight: 35,
        rowRenderer: function (t) {
          var c = t.index
            , d = t.style
            , p = e[c];
          return a.a.createElement(ei.k, {
            key: p.instrumentID,
            onClick: function () {
              u(p.instrumentID),
                s(p.instrumentID),
                l();
            },
            active: o === p.instrumentID,
            isOpen: p.tradingHours.isOpen,
            style: d,
            colors: i,
            isMobile: n
          }, a.a.createElement(ci.a, {
            alt: p.name,
            src: "".concat("", "/static/icons/instruments/").concat(p.instrumentID, ".svg"),
            placeholderSrc: ui.a
          }), a.a.createElement("span", null, p.name), a.a.createElement(Pi.a, {
            instrumentId: p.instrumentID
          }), !r && a.a.createElement(vi.a, {
            instrumentID: p.instrumentID,
            colors: i
          }), !r && a.a.createElement(xi.a, {
            instrumentId: p.instrumentID,
            color: i.primary
          }), a.a.createElement(_i, {
            instrumentId: p.instrumentID
          }));
        },
        className: "scrollable"
      }));
    }
    ))
      , Ri = Object(i.c)((function (t) {
        return {
          colors: t.theme,
          selectedInstrument: Object(si.n)(t),
          isMobile: t.registry.isMobile
        };
      }
      ), {
        actionSelectInstrument: fi.G,
        actionAddInstrumentToTop: Oi.t
      })((function (t) {
        var e = t.selectedInstrument
          , n = t.subgroup
          , r = t.colors
          , o = t.isMobile
          , i = t.onClose
          , c = t.actionSelectInstrument
          , l = t.actionAddInstrumentToTop;
        return console.log("Debug ~ file: InstrumentSubGroupShort.tsx ~ line 34 ~ subgroup", n),
          a.a.createElement(ei.i, {
            className: "scrollable"
          }, n.map((function (t) {
            return a.a.createElement(ei.k, {
              key: t.instrumentID,
              onClick: function () {
                c(t.instrumentID),
                  l(t.instrumentID),
                  i();
              },
              active: e === t.instrumentID,
              isOpen: t.tradingHours.isOpen,
              colors: r,
              isMobile: o
            }, a.a.createElement(ci.a, {
              alt: t.name,
              src: "".concat("", "/static/icons/instruments/").concat(t.instrumentID, ".svg"),
              placeholderSrc: ui.a
            }), a.a.createElement("span", null, t.name));
          }
          )));
      }
      ));
    function Fi() {
      var t = Object(r.a)(["Stocks"]);
      return Fi = function () {
        return t;
      }
        ,
        t;
    }
    function Bi() {
      var t = Object(r.a)(["Indices"]);
      return Bi = function () {
        return t;
      }
        ,
        t;
    }
    function Hi() {
      var t = Object(r.a)(["Currencies"]);
      return Hi = function () {
        return t;
      }
        ,
        t;
    }
    function Vi() {
      var t = Object(r.a)(["Commodities"]);
      return Vi = function () {
        return t;
      }
        ,
        t;
    }
    function Wi() {
      var t = Object(r.a)(["Crypto"]);
      return Wi = function () {
        return t;
      }
        ,
        t;
    }
    var Ui, Gi = {
      "game-filter-crypto": Object(T.t)(Wi()),
      "game-filter-commodities": Object(T.t)(Vi()),
      "game-filter-forex": Object(T.t)(Hi()),
      "game-filter-indices": Object(T.t)(Bi()),
      "game-filter-stocks": Object(T.t)(Fi())
    }, Yi = Object(i.c)((function (t) {
      return {
        types: t.registry.data.types,
        isMobile: t.registry.isMobile,
        instruments: Object(si.o)(t),
        isCfdOptions: Object(mi.b)(t),
        cfdInstruments: t.trading.cfdOptionsInstruments
      };
    }
    ))((function (t) {
      var e = t.types
        , n = t.isMobile
        , r = t.isCfdOptions
        , i = t.instruments
        , c = t.cfdInstruments
        , l = t.onClose
        , u = Object(o.useState)({
          top: 0,
          group: []
        })
        , s = Object(v.a)(u, 2)
        , d = s[0]
        , p = s[1]
        , f = Object(o.useState)(null)
        , m = Object(v.a)(f, 2)
        , b = m[0]
        , h = m[1]
        , g = n ? Ri : Di
        , x = function (t, n) {
          var o;
          if (e[t] !== (null === (o = d.group[0]) || void 0 === o ? void 0 : o.type)) {
            var a = (r ? c : i).filter((function (n) {
              return n.type === e[t];
            }
            ));
            p({
              top: n.offsetTop - 32,
              group: a
            });
          }
        };
      return Object(o.useEffect)((function () {
        var t = Object.keys(e);
        t.unshift(t.pop()),
          h(t);
      }
      ), [e]),
        a.a.createElement(ei.c, null, null === b || void 0 === b ? void 0 : b.map((function (t) {
          return a.a.createElement(ei.b, {
            key: t,
            isOpen: !0,
            onMouseEnter: function (e) {
              var n = e.target;
              return x(t, n);
            },
            onClick: function (e) {
              var n = e.target;
              return x(t, n);
            }
          }, a.a.createElement(ne.a, {
            width: 24,
            height: 24,
            fill: "#FFFFFF",
            src: "".concat("", "/static/icons/instrument_types/").concat(t, ".svg")
          }), a.a.createElement("span", null, Gi[t]));
        }
        )), d.group.length > 0 && a.a.createElement(g, {
          isCfdOptions: r,
          subgroup: d.group,
          top: d.top,
          onClose: l
        }));
    }
    )), qi = function (t) {
      var e = t.onClose
        , n = Object(o.useState)(!1)
        , r = Object(v.a)(n, 2)
        , i = r[0]
        , c = r[1];
      return a.a.createElement(a.a.Fragment, null, a.a.createElement(Ot.a, {
        onClick: e
      }), a.a.createElement(ei.h, null, a.a.createElement(hi, {
        onSearch: c,
        onClose: e
      }), !i && a.a.createElement(ei.g, null, a.a.createElement(Yi, {
        onClose: e
      }))));
    }, Zi = n(20);
    function Xi() {
      var t = Object(r.a)(["Switch to Advanced Chart"]);
      return Xi = function () {
        return t;
      }
        ,
        t;
    }
    function Qi() {
      var t = Object(r.a)(["Switch to Trading View"]);
      return Qi = function () {
        return t;
      }
        ,
        t;
    }
    function Ji() {
      var t = Object(r.a)(["Switch to Normal View"]);
      return Ji = function () {
        return t;
      }
        ,
        t;
    }
    function Ki() {
      var t = Object(r.a)(["Advanced Chart"]);
      return Ki = function () {
        return t;
      }
        ,
        t;
    }
    function $i() {
      var t = Object(r.a)(["Trading View"]);
      return $i = function () {
        return t;
      }
        ,
        t;
    }
    function tc() {
      var t = Object(r.a)(["Basic Chart"]);
      return tc = function () {
        return t;
      }
        ,
        t;
    }
    function ec(t, e) {
      var n = Object(_n.findIndex)(t.allowedLibraries, (function (t) {
        return t === e;
      }
      ));
      return n === t.allowedLibraries.length - 1 ? t.allowedLibraries[0] : t.allowedLibraries[n + 1];
    }
    function nc(t) {
      switch (t) {
        case Ui.Basic:
          return Object(T.t)(Ji());
        case Ui.LightWeight:
          return Object(T.t)(Qi());
        case Ui.TradingView:
          return Object(T.t)(Xi());
      }
    }
    !function (t) {
      t.Basic = "1",
        t.LightWeight = "2",
        t.TradingView = "3";
    }(Ui || (Ui = {}));
    var rc = Object(i.c)((function (t) {
      return {
        chartLibraryConfig: t.registry.data.partnerConfig.chartLibraryConfig,
        currentChartType: t.registry.currentChartType
      };
    }
    ), {
      actionChangeChartType: Zi.h
    })((function (t) {
      var e = Object(o.useState)(!1)
        , n = Object(v.a)(e, 2)
        , r = n[0]
        , i = n[1];
      return a.a.createElement(ei.f, null, a.a.createElement(pi, {
        onClick: function () {
          return i(!0);
        }
      }), r && a.a.createElement(qi, {
        onClose: function () {
          return i(!1);
        }
      }));
    }
    ));
    function oc() {
      return (oc = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
        return t;
      }
      ).apply(this, arguments);
    }
    function ac(t, e) {
      if (null == t)
        return {};
      var n, r, o = function (t, e) {
        if (null == t)
          return {};
        var n, r, o = {}, a = Object.keys(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || (o[n] = t[n]);
        return o;
      }(t, e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]);
      }
      return o;
    }
    var ic = a.a.createElement("circle", {
      cx: 8,
      cy: 8,
      r: 7.5,
      stroke: "#8191A5"
    })
      , cc = function (t) {
        var e = t.svgRef
          , n = t.title
          , r = ac(t, ["svgRef", "title"]);
        return a.a.createElement("svg", oc({
          width: 16,
          height: 16,
          viewBox: "0 0 16 16",
          fill: "none",
          ref: e
        }, r), n ? a.a.createElement("title", null, n) : null, ic, a.a.createElement("path", {
          style: {
            transform: "translate(6px, 3px)"
          },
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M3.66954 2.33691C3.44923 2.5459 3.18391 2.65039 2.87356 2.65039C2.56322 2.65039 2.29693 2.5459 2.07471 2.33691C1.85249 2.12793 1.74138 1.875 1.74138 1.57812C1.74138 1.28125 1.85249 1.02734 2.07471 0.816406C2.29693 0.605469 2.56322 0.5 2.87356 0.5C3.18391 0.5 3.44923 0.605469 3.66954 0.816406C3.88985 1.02734 4 1.28125 4 1.57812C4 1.875 3.88985 2.12793 3.66954 2.33691ZM2.84483 9.6084C2.61877 9.68848 2.35632 9.72852 2.05747 9.72852C1.5977 9.72852 1.24042 9.61426 0.985632 9.38574C0.730843 9.15723 0.603448 8.86719 0.603448 8.51562C0.603448 8.37891 0.613027 8.23926 0.632184 8.09668C0.651341 7.9541 0.681992 7.79297 0.724138 7.61328L1.1954 5.90234C1.23755 5.73828 1.27299 5.58301 1.30172 5.43652C1.33046 5.29004 1.34483 5.15625 1.34483 5.03516C1.34483 4.81641 1.30077 4.66406 1.21264 4.57812C1.12452 4.49219 0.955939 4.44922 0.706897 4.44922C0.584291 4.44922 0.458812 4.46875 0.33046 4.50781C0.202107 4.54688 0.091954 4.58398 0 4.61914L0.126437 4.0918C0.436782 3.96289 0.733716 3.85254 1.01724 3.76074C1.30077 3.66895 1.56897 3.62305 1.82184 3.62305C2.27778 3.62305 2.62931 3.73535 2.87644 3.95996C3.12356 4.18457 3.24713 4.47656 3.24713 4.83594C3.24713 4.91016 3.23851 5.04102 3.22126 5.22852C3.20402 5.41602 3.17241 5.58789 3.12644 5.74414L2.65517 7.44922C2.61686 7.58594 2.58238 7.74219 2.55172 7.91797C2.52107 8.09375 2.50575 8.22656 2.50575 8.31641C2.50575 8.54297 2.55556 8.69727 2.65517 8.7793C2.75479 8.86133 2.9272 8.90234 3.17241 8.90234C3.28736 8.90234 3.41762 8.88184 3.56322 8.84082C3.70881 8.7998 3.81418 8.76367 3.87931 8.73242L3.75287 9.25977C3.37356 9.41211 3.07088 9.52832 2.84483 9.6084Z",
          fill: "#8191A5"
        }));
      }
      , lc = a.a.forwardRef((function (t, e) {
        return a.a.createElement(cc, oc({
          svgRef: e
        }, t));
      }
      ));
    n.p;
    function uc() {
      var t = Object(r.a)(["\n\tposition: absolute;\n\tdisplay: flex;\n\tfont-size: 14px;\n\tfont-weight: 900;\n\tcolor: #ffffff;\n\ttop: 46px;\n"]);
      return uc = function () {
        return t;
      }
        ,
        t;
    }
    var sc = c.c.div(uc())
      , dc = n(78);
    function pc() {
      var t = Object(r.a)(["Opening hours"]);
      return pc = function () {
        return t;
      }
        ,
        t;
    }
    function fc() {
      var t = Object(r.a)(["Precision"]);
      return fc = function () {
        return t;
      }
        ,
        t;
    }
    n(366);
    var mc = Object(i.c)((function (t) {
      return {
        instrument: Object(si.h)(t)
      };
    }
    ))((function (t) {
      var e = t.instrument
        , n = Object(o.useRef)(null)
        , r = Object(o.useState)({
          top: 0,
          left: 0,
          maxHeight: 0
        })
        , i = Object(v.a)(r, 2)
        , c = i[0]
        , l = i[1]
        , u = e.name
        , s = e.futureExpirationDate
        , d = e.type
        , p = e.precision
        , f = e.tradingHours;
      return Object(o.useEffect)((function () {
        var t, e = null === (t = n.current) || void 0 === t ? void 0 : t.getBoundingClientRect();
        if (e) {
          var r = e.top + e.height
            , o = document.body.clientHeight - r - 50;
          l({
            top: r,
            left: e.left,
            maxHeight: o
          });
        }
      }
      ), [n]),
        a.a.createElement(sc, {
          ref: n,
          "data-tip": "",
          "data-for": "info"
        }, a.a.createElement("span", null, u), 4 === d && a.a.createElement("span", null, s), a.a.createElement(at, null, a.a.createElement(lc, null)), a.a.createElement(M.a, {
          overridePosition: function () {
            return {
              top: c.top,
              left: c.left
            };
          },
          id: "info",
          place: "left",
          className: "react-tooltip",
          clickable: !0
        }, a.a.createElement(ut, {
          className: "instrument-container",
          style: {
            maxHeight: "".concat(c.maxHeight, "px")
          }
        }, a.a.createElement(st, null, a.a.createElement(dt, null, u), a.a.createElement(pt, null, Object(T.t)(fc()), ":"), a.a.createElement(pt, null, Object(T.t)(pc()), ":")), a.a.createElement(st, null, a.a.createElement(pt, null, "\xa0"), a.a.createElement(pt, null, p), a.a.createElement(pt, {
          className: "opening-hours scrollable"
        }, f[0].tradingHourRanges.map((function (t) {
          return a.a.createElement(pt, {
            key: "".concat(t.from, "-").concat(t.to)
          }, dc.a.format(t.from, "d-MMM HH:mm"), " ", "-", " ", dc.a.format(t.to, "d-MMM HH:mm"));
        }
        )))))));
    }
    ));
    function bc() {
      var t = Object(r.a)(["Multiplier"]);
      return bc = function () {
        return t;
      }
        ,
        t;
    }
    function hc() {
      var t = Object(r.a)(["Price"]);
      return hc = function () {
        return t;
      }
        ,
        t;
    }
    function gc() {
      var t = Object(r.a)(["Payout"]);
      return gc = function () {
        return t;
      }
        ,
        t;
    }
    function vc() {
      var t = Object(r.a)(["\n  color: #8491a3;\n  text-align: center;\n  font-size: 18px;\n"]);
      return vc = function () {
        return t;
      }
        ,
        t;
    }
    function xc() {
      var t = Object(r.a)(["\n  color: #8491a3;\n  font-size: 9px;\n  line-height: 11px;\n"]);
      return xc = function () {
        return t;
      }
        ,
        t;
    }
    function Oc() {
      var t = Object(r.a)(["\n  height: 100%;\n  width: 47px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 10px;\n  background: #06141f;\n  border: 1px solid ", ";\n  box-sizing: border-box;\n  border-radius: 4px;\n"]);
      return Oc = function () {
        return t;
      }
        ,
        t;
    }
    function yc() {
      var t = Object(r.a)(["\n  width: 47px;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);
      return yc = function () {
        return t;
      }
        ,
        t;
    }
    function jc() {
      var t = Object(r.a)(["\n  box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.21),\n    0px 41.7776px 33.4221px rgba(0, 0, 0, 0.150959),\n    0px 22.3363px 17.869px rgba(0, 0, 0, 0.125183),\n    0px 12.5216px 10.0172px rgba(0, 0, 0, 0.105),\n    0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0848175),\n    0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0590406);\n\n  .scrollable {\n    & > div {\n      border: 1px solid #263346;\n\n      &:first-child {\n        border-top-left-radius: 4px;\n        border-top-right-radius: 4px;\n      }\n\n      &:last-child {\n        border-bottom-left-radius: 4px;\n        border-bottom-right-radius: 4px;\n      }\n\n      &.active {\n        border: 1px solid ", ";\n      }\n    }\n  }\n"]);
      return jc = function () {
        return t;
      }
        ,
        t;
    }
    var Ec = c.c.div(jc(), (function (t) {
      return t.colors.primary;
    }
    ))
      , wc = c.c.div(yc())
      , Cc = c.c.div(Oc(), (function (t) {
        return t.colors.panelBorder;
      }
      ))
      , kc = c.c.span(xc())
      , Tc = c.c.div(vc())
      , Mc = Object(i.c)((function (t) {
        return {
          cfdSentimentOptions: t.trading.cfdSentimentOptions,
          selectedCfdSentimentOption: t.trading.selectedCfdSentimentOption,
          isMobile: t.registry.isMobile
        };
      }
      ), {
        actionSetCfdSentimentSelectedOption: fi.L
      })((function (t) {
        var e = t.colors
          , n = t.cfdSentimentOptions
          , r = t.selectedCfdSentimentOption
          , i = t.actionSetCfdSentimentSelectedOption
          , c = t.isMobile
          , l = Object(o.useState)(!1)
          , u = Object(v.a)(l, 2)
          , s = u[0]
          , d = u[1]
          , p = function (t) {
            switch (t) {
              case "Payout":
                return Object(T.t)(gc());
              case "Price":
                return Object(T.t)(hc());
              case "Multiplier":
                return Object(T.t)(bc());
              default:
                return "";
            }
          };
        return a.a.createElement(Ec, {
          colors: e,
          className: "switcher-container"
        }, a.a.createElement(Cc, {
          colors: e,
          onClick: function () {
            return d(!0);
          }
        }, a.a.createElement(kc, null, p(null === r || void 0 === r ? void 0 : r.label), a.a.createElement(Tc, null, "\u25be"))), a.a.createElement(S.a, {
          isMobile: c,
          colors: e,
          style: {
            display: s ? "" : "none",
            width: 47,
            marginTop: "-57px"
          }
        }, a.a.createElement("div", {
          className: "scrollable"
        }, null === n || void 0 === n ? void 0 : n.map((function (t) {
          return a.a.createElement(wc, {
            key: t.id,
            colors: e,
            onClick: function () {
              return function (t) {
                d(!1),
                  i(t);
              }(t);
            },
            className: (null === r || void 0 === r ? void 0 : r.id) === t.id ? "active" : ""
          }, a.a.createElement(kc, null, p(t.label)));
        }
        )))), s && a.a.createElement(Ot.a, {
          onClick: function () {
            return d(!1);
          }
        }));
      }
      ))
      , Sc = n(27);
    function Lc() {
      var t = Object(r.a)([""]);
      return Lc = function () {
        return t;
      }
        ,
        t;
    }
    function Ic() {
      var t = Object(r.a)(["\n          @media (orientation: landscape) {\n            margin-left: 10px !important;\n          }\n        "]);
      return Ic = function () {
        return t;
      }
        ,
        t;
    }
    function _c() {
      var t = Object(r.a)(["\n  margin-left: auto;\n  border-radius: 4px;\n  border: 1px solid #263346;\n\n  ", "\n"]);
      return _c = function () {
        return t;
      }
        ,
        t;
    }
    var Pc = c.c.div(_c(), (function (t) {
      return t.isMobile && Object(Vn.a)(t.isMobile) ? Object(c.b)(Ic()) : Object(c.b)(Lc());
    }
    ));
    function Ac() {
      var t = Object(r.a)(["\n\tposition: absolute;\n\tz-index: 41;\n\tborder-radius: 4px;\n\tborder: 1px solid ", ";\n"]);
      return Ac = function () {
        return t;
      }
        ,
        t;
    }
    var zc = c.c.div(Ac(), (function (t) {
      return t.colors.panelBorder;
    }
    ));
    function Nc() {
      return (Nc = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
        return t;
      }
      ).apply(this, arguments);
    }
    function Dc(t, e) {
      if (null == t)
        return {};
      var n, r, o = function (t, e) {
        if (null == t)
          return {};
        var n, r, o = {}, a = Object.keys(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || (o[n] = t[n]);
        return o;
      }(t, e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]);
      }
      return o;
    }
    var Rc = a.a.createElement("path", {
      d: "M10 0C15.52 0 20 4.48 20 10C20 15.52 15.52 20 10 20C4.48 20 0 15.52 0 10C0 4.48 4.48 0 10 0ZM10 18C14.42 18 18 14.42 18 10C18 5.58 14.42 2 10 2C5.58 2 2 5.58 2 10C2 14.42 5.58 18 10 18ZM13.536 5.05L14.95 6.464L10 11.414L8.586 10L13.536 5.05Z",
      fill: "currentColor"
    })
      , Fc = function (t) {
        var e = t.svgRef
          , n = t.title
          , r = Dc(t, ["svgRef", "title"]);
        return a.a.createElement("svg", Nc({
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          fill: "none",
          ref: e
        }, r), n ? a.a.createElement("title", null, n) : null, Rc);
      }
      , Bc = a.a.forwardRef((function (t, e) {
        return a.a.createElement(Fc, Nc({
          svgRef: e
        }, t));
      }
      ));
    n.p;
    function Hc() {
      return (Hc = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
        return t;
      }
      ).apply(this, arguments);
    }
    function Vc(t, e) {
      if (null == t)
        return {};
      var n, r, o = function (t, e) {
        if (null == t)
          return {};
        var n, r, o = {}, a = Object.keys(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || (o[n] = t[n]);
        return o;
      }(t, e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]);
      }
      return o;
    }
    var Wc = a.a.createElement("rect", {
      opacity: .3,
      x: 12,
      width: 14,
      height: 2,
      fill: "#8491A3"
    })
      , Uc = a.a.createElement("rect", {
        opacity: .3,
        x: 12,
        y: 4,
        width: 14,
        height: 2,
        fill: "#8491A3"
      })
      , Gc = a.a.createElement("rect", {
        x: 12,
        y: 8,
        width: 14,
        height: 2,
        fill: "currentColor"
      })
      , Yc = a.a.createElement("rect", {
        x: 12,
        y: 12,
        width: 14,
        height: 2,
        fill: "currentColor"
      })
      , qc = a.a.createElement("rect", {
        x: 12,
        y: 16,
        width: 14,
        height: 2,
        fill: "currentColor"
      })
      , Zc = a.a.createElement("path", {
        d: "M10 9L2.5 13.3301L2.5 4.66987L10 9Z",
        fill: "currentColor"
      })
      , Xc = function (t) {
        var e = t.svgRef
          , n = t.title
          , r = Vc(t, ["svgRef", "title"]);
        return a.a.createElement("svg", Hc({
          width: 26,
          height: 18,
          viewBox: "0 0 26 18",
          fill: "none",
          ref: e
        }, r), n ? a.a.createElement("title", null, n) : null, Wc, Uc, Gc, Yc, qc, Zc);
      }
      , Qc = a.a.forwardRef((function (t, e) {
        return a.a.createElement(Xc, Hc({
          svgRef: e
        }, t));
      }
      ));
    n.p;
    function Jc() {
      var t = Object(r.a)(["\n\tfont-size: 12px;\n\tfont-weight: 700;\n"]);
      return Jc = function () {
        return t;
      }
        ,
        t;
    }
    function Kc() {
      var t = Object(r.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tgap: 10px;\n\twidth: 110px;\n\theight: 40px;\n\tbackground: ", ";\n\tcolor: ", ";\n\tcursor: ", ";\n\topacity: ", ";\n\tpointer-events: ", ";\n"]);
      return Kc = function () {
        return t;
      }
        ,
        t;
    }
    var $c = c.c.div(Kc(), (function (t) {
      return t.colors.background;
    }
    ), (function (t) {
      return t.isSelected ? t.colors.payout : t.colors.secondaryText;
    }
    ), (function (t) {
      return t.isDisabled ? "not-allowed" : "cursor";
    }
    ), (function (t) {
      return t.isDisabled ? "0.3" : "1";
    }
    ), (function (t) {
      return t.isDisabled ? "none" : "unset";
    }
    ))
      , tl = c.c.span(Jc());
    function el() {
      var t = Object(r.a)(["High/Low"]);
      return el = function () {
        return t;
      }
        ,
        t;
    }
    function nl() {
      var t = Object(r.a)(["Options"]);
      return nl = function () {
        return t;
      }
        ,
        t;
    }
    var rl = function (t) {
      var e = t.colors
        , n = t.isSelected
        , r = t.isDisabled
        , o = t.productType
        , i = t.onClick
        , c = t.isShowList
        , l = void 0 !== c && c;
      return a.a.createElement($c, {
        colors: e,
        isSelected: n,
        isDisabled: r,
        onClick: function () {
          return i(o);
        }
      }, o === Sc.a.highLow && a.a.createElement(Bc, null), o === Sc.a.cfdOptions && a.a.createElement(Qc, null), a.a.createElement(tl, null, o === Sc.a.cfdOptions ? Object(T.t)(nl()) : Object(T.t)(el())), !l && a.a.createElement("span", {
        style: {
          color: "white"
        }
      }, "\u25be"));
    }
      , ol = function (t) {
        var e = t.colors
          , n = t.productTypes
          , r = t.selectedProductType
          , o = t.onClose
          , i = t.onClick;
        return a.a.createElement(a.a.Fragment, null, a.a.createElement(Ot.a, {
          onClick: o
        }), a.a.createElement(zc, {
          colors: e
        }, n.map((function (t) {
          return a.a.createElement(rl, {
            colors: e,
            isDisabled: !1,
            isSelected: t === r,
            onClick: i,
            productType: t,
            isShowList: !0
          });
        }
        ))));
      }
      , al = Object(i.c)((function (t) {
        return {
          theme: t.theme,
          productTypes: t.trading.productTypes,
          selectedProductType: t.trading.selectedProductType,
          isCfdOptionsVisible: Object(mi.c)(t),
          isMobile: t.registry.isMobile
        };
      }
      ), {
        actionSetProductType: fi.P,
        actionSetDirection: fi.N
      })((function (t) {
        var e = t.theme
          , n = t.selectedProductType
          , r = t.productTypes
          , i = t.isCfdOptionsVisible
          , c = t.actionSetProductType
          , l = t.actionSetDirection
          , u = t.isMobile
          , s = Object(o.useState)(!1)
          , d = Object(v.a)(s, 2)
          , p = d[0]
          , f = d[1]
          , m = r.filter((function (t) {
            return !!i || t !== Sc.a.cfdOptions;
          }
          ));
        return a.a.createElement(Pc, {
          className: "panel-select",
          isMobile: u
        }, a.a.createElement(rl, {
          colors: e,
          onClick: function () {
            return f(!0);
          },
          productType: n,
          isSelected: !0,
          isDisabled: m.length <= 1
        }), p && m.length > 0 && a.a.createElement(ol, {
          colors: e,
          productTypes: m.filter((function (t) {
            return t !== n;
          }
          )),
          selectedProductType: n,
          onClose: function () {
            return f(!1);
          },
          onClick: function (t) {
            return function (t) {
              f(!1),
                c(t),
                l(0);
            }(t);
          }
        }));
      }
      ));
    function il() {
      var t = Object(r.a)(["Heikin Ashi"]);
      return il = function () {
        return t;
      }
        ,
        t;
    }
    function cl() {
      var t = Object(r.a)(["OHLC"]);
      return cl = function () {
        return t;
      }
        ,
        t;
    }
    function ll() {
      var t = Object(r.a)(["Area"]);
      return ll = function () {
        return t;
      }
        ,
        t;
    }
    function ul() {
      var t = Object(r.a)(["Line"]);
      return ul = function () {
        return t;
      }
        ,
        t;
    }
    function sl() {
      var t = Object(r.a)(["Candlestick"]);
      return sl = function () {
        return t;
      }
        ,
        t;
    }
    function dl() {
      var t = Object(r.a)(["Switch"]);
      return dl = function () {
        return t;
      }
        ,
        t;
    }
    function pl() {
      var t = Object(r.a)(["Indicators only available on timeframes  of 1 min and above."]);
      return pl = function () {
        return t;
      }
        ,
        t;
    }
    function fl() {
      var t = Object(r.a)(["Chart drawing tools list"]);
      return fl = function () {
        return t;
      }
        ,
        t;
    }
    function ml() {
      var t = Object(r.a)(["Chart types"]);
      return ml = function () {
        return t;
      }
        ,
        t;
    }
    function bl() {
      var t = Object(r.a)(["Chart timeframes"]);
      return bl = function () {
        return t;
      }
        ,
        t;
    }
    function hl() {
      var t = Object(r.a)(["1 Week"]);
      return hl = function () {
        return t;
      }
        ,
        t;
    }
    function gl() {
      var t = Object(r.a)(["1w"]);
      return gl = function () {
        return t;
      }
        ,
        t;
    }
    function vl() {
      var t = Object(r.a)(["1 Day"]);
      return vl = function () {
        return t;
      }
        ,
        t;
    }
    function xl() {
      var t = Object(r.a)(["1d"]);
      return xl = function () {
        return t;
      }
        ,
        t;
    }
    function Ol() {
      var t = Object(r.a)(["4 Hours"]);
      return Ol = function () {
        return t;
      }
        ,
        t;
    }
    function yl() {
      var t = Object(r.a)(["4h"]);
      return yl = function () {
        return t;
      }
        ,
        t;
    }
    function jl() {
      var t = Object(r.a)(["2 Hours"]);
      return jl = function () {
        return t;
      }
        ,
        t;
    }
    function El() {
      var t = Object(r.a)(["2h"]);
      return El = function () {
        return t;
      }
        ,
        t;
    }
    function wl() {
      var t = Object(r.a)(["1 Hour"]);
      return wl = function () {
        return t;
      }
        ,
        t;
    }
    function Cl() {
      var t = Object(r.a)(["1h"]);
      return Cl = function () {
        return t;
      }
        ,
        t;
    }
    function kl() {
      var t = Object(r.a)(["30 Minutes"]);
      return kl = function () {
        return t;
      }
        ,
        t;
    }
    function Tl() {
      var t = Object(r.a)(["30m"]);
      return Tl = function () {
        return t;
      }
        ,
        t;
    }
    function Ml() {
      var t = Object(r.a)(["15 Minutes"]);
      return Ml = function () {
        return t;
      }
        ,
        t;
    }
    function Sl() {
      var t = Object(r.a)(["15m"]);
      return Sl = function () {
        return t;
      }
        ,
        t;
    }
    function Ll() {
      var t = Object(r.a)(["5 Minutes"]);
      return Ll = function () {
        return t;
      }
        ,
        t;
    }
    function Il() {
      var t = Object(r.a)(["5m"]);
      return Il = function () {
        return t;
      }
        ,
        t;
    }
    function _l() {
      var t = Object(r.a)(["2 Minutes"]);
      return _l = function () {
        return t;
      }
        ,
        t;
    }
    function Pl() {
      var t = Object(r.a)(["2m"]);
      return Pl = function () {
        return t;
      }
        ,
        t;
    }
    function Al() {
      var t = Object(r.a)(["1 Minute"]);
      return Al = function () {
        return t;
      }
        ,
        t;
    }
    function zl() {
      var t = Object(r.a)(["1m"]);
      return zl = function () {
        return t;
      }
        ,
        t;
    }
    function Nl() {
      var t = Object(r.a)(["Tick"]);
      return Nl = function () {
        return t;
      }
        ,
        t;
    }
    n(367);
    var Dl = function (t, e) {
      var n = t.currentTarget.getBoundingClientRect();
      return {
        type: e,
        top: n.bottom,
        left: n.left
      };
    }
      , Rl = Object(i.c)((function (t) {
        return {
          colors: t.theme,
          isLoggedIn: Object(Ya.a)(t),
          isMobile: t.registry.isMobile,
          isCfdOptions: Object(mi.b)(t),
          lang: t.registry.data.lang,
          chartLibraryConfig: t.registry.data.partnerConfig.chartLibraryConfig,
          currentChartType: t.registry.currentChartType
        };
      }
      ), {
        actionChangeChartType: Zi.h
      })((function (t) {
        var e, n, r, i, c = Object(o.useState)({
          type: 0
        }), l = Object(v.a)(c, 2), s = l[0], d = l[1], p = Object(o.useState)(t.periodOptions), f = Object(v.a)(p, 2), m = f[0], b = f[1], h = Object(o.useState)(t.timeframe), g = Object(v.a)(h, 2), x = g[0], O = g[1], y = function (t) {
          switch (t) {
            case "Tick":
              return Object(T.t)(Nl());
            case "1m":
              return Object(T.t)(zl());
            case "1 Minute":
              return Object(T.t)(Al());
            case "2m":
              return Object(T.t)(Pl());
            case "2 Minutes":
              return Object(T.t)(_l());
            case "5m":
              return Object(T.t)(Il());
            case "5 Minutes":
              return Object(T.t)(Ll());
            case "15m":
              return Object(T.t)(Sl());
            case "15 Minutes":
              return Object(T.t)(Ml());
            case "30m":
              return Object(T.t)(Tl());
            case "30 Minutes":
              return Object(T.t)(kl());
            case "1h":
              return Object(T.t)(Cl());
            case "1 Hour":
              return Object(T.t)(wl());
            case "2h":
              return Object(T.t)(El());
            case "2 Hours":
              return Object(T.t)(jl());
            case "4h":
              return Object(T.t)(yl());
            case "4 Hours":
              return Object(T.t)(Ol());
            case "1d":
              return Object(T.t)(xl());
            case "1 Day":
              return Object(T.t)(vl());
            case "1w":
              return Object(T.t)(gl());
            case "1 Week":
              return Object(T.t)(hl());
            default:
              return t;
          }
        };
        Object(o.useEffect)((function () {
          O(Object(u.a)(Object(u.a)({}, x), {}, {
            periodLabel: y(x.periodLabelEnglish) || "",
            periodToolTip: y(x.periodToolTipEnglish) || ""
          })),
            function () {
              var t = m.map((function (t) {
                var e = y(t.periodLabelEnglish)
                  , n = y(t.periodToolTipEnglish);
                return Object(u.a)(Object(u.a)({}, t), {}, {
                  periodLabel: e,
                  periodToolTip: n
                });
              }
              ));
              b(t);
            }();
        }
        ), [t.lang]),
          Object(o.useEffect)((function () {
            Object(_n.isEqual)(x, t.timeframe) || O(t.timeframe);
          }
          ), [t.timeframe]);
        var j = function (e) {
          d({
            type: 0
          }),
            t.onChangeChartType(e),
            w && ["candlestick", "ohlc", "heikinashi"].includes(e) && t.onChangeTimeframe(L[1]);
        }
          , E = function (e) {
            d({
              type: 0
            }),
              t.onChangeTimeframe(e);
          }
          , w = "tick" === x.period
          , C = t.indicators
          , k = t.colors
          , L = t.isCfdOptions || ["candlestick", "ohlc", "heikinashi"].includes(t.chartType) ? m.filter((function (t) {
            return t.supportedOnCandleChartType;
          }
          )) : m.filter((function (t) {
            return t.supportedOnLineChartType;
          }
          ))
          , I = function (e) {
            t.currentChartType === Ui.Basic && "heikinashi" === t.chartType && fa.a.setChartType("area"),
              t.actionChangeChartType(e);
          };
        return a.a.createElement(a.a.Fragment, null, a.a.createElement($, {
          className: "chart-controls-panel"
        }, a.a.createElement(et, null, a.a.createElement(nt, null, a.a.createElement(rc, {
          colors: k,
          isMobile: t.isMobile
        }), !t.isMobile && a.a.createElement(mc, null), !t.isCfdOptions && t.currentChartType === Ui.Basic && a.a.createElement(ti, {
          colors: k
        }), a.a.createElement(ot, null, a.a.createElement(tt, null, C.map((function (t, e) {
          return a.a.createElement(Ga, {
            key: e,
            indicator: t
          });
        }
        ))), t.isMobile && a.a.createElement(a.a.Fragment, null, null === (e = t.chartLibraryConfig) || void 0 === e || null === (n = e.allowedLibraries) || void 0 === n ? void 0 : n.map((function (e) {
          return a.a.createElement(a.a.Fragment, null, t.currentChartType !== e && a.a.createElement(it, {
            isMobile: t.isMobile,
            colors: null === t || void 0 === t ? void 0 : t.colors,
            onClick: function () {
              return I(e);
            }
          }, a.a.createElement("div", {
            "data-tip": "",
            "data-for": "switch_chart_button"
          }, a.a.createElement(ja.a, {
            id: "switch_chart_tooltipped"
          }, a.a.createElement("div", {
            className: "switch-chart-view-wrapper"
          }, a.a.createElement(ne.a, {
            width: 16,
            height: 16,
            verticalAlign: "sub",
            src: e === Ui.Basic ? "".concat("", "/static/icons/chart/highcharts.svg") : "".concat("", "/static/icons/chart/lightweight-chart.svg")
          }))), a.a.createElement(M.a, {
            id: "switch_chart_button",
            place: "bottom",
            className: "react-tooltip"
          }, nc(e)))));
        }
        ))), t.currentChartType === Ui.Basic && a.a.createElement(it, {
          isMobile: t.isMobile,
          colors: k,
          onClick: function (t) {
            return d(Dl(t, 1));
          },
          smallText: "tick" === x.period,
          className: "resolution-button"
        }, a.a.createElement("div", {
          "data-tip": "",
          "data-for": "chart_timeframe"
        }, a.a.createElement("span", null, x.periodLabel), a.a.createElement(M.a, {
          id: "chart_timeframe",
          place: "bottom",
          className: "react-tooltip"
        }, Object(T.t)(bl())))), t.currentChartType === Ui.Basic && a.a.createElement(it, {
          isMobile: t.isMobile,
          colors: k,
          onClick: function (t) {
            return d(Dl(t, 2));
          }
        }, a.a.createElement(ja.a, {
          id: "Chart type list",
          tooltip: Object(T.t)(ml())
        }, a.a.createElement(ne.a, {
          width: 16,
          height: 16,
          fill: "#FFFFFF",
          verticalAlign: "sub",
          src: "".concat("", "/static/icons/chart_types/").concat(t.chartType, ".svg")
        }))), t.currentChartType === Ui.Basic && a.a.createElement(ja.a, {
          id: "Chart drawing tools list",
          tooltip: Object(T.t)(fl())
        }, a.a.createElement(qe, {
          isMobile: t.isMobile,
          colors: k,
          removeAllAnnotations: t.removeAllAnnotations,
          calculateAnnotations: t.calculateAnnotations,
          toggleAnnotation: t.toggleAnnotation
        })), t.currentChartType === Ui.Basic && a.a.createElement(ft, {
          "data-tip": "",
          "data-for": "indicators_warning",
          colors: k
        }, w && a.a.createElement(M.a, {
          id: "indicators_warning",
          place: "bottom",
          delayHide: 1e3,
          effect: "solid",
          clickable: !0,
          className: "react-tooltip"
        }, a.a.createElement(mt, null, a.a.createElement(bt, null, Object(T.t)(pl())), a.a.createElement(ht, {
          colors: k,
          onClick: function () {
            return E(L[1]);
          }
        }, Object(T.t)(dl())))), a.a.createElement(ya, {
          timeframe: t.timeframe,
          indicators: C,
          isLoggedIn: t.isLoggedIn
        })), !t.isMobile && a.a.createElement(a.a.Fragment, null, null === (r = t.chartLibraryConfig) || void 0 === r || null === (i = r.allowedLibraries) || void 0 === i ? void 0 : i.map((function (e, n) {
          return a.a.createElement(a.a.Fragment, null, t.currentChartType !== e && a.a.createElement(it, {
            isMobile: t.isMobile,
            colors: k,
            onClick: function () {
              return I(e);
            },
            className: "resolution-button",
            isTradingView: t.currentChartType !== Ui.Basic,
            index: n
          }, a.a.createElement("div", {
            "data-tip": "",
            "data-for": "switch_chart_button" + e
          }, a.a.createElement(ja.a, {
            id: "switch_chart_tooltipped"
          }, a.a.createElement("div", {
            className: "switch-chart-view-wrapper"
          }, !!t.isMobile && a.a.createElement(ne.a, {
            width: 16,
            height: 16,
            fill: t.currentChartType === Ui.Basic ? "#FFF" : "#000",
            verticalAlign: "sub",
            src: e === Ui.Basic ? "".concat("", "/static/icons/chart/lightweight-chart.svg") : "".concat("", "/static/icons/chart/hightcharts.svg")
          }), !t.isMobile && a.a.createElement("b", {
            style: {
              marginLeft: 5,
              marginRight: 5,
              whiteSpace: "nowrap"
            }
          }, function (t) {
            switch (t) {
              case Ui.Basic:
                return Object(T.t)(tc());
              case Ui.LightWeight:
                return Object(T.t)($i());
              case Ui.TradingView:
                return Object(T.t)(Ki());
            }
          }(e)))), a.a.createElement(M.a, {
            id: "switch_chart_button" + e,
            place: "bottom",
            className: "react-tooltip"
          }, nc(e)))));
        }
        )))))), t.isMobile && a.a.createElement(al, null), t.isCfdOptions && t.currentChartType === Ui.Basic && a.a.createElement(Mc, {
          colors: k
        })), 1 === s.type && a.a.createElement(S.a, {
          top: s.top,
          left: s.left,
          colors: k,
          className: "scrollable",
          isMobile: t.isMobile
        }, L.map((function (e) {
          return a.a.createElement(S.b, {
            colors: k,
            key: e.period,
            onClick: function () {
              return E(e);
            },
            active: t.timeframe === e
          }, a.a.createElement("span", null, e.periodToolTip));
        }
        ))), 2 === s.type && a.a.createElement(S.a, {
          top: s.top,
          left: s.left,
          colors: k,
          className: "scrollable",
          isMobile: t.isMobile
        }, a.a.createElement(S.b, {
          colors: k,
          onClick: function () {
            return j("candlestick");
          },
          active: "candlestick" === t.chartType
        }, a.a.createElement(ne.a, {
          width: 16,
          height: 16,
          fill: "#FFFFFF",
          verticalAlign: "sub",
          src: "".concat("", "/static/icons/chart_types/candlestick.svg")
        }), a.a.createElement("span", null, Object(T.t)(sl()))), a.a.createElement(S.b, {
          colors: k,
          onClick: function () {
            return j("line");
          },
          active: "line" === t.chartType
        }, a.a.createElement(ne.a, {
          width: 16,
          height: 16,
          fill: "#FFFFFF",
          verticalAlign: "sub",
          src: "".concat("", "/static/icons/chart_types/line.svg")
        }), a.a.createElement("span", null, Object(T.t)(ul()))), a.a.createElement(S.b, {
          colors: k,
          onClick: function () {
            return j("area");
          },
          active: "area" === t.chartType
        }, a.a.createElement(ne.a, {
          width: 16,
          height: 16,
          fill: "#FFFFFF",
          verticalAlign: "sub",
          src: "".concat("", "/static/icons/chart_types/area.svg")
        }), a.a.createElement("span", null, Object(T.t)(ll()))), a.a.createElement(S.b, {
          colors: k,
          onClick: function () {
            return j("ohlc");
          },
          active: "ohlc" === t.chartType
        }, a.a.createElement(ne.a, {
          width: 16,
          height: 16,
          fill: "#FFFFFF",
          verticalAlign: "sub",
          src: "".concat("", "/static/icons/chart_types/ohlc.svg")
        }), a.a.createElement("span", null, Object(T.t)(cl()))), t.currentChartType === Ui.Basic && a.a.createElement(S.b, {
          colors: k,
          onClick: function () {
            return j("heikinashi");
          },
          active: "heikinashi" === t.chartType
        }, a.a.createElement(ne.a, {
          width: 16,
          height: 16,
          fill: "#FFFFFF",
          verticalAlign: "sub",
          src: "".concat("", "/static/icons/chart_types/heikinashi.svg")
        }), a.a.createElement("span", null, Object(T.t)(il())))), 0 !== s.type && a.a.createElement(Ot.a, {
          onClick: function () {
            return d({
              type: 0
            });
          }
        }));
      }
      ));
    function Fl() {
      return (Fl = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
        return t;
      }
      ).apply(this, arguments);
    }
    function Bl(t, e) {
      if (null == t)
        return {};
      var n, r, o = function (t, e) {
        if (null == t)
          return {};
        var n, r, o = {}, a = Object.keys(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || (o[n] = t[n]);
        return o;
      }(t, e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]);
      }
      return o;
    }
    var Hl = a.a.createElement("g", {
      id: "zoom-in",
      fill: "#FFFFFF"
    }, a.a.createElement("g", {
      id: "dp_dp001",
      transform: "matrix(1,0,0,1,-641.855,-654.873)"
    }, a.a.createElement("g", {
      id: "dp_path002"
    }, a.a.createElement("path", {
      d: "M662.074,692.83c-8.842,0-16.034-7.199-16.034-16.049s7.192-16.049,16.034-16.049s16.034,7.199,16.034,16.049 S670.916,692.83,662.074,692.83z M662.074,663.363c-7.391,0-13.403,6.02-13.403,13.418s6.013,13.418,13.403,13.418 s13.403-6.02,13.403-13.418S669.464,663.363,662.074,663.363z"
    })), a.a.createElement("g", {
      id: "dp_path003"
    }, a.a.createElement("path", {
      d: "M684.355,697.013c-0.315,0-0.631-0.112-0.883-0.34l-10.526-9.528c-0.539-0.488-0.58-1.319-0.093-1.858 c0.488-0.54,1.319-0.579,1.858-0.093l10.526,9.528c0.539,0.488,0.58,1.319,0.093,1.858 C685.071,696.868,684.713,697.013,684.355,697.013z"
    })), a.a.createElement("g", {
      id: "dp_path005"
    }, a.a.createElement("path", {
      d: "M662.108,685.689c-0.85,0-1.54-0.687-1.544-1.537l-0.069-14.729c-0.005-0.853,0.684-1.548,1.537-1.552 c0.846-0.035,1.547,0.685,1.551,1.537l0.069,14.73c0.005,0.853-0.684,1.547-1.537,1.551 C662.113,685.689,662.11,685.689,662.108,685.689z"
    })), a.a.createElement("g", {
      id: "dp_path004"
    }, a.a.createElement("path", {
      d: "M654.708,678.36c-0.85,0-1.54-0.687-1.544-1.537c-0.005-0.853,0.684-1.548,1.536-1.552l14.73-0.07 c0.002,0,0.005,0,0.007,0c0.85,0,1.54,0.687,1.544,1.537c0.005,0.853-0.684,1.548-1.537,1.552l-14.729,0.07 C654.713,678.36,654.71,678.36,654.708,678.36z"
    }))))
      , Vl = function (t) {
        var e = t.svgRef
          , n = t.title
          , r = Bl(t, ["svgRef", "title"]);
        return a.a.createElement("svg", Fl({
          id: "Layer_1",
          x: "0px",
          y: "0px",
          viewBox: "0 0 48 48",
          style: {
            height: "100%",
            enableBackground: "new 0 0 48 48"
          },
          xmlSpace: "preserve",
          ref: e
        }, r), n ? a.a.createElement("title", null, n) : null, Hl);
      }
      , Wl = a.a.forwardRef((function (t, e) {
        return a.a.createElement(Vl, Fl({
          svgRef: e
        }, t));
      }
      ));
    n.p;
    function Ul() {
      return (Ul = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
        return t;
      }
      ).apply(this, arguments);
    }
    function Gl(t, e) {
      if (null == t)
        return {};
      var n, r, o = function (t, e) {
        if (null == t)
          return {};
        var n, r, o = {}, a = Object.keys(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || (o[n] = t[n]);
        return o;
      }(t, e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]);
      }
      return o;
    }
    var Yl = a.a.createElement("g", {
      id: "zoom-out",
      fill: "#FFFFFF"
    }, a.a.createElement("g", {
      id: "dp_dp001_1_",
      transform: "matrix(1,0,0,1,-1173.56,-653.872)"
    }, a.a.createElement("g", {
      id: "dp_path002_1_"
    }, a.a.createElement("path", {
      d: "M1187.324,677.391c-0.846,0-1.535-0.681-1.544-1.528c-0.009-0.853,0.675-1.552,1.528-1.561l12.91-0.134 c0.005,0,0.011,0,0.016,0c0.846,0,1.535,0.681,1.544,1.528c0.009,0.853-0.675,1.552-1.528,1.561l-12.91,0.134 C1187.334,677.391,1187.329,677.391,1187.324,677.391z"
    })), a.a.createElement("g", {
      id: "dp_path003_1_"
    }, a.a.createElement("path", {
      d: "M1193.779,691.829c-8.842,0-16.034-7.199-16.034-16.049s7.192-16.049,16.034-16.049c8.841,0,16.033,7.199,16.033,16.049 S1202.62,691.829,1193.779,691.829z M1193.779,662.362c-7.391,0-13.403,6.02-13.403,13.418s6.013,13.418,13.403,13.418 s13.402-6.02,13.402-13.418S1201.168,662.362,1193.779,662.362z"
    })), a.a.createElement("g", {
      id: "dp_path004_1_"
    }, a.a.createElement("path", {
      d: "M1216.06,696.013c-0.315,0-0.631-0.112-0.883-0.34l-10.526-9.529c-0.539-0.488-0.58-1.32-0.093-1.858 c0.488-0.54,1.319-0.579,1.858-0.093l10.526,9.529c0.539,0.488,0.58,1.32,0.093,1.858 C1216.776,695.868,1216.418,696.013,1216.06,696.013z"
    }))))
      , ql = function (t) {
        var e = t.svgRef
          , n = t.title
          , r = Gl(t, ["svgRef", "title"]);
        return a.a.createElement("svg", Ul({
          id: "Layer_1",
          x: "0px",
          y: "0px",
          viewBox: "0 0 48 48",
          style: {
            height: "100%",
            enableBackground: "new 0 0 48 48"
          },
          xmlSpace: "preserve",
          ref: e
        }, r), n ? a.a.createElement("title", null, n) : null, Yl);
      }
      , Zl = a.a.forwardRef((function (t, e) {
        return a.a.createElement(ql, Ul({
          svgRef: e
        }, t));
      }
      ));
    n.p;
    function Xl() {
      return (Xl = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
        return t;
      }
      ).apply(this, arguments);
    }
    function Ql(t, e) {
      if (null == t)
        return {};
      var n, r, o = function (t, e) {
        if (null == t)
          return {};
        var n, r, o = {}, a = Object.keys(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || (o[n] = t[n]);
        return o;
      }(t, e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]);
      }
      return o;
    }
    var Jl = a.a.createElement("g", {
      fill: "none",
      fillRule: "evenodd",
      transform: "translate(.613)"
    }, a.a.createElement("rect", {
      width: 14.8,
      height: 14.8,
      x: .6,
      y: .6,
      stroke: "#FFF",
      strokeWidth: 1.2,
      rx: 1
    }), a.a.createElement("rect", {
      width: 16,
      height: 1.5,
      y: 10,
      fill: "#FFF",
      rx: .75
    }), a.a.createElement("path", {
      stroke: "#FFF",
      strokeLinecap: "round",
      strokeWidth: 1.5,
      d: "M5 5L8 7 11 5"
    }))
      , Kl = function (t) {
        var e = t.svgRef
          , n = t.title
          , r = Ql(t, ["svgRef", "title"]);
        return a.a.createElement("svg", Xl({
          width: 17,
          height: 16,
          viewBox: "0 0 17 16",
          ref: e
        }, r), n ? a.a.createElement("title", null, n) : null, Jl);
      }
      , $l = a.a.forwardRef((function (t, e) {
        return a.a.createElement(Kl, Xl({
          svgRef: e
        }, t));
      }
      ));
    n.p;
    function tu() {
      var t = Object(r.a)(["\n  display: flex;\n  height: ", ";\n  width: ", ";\n"]);
      return tu = function () {
        return t;
      }
        ,
        t;
    }
    function eu() {
      var t = Object(r.a)(["\n  position: absolute;\n  z-index: 20;\n  bottom: ", ";\n  left: '0px';\n  display: flex;\n  justify-content: space-around;\n  width: 100%;\n"]);
      return eu = function () {
        return t;
      }
        ,
        t;
    }
    function nu() {
      var t = Object(r.a)(["\n  position: relative;\n  height: 30px;\n\n  &:after {\n    content: ' ';\n    clear: both;\n  }\n"]);
      return nu = function () {
        return t;
      }
        ,
        t;
    }
    var ru = c.c.div(nu())
      , ou = c.c.div(eu(), (function (t) {
        return t.navigator ? "90px" : "20px";
      }
      ))
      , au = c.c.div(tu(), (function (t) {
        return t.height;
      }
      ), (function (t) {
        return t.width;
      }
      ));
    function iu() {
      var t = Object(r.a)(["Heikin Ashi"]);
      return iu = function () {
        return t;
      }
        ,
        t;
    }
    function cu() {
      var t = Object(r.a)(["OHLC"]);
      return cu = function () {
        return t;
      }
        ,
        t;
    }
    function lu() {
      var t = Object(r.a)(["Area"]);
      return lu = function () {
        return t;
      }
        ,
        t;
    }
    function uu() {
      var t = Object(r.a)(["Line"]);
      return uu = function () {
        return t;
      }
        ,
        t;
    }
    function su() {
      var t = Object(r.a)(["Candlestick"]);
      return su = function () {
        return t;
      }
        ,
        t;
    }
    function du() {
      var t = Object(r.a)(["Toggle navigator"]);
      return du = function () {
        return t;
      }
        ,
        t;
    }
    function pu() {
      var t = Object(r.a)(["Zoom in"]);
      return pu = function () {
        return t;
      }
        ,
        t;
    }
    function fu() {
      var t = Object(r.a)(["Zoom out"]);
      return fu = function () {
        return t;
      }
        ,
        t;
    }
    function mu() {
      var t = Object(r.a)(["Switch"]);
      return mu = function () {
        return t;
      }
        ,
        t;
    }
    function bu() {
      var t = Object(r.a)(["Indicators only available on timeframes of 1 min and above."]);
      return bu = function () {
        return t;
      }
        ,
        t;
    }
    function hu() {
      var t = Object(r.a)(["Chart types"]);
      return hu = function () {
        return t;
      }
        ,
        t;
    }
    var gu = Object(i.c)((function (t) {
      return {
        colors: t.theme,
        isLoggedIn: Object(Ya.a)(t),
        isCfdOptions: Object(mi.b)(t)
      };
    }
    ))((function (t) {
      var e = Object(o.useState)({
        type: 0
      })
        , n = Object(v.a)(e, 2)
        , r = n[0]
        , i = n[1]
        , c = ["candlestick", "ohlc", "heikinashi"].includes(t.chartType) ? t.periodOptions.filter((function (t) {
          return t.supportedOnCandleChartType;
        }
        )) : t.periodOptions.filter((function (t) {
          return t.supportedOnLineChartType;
        }
        ))
        , l = t.isCfdOptions || "tick" === t.timeframe.period
        , u = function (e) {
          i({
            type: 0
          }),
            t.onChangeChartType(e),
            l && ["candlestick", "ohlc", "heikinashi"].includes(e) && t.onChangeTimeframe(c[1]);
        }
        , s = function (e) {
          i({
            type: 0
          }),
            t.onChangeTimeframe(e);
        };
      Object(o.useEffect)((function () {
        t.isCfdOptions && t.onChangeTimeframe(t.periodOptions[1]);
      }
      ), [t.isCfdOptions]);
      var d = "tick" === t.timeframe.period;
      return a.a.createElement(ou, {
        className: "bottom-panel-container",
        navigator: t.navigator,
        isMobile: t.isMobile
      }, a.a.createElement(ru, null, t.isMobile && a.a.createElement(a.a.Fragment, null, t.isHighCharts && a.a.createElement(it, {
        isMobile: t.isMobile,
        colors: t.colors,
        onClick: function (t) {
          return i(function (t, e) {
            return {
              type: e,
              bottom: 120,
              left: t.currentTarget.getBoundingClientRect().left
            };
          }(t, 2));
        }
      }, a.a.createElement(ja.a, {
        id: "Chart type list",
        tooltip: Object(T.t)(hu())
      }, a.a.createElement(ne.a, {
        width: 16,
        height: 16,
        fill: "#FFFFFF",
        verticalAlign: "sub",
        src: "".concat("", "/static/icons/chart_types/").concat(t.chartType, ".svg")
      }))), t.isHighCharts && a.a.createElement(ft, {
        "data-tip": "",
        "data-for": "indicators_warning",
        colors: t.colors
      }, d && a.a.createElement(M.a, {
        id: "indicators_warning",
        place: "top",
        delayHide: 1e3,
        effect: "solid",
        clickable: !0,
        className: "react-tooltip"
      }, a.a.createElement(mt, null, a.a.createElement(bt, null, Object(T.t)(bu())), a.a.createElement(ht, {
        colors: t.colors,
        onClick: function () {
          return s(c[1]);
        }
      }, Object(T.t)(mu())))), a.a.createElement(ya, {
        timeframe: t.timeframe,
        indicators: t.indicators,
        isLoggedIn: t.isLoggedIn
      }))), t.isHighCharts && a.a.createElement(ct, {
        isMobile: t.isMobile,
        colors: t.colors
      }, a.a.createElement("div", {
        "data-tip": "",
        "data-for": "zoom_out_tooltip"
      }, a.a.createElement(au, {
        width: "17px",
        height: "16px"
      }, a.a.createElement(Zl, {
        onClick: function () {
          return t.onChangeZoomLevel(t.zoomLevel - 1);
        }
      })), !t.isMobile && a.a.createElement(M.a, {
        id: "zoom_out_tooltip",
        place: "top",
        className: "react-tooltip-small"
      }, Object(T.t)(fu())))), t.isHighCharts && a.a.createElement(ct, {
        isMobile: t.isMobile,
        colors: t.colors
      }, a.a.createElement("div", {
        "data-tip": "",
        "data-for": "zoom_in_tooltip"
      }, a.a.createElement(au, {
        width: "17px",
        height: "16px"
      }, a.a.createElement(Wl, {
        onClick: function () {
          return t.onChangeZoomLevel(t.zoomLevel + 1);
        }
      })), !t.isMobile && a.a.createElement(M.a, {
        id: "zoom_in_tooltip",
        place: "top",
        className: "react-tooltip-small"
      }, Object(T.t)(pu())))), t.isHighCharts && a.a.createElement(ct, {
        isMobile: t.isMobile,
        colors: t.colors
      }, a.a.createElement("div", {
        "data-tip": "",
        "data-for": "navigator_tooltip"
      }, a.a.createElement(au, {
        width: "17px",
        height: "16px"
      }, a.a.createElement($l, {
        onClick: function () {
          return t.onToggleNavigator();
        }
      })), !t.isMobile && a.a.createElement(M.a, {
        id: "navigator_tooltip",
        place: "top",
        className: "react-tooltip-small"
      }, Object(T.t)(du()))))), 1 === r.type && a.a.createElement(S.a, {
        bottom: r.bottom,
        left: r.left,
        colors: t.colors,
        className: "scrollable",
        isMobile: t.isMobile
      }, c.map((function (e) {
        return a.a.createElement(S.b, {
          colors: t.colors,
          key: e.period,
          onClick: function () {
            return s(e);
          },
          active: t.timeframe === e
        }, a.a.createElement("span", null, e.periodToolTip));
      }
      ))), 2 === r.type && a.a.createElement(S.a, {
        bottom: r.bottom,
        left: r.left,
        colors: t.colors,
        className: "scrollable",
        isMobile: t.isMobile
      }, a.a.createElement(S.b, {
        colors: t.colors,
        onClick: function () {
          return u("candlestick");
        },
        active: "candlestick" === t.chartType
      }, a.a.createElement(ne.a, {
        width: 16,
        height: 16,
        fill: "#FFFFFF",
        verticalAlign: "sub",
        src: "".concat("", "/static/icons/chart_types/candlestick.svg")
      }), a.a.createElement("span", null, Object(T.t)(su()))), a.a.createElement(S.b, {
        colors: t.colors,
        onClick: function () {
          return u("line");
        },
        active: "line" === t.chartType
      }, a.a.createElement(ne.a, {
        width: 16,
        height: 16,
        fill: "#FFFFFF",
        verticalAlign: "sub",
        src: "".concat("", "/static/icons/chart_types/line.svg")
      }), a.a.createElement("span", null, Object(T.t)(uu()))), a.a.createElement(S.b, {
        colors: t.colors,
        onClick: function () {
          return u("area");
        },
        active: "area" === t.chartType
      }, a.a.createElement(ne.a, {
        width: 16,
        height: 16,
        fill: "#FFFFFF",
        verticalAlign: "sub",
        src: "".concat("", "/static/icons/chart_types/area.svg")
      }), a.a.createElement("span", null, Object(T.t)(lu()))), a.a.createElement(S.b, {
        colors: t.colors,
        onClick: function () {
          return u("ohlc");
        },
        active: "ohlc" === t.chartType
      }, a.a.createElement(ne.a, {
        width: 16,
        height: 16,
        fill: "#FFFFFF",
        verticalAlign: "sub",
        src: "".concat("", "/static/icons/chart_types/ohlc.svg")
      }), a.a.createElement("span", null, Object(T.t)(cu()))), t.isHighCharts && a.a.createElement(S.b, {
        colors: t.colors,
        onClick: function () {
          return u("heikinashi");
        },
        active: "heikinashi" === t.chartType
      }, a.a.createElement(ne.a, {
        width: 16,
        height: 16,
        fill: "#FFFFFF",
        verticalAlign: "sub",
        src: "".concat("", "/static/icons/chart_types/heikinashi.svg")
      }), a.a.createElement("span", null, Object(T.t)(iu())))), 0 !== r.type && a.a.createElement(Ot.a, {
        onClick: function () {
          return i({
            type: 0
          });
        }
      }));
    }
    ));
    function vu() {
      var t = Object(r.a)(["1 Week"]);
      return vu = function () {
        return t;
      }
        ,
        t;
    }
    function xu() {
      var t = Object(r.a)(["1w"]);
      return xu = function () {
        return t;
      }
        ,
        t;
    }
    function Ou() {
      var t = Object(r.a)(["1 Day"]);
      return Ou = function () {
        return t;
      }
        ,
        t;
    }
    function yu() {
      var t = Object(r.a)(["1d"]);
      return yu = function () {
        return t;
      }
        ,
        t;
    }
    function ju() {
      var t = Object(r.a)(["4 Hours"]);
      return ju = function () {
        return t;
      }
        ,
        t;
    }
    function Eu() {
      var t = Object(r.a)(["4h"]);
      return Eu = function () {
        return t;
      }
        ,
        t;
    }
    function wu() {
      var t = Object(r.a)(["2 Hours"]);
      return wu = function () {
        return t;
      }
        ,
        t;
    }
    function Cu() {
      var t = Object(r.a)(["2h"]);
      return Cu = function () {
        return t;
      }
        ,
        t;
    }
    function ku() {
      var t = Object(r.a)(["1 Hour"]);
      return ku = function () {
        return t;
      }
        ,
        t;
    }
    function Tu() {
      var t = Object(r.a)(["1h"]);
      return Tu = function () {
        return t;
      }
        ,
        t;
    }
    function Mu() {
      var t = Object(r.a)(["30 Minutes"]);
      return Mu = function () {
        return t;
      }
        ,
        t;
    }
    function Su() {
      var t = Object(r.a)(["30m"]);
      return Su = function () {
        return t;
      }
        ,
        t;
    }
    function Lu() {
      var t = Object(r.a)(["15 Minutes"]);
      return Lu = function () {
        return t;
      }
        ,
        t;
    }
    function Iu() {
      var t = Object(r.a)(["15m"]);
      return Iu = function () {
        return t;
      }
        ,
        t;
    }
    function _u() {
      var t = Object(r.a)(["5 Minutes"]);
      return _u = function () {
        return t;
      }
        ,
        t;
    }
    function Pu() {
      var t = Object(r.a)(["5m"]);
      return Pu = function () {
        return t;
      }
        ,
        t;
    }
    function Au() {
      var t = Object(r.a)(["2 Minutes"]);
      return Au = function () {
        return t;
      }
        ,
        t;
    }
    function zu() {
      var t = Object(r.a)(["2m"]);
      return zu = function () {
        return t;
      }
        ,
        t;
    }
    function Nu() {
      var t = Object(r.a)(["1 Minute"]);
      return Nu = function () {
        return t;
      }
        ,
        t;
    }
    function Du() {
      var t = Object(r.a)(["1m"]);
      return Du = function () {
        return t;
      }
        ,
        t;
    }
    function Ru() {
      var t = Object(r.a)(["Tick"]);
      return Ru = function () {
        return t;
      }
        ,
        t;
    }
    function Fu() {
      var t = Object(r.a)(["Tick"]);
      return Fu = function () {
        return t;
      }
        ,
        t;
    }
    var Bu, Hu = [.25, 15, 75, 225, 900, 3600, 21600, 151200], Vu = [{
      chartPeriod: .25,
      period: "tick",
      candleStickPeriod: .25,
      periodLabel: Object(T.t)(Fu()),
      periodLabelEnglish: "Tick",
      periodToolTip: Object(T.t)(Ru()),
      periodToolTipEnglish: "Tick",
      unit: "second",
      supportedOnLineChartType: !0,
      supportedOnCandleChartType: !1
    }, {
      chartPeriod: 15,
      period: "1m",
      candleStickPeriod: 1,
      periodLabel: Object(T.t)(Du()),
      periodLabelEnglish: "1m",
      periodToolTip: Object(T.t)(Nu()),
      periodToolTipEnglish: "1 Minute",
      unit: "minute",
      supportedOnLineChartType: !0,
      supportedOnCandleChartType: !0
    }, {
      chartPeriod: 30,
      period: "2m",
      candleStickPeriod: 2,
      periodLabel: Object(T.t)(zu()),
      periodLabelEnglish: "2m",
      periodToolTip: Object(T.t)(Au()),
      periodToolTipEnglish: "2 Minutes",
      unit: "minute",
      supportedOnLineChartType: !0,
      supportedOnCandleChartType: !0
    }, {
      chartPeriod: 75,
      period: "5m",
      candleStickPeriod: 5,
      periodLabel: Object(T.t)(Pu()),
      periodLabelEnglish: "5m",
      periodToolTip: Object(T.t)(_u()),
      periodToolTipEnglish: "5 Minutes",
      unit: "minute",
      supportedOnLineChartType: !0,
      supportedOnCandleChartType: !0
    }, {
      chartPeriod: 225,
      period: "15m",
      candleStickPeriod: 15,
      periodLabel: Object(T.t)(Iu()),
      periodLabelEnglish: "15m",
      periodToolTip: Object(T.t)(Lu()),
      periodToolTipEnglish: "15 Minutes",
      unit: "minute",
      supportedOnLineChartType: !0,
      supportedOnCandleChartType: !0
    }, {
      chartPeriod: 450,
      period: "30m",
      candleStickPeriod: 30,
      periodLabel: Object(T.t)(Su()),
      periodLabelEnglish: "30m",
      periodToolTip: Object(T.t)(Mu()),
      periodToolTipEnglish: "30 Minutes",
      unit: "minute",
      supportedOnLineChartType: !0,
      supportedOnCandleChartType: !0
    }, {
      chartPeriod: 900,
      period: "1h",
      candleStickPeriod: 60,
      periodLabel: Object(T.t)(Tu()),
      periodLabelEnglish: "1h",
      periodToolTip: Object(T.t)(ku()),
      periodToolTipEnglish: "1 Hour",
      unit: "hour",
      supportedOnLineChartType: !0,
      supportedOnCandleChartType: !0
    }, {
      chartPeriod: 1800,
      period: "2h",
      candleStickPeriod: 120,
      periodLabel: Object(T.t)(Cu()),
      periodLabelEnglish: "2h",
      periodToolTip: Object(T.t)(wu()),
      periodToolTipEnglish: "2 Hours",
      unit: "hour",
      supportedOnLineChartType: !0,
      supportedOnCandleChartType: !0
    }, {
      chartPeriod: 3600,
      period: "4h",
      candleStickPeriod: 240,
      periodLabel: Object(T.t)(Eu()),
      periodLabelEnglish: "4h",
      periodToolTip: Object(T.t)(ju()),
      periodToolTipEnglish: "4 Hours",
      unit: "hour",
      supportedOnLineChartType: !0,
      supportedOnCandleChartType: !0
    }, {
      chartPeriod: 21600,
      period: "1d",
      candleStickPeriod: 1440,
      periodLabel: Object(T.t)(yu()),
      periodLabelEnglish: "1d",
      periodToolTip: Object(T.t)(Ou()),
      periodToolTipEnglish: "1 Day",
      unit: "day",
      supportedOnLineChartType: !0,
      supportedOnCandleChartType: !0
    }, {
      chartPeriod: 151200,
      period: "1w",
      candleStickPeriod: 10080,
      periodLabel: Object(T.t)(xu()),
      periodLabelEnglish: "1w",
      periodToolTip: Object(T.t)(vu()),
      periodToolTipEnglish: "1 Week",
      unit: "week",
      supportedOnLineChartType: !0,
      supportedOnCandleChartType: !0
    }], Wu = Vu.filter((function (t) {
      var e = t.chartPeriod;
      return Hu.includes(e);
    }
    )), Uu = n(71);
    function Gu() {
      var t = Object(r.a)(["Breakeven"]);
      return Gu = function () {
        return t;
      }
        ,
        t;
    }
    function Yu() {
      var t = Object(r.a)(["If the asset price below this level at expiry time, you're making profits"]);
      return Yu = function () {
        return t;
      }
        ,
        t;
    }
    function qu() {
      var t = Object(r.a)(["If the asset price above this level at expiry time, you're making profits"]);
      return qu = function () {
        return t;
      }
        ,
        t;
    }
    !function (t) {
      t.quote = "quote-line",
        t.deadPeriod = "deadPeriod-line",
        t.expiry = "expiry-line",
        t.breakeven = "breakeven";
    }(Bu || (Bu = {}));
    var Zu, Xu = function (t, e) {
      return '<span class="chart-indicator-triangle-full"\n    style="border-right-color: '.concat(e, ';"></span>\n    <span class="chart-indicator"\n    style="background: ').concat(e, '; font-weight: bold; font-size: 11px;">\n    ').concat(t, "\n  </span>");
    }, Qu = function (t, e) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2
        , r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 9
        , o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Bu.quote;
      return {
        id: o,
        value: t,
        color: e,
        width: n,
        zIndex: r,
        dashStyle: "ShortDot",
        label: {
          text: null,
          align: "right",
          y: 3,
          x: 63
        }
      };
    }, Ju = function (t, e) {
      return {
        id: Bu.deadPeriod,
        value: t,
        color: e,
        width: 1,
        zIndex: 9,
        dashStyle: "Dot",
        label: {
          text: "",
          verticalAlign: "top",
          useHTML: !0,
          style: {
            color: e,
            fontFamily: "Roboto, sans-serif"
          },
          x: -16,
          y: 80,
          rotation: 0
        }
      };
    }, Ku = function (t, e) {
      return {
        id: Bu.expiry,
        value: t,
        width: 1,
        zIndex: 3,
        color: e,
        label: {
          text: "",
          verticalAlign: "top",
          useHTML: !0,
          style: {
            color: e,
            fontFamily: "Roboto, sans-serif"
          },
          x: -16,
          y: 80,
          rotation: 0
        }
      };
    };
    !function (t) {
      t.quote = "quote-band";
    }(Zu || (Zu = {}));
    var $u = n(284);
    function ts() {
      return (ts = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
        return t;
      }
      ).apply(this, arguments);
    }
    function es(t, e) {
      if (null == t)
        return {};
      var n, r, o = function (t, e) {
        if (null == t)
          return {};
        var n, r, o = {}, a = Object.keys(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || (o[n] = t[n]);
        return o;
      }(t, e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]);
      }
      return o;
    }
    var ns = a.a.createElement("path", {
      d: "M1 8L8 1",
      stroke: "#75F986",
      strokeLinecap: "round"
    })
      , rs = a.a.createElement("path", {
        d: "M2 1H8V7",
        stroke: "#75F986",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
      , os = function (t) {
        var e = t.svgRef
          , n = t.title
          , r = es(t, ["svgRef", "title"]);
        return a.a.createElement("svg", ts({
          width: 9,
          height: 9,
          viewBox: "0 0 9 9",
          fill: "none",
          ref: e
        }, r), n ? a.a.createElement("title", null, n) : null, ns, rs);
      }
      , as = a.a.forwardRef((function (t, e) {
        return a.a.createElement(os, ts({
          svgRef: e
        }, t));
      }
      ));
    n.p;
    function is() {
      return (is = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
        return t;
      }
      ).apply(this, arguments);
    }
    function cs(t, e) {
      if (null == t)
        return {};
      var n, r, o = function (t, e) {
        if (null == t)
          return {};
        var n, r, o = {}, a = Object.keys(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || (o[n] = t[n]);
        return o;
      }(t, e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]);
      }
      return o;
    }
    var ls = a.a.createElement("path", {
      d: "M1 1.00003L8 8.00003",
      stroke: "#FF0062",
      strokeLinecap: "round"
    })
      , us = a.a.createElement("path", {
        d: "M8 2.00003L8 8.00003L2 8.00003",
        stroke: "#FF0062",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
      , ss = function (t) {
        var e = t.svgRef
          , n = t.title
          , r = cs(t, ["svgRef", "title"]);
        return a.a.createElement("svg", is({
          width: 9,
          height: 9,
          viewBox: "0 0 9 9",
          fill: "none",
          ref: e
        }, r), n ? a.a.createElement("title", null, n) : null, ls, us);
      }
      , ds = a.a.forwardRef((function (t, e) {
        return a.a.createElement(ss, is({
          svgRef: e
        }, t));
      }
      ));
    n.p;
    function ps() {
      var t = Object(r.a)(["Low"]);
      return ps = function () {
        return t;
      }
        ,
        t;
    }
    function fs() {
      var t = Object(r.a)(["High"]);
      return fs = function () {
        return t;
      }
        ,
        t;
    }
    function ms() {
      var t = Object(r.a)(["Trader sentiment"]);
      return ms = function () {
        return t;
      }
        ,
        t;
    }
    function bs() {
      var t = Object(r.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 15px;\n  width: 15px;\n  border-radius: 50%;\n  background-color: ", ";\n"]);
      return bs = function () {
        return t;
      }
        ,
        t;
    }
    function hs() {
      var t = Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 74px;\n  justify-content: space-between;\n  margin-left: 2px;\n"]);
      return hs = function () {
        return t;
      }
        ,
        t;
    }
    function gs() {
      var t = Object(r.a)(["\n  display: flex;\n  height: 15px;\n  line-height: 15px;\n  font-size: 11px;\n\n  span {\n    flex: 1 1 auto;\n    text-align: left;\n\n    color: #8191a5;\n  }\n  div {\n    flex: 1 1 auto;\n    text-align: right;\n\n    color: #ffffff;\n  }\n"]);
      return gs = function () {
        return t;
      }
        ,
        t;
    }
    function vs() {
      var t = Object(r.a)(["\n  flex: 1 1 auto;\n  margin-left: 10px;\n  p {\n    font-size: 12px;\n    font-weight: bold;\n    letter-spacing: -0.2px;\n    padding: 0 0 0 0;\n    margin: 0 0 6px 0;\n\n    color: #ffffff;\n  }\n"]);
      return vs = function () {
        return t;
      }
        ,
        t;
    }
    function xs() {
      var t = Object(r.a)(["\n  position: absolute;\n  left: 11px;\n  display: flex;\n  box-sizing: border-box;\n  opacity: 0.9;\n  bottom: 122px;\n  z-index: 1;\n"]);
      return xs = function () {
        return t;
      }
        ,
        t;
    }
    function Os() {
      var t = Object(r.a)(["\n  position: absolute;\n  left: 11px;\n  bottom: ", ";\n\n  display: flex;\n  box-sizing: border-box;\n  width: 190px;\n  padding: 10px;\n  border-radius: 2px;\n\n  opacity: 0.9;\n  background-color: #06141f;\n  z-index: 1;\n"]);
      return Os = function () {
        return t;
      }
        ,
        t;
    }
    var ys = c.c.div(Os(), (function (t) {
      return t.navigator ? "120px" : "60px";
    }
    ))
      , js = c.c.div(xs())
      , Es = c.c.div(vs())
      , ws = c.c.div(gs())
      , Cs = c.c.div(hs())
      , ks = c.c.div(bs(), (function (t) {
        return t.color;
      }
      ))
      , Ts = function (t) {
        Object(b.a)(n, t);
        var e = Object(h.a)(n);
        function n(t) {
          var r;
          return Object(f.a)(this, n),
            (r = e.call(this, t)).timer = void 0,
            r.request = void 0,
            r.canvas = void 0,
            r.onStartTimer = function () {
              r.timer = setInterval(r.onFetch, 6e4);
            }
            ,
            r.onFetch = Object(p.a)(d.a.mark((function t() {
              var e;
              return d.a.wrap((function (t) {
                for (; ;)
                  switch (t.prev = t.next) {
                    case 0:
                      return t.prev = 0,
                        clearInterval(r.timer),
                        t.next = 4,
                        k.a.fetchInstrumentSentiment(r.props.instrument);
                    case 4:
                      (e = t.sent) ? (r.setState({
                        error: !1,
                        sentiment: e
                      }, r.onStartTimer),
                        setTimeout((function () {
                          r.onRenderMobilePanel();
                        }
                        ))) : r.setState({
                          error: !0
                        }),
                        t.next = 12;
                      break;
                    case 8:
                      t.prev = 8,
                        t.t0 = t.catch(0),
                        console.warn(t.t0),
                        r.setState({
                          error: !0
                        });
                    case 12:
                    case "end":
                      return t.stop();
                  }
              }
              ), t, null, [[0, 8]]);
            }
            ))),
            r.componentDidMount = function () {
              r.onFetch();
            }
            ,
            r.componentWillUnmount = function () {
              clearInterval(r.timer);
            }
            ,
            r.componentDidUpdate = function (t) {
              t.instrument !== r.props.instrument && r.setState({
                error: !0
              }, r.onFetch);
            }
            ,
            r.onRenderMobilePanel = function () {
              if (r.canvas && r.canvas.current)
                try {
                  var t = r.canvas.current.getContext("2d");
                  t.clearRect(0, 0, r.canvas.current.width, r.canvas.current.height),
                    t.fillStyle = "red",
                    t.fillRect(0, 0, 4, 74),
                    t.fillStyle = "green",
                    t.fillRect(0, 0, 4, Math.ceil(74 * r.state.sentiment.up / 100));
                } catch (e) {
                  console.warn(e);
                }
            }
            ,
            r.render = function () {
              var t = r.props
                , e = t.navigator
                , n = t.colors
                , o = r.state
                , i = o.error
                , c = o.sentiment;
              return i ? null : r.props.isMobile ? a.a.createElement(js, null, a.a.createElement("canvas", {
                ref: r.canvas,
                width: "4",
                height: "74"
              }), a.a.createElement(Cs, null, a.a.createElement(ks, {
                color: n.tradebox.highNormal
              }, a.a.createElement(as, null)), a.a.createElement(ks, {
                color: n.tradebox.lowNormal
              }, a.a.createElement(ds, null)))) : a.a.createElement(ys, {
                navigator: e
              }, a.a.createElement($u.a, {
                filledColor: n.tradebox.highActive,
                normalColor: n.tradebox.lowActive,
                value: c.up,
                size: 50,
                thickness: 4
              }), a.a.createElement(Es, null, a.a.createElement("p", null, Object(T.t)(ms())), a.a.createElement(ws, null, a.a.createElement("span", null, Object(T.t)(fs())), a.a.createElement("div", null, c.up, "%")), a.a.createElement(ws, null, a.a.createElement("span", null, Object(T.t)(ps())), a.a.createElement("div", null, c.down, "%"))));
            }
            ,
            r.state = {
              error: !0,
              sentiment: {
                up: 0,
                down: 0
              }
            },
            r.canvas = a.a.createRef(),
            r;
        }
        return n;
      }(a.a.Component)
      , Ms = Object(i.c)((function (t) {
        return {
          colors: t.theme,
          isMobile: t.registry.isMobile
        };
      }
      ))(Ts)
      , Ss = {
        sma: {
          name: "SMA",
          type: "sma",
          linkedTo: "indicator-series",
          color: "#8085e9",
          zIndex: 10,
          threshold: null,
          cropThreshold: 2e3,
          turboThreshold: 0
        },
        bb: {
          name: "Bolinger Bands",
          type: "bb",
          linkedTo: "indicator-series",
          color: "#ac7ec7",
          zIndex: 10,
          threshold: null,
          cropThreshold: 2e3,
          turboThreshold: 0
        },
        rsi: {
          name: "RSI",
          type: "rsi",
          linkedTo: "indicator-series",
          color: "#7ec78c",
          secondChart: !0,
          params: {
            decimals: 70,
            period: 30
          },
          zIndex: 10,
          cropThreshold: 2e3,
          turboThreshold: 0
        },
        macd: {
          name: "MACD",
          type: "macd",
          linkedTo: "indicator-series",
          color: "#c76767",
          secondChart: !0,
          params: {
            shortPeriod: 12,
            longPeriod: 26,
            signalPeriod: 9,
            period: 26
          },
          zIndex: 100
        },
        aroon: {
          name: "Aroon",
          type: "aroon",
          linkedTo: "indicator-series",
          color: "green",
          lineWidth: 1,
          aroonDown: {
            styles: {
              lineColor: "red"
            }
          },
          secondChart: !0,
          params: {
            period: 25
          },
          zIndex: 10,
          threshold: null,
          cropThreshold: 2e3,
          turboThreshold: 0
        },
        aroonoscillator: {
          type: "aroonoscillator",
          linkedTo: "indicator-series",
          color: "turquoise",
          lineWidth: 1.5,
          style: {
            lineWidth: 5
          },
          secondChart: !0,
          params: {
            period: 14
          },
          zIndex: 10,
          threshold: null,
          cropThreshold: 2e3,
          turboThreshold: 0
        },
        dpo: {
          type: "dpo",
          linkedTo: "indicator-series",
          lineWidth: 2,
          marker: {
            enabled: !1
          },
          secondChart: !0,
          params: {
            period: 20,
            index: 3
          },
          zIndex: 10,
          threshold: null,
          cropThreshold: 2e3,
          turboThreshold: 0
        },
        ema: {
          type: "ema",
          linkedTo: "indicator-series",
          params: {
            period: 50
          },
          zIndex: 10,
          threshold: null,
          cropThreshold: 2e3,
          turboThreshold: 0
        },
        dema: {
          type: "dema",
          linkedTo: "indicator-series",
          params: {
            period: 50
          },
          zIndex: 10,
          threshold: null,
          cropThreshold: 2e3,
          turboThreshold: 0
        },
        tema: {
          type: "tema",
          linkedTo: "indicator-series",
          params: {
            period: 50
          },
          zIndex: 10,
          threshold: null,
          cropThreshold: 2e3,
          turboThreshold: 0
        },
        trix: {
          type: "trix",
          linkedTo: "main-series",
          secondChart: !0,
          params: {
            index: 3,
            period: 9
          },
          zIndex: 10,
          threshold: null,
          cropThreshold: 2e3,
          turboThreshold: 0
        },
        apo: {
          type: "apo",
          linkedTo: "indicator-series",
          color: "grey",
          lineWidth: 2,
          secondChart: !0,
          params: {
            periods: [10, 20]
          },
          zIndex: 10,
          threshold: null,
          cropThreshold: 2e3,
          turboThreshold: 0
        },
        ppo: {
          type: "ppo",
          linkedTo: "indicator-series",
          color: "#001e84",
          lineWidth: 2,
          secondChart: !0,
          zIndex: 10,
          threshold: null,
          cropThreshold: 2e3,
          turboThreshold: 0
        },
        roc: {
          type: "roc",
          linkedTo: "indicator-series",
          lineWidth: 2,
          secondChart: !0,
          params: {
            period: 50
          },
          zIndex: 10,
          threshold: null,
          cropThreshold: 2e3,
          turboThreshold: 0
        },
        wma: {
          type: "wma",
          linkedTo: "indicator-series",
          params: {
            period: 50
          },
          zIndex: 10,
          threshold: null,
          cropThreshold: 2e3,
          turboThreshold: 0
        },
        linearRegression: {
          type: "linearRegression",
          linkedTo: "indicator-series",
          zIndex: -1,
          params: {
            period: 100
          },
          threshold: null,
          cropThreshold: 2e3,
          turboThreshold: 0
        },
        linearRegressionSlope: {
          type: "linearRegressionSlope",
          linkedTo: "indicator-series",
          zIndex: -1,
          secondChart: !0,
          params: {
            period: 20
          },
          threshold: null,
          cropThreshold: 2e3,
          turboThreshold: 0
        },
        linearRegressionIntercept: {
          type: "linearRegressionIntercept",
          linkedTo: "indicator-series",
          zIndex: -1,
          secondChart: !0,
          params: {
            period: 50
          },
          threshold: null,
          cropThreshold: 2e3,
          turboThreshold: 0
        },
        linearRegressionAngle: {
          type: "linearRegressionAngle",
          linkedTo: "indicator-series",
          zIndex: -1,
          secondChart: !0,
          params: {
            period: 20
          },
          threshold: null,
          cropThreshold: 2e3,
          turboThreshold: 0
        },
        abands: {
          type: "abands",
          linkedTo: "indicator-series",
          zIndex: 10,
          threshold: null,
          cropThreshold: 2e3,
          turboThreshold: 0
        },
        ao: {
          type: "ao",
          secondChart: !0,
          greaterBarColor: "#00cc66",
          lowerBarColor: "#FF5E5E",
          linkedTo: "indicator-series",
          showInLegend: !0,
          zIndex: 10,
          cropThreshold: 2e3,
          turboThreshold: 0
        },
        atr: {
          type: "atr",
          linkedTo: "indicator-series",
          secondChart: !0,
          params: {
            period: 50
          },
          zIndex: 10,
          threshold: null,
          cropThreshold: 2e3,
          turboThreshold: 0
        },
        cci: {
          type: "cci",
          linkedTo: "indicator-series",
          secondChart: !0,
          params: {
            period: 50
          },
          zIndex: 10,
          threshold: null,
          cropThreshold: 2e3,
          turboThreshold: 0
        },
        ikh: {
          type: "ikh",
          linkedTo: "indicator-series",
          tenkanLine: {
            styles: {
              lineColor: "lightblue"
            }
          },
          kijunLine: {
            styles: {
              lineColor: "darkred"
            }
          },
          chikouLine: {
            styles: {
              lineColor: "lightgreen"
            }
          },
          senkouSpanA: {
            styles: {
              lineColor: "green"
            }
          },
          senkouSpanB: {
            styles: {
              lineColor: "red"
            }
          },
          senkouSpan: {
            color: "rgba(0, 255, 0, 0.3)",
            styles: {
              fill: "rgba(0, 0, 255, 0.1)"
            }
          },
          zIndex: 10,
          threshold: null,
          cropThreshold: 2e3,
          turboThreshold: 0
        },
        momentum: {
          type: "momentum",
          linkedTo: "indicator-series",
          secondChart: !0,
          params: {
            period: 14
          },
          zIndex: 10,
          threshold: null,
          cropThreshold: 2e3,
          turboThreshold: 0
        },
        pivotpoints: {
          type: "pivotpoints",
          linkedTo: "indicator-series",
          zIndex: 0,
          lineWidth: 1,
          dataLabels: {
            overflow: "none",
            crop: !1,
            y: 4,
            style: {
              fontSize: 9
            }
          },
          threshold: null,
          cropThreshold: 2e3,
          turboThreshold: 0
        },
        pc: {
          type: "pc",
          linkedTo: "indicator-series",
          zIndex: 10,
          threshold: null,
          cropThreshold: 2e3,
          turboThreshold: 0
        },
        priceenvelopes: {
          type: "priceenvelopes",
          linkedTo: "indicator-series",
          secondChart: !0,
          zIndex: 10,
          params: {
            index: 0,
            period: 20,
            topBand: .1,
            bottomBand: .1
          },
          cropThreshold: 2e3,
          turboThreshold: 0
        },
        psar: {
          type: "psar",
          linkedTo: "indicator-series",
          params: {
            index: 4
          },
          zIndex: 10,
          threshold: null,
          cropThreshold: 2e3,
          turboThreshold: 0
        },
        stochastic: {
          linkedTo: "indicator-series",
          secondChart: !0,
          type: "stochastic",
          zIndex: 10,
          params: {
            index: 0,
            period: 14,
            periods: [14, 3]
          },
          threshold: null,
          cropThreshold: 2e3,
          turboThreshold: 0
        },
        williamsr: {
          type: "williamsr",
          linkedTo: "indicator-series",
          secondChart: !0,
          color: "green",
          lineWidth: 1.5,
          marker: {
            enabled: !1
          },
          params: {
            period: 14
          },
          zones: [{
            value: -80,
            color: "green"
          }, {
            value: -20,
            color: "#bbb"
          }],
          zIndex: 10,
          threshold: null,
          cropThreshold: 2e3,
          turboThreshold: 0
        }
      }
      , Ls = n(287)
      , Is = n(292)
      , _s = n(318)
      , Ps = n(262)
      , As = n(50);
    function zs() {
      var t = Object(r.a)(["\n\theight: 24px;\n\twidth: 100%;\n\tpadding: 0 5px;\n\tmargin-left: 10px;\n\tline-height: 24px;\n\tborder-radius: 2px;\n\tborder: 1px solid\n\t\t", ";\n\tcolor: ", ";\n\ttext-align: center;\n\ttext-transform: uppercase;\n\tfont-size: 12px;\n\tfont-weight: 500;\n\tcursor: pointer;\n"]);
      return zs = function () {
        return t;
      }
        ,
        t;
    }
    function Ns() {
      var t = Object(r.a)(["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tmargin-top: 10px;\n"]);
      return Ns = function () {
        return t;
      }
        ,
        t;
    }
    function Ds() {
      var t = Object(r.a)(["\n\tfont-size: 12px;\n\tcolor: ", ";\n"]);
      return Ds = function () {
        return t;
      }
        ,
        t;
    }
    function Rs() {
      var t = Object(r.a)(["\n\tfont-size: 11px;\n\tcolor: ", ";\n"]);
      return Rs = function () {
        return t;
      }
        ,
        t;
    }
    function Fs() {
      var t = Object(r.a)(["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tpadding: 4px;\n\tcolor: ", ";\n\n\t&.highlight {\n\t\tbackground-color: ", ";\n\n\t\t.title {\n\t\t\tcolor: ", ";\n\t\t}\n\n\t\t.value {\n\t\t\tcolor: ", ";\n\t\t}\n\t}\n"]);
      return Fs = function () {
        return t;
      }
        ,
        t;
    }
    function Bs() {
      var t = Object(r.a)([""]);
      return Bs = function () {
        return t;
      }
        ,
        t;
    }
    function Hs() {
      var t = Object(r.a)(["\n\tposition: fixed;\n\ttop: ", "px;\n\tleft: ", "px;\n\tz-index: 54;\n\tmargin-top: 20px;\n\twidth: 196px;\n\tpadding: 10px;\n\tbackground-color: ", ";\n"]);
      return Hs = function () {
        return t;
      }
        ,
        t;
    }
    function Vs() {
      var t = Object(r.a)(["\n\tposition: absolute;\n\tz-index: 40;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tbackground: rgba(255, 255, 255, 0.1);\n"]);
      return Vs = function () {
        return t;
      }
        ,
        t;
    }
    var Ws = c.c.div(Vs())
      , Us = c.c.div(Hs(), (function (t) {
        return t.y;
      }
      ), (function (t) {
        return t.x - 176;
      }
      ), (function (t) {
        return 1 === t.direction ? t.colors.chart.tradeInfo.high.backgroundColor : t.colors.chart.tradeInfo.low.backgroundColor;
      }
      ))
      , Gs = c.c.div(Bs())
      , Ys = c.c.div(Fs(), (function (t) {
        return t.colors.secondaryText;
      }
      ), (function (t) {
        return 1 === t.direction ? t.colors.chart.tradeInfo.high.highlight : t.colors.chart.tradeInfo.low.highlight;
      }
      ), (function (t) {
        return 1 === t.direction ? t.colors.chart.tradeInfo.high.textColor : t.colors.chart.tradeInfo.low.textColor;
      }
      ), (function (t) {
        return t.colors.primaryText;
      }
      ))
      , qs = c.c.div(Rs(), (function (t) {
        return t.colors.secondaryText;
      }
      ))
      , Zs = c.c.div(Ds(), (function (t) {
        return 1 === t.direction ? t.colors.chart.tradeInfo.high.textColor : t.colors.chart.tradeInfo.low.textColor;
      }
      ))
      , Xs = c.c.div(Ns())
      , Qs = c.c.div(zs(), (function (t) {
        return 1 === t.direction ? t.colors.chart.tradeInfo.high.sellBackColor : t.colors.chart.tradeInfo.low.sellBackColor;
      }
      ), (function (t) {
        return 1 === t.direction ? t.colors.chart.tradeInfo.high.sellBackColor : t.colors.chart.tradeInfo.low.sellBackColor;
      }
      ))
      , Js = n(19)
      , Ks = n(299)
      , $s = n(21);
    function td() {
      var t = Object(r.a)(["Sell back"]);
      return td = function () {
        return t;
      }
        ,
        t;
    }
    function ed() {
      var t = Object(r.a)(["Close Trade"]);
      return ed = function () {
        return t;
      }
        ,
        t;
    }
    function nd() {
      var t = Object(r.a)(["Open PnL"]);
      return nd = function () {
        return t;
      }
        ,
        t;
    }
    function rd() {
      var t = Object(r.a)(["Money doubled (2x)"]);
      return rd = function () {
        return t;
      }
        ,
        t;
    }
    function od() {
      var t = Object(r.a)(["Breakeven (1x)"]);
      return od = function () {
        return t;
      }
        ,
        t;
    }
    function ad() {
      var t = Object(r.a)(["Return on sell"]);
      return ad = function () {
        return t;
      }
        ,
        t;
    }
    function id() {
      var t = Object(r.a)(["Payout"]);
      return id = function () {
        return t;
      }
        ,
        t;
    }
    var cd = k.a.getSellbackAmount
      , ld = Object(i.c)((function (t) {
        return {
          formatCurrency: Object(Ps.a)(t),
          isCfdOptions: Object(mi.b)(t),
          userInfo: t.account.userInfo
        };
      }
      ), {
        actionDoSellback: Js.n,
        actionRefrechTrades: Js.q
      })((function (t) {
        var e = t.trade
          , n = t.quote
          , r = t.timeleft
          , i = t.x
          , c = t.y
          , l = t.isCfdOptions
          , u = t.userInfo
          , s = t.formatCurrency
          , d = t.onClose
          , p = t.actionDoSellback
          , f = t.actionRefrechTrades
          , m = Object(o.useState)(null)
          , b = Object(v.a)(m, 2)
          , h = b[0]
          , g = b[1]
          , x = Object(o.useState)(r)
          , O = Object(v.a)(x, 2)
          , y = O[0]
          , j = O[1]
          , E = e.stake
          , w = e.payout
          , C = e.direction
          , M = e.tradeID
          , S = e.optionManualCloseAllowed
          , L = n ? Object(Is.e)(e, n.last) : -1
          , I = Object(Is.f)(L)
          , _ = Math.max((n.last - e.strike) * e.direction / e.optionValue * e.stake - e.stake, -1 * e.stake)
          , P = function () {
            h && (p({
              tradeID: M,
              stake: E
            }, h),
              d());
          }
          , A = function () {
            var t;
            return k.a.closeTrades([[+e.tradeID, +u.userID]], null !== (t = fa.a.getOneClickTrade()) && void 0 !== t && t).then((function () {
              d(),
                f();
            }
            ));
          };
        return y <= 0 && d(),
          Object(o.useEffect)((function () {
            if (h) {
              var t = setInterval((function () {
                j((function (t) {
                  return t - 1;
                }
                ));
              }
              ), 1e3);
              return function () {
                return clearInterval(t);
              };
            }
          }
          ), [h]),
          Object(o.useEffect)((function () {
            l || cd(String(e.tradeID)).then((function (t) {
              t.success ? g(t.amount) : (Object($s.f)($s.c.TRADE_SUBMITTED_ERROR, {
                success: !1,
                message: t.message
              }),
                d());
            }
            )).catch((function (t) {
              console.warn("Could not get sellback amount", t),
                d();
            }
            ));
          }
          ), [e]),
          e.isClosed ? null : a.a.createElement(As.a, null, (function (t) {
            var n, o, u;
            return a.a.createElement(Us, {
              colors: t,
              x: i,
              y: c,
              direction: C
            }, !l && !h && a.a.createElement(Ws, null, a.a.createElement(Ks.a, {
              colors: t,
              width: "100px",
              height: "100px",
              fill: 1 === C ? t.chart.tradeInfo.high.backgroundColor : t.chart.tradeInfo.low.backgroundColor
            })), a.a.createElement(Gs, null, !l && a.a.createElement(Ys, {
              colors: t,
              direction: C
            }, a.a.createElement(qs, {
              colors: t
            }, I), a.a.createElement(Zs, {
              colors: t,
              direction: C
            }, s(E))), !l && a.a.createElement(Ys, {
              colors: t,
              direction: C
            }, a.a.createElement(qs, {
              colors: t
            }, Object(T.t)(id())), a.a.createElement(Zs, {
              colors: t,
              direction: C
            }, w, "%")), !l && a.a.createElement(Ys, {
              className: "highlight",
              colors: t,
              direction: C
            }, a.a.createElement(qs, {
              className: "title",
              colors: t
            }, Object(T.t)(ad())), a.a.createElement(Zs, {
              className: "value",
              colors: t,
              direction: C
            }, s(h))), l && a.a.createElement(Ys, {
              colors: t,
              direction: C
            }, a.a.createElement(qs, {
              colors: t
            }, Object(T.t)(od())), a.a.createElement(Zs, {
              colors: t,
              direction: C
            }, Object(_n.round)(1 === C ? e.strike + (null !== (n = e.optionValue) && void 0 !== n ? n : 0) : e.strike - (null !== (o = e.optionValue) && void 0 !== o ? o : 0), 4))), l && a.a.createElement(Ys, {
              colors: t,
              direction: C
            }, a.a.createElement(qs, {
              colors: t
            }, Object(T.t)(rd())), a.a.createElement(Zs, {
              colors: t,
              direction: C
            }, Object(_n.round)(e.strike + 2 * (null !== (u = e.optionValue) && void 0 !== u ? u : 0), 4))), l && a.a.createElement(Ys, {
              className: "highlight",
              colors: t,
              direction: C
            }, a.a.createElement(qs, {
              className: "title",
              colors: t
            }, Object(T.t)(nd())), a.a.createElement(Zs, {
              className: "value",
              colors: t,
              direction: C
            }, s(_)))), (l && 1 === S || !l) && a.a.createElement(Xs, null, !l && a.a.createElement($u.a, {
              value: y / r * 100,
              filledColor: t.secondary,
              normalColor: "transparent",
              size: 30,
              text: String(y),
              textColor: t.primaryText,
              thickness: 1
            }), a.a.createElement(Qs, {
              onClick: l ? A : P,
              colors: t,
              direction: C
            }, l ? Object(T.t)(ed()) : Object(T.t)(td()))));
          }
          ));
      }
      ))
      , ud = n(40)
      , sd = n(42)
      , dd = n(41)
      , pd = function () {
        return a.a.createElement("div", null, a.a.createElement("svg", {
          width: "40",
          height: "40",
          viewBox: "0 0 40 40"
        }, a.a.createElement("g", {
          fill: "none",
          fillRule: "evenodd"
        }, a.a.createElement("g", null, a.a.createElement("g", {
          transform: "translate(-821 -656) translate(822 657)"
        }, a.a.createElement("circle", {
          cx: "16",
          cy: "16",
          r: "16",
          stroke: "#101924",
          strokeOpacity: ".8",
          strokeWidth: "2"
        }), a.a.createElement("circle", {
          cx: "16",
          cy: "16",
          r: "15",
          fill: "#101923",
          fillOpacity: ".02"
        }), a.a.createElement("path", {
          stroke: "#7E91A7",
          strokeWidth: "2",
          d: "M15.357 31.986c8.243.341 15.499-5.704 16.522-14.036C32.956 9.18 26.72 1.198 17.95.12 9.18-.955 1.199 5.28.122 14.05c-.657 5.346 1.405 10.4 5.1 13.775 1.142 1.041 2.439 1.923 3.86 2.604.804.386 1.648.707 2.525.957l1.594.376"
        }), a.a.createElement("circle", {
          cx: "16",
          cy: "16",
          r: "12",
          fill: "#263346"
        }), a.a.createElement("g", {
          fill: "#FFF",
          transform: "translate(12, 8)"
        }, a.a.createElement("g", null, a.a.createElement("g", null, a.a.createElement("g", null, a.a.createElement("path", {
          d: "M-6.25 7.5h14c.276 0 .5.224.5.5v.5c0 .276-.224.5-.5.5h-14c-.276 0-.5-.224-.5-.5V8c0-.276.224-.5.5-.5z",
          transform: "translate(-683 -665) translate(683 665) translate(.5) rotate(90 .75 8.25)"
        })), a.a.createElement("path", {
          d: "M.5.941h8.647c.276 0 .5.224.5.5 0 .12-.044.237-.123.328L7.786 3.767c-.164.189-.164.469 0 .657l1.738 1.998c.182.208.16.524-.049.705-.09.08-.207.123-.328.123H.5V.941z",
          transform: "translate(-683 -665) translate(683 665) translate(.5)"
        })))))))));
      };
    function fd() {
      var t = Object(r.a)(["\n\tposition: relative;\n"]);
      return fd = function () {
        return t;
      }
        ,
        t;
    }
    function md() {
      var t = Object(r.a)(["\n\twidth: 50px;\n\tmargin-top: ", ";\n\tmargin-left: 12px;\n\tmargin-right: 12px;\n"]);
      return md = function () {
        return t;
      }
        ,
        t;
    }
    var bd = c.c.div(md(), (function (t) {
      return t.isMobile ? "10px" : "95px";
    }
    ))
      , hd = c.c.div(fd());
    function gd() {
      var t = Object(r.a)(["\n\theight: 2px;\n\tdisplay: flex;\n\talign-items: center;\n\ttext-align: center;\n\tbackground: #06141f;\n"]);
      return gd = function () {
        return t;
      }
        ,
        t;
    }
    var vd = c.c.div(gd())
      , xd = function (t) {
        var e = t.trackStepLen;
        return a.a.createElement(vd, {
          height: e
        });
      };
    function Od() {
      var t = Object(r.a)(["\n\tposition: relative;\n\tdisplay: flex;\n\tflex-direction: column;\n\theight: ", "px;\n\tbackground-image: url(", ");\n\tbackground-position: center;\n\tbackground-repeat: no-repeat;\n\tbackground-size: cover;\n"]);
      return Od = function () {
        return t;
      }
        ,
        t;
    }
    var yd = c.c.div(Od(), (function (t) {
      return t.height;
    }
    ), (function (t) {
      return t.isTrackDisabled ? "cfd-ladder-disabled.png" : t.backgroundImage;
    }
    ));
    function jd() {
      var t = Object(r.a)(["\n\tcolor: ", ";\n\tfont-size: 9px;\n\tpadding: 3px 6px;\n\tborder-radius: 10px;\n\tbackground: ", ";\n\tposition: absolute;\n\tleft: 8px;\n\ttop: -2px;\n"]);
      return jd = function () {
        return t;
      }
        ,
        t;
    }
    function Ed() {
      var t = Object(r.a)(["\n\tposition: absolute;\n\ttop: 6px;\n\tleft: -15px;\n\twidth: 65px;\n\theight: 1px;\n\tbackground: #263346;\n"]);
      return Ed = function () {
        return t;
      }
        ,
        t;
    }
    function wd() {
      var t = Object(r.a)(["\n\tposition: absolute;\n\tz-index: 10;\n\t", ";\n\tleft: 0;\n\tright: 0;\n\tdisplay: flex;\n\tflex: 1 1 auto;\n\tjustify-content: space-between;\n\tcolor: #101b27;\n\tfont-size: 10px;\n\tline-height: 11px;\n\ttext-align: center;\n\tpointer-events: none;\n"]);
      return wd = function () {
        return t;
      }
        ,
        t;
    }
    var Cd = c.c.div(wd(), (function (t) {
      return 1 === t.direction ? "top: -6px;" : "bottom: 6px";
    }
    ))
      , kd = c.c.div(Ed())
      , Td = c.c.div(jd(), (function (t) {
        return t.isTrackDisabled ? "#8491A3" : "#fff";
      }
      ), (function (t) {
        return t.isTrackDisabled ? "#2A394E" : "#29533f";
      }
      ))
      , Md = function (t) {
        var e = t.direction
          , n = t.labelText
          , r = t.isTrackDisabled;
        return a.a.createElement(Cd, {
          direction: e
        }, a.a.createElement(kd, null), a.a.createElement(Td, {
          isTrackDisabled: r
        }, n));
      }
      , Sd = function (t) {
        var e = t.stepIndex
          , n = t.labelText
          , r = (t.showArrow,
            t.direction)
          , o = t.trackStepLen
          , i = t.isTrackDisabled
          , c = -1 === r
          , l = 0 === e ? 1 === r ? "cfd-ladder-start-up.png" : "cfd-ladder-start-down.png" : "cfd-ladder-track.png";
        return a.a.createElement(a.a.Fragment, null, a.a.createElement(yd, {
          height: o,
          id: "track-".concat(e),
          backgroundImage: l,
          isTrackDisabled: i,
          alignItems: c ? "flex-end" : "flex-start"
        }, a.a.createElement(Md, {
          direction: r,
          labelText: n,
          isTrackDisabled: i
        })));
      };
    function Ld() {
      var t = Object(r.a)(["\n\tfont-size: 11px;\n"]);
      return Ld = function () {
        return t;
      }
        ,
        t;
    }
    function Id() {
      var t = Object(r.a)(["\n\tfont-weight: 900;\n\tfont-size: 13px;\n"]);
      return Id = function () {
        return t;
      }
        ,
        t;
    }
    function _d() {
      var t = Object(r.a)(["\n\tcolor: #0c121a;\n\ttext-align: center;\n"]);
      return _d = function () {
        return t;
      }
        ,
        t;
    }
    function Pd() {
      var t = Object(r.a)(["\n\tposition: absolute;\n\ttop: -20px;\n\tright: ", "px;\n\tpadding: 7px;\n\tmin-width: 60px;\n\tmin-height: 40px;\n\tbackground: ", ";\n\tbox-sizing: border-box;\n\tborder-radius: 26px;\n"]);
      return Pd = function () {
        return t;
      }
        ,
        t;
    }
    function Ad() {
      var t = Object(r.a)(["\n\tposition: absolute;\n\tright: 0;\n\theight: 3px;\n\twidth: ", "px;\n\tbackground: ", ";\n\tborder-top: 1px solid #101b27;\n\tborder-bottom: 1px solid #101b27;\n"]);
      return Ad = function () {
        return t;
      }
        ,
        t;
    }
    function zd() {
      var t = Object(r.a)(["\n\twidth: 50px;\n\tdisplay: flex;\n\tposition: absolute;\n\tz-index: 6;\n\tpointer-events: none;\n\tbackground-color: transparent;\n\talign-items: ", ";\n\t", ": 0px;\n"]);
      return zd = function () {
        return t;
      }
        ,
        t;
    }
    var Nd = c.c.div.attrs((function (t) {
      return {
        style: {
          height: "".concat(t.height, "px")
        }
      };
    }
    ))(zd(), (function (t) {
      return 1 === t.direction ? "flex-start" : "flex-end";
    }
    ), (function (t) {
      return 1 === t.direction ? "bottom" : "top";
    }
    ))
      , Dd = c.c.div(Ad(), 67, (function (t) {
        return t.backgroundColor;
      }
      ))
      , Rd = c.c.div(Pd(), 67, (function (t) {
        return t.borderColor;
      }
      ))
      , Fd = c.c.div(_d())
      , Bd = Object(c.c)(Fd)(Id())
      , Hd = Object(c.c)(Fd)(Ld())
      , Vd = function (t) {
        var e = t.color
          , n = t.height
          , r = t.direction
          , o = t.moneyText
          , i = t.profitText;
        return a.a.createElement(Nd, {
          height: n,
          direction: r,
          backgroundColor: e,
          id: "slider-value-track"
        }, a.a.createElement(Dd, {
          backgroundColor: e
        }, a.a.createElement(Rd, {
          direction: r,
          borderColor: e
        }, a.a.createElement(Bd, {
          color: e
        }, o), a.a.createElement(Hd, {
          color: e
        }, i))));
      }
      , Wd = function (t) {
        var e = t.lastPrice
          , n = t.direction
          , r = t.cfdRiskAmount
          , i = t.currencySymbol
          , c = t.trackStepLen
          , l = t.trackStepsCount
          , u = t.valueTrackColor
          , s = (t.activeTrackColor,
            t.inactiveTrackColor,
            t.instrument)
          , d = t.expiry
          , p = t.activeDirection
          , f = t.setActiveDirection
          , m = t.trackStepLabelFormatter
          , b = t.selectedCfdSentimentOption
          , h = Object(o.useState)("")
          , x = Object(v.a)(h, 2)
          , O = x[0]
          , y = x[1]
          , j = Object(o.useState)("")
          , E = Object(v.a)(j, 2)
          , w = E[0]
          , C = E[1]
          , k = Object(o.useState)(!1)
          , T = Object(v.a)(k, 2)
          , M = T[0]
          , S = T[1]
          , L = Object(o.useState)(0)
          , I = Object(v.a)(L, 2)
          , _ = I[0]
          , P = I[1]
          , A = function (t) {
            var o = t.target
              , a = t.clientY
              , u = t.touches
              , p = o.getAttribute("id");
            if (p) {
              var f = parseInt(p.match(/\d+/)[0])
                , m = o.getBoundingClientRect().top
                , h = (null !== a && void 0 !== a ? a : u[0].pageY) - m
                , g = -1 === n ? c * f + h : c * (f + 1) - h;
              if (P(g),
                (g < 0 || c * l < g) && N(),
                d && s) {
                var v = s[d];
                C(function (t, e, n, r, o, a) {
                  return 1 === a.id ? "".concat(Math.floor(n / e * 100), "%") : 2 === a.id ? "".concat(Object(_n.round)(+o + t * (r * n) / 100, 4)) : 3 === a.id ? "".concat(Object(_n.round)(n / e, 1), "x") : "";
                }(n, c, g, +v.price, e, b)),
                  y("".concat(i).concat(Math.floor(r * g / c)));
              }
            }
          }
          , z = function () {
            S(!0),
              f(n);
          }
          , N = function () {
            S(!1),
              f(null);
          }
          , D = !!p && p !== n;
        return a.a.createElement(hd, {
          onTouchMove: A,
          onTouchStartCapture: z,
          onTouchEndCapture: N,
          onMouseMove: A,
          onMouseEnter: z,
          onMouseLeave: N
        }, M && a.a.createElement(Vd, {
          moneyText: O,
          profitText: w,
          direction: n,
          color: u,
          height: _
        }), Object(g.a)(Array(l)).map((function (t, e, r) {
          return a.a.createElement(Sd, {
            key: e,
            direction: n,
            trackStepLen: c,
            isTrackDisabled: D,
            showArrow: 1 === n ? 0 === e : e === r.length - 1,
            stepIndex: -1 === n ? e : r.length - e - 1,
            labelText: m(n, e, r)
          });
        }
        )));
      }
      , Ud = Object(i.c)((function (t) {
        return {
          cfdRiskAmount: t.trading.cfdRiskAmount,
          activeDirection: t.trading.cfdOptionsActiveDirection,
          selectedCfdSentimentOption: t.trading.selectedCfdSentimentOption,
          currencySymbol: Object(Ps.e)(t)
        };
      }
      ), {
        actionSetCfdOptionsActiveDirection: fi.J
      })((function (t) {
        var e = t.isMobile
          , n = t.lastPrice
          , r = t.currencySymbol
          , i = t.trackStepLen
          , c = t.trackStepsCount
          , l = t.valueTrackColor
          , u = t.activeTrackColor
          , s = t.inactiveTrackColor
          , d = t.instrument
          , p = t.expiry
          , f = t.cfdRiskAmount
          , m = t.selectedCfdSentimentOption
          , b = t.activeDirection
          , h = t.actionSetCfdOptionsActiveDirection
          , g = Object(o.useState)(b)
          , x = Object(v.a)(g, 2)
          , O = x[0]
          , y = x[1]
          , j = function (t) {
            y(t),
              h(t);
          };
        Object(o.useEffect)((function () {
          y(b);
        }
        ), [b]);
        var E = Math.max(Math.floor(c / 2), 0)
          , w = function (t, e, r) {
            var o = m.id;
            return 2 === o ? "".concat(-1 === t ? Object(_n.round)(+n - (e + 1) * +d[p].price, 5) : Object(_n.round)(+n + (r.length - e) * +d[p].price, 5)) : 3 === o ? "".concat(-1 === t ? e + 1 : r.length - e, "x") : "".concat(-1 === t ? 100 * (e + 1) : 100 * (r.length - e), "%");
          };
        return a.a.createElement(bd, {
          isMobile: e,
          trackStepLen: i
        }, a.a.createElement(Wd, {
          direction: 1,
          lastPrice: n,
          cfdRiskAmount: f,
          currencySymbol: r,
          trackStepsCount: E,
          trackStepLen: i,
          valueTrackColor: l,
          activeTrackColor: u,
          inactiveTrackColor: s,
          instrument: d,
          expiry: p,
          selectedCfdSentimentOption: m,
          activeDirection: O,
          setActiveDirection: j,
          trackStepLabelFormatter: w
        }), a.a.createElement(xd, {
          trackStepLen: 10
        }), a.a.createElement(Wd, {
          direction: -1,
          lastPrice: n,
          cfdRiskAmount: f,
          currencySymbol: r,
          trackStepsCount: E,
          trackStepLen: i,
          valueTrackColor: l,
          activeTrackColor: u,
          inactiveTrackColor: s,
          instrument: d,
          expiry: p,
          activeDirection: O,
          selectedCfdSentimentOption: m,
          setActiveDirection: j,
          trackStepLabelFormatter: w
        }));
      }
      ));
    function Gd() {
      var t = Object(r.a)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 30px;\n  height: 30px;\n  width: 30px;\n  line-height: 28px;\n  outline: none;\n  border: none;\n\n  font-size: ", "px;\n  font-weight: 500;\n  letter-spacing: 0.1px;\n  text-align: center;\n  text-transform: uppercase;\n  cursor: pointer;\n  margin-right: -10px;\n\n  color: ", ";\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);\n  background-color: ", ";\n\n  &.resolution-button {\n    width: auto !important;\n  }\n\n  span {\n    display: inline-block;\n  }\n\n  .period-label {\n    border-bottom: 2px solid #75f986;\n    font-size: 14px;\n    line-height: 20px;\n  }\n\n  .arrow-period-label {\n    margin-left: 10px;\n    color: white;\n    font-size: 16px;\n  }\n"]);
      return Gd = function () {
        return t;
      }
        ,
        t;
    }
    function Yd() {
      var t = Object(r.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 5px 5px 0 5px;\n\n  .container {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    @media (orientation: portrait) {\n      flex: 1;\n    }\n  }\n"]);
      return Yd = function () {
        return t;
      }
        ,
        t;
    }
    n(372);
    var qd = c.c.div(Yd())
      , Zd = c.c.button(Gd(), (function (t) {
        return t.smallText ? "9" : "12";
      }
      ), (function (t) {
        return t.colors.primaryText;
      }
      ), (function (t) {
        return t.colors.panelBorder;
      }
      ))
      , Xd = Object(i.c)((function (t) {
        return {
          colors: t.theme,
          isMobile: t.registry.isMobile,
          isCfdOptions: Object(mi.b)(t),
          inTradingHours: t.trading.inTradingHours,
          chartLibraryConfig: t.registry.data.partnerConfig.chartLibraryConfig,
          currentChartType: t.registry.currentChartType
        };
      }
      ), {
        actionChangeChartType: Zi.h
      })((function (t) {
        var e, n, r, i, c, l, u = Object(o.useState)({
          isShow: !1
        }), s = Object(v.a)(u, 2), d = s[0], p = s[1], f = t.isCfdOptions || ["candlestick", "ohlc", "heikinashi"].includes((null === t || void 0 === t ? void 0 : t.chartType) || "") ? null === t || void 0 === t || null === (e = t.periodOptions) || void 0 === e ? void 0 : e.filter((function (t) {
          return t.supportedOnCandleChartType;
        }
        )) : null === t || void 0 === t || null === (n = t.periodOptions) || void 0 === n ? void 0 : n.filter((function (t) {
          return t.supportedOnLineChartType;
        }
        ));
        return a.a.createElement(a.a.Fragment, null, a.a.createElement(qd, null, a.a.createElement("div", {
          className: "container chart-options-mobile"
        }, a.a.createElement(rc, {
          colors: t.colors,
          isMobile: t.isMobile
        }), a.a.createElement(et, null, a.a.createElement(nt, null, a.a.createElement(ot, null, null === (r = t.chartLibraryConfig) || void 0 === r || null === (i = r.allowedLibraries) || void 0 === i ? void 0 : i.map((function (e) {
          return a.a.createElement(a.a.Fragment, null, t.currentChartType !== e && a.a.createElement(Zd, {
            isMobile: t.isMobile,
            colors: null === t || void 0 === t ? void 0 : t.colors,
            onClick: function () {
              return function (e) {
                t.actionChangeChartType(e);
              }(e);
            },
            className: "chart-button-switch-mobile"
          }, a.a.createElement("div", {
            "data-tip": "",
            "data-for": "switch_chart_button"
          }, a.a.createElement(ja.a, {
            id: "switch_chart_tooltipped"
          }, a.a.createElement("div", {
            className: "switch-chart-view-wrapper"
          }, a.a.createElement(ne.a, {
            width: 16,
            height: 16,
            verticalAlign: "sub",
            src: e === Ui.Basic ? "".concat("", "/static/icons/chart/highcharts.svg") : "".concat("", "/static/icons/chart/lightweight-chart.svg")
          }))), a.a.createElement(M.a, {
            id: "switch_chart_button",
            place: "bottom",
            className: "react-tooltip"
          }))));
        }
        ))))), Object(Vn.a)(t.isMobile) && t.inTradingHours && a.a.createElement(a.a.Fragment, null, a.a.createElement(Zd, {
          isMobile: t.isMobile,
          colors: t.colors,
          onClick: function (t) {
            return p(function (t, e) {
              var n = t.currentTarget.getBoundingClientRect();
              return {
                isShow: e,
                top: n.bottom,
                left: n.left
              };
            }(t, !0));
          },
          smallText: "tick" === (null === t || void 0 === t || null === (c = t.timeframe) || void 0 === c ? void 0 : c.period),
          className: "resolution-button"
        }, a.a.createElement("span", {
          className: "period-label"
        }, null === t || void 0 === t || null === (l = t.timeframe) || void 0 === l ? void 0 : l.periodLabel), a.a.createElement("span", {
          className: "arrow-period-label"
        }, "\u25be")), d.isShow && a.a.createElement(S.a, {
          top: d.top,
          left: d.left,
          colors: t.colors,
          className: "scrollable",
          isMobile: t.isMobile
        }, null === f || void 0 === f ? void 0 : f.map((function (e) {
          return a.a.createElement(S.b, {
            colors: t.colors,
            key: e.period,
            onClick: function () {
              return n = e,
                p({
                  isShow: !1
                }),
                void (t.onChangeTimeframe && t.onChangeTimeframe(n));
              var n;
            },
            active: t.timeframe === e
          }, a.a.createElement("span", null, e.periodToolTip));
        }
        ))))), a.a.createElement("div", {
          className: "chart-option-select"
        }, a.a.createElement(al, null), t.isCfdOptions && t.isHighCharts && a.a.createElement(Mc, {
          colors: t.colors
        }))), d.isShow && a.a.createElement(Ot.a, {
          onClick: function () {
            return p({
              isShow: !1
            });
          }
        }));
      }
      ))
      , Qd = n(34)
      , Jd = n(300)
      , Kd = n(53);
    n(373);
    function $d(t, e) {
      var n = Object(u.a)({}, t);
      for (var r in e)
        "object" != typeof t[r] || null === t[r] || Array.isArray(t[r]) ? void 0 !== e[r] && (n[r] = e[r]) : n[r] = $d(t[r], e[r]);
      return n;
    }
    var tp = {
      mobile: {
        disabled_features: ["left_toolbar", "header_widget", "timeframes_toolbar", "edit_buttons_in_legend", "context_menus", "control_bar", "border_around_the_chart"],
        enabled_features: []
      }
    }
      , ep = {
        width: 800,
        height: 500,
        interval: "1D",
        timezone: "Etc/UTC",
        container: "",
        library_path: "",
        locale: "en",
        widgetbar: {
          details: !1,
          watchlist: !1,
          watchlist_settings: {
            default_symbols: []
          }
        },
        overrides: {
          "mainSeriesProperties.showCountdown": !1
        },
        studies_overrides: {},
        trading_customization: {
          position: {},
          order: {}
        },
        brokerConfig: {
          configFlags: {}
        },
        fullscreen: !1,
        autosize: !1,
        disabled_features: [],
        enabled_features: [],
        debug: !1,
        logo: {},
        time_frames: [{
          text: "5y",
          resolution: "1W"
        }, {
          text: "1y",
          resolution: "1W"
        }, {
          text: "6m",
          resolution: "120"
        }, {
          text: "3m",
          resolution: "60"
        }, {
          text: "1m",
          resolution: "30"
        }, {
          text: "5d",
          resolution: "5"
        }, {
          text: "1d",
          resolution: "1"
        }],
        client_id: "0",
        user_id: "0",
        charts_storage_api_version: "1.0",
        favorites: {
          intervals: [],
          chartTypes: []
        }
      }
      , np = !1;
    var rp = function () {
      function t(e) {
        if (Object(f.a)(this, t),
          this._id = "tradingview_".concat((1048576 * (1 + Math.random()) | 0).toString(16).substring(1)),
          this._ready = !1,
          this._readyHandlers = [],
          this._onWindowResize = this._autoResizeChart.bind(this),
          !e.datafeed)
          throw new Error("Datafeed is not defined");
        if (this._options = $d(ep, e),
          e.preset) {
          var n = tp[e.preset];
          n ? (void 0 !== this._options.disabled_features ? this._options.disabled_features = this._options.disabled_features.concat(n.disabled_features) : this._options.disabled_features = n.disabled_features,
            void 0 !== this._options.enabled_features ? this._options.enabled_features = this._options.enabled_features.concat(n.enabled_features) : this._options.enabled_features = n.enabled_features) : console.warn("Unknown preset: `" + e.preset + "`");
        }
        "Dark" === this._options.theme && void 0 === this._options.loading_screen && (this._options.loading_screen = {
          backgroundColor: "#131722"
        }),
          this._options.debug && (np || (np = !0,
            console.log("Using CL v22.032 (internal id e2a841ff @ 2022-07-06T11:53:07.702Z)"))),
          this._create();
      }
      return Object(Kd.a)(t, [{
        key: "onChartReady",
        value: function (t) {
          this._ready ? t.call(this) : this._readyHandlers.push(t);
        }
      }, {
        key: "headerReady",
        value: function () {
          var t = this;
          return this._innerWindowLoaded.then((function () {
            return t._innerWindow().headerReady();
          }
          ));
        }
      }, {
        key: "onGrayedObjectClicked",
        value: function (t) {
          this._doWhenInnerApiLoaded((function (e) {
            e.onGrayedObjectClicked(t);
          }
          ));
        }
      }, {
        key: "onShortcut",
        value: function (t, e) {
          this._doWhenInnerWindowLoaded((function (n) {
            n.createShortcutAction(t, e);
          }
          ));
        }
      }, {
        key: "subscribe",
        value: function (t, e) {
          this._doWhenInnerApiLoaded((function (n) {
            n.subscribe(t, e);
          }
          ));
        }
      }, {
        key: "unsubscribe",
        value: function (t, e) {
          this._doWhenInnerApiLoaded((function (n) {
            n.unsubscribe(t, e);
          }
          ));
        }
      }, {
        key: "chart",
        value: function (t) {
          return this._innerAPI().chart(t);
        }
      }, {
        key: "getLanguage",
        value: function () {
          return this._options.locale;
        }
      }, {
        key: "setSymbol",
        value: function (t, e, n) {
          this._innerAPI().changeSymbol(t, e, n);
        }
      }, {
        key: "remove",
        value: function () {
          window.removeEventListener("resize", this._onWindowResize),
            this._readyHandlers.splice(0, this._readyHandlers.length),
            delete window[this._id],
            this._iFrame.parentNode && this._iFrame.parentNode.removeChild(this._iFrame);
        }
      }, {
        key: "closePopupsAndDialogs",
        value: function () {
          this._doWhenInnerApiLoaded((function (t) {
            t.closePopupsAndDialogs();
          }
          ));
        }
      }, {
        key: "selectLineTool",
        value: function (t) {
          this._innerAPI().selectLineTool(t);
        }
      }, {
        key: "selectedLineTool",
        value: function () {
          return this._innerAPI().selectedLineTool();
        }
      }, {
        key: "save",
        value: function (t) {
          this._innerAPI().saveChart(t);
        }
      }, {
        key: "load",
        value: function (t, e) {
          this._innerAPI().loadChart({
            json: t,
            extendedData: e
          });
        }
      }, {
        key: "getSavedCharts",
        value: function (t) {
          this._innerAPI().getSavedCharts(t);
        }
      }, {
        key: "loadChartFromServer",
        value: function (t) {
          this._innerAPI().loadChartFromServer(t);
        }
      }, {
        key: "saveChartToServer",
        value: function (t, e, n) {
          this._innerAPI().saveChartToServer(t, e, n);
        }
      }, {
        key: "removeChartFromServer",
        value: function (t, e) {
          this._innerAPI().removeChartFromServer(t, e);
        }
      }, {
        key: "onContextMenu",
        value: function (t) {
          this._doWhenInnerApiLoaded((function (e) {
            e.onContextMenu(t);
          }
          ));
        }
      }, {
        key: "createButton",
        value: function (t) {
          return this._innerWindow().createButton(t);
        }
      }, {
        key: "createDropdown",
        value: function (t) {
          return this._innerWindow().createDropdown(t);
        }
      }, {
        key: "showNoticeDialog",
        value: function (t) {
          this._doWhenInnerApiLoaded((function (e) {
            e.showNoticeDialog(t);
          }
          ));
        }
      }, {
        key: "showConfirmDialog",
        value: function (t) {
          this._doWhenInnerApiLoaded((function (e) {
            e.showConfirmDialog(t);
          }
          ));
        }
      }, {
        key: "showLoadChartDialog",
        value: function () {
          this._innerAPI().showLoadChartDialog();
        }
      }, {
        key: "showSaveAsChartDialog",
        value: function () {
          this._innerAPI().showSaveAsChartDialog();
        }
      }, {
        key: "symbolInterval",
        value: function () {
          return this._innerAPI().getSymbolInterval();
        }
      }, {
        key: "mainSeriesPriceFormatter",
        value: function () {
          return this._innerAPI().mainSeriesPriceFormatter();
        }
      }, {
        key: "getIntervals",
        value: function () {
          return this._innerAPI().getIntervals();
        }
      }, {
        key: "getStudiesList",
        value: function () {
          return this._innerAPI().getStudiesList();
        }
      }, {
        key: "getStudyInputs",
        value: function (t) {
          return this._innerAPI().getStudyInputs(t);
        }
      }, {
        key: "addCustomCSSFile",
        value: function (t) {
          this._innerWindow().addCustomCSSFile(t);
        }
      }, {
        key: "applyOverrides",
        value: function (t) {
          this._options = $d(this._options, {
            overrides: t
          }),
            this._doWhenInnerWindowLoaded((function (e) {
              e.applyOverrides(t);
            }
            ));
        }
      }, {
        key: "applyStudiesOverrides",
        value: function (t) {
          this._doWhenInnerWindowLoaded((function (e) {
            e.applyStudiesOverrides(t);
          }
          ));
        }
      }, {
        key: "watchList",
        value: function () {
          return this._innerAPI().watchlist();
        }
      }, {
        key: "news",
        value: function () {
          return this._innerAPI().news();
        }
      }, {
        key: "widgetbar",
        value: function () {
          return this._innerAPI().widgetbar();
        }
      }, {
        key: "activeChart",
        value: function () {
          return this._innerAPI().activeChart();
        }
      }, {
        key: "chartsCount",
        value: function () {
          return this._innerAPI().chartsCount();
        }
      }, {
        key: "layout",
        value: function () {
          return this._innerAPI().layout();
        }
      }, {
        key: "setLayout",
        value: function (t) {
          this._innerAPI().setLayout(t);
        }
      }, {
        key: "layoutName",
        value: function () {
          return this._innerAPI().layoutName();
        }
      }, {
        key: "changeTheme",
        value: function (t, e) {
          return this._innerWindow().changeTheme(t, e);
        }
      }, {
        key: "getTheme",
        value: function () {
          return this._innerWindow().getTheme();
        }
      }, {
        key: "takeScreenshot",
        value: function () {
          this._doWhenInnerApiLoaded((function (t) {
            t.takeScreenshot();
          }
          ));
        }
      }, {
        key: "lockAllDrawingTools",
        value: function () {
          return this._innerAPI().lockAllDrawingTools();
        }
      }, {
        key: "hideAllDrawingTools",
        value: function () {
          return this._innerAPI().hideAllDrawingTools();
        }
      }, {
        key: "drawOnAllCharts",
        value: function (t) {
          this._innerAPI().drawOnAllCharts(t);
        }
      }, {
        key: "magnetEnabled",
        value: function () {
          return this._innerAPI().magnetEnabled();
        }
      }, {
        key: "magnetMode",
        value: function () {
          return this._innerAPI().magnetMode();
        }
      }, {
        key: "undoRedoState",
        value: function () {
          return this._innerAPI().undoRedoState();
        }
      }, {
        key: "setIntervalLinkingEnabled",
        value: function (t) {
          this._innerAPI().setIntervalLinkingEnabled(t);
        }
      }, {
        key: "setTimeFrame",
        value: function (t) {
          this._innerAPI().setTimeFrame(t);
        }
      }, {
        key: "symbolSync",
        value: function () {
          return this._innerAPI().symbolSync();
        }
      }, {
        key: "intervalSync",
        value: function () {
          return this._innerAPI().intervalSync();
        }
      }, {
        key: "crosshairSync",
        value: function () {
          return this._innerAPI().crosshairSync();
        }
      }, {
        key: "timeSync",
        value: function () {
          return this._innerAPI().timeSync();
        }
      }, {
        key: "getAllFeatures",
        value: function () {
          return this._innerWindow().getAllFeatures();
        }
      }, {
        key: "clearUndoHistory",
        value: function () {
          return this._innerAPI().clearUndoHistory();
        }
      }, {
        key: "undo",
        value: function () {
          return this._innerAPI().undo();
        }
      }, {
        key: "redo",
        value: function () {
          return this._innerAPI().redo();
        }
      }, {
        key: "startFullscreen",
        value: function () {
          this._innerAPI().startFullscreen();
        }
      }, {
        key: "exitFullscreen",
        value: function () {
          this._innerAPI().exitFullscreen();
        }
      }, {
        key: "takeClientScreenshot",
        value: function (t) {
          return this._innerAPI().takeClientScreenshot(t);
        }
      }, {
        key: "navigationButtonsVisibility",
        value: function () {
          return this._innerWindow().getNavigationButtonsVisibility();
        }
      }, {
        key: "paneButtonsVisibility",
        value: function () {
          return this._innerWindow().getPaneButtonsVisibility();
        }
      }, {
        key: "dateFormat",
        value: function () {
          return this._innerWindow().getDateFormat();
        }
      }, {
        key: "_innerAPI",
        value: function () {
          return this._innerWindow().tradingViewApi;
        }
      }, {
        key: "_innerWindow",
        value: function () {
          return this._iFrame.contentWindow;
        }
      }, {
        key: "_doWhenInnerWindowLoaded",
        value: function (t) {
          var e = this;
          this._ready ? t(this._innerWindow()) : this._innerWindowLoaded.then((function () {
            t(e._innerWindow());
          }
          ));
        }
      }, {
        key: "_doWhenInnerApiLoaded",
        value: function (t) {
          var e = this;
          this._doWhenInnerWindowLoaded((function (n) {
            n.doWhenApiIsReady((function () {
              return t(e._innerAPI());
            }
            ));
          }
          ));
        }
      }, {
        key: "_autoResizeChart",
        value: function () {
          this._options.fullscreen && (this._iFrame.style.height = window.innerHeight + "px");
        }
      }, {
        key: "_create",
        value: function () {
          var t = this
            , e = this._render();
          this._options.container_id && console.warn("`container_id` is now deprecated. Please use `container` instead to either still pass a string or an `HTMLElement`.");
          var n = this._options.container_id || this._options.container
            , r = "string" == typeof n ? document.getElementById(n) : n;
          if (null === r)
            throw new Error("There is no such element - #".concat(this._options.container));
          r.innerHTML = e,
            this._iFrame = r.querySelector("#".concat(this._id));
          var o = this._iFrame;
          (this._options.autosize || this._options.fullscreen) && (o.style.width = "100%",
            this._options.fullscreen || (o.style.height = "100%")),
            window.addEventListener("resize", this._onWindowResize),
            this._onWindowResize(),
            this._innerWindowLoaded = new Promise((function (t) {
              o.addEventListener("load", (function e() {
                o.removeEventListener("load", e, !1),
                  t();
              }
              ), !1);
            }
            )),
            this._innerWindowLoaded.then((function () {
              t._innerWindow().widgetReady((function () {
                t._ready = !0;
                var n, r = Object(x.a)(t._readyHandlers);
                try {
                  for (r.s(); !(n = r.n()).done;) {
                    var o = n.value;
                    try {
                      o.call(t);
                    } catch (e) {
                      console.error(e);
                    }
                  }
                } catch (a) {
                  r.e(a);
                } finally {
                  r.f();
                }
                t._innerWindow().initializationFinished();
              }
              ));
            }
            ));
        }
      }, {
        key: "_render",
        value: function () {
          var t = window;
          if (t[this._id] = {
            datafeed: this._options.datafeed,
            customFormatters: this._options.custom_formatters || this._options.customFormatters,
            brokerFactory: this._options.broker_factory || this._options.brokerFactory,
            overrides: this._options.overrides,
            studiesOverrides: this._options.studies_overrides,
            tradingCustomization: this._options.trading_customization,
            disabledFeatures: this._options.disabled_features,
            enabledFeatures: this._options.enabled_features,
            brokerConfig: this._options.broker_config || this._options.brokerConfig,
            restConfig: this._options.restConfig,
            favorites: this._options.favorites,
            logo: this._options.logo,
            numeric_formatting: this._options.numeric_formatting,
            rss_news_feed: this._options.rss_news_feed,
            newsProvider: this._options.news_provider,
            loadLastChart: this._options.load_last_chart,
            saveLoadAdapter: this._options.save_load_adapter,
            loading_screen: this._options.loading_screen,
            settingsAdapter: this._options.settings_adapter,
            getCustomIndicators: this._options.custom_indicators_getter,
            additionalSymbolInfoFields: this._options.additional_symbol_info_fields,
            headerWidgetButtonsMode: this._options.header_widget_buttons_mode,
            customTranslateFunction: this._options.custom_translate_function,
            symbolSearchComplete: this._options.symbol_search_complete,
            contextMenu: this._options.context_menu,
            settingsOverrides: this._options.settings_overrides
          },
            this._options.saved_data)
            t[this._id].chartContent = {
              json: this._options.saved_data
            },
              this._options.saved_data_meta_info && (t[this._id].chartContentExtendedData = this._options.saved_data_meta_info);
          else if (!this._options.load_last_chart && !this._options.symbol)
            throw new Error("Symbol is not defined: either 'symbol' or 'load_last_chart' option must be set");
          var e = (this._options.library_path || "") + "".concat(encodeURIComponent(this._options.locale), "-tv-chart.e2a841ff.html#symbol=") + encodeURIComponent(this._options.symbol || "") + "&interval=" + encodeURIComponent(this._options.interval) + (this._options.timeframe ? "&timeframe=" + encodeURIComponent(this._options.timeframe) : "") + (this._options.toolbar_bg ? "&toolbarbg=" + encodeURIComponent(this._options.toolbar_bg.replace("#", "")) : "") + (this._options.studies_access ? "&studiesAccess=" + encodeURIComponent(JSON.stringify(this._options.studies_access)) : "") + "&widgetbar=" + encodeURIComponent(JSON.stringify(this._options.widgetbar)) + (this._options.drawings_access ? "&drawingsAccess=" + encodeURIComponent(JSON.stringify(this._options.drawings_access)) : "") + "&timeFrames=" + encodeURIComponent(JSON.stringify(this._options.time_frames)) + "&locale=" + encodeURIComponent(this._options.locale) + "&uid=" + encodeURIComponent(this._id) + "&clientId=" + encodeURIComponent(String(this._options.client_id)) + "&userId=" + encodeURIComponent(String(this._options.user_id)) + (this._options.charts_storage_url ? "&chartsStorageUrl=" + encodeURIComponent(this._options.charts_storage_url) : "") + (this._options.charts_storage_api_version ? "&chartsStorageVer=" + encodeURIComponent(this._options.charts_storage_api_version) : "") + (this._options.custom_css_url ? "&customCSS=" + encodeURIComponent(this._options.custom_css_url) : "") + (this._options.custom_font_family ? "&customFontFamily=" + encodeURIComponent(this._options.custom_font_family) : "") + (this._options.auto_save_delay ? "&autoSaveDelay=" + encodeURIComponent(String(this._options.auto_save_delay)) : "") + "&debug=" + encodeURIComponent(String(this._options.debug)) + (this._options.snapshot_url ? "&snapshotUrl=" + encodeURIComponent(this._options.snapshot_url) : "") + (this._options.timezone ? "&timezone=" + encodeURIComponent(this._options.timezone) : "") + (this._options.study_count_limit ? "&studyCountLimit=" + encodeURIComponent(String(this._options.study_count_limit)) : "") + (this._options.symbol_search_request_delay ? "&ssreqdelay=" + encodeURIComponent(String(this._options.symbol_search_request_delay)) : "") + (this._options.compare_symbols ? "&compareSymbols=" + encodeURIComponent(JSON.stringify(this._options.compare_symbols)) : "") + (this._options.theme ? "&theme=" + encodeURIComponent(String(this._options.theme)) : "") + (this._options.header_widget_buttons_mode ? "&header_widget_buttons_mode=" + encodeURIComponent(String(this._options.header_widget_buttons_mode)) : "") + (this._options.time_scale ? "&time_scale=" + encodeURIComponent(JSON.stringify(this._options.time_scale)) : "");
          return '<iframe id="' + this._id + '" name="' + this._id + '"  src="' + e + '"' + (this._options.autosize || this._options.fullscreen ? "" : ' width="' + this._options.width + '" height="' + this._options.height + '"') + ' title="Financial Chart" frameborder="0" allowTransparency="true" scrolling="no" allowfullscreen style="display:block;"></iframe>';
        }
      }]),
        t;
    }();
    window.TradingView = window.TradingView || {},
      window.TradingView.version = function () {
        return "CL v22.032 (internal id e2a841ff @ 2022-07-06T11:53:07.702Z)";
      }
      ;
    var op = new Map;
    function ap(t, e, n, r, o, a) {
      var i = t.full_name
        , c = {
          id: r,
          callback: n
        }
        , l = op.get(i);
      l ? l.handlers.push(c) : (l = {
        subscribeUID: r,
        resolution: e,
        lastDailyBar: a,
        handlers: [c]
      },
        op.set(i, l));
    }
    function ip(t) {
      var e, n = Object(x.a)(op.keys());
      try {
        for (n.s(); !(e = n.n()).done;) {
          var r = e.value
            , o = op.get(r)
            , a = o.handlers.findIndex((function (e) {
              return e.id === t;
            }
            ));
          if (-1 !== a && (o.handlers.splice(a, 1),
            0 === o.handlers.length)) {
            console.log("[unsubscribeBars]: Unsubscribe from streaming. Channel:", r),
              op.delete(r);
            break;
          }
        }
      } catch (i) {
        n.e(i);
      } finally {
        n.f();
      }
    }
    var cp = {
      getDeadPeriod: function (t, e, n) {
        return n ? t - 1e3 * e.deadPeriod : 0;
      },
      getGameTime: function (t, e) {
        if (!e)
          return 0;
        var n = t.timestamp;
        t.expiry;
        return Number(n);
      },
      overrideChartCss: function (t) {
        return "\n    .tab-DggvOZTm.active-DggvOZTm,\n    .tab-DggvOZTm.active-DggvOZTm span,\n    .button-xRobF0EE.size-small-xRobF0EE.color-brand-xRobF0EE.variant-primary-xRobF0EE { \n      background-color: ".concat(t.upColor, " !important;\n      color: #ffffff !important;\n      border-color: ").concat(t.upColor, " !important;\n    }\n    .button-xRobF0EE.size-small-xRobF0EE.color-brand-xRobF0EE.variant-secondary-xRobF0EE {\n      color: ").concat(t.upColor, " !important;\n      border-color: ").concat(t.upColor, " !important;\n      cursor: pointer;\n    }\n    .button-xRobF0EE.size-small-xRobF0EE.color-brand-xRobF0EE.variant-secondary-xRobF0EE:hover {\n      color: #ffffff !important;\n      border-color: ").concat(t.upColor, " !important;\n      background-color: ").concat(t.upColor, " !important;\n      cursor: pointer;\n    }\n    .inline-2yU8ifXU .isActive-2Vpz_LXc .js-button-text,\n    .inline-2yU8ifXU .isActive-2Vpz_LXc .icon-2Vpz_LXc,\n    .sliderRow-1emAA4_D.tabs-3I2ohC86 .isActive-3SbREAgE,\n    .button-5-QHyx-s.isActive-5-QHyx-s  .icon-5-QHyx-s,\n    .highlighted-1Qud56dI.highlightedText-ZzQNZGNo,\n    .symbolTitle-ZzQNZGNo .highlighted-1Qud56dI,\n    .title-1gYObTuJ .highlighted-1Qud56dI,\n    .tab-1KEqJy8_.tab-3I2ohC86.active-3I2ohC86,\n    .tab-1KEqJy8_.tab-3I2ohC86.active-3I2ohC86:hover,\n    .tab-1KEqJy8_.withHover-1KEqJy8_:hover\n    {\n      color: ").concat(t.upColor, " !important;\n    }\n\n    .day-3r0qUNSu.selected-3r0qUNSu.currentDay-3r0qUNSu,\n    .item-2IihgTnv.withIcon-2IihgTnv.isActive-2IihgTnv,\n    .centerElement-RnpzRzG6 .container-113jHcZc,\n    .sliderRow-1emAA4_D.tabs-3I2ohC86 .slider-3I2ohC86.slider-3GYrNsPp .inner-3GYrNsPp,\n    .dropdown-2R6OKuTS .item-2IihgTnv.isActive-2IihgTnv,\n    .slider-3RfwXbxu.inner-3RfwXbxu,\n    .item-2IihgTnv.isActive-2IihgTnv.hovered-2IihgTnv,\n    .day-3r0qUNSu.selected-3r0qUNSu.isOnHighlightedEdge-3r0qUNSu,\n    .day-3r0qUNSu.isOnHighlightedEdge-3r0qUNSu.currentDay-3r0qUNSu,\n    .day-3r0qUNSu::after,\n    .day-3r0qUNSu.isOnHighlightedEdge-3r0qUNSu,\n    .day-3r0qUNSu.selected-3r0qUNSu,\n    .inner-3RfwXbxu\n    {\n      background-color: ").concat(t.upColor, " !important;\n      border-color: ").concat(t.upColor, " !important;\n      color: #ffffff !important;\n    }\n\n    .box-2eXD4rIf.check-2eXD4rIf {\n      background-color: ").concat(t.upColorCheckBoxBackground, " !important;\n      border-color: ").concat(t.upColor, " !important;\n      color: #ffffff !important;\n    }\n\n    .highlight-QDd7xRJ1.shown-QDd7xRJ1\n    {\n      border-color: ").concat(t.upColor, " !important;\n    }\n\n    .day-3r0qUNSu.withinSelectedRange-3r0qUNSu {\n      background-color: ").concat(t.upColorCheckBoxBackground, " !important;\n      border-color: ").concat(t.upColorCheckBoxBackground, " !important;\n      color: #ffffff !important;\n\n    }\n\n    .day-3r0qUNSu.currentDay-3r0qUNSu {\n      color: #ffffff !important;\n    }\n  ");
      },
      getMaxGameTime: function (t, e, n, r) {
        var o = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]
          , a = 0;
        a = e / 1e3 > t ? o ? t - 8e3 : t - 12e3 : e / 1e3;
        var i = o ? r + 60 * n * 1e3 * 2 : r + 60 * n * 1e3;
        return e < i && (a = (o ? i + 60 * n * 1e3 * 2 : i + 60 * n * 1e3) / 1e3),
          a - a % (60 * n);
      }
    }
      , lp = n(309)
      , up = n.n(lp)
      , sp = function () {
        var t = Intl.DateTimeFormat().resolvedOptions().timeZone || "exchange";
        return "Asia/Saigon" === t ? "Asia/Ho_Chi_Minh" : t;
      };
    function dp() {
      var t = new RegExp("[\\?&]lang=([^&#]*)").exec(location.search);
      return null === t ? null : decodeURIComponent(t[1].replace(/\+/g, " "));
    }
    var pp = function (t) {
      Object(b.a)(n, t);
      var e = Object(h.a)(n);
      function n() {
        var t;
        Object(f.a)(this, n);
        for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
          a[i] = arguments[i];
        return (t = e.call.apply(e, [this].concat(a))).tvWidget = null,
          t.ref = o.createRef(),
          t.fetchCandlesCancelToken = null,
          t.data = void 0,
          t.currentInstrument = "",
          t.timeLineId = void 0,
          t.deadLineId = void 0,
          t.deadLine = void 0,
          t.tradeOpenLines = [],
          t.timeDistance = "",
          t.linetext = void 0,
          t.prevExpiry = 0,
          t.chartPeriod = void 0,
          t.removeTradeShape = function () {
            var e, n;
            t.timeLineId && t.tvWidget && (null === (e = t.tvWidget) || void 0 === e || e.chart().removeEntity(t.timeLineId),
              null === (n = t.tvWidget) || void 0 === n || n.chart().removeEntity(t.deadLineId),
              t.removeAllOpenLines());
          }
          ,
          t.removeAllOpenLines = function () {
            t.tradeOpenLines.forEach((function (e) {
              var n;
              null === (n = t.tvWidget) || void 0 === n || n.chart().removeEntity(e);
            }
            )),
              t.tradeOpenLines = [];
          }
          ,
          t.getShapeById = function (e) {
            try {
              var n;
              return null === (n = t.tvWidget) || void 0 === n ? void 0 : n.chart().getShapeById(e);
            } catch (r) {
              return;
            }
          }
          ,
          t.renderGame = function () {
            var e;
            if (t.props.isCfdOptions && t.removeTradeShape(),
              t.props.game && t.tvWidget && !t.props.isCfdOptions && (null === (e = t.state) || void 0 === e ? void 0 : e.loaded))
              try {
                var n, r, o, a, i, c, l = t.props.game.expiry, s = Object(_n.find)(null === (n = t.props.trading) || void 0 === n ? void 0 : n.instruments, ["instrumentID", t.props.instrument]), d = t.lastBarsCache.get(s.name), p = ((null === d || void 0 === d ? void 0 : d.time) || 0) / 1e3 + 1e5 * ((null === (r = t.chartPeriod) || void 0 === r ? void 0 : r.candleStickPeriod) || 1), f = cp.getGameTime(t.props.game, t.chartPeriod), m = cp.getDeadPeriod(f, t.props.game, t.chartPeriod), b = cp.getMaxGameTime(p, f, (null === (o = t.chartPeriod) || void 0 === o ? void 0 : o.candleStickPeriod) || 1, null === d || void 0 === d ? void 0 : d.time, !0);
                if (t.timeLineId)
                  t.getShapeById(t.timeLineId) || (t.timeLineId = t.tvWidget.chart().createShape({
                    time: b
                  }, {
                    shape: "vertical_line",
                    disableSelection: !0
                  }));
                else
                  t.timeLineId = t.tvWidget.chart().createShape({
                    time: b
                  }, {
                    shape: "vertical_line",
                    disableSelection: !0
                  });
                var h = cp.getMaxGameTime(p, l / 60 > 5 ? m : m - 3e4, (null === (a = t.chartPeriod) || void 0 === a ? void 0 : a.candleStickPeriod) || 1, null === d || void 0 === d ? void 0 : d.time, !1);
                if (t.deadLineId)
                  t.getShapeById(t.deadLineId) || (t.deadLineId = t.tvWidget.chart().createShape({
                    time: h
                  }, {
                    shape: "vertical_line",
                    disableSelection: !0
                  }));
                else
                  t.deadLineId = t.tvWidget.chart().createShape({
                    time: h
                  }, {
                    shape: "vertical_line",
                    disableSelection: !0
                  });
                var g = t.props.theme.chart
                  , v = g.expiryLine.color
                  , x = g.deadPeriodLine.color
                  , O = t.tvWidget.chart().getShapeById(t.timeLineId);
                O.setProperties({
                  linecolor: v,
                  text: up()(f).format("HH:mm:ss"),
                  showLabel: !0,
                  showTime: !1,
                  textcolor: v
                });
                var y = O.getPoints();
                O.setPoints(y.map((function (t) {
                  return Object(u.a)(Object(u.a)({}, t), {}, {
                    time: b
                  });
                }
                )));
                var j = t.updateCountDown(t.props.time)
                  , E = j.timeDistance
                  , w = j.realTime;
                if (t.timeDistance = E,
                  t.deadLine = t.tvWidget.chart().getShapeById(t.deadLineId),
                  t.prevExpiry !== l) {
                  t.prevExpiry = l;
                  var C = t.tvWidget.chart().getVisibleRange();
                  t.tvWidget.chart().setVisibleRange({
                    from: C.from,
                    to: b + 1e3
                  });
                }
                var k = w >= 0 ? up()(m).format("HH:mm:ss") + " (".concat(t.timeDistance, ")") : up()(m).format("HH:mm:ss")
                  , T = t.deadLine.getPoints();
                t.deadLine.setPoints(T.map((function (t) {
                  return Object(u.a)(Object(u.a)({}, t), {}, {
                    time: h
                  });
                }
                ))),
                  t.deadLine.setProperties({
                    linecolor: x,
                    text: k,
                    showLabel: !0,
                    showTime: !1,
                    textcolor: x,
                    linestyle: 3
                  });
                var M = (t.props.openTrades || []).filter((function (e) {
                  return t.props.isCfdOptions ? !!e.optionValue : !e.optionValue;
                }
                )).filter((function (t) {
                  return s.name === t.instrumentName;
                }
                ))
                  , S = null === (i = t.props.theme) || void 0 === i ? void 0 : i.chart.plotOptions.candlestick.upColor
                  , L = null === (c = t.props.theme) || void 0 === c ? void 0 : c.chart.plotOptions.candlestick.color;
                t.removeAllOpenLines(),
                  M.forEach((function (e) {
                    var n, r, o = null === (n = t.tvWidget) || void 0 === n ? void 0 : n.chart().createMultipointShape([{
                      time: e.expiryTimestamp / 1e3,
                      price: e.strike
                    }, {
                      time: e.createdTimestamp / 1e3 - 60,
                      price: e.strike
                    }], {
                      shape: "info_line",
                      disableSelection: !0,
                      lock: !0
                    });
                    t.tradeOpenLines.push(o);
                    var a = null === (r = t.tvWidget) || void 0 === r ? void 0 : r.chart().getShapeById(o);
                    null === a || void 0 === a || a.setProperties({
                      statsPosition: 2,
                      textcolor: 1 === e.direction ? S : L,
                      linecolor: 1 === e.direction ? S : L,
                      linestyle: 2,
                      showAngle: !1,
                      showBarsRange: !1,
                      showDateTimeRange: !1,
                      showDistance: !1,
                      showLabel: !1,
                      showMiddlePoint: !1,
                      showPriceLabels: !1,
                      showPriceRange: !1
                    });
                  }
                  ));
              } catch (I) { }
          }
          ,
          t.updateCountDown = function (e) {
            if (t.props.game) {
              var n = t.getCountDownTime(e);
              return {
                timeDistance: n.timeDistance,
                realTime: n.realTime
              };
            }
          }
          ,
          t.getCountDownTime = function (e) {
            var n = cp.getGameTime(t.props.game, t.chartPeriod)
              , r = cp.getDeadPeriod(n, t.props.game, t.chartPeriod)
              , o = n - t.props.lastQuote[0]
              , a = t.props.selectedExpiry || n
              , i = r - e < 0
              , c = (i ? a : r) - (i ? r : o)
              , l = (i ? a : r) - e;
            return {
              fillRate: Math.ceil((l - c) / c * 100),
              realTime: l,
              timeDistance: Object(Ls.b)(l)
            };
          }
          ,
          t.updateClickPosition = function (e) {
            t.setState({
              clientX: e.clientX,
              clientY: e.clientY
            });
          }
          ,
          t.updateSelectedTrade = function (e) {
            var n = t.props.openTrades
              , r = Object(_n.find)(n, ["tradeID", e]);
            r && (t.setState({
              showTradeInfo: !0,
              clickedTrade: r
            }),
              t.props.actionSetSelectedTrade && t.props.actionSetSelectedTrade(r));
          }
          ,
          t.onInitChart = function () {
            var e, n, r, o, a, i, c, l, u, s, d, p, f, m;
            if (t.ref.current) {
              var b = Object(_n.find)(null === (e = t.props.trading) || void 0 === e ? void 0 : e.instruments, ["instrumentID", t.props.instrument])
                , h = {
                  symbol: (null === b || void 0 === b ? void 0 : b.name) || "",
                  datafeed: t.DataFeed,
                  interval: t.props.interval,
                  container: t.ref.current,
                  library_path: t.props.libraryPath,
                  locale: dp() || "en",
                  disabled_features: ["use_localstorage_for_settings"],
                  enabled_features: ["study_templates"],
                  charts_storage_url: t.props.chartsStorageUrl,
                  charts_storage_api_version: t.props.chartsStorageApiVersion,
                  client_id: t.props.clientId,
                  user_id: t.props.userId,
                  fullscreen: t.props.fullscreen,
                  autosize: t.props.autosize,
                  studies_overrides: t.props.studiesOverrides,
                  theme: "Dark",
                  timezone: sp(),
                  overrides: {
                    "mainSeriesProperties.candleStyle.wickUpColor": null === (n = t.props.theme) || void 0 === n ? void 0 : n.chart.plotOptions.candlestick.upColor,
                    "mainSeriesProperties.candleStyle.borderUpColor": null === (r = t.props.theme) || void 0 === r ? void 0 : r.chart.plotOptions.candlestick.upColor,
                    "mainSeriesProperties.candleStyle.upColor": null === (o = t.props.theme) || void 0 === o ? void 0 : o.chart.plotOptions.candlestick.upColor,
                    "mainSeriesProperties.candleStyle.wickDownColor": null === (a = t.props.theme) || void 0 === a ? void 0 : a.chart.plotOptions.candlestick.color,
                    "mainSeriesProperties.candleStyle.borderDownColor": null === (i = t.props.theme) || void 0 === i ? void 0 : i.chart.plotOptions.candlestick.color,
                    "mainSeriesProperties.candleStyle.downColor": null === (c = t.props.theme) || void 0 === c ? void 0 : c.chart.plotOptions.candlestick.color,
                    "paneProperties.background": null === (l = t.props.theme) || void 0 === l ? void 0 : l.panelBackground,
                    "paneProperties.backgroundType": "solid",
                    "mainSeriesProperties.areaStyle.color1": null === (u = t.props.theme) || void 0 === u ? void 0 : u.chart.plotOptions.area.linearGradientUp,
                    "mainSeriesProperties.areaStyle.color2": null === (s = t.props.theme) || void 0 === s ? void 0 : s.chart.plotOptions.area.linearGradientDown,
                    "mainSeriesProperties.areaStyle.linecolor": null === (d = t.props.theme) || void 0 === d ? void 0 : d.chart.plotOptions.area.color,
                    "mainSeriesProperties.lineStyle.color": null === (p = t.props.theme) || void 0 === p ? void 0 : p.chart.plotOptions.area.color,
                    "paneProperties.vertGridProperties.color": null === (f = t.props.theme) || void 0 === f ? void 0 : f.chart.yAxis.gridLineColor,
                    "paneProperties.horzGridProperties.color": null === (m = t.props.theme) || void 0 === m ? void 0 : m.chart.yAxis.gridLineColor
                  }
                }
                , g = new rp(h);
              t.tvWidget = g,
                g.onChartReady((function () {
                  t.setState({
                    loaded: !0
                  }),
                    console.log("chart ready"),
                    t.renderGame();
                  var e = document.querySelector(".ChartTradingView > div > iframe");
                  if (e) {
                    var n, r, o = null === (n = t.props.theme) || void 0 === n ? void 0 : n.chart.plotOptions.candlestick.upColor, a = (null === (r = t.props.theme) || void 0 === r ? void 0 : r.chart.plotOptions.candlestick.upColor) + "33", i = e.contentDocument, c = document.createElement("style");
                    c.type = "text/css";
                    var l = cp.overrideChartCss({
                      upColor: o,
                      upColorCheckBoxBackground: a
                    });
                    c.appendChild(document.createTextNode(l));
                    var u = i.head || i.getElementsByTagName("head")[0];
                    u && u.appendChild(c);
                  }
                }
                )),
                t.tvWidget.subscribe("mouse_up", (function (e) {
                  t.updateClickPosition(e);
                }
                )),
                t.tvWidget.subscribe("onMarkClick", (function (e) {
                  t.updateSelectedTrade(e);
                }
                )),
                t.tvWidget.subscribe("indicators_dialog", (function () {
                  console.log("indicators_dialog");
                }
                )),
                t.tvWidget.subscribe("toggle_sidebar", (function (e) {
                  t.setState({
                    isHidenSlideBar: e
                  });
                }
                ));
            }
          }
          ,
          t.onFetchCandles = function () {
            var e = Object(p.a)(d.a.mark((function e(n, r, o) {
              var a, i, c, l, u, s;
              return d.a.wrap((function (e) {
                for (; ;)
                  switch (e.prev = e.next) {
                    case 0:
                      if (t.fetchCandlesCancelToken && t.fetchCandlesCancelToken.cancel("Operation canceled due to new request."),
                        a = y.a.CancelToken,
                        t.fetchCandlesCancelToken = a.source(),
                        i = t.formatPeriod(n),
                        c = Object(_n.find)(Vu, ["period", Object(_n.toLower)(i)]),
                        t.chartPeriod = c,
                        !r) {
                        e.next = 12;
                        break;
                      }
                      return e.next = 9,
                        k.a.chartHistory(t.props.instrument, (null === c || void 0 === c ? void 0 : c.period) || "1m", 1e3, t.fetchCandlesCancelToken);
                    case 9:
                      l = e.sent,
                        e.next = 15;
                      break;
                    case 12:
                      return e.next = 14,
                        k.a.chartHistory(t.props.instrument, (null === c || void 0 === c ? void 0 : c.period) || "1m", 300, t.fetchCandlesCancelToken, o.to);
                    case 14:
                      l = e.sent;
                    case 15:
                      if (t.fetchCandlesCancelToken = null,
                        !r) {
                        e.next = 20;
                        break;
                      }
                      return e.abrupt("return", Object(_n.sortBy)(null === (u = l) || void 0 === u ? void 0 : u.aggs, ["timestamp", "asc"]));
                    case 20:
                      return e.abrupt("return", Object(_n.sortBy)(Object(_n.filter)(null === (s = l) || void 0 === s ? void 0 : s.aggs, (function (t) {
                        return t.timestamp < 1e3 * o.to;
                      }
                      )), ["timestamp", "asc"]));
                    case 21:
                    case "end":
                      return e.stop();
                  }
              }
              ), e);
            }
            )));
            return function (t, n, r) {
              return e.apply(this, arguments);
            };
          }(),
          t.lastBarsCache = new Map,
          t.supportedResolutions = ["1", "5", "15", "30", "1h", "2h", "4h", "1d"],
          t.config = {
            supported_resolutions: t.supportedResolutions,
            exchanges: [],
            symbols_types: [],
            supports_marks: !0
          },
          t.DataFeed = {
            onReady: function (e) {
              var n;
              console.log("=====onReady running");
              var r = ((null === (n = t.props.trading) || void 0 === n ? void 0 : n.instruments) || []).map((function (t) {
                return {
                  value: t.name,
                  name: t.name,
                  desc: t.description
                };
              }
              ));
              t.config.exchanges = r,
                setTimeout((function () {
                  return e(t.config);
                }
                ), 0);
            },
            searchSymbols: function (e, n, r, o) {
              var a;
              o(((null === (a = t.props.trading) || void 0 === a ? void 0 : a.instruments) || []).map((function (t) {
                return {
                  symbol: t.name,
                  full_name: t.name,
                  description: t.description,
                  exchange: "",
                  type: "crypto"
                };
              }
              )).filter((function (t) {
                return Object(_n.includes)(Object(_n.toLower)(t.full_name), Object(_n.toLower)(e));
              }
              ))),
                console.log("====Search Symbols running");
            },
            resolveSymbol: function () {
              var e = Object(p.a)(d.a.mark((function e(n, r, o) {
                var a, i, c, l, u;
                return d.a.wrap((function (e) {
                  for (; ;)
                    switch (e.prev = e.next) {
                      case 0:
                        if (i = Object(_n.find)(null === (a = t.props.trading) || void 0 === a ? void 0 : a.instruments, ["instrumentID", t.props.instrument]),
                          n === i.name || "" === n) {
                          e.next = 5;
                          break;
                        }
                        return l = null === (c = t.props.trading) || void 0 === c ? void 0 : c.instruments,
                          null === l || void 0 === l ? void 0 : l.find((function (t) {
                            return t.name === n;
                          }
                          )),
                          e.abrupt("return");
                      case 5:
                        u = {
                          name: (null === i || void 0 === i ? void 0 : i.name) || "",
                          description: (null === i || void 0 === i ? void 0 : i.name) || "",
                          type: "crypto",
                          session: "24x7",
                          timezone: "Etc/UTC",
                          ticker: "",
                          exchange: "",
                          minmov: 1,
                          minmove2: 0,
                          pricescale: t.getPriceScale((null === i || void 0 === i ? void 0 : i.precision) || 100),
                          supported_resolution: t.supportedResolutions,
                          data_status: "streaming",
                          has_no_volume: !0,
                          has_weekly_and_monthly: !1,
                          volume_precision: 2,
                          has_intraday: !0
                        },
                          r(u);
                      case 7:
                      case "end":
                        return e.stop();
                    }
                }
                ), e);
              }
              )));
              return function (t, n, r) {
                return e.apply(this, arguments);
              };
            }(),
            getBars: function () {
              var e = Object(p.a)(d.a.mark((function e(n, r, o, a, i) {
                var c, l;
                return d.a.wrap((function (e) {
                  for (; ;)
                    switch (e.prev = e.next) {
                      case 0:
                        return e.prev = 0,
                          c = o.firstDataRequest,
                          e.next = 4,
                          t.onFetchCandles(r, c, o);
                      case 4:
                        if (t.data = e.sent,
                          0 !== (l = t.data.map((function (t) {
                            return {
                              time: t.timestamp - 6e4,
                              open: t.open,
                              high: t.high,
                              low: t.low,
                              close: t.close
                            };
                          }
                          ))).length) {
                          e.next = 11;
                          break;
                        }
                        return a([], {
                          noData: !0
                        }),
                          e.abrupt("return");
                      case 11:
                        c && t.lastBarsCache.set(n.full_name, Object(u.a)({}, l[l.length - 1])),
                          a(l, {
                            noData: !1
                          });
                      case 13:
                        e.next = 18;
                        break;
                      case 15:
                        e.prev = 15,
                          e.t0 = e.catch(0),
                          i(e.t0);
                      case 18:
                      case "end":
                        return e.stop();
                    }
                }
                ), e, null, [[0, 15]]);
              }
              )));
              return function (t, n, r, o, a) {
                return e.apply(this, arguments);
              };
            }(),
            subscribeBars: function (e, n, r, o, a) {
              console.log("[subscribeBars]: Method call with subscribeUID:", o),
                ap(e, n, r, o, 0, t.lastBarsCache.get(e.full_name));
            },
            unsubscribeBars: function (t) {
              console.log("[unsubscribeBars]: Method call with subscriberUID:", t),
                ip(t);
            },
            calculateHistoryDepth: function (t, e, n) {
              return console.log("=====calculateHistoryDepth running"),
                t < 60 ? {
                  resolutionBack: "D",
                  intervalBack: "1"
                } : void 0;
            },
            getMarks: function (e, n, r, o, a) {
              var i, c, l = (t.props.openTrades || []).filter((function (e) {
                return t.props.isCfdOptions ? !!e.optionValue : !e.optionValue;
              }
              )).filter((function (t) {
                return e.name === t.instrumentName;
              }
              )), u = null === (i = t.props.theme) || void 0 === i ? void 0 : i.chart.plotOptions.candlestick.upColor, s = null === (c = t.props.theme) || void 0 === c ? void 0 : c.chart.plotOptions.candlestick.color;
              o(l.map((function (t) {
                return {
                  id: t.tradeID,
                  time: t.createdTimestamp / 1e3 - 120,
                  color: {
                    border: 1 === t.direction ? u : s,
                    background: 1 === t.direction ? u : s
                  },
                  text: "",
                  label: 1 === t.direction ? "\u25b2" : "\u25bc",
                  labelFontColor: "#000000",
                  minSize: 20
                };
              }
              ))),
                console.log("=====getMarks running");
            },
            getTimeScaleMarks: function (t, e, n, r, o) {
              console.log("=====getTimeScaleMarks running");
            },
            getServerTime: function (t) {
              console.log("=====getServerTime running");
            }
          },
          t.onChangeChart = function () {
            t.props.actionChangeChartType && t.props.actionChangeChartType(ec(t.props.chartLibraryConfig, t.props.currentChartType));
          }
          ,
          t;
      }
      return Object(Kd.a)(n, [{
        key: "componentDidMount",
        value: function () {
          this.onInitChart();
        }
      }, {
        key: "componentWillUnmount",
        value: function () {
          null !== this.tvWidget && (this.tvWidget.remove(),
            this.tvWidget = null);
        }
      }, {
        key: "componentDidUpdate",
        value: function (t, e, n) {
          var r;
          if (this.currentInstrument !== this.props.instrument)
            return this.currentInstrument = this.props.instrument,
              void this.onInitChart();
          var o, a, i, c, l = Object(_n.find)(null === (r = this.props.trading) || void 0 === r ? void 0 : r.instruments, ["instrumentID", this.props.instrument]);
          t.openTrades && this.props.openTrades && (t.openTrades.length !== this.props.openTrades.length && (null === (o = this.tvWidget) || void 0 === o || o.activeChart().clearMarks(),
            null === (a = this.tvWidget) || void 0 === a || a.activeChart().refreshMarks()));
          t.isCfdOptions !== this.props.isCfdOptions && (null === (i = this.tvWidget) || void 0 === i || i.activeChart().clearMarks(),
            null === (c = this.tvWidget) || void 0 === c || c.activeChart().refreshMarks());
          t.time !== this.props.time && this.updateCountDown(this.props.time),
            this.renderGame(),
            function (t, e) {
              if (t && e) {
                var n = t
                  , r = op.get(n);
                if (void 0 !== r) {
                  var o = e.timestamp
                    , a = e.open
                    , i = e.low
                    , c = {
                      time: o - 6e4,
                      open: a,
                      high: e.high,
                      low: i,
                      close: e.last
                    };
                  r.lastDailyBar = c,
                    r.handlers.forEach((function (t) {
                      return t.callback(c);
                    }
                    ));
                }
              }
            }(null === l || void 0 === l ? void 0 : l.name, this.props.lastQuote);
        }
      }, {
        key: "formatPeriod",
        value: function (t) {
          return t.includes("h") || t.includes("w") || t.includes("d") || t.includes("H") || t.includes("W") || t.includes("D") ? t : Object(_n.toNumber)(t) >= 60 ? Object(_n.toNumber)(t) / 60 + "h" : t + "m";
        }
      }, {
        key: "getPriceScale",
        value: function (t) {
          for (var e = "", n = 0; n < t; n++)
            e = "".concat(e, "0");
          return Number("1" + e);
        }
      }, {
        key: "render",
        value: function () {
          var t, e, n = this, r = this.props.theme.chart.countDown;
          r.filledColorUp,
            r.filledColorMiddle,
            r.filledColorDown;
          return o.createElement(o.Fragment, null, o.createElement("div", {
            className: "trading-chart-header-mobile"
          }, o.createElement(Rl, {
            periodOptions: Vu,
            timeframe: Vu[1],
            chartType: "candlestick",
            onChangeTimeframe: function () { },
            removeAllAnnotations: function () { },
            calculateAnnotations: function () { },
            toggleAnnotation: function () { },
            indicators: [],
            onChangeChartType: this.onChangeChart
          }), o.createElement("div", {
            className: "ChartTradingView"
          }, o.createElement("div", {
            ref: this.ref
          }))), (null === (t = this.state) || void 0 === t ? void 0 : t.showTradeInfo) && !!(null === (e = this.state) || void 0 === e ? void 0 : e.clickedTrade) && o.createElement(o.Fragment, null, o.createElement(ld, {
            trade: this.state.clickedTrade,
            quote: this.props.lastQuote,
            timeleft: 5,
            x: this.state.clientX,
            y: Math.min(870, this.state.clientY + 50),
            onClose: function () {
              n.setState({
                showTradeInfo: !1,
                clickedTrade: void 0
              });
            }
          }), o.createElement(Ot.a, {
            onClick: function () {
              n.setState({
                showTradeInfo: !1,
                clickedTrade: void 0
              });
            }
          })));
        }
      }]),
        n;
    }(o.PureComponent);
    pp.defaultProps = {
      symbol: "",
      interval: "1",
      datafeedUrl: "https://demo_feed.tradingview.com",
      libraryPath: "/charting_library/",
      chartsStorageUrl: "https://saveload.tradingview.com",
      chartsStorageApiVersion: "1.1",
      clientId: "tradingview.com",
      userId: "public_user_id",
      fullscreen: !1,
      autosize: !0,
      studiesOverrides: {},
      instrument: "",
      trading: null,
      chart: null,
      state: null,
      lastQuote: null,
      isHighCharts: !0,
      actionSelectInstrument: function (t) { },
      theme: null,
      isMobile: !1,
      isCfdOptions: !0,
      lastPrice: 0,
      selectedCfdOptionInstrument: void 0,
      selectedCfdOptionExpiry: void 0,
      openTrades: [],
      formatCurrency: function (t) {
        return "";
      },
      actionSetSelectedTrade: function (t) { },
      currentChartType: Ui.Basic,
      actionChangeChartType: function (t) { },
      selectedExpiry: 0,
      time: 0,
      chartLibraryConfig: {
        allowedLibraries: [],
        defaultLibrary: Ui.Basic
      }
    };
    var fp = Object(i.c)((function (t) {
      return {
        instrument: t.trading.selected,
        trading: t.trading,
        chart: t.chart,
        state: t,
        lastQuote: Object(si.l)(t),
        theme: t.theme,
        lastPrice: Object(si.k)(t),
        selectedCfdOptionInstrument: t.trading.selectedCfdOptionInstrument,
        selectedCfdOptionExpiry: t.trading.selectedCfdOptionExpiry,
        openTrades: t.trades.open,
        selectedExpiry: t.expiry.selected,
        formatCurrency: Object(Ps.a)(t),
        game: t.game,
        time: t.time
      };
    }
    ), {
      actionSelectInstrument: fi.G,
      actionSetSelectedTrade: Js.u
    })(pp);
    function mp() {
      var t = Object(r.a)(["Breakeven"]);
      return mp = function () {
        return t;
      }
        ,
        t;
    }
    function bp() {
      var t = Object(r.a)(["SELL"]);
      return bp = function () {
        return t;
      }
        ,
        t;
    }
    function hp() {
      var t = Object(r.a)(["EXPIRED"]);
      return hp = function () {
        return t;
      }
        ,
        t;
    }
    function gp() {
      var t = Object(r.a)(["CLOSE"]);
      return gp = function () {
        return t;
      }
        ,
        t;
    }
    function vp() {
      var t = Object(r.a)([""]);
      return vp = function () {
        return t;
      }
        ,
        t;
    }
    function xp() {
      var t = Object(r.a)(["\n                    @media (orientation: landscape) {\n                      height: calc(\n                        ", "px -\n                          ", "px\n                      );\n                    }\n                  "]);
      return xp = function () {
        return t;
      }
        ,
        t;
    }
    function Op() {
      var t = Object(r.a)(["\n              height: calc(\n                ", "px -\n                  ", "px\n              );\n              ", "\n            "]);
      return Op = function () {
        return t;
      }
        ,
        t;
    }
    function yp() {
      var t = Object(r.a)(["\n                    @media (orientation: landscape) {\n                      height: calc(\n                        ", "px -\n                          ", "px\n                      );\n                    }\n                  "]);
      return yp = function () {
        return t;
      }
        ,
        t;
    }
    function jp() {
      var t = Object(r.a)(["\n              height: 250px;\n              ", "\n            "]);
      return jp = function () {
        return t;
      }
        ,
        t;
    }
    function Ep() {
      var t = Object(r.a)([""]);
      return Ep = function () {
        return t;
      }
        ,
        t;
    }
    function wp() {
      var t = Object(r.a)(["\n                  @media (orientation: landscape) {\n                    height: calc(\n                      ", "px -\n                        ", "px\n                    );\n                  }\n                "]);
      return wp = function () {
        return t;
      }
        ,
        t;
    }
    function Cp() {
      var t = Object(r.a)(["\n            height: calc(\n              ", "px -\n                ", "px\n            );\n            ", "\n          "]);
      return Cp = function () {
        return t;
      }
        ,
        t;
    }
    function kp() {
      var t = Object(r.a)(["\n                  @media (orientation: landscape) {\n                    height: calc(\n                      ", "px -\n                        ", "px\n                    );\n                  }\n                "]);
      return kp = function () {
        return t;
      }
        ,
        t;
    }
    function Tp() {
      var t = Object(r.a)(["\n            height: 250px;\n            ", "\n          "]);
      return Tp = function () {
        return t;
      }
        ,
        t;
    }
    function Mp() {
      var t = Object(r.a)(["\n  display: flex;\n  width: 100%;\n  ", "\n  #chart-container {\n    ", "\n  }\n"]);
      return Mp = function () {
        return t;
      }
        ,
        t;
    }
    function Sp() {
      var t = Object(r.a)([""]);
      return Sp = function () {
        return t;
      }
        ,
        t;
    }
    function Lp() {
      var t = Object(r.a)(["\n          @media (orientation: landscape) {\n            background-color: #141f2c !important;\n          }\n        "]);
      return Lp = function () {
        return t;
      }
        ,
        t;
    }
    function Ip() {
      var t = Object(r.a)([""]);
      return Ip = function () {
        return t;
      }
        ,
        t;
    }
    function _p() {
      var t = Object(r.a)(["\n          background-color: ", ";\n        "]);
      return _p = function () {
        return t;
      }
        ,
        t;
    }
    function Pp() {
      var t = Object(r.a)(["\n  position: relative;\n  flex: 1 1 auto;\n  display: flex;\n  flex-direction: ", ";\n  width: ", ";\n  ", "\n  ", "\n"]);
      return Pp = function () {
        return t;
      }
        ,
        t;
    }
    n(374),
      n(375)(E.a),
      n(376)(E.a),
      n(377)(E.a),
      n(378)(E.a),
      n(379)(E.a),
      n(380)(E.a),
      n(381)(E.a),
      n(382)(E.a),
      E.a.AST.allowedTags.push("g"),
      E.a.AST.allowedAttributes.push("viewBox"),
      E.a.AST.allowedAttributes.push("data-reactroot"),
      E.a.AST.allowedAttributes.push("fill-rule"),
      E.a.AST.allowedAttributes.push("transform"),
      E.a.AST.allowedAttributes.push("text-anchor"),
      E.a.AST.allowedAttributes.push("stroke-dashoffset"),
      E.a.AST.allowedAttributes.push("stroke-dasharray"),
      E.a.AST.allowedAttributes.push("aria-valuenow"),
      E.a.AST.allowedAttributes.push("fill-opacity"),
      E.a.AST.allowedAttributes.push("stroke-opacity"),
      E.a.setOptions({
        global: {
          timezoneOffset: (new Date).getTimezoneOffset()
        }
      });
    var Ap, zp = c.c.div(Pp(), (function (t) {
      return t.isMobile ? "column" : "row";
    }
    ), (function (t) {
      return t.isMobile ? "100%" : "calc(100vw - 372px)";
    }
    ), (function (t) {
      return t.isMobile ? Object(c.b)(_p(), t.colors.tradebox.widgetBackground) : Object(c.b)(Ip());
    }
    ), (function (t) {
      return t.isMobile && Object(Vn.a)(t.isMobile) ? Object(c.b)(Lp()) : Object(c.b)(Sp());
    }
    )), Np = c.c.div(Mp(), (function (t) {
      return t.isMobile ? window.innerHeight < 660 ? Object(c.b)(Tp(), Object(Vn.a)(t.isMobile) ? Object(c.b)(kp(), window.innerHeight, (function (t) {
        return t.loggedIn ? 142 : 98;
      }
      )) : "") : Object(c.b)(Cp(), window.innerHeight, (function (t) {
        return t.loggedIn ? 450 : 400;
      }
      ), Object(Vn.a)(t.isMobile) ? Object(c.b)(wp(), window.innerHeight, (function (t) {
        return t.loggedIn ? 142 : 98;
      }
      )) : "") : Object(c.b)(Ep());
    }
    ), (function (t) {
      return t.isMobile ? window.innerHeight < 660 ? Object(c.b)(jp(), Object(Vn.a)(t.isMobile) ? Object(c.b)(yp(), window.innerHeight, (function (t) {
        return t.loggedIn ? 142 : 98;
      }
      )) : "") : Object(c.b)(Op(), window.innerHeight, (function (t) {
        return t.loggedIn ? 450 : 410;
      }
      ), Object(Vn.a)(t.isMobile) ? Object(c.b)(xp(), window.innerHeight, (function (t) {
        return t.loggedIn ? 142 : 98;
      }
      )) : "") : Object(c.b)(vp());
    }
    ));
    !function (t) {
      t.mainSeries = "main-series",
        t.tradesSeries = "trades-series",
        t.indicatorSeries = "indicator-series";
    }(Ap || (Ap = {}));
    var Dp, Rp = null;
    !function (t) {
      t.yAxis = "chart-y-axis",
        t.xAXis = "chart-x-axis";
    }(Dp || (Dp = {}));
    var Fp = "#1d2834"
      , Bp = "#75f986"
      , Hp = "#ff3364"
      , Vp = ["area", "line"]
      , Wp = function (t) {
        var e = document.getElementsByClassName("mgo-widget-call_pulse")[0];
        e && (e.style.display = t ? "block" : "none");
      }
      , Up = function (t, e) {
        var n = t.target
          , r = n.xAxis[0]
          , o = n.series[0].xData
          , a = r.getExtremes()
          , i = a.min
          , c = a.max
          , l = e[e.length - 1]
          , u = Object(_n.takeRight)(o, Math.floor(o.length * l)).length
          , s = Object(_n.filter)(o, (function (t) {
            return t >= i && t <= c;
          }
          ))
          , d = Object(_n.first)(s)
          , p = Object(_n.last)(s)
          , f = Object(_n.findIndex)(o, (function (t) {
            return t === p;
          }
          ));
        return {
          minIndex: Object(_n.findIndex)(o, (function (t) {
            return t === d;
          }
          )),
          maxIndex: f,
          pointsNum: u
        };
      }
      , Gp = function (t, e) {
        var n = e.state
          , r = n.zoomLevels
          , o = n.zoomLevel
          , a = Up(t, r)
          , i = a.minIndex
          , c = a.maxIndex
          , l = a.pointsNum
          , u = t.target
          , s = u.xAxis[0]
          , d = u.series[0].xData
          , p = d[i - l]
          , f = d[c - l];
        if (p)
          s.setExtremes(p, f, !0, {
            duration: 200,
            easing: function (t) {
              return t;
            }
          });
        else {
          var m = Object(_n.takeRight)(d, Math.floor(d.length * r[o])).length;
          s.setExtremes(d[0], d[m], !0, {
            duration: 200,
            easing: function (t) {
              return t;
            }
          });
        }
      }
      , Yp = function (t, e) {
        var n = e.state
          , r = n.zoomLevels
          , o = n.candles
          , a = Up(t, r)
          , i = a.minIndex
          , c = a.maxIndex
          , l = a.pointsNum
          , u = t.target
          , s = u.xAxis[0]
          , d = u.series[0].xData
          , p = d[i + l]
          , f = d[c + l]
          , m = Object(_n.filter)(d, (function (t) {
            return t <= f && t >= p;
          }
          ))
          , b = Object(_n.last)(m)
          , h = o[o.length - 1][0];
        m.length <= l ? s.setExtremes(s.min, null, !0) : h - b === 0 ? s.setExtremes(p, null, !0) : p && s.setExtremes(p, f, !0);
      }
      , qp = function (t) {
        var e = t.state.zoomLevel;
        t.onChangeZoomLevel(e - 1);
      }
      , Zp = function (t) {
        var e = t.state.zoomLevel;
        t.onChangeZoomLevel(e + 1);
      }
      , Xp = function (t, e, n, r, o) {
        var a = o.plotOptions
          , i = a.flags
          , c = i.backgroundColor
          , l = i.breakEvenColor
          , u = a.candlestick
          , s = u.lineColor
          , d = u.upLineColor
          , p = e ? l : 1 === t ? d : s
          , f = r ? p : c
          , m = r ? c : p
          , b = r ? c : p
          , h = Object(Ps.b)(w.b.getState())(n.stake, n.currency)
          , g = !!n.optionValue ? Object(T.t)(gp()) : e ? Object(T.t)(hp()) : Object(T.t)(bp());
        return '\n    <span class="flag-wrapper" style="background: '.concat(c, '">\n      <span class="flag-title" style="background: ').concat(f, ";border: 1px solid ").concat(m, ';">\n        <span class="text" style="color: ').concat(b, '">').concat(1 === t ? "&#9650;" : "&#9660;", '</span>\n\t\t\t\t</span><div class="flag-datalabel"><div class="line" style="border-top: 1px solid ').concat(p, ';"></div>\n        <span class="label" style="border: 1px solid ').concat(p, "; color: ").concat(p, "; background: ").concat(c, '">\n\t\t\t\t\t&nbsp;').concat(r ? g : "", "<span>").concat(r ? "&nbsp;@&nbsp;" : "", "</span>").concat(h.replace(/\s/g, ""), "&nbsp;</span></span>");
      }
      , Qp = function (t, e, n, r, o, a) {
        var i = o.getExtremes().dataMin
          , c = t.tradeID
          , l = t.createdTimestamp
          , u = t.instrumentID;
        if (Number(u) === Number(e) && l > i) {
          var s = function (t, e, n, r) {
            var o = t.direction
              , a = r.plotOptions
              , i = a.candlestick
              , c = i.lineColor
              , l = i.upLineColor
              , u = a.flags.closedColor;
            return {
              fillColor: n ? u : 1 === o ? l : c,
              color: n ? 1 === o ? l : c : u,
              shape: "circlepin",
              title: Xp(o, n, t, e && e.tradeID === t.tradeID, r)
            };
          }(t, n, r, a)
            , d = s.shape
            , p = s.title
            , f = s.fillColor;
          return {
            trade: t,
            id: c,
            isClosed: r,
            x: l,
            fillColor: f,
            shape: d,
            title: p,
            color: f,
            style: {
              color: s.color
            }
          };
        }
      }
      , Jp = function (t, e, n, r, o) {
        var a = {
          id: Dp.xAXis,
          gridLineWidth: 1,
          tickWidth: 0,
          gridZIndex: 1,
          ordinal: !0,
          gridLineColor: r.xAxis.gridLineColor,
          lineColor: r.xAxis.lineColor,
          allowDecimals: !1,
          labels: {
            y: -5
          },
          crosshair: {
            width: 1,
            color: r.crosshair.color
          },
          events: {
            setExtremes: function (t) {
              var n = t.target.chart.series[0]
                , r = Object(_n.last)(n.xData);
              if (r && e.setState({
                isScrolling: !(t.min < r && t.max > r)
              }),
                t.DOMEvent && "navigator" === t.trigger) {
                var o = Object(_n.filter)(n.xData, (function (e) {
                  return e && e >= t.min && e <= t.max;
                }
                )).length / Object(_n.filter)(n.xData, (function (t) {
                  return t;
                }
                )).length
                  , a = +o.toFixed(o < .1 ? 2 : 1)
                  , i = Object(_n.findIndex)(e.state.zoomLevels, (function (t, e, n) {
                    return t >= a && n[e + 1] < a;
                  }
                  ));
                e.onChangeZoomLevel(-1 === i ? Object(_n.size)(e.state.zoomLevels) - 1 : i);
              }
              var c = e.props.isMobile
                , l = e.state
                , u = l.zoomLevel
                , s = l.zoomLevels
                , d = l.chartType
                , p = l.candles
                , f = Object(_n.takeRight)(p, Math.floor(p.length * s[u]))
                , m = Object(_n.last)(f)
                , b = m ? m[0] : null
                , h = t.min <= b && b <= (t.max || 1 / 0);
              Wp(h && !c && Object(_n.includes)(Vp, d));
            },
            afterSetExtremes: function (t) {
              Object(_n.includes)(["navigator", "pan"], t.trigger) && e.redrawChartLastQuote(+e.state.lastPrice, e.state.direction, !1);
            }
          }
        }
          , i = [{
            id: Dp.yAxis,
            gridLineWidth: 1,
            gridZIndex: 1,
            gridLineColor: r.yAxis.gridLineColor,
            lineColor: r.yAxis.lineColor,
            offset: 70,
            tickPixelInterval: 52,
            minPadding: .65,
            tickAmount: 8,
            endOnTick: !0,
            tickPositioner: function () {
              var t = e.getCfdYAxisValue()
                , n = t.tickAmount
                , r = t.tickInterval;
              if (e.props.isCfdOptions && n && r) {
                var o, a = n % 2 !== 0, i = [], c = Math.min(n + (a ? 0 : 1), 16), l = this.series[0];
                if (l) {
                  if (l.processedYData.length && this.dataMin !== this.dataMax) {
                    var u = Object(_n.last)(e.state.candles);
                    o = u[4] || u[1];
                    for (var s = Math.max(o - (this.dataMin - r || 0), (this.dataMax + r || 0) - o), d = Math.ceil(s / r) * r, p = o - d; p <= o + d; p += r || d / c)
                      i.push(Object(_n.round)(p, 5));
                  }
                  if (i.length && i.length < 100)
                    return i.length % 2 === 0 ? i.slice(1, i.length) : i;
                }
              }
            }
          }]
          , c = new MutationObserver((function (t) {
            var e, n = {
              "highcharts-annotation-fill": "color",
              "highcharts-annotation-stroke": "color",
              "highcharts-annotation-backgroundColor": "color",
              "highcharts-annotation-color": "color"
            }, r = Object(x.a)(t);
            try {
              for (r.s(); !(e = r.n()).done;) {
                var o, a = e.value, i = Object(x.a)(a.addedNodes);
                try {
                  var c = function () {
                    var t = o.value
                      , e = t;
                    if ("input" === e.tagName.toLowerCase()) {
                      var r = e.getBoundingClientRect()
                        , a = e.closest("div").getBoundingClientRect();
                      if (n[e.name]) {
                        var i = document.createElement("div");
                        i.style.width = "60px",
                          i.style.height = "40px",
                          i.style.position = "absolute",
                          i.style.right = "20px",
                          i.style.top = "".concat(r.y - a.y, "px"),
                          i.style.zIndex = "11",
                          e.parentNode.insertBefore(i, t),
                          new C.a({
                            parent: i,
                            editorFormat: "rgb"
                          }).onChange = function (t) {
                            e.value = t.rgbaString,
                              i.style.backgroundColor = t.rgbaString;
                          }
                          ,
                          i.style.backgroundColor = e.value && "none" !== e.value ? e.value : "rgb(0, 0, 0)",
                          e.style.opacity = "0";
                      }
                    }
                  };
                  for (i.s(); !(o = i.n()).done;)
                    c();
                } catch (l) {
                  i.e(l);
                } finally {
                  i.f();
                }
              }
            } catch (l) {
              r.e(l);
            } finally {
              r.f();
            }
          }
          ))
          , l = {
            bindingsClassName: "tools-container",
            events: {
              showPopup: function (t) {
                var e = t.annotation.graphic.element
                  , n = document.getElementsByClassName("highcharts-annotation-toolbar")[0];
                if (e.getBoundingClientRect) {
                  var r = e.getBoundingClientRect();
                  n.style.top = "".concat(r.top - 80, "px"),
                    n.style.left = "".concat(r.left - 90, "px");
                }
                var o = Object(v.a)(n.childNodes, 4)
                  , a = o[2]
                  , i = o[3]
                  , l = document.getElementById("toolbar-destroy-icon")
                  , u = document.getElementById("toolbar-edit-icon");
                if (l && u) {
                  var s = l.cloneNode(!0)
                    , d = u.cloneNode(!0);
                  a.appendChild(s),
                    i.appendChild(d),
                    a.style.backgroundColor = Fp,
                    i.style.backgroundColor = Fp,
                    "basicAnnotation" === t.annotation.options.type && (i.style.display = "none");
                  var p = document.getElementsByClassName("highcharts-annotation-toolbar");
                  c.observe(p[0], {
                    childList: !0,
                    subtree: !0
                  });
                }
              },
              closePopup: function () {
                c.disconnect();
              }
            },
            bindings: {
              circleAnnotation: {
                annotationsOptions: {
                  shapeOptions: {
                    stroke: r.priceLine.color,
                    fill: r.priceLine.color
                  }
                }
              },
              rectangleAnnotation: {
                annotationsOptions: {
                  shapeOptions: {
                    stroke: r.priceLine.color,
                    fill: r.priceLine.color
                  }
                }
              },
              labelAnnotation: {
                annotationsOptions: {
                  labelOptions: {}
                }
              },
              arrowRay: {
                annotationsOptions: {
                  shapeOptions: {
                    stroke: r.priceLine.color,
                    fill: r.priceLine.color
                  }
                }
              },
              arrowSegment: {
                annotationsOptions: {
                  shapeOptions: {
                    stroke: r.priceLine.color,
                    fill: r.priceLine.color
                  }
                }
              },
              ray: {
                annotationsOptions: {
                  shapeOptions: {
                    stroke: r.priceLine.color,
                    fill: r.priceLine.color
                  }
                }
              },
              segment: {
                annotationsOptions: {
                  shapeOptions: {
                    stroke: r.priceLine.color,
                    fill: r.priceLine.color
                  }
                }
              },
              horizontalLine: {
                annotationsOptions: {
                  shapeOptions: {
                    stroke: r.priceLine.color,
                    fill: r.priceLine.color
                  }
                }
              },
              crooked3: {
                annotationsOptions: {
                  shapeOptions: {
                    stroke: r.priceLine.color,
                    fill: r.priceLine.color
                  }
                }
              },
              crooked5: {
                annotationsOptions: {
                  shapeOptions: {
                    stroke: r.priceLine.color,
                    fill: r.priceLine.color
                  }
                }
              },
              elliott3: {
                annotationsOptions: {
                  shapeOptions: {
                    stroke: r.priceLine.color,
                    fill: r.priceLine.color
                  }
                }
              },
              elliott5: {
                annotationsOptions: {
                  shapeOptions: {
                    stroke: r.priceLine.color,
                    fill: r.priceLine.color
                  }
                }
              },
              verticalCounter: {
                annotationsOptions: {
                  shapeOptions: {
                    stroke: r.priceLine.color,
                    fill: r.priceLine.color
                  }
                }
              },
              verticalLabel: {
                annotationsOptions: {
                  shapeOptions: {
                    stroke: r.priceLine.color,
                    fill: r.priceLine.color
                  }
                }
              },
              verticalArrow: {
                annotationsOptions: {
                  shapeOptions: {
                    stroke: r.priceLine.color,
                    fill: r.priceLine.color
                  }
                }
              },
              verticalLine: {
                annotationsOptions: {
                  shapeOptions: {
                    stroke: r.priceLine.color,
                    fill: r.priceLine.color
                  }
                }
              },
              parallelChannel: {
                annotationsOptions: {
                  shapeOptions: {
                    stroke: r.priceLine.color,
                    fill: r.priceLine.color
                  },
                  typeOptions: {
                    background: {}
                  }
                }
              },
              measureXY: {
                annotationsOptions: {
                  typeOptions: {
                    crosshairX: {
                      stroke: r.priceLine.color,
                      fill: r.priceLine.color
                    },
                    background: {}
                  }
                }
              },
              measureX: {
                annotationsOptions: {
                  typeOptions: {
                    crosshairX: {
                      stroke: r.priceLine.color,
                      fill: r.priceLine.color
                    },
                    background: {}
                  }
                }
              },
              measureY: {
                annotationsOptions: {
                  typeOptions: {
                    crosshairY: {
                      stroke: r.priceLine.color,
                      fill: r.priceLine.color
                    },
                    background: {}
                  }
                }
              }
            }
          };
        return E.a.stockChart({
          rangeSelector: {
            enabled: !1
          },
          chart: {
            renderTo: "chart-container",
            margin: 0,
            marginRight: 80,
            marginBottom: o ? 10 : 30,
            marginTop: o ? 10 : 100,
            plotBorderColor: r.plotBorderColor,
            plotBorderWidth: 1,
            panning: !0,
            pinchType: "x",
            zoomYype: null,
            resetZoomButton: {
              theme: {
                display: "none"
              }
            },
            plotBackgroundColor: {
              linearGradient: [0, 174, 0, window.innerHeight],
              stops: [[0, "rgba(0, 0, 0, 0)"], [1, "rgba(0, 0, 0, 0.4)"]]
            },
            spacingBottom: 30,
            events: {
              load: function (t) {
                var n, o, a = this;
                a.pulseMarker = a.renderer.text("<span class='mgo-widget-call_pulse'></span>", 200, 200, !0).add(),
                  function (t) {
                    var e = document.getElementsByClassName("mgo-widget-call_pulse")[0];
                    e && (e.style.backgroundColor = t);
                  }(r.pulseMarker.color),
                  document.addEventListener("keydown", Object(_n.throttle)((function (n) {
                    switch (n.code) {
                      case "ArrowUp":
                        qp(e);
                        break;
                      case "ArrowDown":
                        Zp(e);
                        break;
                      case "ArrowLeft":
                        Gp(t, e);
                        break;
                      case "ArrowRight":
                        Yp(t, e);
                    }
                  }
                  ), 400)),
                  document.addEventListener("wheel", Object(_n.throttle)((function (r) {
                    if (!a.renderTo.contains(r.target) || e.props.isMobile)
                      return r.preventDefault();
                    var i = r.deltaX
                      , c = r.deltaY;
                    if (r.ctrlKey)
                      return r.preventDefault(),
                        c < 1 && o < 0 ? qp(e) : c > 0 && o > 0 && Zp(e),
                        n = i,
                        o = c,
                        r.preventDefault();
                    i < 0 && n < 0 ? Gp(t, e) : i > 0 && n > 0 ? Yp(t, e) : 0 === i && c > 0 && 0 === n && o > 0 ? qp(e) : 0 === i && c < 0 && 0 === n && o < 0 && Zp(e),
                      n = i,
                      o = c;
                  }
                  ), 400), {
                    passive: !1
                  }),
                  document.addEventListener("wheel", (function (t) {
                    t.ctrlKey && t.preventDefault();
                  }
                  ), {
                    passive: !1
                  }),
                  e.onChartReady();
              },
              render: function () {
                var t, n, r, o, a = this, i = e.state, c = i.direction, l = i.zoomLevel, u = i.zoomLevels, s = i.chartType, d = i.candles, p = i.clickedTrade, f = e.props, m = f.isMobile, b = f.isCfdOptions, h = f.cfdDirection, g = f.theme, v = this.get(Dp.xAXis), x = this.get(Dp.yAxis), O = this.get(Ap.mainSeries), y = v.getExtremes(), j = y.min, E = y.max, w = Object(_n.takeRight)(d, Math.floor(d.length * u[l])), C = Object(_n.last)(w), k = C ? C[0] : null;
                Wp(j <= k && k <= E && !m && Object(_n.includes)(Vp, s)),
                  function (t, e) {
                    var n = t.chart
                      , r = Object(_n.last)(t.points);
                    n && n.pulseMarker && r && n.pulseMarker.animate({
                      x: r.plotX - n.plotLeft - n.spacing[0] - 20,
                      y: r.plotY + n.spacing[2] - 18 + 100
                    });
                  }(O);
                var M = Object(_n.last)(d)
                  , S = Object(_n.last)(O.points)
                  , L = M[4] || M[1];
                if (this.priceLineLabel)
                  this.priceLineLabel.attr({
                    text: L
                  }),
                    this.priceLineLabel.animate({
                      translateX: this.chartWidth - 75,
                      translateY: x.toPixels(L) - 14
                    }),
                    b || e.redrawChartLastQuote(L, c);
                else {
                  var I = g.chart.priceLine;
                  this.priceLineLabel = this.renderer.label(L, S.plotX + this.plotLeft + 8, S.plotY + this.plotTop - 14, "callout", S.plotX + this.plotLeft, S.plotY + this.plotTop).css({
                    color: "rgb(3, 20, 32)",
                    fontWeight: 600,
                    fontFamily: "Roboto, sans-serif"
                  }).attr({
                    fill: I.color,
                    padding: 6,
                    r: 5,
                    zIndex: 99
                  }).add();
                }
                if (x.removePlotLine(Bu.breakeven),
                  b && h && e.addCfdBreakevenLine(h, L),
                  (null === (t = this.breakeven_line_position) || void 0 === t ? void 0 : t.element) && (null === (n = this.breakeven_line_position) || void 0 === n || n.destroy()),
                  (null === (r = this.breakevenLabel) || void 0 === r ? void 0 : r.element) && (null === (o = this.breakevenLabel) || void 0 === o || o.destroy()),
                  b && p) {
                  p.id;
                  var _ = p.strike
                    , P = p.optionValue
                    , A = p.direction
                    , z = (p.plotY,
                      p.createdTimestamp)
                    , N = Object(_n.round)(1 === A ? _ + (null !== P && void 0 !== P ? P : 0) : _ - (null !== P && void 0 !== P ? P : 0), 4)
                    , D = -1 === A ? Hp : Bp
                    , R = ["M", v.toPixels(z), x.toPixels(N), "L", v.toPixels(E), x.toPixels(N)];
                  this.breakeven_line_position = this.renderer.path(R).attr({
                    "stroke-width": 1,
                    dashstyle: "ShortDash",
                    stroke: D,
                    id: "x"
                  }).add(),
                    this.breakevenLabel = this.renderer.label("".concat(Object(T.t)(mp()), ": ").concat(N), v.toPixels(E) - 50, x.toPixels(N) - 10, "callout").css({
                      color: "#75F986",
                      fontSize: 11
                    }).attr({
                      fill: "#06141F",
                      r: 20,
                      zIndex: 99,
                      paddingLeft: 10,
                      paddingRight: 10,
                      paddingTop: 2,
                      paddingBottom: 2,
                      style: {
                        padding: "2px 10px"
                      }
                    }).add();
                }
                var F = this.get(Ap.tradesSeries)
                  , B = null === F || void 0 === F ? void 0 : F.data;
                if ((null === B || void 0 === B ? void 0 : B.length) > 0 && B.forEach((function (t) {
                  var e, n, r = t.id;
                  (null === (e = a["line_".concat(r)]) || void 0 === e ? void 0 : e.element) && (null === (n = a["line_".concat(r)]) || void 0 === n || n.destroy());
                }
                )),
                  !b) {
                  var H = e.getPlotLineOrBand(v, Bu.expiry);
                  (null === B || void 0 === B ? void 0 : B.length) > 0 && H && B.forEach((function (t) {
                    var e = t.id
                      , n = t.x
                      , r = (t.y,
                        t.color)
                      , o = t.trade
                      , i = a.get(e);
                    if (i) {
                      var c = a.plotTop
                        , l = i.plotY + c
                        , u = ["M", v.toPixels(n), l, "L", v.toPixels(E > o.expiryTimestamp ? o.expiryTimestamp : E), l];
                      a["line_".concat(e)] = a.renderer.path(u).attr({
                        "stroke-width": 1,
                        dashstyle: "LongDash",
                        stroke: r,
                        id: "x"
                      }).add();
                    }
                  }
                  ));
                }
              }
            }
          },
          xAxis: a,
          yAxis: i,
          series: [{
            id: Ap.mainSeries,
            name: e.props.instrumentName,
            threshold: null,
            turboThreshold: 0,
            type: e.state.chartType,
            zIndex: 1,
            showInNavigator: !0,
            marker: {
              states: {
                hover: {
                  animation: !1,
                  fillColor: r.series.markerFillColor,
                  lineWidth: 0
                }
              }
            },
            data: t
          }, {
            id: Ap.tradesSeries,
            animation: !1,
            type: "flags",
            data: [],
            cursor: "pointer",
            width: 9,
            height: 9,
            linkedTo: "main-series",
            lineWidth: 1,
            y: -5,
            useHTML: !0,
            zIndex: 2,
            style: {
              cursor: "pointer",
              position: "absolute",
              zIndex: 99
            },
            dataLabels: {
              enabled: !1,
              useHTML: !0,
              formatter: function () {
                return "";
              },
              y: 20
            },
            tooltip: {
              enabled: !1,
              pointFormat: void 0,
              followTouchMove: !1
            },
            shadow: !0,
            states: {
              hover: {
                enabled: !1
              }
            },
            point: {
              events: {
                click: function (t) {
                  var n = this.trade
                    , o = this.isClosed;
                  o || e.setState({
                    clickedTrade: n,
                    clickedTradeX: t.clientX,
                    clickedTradeY: t.clientY - (1 === n.direction ? 0 : 160)
                  });
                  if (n) {
                    var a = Xp(n.direction, o, n, !0, r);
                    this.isClicked || this.update({
                      title: a
                    }),
                      e.props.actionSelectExpiry(n.expiryTimestamp),
                      e.props.actionSetSelectedTrade(n),
                      o && e.props.actionSetSidebar(dd.a.positions);
                  }
                },
                mouseOut: function (t) {
                  var n = this
                    , o = e.props
                    , a = o.openTrades
                    , i = o.closedTrades
                    , c = Object(_n.find)([].concat(Object(g.a)(a), Object(g.a)(i)), (function (t) {
                      return t.tradeID === n.trade.tradeID;
                    }
                    ))
                    , l = n.isClosed;
                  if (c) {
                    var u = Xp(c.direction, l, c, !1, r);
                    n.isClicked || e.state.clickedTrade || n.update({
                      title: u
                    });
                  }
                },
                mouseOver: function (t) {
                  var n = this
                    , o = e.props
                    , a = o.openTrades
                    , i = o.closedTrades
                    , c = Object(_n.find)([].concat(Object(g.a)(a), Object(g.a)(i)), (function (t) {
                      return t.tradeID === n.trade.tradeID;
                    }
                    ))
                    , l = n.isClosed;
                  if (c) {
                    var u = Xp(c.direction, l, c, !0, r);
                    n.update({
                      title: u,
                      isClicked: !1
                    });
                  }
                }
              }
            },
            title: ""
          }, {
            id: Ap.indicatorSeries,
            className: "indicators-series",
            type: "line",
            data: t,
            useOhlcData: "tick" !== e.state.timeframe.period,
            tooltip: {
              enabled: !1,
              formatter: function () {
                return !1;
              },
              pointFormatter: function () {
                return !1;
              },
              followTouchMove: !1
            }
          }],
          stockTools: {
            gui: {
              enabled: !1
            }
          },
          navigation: l,
          plotOptions: {
            series: {
              dataGrouping: {
                enabled: !1
              },
              marker: {
                enabled: !1
              },
              allowPointSelect: !1
            },
            line: {
              color: r.priceLine.color
            },
            area: {
              color: r.plotOptions.area.color,
              fillColor: {
                linearGradient: {
                  x1: 0,
                  x2: 0,
                  y1: 0,
                  y2: 1
                },
                stops: [[0, r.plotOptions.area.linearGradientUp], [1, r.plotOptions.area.linearGradientDown]]
              }
            },
            column: {},
            ohlc: {
              color: r.plotOptions.ohlc.color
            },
            candlestick: {
              color: r.plotOptions.candlestick.color,
              lineColor: r.plotOptions.candlestick.lineColor,
              upColor: r.plotOptions.candlestick.upColor,
              upLineColor: r.plotOptions.candlestick.upLineColor
            },
            heikinashi: {
              color: r.plotOptions.candlestick.color,
              lineColor: r.plotOptions.candlestick.lineColor,
              upColor: r.plotOptions.candlestick.upColor,
              upLineColor: r.plotOptions.candlestick.upLineColor
            }
          },
          tooltip: {
            enabled: !0,
            followTouchMove: !1,
            borderWidth: 0,
            backgroundColor: r.tooltip.backgroundColor,
            style: {
              color: r.tooltip.color
            },
            formatter: function () {
              var t, n;
              return [dc.a.format(this.x, "EEEE, LLL d, HH:mm:ss")].concat(null !== (t = null === (n = this.points) || void 0 === n ? void 0 : n.filter((function (t) {
                return t.series.userOptions.id === Ap.mainSeries;
              }
              )).map((function (t) {
                return '<span style="font-size: 12px; color:'.concat(t.color, '">\u25cf </span><span style="color: ').concat(r.tooltip.color, '">').concat(e.props.instrumentName, ": </span> <b>").concat(t.y, "</b><br/>");
              }
              ))) && void 0 !== t ? t : []);
            }
          },
          scrollbar: {
            enabled: !1
          },
          navigator: {
            enabled: !o,
            series: {
              lineColor: r.navigator.seriesLineColor
            },
            xAxis: {
              gridLineWidth: 0,
              labels: {
                enabled: !0
              }
            },
            height: 52,
            outlineWidth: 0,
            outlineColor: r.navigator.outlineColor,
            margin: 0,
            handles: {
              width: 7,
              height: 18,
              borderRadius: 6
            },
            maskFill: r.navigator.maskFill,
            maskInside: !1
          },
          exporting: {
            enabled: !1
          },
          credits: {
            enabled: !1
          }
        });
      }
      , Kp = a.a.createContext({})
      , $p = function (t) {
        Object(b.a)(n, t);
        var e = Object(h.a)(n);
        function n(t) {
          var r;
          Object(f.a)(this, n),
            (r = e.call(this, t)).chartInstance = void 0,
            r.eventEmitter = void 0,
            r.getPlotLineOrBand = function (t, e) {
              for (var n = 0; n < t.plotLinesAndBands.length; n++)
                if (t.plotLinesAndBands[n].id === e)
                  return t.plotLinesAndBands[n];
            }
            ,
            r.redrawPlotLine = function (t, e, n, r) {
              var o = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]
                , a = e.toPixels(n)
                , i = a - e.toPixels(t.options.value);
              isNaN(a) || t.svgElem.animate({
                translateY: i
              }, o);
            }
            ,
            r.redrawPlotBand = function (t, e, n) {
              t.options.to = n,
                t.options.from = e,
                t.render();
            }
            ,
            r.calculateHeikinAshiPoint = function (t, e) {
              var n = r.props.instrumentObject.precision
                , o = [t[1], t[4]]
                , a = o[0]
                , i = o[1]
                , c = [e[0], e[1], e[2], e[3], e[4]]
                , l = c[0]
                , u = c[2]
                , s = c[3]
                , d = (a + i) / 2
                , p = (c[1] + u + s + c[4]) / 4
                , f = Math.max(u, p, d)
                , m = Math.min(s, p, d);
              return [l, Number(d.toFixed(n)), Number(f.toFixed(n)), Number(m.toFixed(n)), Number(p.toFixed(n))];
            }
            ,
            r.calculateHeikinAshiDataPoints = function (t) {
              var e = [];
              return Object(_n.chain)(t).sortBy((function (t) {
                return t.timestamp;
              }
              )).map((function (t) {
                return [t.timestamp, t.open, t.high, t.low, t.close];
              }
              )).value().forEach((function (t, n) {
                if (n > 0) {
                  var o = e[e.length - 1]
                    , a = r.calculateHeikinAshiPoint(o, t);
                  e.push(a);
                } else
                  e.push(t);
              }
              )),
                e;
            }
            ,
            r.createSeriesData = function (t, e) {
              var n = r.state
                , o = n.chartType
                , a = n.timeframe.period;
              return "heikinashi" === (e || o) ? r.calculateHeikinAshiDataPoints(t) : "tick" === a ? Object(_n.chain)(t).sortBy((function (t) {
                return t[0];
              }
              )).value() : Object(_n.chain)(t).sortBy((function (t) {
                return t.timestamp;
              }
              )).map((function (t) {
                return [t.timestamp, t.open, t.high, t.low, t.close];
              }
              )).value();
            }
            ,
            r.createOrUpdateChart = function () {
              r.chartInstance ? r.setChartData(r.state.candles) : r.chartInstance = Jp(r.state.candles, Object(m.a)(r), r.props.chartConfig, r.props.theme.chart, r.props.isMobile),
                r.onRenderTrades(),
                r.onRenderGame(r.props.game, !0),
                r.onRenderExpiry(r.props.selectedExpiry),
                r.resetChartZoom(),
                r.setState({
                  loading: !1
                });
            }
            ,
            r.resetChartZoom = function () {
              var t = r.state
                , e = t.timeframe
                , n = t.chartType
                , o = t.zoomLevels
                , a = "tick" === e.period
                , i = "candlestick" === n || "heikinashi" === n
                , c = o.length - 1;
              r.onChangeZoomLevel(i ? c : c - (a ? 3 : 0));
            }
            ,
            r.changeChartType = function () {
              var t = Object(p.a)(d.a.mark((function t(e, n) {
                var o;
                return d.a.wrap((function (t) {
                  for (; ;)
                    switch (t.prev = t.next) {
                      case 0:
                        if (!r.chartInstance) {
                          t.next = 8;
                          break;
                        }
                        if (!("heikinashi" !== e && "heikinashi" === n || "heikinashi" === e && "heikinashi" !== n)) {
                          t.next = 4;
                          break;
                        }
                        return t.next = 4,
                          r.onFetchCandles(!1);
                      case 4:
                        (o = r.chartInstance.get(Ap.mainSeries)).update({
                          type: n
                        }, !1),
                          o.setData(r.state.candles),
                          fa.a.setChartType(n);
                      case 8:
                      case "end":
                        return t.stop();
                    }
                }
                ), t);
              }
              )));
              return function (e, n) {
                return t.apply(this, arguments);
              };
            }(),
            r.redrawChartLastPriceLine = function (t) {
              var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              if (r.chartInstance) {
                var n = r.getAxis()
                  , o = n.yAxis
                  , a = r.props.theme.chart.priceLine
                  , i = Qu(t, a.color, 2, 9)
                  , c = Xu(t, a.color)
                  , l = r.getPlotLineOrBand(o, Bu.quote);
                if (!l)
                  return o.removePlotLine(Bu.quote),
                    o.addPlotLine(i);
                r.redrawPlotLine(l, o, t, c, e);
              }
            }
            ,
            r.redrawChartLastPriceBand = function (t, e) {
              if (r.chartInstance) {
                var n = r.getAxis().yAxis
                  , o = r.getPlotLineOrBand(n, Zu.quote);
                o && r.redrawPlotBand(o, t, e);
              }
            }
            ,
            r.redrawChartLastQuote = function (t, e) {
              var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
              if (r.chartInstance) {
                if (e) {
                  var o = r.getAxis()
                    , a = o.yAxis
                    , i = a.getExtremes()
                    , c = i.min
                    , l = i.max
                    , u = 1 === e
                    , s = u ? l : c;
                  r.redrawChartLastPriceBand(t, s);
                }
                r.redrawChartLastPriceLine(t, n);
              }
            }
            ,
            r.setChartData = function (t) {
              var e = r.state.timeframe.period
                , n = r.getSeries()
                , o = n.mainSeries
                , a = n.indicatorSeries
                , i = t;
              o.name = r.props.instrumentName,
                o.setData(i, !1),
                a.setData("tick" !== e ? i : [], !1),
                r.chartInstance.redraw(!1);
            }
            ,
            r.addPointToChart = function (t) {
              r.setState({
                candles: [].concat(Object(g.a)(r.state.candles), [t]),
                lastPrice: t[4]
              }, (function () {
                var e = r.state.timeframe.period
                  , n = r.getSeries()
                  , o = n.mainSeries
                  , a = n.indicatorSeries;
                o.addPoint("tick" === e ? [t[0], t[4]] : t, !1),
                  "tick" !== e && (null === a || void 0 === a || a.setData(r.state.candles, !1)),
                  r.props.isCfdOptions || r.updateCountDown(r.props.time),
                  r.chartInstance.redraw();
              }
              ));
            }
            ,
            r.updateLastChartPoint = function (t) {
              var e = r.state
                , n = e.chartType
                , o = e.timeframe;
              r.setState({
                candles: [].concat(Object(g.a)(Object(_n.dropRight)(r.state.candles, 1)), [t]),
                lastPrice: t[4]
              }, (function () {
                var e = r.getSeries()
                  , a = e.mainSeries
                  , i = e.indicatorSeries
                  , c = "candlestick" === n || "heikinashi" === n
                  , l = Object(_n.last)(a.data)
                  , u = Object(_n.last)(i.data);
                null === l || void 0 === l || l.update(c ? {
                  y: t[4],
                  open: t[1],
                  high: t[2],
                  low: t[3],
                  close: t[4]
                } : {
                  y: t[4]
                }, !1),
                  "tick" !== o.period && (null === u || void 0 === u || u.update({
                    y: t[4],
                    open: t[1],
                    high: t[2],
                    low: t[3],
                    close: t[4]
                  }));
              }
              ));
            }
            ,
            r.showBalloon = function (t, e) {
              var n = r.props
                , o = n.openTrades
                , a = n.lastQuote
                , i = o.find((function (e) {
                  return e.expiryTimestamp === t;
                }
                ));
              if (i) {
                var c = r.props.theme.chart.balloon
                  , l = a ? Object(Is.e)(i, a.last) : -1
                  , u = l > 0 ? c.low.backgroundColor : c.high.backgroundColor
                  , s = l > 0 ? c.low.textColor : c.high.textColor
                  , d = Object(Is.d)(i, l)
                  , p = Object(Ps.b)(w.b.getState())(d, i.currency)
                  , f = r.chartInstance.get(Ap.mainSeries)
                  , m = Object(_n.last)(f.data);
                !function (t, e, n, r, o, a, i, c) {
                  var l = t.renderer.text(function (t, e, n) {
                    return '<div style="background-color: '.concat(e, "; border: 1px solid ").concat(n, ';" class="notification-container">\n    <div style="background-color: ').concat(e, "; border-top: 1px solid ").concat(n, "; border-right: 1px solid ").concat(n, ';" class="triangle"></div>\n    <div class="notification-container-title">Result (P/L)</div>\n    <div style="color: ').concat(n, ';" class="notification-container-content">').concat(t, "</div>\n  </div>");
                  }(r, o, a), e, n, !0).on("click", (function () {
                    i();
                  }
                  )).add();
                  setTimeout((function () {
                    l.animate({
                      y: -99999
                    }, {
                      duration: 3e3,
                      easing: "ease-out",
                      complete: function () {
                        l.destroy(),
                          c();
                      }
                    });
                  }
                  ), 3e3);
                }(r.chartInstance, m.plotX - 42, m.plotY + 42, p, u, s, (function () {
                  r.props.actionSetSelectedTrade(i),
                    r.props.actionSetSidebar(dd.a.positions, {
                      tab: 1
                    });
                }
                ), e);
              }
            }
            ,
            r.getCountDownTime = function (t) {
              var e = r.state
                , n = e.deadPeriod
                , o = e.countDownExpectedTime
                , a = r.props.selectedExpiry || r.state.expiry
                , i = n - t < 0
                , c = (i ? a : n) - (i ? n : o)
                , l = (i ? a : n) - t;
              return {
                fillRate: Math.ceil((l - c) / c * 100),
                realTime: l,
                timeDistance: Object(Ls.b)(l)
              };
            }
            ,
            r.getCountDownColor = function (t) {
              var e = r.props.theme.chart.countDown
                , n = e.filledColorUp
                , o = e.filledColorMiddle
                , a = e.filledColorDown
                , i = r.state
                , c = i.expiry
                , l = i.deadPeriod
                , u = i.countDownExpectedTime
                , s = l - t < 0
                , d = (s ? c : l) - t
                , p = (s ? c : l) - (s ? l : u);
              return (p <= 3e5 ? d <= p / (s ? 1 : 2) : d <= p / (s ? 1 : 6)) ? o : (p <= 3e5 ? d <= p / (s ? 6 : 5) : d <= p / (s ? 180 : 36)) ? a : n;
            }
            ,
            r.getCountDownText = function (t) {
              r.props.lastQuote.timestamp;
              var e = r.state
                , n = e.deadPeriod
                , o = e.expiry
                , i = r.getCountDownTime(t)
                , c = i.fillRate
                , l = i.timeDistance
                , u = r.props.theme.chart.countDown
                , s = u.backgroundColor
                , d = u.normalColor
                , p = r.getCountDownColor(t)
                , f = n - t > 0 ? Object(_s.renderToString)(a.a.createElement(a.a.Fragment, null, a.a.createElement(xt, null, dc.a.format(n, "HH:mm:ss")), a.a.createElement($u.a, {
                  value: c - 100,
                  filledColor: p,
                  normalColor: d,
                  size: 34,
                  text: l,
                  textColor: p,
                  thickness: 2,
                  withBackground: !0,
                  backgroundColor: s
                }))) : Object(_s.renderToString)(a.a.createElement(xt, null, dc.a.format(n, "HH:mm:ss")))
                , m = n - t > 0 ? Object(_s.renderToString)(a.a.createElement(a.a.Fragment, null, a.a.createElement(xt, null, dc.a.format(o, "HH:mm:ss")), a.a.createElement(pd, null))) : Object(_s.renderToString)(a.a.createElement(a.a.Fragment, null, a.a.createElement(xt, null, dc.a.format(o, "HH:mm:ss")), a.a.createElement($u.a, {
                  value: c - 100,
                  filledColor: p,
                  normalColor: d,
                  size: 34,
                  text: l,
                  textColor: p,
                  thickness: 2,
                  withBackground: !0,
                  backgroundColor: s
                })));
              return {
                deadPeriodText: f,
                expiryText: c > -100 ? m : Object(_s.renderToString)(a.a.createElement(xt, null, dc.a.format(o, "HH:mm:ss")))
              };
            }
            ,
            r.updateCountDown = function (t) {
              var e = r.state.deadPeriod;
              if (r.chartInstance && t !== e) {
                var n, o, a = r.getAxis().xAxis, i = r.getPlotLineOrBand(a, Bu.deadPeriod), c = r.getPlotLineOrBand(a, Bu.expiry), l = r.getCountDownText(t), u = l.deadPeriodText, s = l.expiryText;
                null === i || void 0 === i || null === (n = i.label) || void 0 === n || n.attr({
                  text: u
                }),
                  null === c || void 0 === c || null === (o = c.label) || void 0 === o || o.attr({
                    text: s
                  });
              }
            }
            ,
            r.recalculateOverscroll = function () {
              var t, e = r.getAxis().xAxis, n = r.state, o = n.expiry, a = n.candles, i = o - Object(_n.last)(a)[0], c = r.chartInstance.navigator;
              (null === c || void 0 === c || null === (t = c.xAxis) || void 0 === t ? void 0 : t.update) && c.xAxis.update({
                overscroll: i
              }),
                (null === e || void 0 === e ? void 0 : e.update) && e.update({
                  overscroll: i
                });
            }
            ,
            r.onTimeChange = function (t) {
              r.updateCountDown(t);
            }
            ,
            r.changeChartLastPrice = function (t) {
              r.setState({
                lastPrice: t
              });
            }
            ,
            r.changeChartLastQuote = function (t) {
              var e = r.state
                , n = e.timeframe
                , o = e.chartType
                , a = e.expiry
                , i = n.chartPeriod
                , c = n.candleStickPeriod
                , l = "candlestick" === o || "heikinashi" === o ? 6e4 * c : 4e3 * i
                , u = t.timestamp
                , s = t.open
                , d = t.high
                , p = t.low
                , f = t.last
                , m = Math.floor(u / l) * l
                , b = f;
              if (!r.props.isCfdOptions && u >= a)
                return r.props.actionDeselectExpiry();
              var h = r.chartInstance.get(Ap.mainSeries)
                , g = Object(_n.last)(h.data);
              if (g)
                if (u - g.x >= l) {
                  var v = [m, s, d, p, f];
                  if ("heikinashi" === o) {
                    var x = r.state.candles[r.state.candles.length - 1];
                    v = r.calculateHeikinAshiPoint(x, v);
                  }
                  r.addPointToChart(v),
                    b = v[4];
                } else {
                  var O = [g.x, s, d, p, f];
                  if ("heikinashi" === o) {
                    var y = r.state.candles[r.state.candles.length - 2];
                    O = r.calculateHeikinAshiPoint(y, O);
                  }
                  r.updateLastChartPoint(O),
                    b = O[4];
                }
              !r.props.isCfdOptions && m >= a && r.props.actionDeselectExpiry(),
                r.props.isCfdOptions && r.onRenderGradient(r.props.cfdDirection),
                r.redrawChartLastQuote(+b, r.state.direction);
            }
            ,
            r.onRenderTrades = function () {
              var t = r.getSeries()
                , e = t.tradesSeries
                , n = t.mainSeries
                , o = r.getAxis()
                , a = o.xAxis
                , i = (o.yAxis,
                  function (t) {
                    var e, r = null !== (e = Object(_n.last)(n.xData)) && void 0 !== e ? e : 0;
                    return t.x > r ? r : t.x;
                  }
                )
                , c = function (t) {
                  var e = n.points
                    , r = Object(_n.filter)(e, (function (e) {
                      return e.x <= t.x;
                    }
                    ))
                    , o = Object(_n.last)(r)
                    , a = Object(_n.last)(n.yData);
                  return o ? o.y : a;
                };
              if (e) {
                var l;
                (null === (l = e.data) || void 0 === l ? void 0 : l.length) > 0 && e.data.forEach((function (t) {
                  var e, n = t.id;
                  r.chartInstance.get(n) && (null === (e = r.chartInstance["line_".concat(n)]) || void 0 === e ? void 0 : e.element) && r.chartInstance["line_".concat(n)].destroy();
                }
                ));
                var s = r.props
                  , d = s.openTrades
                  , p = s.instrument
                  , f = Object(_n.chain)(Object(g.a)(d.map((function (t) {
                    return Object(u.a)(Object(u.a)({}, t), {}, {
                      isClosed: !1
                    });
                  }
                  )))).filter((function (t) {
                    return r.props.isCfdOptions ? !!t.optionValue : !t.optionValue;
                  }
                  )).map((function (t) {
                    return Qp(t, p, null, t.isClosed, a, r.props.theme.chart);
                  }
                  )).filter((function (t) {
                    return t;
                  }
                  )).map((function (t) {
                    return Object(u.a)(Object(u.a)({}, t), {}, {
                      x: i(t),
                      y: c(t)
                    });
                  }
                  )).sortBy((function (t) {
                    return t.x;
                  }
                  )).value();
                e.setData(f);
              }
            }
            ,
            r.onChartReady = function () {
              r.setState({
                ready: !0
              });
            }
            ,
            r.onFetchCandles = Object(p.a)(d.a.mark((function t() {
              var e, n, o, a, i, c, l = arguments;
              return d.a.wrap((function (t) {
                for (; ;)
                  switch (t.prev = t.next) {
                    case 0:
                      return e = !(l.length > 0 && void 0 !== l[0]) || l[0],
                        Rp && Rp.cancel("Operation canceled due to new request."),
                        n = y.a.CancelToken,
                        Rp = n.source(),
                        o = r.state.timeframe.period,
                        t.next = 7,
                        k.a.chartHistory(r.props.instrument, o, 1e3, Rp);
                    case 7:
                      (a = t.sent) ? (i = r.createSeriesData(a.aggs),
                        c = i[i.length - 1],
                        r.setState({
                          candles: i,
                          lastPrice: c[1]
                        }, (function () {
                          e && r.createOrUpdateChart();
                        }
                        )),
                        Rp = null) : (r.setState({
                          error: !0
                        }),
                          Rp = null);
                    case 9:
                    case "end":
                      return t.stop();
                  }
              }
              ), t);
            }
            ))),
            r.onLastPrice = function (t) {
              r.setState({
                lastPrice: Number(t)
              });
            }
            ,
            r.onChangeTimeframe = function (t) {
              var e = r.state
                , n = e.indicators
                , o = e.timeframe
                , a = "tick" === t.period;
              o.period !== t.period && r.setState({
                timeframe: t,
                indicators: a ? [] : n
              }, Object(p.a)(d.a.mark((function t() {
                return d.a.wrap((function (t) {
                  for (; ;)
                    switch (t.prev = t.next) {
                      case 0:
                        return a && Object(_n.forEach)(n, r.removeIndicator),
                          t.next = 3,
                          r.onFetchCandles();
                      case 3:
                      case "end":
                        return t.stop();
                    }
                }
                ), t);
              }
              ))));
            }
            ,
            r.onChangeChartType = function (t) {
              r.resetChartZoom();
              var e = r.state.chartType;
              r.setState({
                chartType: t
              }, (function () {
                r.changeChartType(e, t);
              }
              ));
            }
            ,
            r.onChangeChart = function () {
              r.props.actionChangeChartType(ec(r.props.chartLibraryConfig, r.props.currentChartType));
            }
            ,
            r.onRenderExpiry = function (t) {
              if (!t)
                return null;
              r.setState({
                expiry: t
              }, (function () {
                var e = r.state.deadPeriod
                  , n = r.props.theme.chart
                  , o = n.expiryLine.color
                  , a = n.deadPeriodLine.color
                  , i = r.getAxis().xAxis;
                if (i.removePlotLine(Bu.expiry),
                  i.removePlotLine(Bu.deadPeriod),
                  !r.props.isCfdOptions) {
                  var c = Ku(t, o)
                    , l = Ju(e, a)
                    , s = r.getCountDownText(r.props.time)
                    , d = s.deadPeriodText
                    , p = s.expiryText;
                  i.addPlotLine(Object(u.a)(Object(u.a)({}, c), {}, {
                    label: Object(u.a)(Object(u.a)({}, c.label), {}, {
                      text: p
                    })
                  })),
                    i.addPlotLine(Object(u.a)(Object(u.a)({}, l), {}, {
                      label: Object(u.a)(Object(u.a)({}, l.label), {}, {
                        text: d
                      })
                    })),
                    r.recalculateOverscroll(),
                    r.onChangeZoomLevel(r.state.zoomLevel),
                    r.chartInstance.redraw();
                }
              }
              ));
            }
            ,
            r.onRenderGame = function (t) {
              if (t) {
                var e = r.getAxis()
                  , n = e.xAxis
                  , o = r.props.theme.chart
                  , a = o.expiryLine.color
                  , i = o.deadPeriodLine.color
                  , c = r.state
                  , l = c.candles
                  , s = (c.timeframe,
                    c.zoomLevels,
                    c.zoomLevel,
                    t.deadPeriod)
                  , d = t.timestamp
                  , p = t.expiry
                  , f = Number(d)
                  , m = f - 1e3 * s
                  , b = f
                  , h = Object(_n.last)(l)[0]
                  , g = (b - h) / 1e3
                  , v = (r.state.expiry,
                    0);
                if (p <= 600) {
                  var x = ["candlestick", "ohlc", "heikinashi"].includes(r.state.chartType);
                  v = x || r.props.isCfdOptions ? 1 : 0;
                } else
                  v = p > 600 && p <= 1500 ? 1 : p > 1500 && p <= 3600 ? 3 : p > 3600 && p <= 36e3 ? 5 : 6;
                r.setState({
                  expiry: f,
                  deadPeriod: m,
                  periodOptions: p > 8e4 ? Object(_n.slice)(Vu, v, Vu.length) : Vu,
                  countDownExpectedTime: h
                }, (function () {
                  n.removePlotLine(Bu.expiry),
                    n.removePlotLine(Bu.deadPeriod);
                  var t = Ku(f, a)
                    , e = Ju(m, i)
                    , o = r.chartInstance.navigator;
                  o && o.xAxis.update && o.xAxis.update({
                    overscroll: 1e3 * g
                  }),
                    n.update({
                      overscroll: 1e3 * g
                    });
                  var c = r.getCountDownText(r.props.time)
                    , l = c.deadPeriodText
                    , s = c.expiryText;
                  r.props.isCfdOptions || (n.addPlotLine(Object(u.a)(Object(u.a)({}, t), {}, {
                    label: Object(u.a)(Object(u.a)({}, t.label), {}, {
                      text: s
                    })
                  })),
                    n.addPlotLine(Object(u.a)(Object(u.a)({}, e), {}, {
                      label: Object(u.a)(Object(u.a)({}, e.label), {}, {
                        text: l
                      })
                    })),
                    r.updateCountDown(r.props.time));
                }
                ));
              }
            }
            ,
            r.getCfdYAxisValue = function () {
              var t = r.props
                , e = t.selectedCfdOptionExpiry
                , n = t.selectedCfdOptionInstrument;
              if (r.chartInstance && e && n) {
                var o, a, i, c, l = n[e].price, u = r.getSeries().mainSeries, s = null !== (o = Object(_n.max)(null === (a = u.points) || void 0 === a ? void 0 : a.map((function (t) {
                  return t.y;
                }
                )))) && void 0 !== o ? o : 0, d = null !== (i = Object(_n.min)(null === (c = u.points) || void 0 === c ? void 0 : c.map((function (t) {
                  return t.y;
                }
                )))) && void 0 !== i ? i : 0, p = Math.ceil((s - r.state.lastPrice) / Number(l)), f = Math.ceil((r.state.lastPrice - d) / Number(l));
                return {
                  tickAmount: 2 * Math.max(p + 1, f + 1, 3) + 2,
                  tickInterval: +l
                };
              }
              return {
                tickAmount: null,
                tickInterval: null
              };
            }
            ,
            r.onRenderGradient = function (t) {
              r.setState({
                direction: t
              }, (function () {
                var e = r.getAxis().yAxis
                  , n = e.getExtremes()
                  , o = n.min
                  , a = n.max;
                if (e.removePlotBand(Zu.quote),
                  e.removePlotLine(Bu.breakeven),
                  [1, -1].includes(t)) {
                  var i = 1 === t
                    , c = r.state.lastPrice
                    , l = i ? a : o
                    , u = i ? 1 : 0
                    , s = i ? 0 : 1
                    , d = r.props.theme.chart.quoteBand
                    , p = d.upGradient0
                    , f = d.downGradient0
                    , m = d.upGradient1
                    , b = d.downGradient1
                    , h = 1 === t
                    , g = e.tickPositions.indexOf(r.state.lastPrice)
                    , v = e.tickPositions[g + (h ? 1 : -1)];
                  e.addPlotBand(function (t, e, n, r, o, a, i, c, l, u, s) {
                    return {
                      id: Zu.quote,
                      from: t,
                      to: e,
                      zIndex: 2,
                      color: {
                        linearGradient: {
                          x1: 0,
                          x2: 0,
                          y1: n,
                          y2: r
                        },
                        stops: [[0, 1 === o ? a : i], [1, 1 === o ? c : l]]
                      },
                      label: {
                        text: u ? "PROFIT" : null,
                        style: {
                          color: 1 === o ? c : l,
                          fontSize: s ? 50 : 100,
                          fontWeight: 900
                        },
                        align: "center",
                        textAlign: "center",
                        verticalAlign: "middle"
                      }
                    };
                  }(r.props.isCfdOptions ? v : c, l, s, u, t, p, f, m, b, r.props.isCfdOptions, r.props.isMobile)),
                    r.chartInstance.redraw();
                }
              }
              ));
            }
            ,
            r.getAxis = function () {
              var t, e;
              return {
                yAxis: null === (t = r.chartInstance) || void 0 === t ? void 0 : t.get(Dp.yAxis),
                xAxis: null === (e = r.chartInstance) || void 0 === e ? void 0 : e.get(Dp.xAXis)
              };
            }
            ,
            r.getSeries = function () {
              return {
                tradesSeries: r.chartInstance.get(Ap.tradesSeries),
                mainSeries: r.chartInstance.get(Ap.mainSeries),
                indicatorSeries: r.chartInstance.get(Ap.indicatorSeries)
              };
            }
            ,
            r.getAnnotations = function () {
              return r.chartInstance.annotations;
            }
            ,
            r.calculateAnnotations = function () {
              var t = r.getAnnotations();
              r.setState({
                annotationsCount: t.length,
                visibleAnnotations: Object(_n.size)(Object(_n.filter)(t, (function (t) {
                  return t.options.visible;
                }
                )))
              });
            }
            ,
            r.removeAllAnnotations = function () {
              r.getAnnotations().forEach((function (t) {
                return t.setVisibility(!1);
              }
              )),
                r.calculateAnnotations();
            }
            ,
            r.toggleAnnotation = function (t) {
              var e = r.getAnnotations()
                , n = Object(_n.last)(Object(_n.filter)(e, (function (e) {
                  return e.options.visible === !t;
                }
                )));
              n && n.setVisibility(t),
                r.calculateAnnotations();
            }
            ,
            r.recalculateYAxisHeight = function () {
              var t, e = r.getAxis().yAxis, n = Object(_n.chain)(r.chartInstance.yAxis).map((function (t) {
                return t.height;
              }
              )).reduce((function (t, e) {
                return t + e;
              }
              ), 0).value(), o = r.chartInstance, a = o.chartHeight, i = o.navigator, c = a - n, l = (null === i || void 0 === i || null === (t = i.navigatorOptions) || void 0 === t ? void 0 : t.height) || 0, u = e.height + c - l;
              return {
                newyAxisHeight: .2 * u,
                yAxisHeightPx: u,
                mainAxisOffset: 20
              };
            }
            ,
            r.addSecondChartAxis = function (t) {
              if (r.chartInstance) {
                var e = r.recalculateYAxisHeight()
                  , n = e.newyAxisHeight
                  , o = e.yAxisHeightPx
                  , a = e.mainAxisOffset;
                r.getAxis().yAxis.update({
                  height: "".concat(o - n - a, "px")
                }, !1),
                  r.chartInstance.addAxis({
                    id: "".concat(t, "-y-axis"),
                    title: {
                      text: null
                    },
                    gridLineWidth: 1,
                    gridZIndex: 1,
                    gridLineColor: r.props.theme.chart.xAxis.gridLineColor,
                    lineColor: r.props.theme.chart.xAxis.lineColor,
                    opposite: !0,
                    height: "".concat(n, "px"),
                    top: "".concat(o - n, "px")
                  }, !1);
              }
            }
            ,
            r.addCfdBreakevenLine = function (t, e) {
              var n = r.getAxis().yAxis;
              if (n) {
                var o = 1 === t
                  , a = n.tickPositions.indexOf(e)
                  , i = n.tickPositions[a + (o ? 1 : -1)]
                  , c = r.props.theme.chart.quoteBand.upGradient1;
                i && n.addPlotLine(function (t, e, n, r) {
                  return {
                    id: Bu.breakeven,
                    value: t,
                    color: n,
                    width: 2,
                    zIndex: 7,
                    x: 26,
                    dashStyle: "ShortDot",
                    label: {
                      useHTML: !0,
                      formatter: function () {
                        var n = "padding: 2px 10px; border-radius: 20px; background: #06141F; color: #75F986; font-size: 11px;"
                          , o = "";
                        o = 1 === e ? Object(T.t)(qu()) : Object(T.t)(Yu());
                        var a = r ? "" : '<div style="'.concat(n, '">').concat(o, "</div>");
                        return '\n\t\t\t\t<div style="display: flex; justify-content: space-between; margin-top: 8px;">\n\t\t\t\t\t'.concat(a, '\n\t\t\t\t\t<div style="').concat(n, '">').concat(Object(T.t)(Gu()), ": ").concat(t, "</div>\n\t\t\t\t</div>\n\t\t\t");
                      }
                    }
                  };
                }(i, r.props.cfdDirection, c, r.props.isMobile));
              }
            }
            ,
            r.createIndicatorParams = function (t) {
              return t.map((function (t) {
                return Object(l.a)({}, t.id, t.value);
              }
              )).reduce((function (t, e) {
                return Object(u.a)(Object(u.a)({}, t), e);
              }
              ), {});
            }
            ,
            r.addIndicator = function (t) {
              if (r.chartInstance) {
                var e = r.props.theme.chart.indicators
                  , n = Ss[t.type]
                  , o = Ur(n.type, t.params)
                  , a = r.createIndicatorParams(t.params)
                  , i = e[t.type];
                if (r.chartInstance.get(o))
                  return;
                var c = n.secondChart;
                c && r.addSecondChartAxis(o),
                  r.chartInstance.addSeries(Object(u.a)(Object(u.a)({}, n), {}, {
                    id: o,
                    params: a,
                    color: i,
                    events: {
                      click: function (e) {
                        r.setState({
                          clickedIndicator: Object(u.a)(Object(u.a)({}, t), {}, {
                            id: o
                          }),
                          clickedIndicatorX: e.clientX,
                          clickedIndicatorY: e.clientY
                        });
                      }
                    },
                    yAxis: c ? "".concat(o, "-y-axis") : void 0
                  }), !1),
                  r.chartInstance.redraw(),
                  r.setState({
                    indicators: [].concat(Object(g.a)(r.state.indicators), [Object(u.a)(Object(u.a)({}, t), {}, {
                      id: o,
                      color: i
                    })])
                  });
              }
            }
            ,
            r.removeIndicator = function (t) {
              if (r.chartInstance) {
                var e = Ss[t.type]
                  , n = Ur(e.type, t.params)
                  , o = r.chartInstance.get(n);
                if (o) {
                  if (o.remove(!1),
                    e.secondChart) {
                    var a = r.chartInstance.get("".concat(n, "-y-axis"));
                    a && a.remove(!1);
                  }
                  var i = r.recalculateYAxisHeight().yAxisHeightPx;
                  r.getAxis().yAxis.update({
                    height: "".concat(i, "px")
                  }, !1);
                }
                r.setState({
                  indicators: r.state.indicators.filter((function (t) {
                    return Ur(t.type, t.params) !== n;
                  }
                  )),
                  clickedIndicator: null
                }),
                  r.chartInstance.redraw();
              }
            }
            ,
            r.updateIndicator = function (t, e) {
              var n = Ur(t.type, t.params)
                , o = r.chartInstance.get(n);
              if (o) {
                var a = Object(_n.findIndex)(r.state.indicators, {
                  id: n
                })
                  , i = Ur(t.type, e);
                if (-1 !== a) {
                  o.update(Object(u.a)(Object(u.a)({}, o.options), {}, {
                    id: i,
                    params: r.createIndicatorParams(e)
                  }));
                  var c = Object(u.a)(Object(u.a)({}, r.state.indicators[a]), {}, {
                    id: i,
                    params: e
                  })
                    , l = r.state.clickedIndicator;
                  r.setState({
                    indicators: Object(Vn.b)(r.state.indicators, a, c),
                    clickedIndicator: r.state.clickedIndicator && Object(_n.isEqual)(l.id, n) ? c : l
                  });
                }
              }
            }
            ,
            r.getIndicatorVisibility = function (t) {
              var e = t.type
                , n = t.params
                , o = Ur(e, n)
                , a = r.chartInstance
                , i = Object(_n.findIndex)(r.chartInstance.series, (function (t) {
                  return t.options.id === o;
                }
                ));
              return -1 !== i && a.series[i].visible;
            }
            ,
            r.toggleIndicator = function (t) {
              var e = t.type
                , n = t.params
                , o = Ur(e, n)
                , a = r.chartInstance
                , i = Object(_n.findIndex)(r.chartInstance.series, (function (t) {
                  return t.options.id === o;
                }
                ));
              if (-1 !== i) {
                var c = a.series[i]
                  , l = c.visible;
                c.setVisible(!l);
              }
            }
            ,
            r.onChangeZoomLevel = function (t) {
              var e = r.state.zoomLevels
                , n = Object(_n.size)(e)
                , o = Object(_n.isEqual)(t, n) ? n - 1 : Math.max(0, t);
              r.setState({
                zoomLevel: o
              }, (function () {
                var t = r.getAxis()
                  , n = t.xAxis
                  , a = t.yAxis
                  , i = r.state
                  , c = i.candles
                  , l = i.expiry
                  , u = Math.floor(e[o] % 1 === 0 ? e[o] : c.length * e[o])
                  , s = Object(_n.takeRight)(c, u)
                  , d = Object(_n.first)(s)
                  , p = d ? d[0] : null;
                a.removePlotLine(Bu.quote),
                  n.setExtremes(p, l, !0, !1);
              }
              ));
            }
            ,
            r.onToggleNavigator = function () {
              var t = !r.state.navigator;
              r.setState({
                navigator: t
              }, (function () {
                r.chartInstance.update({
                  navigator: {
                    enabled: t
                  }
                });
              }
              ));
            }
            ,
            r.onFullScreen = function () {
              return r.chartInstance.fullscreen.toggle();
            }
            ,
            r.onChartResize = function () {
              r.chartInstance && r.chartInstance.reflow();
            }
            ,
            r.onChartOrientation = function () {
              window.location.reload();
            }
            ,
            r.componentDidMount = Object(p.a)(d.a.mark((function t() {
              return d.a.wrap((function (t) {
                for (; ;)
                  switch (t.prev = t.next) {
                    case 0:
                      r.props.instrument && r.onFetchCandles(),
                        window.addEventListener("resize", r.onChartResize),
                        "onorientationchange" in window && window.addEventListener("orientationchange", r.onChartOrientation),
                        r.eventEmitter = Jd.a.addListener("positionOpened", (function (t) {
                          var e = t.position
                            , n = t.opened
                            , o = r.chartInstance.get(Ap.tradesSeries)
                            , a = (null === o || void 0 === o ? void 0 : o.data).find((function (t) {
                              return t.id === e.tradeID;
                            }
                            ))
                            , i = r.getAxis()
                            , c = i.xAxis
                            , l = i.yAxis;
                          if (a) {
                            var u, s, d, p, f, m, b, h, g = a.x, v = a.y, x = a.direction, O = c.toPixels(g) + 60, y = l.toPixels(v) + (1 === x ? 140 : -30);
                            if (r.setState({
                              clickedTrade: n ? e : null,
                              clickedTradeX: n ? O : null,
                              clickedTradeY: n ? y : null
                            }),
                              !n)
                              (null === (u = r.chartInstance) || void 0 === u || null === (s = u.breakeven_line_position) || void 0 === s ? void 0 : s.element) && (null === (d = r.chartInstance) || void 0 === d || null === (p = d.breakeven_line_position) || void 0 === p || p.destroy()),
                                (null === (f = r.chartInstance) || void 0 === f || null === (m = f.breakevenLabel) || void 0 === m ? void 0 : m.element) && (null === (b = r.chartInstance) || void 0 === b || null === (h = b.breakevenLabel) || void 0 === h || h.destroy());
                          }
                        }
                        ));
                    case 4:
                    case "end":
                      return t.stop();
                  }
              }
              ), t);
            }
            ))),
            r.componentWillUnmount = function () {
              var t;
              window.removeEventListener("resize", r.onChartResize),
                "onorientationchange" in window && window.removeEventListener("orientationchange", r.onChartOrientation),
                null === (t = r.eventEmitter) || void 0 === t || t.removeListener("positionOpened", (function () { }
                ));
            }
            ,
            r.componentDidUpdate = function (t) {
              if (t.instrument !== r.props.instrument && r.setState({
                loading: !0
              }, r.onFetchCandles),
                r.chartInstance && (t.openTrades === r.props.openTrades && t.closedTrades === r.props.closedTrades || r.onRenderTrades(),
                  r.props.isCfdOptions || t.game === r.props.game || r.props.selectedExpiry || (r.onRenderGame(r.props.game),
                    r.state.isScrolling || r.onChangeZoomLevel(r.state.zoomLevel)),
                  t.selectedExpiry !== r.props.selectedExpiry && (r.onRenderExpiry(r.props.selectedExpiry),
                    !r.props.selectedExpiry && t.selectedExpiry && r.props.lastQuote.timestamp >= r.state.expiry && r.showBalloon(t.selectedExpiry, (function () {
                      r.props.actionSelectNextExpiry();
                      var t = r.getAxis().yAxis
                        , e = Object(_n.last)(r.state.candles)
                        , n = e[4] || e[1];
                      t.removePlotLine(Bu.quote),
                        r.redrawChartLastQuote(n, r.state.direction);
                    }
                    ))),
                  t.time !== r.props.time && r.onTimeChange(r.props.time),
                  t.lastPrice !== r.props.lastPrice && r.onLastPrice(r.props.lastPrice),
                  Object(_n.isEqual)(t.lastQuote, r.props.lastQuote) || r.changeChartLastQuote(r.props.lastQuote),
                  t.direction !== r.props.direction && r.onRenderGradient(r.props.direction),
                  t.hoveredDirection !== r.props.hoveredDirection && r.onRenderGradient(r.props.hoveredDirection),
                  t.cfdDirection !== r.props.cfdDirection && r.onRenderGradient(r.props.cfdDirection),
                  t.isMobile,
                  r.props.isMobile,
                  t.isCfdOptions !== r.props.isCfdOptions)) {
                r.onRenderTrades();
                var e = r.getAxis()
                  , n = e.xAxis
                  , o = e.yAxis;
                if (o.setExtremes(null, null),
                  o.removePlotLine(Bu.quote),
                  n.removePlotLine(Bu.expiry),
                  n.removePlotLine(Bu.deadPeriod),
                  !r.props.isCfdOptions) {
                  var a = (["candlestick", "ohlc", "heikinashi"].includes(r.state.chartType) ? Wu.filter((function (t) {
                    return t.supportedOnCandleChartType;
                  }
                  )) : Wu.filter((function (t) {
                    return t.supportedOnLineChartType;
                  }
                  ))).find((function (t) {
                    return "tick" === t.period;
                  }
                  ));
                  a && r.onChangeTimeframe(a);
                }
                r.chartInstance.reflow();
              }
            }
            ,
            r.render = function () {
              var t = !r.state.loading && !r.state.error
                , e = t ? "visible" : "hidden"
                , n = !r.props.isMobile
                , o = {
                  addIndicator: r.addIndicator,
                  updateIndicator: r.updateIndicator,
                  removeIndicator: r.removeIndicator,
                  toggleIndicator: r.toggleIndicator,
                  getIndicatorVisibility: r.getIndicatorVisibility
                }
                , i = r.state
                , c = i.clickedIndicator
                , l = i.clickedIndicatorX
                , u = i.clickedIndicatorY
                , s = i.clickedTrade
                , d = i.clickedTradeX
                , p = i.clickedTradeY
                , f = function () {
                  r.setState({
                    clickedTrade: null,
                    clickedTradeX: null,
                    clickedTradeY: null
                  });
                }
                , m = ["candlestick", "ohlc", "heikinashi"].includes(r.state.chartType) || r.props.isCfdOptions ? Wu.filter((function (t) {
                  return t.supportedOnCandleChartType;
                }
                )) : Wu.filter((function (t) {
                  return t.supportedOnLineChartType;
                }
                ))
                , b = r.getAxis().yAxis
                , h = b ? b.len / (b.tickPositions.length - 1) : 0
                , g = b ? b.tickPositions.length - 1 : 0;
              return a.a.createElement(Kp.Provider, {
                value: o
              }, a.a.createElement(zp, {
                isMobile: r.props.isMobile,
                colors: r.props.theme
              }, !n && a.a.createElement(a.a.Fragment, null, a.a.createElement(Xd, {
                chartType: r.state.chartType,
                timeframe: r.state.timeframe,
                periodOptions: r.state.periodOptions,
                onChangeTimeframe: function (t) {
                  return r.onChangeTimeframe(t);
                },
                isHighCharts: r.props.currentChartType === Ui.Basic,
                onChangeChart: function () {
                  return r.onChangeChart();
                }
              }), !Object(Vn.a)(r.props.isMobile) && a.a.createElement(gt, {
                colors: r.props.theme
              }, m.map((function (t) {
                return a.a.createElement(vt, {
                  colors: r.props.theme,
                  active: r.state.timeframe.chartPeriod === t.chartPeriod,
                  onClick: function () {
                    return r.onChangeTimeframe(t);
                  }
                }, t.periodLabel);
              }
              )))), s && a.a.createElement(a.a.Fragment, null, a.a.createElement(ld, {
                trade: s,
                quote: r.props.lastQuote,
                timeleft: 5,
                x: d,
                y: Math.min(870, p),
                onClose: f
              }), a.a.createElement(Ot.a, {
                onClick: function () {
                  return f();
                }
              })), a.a.createElement(Np, {
                loggedIn: r.props.loggedIn,
                isMobile: r.props.isMobile
              }, !(r.props.currentChartType === Ui.Basic) && a.a.createElement(fp, null), r.props.currentChartType === Ui.Basic && a.a.createElement("div", {
                id: "chart-container",
                className: "highcharts-container",
                style: {
                  visibility: e
                }
              }), r.props.isCfdOptions && a.a.createElement(Ud, {
                isMobile: r.props.isMobile,
                lastPrice: r.props.lastPrice,
                trackStepLen: h,
                trackStepsCount: g,
                valueTrackColor: "#75F986",
                activeTrackColor: "#54b467",
                inactiveTrackColor: "#263346",
                instrument: r.props.selectedCfdOptionInstrument,
                expiry: r.props.selectedCfdOptionExpiry
              })), c && a.a.createElement(Ga, {
                indicator: c,
                withBrief: !1,
                x: l,
                y: u
              }), n && a.a.createElement(Rl, {
                periodOptions: r.state.periodOptions,
                timeframe: r.state.timeframe,
                chartType: r.state.chartType,
                onChangeTimeframe: r.onChangeTimeframe,
                onChangeChartType: r.onChangeChartType,
                removeAllAnnotations: r.removeAllAnnotations,
                calculateAnnotations: r.calculateAnnotations,
                toggleAnnotation: r.toggleAnnotation,
                indicators: r.state.indicators
              }), r.state.loading && a.a.createElement(Uu.a, {
                zIndex: 40
              }), a.a.createElement(a.a.Fragment, null, a.a.createElement(gu, {
                onChangeTimeframe: r.onChangeTimeframe,
                onChangeChartType: r.onChangeChartType,
                periodOptions: r.state.periodOptions,
                chartType: r.state.chartType,
                timeframe: r.state.timeframe,
                indicators: r.state.indicators,
                removeAllAnnotations: r.removeAllAnnotations,
                calculateAnnotations: r.calculateAnnotations,
                toggleAnnotation: r.toggleAnnotation,
                isMobile: r.props.isMobile,
                navigator: r.state.navigator,
                zoomLevel: r.state.zoomLevel,
                onChangeZoomLevel: r.onChangeZoomLevel,
                onFullScreen: function () {
                  return r.onFullScreen();
                },
                onToggleNavigator: r.onToggleNavigator,
                onChangeChart: r.onChangeChart,
                isHighCharts: r.props.currentChartType === Ui.Basic
              }), t && a.a.createElement(Ms, {
                instrument: r.props.instrument,
                navigator: r.state.navigator
              }))));
            }
            ;
          var o = fa.a.getChartType() || "area"
            , i = ["area", "line"].includes(o) ? Vu[0] : Vu[1];
          return r.state = {
            loading: !0,
            error: !1,
            ready: !1,
            navigator: !t.isMobile,
            candles: [],
            annotationsCount: 0,
            visibleAnnotations: 0,
            lastPrice: null,
            expiry: 0,
            deadPeriod: 0,
            countDownExpectedTime: 0,
            direction: null,
            indicators: [],
            clickedIndicator: null,
            clickedIndicatorX: null,
            clickedIndicatorY: null,
            clickedTrade: null,
            clickedTradeX: null,
            clickedTradeY: null,
            periodOptions: Vu,
            zoomLevels: t.isMobile ? [1.01, .95, .9, .85, .8, .75, .7, .65, .6, .55, .5, .45, .4, .35, .3, .25, 80, 60, 50, 25] : [1, .95, .9, .85, .8, .75, .7, .65, .6, .55, .5, .45, .4, .35, .3, .25, .2, .15, .1, .05],
            zoomLevel: 19,
            timeframe: i,
            chartType: o,
            isScrolling: !1
          },
            r.chartInstance = null,
            r.eventEmitter = null,
            r;
        }
        return n;
      }(o.Component)
      , tf = Object(i.c)((function (t) {
        return {
          instrument: t.trading.selected,
          instrumentName: Object(si.g)(t),
          instrumentObject: Object(si.h)(t),
          direction: t.trading.direction,
          cfdDirection: t.trading.cfdOptionsActiveDirection,
          hoveredDirection: t.trading.hoveredDirection,
          lastPrice: Object(si.k)(t),
          lastQuote: Object(si.l)(t),
          openTrades: t.trades.open || [],
          closedTrades: t.trades.closed || [],
          game: t.game,
          time: t.time,
          chartConfig: t.registry.data.chartConfig,
          theme: t.theme,
          selectedExpiry: t.expiry.selected,
          selectedCfdOptionInstrument: t.trading.selectedCfdOptionInstrument,
          selectedCfdOptionExpiry: t.trading.selectedCfdOptionExpiry,
          loggedIn: Object(Ya.a)(t),
          chartLibraryConfig: t.registry.data.partnerConfig.chartLibraryConfig,
          currentChartType: t.registry.currentChartType
        };
      }
      ), {
        actionSetSidebar: ud.b,
        actionSelectExpiry: sd.d,
        actionDeselectExpiry: sd.c,
        actionSetSelectedTrade: Js.u,
        actionSelectNextExpiry: Qd.d,
        actionChangeChartType: Zi.h
      })($p);
    function ef() {
      var t = Object(r.a)(["Will become available again on"]);
      return ef = function () {
        return t;
      }
        ,
        t;
    }
    function nf() {
      var t = Object(r.a)(["Out of trading hours"]);
      return nf = function () {
        return t;
      }
        ,
        t;
    }
    function rf() {
      var t = Object(r.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  mask: url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8yIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48Zz48cGF0aCBkPSJNMTQwLjIsNTEySDUxMlYzNjguMWwtMi4yLTEzLjdsLTEuNy0wLjJsLTEuOSw0Ljl2LTMuNGwtMy4yLTIuMmwtMS45LTE2LjFsLTIuMi0wLjVsLTIuNywxNC45bC0yLjctMTQuOWwtMS41LDMzLjYgbC0zLjYtMzIuNmgtMS41bC0xLjktMy43bC0xLjgtMTcuN2wtMS4yLDIuMmwtMi43LTQuOWwtMi43LDEzLjR2LTEyLjlsLTEuOSwxLjdsLTIuOS0yLjJsLTIuOSw0LjRsLTEuMy0xM2wtMS42LDAuMmwtMi42LTI1LjggbC0yLjIsMy43bC0zLjMsMzAuM2wtNS44LTYuNmwtMi42LDMuMWwtMy41LTkuM2wtMiw5LjFsLTEuNi0yMC4xbC0xLjgsMy4zbC0xLjgtNi44bC0xLjYtMy43bC0yLjYtMy4xbC0yLDEuOGwtMS4xLDE0LjZsLTIuNiw3LjEgbC0xLjgtMi40bC0yLjcsMi45bC00LTAuNGwtMS4xLTUuMWwtNC45LTE4LjZsLTQuNi0wLjJsLTIuNC0zLjV2Mi45bC0yLjIsMC43bC0xLjEtNi40bC0xLjgsNi45bC0yLjYtOGwtMi40LDcuN2wtMy4xLDEuMSBsLTIuNiwyMS42bC0xLjYtMTIuNGgtMy45bC0yLjYtMTcuNWwtMy4zLDAuMnYyLjdsLTIuNywwLjVsLTEuNSwzLjhsLTAuOS00bC0yLjIsMy41bC0yLjcsMC4ybC0wLjksMjQuOGwtMi4yLTcuMWwtMy44LDE1LjIgbC0yLjksMTguNGwtMS42LTE2LjFsLTEuOCwxMy4zbC0yLjYtMi45bC0wLjksNS44bC0xLjgtMTYuNGwtMS4xLDE2LjhsLTMuOCwwLjRsLTIuMi0xNC42bC0xLjUsMTQuMmwtMS42LTRsLTIuNyw3LjdsLTEuMSw2LjkgbC0zLjctMy43aC0zLjN2LTQuMmgtMi40bC0xLjEsMy43bC0xLjYtMi43bC0wLjksMTMuMmwtNCw2LjJsLTIuNi0xMi42bC0xLjYtNy4xbC0yLjctMC40bC0wLjktNGwtMy44LDEuM2wtMS41LDIuOWwtMi43LTAuNyBsLTMuNS0zNC4zbC00LDM0LjVsLTMuMS0xN2wtMi43LDEuN2wtMi4xLTUuMmwtMy4xLDUuMWwtMi40LTEuMWwtMS4zLDEyLjFsLTMuMSw1Ljd2MTYuMWwtMi40LDAuNHYtOS43bC0yLjctMC4ydi0xMC44bC0yLjctMC41IGwtMi40LTI1LjhsLTEuNi00LjRsLTIuOSwwLjJsLTEuNS0zLjdoLTIuNmwtMS45LTQuOWwtMC41LDMuM2wtMS40LTEuOWwtMi4yLDEuMWwtMSwxOS41bC0zLjEsMTYuMWwtMS42LTE2LjFsLTEuNSwyLjJsLTIsNDAuNyB2LTUuMWwtMS4zLDAuN2wtMi40LTYuNGwtMi42LTcuOWwtMi45LDAuMmwtMS41LDE1bC0xLjMtNC42bC0zLjgtNC42di0xMy4xaC00bC0wLjYtMTMuMWwtMS44LTQuMWwtMy4yLTAuM2wtMS4xLTEzLjdsLTIuMiwxLjUgbC0yLjYsMTIuM2wtMi42LTAuNWwtMS43LTcuOGwtMS40LTEuNmwtMi42LDkuM2wtMS40LTMuMWwtMS4zLDMuMWwtMS45LDAuMmwtMC42LTEwLjJoLTIuNmwtMSwzLjdsLTEuNi0zLjZsLTIuNiwwLjFsLTQuMiw2LjggbC0xLjgtMy41bC0xLjUsMTMuMmwtMS4zLTkuOGwtMS44LDMuN2wtMS4yLTMuN2wtMC45LTYuNWgtMmwtMy40LTI4LjFsLTIuNCwzLjdsLTEuMi0zLjRsLTIuOCwyNGwtNC42LTI0LjRoLTAuOWwtMS45LDMuNyBsLTEuMy0yLjZsLTMsMy4xbC0xLjYtMy4ybC0wLjcsMi41aC0zLjdsLTAuNy02LjJsLTIsNi4ybC0yLjItMi44bC0yLjEtMi4zbC0yLjMtNi4zTDE0MC4yLDUxMnogTTI4Ni4zLDMzMC45aC00VjM0NGwtMy44LDQuNiBsLTEuMyw0LjZsLTEuNS0xNWwtMi45LTAuMmwtMi42LDcuOWwtMi40LDYuNGwtMS4zLTAuN3Y1LjFsLTItNDAuN2wtMS41LTIuMmwtMS42LDE2LjFsLTMuMS0xNi4xbC0xLjEsNi42bC0xLjItMzAuNmwtMS42LDIuOCBsLTEuMy0wLjlsLTEuOSw0LjloLTIuNmwtMS41LDMuN2wtMi45LTAuMmwtMS42LDQuNGwtMi40LDI1LjhsLTIuNywwLjV2MTAuOGwtMi43LDAuMnY5LjdsLTIuNC0wLjRWMzM1bC0zLjEtNS43bC0xLjMtMTIuMSBsLTIuNCwxLjFsLTMuMS01LjFsLTIuMSw1LjJsLTIuNy0xLjdsLTMuMSwxN2wtNC0zNC41bC0zLjUsMzQuM2wtMi43LDAuN2wtMS41LTIuOWwtMy44LTEuM2wtMC45LDRsLTIuNywwLjRsLTEuNiw3LjFsLTIuNiwxMi42IGwtNC02LjJsLTAuOS0xMy4ybC0xLjYsMi43bC0xLjEtMy43aC0yLjR2NC4ySDE3OGwtMy43LDMuN2wtMS4xLTYuOWwtMi43LTcuN2wtMS42LDRsLTEuNS0xNC4ybC0yLjIsMTQuNmwtMy44LTAuNGwtMS4xLTE2LjggbC0xLjgsMTYuNGwtMC45LTUuOGwtMi42LDIuOWwtMS44LTEzLjNsLTEuNiwxNi4xbC0yLjktMTguNGwtMy44LTE1LjJsLTIuMiw3LjFsLTAuOS0yNC44bC0yLjctMC4ybC0yLjItMy41bC0wLjksNGwtMS41LTMuOCBsLTIuNy0wLjV2LTIuN2wtMy4zLTAuMmwtMi42LDE3LjVIMTIybC0xLjYsMTIuNGwtMi42LTIxLjZsLTMuMS0xLjFsLTIuNC03LjdsLTIuNiw4bC0xLjgtNi45bC0xLjEsNi40bC0yLjItMC43di0yLjlsLTIuNCwzLjUgbC00LjYsMC4yTDkyLjcsMjk4bC0xLjEsNS4xbC00LDAuNGwtMi43LTIuOWwtMS44LDIuNGwtMi42LTcuMWwtMS4xLTE0LjZsLTItMS44bC0yLjYsMy4xbC0xLjYsMy43bC0xLjgsNi44bC0xLjgtMy4zTDY4LDMwOS45IGwtMi05LjFsLTMuNSw5LjNsLTIuNi0zLjFsLTUuOCw2LjZsLTMuMy0zMC4zbC0yLjItMy43TDQ2LDMwNS40bC0xLjYtMC4ybC0xLjMsMTNsLTIuOS00LjRsLTIuOSwyLjJsLTEuOS0xLjd2MTIuOWwtMi43LTEzLjQgbC0yLjcsNC45bC0xLjItMi4yTDI3LDMzNC4ybC0xLjksMy43aC0xLjVMMjAsMzcwLjVsLTEuNS0zMy42bC0yLjcsMTQuOWwtMi43LTE0LjlsLTIuMiwwLjVMOSwzNTMuNWwtMy4yLDIuMnYzLjRsLTEuOS00LjkgbC0xLjcsMC4yTDAsMzY4LjFWNTEyaDI4OUwyODYuMywzMzAuOXoiPjwvcGF0aD48L2c+PC9zdmc+)\n    center bottom repeat-x;\n  background-color: rgba(64, 90, 128, 0.5);\n  color: rgba(255, 255, 255, 0.87);\n"]);
      return rf = function () {
        return t;
      }
        ,
        t;
    }
    function of() {
      var t = Object(r.a)(["\n  display: block;\n  width: 220px;\n  margin: 0 auto;\n  font-size: 14px;\n  line-height: 1.43;\n  letter-spacing: -0.08px;\n  text-align: center;\n\n  div {\n    display: block;\n    color: #9fabbd;\n  }\n  span {\n    display: block;\n    color: #ffffff;\n  }\n"]);
      return of = function () {
        return t;
      }
        ,
        t;
    }
    function af() {
      var t = Object(r.a)(["\n  display: flex;\n  flex: 1 1 auto;\n\n  height: 16px;\n  line-height: 16px;\n\n  margin-top: 4px;\n  margin-bottom: 4px;\n  font-size: 14px;\n  font-weight: bold;\n  letter-spacing: -0.23px;\n\n  color: #ffffff;\n"]);
      return af = function () {
        return t;
      }
        ,
        t;
    }
    function cf() {
      var t = Object(r.a)(["\n  display: flex;\n  flex-direction: row;\n\n  height: 24px;\n  line-height: 24px;\n  margin: 15px auto 15px;\n  text-align: center;\n\n  div {\n    display: flex;\n    flex: 1 1 auto;\n    justify-content: flex-end;\n    margin-right: 10px;\n  }\n"]);
      return cf = function () {
        return t;
      }
        ,
        t;
    }
    function lf() {
      var t = Object(r.a)(["\n  position: absolute;\n  display: block;\n  top: calc(50% - 75px);\n  left: calc(50% - 130px);\n\n  width: 260px;\n  height: 154px;\n  padding: 20px;\n\n  box-shadow: 0 2px 10px 0 rgba(20, 31, 44, 0.8);\n  background-color: #1d2834;\n\n  h2 {\n    display: block;\n    height: 20px;\n    line-height: 20px;\n    margin: 0 auto;\n    font-size: 15px;\n    font-weight: bold;\n    letter-spacing: -0.09px;\n    text-align: center;\n\n    color: #ffffff;\n  }\n"]);
      return lf = function () {
        return t;
      }
        ,
        t;
    }
    function uf() {
      var t = Object(r.a)(["\n  flex: 1 1 auto;\n  position: relative;\n"]);
      return uf = function () {
        return t;
      }
        ,
        t;
    }
    var sf = c.c.div(uf())
      , df = c.c.div(lf())
      , pf = c.c.div(cf())
      , ff = c.c.span(af())
      , mf = c.c.div(of())
      , bf = c.c.div(rf())
      , hf = Object(i.c)((function (t) {
        return {
          instrument: Object(si.h)(t)
        };
      }
      ))((function (t) {
        var e = t.instrument
          , n = e.tradingHours[0].opensAt;
        return a.a.createElement(sf, null, a.a.createElement(bf, null), a.a.createElement(df, null, a.a.createElement("h2", null, Object(T.t)(nf())), a.a.createElement(pf, null, a.a.createElement("div", null, a.a.createElement("img", {
          className: "asset_icon_big",
          width: "24",
          height: "24",
          alt: "instrument icon",
          src: "".concat("", "/static/icons/instruments/").concat(e.instrumentID, ".svg")
        })), a.a.createElement(ff, {
          className: "instrument-name"
        }, e.name)), a.a.createElement(mf, null, a.a.createElement("div", null, Object(T.t)(ef()), ":"), a.a.createElement("span", null, dc.a.format(n, "do MMM yyyy, HH:mm")))));
      }
      ))
      , gf = n(422);
    function vf() {
      var t = Object(r.a)(["\n            padding-top: 80px;\n            height: calc(100% - 80px);\n          "]);
      return vf = function () {
        return t;
      }
        ,
        t;
    }
    function xf() {
      var t = Object(r.a)(["\n                    @media (orientation: landscape) {\n                      height: calc(\n                        ", "px -\n                          ", "px\n                      );\n                    }\n                  "]);
      return xf = function () {
        return t;
      }
        ,
        t;
    }
    function Of() {
      var t = Object(r.a)(["\n              height: calc(\n                ", "px -\n                  ", "px\n              );\n              ", "\n            "]);
      return Of = function () {
        return t;
      }
        ,
        t;
    }
    function yf() {
      var t = Object(r.a)(["\n                    @media (orientation: landscape) {\n                      height: calc(\n                        ", "px -\n                          ", "px\n                      );\n                    }\n                  "]);
      return yf = function () {
        return t;
      }
        ,
        t;
    }
    function jf() {
      var t = Object(r.a)(["\n              height: 250px;\n              ", "\n            "]);
      return jf = function () {
        return t;
      }
        ,
        t;
    }
    function Ef() {
      var t = Object(r.a)([""]);
      return Ef = function () {
        return t;
      }
        ,
        t;
    }
    function wf() {
      var t = Object(r.a)(["\n                  @media (orientation: landscape) {\n                    height: calc(\n                      ", "px -\n                        ", "px\n                    );\n                  }\n                "]);
      return wf = function () {
        return t;
      }
        ,
        t;
    }
    function Cf() {
      var t = Object(r.a)(["\n            height: calc(\n              ", "px -\n                ", "px\n            );\n            ", "\n          "]);
      return Cf = function () {
        return t;
      }
        ,
        t;
    }
    function kf() {
      var t = Object(r.a)(["\n                  @media (orientation: landscape) {\n                    height: calc(\n                      ", "px -\n                        ", "px\n                    );\n                  }\n                "]);
      return kf = function () {
        return t;
      }
        ,
        t;
    }
    function Tf() {
      var t = Object(r.a)(["\n            height: 250px;\n            ", "\n          "]);
      return Tf = function () {
        return t;
      }
        ,
        t;
    }
    function Mf() {
      var t = Object(r.a)(["\n  flex: 1 1 auto;\n  display: flex;\n  ", "\n  #chart-container {\n    ", "\n  }\n"]);
      return Mf = function () {
        return t;
      }
        ,
        t;
    }
    function Sf() {
      var t = Object(r.a)([""]);
      return Sf = function () {
        return t;
      }
        ,
        t;
    }
    function Lf() {
      var t = Object(r.a)(["\n          @media (orientation: landscape) {\n            background-color: #141f2c !important;\n          }\n        "]);
      return Lf = function () {
        return t;
      }
        ,
        t;
    }
    function If() {
      var t = Object(r.a)([""]);
      return If = function () {
        return t;
      }
        ,
        t;
    }
    function _f() {
      var t = Object(r.a)(["\n          background-color: ", ";\n        "]);
      return _f = function () {
        return t;
      }
        ,
        t;
    }
    function Pf() {
      var t = Object(r.a)(["\n  position: relative;\n  flex: 1 1 auto;\n  display: flex;\n  flex-direction: ", ";\n  width: ", ";\n  ", "\n  ", "\n"]);
      return Pf = function () {
        return t;
      }
        ,
        t;
    }
    var Af = a.a.createContext({})
      , zf = c.c.div(Pf(), (function (t) {
        return t.isMobile ? "column" : "row";
      }
      ), (function (t) {
        return t.isMobile ? "100vw" : "calc(100vw - 372px)";
      }
      ), (function (t) {
        return t.isMobile ? Object(c.b)(_f(), t.colors.tradebox.widgetBackground) : Object(c.b)(If());
      }
      ), (function (t) {
        return t.isMobile && Object(Vn.a)(t.isMobile) ? Object(c.b)(Lf()) : Object(c.b)(Sf());
      }
      ))
      , Nf = c.c.div(Mf(), (function (t) {
        return t.isMobile ? window.innerHeight < 660 ? Object(c.b)(Tf(), Object(Vn.a)(t.isMobile) ? Object(c.b)(kf(), window.innerHeight, (function (t) {
          return t.loggedIn ? 142 : 98;
        }
        )) : "") : Object(c.b)(Cf(), window.innerHeight, (function (t) {
          return t.loggedIn ? 450 : 400;
        }
        ), Object(Vn.a)(t.isMobile) ? Object(c.b)(wf(), window.innerHeight, (function (t) {
          return t.loggedIn ? 142 : 98;
        }
        )) : "") : Object(c.b)(Ef());
      }
      ), (function (t) {
        return t.isMobile ? window.innerHeight < 660 ? Object(c.b)(jf(), Object(Vn.a)(t.isMobile) ? Object(c.b)(yf(), window.innerHeight, (function (t) {
          return t.loggedIn ? 142 : 98;
        }
        )) : "") : Object(c.b)(Of(), window.innerHeight, (function (t) {
          return t.loggedIn ? 450 : 410;
        }
        ), Object(Vn.a)(t.isMobile) ? Object(c.b)(xf(), window.innerHeight, (function (t) {
          return t.loggedIn ? 142 : 98;
        }
        )) : "") : Object(c.b)(vf());
      }
      ))
      , Df = null
      , Rf = function (t) {
        Object(b.a)(n, t);
        var e = Object(h.a)(n);
        function n(t) {
          var r;
          Object(f.a)(this, n),
            (r = e.call(this, t)).chartInstance = void 0,
            r.chartSeries = void 0,
            r.tooltipChart = void 0,
            r.eventEmitter = void 0,
            r.getMinMove = function () {
              for (var t = r.props.instrumentObject.precision, e = "", n = 0; n < t; n++)
                e = "".concat(e, "0");
              return Number(e.slice(0, 1) + "." + e.slice(1) + "1");
            }
            ,
            r.setChartData = function (t) {
              r.chartSeries.setData(t);
              var e = r.props.instrumentObject.precision
                , n = r.getMinMove();
              r.chartSeries.applyOptions({
                priceFormat: {
                  type: "price",
                  precision: e,
                  minMove: n
                }
              });
            }
            ,
            r.createChartSeries = function (t) {
              switch (r.chartInstance && r.chartSeries && r.chartInstance.removeSeries(r.chartSeries),
              t) {
                case "candlestick":
                  r.chartSeries = r.chartInstance.addCandlestickSeries({
                    upColor: r.props.theme.chart.plotOptions.candlestick.upColor,
                    wickUpColor: r.props.theme.chart.plotOptions.candlestick.upColor,
                    downColor: r.props.theme.chart.plotOptions.candlestick.color,
                    wickDownColor: r.props.theme.chart.plotOptions.candlestick.color,
                    borderVisible: !1
                  }),
                    r.state.candles[0].close && r.setChartData(r.state.candles);
                  break;
                case "line":
                  r.chartSeries = r.chartInstance.addLineSeries({
                    color: r.props.theme.chart.priceLine.color
                  }),
                    r.setChartData(r.state.candles);
                  break;
                case "ohlc":
                  r.chartSeries = r.chartInstance.addBarSeries({
                    upColor: r.props.theme.chart.plotOptions.ohlc.color,
                    downColor: r.props.theme.chart.plotOptions.ohlc.color
                  }),
                    r.state.candles[0].close && r.setChartData(r.state.candles);
                  break;
                default:
                  r.chartSeries = r.chartInstance.addAreaSeries({
                    topColor: r.props.theme.chart.plotOptions.area.linearGradientUp,
                    bottomColor: r.props.theme.chart.plotOptions.area.linearGradientDown,
                    lineColor: r.props.theme.chart.plotOptions.area.color,
                    lineWidth: 2
                  }),
                    r.setChartData(r.state.candles);
              }
              r.onRenderTrades();
            }
            ,
            r.createOrUpdateChart = function () {
              var t, e;
              r.chartInstance ? r.setChartData(r.state.candles) : (r.chartInstance = (r.state.candles,
                Object(m.a)(r),
                r.props.chartConfig,
                e = r.props.theme.chart,
                r.props.isMobile,
                Object(gf.a)("chart-container", {
                  layout: {
                    backgroundColor: "transparent",
                    textColor: e.tooltip.color
                  },
                  rightPriceScale: {
                    borderColor: e.tooltip.backgroundColor
                  },
                  timeScale: {
                    borderColor: e.tooltip.backgroundColor,
                    timeVisible: !0,
                    secondsVisible: !0
                  },
                  grid: {
                    vertLines: {
                      color: e.yAxis.gridLineColor
                    },
                    horzLines: {
                      color: e.xAxis.gridLineColor
                    }
                  },
                  localization: {
                    dateFormat: "dd/MM/yyyy"
                  }
                })),
                r.createChartSeries(r.state.chartType),
                null === (t = r.chartInstance) || void 0 === t || t.subscribeClick((function (t) {
                  if (t.hoveredMarkerId) {
                    var e = r.props.openTrades.find((function (e) {
                      return e.tradeID === t.hoveredMarkerId;
                    }
                    ));
                    r.setState({
                      clickedTrade: e,
                      clickedTradeX: t.point.x + 50,
                      clickedTradeY: t.point.y - 20
                    });
                  }
                }
                )));
              r.setState({
                loading: !1
              });
            }
            ,
            r.addIndicator = function (t) { }
            ,
            r.removeIndicator = function (t) { }
            ,
            r.updateIndicator = function (t, e) { }
            ,
            r.getIndicatorVisibility = function (t) {
              return !1;
            }
            ,
            r.toggleIndicator = function (t) { }
            ,
            r.removeAllAnnotations = function () { }
            ,
            r.onChangeChart = function () {
              r.props.actionChangeChartType(ec(r.props.chartLibraryConfig, r.props.currentChartType));
            }
            ,
            r.timeToLocal = function (t) {
              var e = new Date(t);
              return Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()) / 1e3;
            }
            ,
            r.createSeriesData = function (t) {
              return "tick" === r.state.timeframe.period ? Object(_n.chain)(t).sortBy((function (t) {
                return t[0];
              }
              )).map((function (t) {
                return {
                  time: r.timeToLocal(t[0]),
                  value: t[1]
                };
              }
              )).value() : Object(_n.chain)(t).sortBy((function (t) {
                return t.timestamp;
              }
              )).map((function (t) {
                return {
                  time: r.timeToLocal(t.timestamp),
                  open: t.open,
                  high: t.high,
                  low: t.low,
                  close: t.close,
                  value: t.close
                };
              }
              )).value();
            }
            ,
            r.onFetchCandles = Object(p.a)(d.a.mark((function t() {
              var e, n, o, a, i;
              return d.a.wrap((function (t) {
                for (; ;)
                  switch (t.prev = t.next) {
                    case 0:
                      return Df && Df.cancel("Operation canceled due to new request."),
                        e = y.a.CancelToken,
                        Df = e.source(),
                        n = r.state.timeframe.period,
                        t.next = 6,
                        k.a.chartHistory(r.props.instrument, n, 1e3, Df);
                    case 6:
                      (o = t.sent) ? (a = r.createSeriesData(o.aggs),
                        i = a[a.length - 1],
                        r.setState({
                          candles: a,
                          lastPrice: i[1]
                        }, (function () {
                          r.createOrUpdateChart();
                        }
                        )),
                        Df = null) : (r.setState({
                          error: !0
                        }),
                          Df = null);
                    case 8:
                    case "end":
                      return t.stop();
                  }
              }
              ), t);
            }
            ))),
            r.getAnnotations = function () { }
            ,
            r.calculateAnnotations = function () { }
            ,
            r.toggleAnnotation = function (t) { }
            ,
            r.onChangeZoomLevel = function (t) { }
            ,
            r.onFullScreen = function () { }
            ,
            r.onToggleNavigator = function () { }
            ,
            r.onChangeTimeframe = function (t) {
              var e = r.state
                , n = e.indicators
                , o = e.timeframe
                , a = "tick" === t.period;
              o.period !== t.period && r.setState({
                timeframe: t,
                indicators: a ? [] : n
              }, Object(p.a)(d.a.mark((function t() {
                return d.a.wrap((function (t) {
                  for (; ;)
                    switch (t.prev = t.next) {
                      case 0:
                        return t.next = 3,
                          r.onFetchCandles();
                      case 3:
                      case "end":
                        return t.stop();
                    }
                }
                ), t);
              }
              ))));
            }
            ,
            r.changeChartLastQuote = function (t) {
              var e = r.state
                , n = e.timeframe
                , o = e.chartType
                , a = e.expiry
                , i = n.chartPeriod
                , c = n.candleStickPeriod
                , l = "candlestick" === o ? 6e4 * c : 4e3 * i
                , u = t.timestamp
                , s = t.open
                , d = t.high
                , p = t.low
                , f = t.last
                , m = {
                  time: r.timeToLocal(Math.floor(u / l) * l),
                  open: s,
                  high: d,
                  low: p,
                  close: f,
                  value: f
                }
                , b = Object(_n.last)(r.state.candles);
              if (b) {
                r.timeToLocal(u) - b.time >= l ? r.setState({
                  candles: [].concat(Object(g.a)(r.state.candles), [m]),
                  lastPrice: m.close
                }) : r.setState({
                  candles: [].concat(Object(g.a)(Object(_n.dropRight)(r.state.candles, 1)), [m]),
                  lastPrice: m.close
                });
                try {
                  var h;
                  null === (h = r.chartSeries) || void 0 === h || h.update(m);
                } catch (v) { }
              }
              !r.props.isCfdOptions && m.time >= r.timeToLocal(a) && r.props.actionDeselectExpiry();
            }
            ,
            r.onRenderTrades = function () {
              var t, e = r.props, n = e.openTrades, o = (e.instrument,
                Object(_n.chain)(Object(g.a)(n.map((function (t) {
                  return Object(u.a)(Object(u.a)({}, t), {}, {
                    isClosed: !1
                  });
                }
                )))).filter((function (t) {
                  return r.props.isCfdOptions ? !!t.optionValue : !t.optionValue;
                }
                )).map((function (t) {
                  var e = Object(Ps.b)(w.b.getState())(t.stake, t.currency);
                  return Object(u.a)(Object(u.a)({}, t), {}, {
                    id: t.tradeID,
                    time: r.timeToLocal(t.createdTimestamp),
                    position: 1 === t.direction ? "belowBar" : "aboveBar",
                    color: 1 === t.direction ? r.props.theme.chart.plotOptions.candlestick.upColor : r.props.theme.chart.plotOptions.candlestick.color,
                    text: e,
                    shape: 1 === t.direction ? "arrowUp" : "arrowDown"
                  });
                }
                )).value());
              null === (t = r.chartSeries) || void 0 === t || t.setMarkers(o);
            }
            ,
            r.onChartOrientation = function () {
              window.location.reload();
            }
            ,
            r.onChartResize = function () { }
            ,
            r.changeChartType = function (t) {
              r.chartInstance && (r.createChartSeries(t),
                fa.a.setChartType(t));
            }
            ,
            r.onChangeChartType = function (t) {
              r.setState({
                chartType: t
              }, (function () {
                r.changeChartType(t);
              }
              ));
            }
            ,
            r.addTooltip = function () {
              var t = document.getElementById("chart-container");
              document.getElementsByClassName("floating-tooltip-lightweight").length > 0 || (r.tooltipChart = document.createElement("div"),
                r.tooltipChart.className = "floating-tooltip-lightweight",
                null === t || void 0 === t || t.appendChild(r.tooltipChart));
            }
            ,
            r.componentDidMount = Object(p.a)(d.a.mark((function t() {
              return d.a.wrap((function (t) {
                for (; ;)
                  switch (t.prev = t.next) {
                    case 0:
                      r.addTooltip(),
                        r.props.instrument && r.onFetchCandles(),
                        window.addEventListener("resize", r.onChartResize),
                        "onorientationchange" in window && window.addEventListener("orientationchange", r.onChartOrientation),
                        r.eventEmitter = Jd.a.addListener("positionOpened", (function (t) { }
                        ));
                    case 5:
                    case "end":
                      return t.stop();
                  }
              }
              ), t);
            }
            ))),
            r.componentWillUnmount = function () {
              var t;
              window.removeEventListener("resize", r.onChartResize),
                "onorientationchange" in window && window.removeEventListener("orientationchange", r.onChartOrientation),
                null === (t = r.eventEmitter) || void 0 === t || t.removeListener("positionOpened", (function () { }
                ));
            }
            ,
            r.componentDidUpdate = function (t) {
              t.instrument !== r.props.instrument && r.setState({
                loading: !0
              }, r.onFetchCandles),
                Object(_n.isEqual)(t.lastQuote, r.props.lastQuote) || r.changeChartLastQuote(r.props.lastQuote),
                t.openTrades === r.props.openTrades && t.closedTrades === r.props.closedTrades && t.isCfdOptions === r.props.isCfdOptions || r.onRenderTrades();
            }
            ,
            r.render = function () {
              var t = r.state
                , e = t.clickedTrade
                , n = t.clickedTradeX
                , o = t.clickedTradeY
                , i = !r.state.loading && !r.state.error
                , c = i ? "visible" : "hidden"
                , l = !r.props.isMobile
                , u = function () {
                  r.setState({
                    clickedTrade: null,
                    clickedTradeX: null,
                    clickedTradeY: null
                  });
                }
                , s = {
                  getIndicatorVisibility: r.getIndicatorVisibility
                }
                , d = ["candlestick", "ohlc"].includes(r.state.chartType) || r.props.isCfdOptions ? Wu.filter((function (t) {
                  return t.supportedOnCandleChartType;
                }
                )) : Wu.filter((function (t) {
                  return t.supportedOnLineChartType;
                }
                ));
              return a.a.createElement(Af.Provider, {
                value: s
              }, a.a.createElement(zf, {
                isMobile: r.props.isMobile,
                colors: r.props.theme
              }, !l && a.a.createElement(a.a.Fragment, null, a.a.createElement(Xd, {
                chartType: r.state.chartType,
                timeframe: r.state.timeframe,
                periodOptions: r.state.periodOptions,
                onChangeTimeframe: function (t) {
                  return r.onChangeTimeframe(t);
                },
                isHighCharts: r.props.currentChartType === Ui.Basic,
                onChangeChart: function () {
                  return r.onChangeChart();
                }
              }), !Object(Vn.a)(r.props.isMobile) && a.a.createElement(gt, {
                colors: r.props.theme
              }, d.map((function (t) {
                return a.a.createElement(vt, {
                  colors: r.props.theme,
                  active: r.state.timeframe.chartPeriod === t.chartPeriod,
                  onClick: function () {
                    return r.onChangeTimeframe(t);
                  }
                }, t.periodLabel);
              }
              )))), a.a.createElement(Nf, {
                loggedIn: r.props.loggedIn,
                isMobile: r.props.isMobile
              }, a.a.createElement("div", {
                id: "chart-container",
                className: "highcharts-container",
                style: {
                  visibility: c
                }
              })), l && a.a.createElement(Rl, {
                periodOptions: r.state.periodOptions,
                timeframe: r.state.timeframe,
                chartType: r.state.chartType,
                onChangeTimeframe: r.onChangeTimeframe,
                onChangeChartType: r.onChangeChartType,
                removeAllAnnotations: r.removeAllAnnotations,
                calculateAnnotations: r.calculateAnnotations,
                toggleAnnotation: r.toggleAnnotation,
                indicators: r.state.indicators
              }), r.state.loading && a.a.createElement(Uu.a, {
                zIndex: 40
              }), e && a.a.createElement(a.a.Fragment, null, a.a.createElement(ld, {
                trade: e,
                quote: r.props.lastQuote,
                timeleft: 5,
                x: n,
                y: Math.min(870, o),
                onClose: u
              }), a.a.createElement(Ot.a, {
                onClick: u
              })), i && a.a.createElement(a.a.Fragment, null, a.a.createElement(gu, {
                onChangeTimeframe: r.onChangeTimeframe,
                onChangeChartType: r.onChangeChartType,
                periodOptions: r.state.periodOptions,
                chartType: r.state.chartType,
                timeframe: r.state.timeframe,
                indicators: r.state.indicators,
                removeAllAnnotations: r.removeAllAnnotations,
                calculateAnnotations: r.calculateAnnotations,
                toggleAnnotation: r.toggleAnnotation,
                isMobile: r.props.isMobile,
                navigator: r.state.navigator,
                zoomLevel: r.state.zoomLevel,
                onChangeZoomLevel: r.onChangeZoomLevel,
                onFullScreen: r.onFullScreen,
                onToggleNavigator: r.onToggleNavigator,
                isHighCharts: r.props.currentChartType === Ui.Basic,
                onChangeChart: function () {
                  return r.onChangeChart();
                }
              }), a.a.createElement(Ms, {
                instrument: r.props.instrument,
                navigator: r.state.navigator
              }))));
            }
            ;
          var o = fa.a.getChartType() || "area"
            , i = ["area", "line"].includes(o) ? Vu[0] : Vu[1];
          return r.state = {
            loading: !0,
            error: !1,
            ready: !1,
            navigator: !t.isMobile,
            candles: [],
            annotationsCount: 0,
            visibleAnnotations: 0,
            lastPrice: null,
            expiry: 0,
            deadPeriod: 0,
            countDownExpectedTime: 0,
            direction: null,
            indicators: [],
            clickedIndicator: null,
            clickedIndicatorX: null,
            clickedIndicatorY: null,
            clickedTrade: null,
            clickedTradeX: null,
            clickedTradeY: null,
            periodOptions: Vu,
            zoomLevels: t.isMobile ? [1.01, .95, .9, .85, .8, .75, .7, .65, .6, .55, .5, .45, .4, .35, .3, .25, 80, 60, 50, 25] : [1, .95, .9, .85, .8, .75, .7, .65, .6, .55, .5, .45, .4, .35, .3, .25, .2, .15, .1, .05],
            zoomLevel: 19,
            timeframe: i,
            chartType: o,
            isScrolling: !1
          },
            r.chartInstance = null,
            r;
        }
        return n;
      }(o.Component)
      , Ff = Object(i.c)((function (t) {
        return {
          instrument: t.trading.selected,
          instrumentObject: Object(si.h)(t),
          instrumentName: Object(si.g)(t),
          direction: t.trading.direction,
          cfdDirection: t.trading.cfdOptionsActiveDirection,
          hoveredDirection: t.trading.hoveredDirection,
          lastPrice: Object(si.k)(t),
          lastQuote: Object(si.l)(t),
          openTrades: t.trades.open || [],
          closedTrades: t.trades.closed || [],
          game: t.game,
          time: t.time,
          chartConfig: t.registry.data.chartConfig,
          theme: t.theme,
          selectedExpiry: t.expiry.selected,
          selectedCfdOptionInstrument: t.trading.selectedCfdOptionInstrument,
          selectedCfdOptionExpiry: t.trading.selectedCfdOptionExpiry,
          loggedIn: Object(Ya.a)(t),
          chartLibraryConfig: t.registry.data.partnerConfig.chartLibraryConfig,
          currentChartType: t.registry.currentChartType
        };
      }
      ), {
        actionSetSidebar: ud.b,
        actionSelectExpiry: sd.d,
        actionDeselectExpiry: sd.c,
        actionSetSelectedTrade: Js.u,
        actionSelectNextExpiry: Qd.d,
        actionChangeChartType: Zi.h
      })(Rf);
    function Bf() {
      var t = Object(r.a)(["\n  background-color: ", ";\n  border-right: 1px solid ", ";\n  border-bottom: 1px solid ", ";\n\n  display: flex;\n  flex-direction: column;\n  //width: calc(100vw - 372px);\n  position: relative;\n"]);
      return Bf = function () {
        return t;
      }
        ,
        t;
    }
    function Hf() {
      var t = Object(r.a)([""]);
      return Hf = function () {
        return t;
      }
        ,
        t;
    }
    function Vf() {
      var t = Object(r.a)(["\n                  @media (orientation: landscape) {\n                    height: calc(\n                      ", "px -\n                        ", "px\n                    );\n                  }\n                "]);
      return Vf = function () {
        return t;
      }
        ,
        t;
    }
    function Wf() {
      var t = Object(r.a)(["\n            height: calc(\n              ", "px -\n                ", "px\n            );\n            ", "\n          "]);
      return Wf = function () {
        return t;
      }
        ,
        t;
    }
    function Uf() {
      var t = Object(r.a)(["\n                  @media (orientation: landscape) {\n                    height: calc(\n                      ", "px -\n                        ", "px\n                    );\n                  }\n                "]);
      return Uf = function () {
        return t;
      }
        ,
        t;
    }
    function Gf() {
      var t = Object(r.a)(["\n            height: 332px;\n            ", "\n          "]);
      return Gf = function () {
        return t;
      }
        ,
        t;
    }
    function Yf() {
      var t = Object(r.a)(["\n  flex: 1 1 auto;\n  display: flex;\n  position: relative;\n  ", "\n"]);
      return Yf = function () {
        return t;
      }
        ,
        t;
    }
    var qf = c.c.section(Yf(), (function (t) {
      return t.isMobile ? window.innerHeight < 660 ? Object(c.b)(Gf(), Object(Vn.a)(t.isMobile) ? Object(c.b)(Uf(), window.innerHeight, (function (t) {
        return t.loggedIn ? 90 : 44;
      }
      )) : "") : Object(c.b)(Wf(), window.innerHeight, (function (t) {
        return t.loggedIn ? 355 : 325;
      }
      ), Object(Vn.a)(t.isMobile) ? Object(c.b)(Vf(), window.innerHeight, (function (t) {
        return t.loggedIn ? 90 : 44;
      }
      )) : "") : Object(c.b)(Hf());
    }
    ))
      , Zf = c.c.div(Bf(), (function (t) {
        return t.colors.panelBackground;
      }
      ), (function (t) {
        return t.colors.panelBorder;
      }
      ), (function (t) {
        return t.colors.panelBorder;
      }
      ));
    e.a = Object(i.c)((function (t) {
      return {
        isCfdOptions: Object(mi.b)(t),
        inTradingHours: t.trading.inTradingHours,
        colors: t.theme,
        loggedIn: Object(Ya.a)(t),
        chartLibraryConfig: t.registry.data.partnerConfig.chartLibraryConfig,
        currentChartType: t.registry.currentChartType
      };
    }
    ))((function (t) {
      return t.isMobile ? a.a.createElement(a.a.Fragment, null, a.a.createElement(qf, {
        loggedIn: t.loggedIn,
        isMobile: t.isMobile
      }, t.inTradingHours ? a.a.createElement(a.a.Fragment, null, t.currentChartType === Ui.Basic && a.a.createElement(tf, {
        isMobile: t.isMobile,
        isCfdOptions: t.isCfdOptions
      }), t.currentChartType === Ui.LightWeight && a.a.createElement(Ff, {
        isCfdOptions: t.isCfdOptions,
        isMobile: t.isMobile
      }), t.currentChartType === Ui.TradingView && a.a.createElement(fp, {
        isCfdOptions: t.isCfdOptions,
        isMobile: t.isMobile
      })) : a.a.createElement(zp, {
        isMobile: t.isMobile,
        colors: t.colors
      }, a.a.createElement(Xd, null), a.a.createElement(hf, null)))) : a.a.createElement(Zf, {
        colors: t.colors,
        isCfdOptions: t.isCfdOptions
      }, t.inTradingHours ? a.a.createElement(a.a.Fragment, null, t.currentChartType === Ui.Basic && a.a.createElement(tf, {
        isMobile: t.isMobile,
        isCfdOptions: t.isCfdOptions
      }), t.currentChartType === Ui.LightWeight && a.a.createElement(Ff, {
        isCfdOptions: t.isCfdOptions,
        isMobile: t.isMobile
      }), t.currentChartType === Ui.TradingView && a.a.createElement(fp, {
        isCfdOptions: t.isCfdOptions,
        isMobile: t.isMobile
      })) : a.a.createElement(hf, null));
    }
    ));
  },
  329: function (t, e, n) {
    "use strict";
    var r = n(89)
      , o = n(1)
      , a = n.n(o)
      , i = n(12)
      , c = n(2)
      , l = n.n(c)
      , u = n(33)
      , s = n(58)
      , d = n(88);
    function p() {
      var t = Object(s.a)(["\n\tdisplay: grid;\n\tgrid-template-columns: ", ";\n\tgrid-template-rows: ", ";\n\tcolumn-gap: 10px;\n\trow-gap: 10px;\n\tposition: relative;\n\n\t", ";\n\n\toverflow: auto;\n\twidth: 100%;\n\tpadding: ", ";\n\t", ";\n\tbackground-color: ", ";\n"]);
      return p = function () {
        return t;
      }
        ,
        t;
    }
    function f() {
      var t = Object(s.a)(["\n\tfont-style: normal;\n\tfont-weight: 500;\n\tfont-size: 22px;\n\tline-height: 26px;\n\ttext-transform: uppercase;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\twhite-space: nowrap;\n\tcolor: ", ";\n"]);
      return f = function () {
        return t;
      }
        ,
        t;
    }
    function m() {
      var t = Object(s.a)(["\n\tfont-style: normal;\n\tfont-weight: bold;\n\tfont-size: 14px;\n\tline-height: 16px;\n\tletter-spacing: -0.233333px;\n\ttext-transform: uppercase;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\twhite-space: nowrap;\n\tcolor: ", ";\n"]);
      return m = function () {
        return t;
      }
        ,
        t;
    }
    function b() {
      var t = Object(s.a)(["\n\tcolor: ", ";\n\tbackground: none;\n\tborder: none;\n\tcursor: pointer;\n\twidth: max-content;\n\tpadding: 0 20px;\n\tjustify-self: end;\n\n\t&:hover {\n\t\ttext-decoration: underline;\n\t}\n"]);
      return b = function () {
        return t;
      }
        ,
        t;
    }
    function h() {
      var t = Object(s.a)(["\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: space-between;\n\tpadding: 15px 20px;\n\tcolor: ", ";\n\tfont-style: normal;\n\tfont-weight: 500;\n\tfont-size: 16px;\n\tline-height: 19px;\n\tletter-spacing: -0.0941177px;\n\n\t", ";\n"]);
      return h = function () {
        return t;
      }
        ,
        t;
    }
    function g() {
      var t = Object(s.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground-color: ", ";\n\tborder-radius: 2px;\n\tpadding: 15px 20px;\n\toverflow: auto;\n\tjustify-content: space-between;\n"]);
      return g = function () {
        return t;
      }
        ,
        t;
    }
    var v = d.c.div(g(), (function (t) {
      return t.colors.sidebarElementActive;
    }
    ))
      , x = d.c.div(h(), (function (t) {
        return t.colors.primaryText;
      }
      ), (function (t) {
        return t.bottomBorder ? "border-bottom: 1px solid ".concat(t.colors.panelBackground) : "";
      }
      ))
      , O = d.c.button(b(), (function (t) {
        return t.colors.primary;
      }
      ))
      , y = d.c.div(m(), (function (t) {
        return t.colors.textfieldText;
      }
      ))
      , j = d.c.div(f(), (function (t) {
        return t.color;
      }
      ))
      , E = d.c.div(p(), (function (t) {
        return t.isMobile ? "repeat(auto-fit, calc(100vw - 40px))" : "1fr 1fr 1fr 1fr 1fr 1fr";
      }
      ), (function (t) {
        return t.isMobile ? "auto" : "min-content 244px 300px";
      }
      ), (function (t) {
        return t.isMobile ? "" : "grid-template-areas: 'cash cash cash bonus bonus bonus' 'topTradedAssets topTradedAssets tradeVolume tradeVolume tradeVolume tradeVolume''recentUpdates recentUpdates recentTrades recentTrades recentTrades profitableTraders'";
      }
      ), (function (t) {
        return t.isMobile ? "0 20px 20px 20px" : "20px 35px 20px 20px";
      }
      ), (function (t) {
        return t.isMobile ? "margin-top: 50px" : "";
      }
      ), (function (t) {
        return t.colors.panelBackground;
      }
      ))
      , w = n(44);
    function C() {
      var t = Object(s.a)(["\n\t", ";\n\tdisplay: grid;\n\tgrid-template-columns: ", ";\n\t", ";\n\tcolumn-gap: 2px;\n\trow-gap: 2px;\n"]);
      return C = function () {
        return t;
      }
        ,
        t;
    }
    var k = d.c.div(C(), (function (t) {
      return t.isMobile ? "" : "grid-area: cash";
    }
    ), (function (t) {
      return t.isMobile ? "1fr" : " 1fr 1fr 1fr";
    }
    ), (function (t) {
      return t.isMobile ? "grid-auto-rows: 80px 80px 80px" : "grid-auto-rows: 80px";
    }
    ))
      , T = n(262);
    function M() {
      var t = Object(s.a)(["available cash"]);
      return M = function () {
        return t;
      }
        ,
        t;
    }
    function S() {
      var t = Object(s.a)(["invested"]);
      return S = function () {
        return t;
      }
        ,
        t;
    }
    function L() {
      var t = Object(s.a)(["balance"]);
      return L = function () {
        return t;
      }
        ,
        t;
    }
    var I = Object(u.c)((function (t) {
      return {
        colors: t.theme,
        wallets: t.wallets,
        formatCurrency: Object(T.a)(t),
        isMobile: t.registry.isMobile,
        showDashboardCards: t.registry.data.partnerConfig.leftPanel.dashboard.cards
      };
    }
    ))((function (t) {
      var e = t.colors
        , n = t.wallets
        , r = t.formatCurrency
        , o = t.isMobile
        , a = t.showDashboardCards
        , i = n.availableCash + n.availableBonus;
      return l.a.createElement(k, {
        isMobile: o
      }, a.balance && l.a.createElement(v, {
        colors: e
      }, l.a.createElement(y, {
        colors: e
      }, Object(w.t)(L())), l.a.createElement(j, {
        color: e.primary
      }, r(i))), a.invested && l.a.createElement(v, {
        colors: e
      }, l.a.createElement(y, {
        colors: e
      }, Object(w.t)(S())), l.a.createElement(j, {
        color: e.primaryText
      }, r(n.reserved))), a.availableCash && l.a.createElement(v, {
        colors: e
      }, l.a.createElement(y, {
        colors: e
      }, Object(w.t)(M())), l.a.createElement(j, {
        color: e.primaryText
      }, r(n.availableCash))));
    }
    ));
    function _() {
      var t = Object(s.a)(["\n\t", ";\n\tdisplay: grid;\n\tgrid-template-columns: ", ";\n\t", ";\n\tcolumn-gap: 2px;\n\trow-gap: 2px;\n"]);
      return _ = function () {
        return t;
      }
        ,
        t;
    }
    var P = d.c.div(_(), (function (t) {
      return t.isMobile ? "" : "grid-area: bonus";
    }
    ), (function (t) {
      return t.isMobile ? "1fr" : " 1fr 1fr 1fr";
    }
    ), (function (t) {
      return t.isMobile ? "grid-auto-rows: 80px 80px 80px" : "grid-auto-rows: 80px";
    }
    ));
    function A() {
      var t = Object(s.a)(["pending bonus"]);
      return A = function () {
        return t;
      }
        ,
        t;
    }
    function z() {
      var t = Object(s.a)(["traded bonus"]);
      return z = function () {
        return t;
      }
        ,
        t;
    }
    function N() {
      var t = Object(s.a)(["total bonus received"]);
      return N = function () {
        return t;
      }
        ,
        t;
    }
    var D = Object(u.c)((function (t) {
      return {
        colors: t.theme,
        wallets: t.wallets,
        bonusWallet: t.trading.bonusWallet,
        formatCurrency: Object(T.a)(t),
        isMobile: t.registry.isMobile,
        showDashboardCards: t.registry.data.partnerConfig.leftPanel.dashboard.cards
      };
    }
    ))((function (t) {
      var e = t.colors
        , n = t.isMobile
        , r = t.wallets
        , o = t.formatCurrency
        , a = t.totalBonusReceived
        , i = t.totalTradedVolume
        , c = t.showDashboardCards
        , u = r.bonusesInfo.reduce((function (t, e) {
          var n = e.volumeTraded;
          return t + (e.volumeRequired - n);
        }
        ), 0);
      return l.a.createElement(P, {
        isMobile: n
      }, c.bonusReceived && l.a.createElement(v, {
        colors: e
      }, l.a.createElement(y, {
        colors: e
      }, Object(w.t)(N())), l.a.createElement(j, {
        color: e.primary
      }, o(a))), c.tradedBonus && l.a.createElement(v, {
        colors: e
      }, l.a.createElement(y, {
        colors: e
      }, Object(w.t)(z())), l.a.createElement(j, {
        color: e.primaryText
      }, o(i))), c.pendingBonus && l.a.createElement(v, {
        colors: e
      }, l.a.createElement(y, {
        colors: e
      }, Object(w.t)(A())), l.a.createElement(j, {
        color: e.primaryText
      }, o(u))));
    }
    ))
      , R = n(3);
    function F() {
      var t = Object(s.a)(["\n\t", ";\n\tdisplay: grid;\n\tgrid-template-columns: 1fr;\n\tgrid-template-rows: 49px 195px;\n\tborder-radius: 2px;\n\tbackground-color: ", ";\n"]);
      return F = function () {
        return t;
      }
        ,
        t;
    }
    var B = d.c.div(F(), (function (t) {
      return t.isMobile ? "" : "grid-area: topTradedAssets";
    }
    ), (function (t) {
      return t.colors.sidebarElementActive;
    }
    ))
      , H = n(285)
      , V = n.n(H)
      , W = function (t) {
        var e = t.data
          , n = Object(c.useRef)(null)
          , o = Object(c.useState)(null)
          , a = Object(r.a)(o, 2)
          , i = (a[0],
            a[1]);
        return Object(c.useEffect)((function () {
          if (n.current) {
            var t = new V.a.Chart(function (t, e) {
              return {
                chart: {
                  renderTo: t
                },
                title: {
                  text: void 0
                },
                yAxis: {
                  title: {
                    text: void 0
                  }
                },
                plotOptions: {
                  pie: {
                    shadow: !1,
                    borderColor: "#1d2834",
                    borderWidth: 2
                  }
                },
                legend: {
                  width: "40%",
                  align: "right",
                  verticalAlign: "top",
                  layout: "vertical",
                  itemMarginTop: 5,
                  itemMarginBottom: 5,
                  useHTML: !0,
                  symbolRadius: 0,
                  itemStyle: {
                    color: "#ffffff",
                    fontFamily: "Roboto, sans-serif",
                    fontWeight: "normal"
                  },
                  itemHoverStyle: {
                    color: "#646e79"
                  },
                  labelFormatter: function () {
                    var t = this.y / this.total * 100
                      , e = Math.round(10 * t) / 10;
                    return '<div style="display: flex; justify-content: space-between; width: '.concat(.1 * document.body.clientWidth - 20, 'px;">\n\t\t\t\t\t<div>').concat(this.name, '</div>\n\t\t\t\t\t<div style="color: #75f986; margin-left: 10px">').concat(e, "%</div>\n\t\t\t\t</div>");
                  }
                },
                tooltip: {
                  formatter: function () {
                    return '\n\t\t\t\t<span style="display: block; margin-right: 2px; color: '.concat(this.point.color, '">\u25cf</span>\n\t\t\t\t<span>').concat(this.point.name, '</span>: <span style="font-weight: bold">').concat(this.point.y, "</span>");
                  }
                },
                credits: {
                  enabled: !1
                },
                series: [{
                  type: "pie",
                  data: e,
                  size: "100%",
                  innerSize: "80%",
                  showInLegend: !0,
                  dataLabels: {
                    enabled: !1
                  }
                }]
              };
            }(n.current, e));
            i(t);
          }
        }
        ), [e]),
          l.a.createElement("div", {
            ref: n
          });
      };
    function U() {
      var t = Object(s.a)(["Top traded assets"]);
      return U = function () {
        return t;
      }
        ,
        t;
    }
    function G() {
      var t = Object(s.a)(["Other"]);
      return G = function () {
        return t;
      }
        ,
        t;
    }
    var Y = Object(u.c)((function (t) {
      return {
        colors: t.theme,
        isMobile: t.registry.isMobile,
        instruments: Object.values(t.instruments)
      };
    }
    ))((function (t) {
      var e = t.colors
        , n = t.isMobile
        , o = t.trades
        , a = t.instruments
        , i = Object(c.useState)(null)
        , u = Object(r.a)(i, 2)
        , s = u[0]
        , d = u[1];
      return Object(c.useEffect)((function () {
        var t = Object.entries(o.closedTrades).map((function (t) {
          var e, n = Object(r.a)(t, 2), o = n[0], i = n[1];
          return {
            name: null === (e = a.find((function (t) {
              return t.instrumentID === o;
            }
            ))) || void 0 === e ? void 0 : e.name,
            y: i.highCount + i.lowCount
          };
        }
        ), []).sort((function (t, e) {
          return e.y - t.y;
        }
        ))
          , e = t.splice(0, 5)
          , n = t.reduce((function (t, e) {
            return Object(R.a)(Object(R.a)({}, t), {}, {
              y: t.y + e.y
            });
          }
          ), {
            name: Object(w.t)(G()),
            y: 0
          });
        0 !== n.y && e.push(n),
          d(e);
      }
      ), [o]),
        l.a.createElement(B, {
          colors: e,
          isMobile: n
        }, l.a.createElement(x, {
          colors: e
        }, Object(w.t)(U())), l.a.createElement(W, {
          data: s
        }));
    }
    ));
    function q() {
      var t = Object(s.a)(["\n\tgrid-area: tradeVolumeChart;\n\tdisplay: grid;\n\tgrid-template-columns: 1fr;\n\tgrid-template-rows: 49px 195px;\n\tborder-radius: 2px;\n\tbackground-color: ", ";\n"]);
      return q = function () {
        return t;
      }
        ,
        t;
    }
    function Z() {
      var t = Object(s.a)(["\n\tgrid-area: tradeVolumeInfo;\n\tdisplay: grid;\n\tgrid-template-columns: 1fr;\n\tgrid-auto-rows: 80px;\n\trow-gap: 2px;\n"]);
      return Z = function () {
        return t;
      }
        ,
        t;
    }
    function X() {
      var t = Object(s.a)(["\n\t", ";\n\tdisplay: grid;\n\tgrid-template-columns: ", ";\n\tgrid-template-rows: ", ";\n\tcolumn-gap: 2px;\n\trow-gap: 2px;\n\tgrid-template-areas: ", ";\n"]);
      return X = function () {
        return t;
      }
        ,
        t;
    }
    var Q = d.c.div(X(), (function (t) {
      return t.isMobile ? "" : "grid-area: tradeVolume";
    }
    ), (function (t) {
      return t.isMobile ? "1fr" : " 1fr 1fr 1fr 1fr";
    }
    ), (function (t) {
      return t.isMobile ? "auto auto" : "244px";
    }
    ), (function (t) {
      return t.isMobile ? "'tradeVolumeChart' 'tradeVolumeInfo'" : "'tradeVolumeChart tradeVolumeChart tradeVolumeChart tradeVolumeInfo'";
    }
    ))
      , J = d.c.div(Z())
      , K = d.c.div(q(), (function (t) {
        return t.colors.sidebarElementActive;
      }
      ))
      , $ = function (t) {
        var e = t.data
          , n = t.currencySymbol
          , o = Object(c.useRef)(null)
          , a = Object(c.useState)(null)
          , i = Object(r.a)(a, 2)
          , u = (i[0],
            i[1]);
        return Object(c.useEffect)((function () {
          if (o.current) {
            var t = new V.a.Chart(function (t, e, n) {
              return {
                chart: {
                  renderTo: t
                },
                title: {
                  text: void 0
                },
                yAxis: {
                  title: {
                    text: void 0
                  },
                  labels: {
                    format: "".concat(n, " {value:,.0f}"),
                    style: {
                      fontFamily: "Roboto, sans-serif",
                      fontWeight: "normal",
                      fontSize: "9px"
                    }
                  },
                  tickColor: "#263346",
                  gridLineColor: "#263346"
                },
                xAxis: {
                  tickColor: "#263346",
                  lineColor: "#263346",
                  labels: {
                    style: {
                      fontFamily: "Roboto, sans-serif",
                      fontWeight: "normal",
                      fontSize: "9px"
                    }
                  },
                  type: "datetime",
                  tickInterval: 864e5
                },
                tooltip: {
                  formatter: function () {
                    return '\n\t\t\t\t<span style="display: block; margin-right: 2px; color: '.concat(this.point.color, '">\u25cf</span>\n\t\t\t\t<span>').concat(this.point.name, '</span>: <span style="font-weight: bold">').concat(this.point.y, "</span>");
                  }
                },
                plotOptions: {
                  column: {
                    borderWidth: 0
                  }
                },
                legend: {
                  enabled: !1
                },
                credits: {
                  enabled: !1
                },
                series: [{
                  type: "column",
                  data: e
                }]
              };
            }(o.current, e, n));
            u(t);
          }
        }
        ), [e, n]),
          l.a.createElement("div", {
            ref: o
          });
      }
      , tt = n(78);
    function et() {
      var t = Object(s.a)(["Volume Per Day"]);
      return et = function () {
        return t;
      }
        ,
        t;
    }
    var nt = Object(u.c)((function (t) {
      return {
        colors: t.theme,
        currencySymbol: Object(T.e)(t)
      };
    }
    ))((function (t) {
      var e = t.colors
        , n = t.trades
        , r = t.currencySymbol
        , o = function (t, e) {
          var n = new Date
            , r = n.getTime() + 60 * n.getTimezoneOffset() * 1e3;
          return new Array(30).fill("").map((function (n, o) {
            var a = r - 864e5 * o
              , i = tt.a.format(a, "yyyy-MM-dd")
              , c = t[i]
              , l = {
                name: tt.a.format(a, "MM/dd"),
                x: a,
                y: 0,
                color: e.primary
              };
            return c && (l.y = c.highVolume + c.lowVolume),
              l;
          }
          ));
        }(n, e);
      return l.a.createElement(K, {
        colors: e
      }, l.a.createElement(x, {
        colors: e
      }, Object(w.t)(et())), l.a.createElement($, {
        data: o,
        currencySymbol: r
      }));
    }
    ));
    function rt() {
      var t = Object(s.a)(["average volume"]);
      return rt = function () {
        return t;
      }
        ,
        t;
    }
    function ot() {
      var t = Object(s.a)(["number of trades"]);
      return ot = function () {
        return t;
      }
        ,
        t;
    }
    function at() {
      var t = Object(s.a)(["total traded volume"]);
      return at = function () {
        return t;
      }
        ,
        t;
    }
    var it = Object(u.c)((function (t) {
      return {
        colors: t.theme,
        isMobile: t.registry.isMobile,
        formatCurrency: Object(T.a)(t),
        showDashboardCards: t.registry.data.partnerConfig.leftPanel.dashboard.cards
      };
    }
    ))((function (t) {
      var e = t.colors
        , n = t.isMobile
        , r = t.trades
        , o = t.formatCurrency
        , a = t.showDashboardCards
        , i = Object.values(r.byDateWithOffset.dates).reduce((function (t, e) {
          return {
            tradedVolume: t.tradedVolume + e.highVolume + e.lowVolume,
            totalTrades: t.totalTrades + e.highCount + e.lowCount
          };
        }
        ), {
          tradedVolume: 0,
          totalTrades: 0
        })
        , c = i.tradedVolume
        , u = i.totalTrades
        , s = Object.values(r.byInstrumentId.openedTrades).reduce((function (t, e) {
          return t + e.highCount + e.lowCount;
        }
        ), 0)
        , d = Object.values(r.byInstrumentId.closedTrades).reduce((function (t, e) {
          return t + e.highCount + e.lowCount;
        }
        ), 0);
      return l.a.createElement(Q, {
        isMobile: n
      }, a.dayVolume && l.a.createElement(nt, {
        trades: r.byDateWithOffset.dates
      }), l.a.createElement(J, {
        isMobile: n
      }, a.tradedVolume && l.a.createElement(v, {
        colors: e
      }, l.a.createElement(y, {
        colors: e
      }, Object(w.t)(at())), l.a.createElement(j, {
        color: e.primaryText,
        style: {
          opacity: .8
        }
      }, o(c))), a.tradesCount && l.a.createElement(v, {
        colors: e
      }, l.a.createElement(y, {
        colors: e
      }, Object(w.t)(ot())), l.a.createElement(j, {
        color: e.primaryText,
        style: {
          opacity: .8
        }
      }, d, " / ", s)), a.avVolume && l.a.createElement(v, {
        colors: e
      }, l.a.createElement(y, {
        colors: e
      }, Object(w.t)(rt())), l.a.createElement(j, {
        color: e.primaryText,
        style: {
          opacity: .8
        }
      }, o(c / u)))));
    }
    ));
    function ct() {
      var t = Object(s.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tfont-style: normal;\n\tfont-weight: normal;\n\tfont-size: 10px;\n\tline-height: 12px;\n\tletter-spacing: 0.00641px;\n\tcolor: ", ";\n\tpadding: 8px 20px 10px 20px;\n\tborder-bottom: 1px solid ", ";\n"]);
      return ct = function () {
        return t;
      }
        ,
        t;
    }
    function lt() {
      var t = Object(s.a)(["\n\tcolor: ", ";\n\tbackground: none;\n\tborder: none;\n\tcursor: pointer;\n"]);
      return lt = function () {
        return t;
      }
        ,
        t;
    }
    function ut() {
      var t = Object(s.a)(["\n\tfont-style: normal;\n\tfont-weight: normal;\n\tdisplay: -webkit-box;\n\ttext-overflow: ellipsis;\n\toverflow: hidden;\n\t-webkit-line-clamp: ", ";\n\t-webkit-box-orient: vertical;\n\tfont-size: 12px;\n\tline-height: 14px;\n\tletter-spacing: 0.007692px;\n\tcolor: ", ";\n\tpadding: 5px 20px 0 20px;\n"]);
      return ut = function () {
        return t;
      }
        ,
        t;
    }
    function st() {
      var t = Object(s.a)(["\n\tfont-style: normal;\n\tfont-weight: normal;\n\tfont-size: 12px;\n\tline-height: 14px;\n\tletter-spacing: 0.1px;\n\tcolor: ", ";\n\tpadding: 10px 20px 0 20px;\n"]);
      return st = function () {
        return t;
      }
        ,
        t;
    }
    function dt() {
      var t = Object(s.a)(["\n\toverflow: auto;\n"]);
      return dt = function () {
        return t;
      }
        ,
        t;
    }
    function pt() {
      var t = Object(s.a)(["\n\t", ";\n\tdisplay: grid;\n\tgrid-template-columns: 1fr;\n\tgrid-template-rows: 49px 251px;\n\tborder-radius: 2px;\n\tbackground-color: ", ";\n"]);
      return pt = function () {
        return t;
      }
        ,
        t;
    }
    var ft = d.c.div(pt(), (function (t) {
      return t.isMobile ? "" : "grid-area: recentUpdates";
    }
    ), (function (t) {
      return t.colors.sidebarElementActive;
    }
    ))
      , mt = d.c.div(dt())
      , bt = d.c.div(st(), (function (t) {
        return t.colors.primaryText;
      }
      ))
      , ht = d.c.div(ut(), (function (t) {
        return t.expanded ? "unset" : 2;
      }
      ), (function (t) {
        return t.colors.secondaryText;
      }
      ))
      , gt = d.c.button(lt(), (function (t) {
        return t.colors.primary;
      }
      ))
      , vt = d.c.div(ct(), (function (t) {
        return t.colors.leftPanel.textColor;
      }
      ), (function (t) {
        return t.colors.panelBackground;
      }
      ))
      , xt = n(15)
      , Ot = Object(u.c)((function (t) {
        return {
          newsUrl: t.registry.data.partnerConfig.leftPanel.news.url,
          colors: t.theme
        };
      }
      ))((function (t) {
        var e = t.colors
          , n = t.newsUrl
          , o = Object(c.useState)([])
          , u = Object(r.a)(o, 2)
          , s = u[0]
          , d = u[1]
          , p = Object(c.useState)(null)
          , f = Object(r.a)(p, 2)
          , m = f[0]
          , b = f[1];
        return Object(c.useEffect)((function () {
          var t = {
            timestamp: Number(new Date)
          };
          (function () {
            var e = Object(i.a)(a.a.mark((function e() {
              var r;
              return a.a.wrap((function (e) {
                for (; ;)
                  switch (e.prev = e.next) {
                    case 0:
                      return d([]),
                        e.next = 3,
                        xt.a.getJson(n, t);
                    case 3:
                      r = e.sent,
                        d(r[0] ? r[0].articles : []);
                    case 5:
                    case "end":
                      return e.stop();
                  }
              }
              ), e);
            }
            )));
            return function () {
              return e.apply(this, arguments);
            };
          }
          )()().then();
        }
        ), [n]),
          l.a.createElement(mt, {
            colors: e,
            className: "scrollable"
          }, s.map((function (t, n) {
            return l.a.createElement("div", {
              key: n
            }, l.a.createElement(bt, {
              colors: e
            }, t.title), l.a.createElement(ht, {
              colors: e,
              expanded: t.id === m
            }, t.content), l.a.createElement(vt, {
              colors: e
            }, tt.a.format(t.date, "dd MMM u"), l.a.createElement(gt, {
              colors: e,
              onClick: function () {
                return t.id === m ? b(null) : b(t.id);
              }
            }, t.id === m ? "-" : "+")));
          }
          )));
      }
      ));
    function yt() {
      var t = Object(s.a)(["Recent Updates"]);
      return yt = function () {
        return t;
      }
        ,
        t;
    }
    var jt = Object(u.c)((function (t) {
      return {
        colors: t.theme,
        isMobile: t.registry.isMobile
      };
    }
    ))((function (t) {
      var e = t.colors
        , n = t.isMobile;
      return l.a.createElement(ft, {
        colors: e,
        isMobile: n
      }, l.a.createElement(x, {
        colors: e,
        bottomBorder: !0
      }, Object(w.t)(yt())), l.a.createElement(Ot, null));
    }
    ));
    function Et() {
      var t = Object(s.a)(["\n\tcolor: ", ";\n\tbackground: none;\n\tborder: none;\n\tcursor: pointer;\n\n\t&:hover {\n\t\ttext-decoration: underline;\n\t}\n"]);
      return Et = function () {
        return t;
      }
        ,
        t;
    }
    function wt() {
      var t = Object(s.a)(["\n\tfont-style: normal;\n\tfont-weight: normal;\n\tfont-size: 12px;\n\tline-height: 30px;\n\tletter-spacing: -0.2px;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\twhite-space: nowrap;\n\ttext-align: ", ";\n\tcolor: ", ";\n\tborder-bottom: 1px solid ", ";\n\twidth: ", ";\n\tmin-width: ", ";\n\n\tspan {\n\t\tdisplay: initial;\n\t\tposition: relative;\n\t\theight: 100%;\n\t\tpadding: 9px 8px;\n\t}\n\n\t&:hover {\n\t\tposition: relative;\n\t\toverflow: visible;\n\t\tz-index: 1;\n\n\t\tspan:after {\n\t\t\tcontent: '';\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t\tbottom: 0;\n\t\t\tleft: 0;\n\t\t\tright: 0;\n\t\t\tbackground-color: ", ";\n\t\t\tz-index: -1;\n\t\t}\n\t}\n"]);
      return wt = function () {
        return t;
      }
        ,
        t;
    }
    function Ct() {
      var t = Object(s.a)(["\n\tfont-style: normal;\n\tfont-weight: 900;\n\tfont-size: 12px;\n\tline-height: 14px;\n\tletter-spacing: -0.2px;\n\ttext-transform: uppercase;\n\tpadding: 0 0 8px 0;\n\ttext-align: left;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\twhite-space: nowrap;\n\twidth: ", ";\n\tcolor: ", ";\n\tborder-bottom: 1px solid ", ";\n\n\tspan {\n\t\tdisplay: initial;\n\t\tposition: relative;\n\t\theight: 100%;\n\t\tpadding: 9px 8px;\n\t}\n\n\t&:hover {\n\t\tposition: relative;\n\t\toverflow: visible;\n\t\tz-index: 1;\n\n\t\tspan:after {\n\t\t\tcontent: '';\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t\tbottom: 0;\n\t\t\tleft: 0;\n\t\t\tright: 0;\n\t\t\tbackground-color: ", ";\n\t\t\tz-index: -1;\n\t\t}\n\t}\n"]);
      return Ct = function () {
        return t;
      }
        ,
        t;
    }
    function kt() {
      var t = Object(s.a)(["\n\tdisplay: table;\n\ttable-layout: fixed;\n\twidth: 100%;\n"]);
      return kt = function () {
        return t;
      }
        ,
        t;
    }
    function Tt() {
      var t = Object(s.a)(["\n\tdisplay: block;\n\theight: 187px;\n\toverflow: auto;\n"]);
      return Tt = function () {
        return t;
      }
        ,
        t;
    }
    function Mt() {
      var t = Object(s.a)(["\n\tdisplay: table;\n\ttable-layout: fixed;\n\twidth: 100%;\n\tpadding-right: 8px;\n"]);
      return Mt = function () {
        return t;
      }
        ,
        t;
    }
    function St() {
      var t = Object(s.a)(["\n\twidth: calc(100% - 24px);\n\tmax-height: 100%;\n\tmargin: 0 10px 0 10px;\n\tpadding: 2px;\n\tborder-spacing: 0;\n\toverflow: auto;\n"]);
      return St = function () {
        return t;
      }
        ,
        t;
    }
    function Lt() {
      var t = Object(s.a)(["\n\twidth: 100%;\n\tmax-height: 100%;\n\tpadding: 0 12px 0 12px;\n\tborder-spacing: 0;\n"]);
      return Lt = function () {
        return t;
      }
        ,
        t;
    }
    function It() {
      var t = Object(s.a)(["\n\t", ";\n\tdisplay: grid;\n\tgrid-template-columns: 1fr;\n\tgrid-template-rows: 49px 221px 30px;\n\tborder-radius: 2px;\n\tbackground-color: ", ";\n"]);
      return It = function () {
        return t;
      }
        ,
        t;
    }
    var _t = d.c.div(It(), (function (t) {
      return t.isMobile ? "" : "grid-area: recentTrades";
    }
    ), (function (t) {
      return t.colors.sidebarElementActive;
    }
    ))
      , Pt = d.c.table(Lt())
      , At = d.c.div(St())
      , zt = d.c.thead(Mt())
      , Nt = d.c.tbody(Tt())
      , Dt = d.c.tr(kt())
      , Rt = d.c.th(Ct(), (function (t) {
        return "".concat(t.widthPercent, "%");
      }
      ), (function (t) {
        return t.colors.textfieldText;
      }
      ), (function (t) {
        return t.colors.panelBorder;
      }
      ), (function (t) {
        return t.colors.panelBackground;
      }
      ))
      , Ft = d.c.td(wt(), (function (t) {
        return t.alignRight ? "right" : "left";
      }
      ), (function (t) {
        return t.colors.secondaryText;
      }
      ), (function (t) {
        return t.colors.panelBorder;
      }
      ), (function (t) {
        return "".concat(t.widthPercent, "%");
      }
      ), (function (t) {
        return "".concat(t.minWidth, "px");
      }
      ), (function (t) {
        return t.colors.panelBackground;
      }
      ))
      , Bt = d.c.button(Et(), (function (t) {
        return t.colors.primary;
      }
      ));
    function Ht() {
      var t = Object(s.a)(["Sold back"]);
      return Ht = function () {
        return t;
      }
        ,
        t;
    }
    function Vt() {
      var t = Object(s.a)(["At the money"]);
      return Vt = function () {
        return t;
      }
        ,
        t;
    }
    function Wt() {
      var t = Object(s.a)(["Out of the money"]);
      return Wt = function () {
        return t;
      }
        ,
        t;
    }
    function Ut() {
      var t = Object(s.a)(["At the money"]);
      return Ut = function () {
        return t;
      }
        ,
        t;
    }
    function Gt() {
      var t = Object(s.a)(["In the money"]);
      return Gt = function () {
        return t;
      }
        ,
        t;
    }
    var Yt = function (t) {
      switch (t) {
        case 1:
          return Object(w.t)(Gt());
        case 0:
          return Object(w.t)(Ut());
        case -1:
          return Object(w.t)(Wt());
        case 2:
          return Object(w.t)(Vt());
        case 3:
          return Object(w.t)(Ht());
        default:
          return "";
      }
    };
    function qt() {
      var t = Object(s.a)(["return"]);
      return qt = function () {
        return t;
      }
        ,
        t;
    }
    function Zt() {
      var t = Object(s.a)(["status"]);
      return Zt = function () {
        return t;
      }
        ,
        t;
    }
    function Xt() {
      var t = Object(s.a)(["payout"]);
      return Xt = function () {
        return t;
      }
        ,
        t;
    }
    function Qt() {
      var t = Object(s.a)(["investment"]);
      return Qt = function () {
        return t;
      }
        ,
        t;
    }
    function Jt() {
      var t = Object(s.a)(["asset"]);
      return Jt = function () {
        return t;
      }
        ,
        t;
    }
    function Kt() {
      var t = Object(s.a)(["expiry time"]);
      return Kt = function () {
        return t;
      }
        ,
        t;
    }
    function $t() {
      var t = Object(s.a)(["trade time"]);
      return $t = function () {
        return t;
      }
        ,
        t;
    }
    function te() {
      var t = Object(s.a)(["id"]);
      return te = function () {
        return t;
      }
        ,
        t;
    }
    var ee = Object(u.c)((function (t) {
      return {
        colors: t.theme,
        closedTrades: t.trades.closed,
        formatStringCurrency: Object(T.c)(t)
      };
    }
    ))((function (t) {
      var e = t.colors
        , n = t.closedTrades
        , r = t.formatStringCurrency;
      return l.a.createElement(Pt, null, l.a.createElement(zt, null, l.a.createElement(Dt, null, l.a.createElement(Rt, {
        colors: e,
        widthPercent: 10
      }, l.a.createElement("span", null, Object(w.t)(te()))), l.a.createElement(Rt, {
        colors: e,
        widthPercent: 17
      }, l.a.createElement("span", null, Object(w.t)($t()))), l.a.createElement(Rt, {
        colors: e,
        widthPercent: 17
      }, l.a.createElement("span", null, Object(w.t)(Kt()))), l.a.createElement(Rt, {
        colors: e,
        widthPercent: 11
      }, l.a.createElement("span", null, Object(w.t)(Jt()))), l.a.createElement(Rt, {
        colors: e,
        widthPercent: 11
      }, l.a.createElement("span", null, Object(w.t)(Qt()))), l.a.createElement(Rt, {
        colors: e,
        widthPercent: 9
      }, l.a.createElement("span", null, Object(w.t)(Xt()))), l.a.createElement(Rt, {
        colors: e,
        widthPercent: 12
      }, l.a.createElement("span", null, Object(w.t)(Zt()))), l.a.createElement(Rt, {
        colors: e,
        widthPercent: 11
      }, l.a.createElement("span", null, Object(w.t)(qt()))))), l.a.createElement(Nt, {
        className: "scrollable"
      }, n.map((function (t, n) {
        return l.a.createElement(Dt, {
          key: n
        }, l.a.createElement(Ft, {
          colors: e,
          widthPercent: 10,
          minWidth: 65
        }, l.a.createElement("span", null, t.tradeID)), l.a.createElement(Ft, {
          colors: e,
          widthPercent: 17,
          minWidth: 111
        }, l.a.createElement("span", null, tt.a.format(t.createdTimestamp, "dd/MM/u HH:mm"))), l.a.createElement(Ft, {
          colors: e,
          widthPercent: 17,
          minWidth: 111
        }, l.a.createElement("span", null, tt.a.format(t.expiryTimestamp, "dd/MM/u HH:mm"))), l.a.createElement(Ft, {
          colors: e,
          widthPercent: 11,
          minWidth: 70
        }, l.a.createElement("span", null, t.instrumentName)), l.a.createElement(Ft, {
          colors: e,
          widthPercent: 11,
          minWidth: 72
        }, l.a.createElement("span", null, r(String(t.userCurrencyStake)))), l.a.createElement(Ft, {
          colors: e,
          widthPercent: 9,
          minWidth: 60
        }, l.a.createElement("span", null, t.payout, "%")), l.a.createElement(Ft, {
          colors: e,
          widthPercent: 12,
          minWidth: 76
        }, l.a.createElement("span", null, Yt(t.status))), l.a.createElement(Ft, {
          colors: e,
          widthPercent: 11,
          minWidth: 72
        }, l.a.createElement("span", null, r(String(t.userCurrencyReturn)))));
      }
      ))));
    }
    ))
      , ne = n(327)
      , re = Object(u.c)((function (t) {
        return {
          colors: t.theme,
          selectedInstrument: Number(t.trading.selected),
          selectedTrade: t.trades.selected,
          formatCurrency: Object(T.a)(t),
          formatStringCurrency: Object(T.c)(t)
        };
      }
      ))((function (t) {
        var e = t.colors
          , n = t.closedTrades
          , r = t.selectedTrade
          , o = t.formatStringCurrency
          , a = t.selectedInstrument
          , i = t.formatCurrency;
        return l.a.createElement(At, null, n.map((function (t, n) {
          return l.a.createElement(ne.a, {
            isOpen: r && r.tradeID === t.tradeID,
            colors: e,
            key: n,
            selected: Number(t.instrumentID) === a,
            formatCurrency: i,
            formatStringCurrency: o,
            position: t
          });
        }
        )));
      }
      ))
      , oe = n(19);
    function ae() {
      var t = Object(s.a)(["Download"]);
      return ae = function () {
        return t;
      }
        ,
        t;
    }
    var ie = function () {
      var t = Object(i.a)(a.a.mark((function t() {
        var e, n, r;
        return a.a.wrap((function (t) {
          for (; ;)
            switch (t.prev = t.next) {
              case 0:
                return 864e5,
                  t.prev = 1,
                  e = {
                    advanced: 1,
                    openPositions: 0,
                    pageSize: 1e6,
                    from: tt.a.format(0, "yyyy-MM-dd"),
                    to: tt.a.format(Date.now() + 864e5, "yyyy-MM-dd")
                  },
                  t.next = 5,
                  xt.a.fetchTrades(e);
              case 5:
                return n = t.sent,
                  r = n.closed.rows,
                  t.abrupt("return", r);
              case 10:
                t.prev = 10,
                  t.t0 = t.catch(1),
                  console.log(t.t0);
              case 13:
              case "end":
                return t.stop();
            }
        }
        ), t, null, [[1, 10]]);
      }
      )));
      return function () {
        return t.apply(this, arguments);
      };
    }()
      , ce = Object(u.c)((function (t) {
        return {
          colors: t.theme
        };
      }
      ))((function (t) {
        var e = t.colors
          , n = function () {
            var t = Object(i.a)(a.a.mark((function t() {
              var e, n, r;
              return a.a.wrap((function (t) {
                for (; ;)
                  switch (t.prev = t.next) {
                    case 0:
                      return t.next = 2,
                        ie();
                    case 2:
                      (e = t.sent) && ("\ufeff",
                        n = "data:text/csv;charset=utf-8," + encodeURIComponent("\ufeffTrade ID,Trade Time,Expiry Time,Asset,Investment,Payout,Status,Return\n" + e.map((function (t) {
                          return [t.tradeID, tt.a.format(t.createdTimestamp, "do MMM yyyy HH:mm"), tt.a.format(t.expiryTimestamp, "do MMM yyyy HH:mm"), t.instrumentName, t.stake, t.payout, Yt(t.status), t.return];
                        }
                        )).join("\n")),
                        (r = document.createElement("a")).setAttribute("href", n),
                        r.setAttribute("download", "transactions.csv"),
                        document.body.appendChild(r),
                        r.click(),
                        document.body.removeChild(r));
                    case 4:
                    case "end":
                      return t.stop();
                  }
              }
              ), t);
            }
            )));
            return function () {
              return t.apply(this, arguments);
            };
          }();
        return l.a.createElement(Bt, {
          colors: e,
          onClick: function () {
            return n();
          }
        }, Object(w.t)(ae()));
      }
      ));
    function le() {
      var t = Object(s.a)(["Load More"]);
      return le = function () {
        return t;
      }
        ,
        t;
    }
    function ue() {
      var t = Object(s.a)(["Recent Trades"]);
      return ue = function () {
        return t;
      }
        ,
        t;
    }
    var se = Object(u.c)((function (t) {
      return {
        colors: t.theme,
        isMobile: t.registry.isMobile,
        closedTrades: t.trades.closed,
        canLoadMore: t.trades.currentPage < t.trades.totalPages
      };
    }
    ), {
      actionLoadMoreClosedTradesRequest: oe.o
    })((function (t) {
      var e = t.colors
        , n = t.isMobile
        , r = t.closedTrades
        , o = t.canLoadMore
        , a = t.actionLoadMoreClosedTradesRequest
        , i = n ? re : ee;
      return l.a.createElement(_t, {
        colors: e,
        isMobile: n
      }, l.a.createElement(x, {
        colors: e
      }, l.a.createElement("span", null, Object(w.t)(ue())), l.a.createElement(ce, null)), l.a.createElement(i, {
        closedTrades: r
      }), o && l.a.createElement(O, {
        colors: e,
        onClick: a
      }, Object(w.t)(le())));
    }
    ));
    function de() {
      var t = Object(s.a)(["\n\t", ";\n\tdisplay: grid;\n\tgrid-template-columns: 1fr;\n\tgrid-template-rows: 49px 251px;\n\tborder-radius: 2px;\n\tbackground-color: ", ";\n"]);
      return de = function () {
        return t;
      }
        ,
        t;
    }
    var pe = d.c.div(de(), (function (t) {
      return t.isMobile ? "" : "grid-area: profitableTraders";
    }
    ), (function (t) {
      return t.colors.sidebarElementActive;
    }
    ))
      , fe = function (t) {
        var e = t.data
          , n = Object(c.useRef)(null)
          , o = Object(c.useState)(null)
          , a = Object(r.a)(o, 2)
          , i = (a[0],
            a[1]);
        return Object(c.useEffect)((function () {
          if (n.current) {
            var t = new V.a.Chart(function (t, e) {
              return {
                chart: {
                  renderTo: t
                },
                title: {
                  text: void 0
                },
                yAxis: {
                  title: {
                    text: void 0
                  }
                },
                plotOptions: {
                  pie: {
                    shadow: !1,
                    borderColor: "#1d2834",
                    borderWidth: 2
                  }
                },
                legend: {
                  itemMarginTop: 5,
                  itemMarginBottom: 5,
                  symbolRadius: 0,
                  itemStyle: {
                    color: "#ffffff",
                    fontFamily: "Roboto, sans-serif",
                    fontWeight: "normal"
                  },
                  itemHoverStyle: {
                    color: "#646e79"
                  }
                },
                tooltip: {
                  formatter: function () {
                    return '\n\t\t\t\t<span style="display: block; margin-right: 2px; color: '.concat(this.point.color, '">\u25cf</span>\n\t\t\t\t<span>').concat(this.point.name, '</span>: <span style="font-weight: bold">').concat(this.point.y, "</span>");
                  }
                },
                credits: {
                  enabled: !1
                },
                series: [{
                  type: "pie",
                  data: e,
                  size: "100%",
                  innerSize: "80%",
                  showInLegend: !0,
                  dataLabels: {
                    enabled: !1
                  }
                }]
              };
            }(n.current, e));
            i(t);
          }
        }
        ), [e]),
          l.a.createElement("div", {
            ref: n
          });
      };
    function me() {
      var t = Object(s.a)(["High/Low Ratio"]);
      return me = function () {
        return t;
      }
        ,
        t;
    }
    function be() {
      var t = Object(s.a)(["Low"]);
      return be = function () {
        return t;
      }
        ,
        t;
    }
    function he() {
      var t = Object(s.a)(["High"]);
      return he = function () {
        return t;
      }
        ,
        t;
    }
    var ge = Object(u.c)((function (t) {
      return {
        colors: t.theme,
        isMobile: t.registry.isMobile
      };
    }
    ))((function (t) {
      var e = t.colors
        , n = t.trades
        , r = t.isMobile
        , o = Object.values(n.dates).reduce((function (t, e) {
          return {
            high: t.high + e.highCount,
            low: t.low + e.lowCount
          };
        }
        ), {
          high: 0,
          low: 0
        })
        , a = o.high
        , i = o.low
        , c = [{
          y: a,
          name: Object(w.t)(he()),
          color: e.primary
        }, {
          y: i,
          name: Object(w.t)(be()),
          color: e.secondary
        }];
      return l.a.createElement(pe, {
        colors: e,
        isMobile: r
      }, l.a.createElement(x, {
        colors: e
      }, Object(w.t)(me())), l.a.createElement(fe, {
        data: c
      }));
    }
    ))
      , ve = n(272)
      , xe = function () {
        var t = Object(i.a)(a.a.mark((function t() {
          return a.a.wrap((function (t) {
            for (; ;)
              switch (t.prev = t.next) {
                case 0:
                  return t.next = 2,
                    xt.a.fetchDashboard((new Date).getTimezoneOffset() / 60 * -1);
                case 2:
                  return t.abrupt("return", t.sent);
                case 3:
                case "end":
                  return t.stop();
              }
          }
          ), t);
        }
        )));
        return function () {
          return t.apply(this, arguments);
        };
      }();
    e.a = Object(u.c)((function (t) {
      return {
        colors: t.theme,
        isMobile: t.registry.isMobile,
        leftPanel: t.registry.data.partnerConfig.leftPanel,
        showDashboardCards: t.registry.data.partnerConfig.leftPanel.dashboard.cards
      };
    }
    ))((function (t) {
      var e = t.isMobile
        , n = t.colors
        , o = t.showDashboardCards
        , a = t.onClose
        , i = Object(c.useState)(!0)
        , u = Object(r.a)(i, 2)
        , s = u[0]
        , d = u[1]
        , p = Object(c.useState)(void 0)
        , f = Object(r.a)(p, 2)
        , m = f[0]
        , b = f[1];
      Object(c.useEffect)((function () {
        h();
      }
      ), []);
      var h = function () {
        s && xe().then((function (t) {
          d(!1),
            b(t);
        }
        ));
      };
      return l.a.createElement(E, {
        colors: n,
        isMobile: e
      }, !e && l.a.createElement(ve.a, {
        colors: n,
        onClick: a
      }), m && l.a.createElement(l.a.Fragment, null, (o.balance || o.invested || o.availableCash) && l.a.createElement(I, null), (o.bonusReceived || o.tradedBonus || o.pendingBonus) && l.a.createElement(D, {
        totalBonusReceived: m.walletStats.bonus.totalBonusReceived,
        totalTradedVolume: m.walletStats.bonus.totalTradedVolume
      }), o.topAssets && l.a.createElement(Y, {
        trades: m.walletStats.trade.byInstrumentId
      }), l.a.createElement(it, {
        trades: m.walletStats.trade
      }), o.recentUpdates && l.a.createElement(jt, null), o.recentTrades && l.a.createElement(se, null), o.ratio && l.a.createElement(ge, {
        trades: m.walletStats.trade.byDateWithOffset
      })));
    }
    ));
  },
  330: function (t, e, n) {
    "use strict";
    var r = n(2)
      , o = n.n(r)
      , a = n(33)
      , i = n(10)
      , c = function () {
        return o.a.createElement("div", null);
      }
      , l = n(58)
      , u = n(44)
      , s = n(440)
      , d = n(88);
    function p() {
      var t = Object(l.a)(["\n\tdisplay: block;\n\tmargin-top: 25px;\n\twidth: 100%;\n\theight: 42px;\n\tline-height: 42px;\n\n\tborder: none;\n\toutline: none;\n\tbackground: none;\n\tcursor: pointer;\n\n\tfont-size: 16px;\n\tfont-weight: 500;\n\tletter-spacing: -0.09px;\n\ttext-align: center;\n\n\tborder-radius: 4px;\n\ttext-transform: uppercase;\n\tbackground-color: ", ";\n\tcolor: ", ";\n\topacity: ", ";\n"]);
      return p = function () {
        return t;
      }
        ,
        t;
    }
    function f() {
      var t = Object(l.a)(["\n\tmargin-top: 0;\n\tmargin-bottom: 35px;\n\tfont-size: 20px;\n\tfont-weight: bold;\n\tline-height: 1;\n\tletter-spacing: -0.12px;\n\tcolor: ", ";\n"]);
      return f = function () {
        return t;
      }
        ,
        t;
    }
    function m() {
      var t = Object(l.a)(["\n\tpadding-top: 15px;\n\tpadding-bottom: 15px;\n\tmax-height: 405px;\n\n\tbox-sizing: border-box;\n\tpadding-left: 30px;\n\tpadding-right: 30px;\n\tbackground-color: ", ";\n\tbox-shadow: 0 2px 10px 0 rgba(20, 31, 44, 0.8);\n"]);
      return m = function () {
        return t;
      }
        ,
        t;
    }
    function b() {
      var t = Object(l.a)(["\n\tposition: absolute;\n\ttop: calc(50% - 200px);\n\tleft: calc(50% - 190px);\n\twidth: 380px;\n\tpadding-top: 15px;\n\tpadding-bottom: 15px;\n\tmax-height: 405px;\n\tdisplay: block;\n\tz-index: 41;\n"]);
      return b = function () {
        return t;
      }
        ,
        t;
    }
    var h = d.c.div(b())
      , g = d.c.div(m(), (function (t) {
        return t.backgroundColor;
      }
      ))
      , v = d.c.h2(f(), (function (t) {
        return t.color;
      }
      ))
      , x = d.c.a(p(), (function (t) {
        return t.colors.primary;
      }
      ), (function (t) {
        return t.colors.primaryTextContrast;
      }
      ), (function (t) {
        return t.disabled ? .3 : 1;
      }
      ))
      , O = n(8);
    function y() {
      var t = Object(l.a)(["Switch to real"]);
      return y = function () {
        return t;
      }
        ,
        t;
    }
    function j() {
      var t = Object(l.a)(["Practice expired"]);
      return j = function () {
        return t;
      }
        ,
        t;
    }
    var E = Object(a.c)((function (t) {
      return {
        registry: t.registry.data,
        colors: t.theme
      };
    }
    ), {
      actionCloseModal: i.d,
      actionPracticeMode: O.x
    })((function (t) {
      var e = t.colors
        , n = function () {
          t.actionPracticeMode(!1);
        };
      return o.a.createElement(o.a.Fragment, null, o.a.createElement(h, null, o.a.createElement(g, {
        backgroundColor: e.modalBackground
      }, o.a.createElement(v, {
        color: e.primaryText
      }, Object(u.t)(j())), o.a.createElement(x, {
        colors: e,
        onClick: n
      }, Object(u.t)(y())))), o.a.createElement(s.a, {
        id: "modal-overlay",
        visible: !0,
        onRequestClose: n,
        style: {
          zIndex: 40
        }
      }));
    }
    ))
      , w = n(50);
    function C() {
      return (C = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
        return t;
      }
      ).apply(this, arguments);
    }
    function k(t, e) {
      if (null == t)
        return {};
      var n, r, o = function (t, e) {
        if (null == t)
          return {};
        var n, r, o = {}, a = Object.keys(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || (o[n] = t[n]);
        return o;
      }(t, e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]);
      }
      return o;
    }
    var T = o.a.createElement("g", {
      fill: "none",
      fillRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, o.a.createElement("g", {
      stroke: "#8491A3",
      strokeWidth: 2
    }, o.a.createElement("g", null, o.a.createElement("g", null, o.a.createElement("g", null, o.a.createElement("path", {
      d: "M0 0L10 10M0 10L10 0",
      transform: "translate(-654 -144) translate(315 120) translate(339 24) translate(1 1)"
    }))))))
      , M = function (t) {
        var e = t.svgRef
          , n = t.title
          , r = k(t, ["svgRef", "title"]);
        return o.a.createElement("svg", C({
          width: 12,
          height: 12,
          viewBox: "0 0 12 12",
          ref: e
        }, r), n ? o.a.createElement("title", null, n) : null, T);
      }
      , S = o.a.forwardRef((function (t, e) {
        return o.a.createElement(M, C({
          svgRef: e
        }, t));
      }
      ));
    n.p;
    function L() {
      var t = Object(l.a)(["\n\tdisplay: block;\n\tmargin-top: 25px;\n\twidth: 100%;\n\theight: 42px;\n\tline-height: 42px;\n\n\tborder: none;\n\toutline: none;\n\tbackground: none;\n\tcursor: pointer;\n\n\tfont-size: 16px;\n\tfont-weight: 500;\n\tletter-spacing: -0.09px;\n\ttext-align: center;\n\n\tborder-radius: 4px;\n\ttext-transform: uppercase;\n\tbackground-color: ", ";\n\tcolor: ", ";\n\topacity: ", ";\n"]);
      return L = function () {
        return t;
      }
        ,
        t;
    }
    function I() {
      var t = Object(l.a)(["\n\tmargin-top: 0;\n\tmargin-bottom: 35px;\n\tfont-size: 20px;\n\tfont-weight: bold;\n\tline-height: 1;\n\tletter-spacing: -0.12px;\n\tcolor: ", ";\n"]);
      return I = function () {
        return t;
      }
        ,
        t;
    }
    function _() {
      var t = Object(l.a)(["\n\tcolor: ", ";\n"]);
      return _ = function () {
        return t;
      }
        ,
        t;
    }
    function P() {
      var t = Object(l.a)(["\n\tpadding-top: 15px;\n\tpadding-bottom: 15px;\n\tmax-height: 405px;\n\n\tbox-sizing: border-box;\n\tpadding-left: 30px;\n\tpadding-right: 30px;\n\tbackground-color: ", ";\n\tbox-shadow: 0 2px 10px 0 rgba(20, 31, 44, 0.8);\n"]);
      return P = function () {
        return t;
      }
        ,
        t;
    }
    function A() {
      var t = Object(l.a)(["\n\tposition: absolute;\n\ttop: calc(50% - 200px);\n\tleft: calc(50% - 190px);\n\twidth: 380px;\n\tmax-height: 405px;\n\tdisplay: block;\n\tz-index: 41;\n"]);
      return A = function () {
        return t;
      }
        ,
        t;
    }
    var z = d.c.div(A())
      , N = d.c.div(P(), (function (t) {
        return t.backgroundColor;
      }
      ))
      , D = d.c.p(_(), (function (t) {
        return t.colors.primaryText;
      }
      ))
      , R = d.c.h2(I(), (function (t) {
        return t.color;
      }
      ))
      , F = {
        position: "absolute",
        top: 24,
        right: 29
      }
      , B = d.c.a(L(), (function (t) {
        return t.colors.primary;
      }
      ), (function (t) {
        return t.colors.primaryTextContrast;
      }
      ), (function (t) {
        return t.disabled ? .3 : 1;
      }
      ));
    function H() {
      var t = Object(l.a)(["Create real account"]);
      return H = function () {
        return t;
      }
        ,
        t;
    }
    function V() {
      var t = Object(l.a)(["Your guest demo account expired, please create real account."]);
      return V = function () {
        return t;
      }
        ,
        t;
    }
    function W() {
      var t = Object(l.a)(["Logged Out"]);
      return W = function () {
        return t;
      }
        ,
        t;
    }
    var U = Object(a.c)((function (t) {
      return {
        registrationLink: t.registry.data.partnerConfig.registrationLink,
        hideRegistrationLink: !1 === t.registry.data.partnerConfig.registrationLink
      };
    }
    ), {
      actionCloseModal: i.d
    })((function (t) {
      var e = t.registrationLink
        , n = t.hideRegistrationLink;
      return o.a.createElement(o.a.Fragment, null, o.a.createElement(z, null, o.a.createElement(w.a, null, (function (r) {
        return o.a.createElement(N, {
          backgroundColor: r.modalBackground
        }, o.a.createElement(R, {
          color: r.primaryText
        }, Object(u.t)(W())), o.a.createElement(S, {
          style: F,
          onClick: t.actionCloseModal
        }), o.a.createElement(D, {
          colors: r
        }, Object(u.t)(V())), !n && o.a.createElement(B, {
          colors: r,
          href: e
        }, Object(u.t)(H())));
      }
      ))), o.a.createElement(s.a, {
        id: "modal-overlay",
        visible: !0,
        onRequestClose: t.actionCloseModal,
        style: {
          zIndex: 40
        }
      }));
    }
    ))
      , G = n(89)
      , Y = n(19);
    function q() {
      var t = Object(l.a)(["\n\tdisplay: block;\n\tmargin: 10px auto;\n\tpadding-left: 10px;\n\tpadding-right: 10px;\n"]);
      return q = function () {
        return t;
      }
        ,
        t;
    }
    function Z() {
      var t = Object(l.a)(["\n\tmargin-top: 15px;\n\tdisplay: flex;\n\tsvg {\n\t\tflex: 0 0 30px;\n\t}\n"]);
      return Z = function () {
        return t;
      }
        ,
        t;
    }
    function X() {
      var t = Object(l.a)(["\n\tdisplay: flex;\n\tmargin-top: 12px;\n\tmargin-bottom: 15px;\n\twidth: 190px;\n\theight: 33px;\n\tline-height: 33px;\n\tborder-radius: 2px;\n\tbackdrop-filter: blur(2px);\n\tbackground-color: rgba(123, 138, 158, 0.2);\n\tcolor: ", ";\n\n\tdiv {\n\t\tpadding-left: 10px;\n\t\tflex: 1 1 auto;\n\t\ttext-align: left;\n\t\tfont-size: 12px;\n\t}\n\tspan {\n\t\tflex: 1 1 auto;\n\t\ttext-align: right;\n\t\tfont-size: 14px;\n\t\tfont-weight: bold;\n\t\tpadding-right: 10px;\n\t}\n"]);
      return X = function () {
        return t;
      }
        ,
        t;
    }
    function Q() {
      var t = Object(l.a)(["\n\tdisplay: block;\n\twidth: 100%;\n\ttext-align: center;\n\theight: 34px;\n\tline-height: 34px;\n\ttext-transform: uppercase;\n\tfont-size: 12px;\n\tfont-weight: 500;\n\tletter-spacing: -0.07px;\n\tmargin-top: 0;\n\tcolor: ", ";\n\tborder-bottom: 1px solid ", ";\n"]);
      return Q = function () {
        return t;
      }
        ,
        t;
    }
    function J() {
      var t = Object(l.a)(["\n\tborder: none;\n\toutline: none;\n\tmargin-top: 2px;\n\tmargin-left: 15px;\n\n\tdisplay: block;\n\tflex: 1 1 auto;\n\theight: 28px;\n\tline-height: 25px;\n\ttext-transform: uppercase;\n\tfont-size: 12px;\n\tfont-weight: 500;\n\tletter-spacing: -0.07px;\n\ttext-align: center;\n\tborder-radius: 2px;\n\n\tcolor: ", ";\n\tbackground: ", ";\n\tborder: solid 1px ", ";\n\tcursor: pointer;\n"]);
      return J = function () {
        return t;
      }
        ,
        t;
    }
    function K() {
      var t = Object(l.a)(["\n\tdisplay: flex;\n\theight: 16px;\n\tline-height: 16px;\n\tmargin-top: 12px;\n\n\tdiv,\n\tspan,\n\tb {\n\t\tflex: 1 1 auto;\n\t\tletter-spacing: normal;\n\t}\n\tspan {\n\t\ttext-align: left;\n\t\tfont-size: 12px;\n\t\tfont-weight: normal;\n\n\t\tcolor: ", ";\n\t}\n\tb,\n\tdiv {\n\t\tfont-size: 12px;\n\t\tfont-weight: normal;\n\t\ttext-align: right;\n\n\t\timg {\n\t\t\tvertical-aling: top;\n\t\t\tmargin-right: 10px;\n\t\t}\n\t\tcolor: ", ";\n\t}\n"]);
      return K = function () {
        return t;
      }
        ,
        t;
    }
    function $() {
      var t = Object(l.a)(["\n\tposition: absolute;\n\ttop: ", "px;\n\tleft: ", "px;\n\tz-index: 41;\n\tdisplay: block;\n\n\twidth: 210px;\n\tmin-height: 252px;\n\tbox-sizing: border-box;\n\tborder-radius: 2px;\n\tbox-shadow: 0 2px 10px 0 rgba(20, 31, 44, 0.8);\n\n\tbackground-color: ", ";\n"]);
      return $ = function () {
        return t;
      }
        ,
        t;
    }
    var tt = d.c.div($(), (function (t) {
      return t.y;
    }
    ), (function (t) {
      return t.x;
    }
    ), (function (t) {
      return t.colors.modalBackground;
    }
    ))
      , et = d.c.div(K(), (function (t) {
        return t.colors.sidebarDisabled;
      }
      ), (function (t) {
        return t.colors.primaryText;
      }
      ))
      , nt = d.c.button(J(), (function (t) {
        return t.colors.primaryTextContrast;
      }
      ), (function (t) {
        return t.colors.primary;
      }
      ), (function (t) {
        return t.colors.primary;
      }
      ))
      , rt = d.c.h2(Q(), (function (t) {
        return t.colors.primaryText;
      }
      ), (function (t) {
        return t.colors.sidebarBorder;
      }
      ))
      , ot = d.c.div(X(), (function (t) {
        return t.colors.primaryText;
      }
      ))
      , at = d.c.div(Z())
      , it = d.c.div(q())
      , ct = n(284)
      , lt = n(262)
      , ut = n(272);
    function st() {
      var t = Object(l.a)(["Confirm sellback"]);
      return st = function () {
        return t;
      }
        ,
        t;
    }
    function dt() {
      var t = Object(l.a)(["Return"]);
      return dt = function () {
        return t;
      }
        ,
        t;
    }
    function pt() {
      var t = Object(l.a)(["Spot Price"]);
      return pt = function () {
        return t;
      }
        ,
        t;
    }
    function ft() {
      var t = Object(l.a)(["Asset"]);
      return ft = function () {
        return t;
      }
        ,
        t;
    }
    function mt() {
      var t = Object(l.a)(["Low"]);
      return mt = function () {
        return t;
      }
        ,
        t;
    }
    function bt() {
      var t = Object(l.a)(["High"]);
      return bt = function () {
        return t;
      }
        ,
        t;
    }
    function ht() {
      var t = Object(l.a)(["Type"]);
      return ht = function () {
        return t;
      }
        ,
        t;
    }
    function gt() {
      var t = Object(l.a)(["ID"]);
      return gt = function () {
        return t;
      }
        ,
        t;
    }
    function vt() {
      var t = Object(l.a)(["Sellback"]);
      return vt = function () {
        return t;
      }
        ,
        t;
    }
    var xt = Object(a.c)((function (t) {
      return {
        colors: t.theme,
        formatCurrency: Object(lt.a)(t)
      };
    }
    ), {
      actionDoSellback: Y.n,
      actionCloseModal: i.d
    })((function (t) {
      var e = t.colors
        , n = Object(r.useState)(t.timeleft)
        , a = Object(G.a)(n, 2)
        , i = a[0]
        , c = a[1];
      i <= 0 && t.actionCloseModal(),
        Object(r.useEffect)((function () {
          var t = setInterval((function () {
            c((function (t) {
              return t - 1;
            }
            ));
          }
          ), 1e3);
          return function () {
            return clearInterval(t);
          };
        }
        ), []);
      var l = 1 === t.trade.direction ? t.colors.primary : t.colors.secondary;
      return o.a.createElement(o.a.Fragment, null, o.a.createElement(tt, {
        x: t.x,
        y: t.y,
        colors: e
      }, o.a.createElement(rt, {
        colors: e
      }, Object(u.t)(vt())), o.a.createElement(ut.a, {
        top: 0,
        onClick: function () {
          return t.actionCloseModal();
        },
        colors: e
      }), o.a.createElement(it, null, o.a.createElement(et, {
        colors: e
      }, o.a.createElement("span", null, Object(u.t)(gt())), o.a.createElement("div", null, t.trade.tradeID)), o.a.createElement(et, {
        colors: e
      }, o.a.createElement("span", null, Object(u.t)(ht())), o.a.createElement("b", {
        style: {
          color: l
        }
      }, 1 === t.trade.direction ? Object(u.t)(bt()) : Object(u.t)(mt()))), o.a.createElement(et, {
        colors: e
      }, o.a.createElement("span", null, Object(u.t)(ft())), o.a.createElement("b", null, o.a.createElement("img", {
        width: "14",
        height: "14",
        className: "trade__instrument_icon",
        alt: "instrument ".concat(t.trade.instrumentID),
        src: "".concat("", "/static/icons/instruments/").concat(t.trade.instrumentID, ".svg")
      }), "\xa0", t.trade.instrumentName)), o.a.createElement(et, {
        colors: e
      }, o.a.createElement("span", null, Object(u.t)(pt())), o.a.createElement("b", null, t.trade.strike)), o.a.createElement(ot, {
        colors: e
      }, o.a.createElement("div", null, Object(u.t)(dt())), o.a.createElement("span", null, t.formatCurrency(parseFloat(t.amount)))), o.a.createElement(at, null, o.a.createElement(ct.a, {
        value: i / t.timeleft * 100,
        filledColor: t.colors.secondary,
        normalColor: "transparent",
        size: 30,
        text: String(i),
        textColor: t.colors.primaryText,
        thickness: 1
      }), o.a.createElement(nt, {
        colors: t.colors,
        onClick: function () {
          return t.actionDoSellback(t.trade, t.amount);
        }
      }, Object(u.t)(st()))))), o.a.createElement(s.a, {
        id: "modal-overlay",
        visible: !0,
        onRequestClose: t.actionCloseModal,
        style: {
          zIndex: 40
        }
      }));
    }
    ));
    function Ot() {
      var t = Object(l.a)(["\n\tdisplay: block;\n\twidth: 100%;\n\theight: 25px;\n"]);
      return Ot = function () {
        return t;
      }
        ,
        t;
    }
    function yt() {
      var t = Object(l.a)(["\n\tflex: 1 1 auto;\n"]);
      return yt = function () {
        return t;
      }
        ,
        t;
    }
    function jt() {
      var t = Object(l.a)(["\n\tflex: 1 0 60%;\n"]);
      return jt = function () {
        return t;
      }
        ,
        t;
    }
    function Et() {
      var t = Object(l.a)(["\n\tdisplay: block;\n\tmargin-top: 6px;\n\tmargin-bottom: 25px;\n\tfont-size: 14px;\n\tline-height: 1.43;\n\tletter-spacing: -0.08px;\n\tcolor: ", ";\n"]);
      return Et = function () {
        return t;
      }
        ,
        t;
    }
    function wt() {
      var t = Object(l.a)(["\n\tflex: 1 1 auto;\n\theight: 42px;\n\tline-height: 42px;\n\ttext-align: center;\n\tborder: none;\n\toutline: none;\n\tbackground: none;\n\tcursor: pointer;\n\tborder-radius: 4px;\n\tborder: 1px solid ", ";\n\n\tfont-size: 14px;\n\tfont-weight: 500;\n\tletter-spacing: -0.08px;\n\ttext-align: center;\n\ttext-transform: uppercase;\n\n\tcolor: ", ";\n\topacity: ", ";\n"]);
      return wt = function () {
        return t;
      }
        ,
        t;
    }
    function Ct() {
      var t = Object(l.a)(["\n\tflex: 1 1 auto;\n\theight: 36px;\n\tline-height: 36px;\n\ttext-align: center;\n\tborder: none;\n\toutline: none;\n\tbackground: none;\n\tcursor: pointer;\n\n\tfont-size: 14px;\n\tfont-weight: 500;\n\tletter-spacing: -0.08px;\n\ttext-align: center;\n\ttext-transform: uppercase;\n\n\tcolor: ", ";\n\topacity: ", ";\n"]);
      return Ct = function () {
        return t;
      }
        ,
        t;
    }
    function kt() {
      var t = Object(l.a)(["\n\tmargin-top: 8px;\n\tdisplay: flex;\n\theight: 36px;\n\tline-height: 36px;\n\n\t#account_forgot {\n\t\ttext-align: left;\n\t}\n\t#account_create {\n\t\ttext-align: right;\n\t}\n"]);
      return kt = function () {
        return t;
      }
        ,
        t;
    }
    function Tt() {
      var t = Object(l.a)(["\n\tflex: 1 1 auto;\n\theight: 42px;\n\tline-height: 42px;\n\n\tborder: none;\n\toutline: none;\n\tbackground: none;\n\tcursor: ", ";\n\n\tfont-size: 16px;\n\tfont-weight: 500;\n\tletter-spacing: -0.09px;\n\ttext-align: center;\n\n\tborder-radius: 4px;\n\ttext-transform: uppercase;\n\tbackground-color: ", ";\n\tcolor: ", ";\n\topacity: ", ";\n"]);
      return Tt = function () {
        return t;
      }
        ,
        t;
    }
    function Mt() {
      var t = Object(l.a)(["\n\tdisplay: block;\n\tmargin-top: 25px;\n\tmin-width: 50%;\n\twidth: ", "%;\n\tmax-width: 100%;\n\theight: 42px;\n\tline-height: 42px;\n\n\tborder: none;\n\toutline: none;\n\tbackground: none;\n\tcursor: ", ";\n\n\tfont-size: 16px;\n\tfont-weight: 500;\n\tletter-spacing: -0.09px;\n\ttext-align: center;\n\n\tborder-radius: 4px;\n\ttext-transform: uppercase;\n\tbackground-color: ", ";\n\tcolor: ", ";\n\topacity: ", ";\n"]);
      return Mt = function () {
        return t;
      }
        ,
        t;
    }
    function St() {
      var t = Object(l.a)(["\n\tmargin-top: ", "px;\n\tmargin-bottom: ", "px;\n\tfont-size: 20px;\n\tfont-weight: bold;\n\tline-height: 1;\n\tletter-spacing: -0.12px;\n\tcolor: ", ";\n"]);
      return St = function () {
        return t;
      }
        ,
        t;
    }
    function Lt() {
      var t = Object(l.a)(["\n\tpadding-top: 15px;\n\theight: 405px;\n\n\tbox-sizing: border-box;\n\tpadding-left: 30px;\n\tpadding-right: 30px;\n\tbackground-color: ", ";\n\tbox-shadow: 0 2px 10px 0 rgba(20, 31, 44, 0.8);\n"]);
      return Lt = function () {
        return t;
      }
        ,
        t;
    }
    function It() {
      var t = Object(l.a)(["\n\tposition: absolute;\n\ttop: calc(50% - 200px);\n\tleft: calc(50% - 190px);\n\twidth: 380px;\n\theight: 405px;\n\tdisplay: block;\n\tz-index: 41;\n"]);
      return It = function () {
        return t;
      }
        ,
        t;
    }
    var _t = d.c.div(It())
      , Pt = d.c.form(Lt(), (function (t) {
        return t.backgroundColor;
      }
      ))
      , At = d.c.h2(St(), (function (t) {
        return t.marginTop;
      }
      ), (function (t) {
        return t.marginBottom;
      }
      ), (function (t) {
        return t.color;
      }
      ))
      , zt = {
        position: "absolute",
        top: 24,
        right: 29
      }
      , Nt = d.c.button(Mt(), (function (t) {
        return t.width;
      }
      ), (function (t) {
        return t.disabled ? "not-allowed" : "pointer";
      }
      ), (function (t) {
        return t.colors.primary;
      }
      ), (function (t) {
        return t.colors.primaryTextContrast;
      }
      ), (function (t) {
        return t.disabled ? .3 : 1;
      }
      ))
      , Dt = d.c.button(Tt(), (function (t) {
        return t.disabled ? "not-allowed" : "pointer";
      }
      ), (function (t) {
        return t.colors.primary;
      }
      ), (function (t) {
        return t.colors.primaryTextContrast;
      }
      ), (function (t) {
        return t.disabled ? .3 : 1;
      }
      ))
      , Rt = d.c.div(kt())
      , Ft = d.c.a(Ct(), (function (t) {
        return t.colors.primary;
      }
      ), (function (t) {
        return t.disabled ? .3 : 1;
      }
      ))
      , Bt = d.c.a(wt(), (function (t) {
        return t.colors.primary;
      }
      ), (function (t) {
        return t.colors.primary;
      }
      ), (function (t) {
        return t.disabled ? .3 : 1;
      }
      ))
      , Ht = d.c.p(Et(), (function (t) {
        return t.colors.textfieldText;
      }
      ))
      , Vt = d.c.div(jt())
      , Wt = d.c.div(yt())
      , Ut = d.c.div(Ot());
    function Gt() {
      var t = Object(l.a)(["Please enter your password"]);
      return Gt = function () {
        return t;
      }
        ,
        t;
    }
    function Yt() {
      var t = Object(l.a)(["Please enter valid email address"]);
      return Yt = function () {
        return t;
      }
        ,
        t;
    }
    function qt() {
      var t = Object(l.a)(["Enter your password"]);
      return qt = function () {
        return t;
      }
        ,
        t;
    }
    function Zt() {
      var t = Object(l.a)(["Enter your email address"]);
      return Zt = function () {
        return t;
      }
        ,
        t;
    }
    function Xt() {
      var t = Object(l.a)(["Password"]);
      return Xt = function () {
        return t;
      }
        ,
        t;
    }
    function Qt() {
      var t = Object(l.a)(["Email address"]);
      return Qt = function () {
        return t;
      }
        ,
        t;
    }
    function Jt() {
      var t = Object(l.a)(["\n\tdisplay: block;\n\tposition: absolute;\n\tleft: 0;\n\tbottom: 0;\n\tfont-size: 12px;\n\tline-height: 12px;\n\tletter-spacing: 0.1px;\n\tcolor: #ffffff;\n"]);
      return Jt = function () {
        return t;
      }
        ,
        t;
    }
    function Kt() {
      var t = Object(l.a)(["\n\tdisplay: block;\n\twidth: 100%;\n\tmargin-top: 12px;\n\theight: 42px;\n\tline-height: 42px;\n\tpadding: 15px 12px;\n\tborder-radius: 3px;\n\tbox-sizing: border-box;\n\t// opacity: 0.5;\n\tfont-size: 16px;\n\tletter-spacing: 0.13px;\n\tbackground-color: ", ";\n\tborder: ", ";\n\toutline: none;\n\t// color: ", ";\n\n\t// &:active {\n\t// opacity: 1.0;\n\tcolor: ", ";\n\t// }\n"]);
      return Kt = function () {
        return t;
      }
        ,
        t;
    }
    function $t() {
      var t = Object(l.a)(["\n\tdisplay: block;\n\theight: 12px;\n\tline-height: 12px;\n\tfont-size: 12px;\n\tletter-spacing: 0.1px;\n\tcolor: ", ";\n"]);
      return $t = function () {
        return t;
      }
        ,
        t;
    }
    function te() {
      var t = Object(l.a)(["\n\tmargin-top: 8px;\n\tpadding-bottom: 24px;\n\tdisplay: block;\n\tposition: relative;\n"]);
      return te = function () {
        return t;
      }
        ,
        t;
    }
    var ee = d.c.div(te())
      , ne = d.c.label($t(), (function (t) {
        return t.color;
      }
      ))
      , re = d.c.input(Kt(), (function (t) {
        return t.theme.textfieldBackground;
      }
      ), (function (t) {
        return t.valid ? "none" : "1px solid #61253a";
      }
      ), (function (t) {
        return t.theme.textfieldText;
      }
      ), (function (t) {
        return t.theme.primaryText;
      }
      ))
      , oe = d.c.span(Jt())
      , ae = {
        email: Object(u.t)(Qt()),
        password: Object(u.t)(Xt())
      }
      , ie = {
        email: Object(u.t)(Zt()),
        password: Object(u.t)(qt())
      }
      , ce = {
        email: Object(u.t)(Yt()),
        password: Object(u.t)(Gt())
      }
      , le = function (t) {
        var e = t.klass
          , n = t.onChange
          , r = t.onTouched
          , a = t.value
          , i = t.valid
          , c = t.theme;
        return o.a.createElement(ee, null, o.a.createElement(ne, {
          htmlFor: e,
          color: c.secondaryText
        }, ae[e]), o.a.createElement(re, {
          name: e,
          theme: c,
          type: e,
          value: a,
          valid: i,
          placeholder: ie[e],
          onChange: function (t) {
            return n(t.target.value);
          },
          onFocus: function () {
            return r();
          }
        }), !i && o.a.createElement(oe, null, ce[e]));
      };
    function ue() {
      var t = Object(l.a)(["Login"]);
      return ue = function () {
        return t;
      }
        ,
        t;
    }
    function se() {
      var t = Object(l.a)(["Signing in..."]);
      return se = function () {
        return t;
      }
        ,
        t;
    }
    function de() {
      var t = Object(l.a)(["Create account"]);
      return de = function () {
        return t;
      }
        ,
        t;
    }
    function pe() {
      var t = Object(l.a)(["Forgot password?"]);
      return pe = function () {
        return t;
      }
        ,
        t;
    }
    function fe() {
      var t = Object(l.a)(["Login"]);
      return fe = function () {
        return t;
      }
        ,
        t;
    }
    var me = function (t, e, n) {
      if (!n)
        return !0;
      switch (e) {
        case "email":
          return t.length > 1 && t.includes("@") && t.includes(".");
        case "password":
          return t.length > 1;
        default:
          return !0;
      }
    }
      , be = Object(a.c)((function (t) {
        return {
          authenticating: t.account.authenticating,
          hideForgotPassword: t.registry.data.hideForgotPassword,
          forgotPasswordLink: t.registry.data.loginConfig.forgotPasswordLink,
          registrationLink: t.registry.data.partnerConfig.registrationLink,
          hideRegistrationLink: !1 === t.registry.data.partnerConfig.registrationLink,
          colors: t.theme
        };
      }
      ), {
        actionCloseModal: i.d,
        actionSignInRequest: O.F,
        actionShowModal: i.e
      })((function (t) {
        var e = t.registrationLink
          , n = t.hideRegistrationLink
          , a = t.colors
          , c = Object(r.useState)("")
          , l = Object(G.a)(c, 2)
          , d = l[0]
          , p = l[1]
          , f = Object(r.useState)("")
          , m = Object(G.a)(f, 2)
          , b = m[0]
          , h = m[1]
          , g = Object(r.useState)(!1)
          , v = Object(G.a)(g, 2)
          , x = v[0]
          , O = v[1]
          , y = Object(r.useState)(!1)
          , j = Object(G.a)(y, 2)
          , E = j[0]
          , w = j[1]
          , C = me(d, "email", E)
          , k = me(b, "password", x)
          , T = t.authenticating
          , M = t.authenticating || d.length < 1 || b.length < 1 || !C || !k
          , L = function (e) {
            e.preventDefault(),
              T || M || t.actionSignInRequest(d, b);
          };
        return o.a.createElement(o.a.Fragment, null, o.a.createElement(_t, null, o.a.createElement(Pt, {
          backgroundColor: a.modalBackground,
          onSubmit: L
        }, o.a.createElement(At, {
          marginTop: 0,
          marginBottom: 35,
          color: a.primaryText
        }, Object(u.t)(fe())), o.a.createElement(S, {
          style: zt,
          onClick: t.actionCloseModal
        }), o.a.createElement(le, {
          theme: a,
          klass: "email",
          onChange: p,
          onTouched: function () {
            return w(!0);
          },
          valid: C,
          value: d
        }), o.a.createElement(le, {
          theme: a,
          klass: "password",
          onChange: h,
          onTouched: function () {
            return O(!0);
          },
          valid: k,
          value: b
        }), o.a.createElement(Rt, null, !t.hideForgotPassword && o.a.createElement(Ft, {
          id: "account_forgot",
          onClick: function (e) {
            e.preventDefault(),
              t.actionShowModal(i.b.PASSWORD_RESET);
          },
          colors: a
        }, Object(u.t)(pe())), !n && o.a.createElement(Ft, {
          id: "account_create",
          onClick: function (t) {
            t.preventDefault(),
              window.location.assign(e);
          },
          colors: a
        }, Object(u.t)(de()))), o.a.createElement(Nt, {
          width: 100,
          onClick: L,
          disabled: M,
          colors: a
        }, T ? Object(u.t)(se()) : Object(u.t)(ue())))), o.a.createElement(s.a, {
          id: "modal-overlay",
          visible: !0,
          onRequestClose: t.actionCloseModal,
          style: {
            zIndex: 40
          }
        }));
      }
      ))
      , he = n(63)
      , ge = n(3)
      , ve = n(51)
      , xe = n(439)
      , Oe = n(431);
    function ye() {
      var t = Object(l.a)(["\n\tdisplay: block;\n\twidth: 20px;\n\theight: 20px;\n\tborder: 1px solid #333;\n\tbackground-color: ", ";\n"]);
      return ye = function () {
        return t;
      }
        ,
        t;
    }
    function je() {
      var t = Object(l.a)(["\n\tdisplay: block;\n\tmargin: 10px;\n\n\ttextarea {\n\t\twidth: 100%;\n\t}\n"]);
      return je = function () {
        return t;
      }
        ,
        t;
    }
    function Ee() {
      var t = Object(l.a)(["\n\tposition: fixed;\n\tz-index: 999;\n\tleft: 0;\n\ttop: 0;\n\tbottom: 0;\n\tdisplay: block;\n\tbackground: #ffffff;\n\tcolor: #333333;\n\twidth: 500px;\n\topacity: 0.9;\n\toverflow-y: scroll;\n"]);
      return Ee = function () {
        return t;
      }
        ,
        t;
    }
    var we = d.c.div(Ee())
      , Ce = d.c.div(je())
      , ke = d.c.div(ye(), (function (t) {
        return t.color;
      }
      ))
      , Te = function (t) {
        var e = t.field
          , n = t.value
          , r = t.onChange
          , a = Object.keys(n);
        return o.a.createElement(o.a.Fragment, null, a.map((function (t) {
          var a = n[t]
            , i = "string" === typeof a;
          return o.a.createElement("tr", {
            key: t
          }, o.a.createElement("td", null, e, ".", t), o.a.createElement("td", null, i && o.a.createElement("input", {
            id: t,
            type: "text",
            defaultValue: a,
            onChange: function (o) {
              return r(e, Object(ge.a)(Object(ge.a)({}, n), {}, Object(he.a)({}, t, o.target.value)));
            }
          }), !i && o.a.createElement("textarea", {
            onChange: function (o) {
              return r(e, Object(ge.a)(Object(ge.a)({}, n), {}, Object(he.a)({}, t, JSON.parse(o.target.value))));
            }
          }, JSON.stringify(a))), o.a.createElement("td", null, i && o.a.createElement(ke, {
            color: a
          })));
        }
        )));
      }
      , Me = function (t) {
        var e = Object.keys(t.theme)
          , n = function (e, n) {
            return t.onUpdate(e, n);
          };
        return o.a.createElement(Ce, null, o.a.createElement(Oe.a, {
          type: "subtitle-2"
        }, "Colors"), o.a.createElement("table", null, o.a.createElement("tbody", null, e.map((function (e) {
          return "string" === typeof t.theme[e] ? o.a.createElement("tr", {
            key: e
          }, o.a.createElement("td", null, e), o.a.createElement("td", null, o.a.createElement("input", {
            id: e,
            type: "text",
            defaultValue: t.theme[e],
            onChange: function (t) {
              return n(e, t.target.value);
            }
          })), o.a.createElement("td", null, o.a.createElement(ke, {
            color: t.theme[e]
          }))) : o.a.createElement(Te, {
            field: e,
            value: t.theme[e],
            onChange: n
          });
        }
        )))));
      }
      , Se = function (t) {
        return o.a.createElement(Ce, null, o.a.createElement(Oe.a, {
          type: "subtitle-2"
        }, "JSON"), o.a.createElement("textarea", {
          readOnly: !0,
          value: JSON.stringify(t.theme)
        }));
      }
      , Le = Object(a.c)(null, {
        actionCloseModal: i.d,
        actionUpdateTheme: ve.d
      })((function (t) {
        return o.a.createElement(we, null, o.a.createElement(xe.a, {
          onClick: function () {
            return t.actionCloseModal();
          }
        }, "close"), o.a.createElement(w.a, null, (function (e) {
          return o.a.createElement(o.a.Fragment, null, o.a.createElement(Me, {
            theme: e,
            onUpdate: function (e, n) {
              return t.actionUpdateTheme(e, n);
            }
          }), o.a.createElement(Se, {
            theme: e
          }));
        }
        )));
      }
      ))
      , Ie = n(30)
      , _e = n(53)
      , Pe = n(91)
      , Ae = n(90)
      , ze = n(15)
      , Ne = n(441);
    function De() {
      var t = Object(l.a)(["Close"]);
      return De = function () {
        return t;
      }
        ,
        t;
    }
    function Re() {
      var t = Object(l.a)(["We have reset the password, please check the email"]);
      return Re = function () {
        return t;
      }
        ,
        t;
    }
    function Fe() {
      var t = Object(l.a)(["Restore password"]);
      return Fe = function () {
        return t;
      }
        ,
        t;
    }
    function Be() {
      var t = Object(l.a)(["Restore password"]);
      return Be = function () {
        return t;
      }
        ,
        t;
    }
    function He() {
      var t = Object(l.a)(["Submit"]);
      return He = function () {
        return t;
      }
        ,
        t;
    }
    function Ve() {
      var t = Object(l.a)(["Cancel"]);
      return Ve = function () {
        return t;
      }
        ,
        t;
    }
    function We() {
      var t = Object(l.a)(["Create account"]);
      return We = function () {
        return t;
      }
        ,
        t;
    }
    function Ue() {
      var t = Object(l.a)(["Please enter your email address and we will send you instruction on how to reset your password."]);
      return Ue = function () {
        return t;
      }
        ,
        t;
    }
    function Ge() {
      var t = Object(l.a)(["Restore password"]);
      return Ge = function () {
        return t;
      }
        ,
        t;
    }
    var Ye = function (t) {
      Object(Pe.a)(n, t);
      var e = Object(Ae.a)(n);
      function n(t) {
        var r;
        return Object(Ie.a)(this, n),
          (r = e.call(this, t)).onSubmit = function (t) {
            r.state.locked || (t.preventDefault(),
              r.setState({
                locked: !0
              }, (function () {
                ze.a.resetPasswordAccount(r.state.email).then((function (t) {
                  r.setState({
                    success: t.success,
                    locked: !1
                  });
                }
                )).catch((function (t) {
                  console.warn(t),
                    r.setState({
                      success: !1,
                      locked: !1
                    });
                }
                ));
              }
              )));
          }
          ,
          r.onCreateAccount = function (t) {
            t.preventDefault(),
              window.location.assign(r.props.registrationLink);
          }
          ,
          r.onPromptContents = function () {
            return o.a.createElement(Pt, {
              backgroundColor: r.props.colors.modalBackground,
              onSubmit: r.onSubmit
            }, o.a.createElement(At, {
              marginTop: 25,
              marginBottom: 0,
              color: r.props.colors.primaryText
            }, Object(u.t)(Ge())), o.a.createElement(Ht, {
              colors: r.props.colors
            }, Object(u.t)(Ue())), o.a.createElement(le, {
              theme: r.props.colors,
              klass: "email",
              onTouched: function () {
                return r.setState({
                  passwordTouched: !0
                });
              },
              onChange: function (t) {
                return r.setState({
                  email: t
                });
              },
              valid: me(r.state.email, "email", r.state.passwordTouched),
              value: r.state.email
            }), o.a.createElement(Rt, null, o.a.createElement(Ft, {
              id: "account_create",
              onClick: r.onCreateAccount,
              colors: r.props.colors
            }, Object(u.t)(We())), o.a.createElement(Vt, null)), o.a.createElement(Ut, null), o.a.createElement(Rt, null, o.a.createElement(Bt, {
              id: "cancel_button",
              onClick: r.props.actionCloseModal,
              colors: r.props.colors
            }, Object(u.t)(Ve())), o.a.createElement(Wt, null), o.a.createElement(Dt, {
              id: "password_reset",
              width: 50,
              disabled: !me(r.state.email, "email", r.state.passwordTouched),
              onClick: r.onSubmit,
              colors: r.props.colors
            }, Object(u.t)(He()))));
          }
          ,
          r.onLoadingContents = function () {
            return o.a.createElement(Pt, {
              backgroundColor: r.props.colors.modalBackground,
              onSubmit: r.onSubmit
            }, o.a.createElement(At, {
              marginTop: 25,
              marginBottom: 0,
              color: r.props.colors.primaryText
            }, Object(u.t)(Be())), o.a.createElement(Ne.a, {
              id: "account__loading"
            }));
          }
          ,
          r.onSuccessContents = function () {
            return o.a.createElement(Pt, {
              backgroundColor: r.props.colors.modalBackground,
              onSubmit: r.props.actionCloseModal
            }, o.a.createElement(At, {
              marginTop: 25,
              marginBottom: 0,
              color: r.props.colors.primaryText
            }, Object(u.t)(Fe())), o.a.createElement(Ht, {
              colors: r.props.colors
            }, Object(u.t)(Re())), o.a.createElement(Ut, null), o.a.createElement(Rt, null, o.a.createElement(Bt, {
              id: "cancel_button",
              colors: r.props.colors,
              onClick: r.props.actionCloseModal
            }, Object(u.t)(De()))));
          }
          ,
          r.state = {
            locked: !1,
            email: "",
            success: !1,
            passwordTouched: !1
          },
          r;
      }
      return Object(_e.a)(n, [{
        key: "render",
        value: function () {
          var t = this.state
            , e = t.locked
            , n = t.success;
          return o.a.createElement(o.a.Fragment, null, o.a.createElement(_t, null, !e && !n && this.onPromptContents(), e && this.onLoadingContents(), n && this.onSuccessContents()), o.a.createElement(s.a, {
            id: "modal-overlay",
            visible: !0,
            onRequestClose: this.props.actionCloseModal,
            style: {
              zIndex: 40
            }
          }));
        }
      }]),
        n;
    }(r.Component)
      , qe = Object(a.c)((function (t) {
        return {
          registrationLink: t.registry.data.partnerConfig.registrationLink,
          colors: t.theme
        };
      }
      ), {
        actionCloseModal: i.d,
        actionShowModal: i.e
      })(Ye);
    function Ze() {
      var t = Object(l.a)(["\n\tdisplay: block;\n\tmargin-top: 25px;\n\twidth: 100%;\n\theight: 42px;\n\tline-height: 42px;\n\n\tborder: none;\n\toutline: none;\n\tbackground: none;\n\tcursor: pointer;\n\n\tfont-size: 16px;\n\tfont-weight: 500;\n\tletter-spacing: -0.09px;\n\ttext-align: center;\n\n\tborder-radius: 4px;\n\ttext-transform: uppercase;\n\tbackground-color: ", ";\n\tcolor: ", ";\n\topacity: ", ";\n"]);
      return Ze = function () {
        return t;
      }
        ,
        t;
    }
    function Xe() {
      var t = Object(l.a)(["\n\tmargin-top: 0;\n\tmargin-bottom: 35px;\n\tfont-size: 20px;\n\tfont-weight: bold;\n\tline-height: 1;\n\tletter-spacing: -0.12px;\n\tcolor: ", ";\n"]);
      return Xe = function () {
        return t;
      }
        ,
        t;
    }
    function Qe() {
      var t = Object(l.a)(["\n\tcolor: ", ";\n"]);
      return Qe = function () {
        return t;
      }
        ,
        t;
    }
    function Je() {
      var t = Object(l.a)(["\n\tpadding-top: 15px;\n\tpadding-bottom: 15px;\n\tmax-height: 405px;\n\n\tbox-sizing: border-box;\n\tpadding-left: 30px;\n\tpadding-right: 30px;\n\tbackground-color: ", ";\n\tbox-shadow: 0 2px 10px 0 rgba(20, 31, 44, 0.8);\n"]);
      return Je = function () {
        return t;
      }
        ,
        t;
    }
    function Ke() {
      var t = Object(l.a)(["\n\tposition: absolute;\n\ttop: calc(50% - 200px);\n\tleft: calc(50% - 190px);\n\twidth: 380px;\n\tmax-height: 405px;\n\tdisplay: block;\n\tz-index: 41;\n"]);
      return Ke = function () {
        return t;
      }
        ,
        t;
    }
    var $e = d.c.div(Ke())
      , tn = d.c.div(Je(), (function (t) {
        return t.backgroundColor;
      }
      ))
      , en = d.c.p(Qe(), (function (t) {
        return t.colors.primaryText;
      }
      ))
      , nn = d.c.h2(Xe(), (function (t) {
        return t.color;
      }
      ))
      , rn = {
        position: "absolute",
        top: 24,
        right: 29
      }
      , on = d.c.a(Ze(), (function (t) {
        return t.colors.primary;
      }
      ), (function (t) {
        return t.colors.primaryTextContrast;
      }
      ), (function (t) {
        return t.disabled ? .3 : 1;
      }
      ));
    function an() {
      var t = Object(l.a)(["Close"]);
      return an = function () {
        return t;
      }
        ,
        t;
    }
    function cn() {
      var t = Object(l.a)(["You are logged out, please log in to the platform."]);
      return cn = function () {
        return t;
      }
        ,
        t;
    }
    function ln() {
      var t = Object(l.a)(["Logged Out"]);
      return ln = function () {
        return t;
      }
        ,
        t;
    }
    var un = Object(a.c)(null, {
      actionCloseModal: i.d
    })((function (t) {
      return o.a.createElement(o.a.Fragment, null, o.a.createElement($e, null, o.a.createElement(w.a, null, (function (e) {
        return o.a.createElement(tn, {
          backgroundColor: e.modalBackground
        }, o.a.createElement(nn, {
          color: e.primaryText
        }, Object(u.t)(ln())), o.a.createElement(S, {
          style: rn,
          onClick: t.actionCloseModal
        }), o.a.createElement(en, {
          colors: e
        }, Object(u.t)(cn())), o.a.createElement(on, {
          colors: e,
          onClick: t.actionCloseModal
        }, Object(u.t)(an())));
      }
      ))), o.a.createElement(s.a, {
        id: "modal-overlay",
        visible: !0,
        onRequestClose: function () { },
        style: {
          zIndex: 40
        }
      }));
    }
    ))
      , sn = n(432)
      , dn = n(437)
      , pn = n(291)
      , fn = n(34)
      , mn = n(6);
    function bn() {
      var t = Object(l.a)(["\n\tposition: fixed;\n\ttop: 20%;\n\tleft: 20px;\n\tright: 20px;\n\tbottom: ", ";\n\tz-index: 80;\n\toverflow: auto;\n\n\tul {\n\t\tbackground: ", ";\n\t\tcolor: ", ";\n\t}\n"]);
      return bn = function () {
        return t;
      }
        ,
        t;
    }
    var hn = d.c.div(bn(), (function (t) {
      return t.bottom + "px";
    }
    ), (function (t) {
      return t.colors.textfieldBackground;
    }
    ), (function (t) {
      return t.colors.textfieldText;
    }
    ))
      , gn = Object(a.c)((function (t) {
        return {
          colors: t.theme
        };
      }
      ), {
        actionCloseModal: i.d,
        actionSelectGame: fn.c,
        actionSetSelectedCfdOptionExpiry: mn.R
      })((function (t) {
        var e = t.items
          , n = t.bottomSpace;
        return o.a.createElement(o.a.Fragment, null, o.a.createElement(hn, {
          colors: t.colors,
          bottom: n + 25
        }, o.a.createElement(sn.a, {
          className: "md-cell md-paper md-paper--1"
        }, e.map((function (e) {
          return o.a.createElement(dn.a, {
            key: "".concat(e.deadPeriod, "-").concat(e.expiry),
            onClick: function () {
              return function (e) {
                e.isCfdOptions && e.cdfExpiry ? t.actionSetSelectedCfdOptionExpiry(e.cdfExpiry) : t.actionSelectGame(e),
                  t.actionCloseModal();
              }(e);
            },
            primaryText: Object(pn.d)(e)
          });
        }
        )))), o.a.createElement(s.a, {
          id: "modal-overlay",
          visible: !0,
          onRequestClose: t.actionCloseModal,
          style: {
            zIndex: 79
          }
        }));
      }
      ));
    function vn() {
      var t = Object(l.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\twidth: 34px;\n\theight: 34px;\n\tbackground-color: ", ";\n\tborder: none;\n\tborder-radius: 50%;\n\tpadding: 0;\n\n\t&:before {\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\twidth: 2px;\n\t\theight: 14px;\n\t\tbackground-color: ", ";\n\t\ttransform: rotate3d(0, 0, 1, 45deg);\n\t}\n\n\t&:after {\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\twidth: 2px;\n\t\theight: 14px;\n\t\tbackground-color: ", ";\n\t\ttransform: rotate3d(0, 0, 1, -45deg);\n\t}\n"]);
      return vn = function () {
        return t;
      }
        ,
        t;
    }
    function xn() {
      var t = Object(l.a)(["\n\tposition: absolute;\n\ttop: calc(50% - 200px);\n\tleft: calc(50% - 135px);\n\theight: 275px;\n\tdisplay: block;\n\tz-index: 120;\n"]);
      return xn = function () {
        return t;
      }
        ,
        t;
    }
    var On = d.c.div(xn())
      , yn = d.c.button(vn(), (function (t) {
        return t.colors.primary;
      }
      ), (function (t) {
        return t.colors.panelBackground;
      }
      ), (function (t) {
        return t.colors.panelBackground;
      }
      ));
    function jn() {
      return (jn = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
        return t;
      }
      ).apply(this, arguments);
    }
    function En(t, e) {
      if (null == t)
        return {};
      var n, r, o = function (t, e) {
        if (null == t)
          return {};
        var n, r, o = {}, a = Object.keys(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || (o[n] = t[n]);
        return o;
      }(t, e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]);
      }
      return o;
    }
    var wn = o.a.createElement("path", {
      d: "M7.89551 0.354518L0.529272 9.0707C0.221536 9.43483 0.213649 9.96557 0.510428 10.3387L7.89486 19.6225C8.08457 19.861 8.37271 20 8.67747 20H25C25.5523 20 26 19.5523 26 19V1C26 0.447715 25.5523 0 25 0H8.65929C8.36493 0 8.08552 0.129692 7.89551 0.354518Z",
      fill: "#667DA1"
    })
      , Cn = function (t) {
        var e = t.svgRef
          , n = t.title
          , r = En(t, ["svgRef", "title"]);
        return o.a.createElement("svg", jn({
          width: 26,
          height: 20,
          viewBox: "0 0 26 20",
          fill: "none",
          ref: e
        }, r), n ? o.a.createElement("title", null, n) : null, wn);
      }
      , kn = o.a.forwardRef((function (t, e) {
        return o.a.createElement(Cn, jn({
          svgRef: e
        }, t));
      }
      ));
    n.p;
    function Tn() {
      return (Tn = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
        return t;
      }
      ).apply(this, arguments);
    }
    function Mn(t, e) {
      if (null == t)
        return {};
      var n, r, o = function (t, e) {
        if (null == t)
          return {};
        var n, r, o = {}, a = Object.keys(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || (o[n] = t[n]);
        return o;
      }(t, e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        for (r = 0; r < a.length; r++)
          n = a[r],
            e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]);
      }
      return o;
    }
    var Sn = o.a.createElement("path", {
      d: "M1.66699 1.66699L8.33366 8.33366",
      stroke: "white",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })
      , Ln = o.a.createElement("path", {
        d: "M1.66699 8.33366L8.33366 1.66699",
        stroke: "white",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
      , In = function (t) {
        var e = t.svgRef
          , n = t.title
          , r = Mn(t, ["svgRef", "title"]);
        return o.a.createElement("svg", Tn({
          width: 10,
          height: 10,
          viewBox: "0 0 10 10",
          fill: "none",
          ref: e
        }, r), n ? o.a.createElement("title", null, n) : null, Sn, Ln);
      }
      , _n = o.a.forwardRef((function (t, e) {
        return o.a.createElement(In, Tn({
          svgRef: e
        }, t));
      }
      ));
    n.p;
    function Pn() {
      var t = Object(l.a)(["\n\tcolor: ", ";\n\tbackground: #253143;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\twidth: 90px;\n\theight: 50px;\n"]);
      return Pn = function () {
        return t;
      }
        ,
        t;
    }
    function An() {
      var t = Object(l.a)(["\n\tdisplay: grid;\n\tgrid-template-rows: repeat(3, 1fr);\n\tgrid-template-columns: repeat(3, 1fr);\n\tgap: 1px;\n"]);
      return An = function () {
        return t;
      }
        ,
        t;
    }
    function zn() {
      var t = Object(l.a)(["\n\tdisplay: flex;\n\tjustify-content: end;\n\tpadding: 10px;\n"]);
      return zn = function () {
        return t;
      }
        ,
        t;
    }
    function Nn() {
      var t = Object(l.a)(["\n\tbackground: ", ";\n"]);
      return Nn = function () {
        return t;
      }
        ,
        t;
    }
    var Dn = d.c.div(Nn(), (function (t) {
      return t.colors.background;
    }
    ))
      , Rn = d.c.div(zn())
      , Fn = d.c.div(An())
      , Bn = d.c.div(Pn(), (function (t) {
        return t.colors.primaryText;
      }
      ))
      , Hn = Object(a.c)(null, {
        actionCloseModal: i.d
      })((function (t) {
        var e = t.colors
          , n = t.onChange
          , r = t.onBackClick
          , a = t.actionCloseModal;
        return o.a.createElement(o.a.Fragment, null, o.a.createElement(On, null, o.a.createElement(Dn, {
          colors: e
        }, o.a.createElement(Rn, null, o.a.createElement(yn, {
          onClick: a,
          colors: e
        })), o.a.createElement(Fn, null, [1, 2, 3, 4, 5, 6, 7, 8, 9].map((function (t) {
          return o.a.createElement(Bn, {
            colors: e,
            key: t,
            onClick: function () {
              return n(t);
            }
          }, o.a.createElement("span", null, t));
        }
        )), o.a.createElement(Bn, {
          colors: e
        }, o.a.createElement("span", null, ".")), o.a.createElement(Bn, {
          colors: e,
          onClick: function () {
            return n(0);
          }
        }, o.a.createElement("span", null, "0")), o.a.createElement(Bn, {
          onClick: function () {
            return r();
          },
          colors: e
        }, o.a.createElement(kn, null), o.a.createElement(_n, {
          style: {
            marginLeft: "-15px"
          }
        }))))), o.a.createElement(s.a, {
          id: "modal-overlay",
          visible: !0,
          onRequestClose: a,
          style: {
            zIndex: 119
          }
        }));
      }
      ));
    e.a = Object(a.c)((function (t) {
      return {
        modalType: t.modal.modalName,
        props: t.modal.props
      };
    }
    ), {})((function (t) {
      var e = t.modalType
        , n = t.props;
      switch (e) {
        case i.b.SIGN_IN:
          return o.a.createElement(be, null);
        case i.b.NETWORK_ERROR:
          return o.a.createElement(c, null);
        case i.b.PRACTICE_EXPIRED:
          return o.a.createElement(E, null);
        case i.b.GUESTDEMO_EXPIRED:
          return o.a.createElement(U, n);
        case i.b.SESSION_EXPIRED:
          return o.a.createElement(un, n);
        case i.b.SELLBACK:
          return o.a.createElement(xt, n);
        case i.b.THEME_CONFIG:
          return o.a.createElement(Le, n);
        case i.b.PASSWORD_RESET:
          return o.a.createElement(qe, n);
        case i.b.EXPIRIES_MODAL:
          return o.a.createElement(gn, n);
        case i.b.KEYBOARD:
          return o.a.createElement(Hn, n);
        default:
          return null;
      }
    }
    ));
  },
  331: function (t, e, n) {
    "use strict";
    var r = n(58)
      , o = n(2)
      , a = n.n(o)
      , i = n(33)
      , c = n(282)
      , l = n(44)
      , u = n(272)
      , s = n(281)
      , d = n(18)
      , p = n(89)
      , f = n(1)
      , m = n.n(f)
      , b = n(12)
      , h = n(15)
      , g = n(88);
    function v() {
      var t = Object(r.a)(["\n\tdisplay: block;\n\tposition: relative;\n\toverflow-x: auto;\n\twidth: 100%;\n\theight: 100%;\n"]);
      return v = function () {
        return t;
      }
        ,
        t;
    }
    function x() {
      var t = Object(r.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\twidth: 100%;\n"]);
      return x = function () {
        return t;
      }
        ,
        t;
    }
    function O() {
      var t = Object(r.a)(["\n\tdisplay: block;\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translate3d(-50%, -50%, 0);\n\tmax-height: 100vh;\n\tmax-width: 100vw;\n\tcursor: zoom-out;\n"]);
      return O = function () {
        return t;
      }
        ,
        t;
    }
    function y() {
      var t = Object(r.a)(["\n\twidth: 100%;\n\tcursor: zoom-in;\n"]);
      return y = function () {
        return t;
      }
        ,
        t;
    }
    function j() {
      var t = Object(r.a)(["\n\tcolor: ", ";\n\tfont-size: 10px;\n"]);
      return j = function () {
        return t;
      }
        ,
        t;
    }
    function E() {
      var t = Object(r.a)(["\n\tp {\n\t\tfont-family: Roboto;\n\t\tfont-style: normal;\n\t\tfont-weight: normal;\n\t\tfont-size: 12px;\n\t\tline-height: 14px;\n\n\t\tcolor: ", ";\n\t}\n\n\tp:first-of-type {\n\t\tfont-family: Roboto;\n\t\tfont-style: normal;\n\t\tfont-weight: 500;\n\t\tfont-size: 14px;\n\t\tline-height: 16px;\n\n\t\tcolor: ", ";\n\t}\n\n\ttable {\n\t\tfont-family: Roboto;\n\t\tfont-style: normal;\n\t\tfont-weight: normal;\n\t\tfont-size: 12px;\n\t\tline-height: 14px;\n\t\tcolor: ", ";\n\n\t\ttbody {\n\t\t\ttr:first-child {\n\t\t\t\tcolor: ", ";\n\t\t\t\tbackground-color: ", ";\n\t\t\t}\n\t\t}\n\t}\n"]);
      return E = function () {
        return t;
      }
        ,
        t;
    }
    function w() {
      var t = Object(r.a)(["\n\tpadding: 10px 10px 20px 11px;\n\twidth: 100%;\n\tword-break: break-word;\n"]);
      return w = function () {
        return t;
      }
        ,
        t;
    }
    function C() {
      var t = Object(r.a)(["\n\twidth: 100%;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tmargin-bottom: 20px;\n\tbackground-color: ", ";\n\tmin-height: 100%;\n"]);
      return C = function () {
        return t;
      }
        ,
        t;
    }
    var k = g.c.div(C(), (function (t) {
      return t.colors.leftPanel.itemBackground;
    }
    ))
      , T = g.c.div(w())
      , M = g.c.div(E(), (function (t) {
        return t.colors.leftPanel.textColor;
      }
      ), (function (t) {
        return t.colors.primaryText;
      }
      ), (function (t) {
        return t.colors.leftPanel.textColor;
      }
      ), (function (t) {
        return t.colors.primaryText;
      }
      ), (function (t) {
        return t.colors.panelBorder;
      }
      ))
      , S = g.c.div(j(), (function (t) {
        return t.colors.leftPanel.textColor;
      }
      ))
      , L = g.c.img(y())
      , I = g.c.img(O())
      , _ = g.c.div(x())
      , P = g.c.div(v())
      , A = n(264)
      , z = function (t) {
        var e = t.src
          , n = t.alt
          , r = t.onClick;
        return a.a.createElement(A.a, {
          onClick: r,
          style: {
            backgroundColor: "rgba(0,0,0, 0.6)"
          }
        }, a.a.createElement(I, {
          src: e,
          alt: n
        }));
      }
      , N = n(78)
      , D = n(299)
      , R = function () {
        var t = Object(b.a)(m.a.mark((function t(e, n) {
          var r, o, a, i;
          return m.a.wrap((function (t) {
            for (; ;)
              switch (t.prev = t.next) {
                case 0:
                  return r = new Date(n).toISOString().split("T")[0].replaceAll("-", ""),
                    o = null,
                    t.prev = 2,
                    t.next = 5,
                    h.a.fetchDailyAnalysis(e, r);
                case 5:
                  a = t.sent,
                    i = a.data,
                    (o = i["Forex Analysis (Daily)"]["Forex Analysis"]).Analysis = o.Analysis.replaceAll('color="black"', 'color="white"'),
                    o.Analysis = o.Analysis.replace(/style="background-color: .*;"/gm, ""),
                    t.next = 15;
                  break;
                case 12:
                  t.prev = 12,
                    t.t0 = t.catch(2),
                    console.log(t.t0);
                case 15:
                  return t.abrupt("return", o);
                case 16:
                case "end":
                  return t.stop();
              }
          }
          ), t, null, [[2, 12]]);
        }
        )));
        return function (e, n) {
          return t.apply(this, arguments);
        };
      }()
      , F = Object(i.c)((function (t) {
        return {
          colors: t.theme
        };
      }
      ))((function (t) {
        var e = t.name
          , n = t.date
          , r = t.colors
          , i = t.wrapperViewPort
          , c = t.id
          , l = t.onError
          , u = t.forceLoad
          , s = Object(o.useRef)(null)
          , d = Object(o.useRef)(null)
          , f = Object(o.useState)(null)
          , m = Object(p.a)(f, 2)
          , b = m[0]
          , h = m[1]
          , g = Object(o.useState)(!1)
          , v = Object(p.a)(g, 2)
          , x = v[0]
          , O = v[1]
          , y = Object(o.useState)(!1)
          , j = Object(p.a)(y, 2)
          , E = j[0]
          , w = j[1]
          , C = Object(o.useState)(!1)
          , I = Object(p.a)(C, 2)
          , P = I[0]
          , A = I[1];
        Object(o.useEffect)((function () {
          F();
        }
        ), [e, n]),
          Object(o.useEffect)((function () {
            s.current && (s.current.innerHTML = null === b || void 0 === b ? void 0 : b.Analysis);
          }
          ), [b]);
        var F = function () {
          d.current && !b && !x && function () {
            if (u && !E)
              return !0;
            var t = d.current.offsetTop;
            return 0 !== t && t < i.top + i.height;
          }() && (O(!0),
            R(e, n).then((function (t) {
              O(!1),
                t || (w(!0),
                  l()),
                h(t);
            }
            )));
        };
        return E ? a.a.createElement("div", null) : a.a.createElement(k, {
          id: c,
          colors: r,
          ref: d
        }, x && a.a.createElement(_, null, a.a.createElement(D.a, null)), b && a.a.createElement(a.a.Fragment, null, (null === b || void 0 === b ? void 0 : b.ImageURL) && a.a.createElement(a.a.Fragment, null, a.a.createElement(L, {
          src: null === b || void 0 === b ? void 0 : b.ImageURL,
          alt: "",
          onClick: function () {
            return A(!0);
          }
        }), P && a.a.createElement(z, {
          src: null === b || void 0 === b ? void 0 : b.ImageURL,
          alt: "",
          onClick: function () {
            return A(!1);
          }
        })), a.a.createElement(T, null, a.a.createElement(M, {
          colors: r,
          ref: s
        }), a.a.createElement(S, {
          colors: r
        }, N.a.format(n, "iii MMM dd u")))));
      }
      ))
      , B = function (t) {
        var e = t.selectedInstrument
          , n = t.forceLoad
          , r = ["EURUSD", "GBPUSD", "USDCAD", "USDJPY", "USDCHF", "AUDUSD", "NZDUSD"]
          , i = function (t) {
            var e = new Date
              , n = e.getTime() + 1e3 * e.getTimezoneOffset();
            return new Array(8).fill("").map((function (t, e) {
              return n - 864e5 * e;
            }
            )).reduce((function (e, n) {
              var r = t.map((function (t) {
                return {
                  name: t,
                  dateMs: n
                };
              }
              ));
              return e.concat(r);
            }
            ), []);
          }(r)
          , c = Object(o.useRef)(null)
          , l = Object(o.useState)({
            top: 0,
            height: 0
          })
          , u = Object(p.a)(l, 2)
          , s = u[0]
          , f = u[1]
          , m = Object(o.useState)([])
          , b = Object(p.a)(m, 2)
          , h = b[0]
          , g = b[1]
          , v = function () {
            if (c.current) {
              var t = c.current
                , e = t.scrollTop
                , n = t.clientHeight;
              f({
                top: e,
                height: n
              });
            }
          };
        return Object(o.useEffect)((function () {
          if (c) {
            var t = document.getElementById(e);
            null === t || void 0 === t || t.scrollIntoView({
              behavior: "smooth"
            });
          }
          v();
        }
        ), [c, h]),
          a.a.createElement(P, {
            className: "scrollable",
            ref: c,
            onScroll: v
          }, i.map((function (t, e) {
            var o = t.name
              , i = t.dateMs;
            return a.a.createElement(F, {
              forceLoad: n && e <= r.length,
              wrapperViewPort: s,
              id: o,
              key: e,
              name: o,
              date: i,
              onError: function () {
                v(),
                  g([].concat(Object(d.a)(h), [o + e]));
              }
            });
          }
          )));
      };
    function H() {
      var t = Object(r.a)(["daily analysis"]);
      return H = function () {
        return t;
      }
        ,
        t;
    }
    e.a = Object(i.c)((function (t) {
      return {
        leftPanel: t.registry.data.partnerConfig.leftPanel,
        instruments: t.trading.instruments,
        selectedInstrumentId: t.trading.selected
      };
    }
    ))((function (t) {
      var e, n = null === (e = t.instruments.find((function (e) {
        return e.instrumentID === t.selectedInstrumentId;
      }
      ))) || void 0 === e ? void 0 : e.name;
      return a.a.createElement(s.a, {
        colors: t.colors,
        adjustable: !1,
        isMobile: t.isMobile || !1
      }, a.a.createElement(c.a, {
        colors: t.colors
      }, Object(l.t)(H())), a.a.createElement(u.a, {
        colors: t.colors,
        onClick: t.onClose
      }), a.a.createElement(B, {
        forceLoad: t.forceLoad,
        selectedInstrument: n.replaceAll("/", "").replaceAll(" ", "")
      }));
    }
    ));
  },
  332: function (t, e, n) {
    "use strict";
    var r = n(58)
      , o = n(1)
      , a = n.n(o)
      , i = n(12)
      , c = n(89)
      , l = n(2)
      , u = n.n(l)
      , s = n(44)
      , d = n(33)
      , p = n(282)
      , f = n(272)
      , m = n(88);
    function b() {
      var t = Object(r.a)(["\n\tpadding: 20px;\n\tfont-weight: 500;\n\tfont-size: 14px;\n\tline-height: 16px;\n\n\tcolor: ", ";\n"]);
      return b = function () {
        return t;
      }
        ,
        t;
    }
    function h() {
      var t = Object(r.a)(["\n\twidth: 100%;\n\theight: 100%;\n"]);
      return h = function () {
        return t;
      }
        ,
        t;
    }
    function g() {
      var t = Object(r.a)(["\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\toutline: none;\n"]);
      return g = function () {
        return t;
      }
        ,
        t;
    }
    function v() {
      var t = Object(r.a)(["\n\tposition: relative;\n\twidth: 100%;\n\theight: ", ";\n\tpadding-bottom: ", ";\n"]);
      return v = function () {
        return t;
      }
        ,
        t;
    }
    function x() {
      var t = Object(r.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-around;\n\tbackground-color: ", ";\n"]);
      return x = function () {
        return t;
      }
        ,
        t;
    }
    function O() {
      var t = Object(r.a)(["\n\tdisplay: grid;\n\tgrid-template-columns: ", ";\n\tgrid-template-rows: auto;\n\tcolumn-gap: 10px;\n\trow-gap: 20px;\n\toverflow: auto;\n"]);
      return O = function () {
        return t;
      }
        ,
        t;
    }
    var y = m.c.div(O(), (function (t) {
      return !t.width || t.width < 620 ? "auto" : "auto auto";
    }
    ))
      , j = m.c.div(x(), (function (t) {
        return t.colors.leftPanel.itemBackground;
      }
      ))
      , E = m.c.div(v(), (function (t) {
        return "calc(100% * ".concat(t.ratio, ")");
      }
      ), (function (t) {
        return "calc(100% * ".concat(t.ratio, ")");
      }
      ))
      , w = m.c.div(g())
      , C = m.c.iframe(h())
      , k = m.c.div(b(), (function (t) {
        return t.colors.primaryText;
      }
      ))
      , T = function (t) {
        return u.a.createElement(E, {
          ratio: .5625
        }, u.a.createElement(w, null, u.a.createElement(C, {
          allowFullScreen: !0,
          src: t.src,
          frameBorder: "0"
        })));
      }
      , M = Object(d.c)((function (t) {
        return {
          colors: t.theme
        };
      }
      ))((function (t) {
        var e = t.article
          , n = t.colors;
        return u.a.createElement(j, {
          colors: n
        }, u.a.createElement(T, {
          src: e.video
        }), u.a.createElement(k, {
          colors: n
        }, e.title));
      }
      ))
      , S = n(15)
      , L = n(259);
    function I() {
      var t = Object(r.a)(["\n  width: 8px;\n  position: absolute;\n  cursor: ew-resize;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  background-color: ", ";\n\n  &:after {\n    content: '';\n    width: 4px;\n    height: 20px;\n    position: absolute;\n    cursor: ew-resize;\n    top: 50%;\n    border-left: 1px solid black;\n    border-right: 1px solid black;\n    transform: translate3d(0, -50%, 0);\n    margin: 0 2px;\n  }\n"]);
      return I = function () {
        return t;
      }
        ,
        t;
    }
    function _() {
      var t = Object(r.a)([""]);
      return _ = function () {
        return t;
      }
        ,
        t;
    }
    function P() {
      var t = Object(r.a)(["\n              .video-list {\n                grid-template-columns: auto !important;\n              }\n            "]);
      return P = function () {
        return t;
      }
        ,
        t;
    }
    function A() {
      var t = Object(r.a)(["\n  display: flex;\n  position: absolute;\n  z-index: 50;\n  top: 0;\n  bottom: 0;\n  padding: 0 10px 10px 11px;\n  max-width: ", ";\n  min-width: ", ";\n  left: ", "px;\n  width: ", ";\n  box-shadow: 0 2px 15px 0 #031420;\n  background-color: ", ";\n\n  .container {\n    flex: 1;\n    display: flex;\n    flex-direction: ", ";\n    overflow: auto;\n\n    > div {\n      display: flex;\n      flex-direction: column;\n      flex: 1;\n\n      ", ";\n    }\n  }\n"]);
      return A = function () {
        return t;
      }
        ,
        t;
    }
    var z = m.c.div(A(), (function (t) {
      return t.isMobile ? "auto" : "".concat(t.maxWidth, "px");
    }
    ), (function (t) {
      return t.isMobile ? "auto" : "".concat(t.minWidth, "px");
    }
    ), (function (t) {
      return t.isMobile ? "0" : "62";
    }
    ), (function (t) {
      return t.isMobile ? " 100%" : "300px";
    }
    ), (function (t) {
      return t.isMobile ? t.colors.background : t.colors.panelBackground + "E5";
    }
    ), (function (t) {
      return Object(L.a)(t.isMobile) ? "row" : "column";
    }
    ), (function (t) {
      return t.isMobile ? Object(m.b)(P()) : Object(m.b)(_());
    }
    ))
      , N = m.c.div(I(), (function (t) {
        return t.colors.leftPanel.itemBackground;
      }
      ))
      , D = function (t) {
        var e = t.colors
          , n = t.adjustable
          , r = t.children
          , o = t.isMobile
          , a = t.sidebarWidth
          , i = Object(l.useState)(null)
          , s = Object(c.a)(i, 2)
          , d = s[0]
          , p = s[1]
          , f = Object(l.useRef)(null);
        document.onmouseup = function () {
          return m();
        }
          ;
        var m = function () {
          document.onmousemove = null,
            p(null);
        };
        return Object(l.useEffect)((function () {
          f && a && a(f.current.clientWidth),
            d && (document.onmousemove = function (t) {
              var e = t.pageX;
              if (!(e > d.max || e < d.min)) {
                var n = e - d.offset;
                window.requestAnimationFrame((function () {
                  f.current && !o && (f.current.style.width = "".concat(n, "px"));
                }
                )),
                  a && a(n);
              }
            }
            );
        }
        ), [d]),
          u.a.createElement(z, {
            ref: f,
            minWidth: 300,
            maxWidth: 800,
            colors: e,
            isMobile: o
          }, n && u.a.createElement(N, {
            colors: e,
            onMouseDown: function (t) {
              return function (t) {
                var e, n = t.pageX - Number(null === (e = f.current) || void 0 === e ? void 0 : e.clientWidth);
                p({
                  offset: n,
                  max: n + 800,
                  min: n + 300
                });
              }(t);
            }
          }), r);
      };
    function R() {
      var t = Object(r.a)(["Video News"]);
      return R = function () {
        return t;
      }
        ,
        t;
    }
    function F() {
      var t = Object(r.a)(["Market session Brief"]);
      return F = function () {
        return t;
      }
        ,
        t;
    }
    e.a = Object(d.c)((function (t) {
      return {
        registry: t.registry,
        feed: t.registry.data.partnerConfig.leftPanel.videoNews.url
      };
    }
    ))((function (t) {
      var e, n, r, o, d = t.registry, m = null === d || void 0 === d || null === (e = d.data) || void 0 === e || null === (n = e.partnerConfig) || void 0 === n || null === (r = n.leftPanel) || void 0 === r || null === (o = r.dailyNews) || void 0 === o ? void 0 : o.enabled, b = Object(l.useState)([]), h = Object(c.a)(b, 2), g = h[0], v = h[1], x = Object(l.useState)(300), O = Object(c.a)(x, 2), j = O[0], E = O[1];
      return Object(l.useEffect)((function () {
        var e = {
          timestamp: Number(new Date)
        }
          , n = document.createElement("script");
        return n.type = "text/javascript",
          n.async = !0,
          n.innerHTML = '!function(e,t,i){if(void 0===e._dyntube_v1_init){e._dyntube_v1_init=!0;var a=t.createElement("script");a.type="text/javascript",a.async=!0,a.src="https://embed.dyntube.com/v1.0/dyntube.js",t.getElementsByTagName("head")[0].appendChild(a)}}(window,document);',
          document.body.appendChild(n),
          function () {
            var n = Object(i.a)(a.a.mark((function n() {
              var r;
              return a.a.wrap((function (n) {
                for (; ;)
                  switch (n.prev = n.next) {
                    case 0:
                      return n.next = 2,
                        S.a.getJson(t.feed, e);
                    case 2:
                      r = n.sent,
                        v(r ? r.items : []);
                    case 4:
                    case "end":
                      return n.stop();
                  }
              }
              ), n);
            }
            )));
            return function () {
              return n.apply(this, arguments);
            };
          }()(),
          function () {
            document.body.removeChild(n);
          };
      }
      ), [m]),
        u.a.createElement(D, {
          colors: t.colors,
          adjustable: !0,
          isMobile: t.isMobile || !1,
          sidebarWidth: E
        }, u.a.createElement(f.a, {
          colors: t.colors,
          onClick: t.onClose
        }), u.a.createElement("div", {
          className: "container scrollable"
        }, m && u.a.createElement("div", null, u.a.createElement(p.a, {
          colors: t.colors
        }, Object(s.t)(F())), u.a.createElement("div", {
          style: {
            paddingRight: 10,
            marginBottom: 10
          },
          "data-dyntube-key": "8kQCCclb0qJfHrcEtGg"
        })), u.a.createElement("div", null, u.a.createElement(p.a, {
          colors: t.colors
        }, Object(s.t)(R())), u.a.createElement(y, {
          width: j,
          className: "scrollable video-list"
        }, g.map((function (t, e) {
          return u.a.createElement(M, {
            article: t,
            key: e
          });
        }
        ))))));
    }
    ));
  },
  333: function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
      return V;
    }
    ));
    var r = n(89)
      , o = n(58)
      , a = n(2)
      , i = n.n(a)
      , c = n(33)
      , l = n(44)
      , u = n(45)
      , s = n(303)
      , d = n(19)
      , p = n(282)
      , f = n(295)
      , m = n(88);
    function b() {
      var t = Object(o.a)(["No Closed Positions"]);
      return b = function () {
        return t;
      }
        ,
        t;
    }
    function h() {
      var t = Object(o.a)(["No Open Positions"]);
      return h = function () {
        return t;
      }
        ,
        t;
    }
    function g() {
      var t = Object(o.a)(["\n\tdisplay: block;\n\tmargin: 68px auto 0;\n\ttext-align: center;\n\n\tdiv {\n\t\tdisplay: block;\n\t\twidth: 45px;\n\t\theight: 45px;\n\t\tmargin: 0 auto 10px;\n\t}\n\tspan {\n\t\tmargin-top: 10px;\n\t\tfont-size: 12px;\n\n\t\tcolor: ", ";\n\t}\n"]);
      return g = function () {
        return t;
      }
        ,
        t;
    }
    var v = m.c.div(g(), (function (t) {
      return t.textColor;
    }
    ))
      , x = function (t) {
        var e = t.color
          , n = t.open;
        return i.a.createElement(v, {
          textColor: e
        }, i.a.createElement("div", null, i.a.createElement("svg", {
          enableBackground: "new 0 0 60 60",
          viewBox: "0 0 60 60",
          xmlns: "http://www.w3.org/2000/svg",
          height: "100%",
          width: "100%",
          preserveAspectRatio: "xMidYMid meet",
          focusable: "false",
          fill: e
        }, i.a.createElement("path", {
          d: "m58.676 52.322-12.619-12.605c-1.495-1.495-3.787-1.703-5.517-.646l-6.916-6.909c3.084-3.419 4.979-7.927 4.979-12.88-.001-10.633-8.659-19.282-19.302-19.282s-19.301 8.649-19.301 19.282 8.658 19.282 19.301 19.282c4.966 0 9.484-1.899 12.908-4.987l6.896 6.889c-1.12 1.752-.921 4.165.603 5.616l12.61 12.597c1.706 1.702 4.493 1.787 6.245.109 1.806-1.731 1.982-4.7.113-6.466zm-56.675-33.04c0-9.528 7.761-17.281 17.301-17.281s17.301 7.752 17.301 17.281-7.761 17.281-17.301 17.281-17.301-7.753-17.301-17.281zm55.242 37.998c-.95 1.001-2.556.935-3.511-.019l-12.619-12.605c-2.179-2.347 1.246-5.803 3.531-3.525l12.638 12.625c1.02.966.924 2.561-.039 3.524z"
        }), i.a.createElement("path", {
          d: "m10.551 20.637c-.552 0-1 .447-1 1v3.839c0 .553.448 1 1 1s1-.447 1-1v-3.839c0-.552-.448-1-1-1z"
        }), i.a.createElement("path", {
          d: "m16.773 13.155c-.552 0-1 .447-1 1v11.322c0 .553.448 1 1 1s1-.447 1-1v-11.322c0-.553-.448-1-1-1z"
        }), i.a.createElement("path", {
          d: "m22.995 16.362c-.552 0-1 .447-1 1v8.115c0 .553.448 1 1 1s1-.447 1-1v-8.115c.001-.553-.447-1-1-1z"
        }), i.a.createElement("path", {
          d: "m29.217 12.086c-.552 0-1 .447-1 1v12.391c0 .553.448 1 1 1s1-.447 1-1v-12.391c.001-.553-.447-1-1-1z"
        }))), i.a.createElement("span", null, n ? Object(l.t)(h()) : Object(l.t)(b())));
      }
      , O = n(262)
      , y = n(327)
      , j = (n(414),
        n(272))
      , E = n(62)
      , w = n(292)
      , C = n(291)
      , k = n(287)
      , T = n(42)
      , M = n(78);
    function S() {
      var t = Object(o.a)(["Total P&L"]);
      return S = function () {
        return t;
      }
        ,
        t;
    }
    function L() {
      var t = Object(o.a)(["Expiry time"]);
      return L = function () {
        return t;
      }
        ,
        t;
    }
    function I() {
      var t = Object(o.a)(["\n\tmargin-bottom: 6px;\n\n\t.title_line {\n\t\tdisplay: flex;\n\t\twidth: 100%;\n\t\theight: 43px;\n\t\tmargin-bottom: 4px;\n\t\tbox-sizing: border-box;\n\t\tposition: relative;\n\t\tbackground-color: ", ";\n\t\t", "\n\n\t\t&:before {\n\t\t\tcontent: '';\n\t\t\theight: 100%;\n\t\t\tbackground-color: ", ";\n\t\t\twidth: 4px;\n\t\t}\n\n\t\t&:hover {\n\t\t\t", "\n\t\t}\n\n\t\t.expiry_time {\n\t\t\tflex: 1 1 auto;\n\t\t\tposition: relative;\n\t\t\ttext-align: left;\n\n\t\t\t.primary__label {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 6px;\n\t\t\t\tleft: 7px;\n\t\t\t\tfont-weight: 500;\n\t\t\t\tfont-size: 16px;\n\t\t\t\tcolor: ", ";\n\t\t\t}\n\t\t\t.expiry_count {\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tmargin-left: 10px;\n\t\t\t\twidth: 18px;\n\t\t\t\theight: 18px;\n\t\t\t\tbox-sizing: border-box;\n\t\t\t\tline-height: 18px;\n\t\t\t\ttext-align: center;\n\t\t\t\tborder: 1px solid ", ";\n\t\t\t\tborder-radius: 50%;\n\t\t\t\tfont-weight: bold;\n\t\t\t\tfont-size: 12px;\n\t\t\t\tletter-spacing: -0.2px;\n\t\t\t\tcolor: ", ";\n\t\t\t}\n\t\t\tspan {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 25px;\n\t\t\t\tleft: 7px;\n\t\t\t\tfont-size: 10px;\n\t\t\t\tletter-spacing: 0.00641px;\n\t\t\t\tcolor: #66707a;\n\t\t\t}\n\t\t}\n\n\t\t.total_pnl {\n\t\t\tflex: 1 1 auto;\n\t\t\tposition: relative;\n\t\t\tdiv {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 6px;\n\t\t\t\tright: 10px;\n\t\t\t\tfont-weight: 500;\n\t\t\t\tfont-size: 16px;\n\t\t\t\tcolor: ", ";\n\t\t\t}\n\t\t\tspan {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 25px;\n\t\t\t\tright: 10px;\n\t\t\t\tfont-size: 10px;\n\t\t\t\tletter-spacing: 0.00641px;\n\t\t\t\tcolor: #66707a;\n\t\t\t}\n\t\t}\n\t}\n\n\t.items_group {\n\t\tdisplay: block;\n\t}\n"]);
      return I = function () {
        return t;
      }
        ,
        t;
    }
    var _ = m.c.div(I(), (function (t) {
      return t.colors.expiryGroupBackground;
    }
    ), (function (t) {
      return t.selected ? "outline: 1px solid ".concat(t.colors.primary, ";") : "";
    }
    ), (function (t) {
      return t.selected ? t.colors.primary : t.colors.background;
    }
    ), (function (t) {
      return t.selected ? "" : "outline: 1px solid ".concat(t.colors.primary);
    }
    ), (function (t) {
      return t.colors.primaryText;
    }
    ), (function (t) {
      return t.colors.primary;
    }
    ), (function (t) {
      return t.colors.primary;
    }
    ), (function (t) {
      return t.colors.primary;
    }
    ))
      , P = function (t, e) {
        var n = 0;
        return t.forEach((function (t) {
          if (e[t.instrumentID]) {
            var r = e[t.instrumentID].last;
            if (r) {
              var o = function (t, e) {
                var n = e ? Object(w.e)(t, e) : -1;
                return Object(w.d)(t, n);
              }(t, r);
              n += o;
            }
          }
        }
        )),
          n;
      }
      , A = Object(c.c)((function (t) {
        return {
          quotes: t.quotes
        };
      }
      ), {
        actionSelectExpiry: T.d
      })((function (t) {
        var e, n = Object(r.a)(t.group, 1)[0], o = n.expiryTimestamp, a = t.group.length, c = P(t.group, t.quotes), u = function (t, e) {
          var n, r = null === (n = e[t.instrumentID]) || void 0 === n ? void 0 : n.last;
          return r && r ? Object(w.e)(t, r) : -1;
        }(n, t.quotes), s = Object(w.g)(u, t.colors);
        return i.a.createElement(_, {
          colors: t.colors,
          selected: t.selected
        }, i.a.createElement("div", {
          className: "title_line",
          onClick: function () {
            return t.actionSelectExpiry(t.selected ? null : o);
          }
        }, i.a.createElement("div", {
          className: "expiry_time"
        }, i.a.createElement("div", {
          className: "primary__label"
        }, (e = new Date(o),
          Object(C.a)(e, new Date) ? M.a.format(e, "HH:mm") : M.a.format(e, "LLL-d")), i.a.createElement("div", {
            className: "expiry_count"
          }, a)), i.a.createElement("span", {
            className: "secondary_label"
          }, Object(l.t)(L()))), i.a.createElement(f.i, {
            color: s
          }, i.a.createElement(f.m, {
            color: s
          }, i.a.createElement("span", null, t.formatCurrency(c)), i.a.createElement("span", {
            className: "label"
          }, Object(l.t)(S()))), i.a.createElement(k.a, {
            created: n.createdTimestamp,
            expiry: o,
            moneyState: u,
            colors: t.colors
          })), i.a.createElement(f.l, {
            colors: t.colors,
            opened: t.selected
          })), t.selected && i.a.createElement("div", {
            className: "items_group"
          }, t.children));
      }
      ))
      , z = Object(c.c)((function (t) {
        return {
          expiry: t.expiry.selected,
          groups: Object(E.a)(t),
          colors: t.theme,
          trades: t.trades,
          lockedTrades: t.trading.locked,
          quotes: t.quotes,
          tradeOperationsConfig: t.registry.data.tradeOperationsConfig,
          formatCurrency: Object(O.a)(t),
          formatStringCurrency: Object(O.c)(t),
          userInfo: t.account.userInfo
        };
      }
      ), {
        actionSelectExpiry: T.d,
        actionTradeSellBack: d.x,
        actionTradeHedge: d.w,
        actionTradeDoubleUp: d.v,
        actionRefrechTrades: d.q
      })((function (t) {
        var e = t.expiry
          , n = (t.isMobile,
            function (t) {
              var e = []
                , n = [];
              return t.forEach((function (t) {
                t.length > 1 ? e.push(t) : t[0] && n.push(t[0]);
              }
              )),
                [e, n];
            }(t.groups))
          , o = Object(r.a)(n, 2)
          , a = o[0]
          , c = o[1]
          , l = t.tradeOperationsConfig
          , u = l.sellbackInstruments
          , s = l.doubleupInstruments
          , d = function (e, n, r) {
            if (u.includes(n))
              if (t.isMobile)
                t.actionTradeSellBack(r, 10, 120);
              else {
                var o = e.nativeEvent.target.closest(".sidebar__panel");
                if (o) {
                  var a = o.getBoundingClientRect()
                    , i = a.left
                    , c = a.top;
                  t.actionTradeSellBack(r, i + V, c);
                } else
                  t.actionTradeSellBack(r, window.innerWidth / 2, window.innerHeight / 2);
              }
          }
          , p = function (t) {
            return !!e && t === e;
          };
        return i.a.createElement(i.a.Fragment, null, a.map((function (e, n) {
          return i.a.createElement(A, {
            colors: t.colors,
            selected: p(e[0].expiryTimestamp),
            key: n,
            group: e,
            formatCurrency: t.formatCurrency
          }, e.map((function (e, n) {
            console.log("Debug ~ file: GroupOpenPositions.tsx ~ line 127 ~ {group.map ~ position", e);
            var r = String(e.instrumentID);
            return i.a.createElement(w.b, {
              userID: t.userInfo.userID,
              isInGroup: !0,
              locked: t.lockedTrades.includes(e.tradeID),
              colors: t.colors,
              key: n,
              formatCurrency: t.formatCurrency,
              formatStringCurrency: t.formatStringCurrency,
              showOpened: !1,
              selected: !0,
              position: e,
              quote: t.quotes[e.instrumentID],
              showSellbackButton: u.includes(r),
              onSellBack: function (t) {
                return d(t, r, e);
              },
              onHedge: function () {
                return t.actionTradeHedge(e);
              },
              onDoubleUp: function () {
                return s.includes(r) && t.actionTradeDoubleUp(e);
              },
              actionSelectExpiry: function () { },
              actionRefrechTrades: t.actionRefrechTrades
            });
          }
          )));
        }
        )), c.map((function (e, n) {
          var r, o = String(e.instrumentID);
          return i.a.createElement(w.b, {
            userID: null === (r = t.userInfo) || void 0 === r ? void 0 : r.userID,
            isInGroup: !1,
            locked: t.lockedTrades.includes(e.tradeID),
            colors: t.colors,
            key: n,
            formatCurrency: t.formatCurrency,
            formatStringCurrency: t.formatStringCurrency,
            showOpened: 0 === n,
            selected: p(e.expiryTimestamp),
            position: e,
            quote: t.quotes[e.instrumentID],
            showSellbackButton: u.includes(o),
            onSellBack: function (t) {
              return d(t, o, e);
            },
            onHedge: function () {
              return t.actionTradeHedge(e);
            },
            onDoubleUp: function () {
              return s.includes(o) && t.actionTradeDoubleUp(e);
            },
            actionSelectExpiry: t.actionSelectExpiry,
            actionRefrechTrades: t.actionRefrechTrades
          });
        }
        )));
      }
      ))
      , N = n(281);
    function D() {
      var t = Object(o.a)(["load more"]);
      return D = function () {
        return t;
      }
        ,
        t;
    }
    function R() {
      var t = Object(o.a)(["Showing last ", ""]);
      return R = function () {
        return t;
      }
        ,
        t;
    }
    function F() {
      var t = Object(o.a)(["Positions"]);
      return F = function () {
        return t;
      }
        ,
        t;
    }
    function B() {
      var t = Object(o.a)(["CLOSED POSITIONS"]);
      return B = function () {
        return t;
      }
        ,
        t;
    }
    function H() {
      var t = Object(o.a)(["OPEN POSITIONS"]);
      return H = function () {
        return t;
      }
        ,
        t;
    }
    var V = 364;
    e.b = Object(c.c)((function (t) {
      return {
        trades: t.trades,
        selectedTrade: t.trades.selected,
        selectedInstrument: Number(t.trading.selected),
        formatCurrency: Object(O.a)(t),
        formatStringCurrency: Object(O.c)(t),
        canLoadMore: t.trades.currentPage < t.trades.totalPages,
        sidebarProps: t.sidebar.props
      };
    }
    ), {
      actionTradeSellBack: d.x,
      actionTradeHedge: d.w,
      actionTradeDoubleUp: d.v,
      actionLoadMoreClosedTradesRequest: d.o
    })((function (t) {
      var e, n = (null === (e = t.sidebarProps) || void 0 === e ? void 0 : e.tab) || Number(t.selectedTrade && !Object(u.isNil)(t.selectedTrade.closedPrice)), o = [Object(l.t)(H()), Object(l.t)(B())], c = Object(a.useState)(n), d = Object(r.a)(c, 2), m = d[0], b = d[1];
      Object(a.useEffect)((function () {
        b(n);
      }
      ), [t.sidebarProps]);
      var h = 0 === m
        , g = h ? t.trades.open.length : t.trades.closed.length
        , v = t.trades.closed.length;
      return i.a.createElement(N.a, {
        colors: t.colors,
        isMobile: t.isMobile,
        adjustable: !1
      }, i.a.createElement(p.a, {
        colors: t.colors
      }, Object(l.t)(F())), i.a.createElement(j.a, {
        colors: t.colors,
        onClick: t.onClose
      }), i.a.createElement(s.a, {
        value: m,
        tabs: o,
        onChange: b
      }), i.a.createElement(f.b, {
        colors: t.colors,
        className: "scrollable"
      }, i.a.createElement(f.f, null, 0 === g ? i.a.createElement(x, {
        open: h,
        color: t.colors.primaryText
      }) : h ? i.a.createElement(z, {
        isMobile: t.isMobile
      }) : t.trades.closed.map((function (e, n) {
        return i.a.createElement(y.a, {
          isOpen: t.selectedTrade && t.selectedTrade.tradeID === e.tradeID,
          colors: t.colors,
          key: n,
          selected: Number(e.instrumentID) === t.selectedInstrument,
          formatCurrency: t.formatCurrency,
          formatStringCurrency: t.formatStringCurrency,
          position: e
        });
      }
      ))), !h && t.trades.closed.length > 19 && i.a.createElement("div", {
        className: "positions-actions"
      }, i.a.createElement("span", null, Object(l.t)(R(), v)), t.canLoadMore && i.a.createElement("div", {
        className: "positions_load-more",
        onClick: t.actionLoadMoreClosedTradesRequest
      }, Object(l.t)(D())))));
    }
    ));
  },
  334: function (t, e, n) {
    "use strict";
    var r = n(89)
      , o = n(58)
      , a = n(2)
      , i = n.n(a)
      , c = n(44)
      , l = n(33)
      , u = n(282)
      , s = n(303)
      , d = n(1)
      , p = n.n(d)
      , f = n(12)
      , m = n(304);
    function b() {
      var t = Object(o.a)(["Read More"]);
      return b = function () {
        return t;
      }
        ,
        t;
    }
    function h() {
      var t = Object(o.a)(["Read Less"]);
      return h = function () {
        return t;
      }
        ,
        t;
    }
    var g = Object(l.c)((function (t) {
      return {
        colors: t.theme
      };
    }
    ))((function (t) {
      var e = t.article
        , n = t.select
        , o = t.selected
        , l = t.colors
        , u = Object(a.useState)(!1)
        , s = Object(r.a)(u, 2)
        , d = s[0]
        , p = s[1];
      return i.a.createElement(m.c, null, e.image && i.a.createElement(m.e, {
        visible: d,
        src: e.image,
        onLoad: function () {
          return p(!0);
        },
        alt: ""
      }), i.a.createElement(m.a, {
        colors: l
      }, i.a.createElement(m.g, {
        colors: l
      }, e.title), i.a.createElement(m.d, {
        colors: l
      }, o && i.a.createElement(i.a.Fragment, null, e.content), !o && i.a.createElement(i.a.Fragment, null, e.description)), o && i.a.createElement(m.b, {
        colors: l,
        onClick: function () {
          return n(null);
        }
      }, Object(c.t)(h())), !o && i.a.createElement(m.b, {
        colors: l,
        onClick: function () {
          return n(e.id);
        }
      }, Object(c.t)(b()))));
    }
    ))
      , v = n(15)
      , x = function (t) {
        var e = Object(a.useState)([])
          , n = Object(r.a)(e, 2)
          , o = n[0]
          , c = n[1]
          , l = Object(a.useState)(null)
          , u = Object(r.a)(l, 2)
          , s = u[0]
          , d = u[1];
        return Object(a.useEffect)((function () {
          var e = {
            timestamp: Number(new Date)
          };
          (function () {
            var n = Object(f.a)(p.a.mark((function n() {
              var r;
              return p.a.wrap((function (n) {
                for (; ;)
                  switch (n.prev = n.next) {
                    case 0:
                      return c([]),
                        d(null),
                        n.next = 4,
                        v.a.getJson(t.feed, e);
                    case 4:
                      r = n.sent,
                        c(r[0] ? r[0].articles : []);
                    case 6:
                    case "end":
                      return n.stop();
                  }
              }
              ), n);
            }
            )));
            return function () {
              return n.apply(this, arguments);
            };
          }
          )()();
        }
        ), [t.feed]),
          i.a.createElement(m.f, {
            className: "scrollable"
          }, o.map((function (t, e) {
            return i.a.createElement(g, {
              article: t,
              key: e,
              selected: s === t.id,
              select: function (t) {
                return d(t);
              }
            });
          }
          )));
      }
      , O = n(272)
      , y = n(281);
    function j() {
      var t = Object(o.a)(["News"]);
      return j = function () {
        return t;
      }
        ,
        t;
    }
    function E() {
      var t = Object(o.a)(["CRYPTO"]);
      return E = function () {
        return t;
      }
        ,
        t;
    }
    function w() {
      var t = Object(o.a)(["GENERAL"]);
      return w = function () {
        return t;
      }
        ,
        t;
    }
    e.a = Object(l.c)((function (t) {
      return {
        leftPanel: t.registry.data.partnerConfig.leftPanel
      };
    }
    ))((function (t) {
      var e = t.leftPanel.cryptoNews.enabled && t.leftPanel.news.enabled
        , n = [Object(c.t)(w()), Object(c.t)(E())]
        , o = Object(a.useState)(0)
        , l = Object(r.a)(o, 2)
        , d = l[0]
        , p = l[1]
        , f = 0 === d ? t.leftPanel.news.url : t.leftPanel.cryptoNews.url;
      return i.a.createElement(y.a, {
        colors: t.colors,
        adjustable: !1,
        isMobile: t.isMobile || !1
      }, i.a.createElement(u.a, {
        colors: t.colors
      }, Object(c.t)(j())), i.a.createElement(O.a, {
        colors: t.colors,
        onClick: t.onClose
      }), e && i.a.createElement(s.a, {
        value: d,
        tabs: n,
        onChange: p
      }), i.a.createElement(x, {
        feed: f
      }));
    }
    ));
  },
  335: function (t, e, n) {
    "use strict";
    var r = n(1)
      , o = n.n(r)
      , a = n(12)
      , i = n(89)
      , c = n(58)
      , l = n(2)
      , u = n.n(l)
      , s = n(44)
      , d = n(33)
      , p = n(282)
      , f = n(272)
      , m = n(88);
    function b() {
      var t = Object(c.a)(["\n  display: flex;\n  flex-direction: row;\n  background-color: #06141f;\n  border-radius: 4px;\n  width: 285px;\n\n  .rank {\n    width: 40px;\n    height: 40px;\n    border-top-left-radius: 4px;\n    border-bottom-left-radius: 4px;\n    font-size: 16px;\n    font-weight: 700;\n    color: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: #1c2b35;\n    margin-right: 10px;\n\n    &.rank_1 {\n      background: #ffcc00;\n      color: #06141f;\n    }\n\n    &.rank_2 {\n      background: #8491a3;\n    }\n\n    &.rank_3 {\n      background: #a3804b;\n    }\n  }\n\n  .name {\n    display: flex;\n    align-items: center;\n    min-width: 100px;\n    color: white;\n    font-size: 12px;\n    font-weight: 700;\n    margin-right: 10px;\n  }\n\n  .pnl {\n    flex: 1;\n    color: ", ";\n    font-size: 12px;\n    font-weight: 700;\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    margin-right: 20px;\n  }\n"]);
      return b = function () {
        return t;
      }
        ,
        t;
    }
    function h() {
      var t = Object(c.a)(["\n  display: flex;\n  flex-direction: row;\n  background-color: #06141f;\n  margin-bottom: 5px;\n  border-radius: 4px;\n\n  .rank {\n    width: 40px;\n    height: 40px;\n    border-top-left-radius: 4px;\n    border-bottom-left-radius: 4px;\n    font-size: 16px;\n    font-weight: 700;\n    color: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: #1c2b35;\n    margin-right: 10px;\n\n    &.rank_1 {\n      background: #ffcc00;\n      color: #06141f;\n    }\n\n    &.rank_2 {\n      background: #8491a3;\n    }\n\n    &.rank_3 {\n      background: #a3804b;\n    }\n  }\n\n  .name {\n    display: flex;\n    align-items: center;\n    min-width: 100px;\n    color: white;\n    font-size: 12px;\n    font-weight: 700;\n    margin-right: 10px;\n  }\n\n  .pnl {\n    flex: 1;\n    color: ", ";\n    font-size: 12px;\n    font-weight: 700;\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    margin-right: 20px;\n  }\n"]);
      return h = function () {
        return t;
      }
        ,
        t;
    }
    function g() {
      var t = Object(c.a)(["\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 6px;\n  margin-top: 15px;\n\n  .rank {\n    width: 40px;\n    font-size: 11px;\n    color: ", ";\n    margin-right: 10px;\n    display: flex;\n    justify-content: center;\n  }\n\n  .name {\n    min-width: 100px;\n    font-size: 11px;\n    color: ", ";\n    margin-right: 10px;\n  }\n\n  .pnl {\n    flex: 1;\n    font-size: 11px;\n    color: ", ";\n    display: flex;\n    justify-content: flex-end;\n    margin-right: 20px;\n  }\n"]);
      return g = function () {
        return t;
      }
        ,
        t;
    }
    function v() {
      var t = Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-right: -5px;\n  height: 100%;\n  overflow: auto;\n"]);
      return v = function () {
        return t;
      }
        ,
        t;
    }
    var x = m.c.div(v())
      , O = m.c.div(g(), (function (t) {
        return t.colors.secondaryText;
      }
      ), (function (t) {
        return t.colors.secondaryText;
      }
      ), (function (t) {
        return t.colors.secondaryText;
      }
      ))
      , y = m.c.div(h(), (function (t) {
        return t.colors.primary;
      }
      ))
      , j = (m.c.div(b(), (function (t) {
        return t.colors.primary;
      }
      )),
        Object(d.c)((function (t) {
          return {};
        }
        ))((function (t) {
          var e = t.item
            , n = t.index
            , r = t.colors
            , o = (t.isMobile,
              e.firstName)
            , a = e.sumPnl;
          return u.a.createElement(y, {
            colors: r
          }, u.a.createElement("div", {
            className: "rank rank_".concat(n < 4 ? n : "")
          }, n), u.a.createElement("div", {
            className: "name"
          }, o), u.a.createElement("div", {
            className: "pnl"
          }, null === a || isNaN(a) ? "" : Number(a).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")));
        }
        )))
      , E = n(15)
      , w = n(303)
      , C = n(281)
      , k = n(45);
    function T() {
      var t = Object(c.a)(["Load more"]);
      return T = function () {
        return t;
      }
        ,
        t;
    }
    function M() {
      var t = Object(c.a)(["Profit"]);
      return M = function () {
        return t;
      }
        ,
        t;
    }
    function S() {
      var t = Object(c.a)(["Name"]);
      return S = function () {
        return t;
      }
        ,
        t;
    }
    function L() {
      var t = Object(c.a)(["Rank"]);
      return L = function () {
        return t;
      }
        ,
        t;
    }
    function I() {
      var t = Object(c.a)(["Trader\u2019s Performance"]);
      return I = function () {
        return t;
      }
        ,
        t;
    }
    function _() {
      var t = Object(c.a)(["THIS MONTH"]);
      return _ = function () {
        return t;
      }
        ,
        t;
    }
    function P() {
      var t = Object(c.a)(["THIS WEEK"]);
      return P = function () {
        return t;
      }
        ,
        t;
    }
    function A() {
      var t = Object(c.a)(["TODAY"]);
      return A = function () {
        return t;
      }
        ,
        t;
    }
    function z() {
      var t = Object(c.a)(["\n  color: white;\n  cursor: pointer;\n  display: inline-block;\n  background-color: #263346;\n  border-radius: 3px;\n  padding: 8px 20px;\n  font-size: 14px;\n  font-weight: bold;\n"]);
      return z = function () {
        return t;
      }
        ,
        t;
    }
    var N = m.c.span(z());
    e.a = Object(d.c)((function (t) {
      return {};
    }
    ))((function (t) {
      var e = Object(l.useState)([])
        , n = Object(i.a)(e, 2)
        , r = n[0]
        , c = n[1]
        , d = Object(l.useState)([])
        , m = Object(i.a)(d, 2)
        , b = m[0]
        , h = m[1]
        , g = Object(l.useState)(1)
        , v = Object(i.a)(g, 2)
        , y = v[0]
        , z = v[1]
        , D = Object(l.useState)(1)
        , R = Object(i.a)(D, 2)
        , F = R[0]
        , B = R[1]
        , H = Object(l.useState)(0)
        , V = Object(i.a)(H, 2)
        , W = V[0]
        , U = V[1]
        , G = Object(l.useState)(!1)
        , Y = Object(i.a)(G, 2)
        , q = Y[0]
        , Z = Y[1]
        , X = [Object(s.t)(A()), Object(s.t)(P()), Object(s.t)(_())]
        , Q = Object(l.useRef)(null);
      Object(l.useEffect)((function () {
        return clearTimeout(Q.current),
          J(),
          Q.current = setTimeout((function () {
            J();
          }
          ), 3e5),
          function () {
            return clearTimeout(Q.current);
          };
      }
      ), [W]);
      var J = function () {
        var t = Object(a.a)(o.a.mark((function t() {
          var e, n;
          return o.a.wrap((function (t) {
            for (; ;)
              switch (t.prev = t.next) {
                case 0:
                  return t.next = 2,
                    E.a.fetchLeaderBoard(K());
                case 2:
                  e = t.sent,
                    Object(k.isEmpty)(e) && (e = []),
                    c(e),
                    n = Math.ceil(e.length / 10),
                    B(n);
                case 7:
                case "end":
                  return t.stop();
              }
          }
          ), t);
        }
        )));
        return function () {
          return t.apply(this, arguments);
        };
      }()
        , K = function () {
          switch (W) {
            case 0:
              return "day";
            case 1:
              return "week";
            case 2:
              return "month";
          }
        };
      return Object(l.useEffect)((function () {
        if (y <= F) {
          var t = 10 * y;
          t > r.length && (t = r.length);
          var e = r.slice().splice(0, t);
          h(e),
            Z(y < F);
        }
      }
      ), [r, y, F]),
        u.a.createElement(C.a, {
          colors: t.colors,
          adjustable: !1,
          isMobile: t.isMobile || !1
        }, u.a.createElement(p.a, {
          colors: t.colors
        }, Object(s.t)(I())), u.a.createElement(f.a, {
          colors: t.colors,
          onClick: t.onClose
        }), u.a.createElement(w.a, {
          value: W,
          tabs: X,
          onChange: U
        }), u.a.createElement(x, {
          className: "scrollable"
        }, u.a.createElement(O, {
          colors: t.colors
        }, u.a.createElement("span", {
          className: "rank"
        }, Object(s.t)(L())), u.a.createElement("span", {
          className: "name"
        }, Object(s.t)(S())), u.a.createElement("span", {
          className: "pnl"
        }, Object(s.t)(M()))), u.a.createElement("div", null, Object(k.isArray)(b) && b.map((function (e, n) {
          return u.a.createElement(j, {
            item: e,
            index: n + 1,
            colors: t.colors,
            isMobile: t.isMobile || !1
          });
        }
        ))), q && u.a.createElement("div", {
          style: {
            textAlign: "center",
            marginTop: 20
          }
        }, u.a.createElement(N, {
          onClick: function () {
            return z(y + 1);
          }
        }, Object(s.t)(T())))));
    }
    ));
  },
  336: function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
      return b;
    }
    ));
    var r = n(106)
      , o = n(39)
      , a = n(80)
      , i = n(44)
      , c = n(78)
      , l = n(81)
      , u = n(20)
      , s = n(15)
      , d = n(432)
      , p = n(437)
      , f = n(2)
      , m = n.n(f)
      , b = function (t) {
        var e = Object.keys(t.langs)
          , f = function (e) {
            t.onSelect(),
              function (t) {
                if (console.log("Debug ~ file: language.ts ~ line 11 ~ onLanguageSelect ~ selectedLang", t),
                  r.a.setLanguage(t),
                  o.a.setLanguage(t),
                  a.a) {
                  console.log("Debug ~ file: language.ts ~ line 21 ~ onLanguageSelect ~ langFromURL", a.a);
                  var e = new URLSearchParams(window.location.search);
                  e.set("lang", t),
                    window.location.search = e.toString();
                } else
                  try {
                    var d = n(124)("./".concat(t, ".po.json"));
                    Object(i.addLocale)(t, d),
                      Object(i.useLocale)(t),
                      c.a.setLocale(t),
                      Object(s.b)(t),
                      l.b.dispatch(Object(u.i)());
                  } catch (f) {
                    console.warn("missing locale: ".concat(t, ", falling back to english locale"));
                    var p = n(94);
                    Object(i.addLocale)("en", p),
                      Object(i.useLocale)("en"),
                      c.a.setLocale("en"),
                      Object(s.b)("en"),
                      l.b.dispatch(Object(u.i)());
                  }
              }(e);
          };
        return m.a.createElement(d.a, null, e.map((function (e) {
          var n = t.langs[e]
            , r = n.name
            , o = n.url;
          return m.a.createElement(p.a, {
            key: e,
            onClick: function () {
              return f(o);
            },
            leftAddon: m.a.createElement("img", {
              src: "".concat("", "/static/icons/languages/").concat(e, ".svg"),
              alt: "switch to ".concat(r)
            }),
            leftAddonType: "avatar"
          }, r);
        }
        )));
      };
  },
  341: function (t, e, n) {
    t.exports = n.p + "static/media/icon-close.eaf6c724.svg";
  },
  353: function (t, e, n) {
    t.exports = n.p + "static/media/icon-favorites.333d621a.svg";
  },
  354: function (t, e, n) {
    t.exports = n.p + "static/media/icon-favorites-active.ae33f3de.svg";
  },
  366: function (t, e, n) { },
  367: function (t, e, n) { },
  368: function (t, e, n) {
    t.exports = n.p + "static/media/arrow-expand.12c28ddb.svg";
  },
  369: function (t, e, n) {
    t.exports = n.p + "static/media/arrow-collapse.371f01e9.svg";
  },
  372: function (t, e, n) { },
  373: function (t, e, n) { },
  374: function (t, e, n) { },
  384: function (t, e, n) {
    t.exports = n.p + "static/media/close.0a30c118.svg";
  },
  385: function (t, e, n) {
    t.exports = n.p + "static/media/slider-left.a05fcb34.svg";
  },
  386: function (t, e, n) {
    t.exports = n.p + "static/media/slider-right.3cafbc28.svg";
  },
  387: function (t, e, n) {
    t.exports = n.p + "static/media/icon-close.fc1e53e4.svg";
  },
  388: function (t, e, n) {
    t.exports = n.p + "static/media/account_balance.2c9cf770.svg";
  },
  389: function (t, e, n) {
    t.exports = n.p + "static/media/settings.d425382d.svg";
  },
  390: function (t, e, n) {
    t.exports = n.p + "static/media/account_balance_wallet.0ad463d2.svg";
  },
  391: function (t, e, n) {
    t.exports = n.p + "static/media/compare_arrows.d5cb8ba8.svg";
  },
  392: function (t, e, n) {
    t.exports = n.p + "static/media/add_circle_outline.35af92ae.svg";
  },
  393: function (t, e, n) {
    t.exports = n.p + "static/media/security.74b2e2d7.svg";
  },
  394: function (t, e, n) {
    t.exports = n.p + "static/media/logout.536a2ada.svg";
  },
  395: function (t, e, n) {
    t.exports = n.p + "static/media/education.82c2f14d.svg";
  },
  414: function (t, e, n) { }
}]);
//# sourceMappingURL=1.a2786e58.chunk.js.map
