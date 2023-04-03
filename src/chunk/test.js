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