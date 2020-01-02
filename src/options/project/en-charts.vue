<template>
    <div id="en-charts" style="height:400px"></div>
</template>

<script>
var echarts = require('echarts/lib/echarts')
// 引入柱状图
require('echarts/lib/chart/bar')
require('echarts/lib/chart/line')
require('echarts/lib/chart/pie')
require('echarts/lib/chart/scatter')
// 引入提示框和标题组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')

const optionsInit = type => {
  let options = {
    bar: {
      title: {
        text: '',
        x: 'center'
      },
      color: '#c23531',
      legend: { // 可以通过点击图例控制哪些系列不显示
        data: []
      },
      tooltip: {
        formatter: '{a}<br/>{b}:{c}',
        trigger: 'item',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      xAxis: {
        type: 'category',
        data: []
      },
      yAxis: {
        type: 'value'
      },
      series: [{ type: 'bar', name: '' }]
    },
    pie: {
      title: {
        text: '',
        x: 'center'
      },
      color: ['#48dbfb', '#1dd1a1', '#f368e0', '#ff9f43', '#ee5253', '#0abde3', '#10ac84', '#00d2d3', '#54a0ff', '#5f27cd', '#c8d6e5', '#576574', '#01a3a4', '#2e86de', '#341f97', '#8395a7', '#222f3e', '#ff9ff3', '#feca57', '#ff6b6b'],
      legend: { // 可以通过点击图例控制哪些系列不显示
        // type: 'scroll',
        data: [],
        orient: 'vertical',
        left: 'left'
      },
      tooltip: {
        formatter: '{a} <br/>{b} : {c} ({d}%)',
        trigger: 'item',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
          colorLightness: [0, 1]
        }
      },
      series: [
        {
          name: '',
          type: 'pie',
          radius: '50%',
          center: ['50%', '60%'],
          data: [],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    },
    line: {
      title: {
        text: '',
        x: 'center'
      },
      clolr: '#c23531',
      legend: {
        data: []
      },
      tooltip: {
        formatter: '{a}<br/>{b}:{c}',
        trigger: 'item',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
          type: 'line' // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      xAxis: {
        type: 'category',
        data: []
      },
      yAxis: {
        type: 'value'
      },
      series: [{ type: 'line', name: '' }]
    },
    scatter: {
      title: {
        text: '',
        x: 'center'
      },
      clolr: '#c23531',
      legend: {
        data: []
      },
      tooltip: {
        formatter: '{a}<br/>{b}:{c}',
        trigger: 'item',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
          type: 'line' // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      xAxis: {
        splitLine: {
          lineStyle: {
            type: 'dashed'
          }
        },
        type: 'category',
        data: []
      },
      yAxis: {
        splitLine: {
          lineStyle: {
            type: 'dashed'
          }
        },
        scale: true,
        type: 'value'
      },
      series: [{ type: 'scatter', name: '' }]
    }
  }
  return type ? options[type] : {}
}

export default {
  name: 'en-charts',
  props: {
    value: {
      type: Array,
      default: () => {
        return []
      }
    },
    autoresize: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: 'bar'
    },
    title: {
      type: String,
      options: Object
    }
  },
  data () {
    return {
      chart: null,
      theme: 'light',
      lastArea: 0
    }
  },

  mounted () {
    this.init()
  },
  watch: {
    value: {
      handler (newVal, oldVal) {
        this.setOptions()
      },
      deep: true
    }
  },
  methods: {
    getOptions () {
      let type = this.type
      let title = this.title
      let name = this.value.map(item => item.name)
      let value = this.value.map(item => item.value)
      let options = this.options || optionsInit(type)
      options.legend.data = name
      options.series[0].name = title || ''
      options.title.text = title || ''
      if (type === 'bar' || type === 'line' || type === 'scatter') options.xAxis.data = name
      options.series[0].data = type === 'bar' || type === 'line' || type === 'scatter' ? value : this.value
      return options
    },

    resize () {
      this.chart && this.chart.resize()
    },

    getArea () {
      this.lastArea = this.$el.offsetWidth * this.$el.offsetHeight
    },

    init () {
      let chart = echarts.init(this.$el, this.theme)
      this.chart = chart

      if (this.autoresize) {
        const _this = this
        this.getArea()
        window.addEventListener('resize', function () {
          _this.getArea()
          _this.resize()
        })
      }

      this.setOptions()
    },

    setOptions () {
      this.chart.setOption(this.getOptions(), true)
    },

    destroy () {
      if (this.autoresize) {
        window.removeEventListener('resize', this.resize)
      }
      this.chart.clear()
      this.chart = null
    }
  },
  beforeDestroy () {
    if (this.chart) this.destroy()
  }
}
</script>
