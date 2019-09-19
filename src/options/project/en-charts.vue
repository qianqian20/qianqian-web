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

var myChart = echarts.init(document.getElementById('en-charts'))

myChart.setOption({
  name: this.name,
  type: 'pie',
  radius: '55%',
  data: this.value
})

export default {
  name: 'en-charts',
  props: {
    value: {
      type: Array,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  data () {
    return {}
  }
}
</script>
