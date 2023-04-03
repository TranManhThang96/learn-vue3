<template>
  <div class="stock">
    <div ref="chart" class="chart" id="chart-container"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Highcharts from 'highcharts'
import Stock from 'highcharts/modules/stock'
Stock(Highcharts)
import axios from 'axios'

export default defineComponent({
  data() {
    return {
      plotLineValue: 100,
      plotLines: [],
      chart: null
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    addPlotLine(axis, plotLine) {
      axis.addPlotLine(plotLine)
    },

    removePlotLine(axis, id) {
      axis.removePlotLine(id)
    },

    getPlotLineOrBand(axis, id) {
      return axis.plotLinesAndBands.find((pl) => pl.id === id)
    },

    async getData() {
      const { data } = await axios.get(`https://demo-live-data.highcharts.com/aapl-c.json`)

      this.chart = Highcharts.stockChart(this.$refs.chart, {
        rangeSelector: {
          enabled: false
        },

        chart: {
          margin: 0,
          marginRight: 80,
          plotBorderWidth: 1,
          pinchType: 'x',
          zoomYype: null,
          resetZoomButton: {
            theme: {
              display: 'none'
            }
          },
          plotBackgroundColor: {
            linearGradient: [0, 174, 0, window.innerHeight],
            stops: [
              [0, 'rgba(0, 0, 0, 0)'],
              [1, 'rgba(0, 0, 0, 0.4)']
            ]
          },
          spacingBottom: 30
        },

        title: {
          text: 'AAPL Stock Price'
        },

        xAxis: {
          gridLineWidth: 1,
          tickWidth: 0, // ẩn đường kẻ ngang của tick
          plotLines: [
            {
              color: '#FF0000',
              dashStyle: 'dash',
              width: 2,
              value: 120,
              label: {
                text: 'test'
              }
            }
          ]
        },
        yAxis: {
          plotLines: [
            {
              id: 'yAxis-1',
              value: 125,
              width: 1,
              color: 'green',
              dashStyle: 'dash',
              label: {
                text: 'Latest value',
                align: 'right',
                y: 12,
                x: 0
              }
            }
          ]
        },

        series: [
          {
            name: 'AAPL Stock Price',
            data: data,
            type: 'area',
            threshold: null,
            tooltip: {
              valueDecimals: 2
            },
            animation: true,
            fillColor: {
              linearGradient: {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1
              },
              stops: [
                [0, Highcharts.getOptions().colors[0]],
                [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
              ]
            }
          }
        ],
        stockTools: {
          gui: {
            enabled: false
          }
        },
        tooltip: {
          enabled: true,
          followTouchMove: false,
          borderWidth: 0
        },

        scrollbar: {
          enabled: false
        },

        navigator: {
          enabled: true,
          series: {
            lineColor: 'red'
          },
          xAxis: {
            gridLineWidth: 0,
            labels: {
              enabled: true
            }
          },
          height: 52,
          outlineWidth: 0,
          margin: 0,
          handles: {
            width: 7,
            height: 18,
            borderRadius: 6
          },
          maskFill: 'rgb(28, 29, 30)',
          maskInside: false
        },

        exporting: {
          enabled: false
        },
        credits: {
          enabled: false
        }
      })

      if (this.chart) {
        setInterval(() => {
          const axis = this.chart.yAxis[0]
          const plotLine = this.getPlotLineOrBand(axis, 'yAxis-1')
          console.log('plotLine', plotLine.options.value)
          plotLine.options.value = plotLine.options.value + 2
          this.chart.redraw()
        }, 1000)
      }
    }
  }
})
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }

  .highcharts-navigator-mask-inside {
    stroke-width: 1px;
    stroke: #fff;
  }

  .highcharts-navigator-mask-outside {
    opacity: 0.6;
  }

  .stock {
    background-color: rgb(29, 30, 31);
    border-right: 1px solid rgb(53, 53, 53);
    border-bottom: 1px solid rgb(53, 53, 53);
  }

  #chart-container {
    flex: 1 1 auto;
    visibility: visible !important;
    position: relative;
    overflow: hidden;
  }
}
</style>
