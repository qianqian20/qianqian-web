<template>
    <div id="en-charts" style="height:400px"></div>
</template>

<script>
var echarts = require('echarts/lib/echarts')
// 引入柱状图
require('echarts/lib/chart/bar')
require('echarts/lib/chart/line')
require('echarts/lib/chart/pie')
// 引入提示框和标题组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')

const optionsInit = type => {
  let options = {
    bar: {
      color: '#c23531',
      legend: {
        data: []
      },
      tooltip: {
        formatter: '{a}<br/>{b}:{c}',
        trigger: 'item'
      },
      xAxis: {
        type: 'category',
        data: []
      },
      yAxis: {
        type: 'value',
        data: []
      },
      series: [{ type: 'bar', name: '' }]
    }
  }
  return type ? options[type] : {}
}

export default {
  name: 'en-charts',
  props: {
    value: {
      type: Array,
      required: true
    },
    type: {
      type: String,
      default: 'bar'
    },
    title: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      chart: null
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
      if (type === 'bar') options.xAxis.data = name
      options.series[0].data = type === 'bar' ? value : this.value
      return options
    },
    init () {
      let chart = echarts.init(this.$el, this.theme)
      this.chart = chart
      this.setOptions()
    },
    setOptions () {
      this.chart.setOption(this.getOptions(), true)
    }
  },
  mounted () {
    this.init()
  }
}
</script>
